module.exports = (sequelize, Sequelize) => {
  const FlowAnswerSchema = sequelize.define(
    "tbl_FlowAnswer",
    {
      f_code: {
        type: Sequelize.INTEGER,
        field: "f_code",
        primaryKey: true,
      },
      f_running: {
        type: Sequelize.STRING,
        field: "f_running",
      },
      f_g1: {
        type: Sequelize.STRING,
        field: "f_g1",
      },
      f_g2: {
        type: Sequelize.STRING,
        field: "f_g2",
      },
      f_g3: {
        type: Sequelize.INTEGER,
        field: "f_g3",
      },
      f_g4: {
        type: Sequelize.STRING,
        field: "f_g4",
      },
      f_g5: {
        type: Sequelize.STRING,
        field: "f_g5",
      },
      f_Total: {
        type: Sequelize.STRING,
        field: "f_Total",
      },
      f_levelOne: {
        type: Sequelize.STRING,
        field: "f_levelOne",
      },
      f_levelOneName: {
        type: Sequelize.STRING,
        field: "f_levelOneName",
      },
      f_levelTwo: {
        type: Sequelize.STRING,
        field: "f_levelTwo",
      },
      f_levelTwoName: {
        type: Sequelize.STRING,
        field: "f_levelTwoName",
      },
      f_levelThree: {
        type: Sequelize.STRING,
        field: "f_levelThree",
      },
      f_levelThreeName: {
        type: Sequelize.STRING,
        field: "f_levelThreeName",
      },
      f_levelFour: {
        type: Sequelize.INTEGER,
        field: "f_levelFour",
      },
      f_levelFourName: {
        type: Sequelize.STRING,
        field: "f_levelFourName",
      },
      f_levelFive: {
        type: Sequelize.STRING,
        field: "f_levelFive",
      },
      f_levelFiveName: {
        type: Sequelize.STRING,
        field: "f_levelFiveName",
      },
      f_appove: {
        type: Sequelize.STRING,
        field: "f_appove",
      },
      f_statusAppove: {
        type: Sequelize.STRING,
        field: "f_statusAppove",
      },
      f_year: {
        type: Sequelize.STRING,
        field: "f_year",
      },
      f_levelOnetoday: {
        type: Sequelize.STRING,
        field: "f_levelOnetoday",
      },
      f_levelTwotoday: {
        type: Sequelize.INTEGER,
        field: "f_levelTwotoday",
      },
      f_levelThreetoday: {
        type: Sequelize.STRING,
        field: "f_levelThreetoday",
      },
      f_levelFourtoday: {
        type: Sequelize.STRING,
        field: "f_levelFourtoday",
      },
      f_levelFivetoday: {
        type: Sequelize.STRING,
        field: "f_levelFivetoday",
      },
      f_createDate: {
        type: Sequelize.STRING,
        field: "f_createDate",
      },
      f_createBy: {
        type: Sequelize.STRING,
        field: "f_createBy",
      },
      f_updateDate: {
        type: Sequelize.STRING,
        field: "f_updateDate",
      },
      f_updateBy: {
        type: Sequelize.STRING,
        field: "f_updateBy",
      },
      f_status: {
        type: Sequelize.STRING,
        f      
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return FlowAnswerSchema;
};
