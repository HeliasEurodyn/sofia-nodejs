const cveService = require('../services/cveService');

async function getCvesByCpe(req, res, next) {
  try {
    const data = await cveService.getCvesByCpe(req.query.cpe);
    res.json(data);
  } catch (err) {
    next(err);
  }
}

async function getCveById(req, res, next) {
  try {
    const data = await cveService.getCveById(req.query.id);
    res.json(data);
  } catch (err) {
    next(err);
  }
}

async function resolveCpe(req, res, next) {
  try {

    const cveIds = await cveService.getCvesByCpe(req.body.cpe);
    const response = {
      cpe: req.body.cpe,
      highRiskCve: req.body.highRiskCve,
      baseScore: req.body.baseScore,
      impactScore: req.body.impactScore,
      exploitabilityScore: req.body.exploitabilityScore,
      cves: []
    }
    

    for(const cveId of cveIds){
      const cve = await cveService.getCveById(cveId);

      if(cve.cvss_baseScore > response.baseScore){
        response.highRiskCve = cve.id;
        response.baseScore = cve.cvss_baseScore;
        response.impactScore = cve.cvss_impactScore;
        response.exploitabilityScore = cve.cvss_exploitabilityScore;
      }

    const responseCve = {
        id: cve.id,
        baseScore: cve.cvss_baseScore,
        impactScore: cve.cvss_impactScore,
        exploitabilityScore: cve.cvss_exploitabilityScore
    }

      response.cves.push(responseCve);
    }

    response.cves.sort((a, b) => b.baseScore - a.baseScore);
    
    res.json(response);
  } catch (err) {
    next(err);
  }
}


module.exports = {
  getCvesByCpe,
  getCveById,
  resolveCpe
};
