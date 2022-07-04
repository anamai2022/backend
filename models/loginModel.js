const express = require("express");
const Sequelize = require("sequelize");
const db = require('../models/index');
const Op = db.Sequelize.Op;
const AuthenDB = db.AuthenDB;

class LoginModel {
static findLoginByCode(f_login) {
    return AuthenDB.findAll({
      where: {
        f_login: {
          [Op.eq]: f_login,
        },
        f_status: {
          [Op.eq]: 1,
        },
        f_usertype: {
            [Op.ne]: 1,
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
  static findByCodeSendProfile(f_code){
    return AuthenDB.findAll({
      where: {
        f_login: {
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
}

module.exports = LoginModel;