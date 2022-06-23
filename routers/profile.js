const express = require("express");
const app = express();
const router = express.Router();

const profileController = require('../controllers/profileController');

router.get("/:f_code",profileController.getProfile);
router.get("/",profileController.getData);
module.exports = router;