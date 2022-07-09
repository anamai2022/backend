const express = require("express");
const questionnaireModel = require("../models/questionnaireModel");

exports.searchByGroup = (req, res)=>{ 
  questionnaireModel.findByCode(req.params.group)
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
      messagesboxs: error,
    });
  });  
}
exports.getData = (req, res) => {
  questionnaireModel.findAll()
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
      messagesboxs: error,
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
