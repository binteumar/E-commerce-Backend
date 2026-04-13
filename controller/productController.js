const productService = require("../services/productServices.js");
const Product=require("../models/productModel.js");

module.exports = {
  
  create: async (req, res) => {
    try {
       //Code for img
      let productImageURL = null;

      if (req.file) {
        productImageURL = `${req.protocol}://${req.get("host")}/uploads/products/${req.file.filename}`;
      }

      const payload = {
        ...req.body,
        productPictureURL: productImageURL
      };
      const result = await productService.createProduct(payload);

      res.status(201).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  
  getAll: async (req, res) => {
  try {
    const filter = {};

    // CATEGORY FILTER
if (req.query.category_id) {
  filter.category_id = req.query.category_id;
}

    // OPTIONAL: show only active & not deleted products
    filter.active = true;
    filter.deleted = false;

    const products = await Product.find(filter)
      .populate("category_id")
      .populate("brand_id");

    res.status(200).json({ success: true, data: products });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
},
  getOne: async (req, res) => {
    try {
      const result = await productService.getProductById(req.params.id);
      if (!result) {
        return res.status(404).json({ success: false, message: "product not found" });
      }
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

 
  update: async (req, res) => {
    try {
      let productImageURL = null;

      // If new file uploaded → update image
      if (req.file) {
        productImageURL = `${req.protocol}://${req.get("host")}/uploads/products/${req.file.filename}`;
      }

      const payload = {
        ...req.body,
      };

      if (productImageURL) {
        payload.productPictureURL = productImageURL;
      }

      const result = await productService.updateProduct(req.params.id, payload);

      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  
  delete: async (req, res) => {
    try {
      const result = await productService.deleteProduct(req.params.id);
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  }
};
