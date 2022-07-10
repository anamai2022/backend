module.exports = (sequelize, Sequelize) => {
    const UploadFile = sequelize.define(
      "Tbl_upload",
      {
        f_code: {
          type: Sequelize.INTEGER,
          field: "f_code",
          primaryKey: true,
        },
        f_surveyId: {
          type: Sequelize.STRING,
          field: "f_surveyId",
        },
        f_questionAnswerId: {
          type: Sequelize.STRING,
          field: "f_questionAnswerId",
        },
        f_docrunning: {
          type: Sequelize.STRING,
          field: "f_questionAnswerId",
        },
        f_userCode: {
          type: Sequelize.STRING,
          field: "f_userCode",
        },
        f_filedocument: {
          type: Sequelize.STRING,
          field: "f_filedocument",
        },
        f_image: {
          type: Sequelize.STRING,
          field: "f_image",
        },
        f_filetype: {
          type: Sequelize.STRING,
          field: "f_filetype",
        },
        f_hospitalCode: {
          type: Sequelize.STRING,
          field: "f_hospitalCode",
        },
        f_section: {
          type: Sequelize.STRING,
          field: "f_section",
        },
        f_filesize: {
          type: Sequelize.STRING,
          field: "f_filesize",
        },
        f_year: {
          type: Sequelize.STRING,
          field: "f_year",
        },
        f_type: {
          type: Sequelize.STRING,
          field: "f_type",
        },
        f_statusDoucument: {
          type: Sequelize.STRING,
          field: "f_statusDoucument",
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
    return UploadFile;
  };
  