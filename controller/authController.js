const authService = require("../services/authServices.js");

// ================= REGISTER =================
exports.register = async (req, res) => {
  try {
    const userData = req.body;

    const user = await authService.register(userData);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user
    });

  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// ================= LOGIN =================
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await authService.login(email, password);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: result
    });

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message
    });
  }
};

// ================= FORGOT PASSWORD =================
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const token = await authService.forgotPassword(email);

    return res.status(200).json({
      success: true,
      message: "Reset token generated",
      token: token   // later you send via email
    });

  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message
    });
  }
};

// ================= RESET PASSWORD =================
exports.resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    await authService.resetPassword(token, newPassword);

    return res.status(200).json({
      success: true,
      message: "Password updated successfully"
    });

  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// ================= LOGOUT =================
exports.logout = async (req, res) => {
  try {
    const { userId } = req.body;

    const result = await authService.logout(userId);

    return res.status(200).json({
      success: true,
      message: result.message
    });

  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
