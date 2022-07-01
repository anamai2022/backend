const express = require("express");
const app = express();
const router = express.Router();
const jwt = require("jsonwebtoken");

const authController = require('../controllers/authController');

router.post("/",authController.loginCode);

module.exports = router;