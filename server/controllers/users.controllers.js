const User = require("../models/users.models.js");

module.exports.allUsers = async (req, res) => {
  try {
    const users = await User.find({ _id: { $ne: req.params.id } }).select([
      "email",
      "username",
      "_id",
    ]);
    return res.json(users);
  } catch (error) {
    res.status(500).json({ msg: "Error, please try later", error });
  }
};
