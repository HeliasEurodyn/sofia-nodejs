const cpeService = require('../services/cpeService');

async function getAllCpes(req, res, next) {
  try {
    const page = Number(req.query.page ?? 0);
    const size = Number(req.query.size ?? 20);

    const data = await cpeService.getAllCpes(page, size);
    res.json(data);
  } catch (err) {
    next(err);
  }
}

async function searchCpes(req, res, next) {
  try {
    // 🔁 τώρα από body
    const {
      cpe = '*',
      vendor = '*',
      product = '*',
      version = '*',
      page = 0,
      size = 20
    } = req.body || {};

    const data = await cpeService.searchCpes(
      cpe,
      vendor,
      product,
      version,
      Number(page),
      Number(size)
    );

    res.json(data);
  } catch (err) {
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    const data = await cpeService.getById(req.query.id);
    res.json(data);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllCpes,
  searchCpes,
  getById
};
