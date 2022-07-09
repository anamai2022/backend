const db = require("../index");
const Sequelize = require("sequelize");
const answerScoreDB = db.answerScoreDB;
const Op = db.Sequelize.Op;
class answerScoreModel {
  static findStatusAll() {
    return answerScoreDB
      .findAll({
        where: {
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

  static insertDB(payload) {
    return answerScoreDB.create(payload)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }
  static deleteData(f_code) {
    return answerScoreDB.destroy({
      where: { f_code: f_code },
    })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  static updateAll(f_code,body) {
    return answerScoreDB.update(body,{ where: { f_code: f_code }})
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  static updateData(f_code,body) {
    return answerScoreDB.update(body,{ where: { f_code: f_code }})
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }  

  static findByCode(f_code) {
    return answerScoreDB.findAll({
      where: {
        f_code: {
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
  static findByDocumentRunning(f_docrunning) {
    return answerScoreDB.findAll({
      where: {
        f_docrunning: {
          [Op.eq]: f_docrunning,
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

  static findByHosital(f_hospitalCode) {
    return answerScoreDB.findAll({
      where: {
        f_hospitalCode: {
          [Op.eq]: f_hospitalCode,
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

  
  static findByYear(f_year) {
    return answerScoreDB.findAll({
      where: {
        f_year: {
          [Op.eq]: f_year,
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
}
module.exports = answerScoreModel;
