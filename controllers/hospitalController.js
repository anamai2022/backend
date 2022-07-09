const express = require("express");
const jwt = require("jsonwebtoken");
const hospitalModel = require("../models/hospitalModel");
exports.getProfile = (req, res) => {
  
  hospitalModel.findByCode(req.params.f_code)
  .then((result) => {
    if(result.length > 0){     
      res.json({
        result:result,
        messagesboxs: 'Success',
      });
    }else{
      res.json({
        result:"null",
        messagesboxs: 'ไม่พบผู้ใช้งานในระบบ',
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

exports.getAllData = (req, res) => {
  hospitalModel.findAll()
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

exports.getSaveProfile = (req, res) =>{
  console.log('param : ',req.params.f_code,'payload : ',req.body)
  hospitalModel.SaveData(req.body)
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

exports.getUpdateData = (req, res) =>{
  hospitalModel.getUpdateData(req.params.f_code,req.body)
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

exports.getUpdateAll = (req, res) =>{
  console.log(req.params.f_code,req.body)
  hospitalModel.getUpdateAll(req.body,req.params.f_code)
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

exports.hospitalController = (req, res, next) => {};
