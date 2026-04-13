const userService = require("../services/userServices.js");

module.exports = {
  create: async (req, res) => {
    try {
      const result = await userService.createUser(req.body);
      res.status(201).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const result = await userService.getUsers();
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  getOne: async (req, res) => {
    try {
      const result = await userService.getUserById(req.params.id);
      if (!result) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const result = await userService.updateUser(req.params.id, req.body);
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const result = await userService.deleteUser(req.params.id);
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  }
};