const express = require("express");
const app = express();
const router = express.Router();

const hospitalController = require('../controllers/hospitalController');

router.get("/:f_code",hospitalController.getProfile);
router.get("/",hospitalController.getAllData);
module.exports = router;