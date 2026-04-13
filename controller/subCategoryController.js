const subCategoryService = require("../services/subCategoryServices.js");

module.exports = {
  
  create: async (req, res) => {
    try {
      const result = await subCategoryService.createSubCategory(req.body);
      res.status(201).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  
  getAll: async (req, res) => {
    try {
      const result = await subCategoryService.getSubCategorys();
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  
  getOne: async (req, res) => {
    try {
      const result = await subCategoryService.getSubCategoryById(req.params.id);
      if (!result) {
        return res.status(404).json({ success: false, message: "subCategory not found" });
      }
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

 
  update: async (req, res) => {
    try {
      const result = await subCategoryService.updateSubCategory(req.params.id, req.body);
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  
  delete: async (req, res) => {
    try {
      const result = await subCategoryService.deleteSubCategory(req.params.id);
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  }
};
