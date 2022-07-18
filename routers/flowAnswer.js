const express = require("express");
const app = express();
const router = express.Router();
const jwt = require("jsonwebtoken");
const { authenticateJWT } = require("../middleware/authenticateJWT");
const flowAnswerController = require("../controllers/flowAnswerController");

router.post(
  "/",
  authenticateJWT,
  flowAnswerController.createScoreById,
  function (req, res) {}
);

router.get(
  "/:f_docrunning/:f_year/",
  authenticateJWT,
  flowAnswerController.getScoreById,
  function (req, res) {}
);

module.exports = router;
