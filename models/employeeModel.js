const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  position: { type: String, required: true },
  salary: { type: Number, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  deleted: { type: Boolean, default: false },
  active: { type: Boolean, default: true }
}, { 
  timestamps: true 
});

module.exports = mongoose.model("Employee", employeeSchema);
