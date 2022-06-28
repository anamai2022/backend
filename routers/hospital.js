const express = require("express");
const app = express();
const router = express.Router();

const hospitalController = require('../controllers/hospitalController');

router.get("/:f_code",hospitalController.getProfile);
router.post("/",hospitalController.getSaveProfile);
router.patch("/:f_code",hospitalController.getUpdateData);
router.put("/:f_code",hospitalController.getUpdateAll); 
router.get("/",hospitalController.getAllData);
module.exports = router;