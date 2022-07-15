const express = require("express");
const Sequelize = require("sequelize");
const db = require("../models/index");
const Op = db.Sequelize.Op;
const answerScoreDB = db.answerScoreDB;
class scoreModel {
  static findByCode(f_hospitalCode,f_docrunning) {
    return ScoreDB.findAll({
      where: {
        f_hospitalCode: {
          [Op.eq]: f_hospitalCode,
        },
        f_docrunning: {
          [Op.eq]: f_docrunning,
        },        
        f_status: {
          [Op.eq]: 1,
        },
      },
    })
      .then((result) => {
        console.log(result)
        return result;
      })
      .catch((err) => {
        console.log(err)
        return err;
      });
  }
  static findByDocRunning(f_docrunning) {
    return ScoreDB.findAll({
      where: {
        f_docrunning: {
          [Op.eq]: f_docrunning,
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
  
  static findAll() {
    return ScoreDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  static updateAll(f_code,body) {
    return ScoreDB.update(body,{ where: { f_code: f_code }})
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  static updateData(f_code,body) {
    return ScoreDB.update(body,{ where: { f_code: f_code }})
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }
  static deleteData(f_code) {
    return ScoreDB.destroy({
      where: { f_code: f_code },
    })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  static insertDB(payload) {
    return answerScoreDB.create(payload)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

}
module.exports = scoreModel;
