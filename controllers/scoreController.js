const express = require("express");
const scoreModel = require("../models/scoreModel");

exports.createScoreById = (req, res) => { 
    scoreModel.insertDB(req.body)
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
    scoreModel.findByCode(req.params.f_hospitalCode,req.params.f_docrunning)
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
exports.scoreController = (req, res, next) => {};
