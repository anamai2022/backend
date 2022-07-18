const express = require("express");
const Sequelize = require("sequelize");
const sequelize = require("sequelize");
const db = require("../models/index");
const Op = db.Sequelize.Op;
const flowAnswerDB = db.flowAnswerDB;

class flowAnswerModel {
  static findByCode(f_hospitalCode, f_running, f_year) {
    return flowAnswerDB.findAll({
        where: {
          f_hospitalCode: {
            [Op.eq]: f_hospitalCode,
          },
          f_running: {
            [Op.eq]: f_running,
          },
          f_year: {
            [Op.eq]: f_year,
          },
          f_statusAppove: {
            [Op.eq]: 0,
          },
          f_appove: {
            [Op.eq]: 0,
          },
          f_status: {
            [Op.eq]: 1,
          },
        },
        order: [["f_createdate", "DESC"]],
      })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  static updateAll(f_code, body) {
    return flowAnswerDB.update(body, { where: { f_code: f_code } })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  static updateData(f_code, body) {
    return flowAnswerDB
      .update(body, { where: { f_code: f_code } })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }
  static deleteData(f_code) {
    return flowAnswerDB
      .destroy({
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
    return flowAnswerDB
      .create(payload)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }
  
}
module.exports = flowAnswerModel;
