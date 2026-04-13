const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true },
  categoryDescription: { type: String },
  categoryPrice: { type: Number, required: true },
  categoryPictureURL: { type: String },
  categoryDiscount: { type: Number, default: 0 },
  categoryQuantity: { type: Number, default: 0 },
  categoryDiscountedPrice: { type: Number },
  categoryStatus: { type: String, default: "pending" },
  categoryApproveStatus: { type: String, default: "pending" },

  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  active: { type: Boolean, default: true },
  deleted: { type: Boolean, default: false },

  categoryCode: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);
