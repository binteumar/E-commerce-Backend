const brandService = require("../services/brandServices.js");

module.exports = {
  create: async (req, res) => {
    try {

      //Code for img
      let brandImageURL = null;

      if (req.file) {
        brandImageURL = `${req.protocol}://${req.get("host")}/uploads/brands/${req.file.filename}`;
      }

      const payload = {
        ...req.body,
        brandPictureURL: brandImageURL
      };

      const result = await brandService.createBrand(payload);

      res.status(201).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

 
  getAll: async (req, res) => {
    try {
      const result = await brandService.getBrands();
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },


  getOne: async (req, res) => {
    try {
      const result = await brandService.getBrandById(req.params.id);

      if (!result) {
        return res.status(404).json({ success: false, message: "Brand not found" });
      }

      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },

  update: async (req, res) => {
    try {
      let brandImageURL = null;

      // If new file uploaded → update image
      if (req.file) {
        brandImageURL = `${req.protocol}://${req.get("host")}/uploads/brands/${req.file.filename}`;
      }

      const payload = {
        ...req.body,
      };

      if (brandImageURL) {
        payload.brandPictureURL = brandImageURL;
      }

      const result = await brandService.updateBrand(req.params.id, payload);

      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },


  delete: async (req, res) => {
    try {
      const result = await brandService.deleteBrand(req.params.id);
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  }
};
