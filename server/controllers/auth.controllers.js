const User = require("../models/users.models.js");
const bcrypt = require("bcrypt");
const {
  generateAccessToken,
  refreshAccessToken,
} = require("../utils/jwt.utils");

module.exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Verify

    const usernameCheck = await User.findOne({ username });
    if (usernameCheck) {
      return res
        .status(401)
        .json({ msg: "Username already used", status: false });
    }
    const emailCheck = await User.findOne({ email });
    if (emailCheck) {
      return res.status(401).json({ msg: "Email already used", status: false });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      email,
      username,
      password: hashedPassword,
    });
    // Jwt token

    const token = generateAccessToken({ username });

    return res.status(200).json({ status: true, token }); // Return jwt token
  } catch (error) {
    res.status(500).json({ msg: "Error, please try later", error });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Verify

    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(401)
        .json({ msg: "Incorect username or password", status: false });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ msg: "Incorect username or password", status: false });
    }

    // JWT Token
    const token = generateAccessToken({ username });
    const refreshToken = refreshAccessToken({ username });

    return res.status(200).json({ status: true, token, refreshToken });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error, please try later", error });
  }
};
