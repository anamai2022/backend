const express = require("express");
const Sequelize = require("sequelize");
const sequelize = require("sequelize");
const db = require("../models/index");
const Op = db.Sequelize.Op;
const flowAnswerDB = db.flowAnswerDB;

class flowAnswerModel {
  static findByCode(f_hospitalCode,f_docrunning,f_year,f_section) {
    return answerScoreDB.findAll({
      where: {
        f_hospitalCode: {
          [Op.eq]: f_hospitalCode,
        },
        f_docrunning: {
          [Op.eq]: f_docrunning,
        },
        f_year: {
          [Op.eq]: f_year,
        },  
        f_section:{
          [Op.eq]: f_section,
        },       
        f_status: {
          [Op.eq]: 1,
        },
      },
      order: [['f_createdate', 'DESC']]
    })
      .then((result) => {        
        return result;
      })
      .catch((err) => {        
        return err;
      });
  }

  static findByCodes(f_hospitalCode,f_docrunning,f_year,f_section,f_codetitle) {
    return answerScoreDB.findAll({
      where: {
        f_codetitle:{
          [Op.eq]: f_codetitle,
        },
        f_hospitalCode: {
          [Op.eq]: f_hospitalCode,
        },
        f_docrunning: {
          [Op.eq]: f_docrunning,
        },
        f_year: {
          [Op.eq]: f_year,
        },  
        f_section:{
          [Op.eq]: f_section,
        },       
        f_status: {
          [Op.eq]: 1,
        },
      },
      order: [['f_createdate', 'DESC']]
    })
      .then((result) => {        
        return result;
      })
      .catch((err) => {        
        return err;
      });
  }
  static findByDocRunning(f_docrunning) {
    return answerScoreDB.findAll({
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
  
  static groupByDocRunning(f_hospitalCode,f_year) {
    return answerScoreDB.findAll({
      limit: 1,     
      where: {
        f_hospitalCode: {
          [Op.eq]: f_hospitalCode,
        },
        f_year: {
          [Op.eq]: f_year,
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
    return answerScoreDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }
  static findDocumentById(f_hospitalCode,f_docrunning,f_year,f_codetitle){
    return answerScoreDB.findAll({
      where: {
        f_hospitalCode: {
          [Op.eq]: f_hospitalCode,
        },
        f_docrunning: {
          [Op.eq]: f_docrunning,
        },
        f_year: {
          [Op.eq]: f_year,
        },
        f_codetitle: {
          [Op.eq]: f_codetitle,
        },                        
        f_status: {
          [Op.eq]: 1,
        },
      },
      order: [['f_createdate', 'DESC']]
    })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });    
  }
  static updateAll(f_code,body) {
    return ScoreanswerScoreDBDB.update(body,{ where: { f_code: f_code }})
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  static updateData(f_code,body) {
    return answerScoreDB.update(body,{ where: { f_code: f_code }})
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }
  static deleteData(f_code) {
    return answerScoreDB.destroy({
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
module.exports = flowAnswerModel;
