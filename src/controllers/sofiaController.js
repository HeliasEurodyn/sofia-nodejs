const sofiaService = require('../services/sofiaService');

module.exports = {
  getAll: async (req, res) => {
    const users = await sofiaService.getUsers();
    res.json(users);
  },

  getOne: async (req, res) => {
    const user = await sofiaService.getUserById(req.params.id);
    res.json(user);
  },

  create: async (req, res) => {
    const user = await sofiaService.createUser(req.body);
    res.status(201).json(user);
  },

  update: async (req, res) => {
    const user = await sofiaService.updateUser(req.params.id, req.body);
    res.json(user);
  },

  remove: async (req, res) => {
    await sofiaService.deleteUser(req.params.id);
    res.json({ message: 'User deleted' });
  }
};