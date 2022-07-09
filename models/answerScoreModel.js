const db = require("../index");
const Sequelize = require("sequelize");
const answerScoreSchema = require("../../schema/answerscore/index");
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
        console.log(err);
        return err;
      });
  }

  static insertDB(payload) {
    return answerScoreDB.create(payload)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

}
module.exports = answerScoreModel;
