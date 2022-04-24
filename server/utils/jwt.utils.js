const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.JWT_TOKEN_ACCESS_PRIVATE_KEY, {
    expiresIn: "15m",
  });
};

const refreshAccessToken = (user) => {
  return jwt.sign(user, process.env.JWT_REFRESH_TOKEN_ACCESS_PRIVATE_KEY, {
    expiresIn: "7d",
  });
};

module.exports = { generateAccessToken, refreshAccessToken };
