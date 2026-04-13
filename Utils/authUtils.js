const jwt = require("jsonwebtoken");

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "access_secret";
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || "refresh_secret";
const ACCESS_TOKEN_EXPIRES = process.env.ACCESS_TOKEN_EXPIRES || "15m";
const REFRESH_TOKEN_EXPIRES = process.env.REFRESH_TOKEN_EXPIRES || "7d";

module.exports = {
  generateAccessToken: (user) => {
    return jwt.sign(
      {
        sub: user._id,
        email: user.email,
        role: user.role,
        name: user.name,
      },
      ACCESS_TOKEN_SECRET,
      { expiresIn: ACCESS_TOKEN_EXPIRES }
    );
  },

  generateRefreshToken: (user) => {
    return jwt.sign(
      { sub: user._id },
      REFRESH_TOKEN_SECRET,
      { expiresIn: REFRESH_TOKEN_EXPIRES }
    );
  },

  verifyAccessToken: (token) => jwt.verify(token, ACCESS_TOKEN_SECRET),
  verifyRefreshToken: (token) => jwt.verify(token, REFRESH_TOKEN_SECRET),
};