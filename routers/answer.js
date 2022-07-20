const express = require("express");
const app = express();
const router = express.Router();
const jwt = require("jsonwebtoken");
const { authenticateJWT } = require("../middleware/authenticateJWT");
const answerController = require("../controllers/answerController");

router.get(
  "/questionnaire",
  authenticateJWT,
  answerController.getScoreByRunning,
  function (req, res) {}
);


module.exports = router;
