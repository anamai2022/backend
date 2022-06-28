const express = require("express");
const app = express();
const router = express.Router();

const masterController = require('../controllers/masterController');

router.get("/score",masterController.getScore);
router.get("/year",masterController.getYear);
router.get("/",masterController.getAllData);
router.get("/zonearea",masterController.getZoneArea);
router.get("/appovelevel",masterController.getAllLevel);
module.exports = router;