const express = require("express");
const { v4: uuid_v4 } = require('uuid');
const moment = require('moment');
const answerModel = require("../models/answerModel");

exports.getScoreByRunning = (req, res) => {
  const id = uuid_v4();
  answerModel
    .findScoreByDocumentRunning()
    .then((result) => {
      if (result.length > 0) {
        var question = result
        answerModel.findCountQuestionnaireGroup()
        .then((results)=>{   
          res.status(200).json({
            messagesboxs: "Success",  
            QuestionnaireId : 9999999999999,
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
            CountQuestion: result.length,
            CountStep:results.length,
            GroupTab:results,              
            Step:question,                                      
          });                            
        })
        .catch((error) => {
          res.status(500).json({
            messagesboxs: "unSuccess",
            result: "null",
            messages: error,
          });
        });
      } else {
        res.json({
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

exports.answerController = (req, res, next) => {};
