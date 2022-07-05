const express = require("express");
const contactModel = require("../models/contactModel");
exports.getProfile = (req, res) => {
  contactModel.findByCode(req.params.f_code)
  .then((result) => {
    if(result.length > 0){     
      res.json({
        result:result,
        messagesboxs: 'Success',
      });
    }else{
      res.json({
        messagesboxs: 'unSuccess',
      });
    }
  })
  .catch((error) => {
    res.status(500).json({
      messagesboxs: error,
    });
  });  
}

exports.getProfileName = (req, res) => {
  contactModel.findByName(req.params.f_name)
  .then((result) => {
    if(result.length > 0){     
      res.json({
        result:result,
        messagesboxs: 'Success',
      });
    }else{
      res.json({        
        messagesboxs: 'unSuccess',
      });
    }
  })
  .catch((error) => {
    res.status(500).json({
      messagesboxs: error,
    });
  });  
}
exports.getAllData = (req, res) => {
  contactModel.findAll()
  .then((result) => {
    if(result.length > 0){     
      res.json({
        result:result,
        messagesboxs: 'Success',
      });
    }else{
      res.json({
        messagesboxs: 'unSuccess',
      });
    }
  })
  .catch((error) => {
    res.status(500).json({
      messagesboxs: error,
    });
  }); 
};
exports.getUpdateData = (req, res) => {
  contactModel.updateData(req.params.f_code,req.body)
  .then((result) => {
    if(result.length > 0){     
      res.json({
        result:result,
        messagesboxs: 'Success',
      });
    }else{
      res.json({
        messagesboxs: 'unSuccess',
      });
    }
  })
  .catch((error) => {
    res.status(500).json({
      messagesboxs: error,
    });
  });  
}

exports.getUpdateAll = (req, res) => {
  console.log('Get update : ',req.params.f_code, req.body)
  contactModel.updateAll(req.params.f_code,req.body)
  .then((result) => {
    if(result.length > 0){     
      res.json({
        result:result,
        messagesboxs: 'Success',
      });
    }else{
      res.json({
        messagesboxs: 'unSuccess',
      });
    }
  })
  .catch((error) => {
    res.status(500).json({
      messagesboxs: error,
    });
  });  
}

exports.getDeleteData = (req, res) => {
  contactModel.deleteData(req.params.f_code)
  .then((result) => {
    res.status(201).json({
      messagesboxs: 'Success',
      result:result,
    });
  })
  .catch((error) => {
    res.status(500).json({
      messagesboxs: error,
    });
  });  
}

exports.getSaveData = (req, res) =>{
  console.log(req.body)
  contactModel.insertDB(req.body)
    .then((result) => {
      res.status(201).json({
        messagesboxs: 'Success',
        result:result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
}

exports.contactController = (req, res, next) => {};
