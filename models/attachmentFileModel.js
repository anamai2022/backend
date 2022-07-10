const express = require("express");
const Sequelize = require("sequelize");
const db = require("../models/index");
const Op = db.Sequelize.Op;
const AttachmentFileDB = db.AttachmentFileDB;
class AttachmentFileModel {
  static findByCode(f_code) {
    return AttachmentFileDB.findAll({
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
    return AttachmentFileDB.findAll({
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
    return AttachmentFileDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;      
      });
  }

  static updateAll(f_code,body) {
    return AttachmentFileDB.update(body,{ where: { f_code: f_code }})
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  static updateData(f_code,body) {
    return AttachmentFileDB.update(body,{ where: { f_code: f_code }})
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }
  static deleteData(f_code) {
    return AttachmentFileDB.destroy({
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
    return AttachmentFileDB.create(payload)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

}
module.exports = AttachmentFileModel;
