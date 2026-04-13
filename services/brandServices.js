const Brand  = require("../models/brandModel.js");

module.exports = {
  
  createBrand: async (data) => {
    return await Brand.create(data);
  },

  getBrands: async () => {
    return await Brand.find({ deleted: false });
  },

  getBrandById: async (id) => {
    return await Brand.findOne({ _id: id, deleted: false });
  },

  updateBrand: async (id, data) => {
    return await Brand.findByIdAndUpdate(id, data, { new: true });
  },

  deleteBrand: async (id) => {
    return await Brand.findByIdAndUpdate(
      id,
      { deleted: true, active: false },
      { new: true }
    );
  }
};
