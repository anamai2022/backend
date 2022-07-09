const express = require("express");
const app = express();
const router = express.Router();
const jwt = require("jsonwebtoken");
const { authenticateJWT } = require('../middleware/authenticateJWT')
const hospitalController = require('../controllers/hospitalController');

router.get("/:f_code",authenticateJWT,hospitalController.getProfile);
router.post("/",authenticateJWT,hospitalController.getSaveProfile);
router.patch("/:f_code",authenticateJWT,hospitalController.getUpdateData);
router.put("/:f_code",authenticateJWT,hospitalController.getUpdateAll); 
router.get("/",authenticateJWT,hospitalController.getAllData);
module.exports = router;