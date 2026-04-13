const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },

  items: [
    {
      product_id: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, default: 1 },
      price: { type: Number, required: true } 
    }
  ],

  orderDate: { type: Date, default: Date.now },

  status: {
    type: String,
    enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
    default: "pending"
  },

  totalAmount: { type: Number, required: true },
  payment_id: { type: mongoose.Schema.Types.ObjectId, ref: "Payment" },

  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  active: { type: Boolean, default: true },
  deleted: { type: Boolean, default: false }

}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
