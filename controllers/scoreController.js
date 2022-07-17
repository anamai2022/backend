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
    scoreModel.findByCode(req.params.f_hospitalCode,req.params.f_docrunning,req.params.f_year,req.params.f_section)
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

exports.getSearchScoreById = (req, res) => {   
  scoreModel.findByCodes(req.params.f_hospitalCode,req.params.f_docrunning,req.params.f_year,req.params.f_section,req.params.f_codetitle)
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
exports.getDocumentById = (req, res) => { 
  scoreModel.findDocumentById(req.params.f_hospitalCode,req.params.f_docrunning,req.params.f_year,req.params.f_codetitle)
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

exports.groupDocumentById = (req, res) => { 
  scoreModel.groupByDocRunning(req.params.f_hospitalCode,req.params.f_year)
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
