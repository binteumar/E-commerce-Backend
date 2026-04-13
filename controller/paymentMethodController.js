const paymentMethodService = require("../services/paymentMethodServices.js");

module.exports = {
  
  create: async (req, res) => {
    try {
      const result = await paymentMethodService.createPaymentMethod(req.body);
      res.status(201).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  
  getAll: async (req, res) => {
    try {
      const result = await paymentMethodService.getPaymentMethods();
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  
  getOne: async (req, res) => {
    try {
      const result = await paymentMethodService.getPaymentMethodById(req.params.id);
      if (!result) {
        return res.status(404).json({ success: false, message: "paymentMethod not found" });
      }
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

 
  update: async (req, res) => {
    try {
      const result = await paymentMethodService.updatePaymentMethod(req.params.id, req.body);
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  
  delete: async (req, res) => {
    try {
      const result = await paymentMethodService.deletePaymentMethod(req.params.id);
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  }
};
