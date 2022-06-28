const express = require("express");
const app = express();
const router = express.Router();

const profileController = require('../controllers/profileController');

router.get("/:f_code",profileController.getProfile);
router.get("/",profileController.getAllData);
router.post("/",profileController.getSaveProfile);
router.patch("/:f_code",profileController.getUpdateData);
router.put("/:f_code",profileController.getUpdateAll);

module.exports = router;