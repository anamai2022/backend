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
  "/:f_hospitalCode/:f_docrunning/:f_year/:f_section",
  authenticateJWT,
  scoreController.getScoreById,
  function (req, res) {}
);

router.get(
  "document/:f_hospitalCode/:f_docrunning/:f_year/:f_year/:f_codetitle",
  authenticateJWT,
  scoreController.getScoreById,
  function (req, res) {}
);
module.exports = router;
