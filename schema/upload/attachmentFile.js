module.exports = (sequelize, Sequelize) => {
    const AttachmentFile = sequelize.define(
      "Tbl_attachmentFile",
      {
        f_code: {
          type: Sequelize.INTEGER,
          field: "f_code",
          primaryKey: true,
        },
        f_docrunning: {
          type: Sequelize.STRING,
          field: "f_docrunning",
        },
        f_userCode: {
          type: Sequelize.STRING,
          field: "f_userCode",
        },
        f_zone: {
          type: Sequelize.STRING,
          field: "f_zone",
        },
        f_province: {
          type: Sequelize.STRING,
          field: "f_province",
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
        f_status: {
          type: Sequelize.STRING,
          field: "f_status",
        },
        f_hospitalLevel: {
          type: Sequelize.STRING,
          field: "f_hospitalLevel",
        },
        f_hospitalCode: {
          type: Sequelize.STRING,
          field: "f_hospitalCode",
        },
        f_positionCode: {
          type: Sequelize.STRING,
          field: "f_positionCode",
        },
        f_section: {
          type: Sequelize.STRING,
          field: "f_section",
        },
        f_createdate: {
          type: Sequelize.STRING,
          field: "f_createdate",
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
    return AttachmentFile;
  };
  