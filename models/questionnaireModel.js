const express = require("express");
const Sequelize = require("sequelize");
const sequelize = require("sequelize");
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
  static findHeadersTitle() {
    return QuestionnaireDB.findAll({
      where: {
        f_hadertitle: {
          [Op.eq]: 1,
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

  static findCountScoreByDocrunning(f_hadertitle,f_section,f_question_group) {
    return QuestionnaireDB.findAll({
      where: {
        f_hadertitle: {
          [Op.eq]: f_hadertitle,
        },
        f_section: {
          [Op.eq]: f_section,
        },
        f_status: {
          [Op.eq]: 1,
        },  
        f_section:{
          [Op.eq]: f_section,
        },
        f_question_group:{
          [Op.eq]: f_question_group,
        },       
        f_status: {
          [Op.eq]: 1,
        },
      }, 
      attributes: [[sequelize.fn('count', sequelize.col('*')), 'countquestion']],
      raw: true,       
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
