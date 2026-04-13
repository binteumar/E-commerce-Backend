const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  phone: { type: String },
  address: {type:String ,required:true},
  city: {type:String ,required:true},
  postalCode: {type:String ,required:true},
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  deleted: { type: Boolean, default: false },
  active: { type: Boolean, default: true }
}, { 
  timestamps: true 
});


module.exports = mongoose.model("Customer", customerSchema);
