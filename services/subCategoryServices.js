const SubCategory  = require("../models/subCategoryModel.js");

module.exports = {
  
  createSubCategory: async (data) => {
    return await SubCategory.create(data);
  },

  getSubCategorys: async () => {
    return await SubCategory.find({ deleted: false });
  },

  getSubCategoryById: async (id) => {
    return await SubCategory.findOne({ _id: id, deleted: false });
  },

  updateSubCategory: async (id, data) => {
    return await SubCategory.findByIdAndUpdate(id, data, { new: true });
  },

  deleteSubCategory: async (id) => {
    return await SubCategory.findByIdAndUpdate(
      id,
      { deleted: true, active: false },
      { new: true }
    );
  }
};
