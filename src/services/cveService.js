const cveModel = require('../models/cveElasticModel');

async function getCvesByCpe(cpe) {
  return cveModel.getCvesByCpe(cpe);
}

async function getCveById(id) {
  return cveModel.getCveById(id);
}

module.exports = {
  getCvesByCpe,
  getCveById
};
