const orderService = require("../services/orderServices.js");

module.exports = {
  create: async (req, res) => {
    try {
      const result = await orderService.createOrder(req.body);
      res.status(201).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const result = await orderService.getOrders();
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  getOne: async (req, res) => {
    try {
      const result = await orderService.getOrderById(req.params.id);
      if (!result) {
        return res.status(404).json({ success: false, message: "order not found" });
      }
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  trackOrderById: async (req, res) => {
    try {
      const orderId = req.body.orderId?.trim();

      console.log("Tracking orderId:", orderId);

      if (!orderId) {
        return res.status(400).json({
          success: false,
          message: "Order ID is required"
        });
      }

      const result = await orderService.getOrderById(orderId);

      console.log("Tracked order result:", result);

      if (!result) {
        return res.status(404).json({
          success: false,
          message: "Order not found"
        });
      }

      return res.status(200).json({
        success: true,
        data: result
      });
    } catch (err) {
      console.error("Track order error:", err);
      return res.status(500).json({
        success: false,
        message: err.message
      });
    }
  },

  update: async (req, res) => {
    try {
      const result = await orderService.updateOrder(req.params.id, req.body);
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const result = await orderService.deleteOrder(req.params.id);
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  }
};