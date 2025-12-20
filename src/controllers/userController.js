const userService = require('../services/userService');

module.exports = {
  getAll: async (req, res) => {
    const users = await userService.getUsers();
    res.json(users);
  },

  getOne: async (req, res) => {
    const user = await userService.getUserById(req.params.id);
    res.json(user);
  },

  create: async (req, res) => {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  },

  update: async (req, res) => {
    const user = await userService.updateUser(req.params.id, req.body);
    res.json(user);
  },

  remove: async (req, res) => {
    await userService.deleteUser(req.params.id);
    res.json({ message: 'User deleted' });
  }
};