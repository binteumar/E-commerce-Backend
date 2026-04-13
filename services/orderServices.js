const Order = require("../models/orderModel.js");

module.exports = {
  createOrder: async (data) => {
    return await Order.create(data);
  },

  getOrders: async () => {
    return await Order.find({ deleted: false });
  },

  getOrderById: async (id) => {
    return await Order.findById(id);
  },

  updateOrder: async (id, data) => {
    return await Order.findByIdAndUpdate(id, data, { new: true });
  },

  deleteOrder: async (id) => {
    return await Order.findByIdAndUpdate(
      id,
      { deleted: true, active: false },
      { new: true }
    );
  }
};