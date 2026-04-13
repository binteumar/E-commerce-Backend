const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  order_id: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
  amount: { type: Number, required: true },
  method_id: { type: mongoose.Schema.Types.ObjectId, ref: "PaymentMethod", required: true },

  status: {
    type: String,
    enum: ["pending", "paid", "failed"],
    default: "pending"
  },

  paidAt: { type: Date },

  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  active: { type: Boolean, default: true },
  deleted: { type: Boolean, default: false }

}, { timestamps: true });

module.exports = mongoose.model("Payment", paymentSchema);
