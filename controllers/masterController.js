const express = require("express");
const jwt = require("jsonwebtoken");
const masterModel = require("../models/masterModel");
exports.getScore = (req, res) => {
  masterModel.findScoreAll()
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
exports.getYear = (req, res) => {
  masterModel.findYearAll()
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

exports.getZoneArea = (req, res) => {
  masterModel.findZoneAreaAll()
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
  masterModel.findMasterAll()
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


exports.getAllLevel = (req, res) => {
  masterModel.findMasterAll()
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

exports.getOrganization = (req, res) => {
  masterModel.findOrganizationAll()
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

exports.getPosition = (req, res) => {
  masterModel.findPositionAll()
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


exports.getInstitution = (req, res) => {
  masterModel.findInstitutionAll()
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
exports.masterController = (req, res, next) => {};
