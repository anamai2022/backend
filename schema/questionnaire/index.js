module.exports = (sequelize, Sequelize) => {
  const Questionnaire = sequelize.define(
    "tbl_Questionnaire",
    {
      f_code: {
        type: Sequelize.INTEGER,
        field: "f_code",
        primaryKey: true,
      },
      f_section: {
        type: Sequelize.STRING,
        field: "f_section",
      },
      f_question: {
        type: Sequelize.STRING,
        field: "f_question",
      },
      f_question_group: {
        type: Sequelize.STRING,
        field: "f_question_group",
      },
      f_sequence: {
        type: Sequelize.STRING,
        field: "f_sequence",
      },
      f_hadertitle: {
        type: Sequelize.STRING,
        field: "f_hadertitle",
      },
      f_title: {
        type: Sequelize.STRING,
        field: "f_title",
      },

      f_detail: {
        type: Sequelize.STRING,
        field: "f_detail",
      },
      f_request: {
        type: Sequelize.STRING,
        field: "f_request",
      },
      f_description: {
        type: Sequelize.STRING,
        field: "f_description",
      },
      f_questionWtMain: {
        type: Sequelize.STRING,
        field: "f_questionWtMain",
      },      
      f_questionWtSub: {
        type: Sequelize.STRING,
        field: "f_questionWtSub",
      },      
      f_upload_file: {
        type: Sequelize.STRING,
        field: "f_upload_file",
      },
      f_upload_image: {
        type: Sequelize.STRING,
        field: "f_upload_image",
      },
      f_address_url: {
        type: Sequelize.STRING,
        field: "f_address_url",
      },
      f_additional_message: {
        type: Sequelize.STRING,
        field: "f_additional_message",
      },
      f_form: {
        type: Sequelize.STRING,
        field: "f_form",
      },
      f_fromextra: {
        type: Sequelize.STRING,
        field: "f_fromextra",
      },
      f_fromname: {
        type: Sequelize.STRING,
        field: "f_fromname",
      },
      f_fromType: {
        type: Sequelize.STRING,
        field: "f_fromType",
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
  return Questionnaire;
};
