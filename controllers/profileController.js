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

exports.profileController = (req, res, next) => {};