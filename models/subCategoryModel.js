const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
   name: { type: String, required: true },
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  active: { type: Boolean, default: true },
  deleted: { type: Boolean, default: false },
  subCategoryCode: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model("SubCategory", subCategorySchema);
