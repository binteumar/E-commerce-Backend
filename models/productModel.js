const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productDescription: { type: String },
  productPrice: { type: Number, required: true },
  productPictureURL: { type: String },
  productDiscount: { type: Number, default: 0 },
  productQuantity: { type: Number, default: 0 },
  productDiscountedPrice: { type: Number },
  productStatus: { type: String, default: "pending" },
  productApproveStatus: { type: String, default: "pending" },
  productRating: { type: Number, min: 1, max: 5, required: true },
  productComment: { type: String },

  category_id: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  brand_id: { type: mongoose.Schema.Types.ObjectId, ref: "Brand", required: true },
  subCategory_id:{ type: mongoose.Schema.Types.ObjectId, ref: "SubCategory", required: true },
  // customer_id: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },


  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },


  active: { type: Boolean, default: true },
  deleted: { type: Boolean, default: false },


  productCode: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
