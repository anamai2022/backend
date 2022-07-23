const express = require("express");
const Sequelize = require("sequelize");
const db = require("../models/index");
const Op = db.Sequelize.Op;
const HospitalDB = db.HospitalDB;
const HospitalViewDB = db.HospitalViewDB;
class HospitalModel {
  static findListZoneAreByCode(f_zonearea){
    return HospitalViewDB.findAll({
      where: {
        f_zonearea: {
          [Op.eq]: f_zonearea,
        },
        f_usertype:{
          [Op.eq]: 2,
        },
        f_statusHospital: {
          [Op.eq]: 1,
        },
        f_statusUser: {
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

  static findZoneAreLevel(f_zonearea,f_level){
    return HospitalViewDB.findAll({
      where: {
        f_zonearea: {
          [Op.eq]: f_zonearea,
        },
        f_usertype: {
          [Op.eq]: f_level,
        },        
        f_statusHospital: {
          [Op.eq]: 1,
        },
        f_statusUser: {
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
        return err;
      });
  }

  static findAll() {
    return HospitalDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  static SaveData(body) {
    return HospitalDB.create(body)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  static getUpdateData(f_code,body){
    return HospitalDB.update(body,{ where: { f_code: f_code }})
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
  }

  static getUpdateAll(body,f_code){
    return HospitalDB.update(body,{ where: { f_code: f_code }})
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
  }  

}
module.exports = HospitalModel;
