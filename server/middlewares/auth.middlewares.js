const jwt = require("jsonwebtoken");

module.exports.accessToken = (req, res, next) => {
  try {
    const authorizationHeader = req.headers["authorization"];
    const token = authorizationHeader && authorizationHeader.split(" ")[1];
    if (!token) {
      return res.sendStatus(401);
    }
    jwt.verify(
      token,
      process.env.JWT_TOKEN_ACCESS_PRIVATE_KEY,
      (error, user) => {
        if (error) {
          return res.sendStatus(401);
        }
        req.user = user;
        next();
      }
    );
  } catch (error) {
    res
      .status(500)
      .json({ message: "Incorrect access token, please login your account." });
  }
};
