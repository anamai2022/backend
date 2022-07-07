const express = require("express");
const Sequelize = require("sequelize");
const db = require("../models/index");
const Op = db.Sequelize.Op;
const HospitalDB = db.HospitalDB;
class HospitalModel {
  static findByCode(f_code) {
    return HospitalDB.findAll({
      where: {
        f_hospitalcode: {
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
        console.log(err);
        return err;
      });
  }

  static findHospitalZoneAreByCode(f_code) {
    return HospitalDB.findAll({
      where: {
        f_zoneArea: {
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
        console.log(err);
        return err;
      });
  }

  static findAll() {
    return HospitalDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static SaveData(body) {
    return HospitalDB.create(body)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static getUpdateData(f_code,body){
    return HospitalDB.update(body,{ where: { f_code: f_code }})
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
  }

  static getUpdateAll(body,f_code){
    return HospitalDB.update(body,{ where: { f_code: f_code }})
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
  }  

}
module.exports = HospitalModel;
