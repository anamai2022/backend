const express = require("express");
const { v4: uuid_v4 } = require("uuid");
const moment = require("moment");
const answerModel = require("../models/answerModel");
const QuestionnaireModel = require("../models/QuestionnaireModel");
const AttachmentFileModel = require("../models/attachmentFileModel");

exports.getScoreByRunning = (req, res) => {
  const id = uuid_v4();
  const f_docrunning = req.params.f_docrunning;
  const f_year = req.params.f_year;
  const f_hospitalCode = req.params.f_hospitalCode;
  QuestionnaireModel.findAll() 
    .then((resultx) => {
      answerModel
        .findCountQuestionnaireGroup() 
        .then((results) => {
          answerModel
            .findQuestionAndScore(f_docrunning, f_year, f_hospitalCode)
            .then((resultScore) => {
              for (let index = 0; index < resultScore.length; index++) {
                AttachmentFileModel.findByDocumentCodeAndYear(
                  f_docrunning,
                  f_hospitalCode,
                  f_year,
                  resultScore[index].f_codetitle
                )
                  .then((resultAttachment) => {
                    const dataSet = {
                      QuestionnaireId: id,
                      QuestionnaireHeader: "แบบการประเมินตนเอง",
                      QuestionnaireName: "แบบสำรวจการประเมินตนเอง",
                      QuestionnaireNickname: "แบบการประเมินตนเอง",
                      QuestionnaireDescription: "แบบสำรวจการประเมินตนเอง",
                      QuestionnaireRemark: "แบบสำรวจการประเมินตนเอง",
                      Url: "/questionnaire",
                      StartDate: moment(new Date()).format(
                        "YYYY-MM-DD HH:mm:ss"
                      ),
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
                              (elementx) =>
                                items.f_section == elementx.f_section
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
                                ScoreLength: Question.f_questionWtSub,
                                ShowDesction: Question.f_description,
                                ShowUploadFile: Question.f_upload_file,
                                ShowUploadImage: Question.f_upload_image,
                                ShowInputAddressUrl: Question.f_address_url,
                                ShowAddMessage: Question.f_additional_message,
                                ShowForm: Question.f_form,
                                ShowFormName: Question.f_fromname,
                                ShowFormType: Question.f_fromType,
                                ShowDescription: Question.f_description,
                                SumChoice: resultx.filter(
                                  (x) => x.f_section == Question.f_section
                                ).length,
                                Answers: resultScore
                                  .filter(
                                    (Score) =>
                                      Question.f_code == Score.f_codetitle
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
                                      SumAnswer: resultScore.filter(
                                        (y) => y.f_codetitle == Answer.f_code
                                      ).length,
                                      AttachmentFileCount:
                                        resultAttachment.filter(
                                          (Attachment) =>
                                            Attachment.f_docrunning ==
                                              Answer.f_docrunning &&
                                            Attachment.f_questioncode ==
                                              Answer.f_codetitle
                                        ).length,
                                      AttachmentFile: resultAttachment
                                        .filter(
                                          (Attachment) =>
                                            Attachment.f_docrunning ==
                                              Answer.f_docrunning &&
                                            Attachment.f_questioncode ==
                                              Answer.f_codetitle
                                        )
                                        .map((Attachments) => {
                                          return {
                                            AttachmentCode: Attachments.f_code,
                                            DocumentRunningCode:
                                              Attachments.f_docrunning,
                                            DocumentYear:
                                              Attachments.f_year,
                                            DocumentHospitalCode:
                                              Attachments.f_hospitalCode,
                                            DocumentQuestionCode:
                                              Attachments.f_questioncode, 
                                            DocumentAddMessage:Attachments.f_additional_message,   
                                            DocumentAddressURL:Attachments.f_address_url,                                                                                                                                       
                                            AttachmentUsers:
                                              Attachments.f_userCode,
                                            AttachmentsFileName:
                                              Attachments.f_filedocument,
                                            AttachmentsFileReName:
                                              Attachments.f_image,
                                            AttachmentFileType:
                                              Attachments.f_filetype,
                                            AttachmentFileSize:
                                              Attachments.f_filesize,
                                            AttachmentStatus:
                                              Attachments.f_status,
                                            AttachmentType: Attachments.f_type,
                                            AttachmentCrateDate:
                                              Attachments.f_createdate, 
                                          };
                                        }),
                                    };
                                  }),
                              };
                            }),
                        };
                      }),
                    };                    
                    return res.status(200).json({
                      messagesboxs: "Success",
                      UserQuestionAnswer: dataSet,
                    });                  
                  })
                  .catch((error) => {    
                    console.log(error.toString())
                  });
              }
            })
            .catch((error) => {
              return  res.status(500).json({
                messagesboxs: "unSuccess",
                result: "null",
                messages: error,
              });
            });
        })
        .catch((error) => {
          return res.status(500).json({
            messagesboxs: "unSuccess",
            result: "null",
            messages: error,
          });
        });
    })
    .catch((error) => {
      return res.status(500).json({
        messagesboxs: "unSuccess",
        result: "null",
        messages: error,
      });
    });
};

exports.answerController = (req, res, next) => {};
