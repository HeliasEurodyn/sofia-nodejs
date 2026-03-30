const OpenVASService = require('../services/openvasService');

const getReports = async (req, res, next) => {
    try {
        const config = req.openvasConfig;
        const openvas = new OpenVASService(config);
        await openvas.connect();
        const reports = await openvas.fetchReports();
        openvas.disconnect();
        res.status(200).json({
            success: true,
            count: reports.length,
            data: reports
        });
    } catch (error) {
        next(error);
    }
};


const getResults = async (req, res, next) => {
    try {
        const config = req.openvasConfig;
        const { reportId } = req.params;
        const openvas = new OpenVASService(config);
        await openvas.connect();
        const data = await openvas.fetchResults(reportId);
        openvas.disconnect();
        res.status(200).json({
            success: true,
            count: data.length,
            data: data
        });
    } catch (error) {
        next(error);
    }
};


const getReportApplications = async (req, res, next) => {
    const config = req.openvasConfig;
    const { reportId } = req.params;
    const openvas = new OpenVASService(config);

    try {
        await openvas.connect();
        const data = await openvas.fetchReportApplications(reportId);
        res.status(200).json({
            success: true,
            count: data.length,
            data: data
        });
    } catch (error) {
        next(error);
    } finally {
        openvas.disconnect();
    }
};


const getUpdates = async(req, res, next) => {
    try {
        const config = req.openvasConfig;
        const neo4jDriver = req.neo4jDriver;
        const openvas = new OpenVASService(config, neo4jDriver);
        const data = await openvas.fetchUpdates();
        res.status(200).json({
            success: true,
            count: data.length,
            data: data
        });
    } catch (error) {
        next(error);
    }
};


module.exports = {
    getReports,
    getResults,
    getReportApplications,
    getUpdates
};