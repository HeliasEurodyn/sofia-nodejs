const SofiaModel = require('../models/sofiaModel');

module.exports = {
  getUsers: () => SofiaModel.getAll(),
  getUserById: (id) => SofiaModel.getById(id),
  createUser: (data) => SofiaModel.create(data),
  updateUser: (id, data) => SofiaModel.update(id, data),
  deleteUser: (id) => SofiaModel.remove(id)
};