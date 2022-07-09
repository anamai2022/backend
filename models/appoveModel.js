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
        return err;
      });
  }
  
  static findAll() {
    return ContactDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  static updateAll(f_code,body) {
    return ContactDB.update(body,{ where: { f_contactId: f_code }})
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  static updateData(f_code,body) {
    return ContactDB.update(body,{ where: { f_contactId: f_code }})
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }
  static deleteData(f_code) {
    return ContactDB.destroy({
      where: { f_contactId: f_code },
    })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  static insertDB(payload) {
    return ContactDB.create(payload)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

}
module.exports = appoveModel;
