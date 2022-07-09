const express = require("express");
const Sequelize = require("sequelize");
const db = require("../models/index");
const Op = db.Sequelize.Op;
const QuestionnaireDB = db.QuestionnaireDB;
class QuestionnaireModel {
  
  static findByCode(group) {
    return QuestionnaireDB.findAll({
      where: {
        f_section: {
          [Op.eq]: group,
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
    return QuestionnaireDB.findAll({
      where: {
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
module.exports = QuestionnaireModel;
