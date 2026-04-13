// const mongoose = require("mongoose");

// const reviewSchema = new mongoose.Schema({
//   product_id: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
//   customer_id: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
  
//   rating: { type: Number, min: 1, max: 5, required: true },
//   comment: { type: String },

//   createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

//   active: { type: Boolean, default: true },
//   deleted: { type: Boolean, default: false }

// }, { timestamps: true });

// module.exports = mongoose.model("Review", reviewSchema);
