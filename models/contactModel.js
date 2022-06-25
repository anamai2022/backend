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
  static findByName(f_name) {
    return ContactDB.findAll({
      where: {
        f_firstName: {
          [Op.eq]: f_name,
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
    return ContactDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static updateAll() {
    return ContactDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static updateData() {
    return ContactDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
module.exports = ContactModel;
