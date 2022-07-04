module.exports = (sequelize, Sequelize) => {
    const UserContact = sequelize.define(
      "tbl_Contact",
      {
        f_contactId: {
          type: Sequelize.INTEGER,
          field: "f_contactId",
          primaryKey: true,
        },
        f_firstName: {
          type: Sequelize.STRING,
          field: "f_firstName",
        },
        f_lastName: {
          type: Sequelize.STRING,
          field: "f_lastName",
        },
        f_email: {
          type: Sequelize.STRING,
          field: "f_email",
        },   
        f_remark: {
          type: Sequelize.STRING,
          field: "f_remark",
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
    return UserContact;
  };
  