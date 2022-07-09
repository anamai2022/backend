const express = require("express");
const app = express();
const router = express.Router();
const jwt = require("jsonwebtoken");
const { authenticateJWT } = require('../middleware/authenticateJWT')
const profileController = require('../controllers/profileController');

router.get("/:f_code",authenticateJWT,profileController.getProfile);
router.get("/",authenticateJWT,profileController.getAllData);
router.post("/",authenticateJWT,profileController.getSaveProfile);
router.patch("/:f_code",authenticateJWT,profileController.getUpdateData);
router.put("/:f_code",authenticateJWT,profileController.getUpdateAll);

module.exports = router;