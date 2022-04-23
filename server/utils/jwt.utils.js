const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.JWT_TOKEN_ACCESS_PRIVATE_KEY, {
    expiresIn: "1m",
  });
};

const refreshAccessToken = (user) => {
  return jwt.sign(user, process.env.JWT_REFRESH_TOKEN_ACCESS_PRIVATE_KEY, {
    expiresIn: "5m",
  });
};

module.exports = { generateAccessToken, refreshAccessToken };
