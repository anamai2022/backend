const express = require("express");
const Sequelize = require("sequelize");
const db = require("../models/index");
const Op = db.Sequelize.Op;
const ProfileDB = db.ProfileDB;
class ProfileModel {
  static findByCode(f_code) {
    return ProfileDB.findAll({
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

  static findAll() {
    return ProfileDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

}
module.exports = ProfileModel;
