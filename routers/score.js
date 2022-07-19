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
  "/document/:f_hospitalCode/:f_docrunning/:f_year/:f_year/:f_codetitle",
  authenticateJWT,
  scoreController.getSearchScoreById,
  function (req, res) {}
);

router.get(
  "/group/:f_hospitalCode/:f_year",
  authenticateJWT,
  scoreController.groupDocumentById,
  function (req, res) {}
);

router.get(
  "/sumscore/:f_hospitalCode/:f_docrunning/:f_year/:f_section/:f_question_group",
  authenticateJWT,
  scoreController.getSumScoreByDocrunning,
  function (req, res) {}
);


router.get(
  "/countscore/:f_hospitalCode/:f_docrunning/:f_year/:f_section/:f_question_group",
  authenticateJWT,
  scoreController.getCountScoreByDocrunning,
  function (req, res) {}
);
module.exports = router;
