const { login, register } = require("../controllers/auth.controllers");

const { authToken } = require("../middlewares/auth.middlewares");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
