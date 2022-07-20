const express = require("express");
const Sequelize = require("sequelize");
const db = require("../models/index");
const Op = db.Sequelize.Op;
const QuestionnaireDB = db.QuestionnaireDB;
const answerScoreDB = db.answerScoreDB;
const flowAnswerDB = db.flowAnswerDB;
const ScoreTransectionDB = db.ScoreTransectionDB;
class answerModel {
  static findScoreByDocumentRunning() {
    return QuestionnaireDB.findAll({
      where: {
        f_hadertitle: {
          [Op.eq]: 0,
        },
        f_status: {
          [Op.eq]: 1,
        },
      },
    })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }
  static findCountQuestionnaireGroup() {
    return QuestionnaireDB.findAll({
      attributes: ["f_section"],
      group: ["f_section"],
    })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }
  static findQuestionAndScore(f_docrunning,f_year,f_hospitalCode) {
    return ScoreTransectionDB.findAll({
      where: {
        f_docrunning: {
          [Op.eq]: f_docrunning,
        },
        f_year: {
          [Op.eq]: f_year,
        },
        f_hospitalCode: {
          [Op.eq]: f_hospitalCode,
        },        
        f_status: {
          [Op.eq]: 1,
        },
      },
    })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }
}
module.exports = answerModel;
