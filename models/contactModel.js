const express = require("express");
const Sequelize = require("sequelize");
const db = require("../models/index");
const Op = db.Sequelize.Op;
const ContactDB = db.ContactDB;
class ContactModel {
  static findByCode(f_code) {
    return ContactDB.findAll({
      where: {
        f_contactId: {
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
module.exports = ContactModel;
