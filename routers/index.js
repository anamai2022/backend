const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

const loginRouter = require("./logincode");
router.use("/logincode", loginRouter);

const profileRouter = require("./profile");
router.use("/profile", profileRouter);

const contactRouter = require("./contact");
router.use("/contact", contactRouter);

const hospitalRouter = require("./hospital");
router.use("/hospital", hospitalRouter);

const questionnaireRouter = require("./questionnaire");
router.use("/questionnaire", questionnaireRouter);

const masterRouter = require("./master");
router.use("/master", masterRouter);

const userRouter = require("./users");
router.use("/user", userRouter);

const appoveRouter = require("./appove");
router.use("/appove", appoveRouter);

const uploadRouter = require("./upload");
router.use("/upload", uploadRouter);

const scoreRouter = require("./score");
router.use("/score", scoreRouter);

const flowAnswerRouter = require("./flowAnswer");
router.use('/flowAnswer',flowAnswerRouter);

const answerRouter = require("./answer");
router.use('/answer',answerRouter);

module.exports = router;