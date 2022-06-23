module.exports = (sequelize, Sequelize) => {
    const Profile = sequelize.define(
      "tbl_Profile",
      {
        f_code: {
          type: Sequelize.INTEGER,
          field: "f_code",
          primaryKey: true,
        },
        f_hospitalcode: {
          type: Sequelize.STRING,
          field: "f_hospitalcode",
        },
        f_vsion: {
          type: Sequelize.STRING,
          field: "f_vsion",
        },
        f_mistion: {
          type: Sequelize.STRING,
          field: "f_mistion",
        },
        f_policy: {
            type: Sequelize.STRING,
            field: "f_policy",
          },
        f_gotoKnow: {
          type: Sequelize.STRING,
          field: "f_gotoKnow",
        },
        f_facebook: {
            type: Sequelize.STRING,
            field: "f_facebook",
          },    
        f_twitter: {
            type: Sequelize.STRING,
            field: "f_twitter",
        },
        f_line:{
            type: Sequelize.STRING,
            field: "f_line",
        },
        f_director: {
            type: Sequelize.STRING,
            field: "f_director",
          },    
        f_physician: {
            type: Sequelize.STRING,
            field: "f_physician",
        },
        f_responsiblePerson:{
            type: Sequelize.STRING,
            field: "f_responsiblePerson",
        },
        f_remark:{
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
    return Profile;
  };
  