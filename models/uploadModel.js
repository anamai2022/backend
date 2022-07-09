const express = require("express");
const Sequelize = require("sequelize");
const db = require("../models/index");
const Op = db.Sequelize.Op;
const UploadDB = db.UploadDB;
class UploadModel {
  static findByCode(f_code) {
    return UploadDB.findAll({
      where: {
        f_code: {
          [Op.eq]: f_code,
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
  static findByDocumentRunning(f_docrunning) {
    return UploadDB.findAll({
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
    return UploadDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;      
      });
  }

  static updateAll(f_code,body) {
    return UploadDB.update(body,{ where: { f_code: f_code }})
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  static updateData(f_code,body) {
    return v.update(body,{ where: { f_code: f_code }})
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }
  static deleteData(f_code) {
    return UploadDB.destroy({
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
    return UploadDB.create(payload)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

}
module.exports = UploadModel;
