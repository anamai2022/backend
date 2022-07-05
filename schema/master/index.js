module.exports = (sequelize, Sequelize) => {
  const Master = sequelize.define(
    "tbl_Master",
    {
      f_MasterId: {
        type: Sequelize.INTEGER,
        field: "f_MasterId",
        primaryKey: true,
      },
      f_MasterName: {
        type: Sequelize.STRING,
        field: "f_MasterName",
      },
      f_MasterGroup: {
        type: Sequelize.STRING,
        field: "f_MasterGroup",
      },
      f_SeqGroup: {
        type: Sequelize.STRING,
        field: "f_MasterGroup",
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
  return Master;
};
