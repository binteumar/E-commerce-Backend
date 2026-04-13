const Cart = require("../models/cartModel");

module.exports = {
  createCart: async (data) => {
    return await Cart.create(data);
  },

  getCarts: async () => {
    return await Cart.find().populate("items.product_id");
  },

  getCartById: async (id) => {
    return await Cart.findById(id).populate("items.product_id");
  },

  getCartByCustomerId: async (customerId) => {
    return await Cart.findOne({ customer_id: customerId }).populate("items.product_id");
  },

  saveCart: async (cart) => {
    return await cart.save();
  },

  updateCart: async (id, data) => {
    return await Cart.findByIdAndUpdate(id, data, { new: true }).populate("items.product_id");
  },

  deleteCart: async (id) => {
    return await Cart.findByIdAndDelete(id);
  }
};