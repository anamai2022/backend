module.exports = (sequelize, Sequelize) => {
    const answerScoreSchema = sequelize.define(
      "tbl_answerscore",
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
        f_docrunning: {
          type: Sequelize.STRING,
          field: "f_docrunning",
        },
        f_userCode: {
          type: Sequelize.STRING,
          field: "f_userCode",
        },
        f_zone: {
          type: Sequelize.INTEGER,
          field: "f_zone",
        },
        f_province: {
          type: Sequelize.STRING,
          field: "f_province",
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
          f_createdate: {
            type: Sequelize.STRING,
            field: "f_createdate",
          },
          f_year: {
            type: Sequelize.STRING,
            field: "f_year",
          },
          f_title: {
            type: Sequelize.STRING,
            field: "f_title",
          },
          f_codetitle: {
            type: Sequelize.STRING,
            field: "f_codetitle",
          },
          f_status: {
            type: Sequelize.STRING,
            field: "f_status",
          },
          f_score: {
            type: Sequelize.INTEGER,
            field: "f_score",
          },
          f_question_group:{
            type:Sequelize.STRING,
            field:"f_question_group"
          },
          f_question:{
            type:Sequelize.STRING,
            field:"f_question"          
          },
          f_sequence:{
            type:Sequelize.STRING,
            field:"f_sequence"  
          }      
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
    return answerScoreSchema;
  };
  