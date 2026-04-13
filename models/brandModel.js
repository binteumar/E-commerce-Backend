const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  brandName: { type: String, required: true },
  brandDescription: { type: String },
  brandPrice: { type: Number, required: true },
  brandPictureURL: { type: String },
  brandDiscount: { type: Number, default: 0 },
  brandQuantity: { type: Number, default: 0 },
  brandDiscountedPrice: { type: Number },
  brandStatus: { type: String, default: "pending" },
  brandApproveStatus: { type: String, default: "pending" },

  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  active: { type: Boolean, default: true },
  deleted: { type: Boolean, default: false },

  brandCode: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Brand', brandSchema);
