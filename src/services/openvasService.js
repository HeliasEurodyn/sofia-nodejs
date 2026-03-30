const net = require('net');
const xml2js = require('xml2js');
const openvasRepository = require('../models/openvasReportModel');
const Neo4jService = require('../services/neo4jService');

class OpenVASService {
    constructor(config, neo4jDriver) {
        this.config = config;
        this.client = null;
        this.neo4jDriver = neo4jDriver;
    }

    async _getReportDetailsResponse(reportId) {
        if (typeof reportId !== 'string' || reportId.trim() === '') {
            return null;
        }

        const command = `<get_reports report_id="${reportId}" details="1" ignore_pagination="1"/>`;
        const result = await this._sendCommand(command, '</get_reports_response>');
        const response = result.get_reports_response;

        if (!response || response.$?.status !== '200') {
            return null;
        }

        if (!Array.isArray(response.report) || response.report.length === 0) {
            return null;
        }

        return response;
    }

    _parseXML(xml) {
        return new Promise((resolve, reject) => {
            const parser = new xml2js.Parser();
            parser.parseString(xml, (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    }

    _sendCommand(commandXml, endTag) {
        return new Promise((resolve, reject) => {
            if (!this.client) return reject(new Error('Δεν υπάρχει ανοιχτή σύνδεση'));
            let buffer = '';
            const onData = async (data) => {
                buffer += data.toString();
                if (buffer.includes(endTag)) {
                    this.client.removeListener('data', onData);
                    try {
                        const result = await this._parseXML(buffer);
                        resolve(result);
                    } catch (err) {
                        reject(err);
                    }
                }
            };

            const onError = (err) => {
                this.client.removeListener('data', onData);
                reject(err);
            };

            this.client.on('data', onData);
            this.client.once('error', onError);

            this.client.write(commandXml);
        });
    }

    connect() {
        return new Promise((resolve, reject) => {
            this.client = new net.Socket();

            const authCommand = `<authenticate><credentials><username>${this.config.user}</username><password>${this.config.pass}</password></credentials></authenticate>`;

            this.client.connect(this.config.port, this.config.host, () => {
                this._sendCommand(authCommand, '</authenticate_response>')
                    .then(result => {
                        const response = result.authenticate_response;
                        if (response.$.status === '200') {
                            resolve(); // Επιτυχής σύνδεση
                        } else {
                            this.disconnect();
                            reject(new Error(`Auth Failed: ${response.$.status}`));
                        }
                    })
                    .catch(err => {
                        this.disconnect();
                        reject(err);
                    });
            });

            this.client.on('error', (err) => {
                this.disconnect();
                reject(err);
            });
        });
    }

    disconnect() {
        if (this.client) {
            this.client.removeAllListeners();
            this.client.destroy();
            this.client = null;
        }
    }

    async fetchReports() {
        const command = '<get_reports details="1" ignore_pagination="1" filter="apply_overrides=0 levels=chml min_qod=70"/>';
        const result = await this._sendCommand(command, '</get_reports_response>');
        const response = result.get_reports_response;
        if (response.$.status !== '200') {
            throw new Error(response.$.status_text);
        }

        const reports = response.report || [];
        return reports.map(rep => {
            // Διαχείριση Status & Progress
            const scanStatus = rep.report?.[0]?.scan_run_status?.[0]?.trim() || 'Unknown';
            const taskObj = rep.report?.[0]?.task?.[0];

            let progress = null;
            if (taskObj?.progress?.[0]) {
                progress = taskObj.progress[0];
            } else if (rep.report?.[0]?.progress_percent?.[0]) {
                progress = rep.report[0].progress_percent[0];
            } else if (rep.report?.[0]?.progress?.[0]) {
                progress = rep.report[0].progress[0];
            }

            let statusWithProgress = scanStatus;
            const progressNum = Number(progress);

            if (scanStatus === 'Running' && progress !== null && !isNaN(progressNum) && progressNum >= 0) {
                statusWithProgress = `Running (${progressNum}%)`;
            }

            // Διαχείριση Severity με Labels
            const rawSeverity = rep.report?.[0]?.severity?.[0]?.filtered?.[0] || '0.0';
            const sevNum = Number(rawSeverity);
            let finalSeverity = 'N/A';

            // Αν είναι αρνητικό (π.χ. -1) παραμένει 'N/A'. Αλλιώς, βρίσκουμε το label.
            if (sevNum >= 0) {
                let label = 'Log';
                if (sevNum > 0 && sevNum < 4.0) {
                    label = 'Low';
                } else if (sevNum >= 4.0 && sevNum < 7.0) {
                    label = 'Medium';
                } else if (sevNum >= 7.0 && sevNum < 9.0) {
                    label = 'High';
                } else if (sevNum >= 9.0) {
                    label = 'Critical';
                }
                finalSeverity = `${rawSeverity} (${label})`;
            }

            return {
                reportId: rep.$.id,
                taskId: taskObj?.$?.id || 'Unknown ID',
                status: statusWithProgress,
                taskName: taskObj?.name?.[0] || 'Unknown Task',
                scanStart: rep.report?.[0]?.scan_start?.[0] || 'N/A',
                scanEnd: rep.report?.[0]?.scan_end?.[0] || 'N/A',
                vulnerabilitiesCount: rep.report?.[0]?.result_count?.[0]?.filtered?.[0] || '0',
                severity: finalSeverity
            };
        });
    }

    /* Fetch the results of a report*/
    // async fetchResults(reportId) {
    //     const command = `<get_results filter="report_id=${reportId} levels=hml rows=-1 min_qod=70 apply_overrides=0"/>`;
    //     const result = await this._sendCommand(command, '</get_results_response>');

    //     const response = result.get_results_response;
    //     if (response.$.status !== '200') {
    //         throw new Error(response.$.status_text);
    //     }

    //     const resultsArray = response.result || [];
    //     return resultsArray.map(res => ({
    //         name: res.name?.[0] || 'Unknown Name',
    //         host: res.host?.[0]?._ || 'Unknown Host',
    //         severity: res.severity?.[0] || '0.0',
    //         port: res.port?.[0] || 'N/A'
    //     }));
    // }


    async fetchResults(reportId) {
        // Φέρνουμε όλα τα αποτελέσματα (χωρίς min_qod και levels για να μην χάσουμε δεδομένα)
        const command = `<get_results filter="report_id=${reportId} rows=-1 apply_overrides=0 levels=chml min_qod=70 sort-reverse=severity"/>`;
        const result = await this._sendCommand(command, '</get_results_response>');
        const response = result.get_results_response;

        if (response.$.status !== '200') {
            throw new Error(response.$.status_text);
        }

        const resultsArray = response.result || [];

        return resultsArray.map(res => {
            const nvt = res.nvt?.[0] || {};
            let cves = [];

            // 1. Έλεγχος στο κλασικό tag <cve>
            const cvesRaw = nvt.cve?.[0];
            if (typeof cvesRaw === 'string') {
                const parsedCves = cvesRaw.split(',').map(c => c.trim()).filter(c => c !== 'NOCVE' && c !== '');
                cves = cves.concat(parsedCves);
            }

            // 2. Έλεγχος στο tag <refs> (εδώ που κρύβονται στη δική σου έκδοση)
            const refs = nvt.refs?.[0]?.ref || [];
            refs.forEach(refObj => {
                if (refObj.$ && refObj.$.type && refObj.$.type.toLowerCase() === 'cve') {
                    const cveId = refObj.$.id;
                    if (cveId && !cves.includes(cveId)) {
                        cves.push(cveId);
                    }
                }
            });

            // Εξαγωγή του σχετικού CPE από τα tags του NVT
            const tags = nvt.tags?.[0] || '';
            const cpeMatch = tags.match(/(cpe:\/[^\s|]+)/);
            const relatedCpe = cpeMatch ? cpeMatch[1] : null;

            return {
                name: res.name?.[0] || 'Unknown Name',
                host: res.host?.[0]?._ || 'Unknown Host',
                severity: res.severity?.[0] || '0.0',
                port: res.port?.[0] || 'N/A',
                cves: cves,            // Η σωστή πλέον λίστα με τα CVEs
                relatedCpe: relatedCpe // Το CPE που προκάλεσε την ευπάθεια
            };
        });
    }


    async fetchResults2(reportId) {
        // Φέρνουμε όλα τα αποτελέσματα (χωρίς min_qod και levels για να μην χάσουμε δεδομένα)
        const command = `<get_results filter="report_id=${reportId} rows=-1 apply_overrides=0 levels=chml min_qod=70" />`;
        const result = await this._sendCommand(command, '</get_results_response>');
        const response = result.get_results_response;

        if (response.$.status !== '200') {
            throw new Error(response.$.status_text);
        }

        const resultsArray = response.result || [];

        return resultsArray.map(res => {
            const nvt = res.nvt?.[0] || {};
            let cves = [];

            // 11) Εύρεση όλων των CVEs από <cve> και <refs>
            const cvesRaw = nvt.cve?.[0];
            if (typeof cvesRaw === 'string') {
                const parsedCves = cvesRaw.split(',').map(c => c.trim()).filter(c => c !== 'NOCVE' && c !== '');
                cves = cves.concat(parsedCves);
            }

            const refs = nvt.refs?.[0]?.ref || [];
            refs.forEach(refObj => {
                if (refObj.$ && refObj.$.type && refObj.$.type.toLowerCase() === 'cve') {
                    const cveId = refObj.$.id;
                    if (cveId && !cves.includes(cveId)) {
                        cves.push(cveId);
                    }
                }
            });

            // Εξαγωγή και διαχωρισμός του string των tags του NVT 
            // Το OpenVAS τα επιστρέφει στη μορφή "key1=value1|key2=value2"
            const tagsString = nvt.tags?.[0] || '';
            const tagsObj = {};

            tagsString.split('|').forEach(part => {
                const firstEqIndex = part.indexOf('=');
                if (firstEqIndex > -1) {
                    const key = part.substring(0, firstEqIndex).trim();
                    const value = part.substring(firstEqIndex + 1).trim();
                    tagsObj[key] = value;
                }
            });

            // 7) Εξαγωγή του σχετικού CPE 
            // console.log("tagsString: ", tagsString);
            const cpeMatch = tagsString.match(/(cpe:\/[^\s|]+)/);
            // console.log("cpeMatch: ", cpeMatch);
            const relatedCpe = cpeMatch ? cpeMatch[1] : null;

            // Διαχείριση Host (το xml2js βάζει το IP στο property '_' όταν υπάρχουν attributes/child tags)
            const hostObj = res.host?.[0];
            const hostIp = hostObj?._ || (typeof hostObj === 'string' ? hostObj : null);
            const hostName = hostObj?.hostname?.[0] || null;

            // Εξαγωγή του port
            const port = res.port?.[0] || null;

            // Επιστροφή του τελικού αντικειμένου με τα 11 ζητούμενα πεδία
            return {
                hostIp: hostIp,
                hostName: hostName,
                vulnerability: {
                    title: res.name?.[0] || nvt.name?.[0] || null,
                    severity: res.severity?.[0] || null,
                    port: port,
                    // dateCreated: res.creation_time?.[0] || null,           
                    summary: tagsObj['summary'] || null,
                    cpe: relatedCpe,                                       
                    affectedSoftware: tagsObj['affected'] || null,
                    impact: tagsObj['impact'] || null,
                    solution: tagsObj['solution'] || null,
                    cves: cves
                }
            };
        });
    }



    async fetchResultCpes(reportId) {
        const command = `<get_reports report_id="${reportId}" details="1" ignore_pagination="1"/>`;
        const result = await this._sendCommand(command, '</get_reports_response>');
        const response = result.get_reports_response;

        if (!response || response.$?.status !== '200') {
            return null;
        }

        if (!Array.isArray(response.report) || response.report.length === 0) {
            return null;
        }

        const outerReport = response.report?.[0] || {};
        const innerReport = outerReport.report?.[0] || {};
        const resultsArray = innerReport.results?.[0]?.result || [];

        // Βοηθητική συνάρτηση για ασφαλή ανάγνωση απλών tags
        const getSafeTagValue = (tagArray) => {
            if (!tagArray || !tagArray[0]) return null;
            return typeof tagArray[0] === 'object' ? (tagArray[0]._ || null) : tagArray[0];
        };

        // Αναδρομική συνάρτηση που ψάχνει παντού (ακόμα και στα attributes '$') για CPEs
        const extractCpes = (obj) => {
            let cpes = new Set();

            const search = (item) => {
                if (typeof item === 'string') {
                    if (item.startsWith('cpe:/') || item.startsWith('cpe:2.3:')) {
                        cpes.add(item.trim());
                    }
                } else if (Array.isArray(item)) {
                    item.forEach(search);
                } else if (typeof item === 'object' && item !== null) {
                    // Έλεγχος στα attributes (το xml2js τα βάζει στο κλειδί '$')
                    if (item.$) {
                        for (const attrKey in item.$) {
                            const attrValue = item.$[attrKey];
                            if (typeof attrValue === 'string' &&
                                (attrValue.startsWith('cpe:/') || attrValue.startsWith('cpe:2.3:'))) {
                                cpes.add(attrValue.trim());
                            }
                        }
                    }
                    // Έλεγχος στα υπόλοιπα (nested) tags
                    for (const key in item) {
                        if (key !== '$') search(item[key]);
                    }
                }
            };

            search(obj);
            return [...cpes];
        };

        return resultsArray.map(r => {
            // Βασικές πληροφορίες του εύρηματος
            const name = getSafeTagValue(r.name) || 'Unknown Vulnerability';
            const hostIp = getSafeTagValue(r.host) || 'Unknown IP';
            const port = getSafeTagValue(r.port) || 'Unknown Port';

            // Το severity στα results είναι συνήθως πιο αξιόπιστο
            const severity = getSafeTagValue(r.severity) || getSafeTagValue(r.threat) || 'N/A';

            // Ψάχνουμε για CPEs μέσα στο <nvt> tag (που ορίζει το vulnerability) 
            // ή και σε ολόκληρο το result object αν προτιμάς (εδώ το τρέχουμε σε όλο το result 'r' για σιγουριά)
            const uniqueCpes = extractCpes(r);

            return {
                vulnerabilityName: name,
                hostIp: hostIp,
                port: port,
                severity: severity,
                cpes: uniqueCpes // Επιστρέφει τη λίστα με τα CPEs που σχετίζονται με αυτό το vulnerability
            };
        });
    }




    async debugResult(reportId) {
        const command = `<get_results filter="report_id=${reportId} rows=-1 apply_overrides=0"/>`;
        const result = await this._sendCommand(command, '</get_results_response>');
        const response = result.get_results_response;

        const resultsArray = response.result || [];

        // Ψάχνουμε το συγκεκριμένο result που έχει να κάνει με Default Credentials
        const targetResult = resultsArray.find(res => {
            const name = res.name?.[0] || '';
            return name.toLowerCase().includes('default credentials');
        });

        if (targetResult) {
            return targetResult;
            return JSON.stringify(targetResult, null, 2);
            console.log(JSON.stringify(targetResult, null, 2));
        } else {
            console.log("Δεν βρέθηκε το συγκεκριμένο αποτέλεσμα. Εκτύπωση του πρώτου διαθέσιμου:");
            console.log(JSON.stringify(resultsArray[0], null, 2));
        }
    }



    async fetchReportCVEs(reportId) {
        // Αφαιρέσαμε τα levels=hml και min_qod=70 για να πάρουμε ΟΛΑ τα results
        const command = `<get_results filter="report_id=${reportId} rows=-1 apply_overrides=0"/>`;
        const result = await this._sendCommand(command, '</get_results_response>');
        const response = result.get_results_response;

        if (response.$.status !== '200') {
            throw new Error(response.$.status_text);
        }

        const resultsArray = response.result || [];
        const cveMap = {};

        resultsArray.forEach(res => {
            const nvt = res.nvt?.[0] || {};
            const host = res.host?.[0]?._ || 'Unknown Host';
            let cves = [];

            // Πιθανότητα Α: Το CVE είναι κατευθείαν μέσα στο <cve> ως comma-separated string
            const cvesRaw = nvt.cve?.[0];
            if (typeof cvesRaw === 'string') {
                const parsedCves = cvesRaw.split(',').map(c => c.trim()).filter(c => c !== 'NOCVE' && c !== '');
                cves = cves.concat(parsedCves);
            }

            // Πιθανότητα Β: Το CVE βρίσκεται μέσα στο <refs><ref type="cve" id="..."/></refs>
            const refs = nvt.refs?.[0]?.ref || [];
            refs.forEach(refObj => {
                if (refObj.$ && refObj.$.type && refObj.$.type.toLowerCase() === 'cve') {
                    const cveId = refObj.$.id;
                    if (cveId && !cves.includes(cveId)) {
                        cves.push(cveId);
                    }
                }
            });

            // Αν βρήκαμε CVEs με οποιονδήποτε από τους 2 τρόπους, τα αποθηκεύουμε
            cves.forEach(cve => {
                if (!cveMap[cve]) {
                    cveMap[cve] = {
                        cve: cve,
                        severity: parseFloat(res.severity?.[0] || '0.0'),
                        affectedHosts: new Set()
                    };
                }

                const currentSeverity = parseFloat(res.severity?.[0] || '0.0');
                if (currentSeverity > cveMap[cve].severity) {
                    cveMap[cve].severity = currentSeverity;
                }

                cveMap[cve].affectedHosts.add(host);
            });
        });

        return Object.values(cveMap)
            .sort((a, b) => b.severity - a.severity)
            .map(cveData => ({
                cve: cveData.cve,
                maxSeverity: cveData.severity.toFixed(1),
                affectedHosts: Array.from(cveData.affectedHosts)
            }));
    }


    async fetchReportApplications(reportId) {
        const response = await this._getReportDetailsResponse(reportId);

        if (!response) {
            return [];
        }

        const outerReport = response.report?.[0] || {};
        const innerReport = outerReport.report?.[0] || {};
        const resultsArray = innerReport.results?.[0]?.result || [];

        const getSafeTagValue = (tagArray) => {
            if (!tagArray || !tagArray[0]) {
                return null;
            }

            return typeof tagArray[0] === 'object' ? (tagArray[0]._ || null) : tagArray[0];
        };

        const extractCpes = (obj) => {
            const cpes = new Set();

            const search = (item) => {
                if (typeof item === 'string') {
                    const value = item.trim();
                    if (value.startsWith('cpe:/') || value.startsWith('cpe:2.3:')) {
                        cpes.add(value);
                    }
                    return;
                }

                if (Array.isArray(item)) {
                    item.forEach(search);
                    return;
                }

                if (typeof item === 'object' && item !== null) {
                    if (item.$) {
                        Object.values(item.$).forEach(attrValue => {
                            if (typeof attrValue === 'string') {
                                const value = attrValue.trim();
                                if (value.startsWith('cpe:/') || value.startsWith('cpe:2.3:')) {
                                    cpes.add(value);
                                }
                            }
                        });
                    }

                    Object.entries(item).forEach(([key, value]) => {
                        if (key !== '$') {
                            search(value);
                        }
                    });
                }
            };

            search(obj);
            return Array.from(cpes);
        };

        const applicationsByCpe = new Map();

        resultsArray.forEach(resultItem => {
            const applicationCpes = extractCpes(resultItem);

            if (applicationCpes.length === 0) {
                return;
            }

            const vulnerability = {
                vulnerabilityName: getSafeTagValue(resultItem.name) || 'Unknown Vulnerability',
                severity: getSafeTagValue(resultItem.severity) || getSafeTagValue(resultItem.threat) || 'N/A',
                hostIp: getSafeTagValue(resultItem.host) || 'Unknown IP',
                port: getSafeTagValue(resultItem.port) || 'Unknown Port',
                nvtOid: resultItem.nvt?.[0]?.$?.oid || null
            };

            applicationCpes.forEach(cpe => {
                if (!applicationsByCpe.has(cpe)) {
                    applicationsByCpe.set(cpe, new Map());
                }

                const applicationVulnerabilities = applicationsByCpe.get(cpe);
                const dedupeKey = [
                    vulnerability.nvtOid || vulnerability.vulnerabilityName,
                    vulnerability.hostIp,
                    vulnerability.port
                ].join('::');

                if (!applicationVulnerabilities.has(dedupeKey)) {
                    applicationVulnerabilities.set(dedupeKey, vulnerability);
                }
            });
        });

        return Array.from(applicationsByCpe.entries())
            .map(([cpe, vulnerabilitiesMap]) => ({
                cpe,
                totalVulnerabilities: vulnerabilitiesMap.size,
                vulnerabilities: Array.from(vulnerabilitiesMap.values())
            }))
            .sort((left, right) => right.totalVulnerabilities - left.totalVulnerabilities);
    }


    async fetchApplicationsAndCVEs(reportId) {
        // Φέρνουμε τα αποτελέσματα. Το "levels=chml" (Critical, High, Medium, Low, Log) 
        // είναι ιδανικό γιατί το Application Detection συχνά καταγράφεται ως "Log" (l), 
        // ενώ τα CVEs βρίσκονται στα "chm".
        const command = `<get_results filter="report_id=${reportId} rows=-1 apply_overrides=0 levels=chml" />`;
        const result = await this._sendCommand(command, '</get_results_response>');

        // Ασφαλής ανάγνωση του array (εξαρτάται από το πώς λειτουργεί ο XML Parser σου)
        let resultsArray = result.get_results_response?.result || [];
        if (!Array.isArray(resultsArray)) {
            resultsArray = [resultsArray];
        }

        // Χρησιμοποιούμε ένα Object/Map για να ομαδοποιήσουμε τα μοναδικά CVEs ανά CPE
        const appsMap = {};

        for (const res of resultsArray) {
            const nvt = res.nvt;
            if (!nvt) continue;

            // 1. Εξαγωγή των CVEs από το NVT
            const cvesRaw = nvt.cve || "";
            console.log("Raw CVEs string: ", cvesRaw);
            let cves = [];
            if (cvesRaw !== "NOCVE" && cvesRaw.trim() !== "") {
                // Διαχωρισμός αν είναι πολλαπλά (π.χ. "CVE-2021-1234, CVE-2021-5678")
                cves = cvesRaw.split(',').map(c => c.trim()).filter(c => c !== "");
            }

            // 2. Εξαγωγή των CPEs
            const foundCpes = [];

            // Προσέγγιση Α: Ψάχνουμε στα NVT Refs (Συχνότερο)
            if (nvt.refs && nvt.refs.ref) {
                const refs = Array.isArray(nvt.refs.ref) ? nvt.refs.ref : [nvt.refs.ref];
                for (const ref of refs) {
                    // ΠΡΟΣΟΧΗ στον Parser: Ο τρόπος που διαβάζονται τα XML attributes διαφέρει.
                    // Το xml2js χρησιμοποιεί το $, ενώ ο fast-xml-parser το @_ ή απευθείας το όνομα.
                    const refType = ref.$ ? ref.$.type : (ref['@_type'] || ref.type);
                    const refId = ref.$ ? ref.$.id : (ref['@_id'] || ref.id);

                    if (refType === "cpe" && refId) {
                        foundCpes.push(refId);
                    }
                }
            }

            // Προσέγγιση Β: Αν δεν βρέθηκε στα refs, ψάχνουμε στα NVT tags
            // Τα tags είναι συνήθως string της μορφής "cvss_base_vector=...|cpe=cpe:/a:vendor:app|..."
            if (foundCpes.length === 0 && nvt.tags) {
                const tagsString = typeof nvt.tags === 'string' ? nvt.tags : (nvt.tags._ || "");
                const tagsArray = tagsString.split('|');
                for (const tag of tagsArray) {
                    if (tag.trim().startsWith("cpe=")) {
                        foundCpes.push(tag.trim().substring(4)); // Κρατάμε ότι είναι μετά το "cpe="
                    }
                }
            }

            // 3. Ομαδοποίηση (Mapping) των CVEs στο αντίστοιχο CPE
            for (const cpe of foundCpes) {
                // Μας ενδιαφέρουν τα Applications. Στο πρότυπο CPE, οι εφαρμογές ξεκινούν με "cpe:/a:"
                // (Αν θες και Λειτουργικά Συστήματα, αφαίρεσε το if ή πρόσθεσε το "cpe:/o:")
                if (cpe.startsWith("cpe:/a:")) {
                    if (!appsMap[cpe]) {
                        // Χρησιμοποιούμε Set για να αποφύγουμε διπλοεγγραφές των ίδιων CVEs
                        appsMap[cpe] = new Set();
                    }
                    cves.forEach(cve => appsMap[cpe].add(cve));
                }
            }
        }

        // 4. Μετατροπή του Map στην τελική μορφή Array
        const finalApplications = Object.keys(appsMap).map(cpe => ({
            cpe: cpe,
            cves: Array.from(appsMap[cpe])
        }));

        return finalApplications;
    }




    async fetchVulnerabilitiesByCpe(reportId) {
        return this.fetchReportApplications(reportId);
    }



    // async fetchAllHosts(reportId) {
    //     const command = `<get_assets type="host" filter="report_id=${reportId}"/>`;
    //     const result = await this._sendCommand(command, '</get_assets_response>');
    //     const response = result.get_assets_response;
    //     if (response.$.status !== '200') {
    //         throw new Error(response.$.status_text);
    //     }
    //     const assetsArray = response.asset || [];
    //     return assetsArray.map(a => {
    //         const hostObj = a.host?.[0] || {};
    //         const details = hostObj.detail || [];
    //         const getDetail = (key) => {
    //             const item = details.find(d => d.name?.[0]?.toLowerCase() === key.toLowerCase());
    //             return item ? item.value?.[0] : null;
    //         };
    //         return {
    //             ip: a.name?.[0] || getDetail('ip') || 'Unknown IP',
    //             os: getDetail('best_os_txt') || 'N/A',
    //             osCpe: getDetail('best_os_cpe') || 'N/A',
    //             severity: hostObj.severity?.[0]?.value?.[0] || hostObj.severity?.[0]?._ || hostObj.severity?.[0] || '0.0'
    //         };
    //     });
    // }



    // async fetchHosts(reportId) {
    //     const command = `<get_reports report_id="${reportId}" details="1" ignore_pagination="1"/>`;
    //     const result = await this._sendCommand(command, '</get_reports_response>');
    //     const response = result.get_reports_response;
    //     if (response.$.status !== '200') {
    //         throw new Error(response.$.status_text);
    //     }
    //     const outerReport = response.report?.[0] || {};
    //     const innerReport = outerReport.report?.[0] || {};
    //     const hostsArray = innerReport.host || [];

    //     console.log(response);
    //     // console.log(outerReport);
    //     // console.log(innerReport);


    //     return hostsArray.map(h => {

    //         const details = h.detail || [];
    //         const getDetail = (key) => {
    //             const item = details.find(d => d.name?.[0]?.toLowerCase() === key.toLowerCase());
    //             return item ? item.value?.[0] : null;
    //         };
    //         return {
    //             ip: h.ip?.[0] || h._ || 'Unknown IP',
    //             os: getDetail('best_os_txt') || 'N/A',
    //             osCpe: getDetail('best_os_cpe') || 'N/A',
    //             severity: getDetail('severity') || 'N/A'
    //         };
    //     });
    // }


    async fetchHosts(reportId) {
        const command = `<get_reports report_id="${reportId}" details="1" ignore_pagination="1"/>`;
        const result = await this._sendCommand(command, '</get_reports_response>');
        const response = result.get_reports_response;

        if (!response || response.$?.status !== '200') {
            return [];
        }
        if (!Array.isArray(response.report) || response.report.length === 0) {
            return [];
        }

        const outerReport = response.report?.[0] || {};
        const innerReport = outerReport.report?.[0] || {};
        const hostsArray = innerReport.host || [];

        // Βοηθητική συνάρτηση για ασφαλή ανάγνωση tags από το xml2js 
        // (καλύπτει την περίπτωση που το tag έχει attributes και γίνεται object)
        const getSafeTagValue = (tagArray) => {
            if (!tagArray || !tagArray[0]) return null;
            return typeof tagArray[0] === 'object' ? tagArray[0]._ : tagArray[0];
        };

        return hostsArray.map(h => {
            const details = h.detail || [];
            const getDetail = (key) => {
                const item = details.find(d => d.name?.[0]?.toLowerCase() === key.toLowerCase());
                return item ? getSafeTagValue(item.value) : null;
            };

            // Εξαγωγή όλων των μοναδικών CPEs από τα details
            const allCpes = details
                .map(d => getSafeTagValue(d.value))
                .filter(val => val && (val.startsWith('cpe:/') || val.startsWith('cpe:2.3:')));
            const uniqueCpes = [...new Set(allCpes)];

            // Εξαγωγή Hostname
            const hostname = getDetail('hostname') || getSafeTagValue(h.hostname) || 'Unknown Hostname';

            return {
                ip: getSafeTagValue(h.ip) || h._ || 'Unknown IP',
                hostname: hostname,
                os: getDetail('best_os_txt') || 'N/A',
                osCpe: getDetail('best_os_cpe') || 'N/A',
                cpes: uniqueCpes
            };
        });
    }

    async fetchCVEs(filter = "rows=50") {
        const command = `<get_cves filter="${filter}"/>`;
        const result = await this._sendCommand(command, '</get_cves_response>');

        const response = result.get_cves_response;
        if (response.$.status !== '200') {
            throw new Error(response.$.status_text);
        }

        const cveArray = response.cve || [];
        return cveArray.map(c => ({
            id: c.$.id,
            description: c.description?.[0] || 'No description',
            cvss: c.cvss?.[0] || 'N/A'
        }));
    }


    async fetchHostDetails(hostId) {
        const command = `<get_info type="host" id="${hostId}"/>`;
        const result = await this._sendCommand(command, '</get_info_response>');

        const hostInfo = result.get_info_response.host;

        return {
            ip: hostInfo.ip?.[0],
            identifiers: hostInfo.identifiers?.[0]?.identifier?.map(id => id.name?.[0]) || []
        };
    }


    async hostExistsInNeo4j(host) {
        const neo4jService = new Neo4jService(this.neo4jDriver);
        const query = `MATCH (n) WHERE n.hostIp = '${host.ip}' RETURN count(n) > 0 AS exists`;
        const result = await neo4jService.runQuery(query);
        if (result[0].exists === false) {
            return false;
        }
        return true;
    }


    async addNodeToNeo4j(host) {
        const neo4jService = new Neo4jService(this.neo4jDriver);
        const nodeDto = {
            labels: ['OpenvasHost'],
            properties: [
                {
                    name: 'hostIp',
                    value: host.ip
                },
                {
                    name: 'ritaSource',
                    value: 'Openvas'
                },
                {
                    name: 'name',
                    value: host.hostname
                },
                {
                    name: 'openvasVulnerabilities',
                    value: host.vulnerabilities || []
                },
                {
                    name: 'openvasCpes',
                    value: host.cpes || []
                }
            ]
        };
        try {
            const newNode = await neo4jService.createNode(nodeDto);
            return newNode;
        } catch (error) {
            console.error("Σφάλμα κατά τη δημιουργία του κόμβου στη Neo4j:", error);
            throw error;
        }
    }
    

    async updateNodeToNeo4j(host) {
        const neo4jService = new Neo4jService(this.neo4jDriver);
        const nodeDto = {
            labels: [],
            properties: [
                {
                    name: 'openvasVulnerabilities',
                    value: host.vulnerabilities || []
                },
                {
                    name: 'openvasCpes',
                    value: host.cpes || []
                }
            ]
        };
    }


    /**
   * Φέρνει τα applications (CPEs) και τα vulnerabilities τους,
   * συμπεριλαμβάνοντας τα CVEs και το Severity (Score & Threat).
   * @param {string} reportId - Το ID του report στο OpenVAS.
   * @returns {Promise<Array>} - Ένας πίνακας με τα CPEs και τα εμπλουτισμένα vulnerabilities.
   */
    async getReportApplications(reportId) {
        try {
            const command = `<get_reports report_id="${reportId}" details="1" ignore_pagination="1"/>`;
            const result = await this._sendCommand(command, '</get_reports_response>');
            const response = result.get_reports_response;

            const innerReport = response?.report?.[0]?.report?.[0];

            if (!innerReport) {
                console.warn(`Δεν βρέθηκαν δεδομένα report για το ID: ${reportId}`);
                return [];
            }

            // 1. Εξαγωγή όλων των Results για να φτιάξουμε ένα "λεξικό" (Map) με τα CVE & Severities
            const resultsArray = innerReport?.results?.[0]?.result || [];
            const resultsMap = {};

            resultsArray.forEach(res => {
                const id = res.$?.id; // Το μοναδικό ID του result
                if (!id) return;

                // Κάποια results μπορεί να μην έχουν CVE, το OpenVAS τα μαρκάρει ως 'NOCVE'
                const nvt = res.nvt?.[0] || {};
                let cve = nvt.cve?.[0];
                if (cve === 'NOCVE') cve = 'No CVE assigned';

                // Εξαγωγή Severity (Νούμερο, π.χ. 7.5) και Threat (Κείμενο, π.χ. High)
                const severityScore = res.severity?.[0] || nvt.cvss_base?.[0] || 'N/A';
                const threatLevel = res.threat?.[0] || 'Unknown';
                const vulnName = res.name?.[0] || nvt.name?.[0] || 'Unknown Vulnerability';

                resultsMap[id] = { cve, severityScore, threatLevel, vulnName };
            });

            // 2. Εντοπισμός των Applications (CPEs)
            const appsArray = innerReport?.apps?.[0]?.app || [];

            // 3. Mapping και εμπλουτισμός των εφαρμογών με τα δεδομένα του resultsMap
            const applications = appsArray.map(app => {
                const cpe = app.cpe?.[0] || 'Unknown CPE';
                const name = app.name?.[0] || 'Unknown Application Name';

                // Λήψη των vulnerabilities που αντιστοιχούν σε αυτό το app
                const appResults = app.results?.[0]?.result || app.vulns?.[0]?.vuln || [];

                const vulnerabilities = appResults.map(vuln => {
                    const vulnId = vuln.$?.id || vuln.id?.[0];

                    // Ψάχνουμε αν το ID αυτού του vulnerability υπάρχει στο γενικό μας λεξικό
                    const enrichedData = resultsMap[vulnId] || {};

                    return {
                        id: vulnId || 'Unknown ID',
                        name: enrichedData.vulnName || vuln.name?.[0] || 'Unknown Name',
                        cve: enrichedData.cve || vuln.cve?.[0] || 'Unknown CVE',
                        severityScore: enrichedData.severityScore || 'N/A',
                        threatLevel: enrichedData.threatLevel || 'Unknown'
                    };
                });

                return {
                    cpe,
                    name,
                    vulnerabilities
                };
            });

            return applications;

        } catch (error) {
            console.error(`Σφάλμα κατά την ανάκτηση των CPEs/Vulnerabilities για το report ${reportId}:`, error);
            throw error;
        }
    }


    groupCvesToCpesPerHost(hosts, results) {
        return hosts.map(host => {
            // Αρχικοποίηση αντικειμένων για κάθε CPE που έχει βρεθεί στον Host
            const cpeMap = {};
            host.cpes.forEach(cpe => {
                cpeMap[cpe] = new Set();
            });

            // Set για CVEs που βρέθηκαν στον host, αλλά το OpenVAS δεν διευκρίνισε σε ποιο CPE ανήκουν
            const unmappedCves = new Set();

            // Φιλτράρισμα των αποτελεσμάτων μόνο για τον τρέχοντα IP
            const hostResults = results.filter(r => r.host === host.ip);

            hostResults.forEach(res => {
                if (res.cves.length > 0) {
                    if (res.relatedCpe) {
                        // Αν το CPE δεν υπήρχε ήδη στη γενική λίστα του host, το προσθέτουμε δυναμικά
                        if (!cpeMap[res.relatedCpe]) {
                            cpeMap[res.relatedCpe] = new Set();
                        }
                        res.cves.forEach(cve => cpeMap[res.relatedCpe].add(cve));
                    } else {
                        // Αν το αποτέλεσμα δεν έχει ξεκάθαρο CPE στα tags
                        res.cves.forEach(cve => unmappedCves.add(cve));
                    }
                }
            });

            // Μετατροπή του map σε καθαρή μορφή πίνακα
            const cpesArray = Object.keys(cpeMap).map(cpeString => ({
                cpe: cpeString,
                cves: Array.from(cpeMap[cpeString])
            }));

            return {
                ip: host.ip,
                os: host.os,
                severity: host.severity,
                cpes: cpesArray, // Κάθε αντικείμενο εδώ έχει το cpe (string) και τα cves (array)
                unmappedCves: Array.from(unmappedCves) // Χρήσιμο για να μη χάσεις vulnerabilities χωρίς CPE tag
            };
        });
    }


    async fetchUpdates() {
        // 1. fetch reports from openvas and store them to database
        // 2. fetch previously reviewed reports from sql
        // 3. compare reports
        // 4. if there is a new report get its details (hosts, cves, cpes)

        try {
            await this.connect();

            const reports = await this.fetchReports();

            if (reports.length === 0) {
                return [];
            }

            await openvasRepository.updateReportsInDb(reports);

            const reportsToReview = await openvasRepository.getReportsFromDb(false, ['Done']);

            if (reportsToReview.length > 0) {
                const updates = [];

                for (const report of reportsToReview) {
                    // console.log(report);
                    const hosts = await this.fetchHosts(report.report_id);
                    const results = await this.fetchResults2(report.report_id);
                    // const cvesPerCpe = await this.fetchReportApplications(report.report_id);
                    // const applicationsAndCVEs = await this.fetchApplicationsAndCVEs(report.report_id);

                    // console.log("Hosts: ", hosts);
                    // console.log("Results: ", results);
                    // console.log("CPEs & CVEs: ", cvesPerCpe);
                    // console.log("Applications & CVEs: ", applicationsAndCVEs);

                    // break;

                    // 1. Ομαδοποίηση των vulnerabilities ανά IP
                    const vulnerabilitiesByHost = results.reduce((acc, result) => {
                        const ip = result.hostIp;

                        if (!acc[ip]) {
                            acc[ip] = [];
                        }

                        // Προσθέτουμε ΜΟΝΟ το nested αντικείμενο 'vulnerability' στο array!
                        // Έτσι, το hostIp και το hostName μένουν απ' έξω αυτόματα.
                        acc[ip].push(result.vulnerability);

                        return acc;
                    }, {});

                    // 2. Ενσωμάτωση των vulnerabilities μέσα στα hosts (χωρίς καθόλου έξτρα map)
                    const groupedHosts = hosts.map(host => {
                        return {
                            ...host,
                            vulnerabilities: vulnerabilitiesByHost[host.ip] || []
                        };
                    });

                    // Δες το αποτέλεσμα
                    // console.log(JSON.stringify(groupedHosts, null, 2));

                    // const reportCpes = await this.fetchResultCpes(report.reportId);
                    // const vulnerabilitiesByCpe = await this.fetchVulnerabilitiesByCpe(report.reportId);

                    // έλεγξε αν υπάρχει ο host στη neo4j βάση, αν υπάρχει κάνε update το node, αν δεν υπάρχει κάνε create.
                    for (const host of groupedHosts) {
                        console.log(host);
                        if (await this.hostExistsInNeo4j(host)) {
                            // update host info in Neo4j database and get the updated neo4j node object
                            const neo4jNode = await this.updateNodeToNeo4j(host);
                            const updatedHost = {
                                hostIsNew: false,
                                neo4jNode: neo4jNode
                            }
                            updates.push(updatedHost);
                        }
                        else {
                            const neo4jNode = await this.addNodeToNeo4j(host);
                            const newHost = {
                                hostIsNew: true,
                                neo4jNode: neo4jNode
                            }
                            updates.push(newHost);
                        }
                        // await openvasRepository.saveReporttoDb(newReport, 1);
                    }
                }
                return updates;
            }

            return [];
        } catch (error) {
            console.error('Σφάλμα στο fetchUpdates:', error);
            throw error;
        } finally {
            this.disconnect();
        }
    }


}

module.exports = OpenVASService;