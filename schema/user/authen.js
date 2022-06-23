module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define(
      "tbl_User",
      {
        f_code: {
          type: Sequelize.INTEGER,
          field: "f_code",
          primaryKey: true,
        },
        f_login: {
          type: Sequelize.STRING,
          field: "f_login",
        },
        f_password: {
          type: Sequelize.STRING,
          field: "f_password",
        },
        f_usertype: {
          type: Sequelize.STRING,
          field: "f_usertype",
        },
        f_remark: {
            type: Sequelize.STRING,
            field: "f_remark",
          },
        f_admintype: {
          type: Sequelize.STRING,
          field: "f_admintype",
        },
        f_contactId: {
            type: Sequelize.STRING,
            field: "f_contactId",
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
    return Users;
  };
  