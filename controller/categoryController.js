const categoryService = require("../services/categoryServices.js");
const Category=require("../models/categoryModel.js");

module.exports = {
  
  create: async (req, res) => {
    try {
      const result = await categoryService.createCategory(req.body);
      res.status(201).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  
  getAll: async (req, res) => {
 try {
    const categories = await Category.find({
      active: true,
      deleted: false
    });

    res.status(200).json({
      success: true,
      data: categories
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
},

  
  getOne: async (req, res) => {
    try {
      const result = await categoryService.getCategoryById(req.params.id);
      if (!result) {
        return res.status(404).json({ success: false, message: "Category not found" });
      }
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

 
  update: async (req, res) => {
    try {
      const result = await categoryService.updateCategory(req.params.id, req.body);
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  
  delete: async (req, res) => {
    try {
      const result = await categoryService.deleteCategory(req.params.id);
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  }
};
