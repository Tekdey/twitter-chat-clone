const { accessToken } = require("../middlewares/auth.middlewares");
const { generateAccessToken } = require("../utils/jwt.utils");
const jwt = require("jsonwebtoken");

const router = require("express").Router();

router.get("/access", accessToken, (req, res) => {
  res.send(req.user);
});

router.post("/refresh", (req, res) => {
  console.log("refresh route");
  const authorizationHeader = req.headers["authorization"];
  const token = authorizationHeader && authorizationHeader.split(" ")[1];

  if (!token) {
    return res.sendStatus(401);
  }
  jwt.verify(
    token,
    process.env.JWT_REFRESH_TOKEN_ACCESS_PRIVATE_KEY,
    (error, user) => {
      if (error) {
        return res.sendStatus(401);
      }
      delete user.iat;
      delete user.exp;
      const refreshToken = generateAccessToken(user);
      res.send({
        refreshToken,
      });
    }
  );
});

module.exports = router;
