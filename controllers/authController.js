const express = require("express");
const jwt = require("jsonwebtoken");
const loginModel = require("../models/loginModel");
exports.loginCode = (req, res) => {
  loginModel.findLoginByCode(req.body.f_login)
  .then((result) => {
    if(result.length > 0){
     let jwtToken = jwt.sign(
      {
        f_code: result[0].f_code,
        f_login: result[0].f_login,
      },
      process.env.secret,
      {
        expiresIn: "1h", 
      }
    );      
      res.json({
        result:result,
        token: jwtToken,
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
exports.authController = (req, res, next) => {};
