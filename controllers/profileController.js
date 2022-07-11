const express = require("express");
const jwt = require("jsonwebtoken");
const profileModel = require("../models/profileModel");
exports.getProfile = (req, res) => {
  profileModel.findByCode(req.params.f_code)
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

exports.getAllData = (req, res) => {
  profileModel.findAll()
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


exports.getSaveProfile = (req, res) =>{
  console.log('payload SAVE : ',req.body)
  profileModel.SaveData(req.body)
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

exports.getUpdateData = (req, res) =>{
  console.log('payload Update Data : ',req.params.f_code,req.body)
  profileModel.getUpdateData(req.params.f_code,req.body)
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

exports.getUpdateAll = (req, res) =>{
  console.log('payload Update All Data : ',req.params.f_code,req.body)
  profileModel.getUpdateAll(req.body,req.params.f_code)
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

exports.profileController = (req, res, next) => {};
