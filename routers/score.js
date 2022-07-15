const express = require("express");
const app = express();
const router = express.Router();
const jwt = require("jsonwebtoken");
const { authenticateJWT } = require("../middleware/authenticateJWT");
const scoreController = require("../controllers/scoreController");

router.post(
  "/",
  authenticateJWT,
  scoreController.createScoreById,
  function (req, res) {}
);

router.get(
  "/:f_hospitalCode/:f_docrunning",
  authenticateJWT,
  scoreController.getScoreById,
  function (req, res) {}
);
module.exports = router;
