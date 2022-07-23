module.exports = (sequelize, Sequelize) => {
    const HospitalView = sequelize.define(
      "tv_grouphospital",
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
        f_hospitalcode: {
          type: Sequelize.STRING,
          field: "f_hospitalcode",
        },
        f_hospitalname: {
          type: Sequelize.STRING,
          field: "f_hospitalname",
        },
        f_province: {
            type: Sequelize.STRING,
            field: "f_province",
          },
        f_zoneArea: {
          type: Sequelize.STRING,
          field: "f_zoneArea",
        },
        f_zoneAreaName: {
            type: Sequelize.STRING,
            field: "f_zoneAreaName",
          },    
        f_type_hospital: {
            type: Sequelize.STRING,
            field: "f_type_hospital",
        },
        f_usertype:{
            type: Sequelize.STRING,
            field: "f_usertype",
        },
        f_statusHospital: {
            type: Sequelize.STRING,
            field: "f_statusHospital",
          },    
        f_statusUser: {
            type: Sequelize.STRING,
            field: "f_statusUser",
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
    return HospitalView;
  };
  