const express = require("express");
const moment = require('moment');
const toDay = new Date();
const userModel = require("../models/userModel");
const loginModel = require("../models/loginModel");
exports.getProfile = (req, res) => {
  userModel.findByCode(req.params.f_code)
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
}
exports.getSendProfile = (req, res) => {
  loginModel.findByCodeSendProfile(req.params.f_code)
  .then((result) => {
    if(result.length > 0){    
      res.json({
        result:result[0].f_login,
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
exports.getProfileName = (req, res) => {
  userModel.findByName(req.params.f_name)
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
}
exports.getAllData = (req, res) => {
  userModel.findAll()
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
exports.getUpdateData = (req, res) => {
  userModel.updateData(req.params.f_code,req.body)
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
}

exports.getUpdateAll = (req, res) => {
  userModel.updateAll(req.params.f_code,req.body)
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
}

exports.getDeleteData = (req, res) => {
  userModel.deleteData(req.params.f_code)
  .then((result) => {
    res.status(201).json({
      messagesboxs: 'Success',
      result:result,
    });
  })
  .catch((error) => {
    res.status(500).json({
      messagesboxs: 'unSuccess',
      result:"null",
      messages: error,
    });
  });  
}

exports.getSaveData = (req, res) =>{
  let saveData = {
    f_firstName: req.body.f_firstName,
    f_lastName:req.body.f_lastName,
    f_email:req.body.f_email,
    f_remark: req.body.f_remark,
    f_createDate: moment(toDay).format('YYYY-MM-DD HH:mm:ss'),
    f_status:0
  }
  console.log(saveData);
  userModel.insertDB(saveData)
    .then((result) => {
      res.status(201).json({
        messagesboxs: 'Success',
        result:result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        messagesboxs: 'unSuccess',
        result:"null",
        messages: error,
      });
    });
}

exports.userController = (req, res, next) => {};
