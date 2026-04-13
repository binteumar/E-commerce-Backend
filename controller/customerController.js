const customerService = require("../services/customerServices.js");

module.exports = {
  
  create: async (req, res) => {
    try {
      const result = await customerService.createCustomer(req.body);
      res.status(201).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  
  getAll: async (req, res) => {
    try {
      const result = await customerService.getCustomers();
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  
  getOne: async (req, res) => {
    try {
      const result = await customerService.getCustomerById(req.params.id);
      if (!result) {
        return res.status(404).json({ success: false, message: "Customer not found" });
      }
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

 
  update: async (req, res) => {
    try {
      const result = await customerService.updateCustomer(req.params.id, req.body);
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  
  delete: async (req, res) => {
    try {
      const result = await customerService.deleteCustomer(req.params.id);
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  }
};
