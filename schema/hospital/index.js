module.exports = (sequelize, Sequelize) => {
    const Hospital = sequelize.define(
      "tbl_Hospital",
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
        f_login: {
          type: Sequelize.STRING,
          field: "f_login",
        },
        f_hospitalname: {
          type: Sequelize.STRING,
          field: "f_hospitalname",
        },
        f_address: {
            type: Sequelize.STRING,
            field: "f_address",
          },
        f_subdistrict: {
          type: Sequelize.STRING,
          field: "f_subdistrict",
        },
        f_district: {
            type: Sequelize.STRING,
            field: "f_district",
          },    
        f_province: {
            type: Sequelize.STRING,
            field: "f_province",
        },
        f_zipcode:{
            type: Sequelize.STRING,
            field: "f_zipcode",
        },
        f_latitude: {
            type: Sequelize.STRING,
            field: "f_latitude",
          },    
        f_longitude: {
            type: Sequelize.STRING,
            field: "f_longitude",
        },
        f_zoneArea:{
            type: Sequelize.STRING,
            field: "f_zoneArea",
        },
        f_bed:{
            type: Sequelize.STRING,
            field: "f_bed",
        },        
        f_telphone: {
            type: Sequelize.STRING,
            field: "f_telphone",
          },    
        f_fax: {
            type: Sequelize.STRING,
            field: "f_fax",
        },
        f_type_hospital:{
            type: Sequelize.STRING,
            field: "f_type_hospital",
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
    return Hospital;
  };
  