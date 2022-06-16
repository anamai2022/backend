const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

  const questionnaireRouter = require("./questionnaire");
  router.use("/questionnaire", questionnaireRouter);
    
module.exports = router;