const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.JWT_TOKEN_ACCESS_PRIVATE_KEY, {
    expiresIn: "1m",
  });
};

module.exports = { generateAccessToken };
