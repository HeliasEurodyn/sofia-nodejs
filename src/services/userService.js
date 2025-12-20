const User = require('../models/userModel');

module.exports = {
  getUserById: (id) => User.getById(id),
  createUser: (data) => User.create(data),
  updateUser: (id, data) => User.update(id, data),
  deleteUser: (id) => User.delete(id)
};