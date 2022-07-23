const express = require("express");
const app = express();
const router = express.Router();
const jwt = require("jsonwebtoken");
const { authenticateJWT } = require('../middleware/authenticateJWT')
const appoveController = require('../controllers/appoveController');


router.get("/zone/:f_code",authenticateJWT, appoveController.getProfileByZoneArea);
router.get("/zonelist/:f_zonearea",authenticateJWT, appoveController.getListZoneArea);
router.get("/level2/:f_zonearea",authenticateJWT, appoveController.getLevelTwoByZoneArea);
router.get("/levle3/:f_zonearea",authenticateJWT, appoveController.getLevelThreeByZoneArea);
router.get("/levle4/:f_zonearea",authenticateJWT, appoveController.getLevelFourByZoneArea);
module.exports = router;