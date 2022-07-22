const express = require("express");
const { v4: uuid_v4 } = require("uuid");
const moment = require("moment");
const answerModel = require("../models/answerModel");
const QuestionnaireModel = require("../models/QuestionnaireModel");

exports.getScoreByRunning = (req, res) => {
  const id = uuid_v4();
  const f_docrunning = req.params.f_docrunning
  const f_year = req.params.f_year
  const f_hospitalCode = req.params.f_hospitalCode
  QuestionnaireModel.findAll() //คำถามทั้งหมด
    .then((resultx) => {
      answerModel
        .findCountQuestionnaireGroup() //เอากลุ่ม G
        .then((results) => {
          answerModel
            .findQuestionAndScore(f_docrunning,f_year,f_hospitalCode)
            .then((resultScore) => {
              const dataSet = {
                QuestionnaireId: id,
                QuestionnaireHeader: "แบบสำรวจการประเมินตนเอง",
                QuestionnaireName: "แบบสำรวจการประเมินตนเอง",
                QuestionnaireNickname: "แบบการประเมินตนเอง",
                QuestionnaireDescription: "แบบสำรวจการประเมินตนเอง",
                QuestionnaireRemark: "แบบสำรวจการประเมินตนเอง",
                Url: "/questionnaire",
                StartDate: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
                EndDate: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
                IsActive: true,
                IsPublish: true,
                CountQuestion: resultx.length,
                GroupTabCount: results.length,
                Questionnaire: results.map((items) => {
                  return {
                    TabName: items.f_section,
                    Question: resultx
                      .filter(
                        (elementx) => items.f_section == elementx.f_section
                      )
                      .map((Question) => {
                        return {
                          QuestionCode: Question.f_code,
                          QuestionGroup: Question.f_section,
                          Question: Question.f_question,
                          GroupQuestion: Question.f_question_group,
                          QuestionSeq: Question.f_sequence,
                          ShowHeader: Question.f_hadertitle,
                          ShowHeaderTitle: Question.f_title,
                          ShowDesc: Question.f_detail,
                          ScoreWT: Question.f_questionWtMain,
                          ShowDesction: Question.f_description,
                          ShowUploadFile: Question.f_upload_file,
                          ShowUploadImage: Question.f_upload_image,
                          ShowInputAddressUrl: Question.f_address_url,
                          ShowAddMessage: Question.f_additional_message,
                          ShowForm: Question.f_form,
                          ShowFormName: Question.f_fromname,
                          ShowFormType: Question.f_fromType,
                          SumChoice: resultx.filter(x => x.f_section == Question.f_section).length,
                          Answers: resultScore
                                  .filter(
                                    (Score) => Question.f_code == Score.f_codetitle
                                  )                                  
                                  .map((Answer) => {
                                    return {
                                      AnswerCode: Answer.f_code,
                                      QuestionCode: Question.f_code,
                                      MapCodeAnswerTable: Answer.f_codetitle,
                                      RunningCode: Answer.f_docrunning,
                                      DocumentYear: Answer.f_year,
                                      HospitalCode: Answer.f_hospitalCode,
                                      ScoreWT: Answer.f_questionWtMain,
                                      ScoreCoutQuestion: Answer.f_questionWtSub,
                                      Score: Answer.f_score,
                                      SumAnswer: resultScore.filter(y => y.f_codetitle == Answer.f_code).length,
                                    }
                                  }),
                        };
                      }),
                  };
                }),
              };
              res.status(200).json({
                messagesboxs: "Success",
                UserQuestionAnswer: dataSet,
              });
            })
            .catch((error) => {
              res.status(500).json({
                messagesboxs: "unSuccess",
                result: "null",
                messages: error,
              });
            });
        })
        .catch((error) => {
          res.status(500).json({
            messagesboxs: "unSuccess",
            result: "null",
            messages: error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        messagesboxs: "unSuccess",
        result: "null",
        messages: error,
      });
    });
  // answerModel
  //   .findQuestionAndScore(
  //     req.params.f_docrunning,
  //     req.params.f_year,
  //     req.params.f_hospitalCode
  //   )
  //   .then((result) => {
  //     if (result.length > 0) {
  //       console.log('Data')
  //     } else {
  //       res.json({
  //         messagesboxs: "unSuccess",
  //         result: "null",
  //         messages: error,
  //       });
  //     }
  //   })
  //   .catch((error) => {
  //     res.status(500).json({
  //       messagesboxs: "unSuccess",
  //       result: "null",
  //       messages: error,
  //     });
  //   });
};

exports.answerController = (req, res, next) => {};
