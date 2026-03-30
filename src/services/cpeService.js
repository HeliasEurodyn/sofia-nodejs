const cpeModel = require('../models/cpeElasticModel');

async function getAllCpes(page, size) {
  return cpeModel.getAllCpes(page, size);
}

async function searchCpes(
  cpe,
  vendor,
  product,
  version,
  page,
  size
) {
  return cpeModel.searchCpes(
    cpe,
    vendor,
    product,
    version,
    page,
    size
  );
}

async function getById(id) {
  return cpeModel.getById(id);
}

module.exports = {
  getAllCpes,
  searchCpes,
  getById
};
