const express = require("express");
const app = express();
const router = express.Router();

const contactController = require('../controllers/contactController');

router.get("/:f_code",contactController.getProfile);
router.get("/",contactController.getData);
module.exports = router;