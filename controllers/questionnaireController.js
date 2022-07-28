const express = require("express");
const { v4: uuid_v4 } = require("uuid");
const moment = require("moment");
const ConfigApp = require("../confgs/config.json");
const questionnaireModel = require("../models/questionnaireModel");
const answerModel = require("../models/answerModel");
const AttachmentFileModel = require("../models/attachmentFileModel");

exports.searchByGroup = (req, res) => {
  questionnaireModel
    .findByCode(req.params.group)
    .then((result) => {
      if (result.length > 0) {
        res.json({
          result: result,
          groupTotal: result.length,
          messagesboxs: "Success",
        });
      } else {
        res.json({
          result: "null",
          messagesboxs: "unSuccess",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        messagesboxs: "unSuccess",
        result: "null",
        messages: error,
      });
    });
};

exports.getCountScoreByDocrunning = (req, res) => {
  questionnaireModel
    .findCountScoreByDocrunning(
      req.params.f_hadertitle,
      req.params.f_section,
      req.params.f_question_group
    )
    .then((result) => {
      res.json({
        result: result,
        messagesboxs: "Success",
      });
    })
    .catch((error) => {
      res.status(500).json({
        messagesboxs: "unSuccess",
        result: "null",
        messages: error,
      });
    });
};
exports.getData = (req, res) => {
  const id = uuid_v4();
  const TabGroupCount = 0;
  const Question = null;
  const dataSetQuestion = null;
  answerModel
    .findCountQuestionnaireGroup()
    .then((resultGroup) => {
      questionnaireModel
        .findAll()
        .then((resultAll) => {
          const DataSend = {
            QuestionnaireId: id,
            QuestionnaireHeader: ConfigApp.QuestionnaireHeader,
            QuestionnaireName: ConfigApp.QuestionnaireName,
            QuestionnaireNickname: ConfigApp.QuestionnaireNickname,
            QuestionnaireDescription: ConfigApp.QuestionnaireDescription,
            QuestionnaireRemark: ConfigApp.QuestionnaireRemark,
            Url: ConfigApp.QuestionnaireUrl,
            StartDate: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
            EndDate: moment(new Date())
              .add(1, "y")
              .format("YYYY-MM-DD HH:mm:ss"),
            IsActive: true,
            IsPublish: true,
            Questionnaire: dataSetQuestion,
            CountQuestion: resultAll.length,
            GroupTabCount: resultGroup.length,
            Questionnaire: resultGroup.map((itemsGroup) => {
              return {
                TabName: itemsGroup.f_section,
                Question: resultAll
                  .filter(
                    (elementAll) => itemsGroup.f_section == elementAll.f_section
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
                      SumChoice: resultAll.filter(
                        (countQuestion) =>
                          Question.f_section == countQuestion.f_section &&
                          countQuestion.f_hadertitle == 0
                      ).length,
                    };
                  }),
                QuestionCount: resultAll.filter(
                  (elementAll) => itemsGroup.f_section == elementAll.f_section
                ).length,                
              };
            }),
          };
          res.json({
            messagesboxs: "Success",
            StatusCode: res.statuscode,
            UserQuestionAnswer: DataSend,
          });
        })
        .catch((error) => {
          console.log(error.toString());
        });
    })
    .catch((error) => {
      console.log(error.toString());
    });
};

exports.getHeadersTitle = (req, res) => {
  questionnaireModel
    .findHeadersTitle()
    .then((result) => {
      if (result.length > 0) {
        res.json({
          result: result,
          messagesboxs: "Success",
        });
      } else {
        res.json({
          result: "null",
          messagesboxs: "unSuccess",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        messagesboxs: "unSuccess",
        result: "null",
        messages: error,
      });
    });
};

exports.searchById = (req, res) => {
  res.status(200).json({ message: "searchById" });
};
exports.searchByName = (req, res) => {
  res.status(200).json({ message: "searchByName" });
};
exports.createData = (req, res) => {
  res.status(200).json({ message: "createData" });
};
exports.editData = (req, res) => {
  res.status(200).json({ message: "editData" });
};
exports.updateData = (req, res) => {
  res.status(200).json({ message: "updateData" });
};
exports.deleteData = (req, res) => {
  res.status(200).json({ message: "deleteData" });
};
exports.questionnaireController = (req, res, next) => {};
