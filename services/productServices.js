const Product  = require("../models/productModel.js");

module.exports = {
  
  createProduct: async (data) => {
    return await Product.create(data);
  },

  getProducts: async () => {
    return await Product.find({ deleted: false });
  },

  getProductById: async (id) => {
    return await Product.findOne({ _id: id, deleted: false });
  },

  updateProduct: async (id, data) => {
    return await Product.findByIdAndUpdate(id, data, { new: true });
  },

  deleteProduct: async (id) => {
    return await Product.findByIdAndUpdate(
      id,
      { deleted: true, active: false },
      { new: true }
    );
  }
};
