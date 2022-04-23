const { accessToken } = require("../middlewares/auth.middlewares");

const router = require("express").Router();

router.get("/access", accessToken, (req, res) => {
  res.send(req.user);
});

module.exports = router;
