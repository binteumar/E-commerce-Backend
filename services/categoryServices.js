const Category  = require("../models/categoryModel.js");

module.exports = {
  
  createCategory: async (data) => {
    return await Category.create(data);
  },

  getCategorys: async () => {
    return await Category.find({ deleted: false });
  },

  getCategoryById: async (id) => {
    return await Category.findOne({ _id: id, deleted: false });
  },

  updateCategory: async (id, data) => {
    return await Category.findByIdAndUpdate(id, data, { new: true });
  },

  deleteCategory: async (id) => {
    return await Category.findByIdAndUpdate(
      id,
      { deleted: true, active: false },
      { new: true }
    );
  }
};
