const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  role: {
    type: String,
    enum: ["customer", "employee", "admin"],
    default: "customer"
  },

  refreshToken: { type: String },
  resetPasswordToken: { type: String },
  resetPasswordExpiry: { type: Date },

  deleted: { type: Boolean, default: false },
  active: { type: Boolean, default: true }

}, { timestamps: true });

/* ---------- STATIC METHODS ---------- */

userSchema.statics.getByEmail = function (email) {
  return this.findOne({ email });
};

userSchema.statics.setRefreshToken = function (userId, token) {
  return this.findByIdAndUpdate(userId, { refreshToken: token });
};

userSchema.statics.clearRefreshToken = function (userId) {
  return this.findByIdAndUpdate(userId, { refreshToken: null });
};

userSchema.statics.setResetToken = function (email, token, expiry) {
  return this.findOneAndUpdate(
    { email },
    { resetPasswordToken: token, resetPasswordExpiry: expiry }
  );
};

userSchema.statics.getByResetToken = function (token) {
  return this.findOne({
    resetPasswordToken: token,
    resetPasswordExpiry: { $gt: new Date() }
  });
};

userSchema.statics.updatePassword = function (userId, newPassword) {
  return this.findByIdAndUpdate(userId, {
    password: newPassword,
    resetPasswordToken: null,
    resetPasswordExpiry: null
  });
};

module.exports = mongoose.model("User", userSchema);
