const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

const loginRouter = require("./logincode");
router.use("/logincode", loginRouter);
const questionnaireRouter = require("./questionnaire");
router.use("/questionnaire", questionnaireRouter);


module.exports = router;