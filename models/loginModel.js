const express = require("express");
const Sequelize = require("sequelize");
const db = require('../models/index');
const Op = db.Sequelize.Op;
const AuthenDB = db.AuthenDB;

class LoginModel {
constructor({
    f_code = "",
    f_login = "",
    f_password = "",
    f_usertype = "",
    f_remark = "",
    f_admintype = "",
    f_contactId = "",
    f_createDate = "",
    f_createBy = "",
    f_updateDate = "",
    f_updateBy = "",
    f_status = "",
  }) {
    this.f_code = f_code;
    this.f_login = f_login;
    this.f_password = f_password;
    this.f_usertype = f_usertype;
    this.f_remark = f_remark;
    this.f_admintype = f_admintype;
    this.f_contactId = f_contactId;
    this.f_login = f_login;
    this.f_createDate = f_createDate;
    this.f_createBy = f_createBy;
    this.f_updateDate = f_updateDate;
    this.f_updateBy = f_updateBy;
    this.f_status = f_status;
  }

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
}

module.exports = LoginModel;