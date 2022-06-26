module.exports = (sequelize, Sequelize) => {
    const Score = sequelize.define(
      "tbl_Score",
      {
        f_code: {
          type: Sequelize.INTEGER,
          field: "f_code",
          primaryKey: true,
        },
        f_score: {
          type: Sequelize.STRING,
          field: "f_score",
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
            field: "f_status",
          },
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
    return Score;
  };
  