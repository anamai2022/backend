const express = require("express");
const app = express();
const router = express.Router();
const jwt = require("jsonwebtoken");
const { authenticateJWT } = require('../middleware/authenticateJWT')
const appoveController = require('../controllers/appoveController');


router.get("/zone/:f_code",authenticateJWT, appoveController.getProfileByZoneArea);
module.exports = router;