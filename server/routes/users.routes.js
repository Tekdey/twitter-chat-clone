const { allUsers } = require("../controllers/users.controllers");

const router = require("express").Router();

router.post("/all", allUsers);

module.exports = router;
