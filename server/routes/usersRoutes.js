const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/singup", userController.signup);

router.post("/login", userController.login);

module.exports = router;
