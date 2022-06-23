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
      messagesboxs: error,
    });
  });  
}
exports.getData = (req, res) => {
  res.status(200).json({ message: "getData" });
};

exports.hospitalController = (req, res, next) => {};
