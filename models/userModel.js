const express = require("express");
const Sequelize = require("sequelize");
const db = require("../models/index");
const Op = db.Sequelize.Op;
const UserContactDB = db.UserContactDB;
class userModel {
  static findByCode(f_code) {
    return UserContactDB.findAll({
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
static findByCodeSendProfile(f_code){
  return UserContactDB.findAll({
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
    return UserContactDB.findAll({
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
    return UserContactDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  static updateAll(f_code,body) {
    return UserContactDB.update(body,{ where: { f_contactId: f_code }})
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  static updateData(f_code,body) {
    return UserContactDB.update(body,{ where: { f_contactId: f_code }})
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
  static deleteData(f_code) {
    return UserContactDB.destroy({
      where: { f_contactId: f_code },
    })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  static insertDB(payload) {
    return UserContactDB.create(payload)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

}
module.exports = userModel;
