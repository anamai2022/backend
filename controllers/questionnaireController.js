const express = require("express");
const { v4: uuid_v4 } = require("uuid");
const moment = require("moment");
const questionnaireModel = require("../models/questionnaireModel");
const answerModel = require("../models/answerModel");
const AttachmentFileModel = require("../models/attachmentFileModel");

exports.searchByGroup = (req, res)=>{ 
  questionnaireModel.findByCode(req.params.group)
  .then((result) => {
    if(result.length > 0){     
      res.json({
        result:result,
        groupTotal: result.length,
        messagesboxs: 'Success',
      });
    }else{
      res.json({
        result:"null",
        messagesboxs: 'unSuccess',
      });
    }
  })
  .catch((error) => {
    res.status(500).json({
      messagesboxs: 'unSuccess',
      result:"null",
      messages: error,
    });
  });  
}

exports.getCountScoreByDocrunning= (req, res) => { 
  questionnaireModel.findCountScoreByDocrunning(req.params.f_hadertitle,req.params.f_section,req.params.f_question_group)
  .then((result) => {
    res.json({
      result:result,
      messagesboxs: 'Success',
    })
  })
  .catch((error) => {
    res.status(500).json({
      messagesboxs: 'unSuccess',
      result:"null",
      messages: error,
    });
  }); 
};
exports.getData = (req, res) => {
  const id = uuid_v4();  
  const TabGroupCount = 0
  const Question = null
  const dataSetQuestion = null
  answerModel.findCountQuestionnaireGroup() 
  .then((results) => {
    var GroupTabs = {
      GroupTab: results.length,
      GroupTabName:results,
    }  
  })
  .catch((error) => {
    console.log(error.toString())
  });  

  questionnaireModel.findAll()
  .then((result) => {
    dataSetQuestion = {
      CountQuestion: result.length,
      GroupTabCount: TabGroupCount,  
    }
  })
  .catch((error) => {
    console.log(error.toString())
  }); 
  const DataSend ={
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
    Questionnaire: dataSetQuestion,
  } 
  res.json({
    messagesboxs: "Success",
    StatusCode: res.statuscode,
    Data: DataSend,
  })
};

exports.getHeadersTitle = (req, res) => {
  questionnaireModel.findHeadersTitle()
  .then((result) => {
    if(result.length > 0){     
      res.json({
        result:result,
        messagesboxs: 'Success',
      });
    }else{
      res.json({
        result:"null",
        messagesboxs: 'unSuccess',
      });
    }
  })
  .catch((error) => {
    res.status(500).json({
      messagesboxs: 'unSuccess',
      result:"null",
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
}
exports.questionnaireController = (req, res, next) => {};
