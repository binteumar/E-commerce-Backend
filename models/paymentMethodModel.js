const mongoose = require("mongoose");

const paymentMethodSchema = new mongoose.Schema({
  methodName: { type: String, required: true },

  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  active: { type: Boolean, default: true },
  deleted: { type: Boolean, default: false },

  methodCode: { type: Number, unique: true }
}, { timestamps: true });

module.exports = mongoose.model("PaymentMethod", paymentMethodSchema);
