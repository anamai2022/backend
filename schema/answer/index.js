module.exports = (sequelize, Sequelize) => {
    const ScoreTransection = sequelize.define(
      "tv_score",
      {
        f_code: {
          type: Sequelize.INTEGER,
          field: "f_code",
          primaryKey: true,
        },
        f_codetitle: {
          type: Sequelize.STRING,
          field: "f_codetitle",
        },
        f_docrunning: {
          type: Sequelize.STRING,
          field: "f_docrunning",
        },
        f_section: {
          type: Sequelize.STRING,
          field: "f_section",
        },
        f_question_group: {
          type: Sequelize.STRING,
          field: "f_question_group",
        },
        f_hospitalCode: {
          type: Sequelize.STRING,
          field: "f_hospitalCode",
        },    
        f_year: {
          type: Sequelize.STRING,
          field: "f_year",
        },            
        f_score: {
          type: Sequelize.STRING,
          field: "f_score",
        },
        f_questionWtMain: {
          type: Sequelize.STRING,
          field: "f_questionWtMain",
        },      
        f_questionWtSub: {
          type: Sequelize.STRING,
          field: "f_questionWtSub",
        },         
        f_hadertitle: {
          type: Sequelize.STRING,
          field: "f_hadertitle",
        },
        f_title: {
          type: Sequelize.STRING,
          field: "f_title",
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
        f_createdate: {
          type: Sequelize.STRING,
          field: "f_createdate",
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
    return ScoreTransection;
  };
  