const express = require("express");
const flowAnswerModel = require("../models/flowAnswerModel");

exports.createScoreById = (req, res) => {   
    flowAnswerModel.insertDB(req.body)
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

exports.getScoreById = (req, res) => { 
    flowAnswerModel.findByCode(req.params.f_hospitalCode)
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

exports.flowAnswerController = (req, res, next) => {};
