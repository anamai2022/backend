const express = require("express");
const hospitalModel = require("../models/hospitalModel");


exports.getProfileByZoneArea = (req, res) => {
  hospitalModel.findHospitalZoneAreByCode(req.params.f_code)
  .then((result) => {
    if (result.length > 0) {
      res.json({
        result: result,
        messagesboxs: "Success",
      });
    } else {
      res.json({
        messagesboxs: "unSuccess",
      });
    }
  }).catch((error) => {
    res.status(500).json({
      messagesboxs: 'unSuccess',
      result:"null",
      messages: error,
    });
  });
};


exports.getListZoneArea = (req, res) => {
  hospitalModel.findListZoneAreByCode(req.params.f_zonearea)
  .then((result) => {
    if (result.length > 0) {
      res.json({
        messagesboxs: "Success",
        count:result.length,
        result: result,                
      });
    } else {
      res.json({
        messagesboxs: "unSuccess",
      });
    }
  }).catch((error) => {
    res.status(500).json({
      messagesboxs: 'unSuccess',
      result:"null",
      messages: error,
    });
  });
};

exports.getLevelTwoByZoneArea = (req, res) => {
  hospitalModel.findZoneAreLevel(req.params.f_zonearea,2)
  .then((result) => {
    if (result.length > 0) {
      res.json({
        result: result,
        messagesboxs: "Success",
      });
    } else {
      res.json({
        messagesboxs: "unSuccess",
      });
    }
  }).catch((error) => {
    res.status(500).json({
      messagesboxs: 'unSuccess',
      result:"null",
      messages: error,
    });
  });
};

exports.getLevelThreeByZoneArea = (req, res) => {
  hospitalModel.findZoneAreLevel(req.params.f_zonearea,2)
  .then((result) => {
    if (result.length > 0) {
      res.json({
        result: result,
        messagesboxs: "Success",
      });
    } else {
      res.json({
        messagesboxs: "unSuccess",
      });
    }
  }).catch((error) => {
    res.status(500).json({
      messagesboxs: 'unSuccess',
      result:"null",
      messages: error,
    });
  });
};

exports.getLevelFourByZoneArea = (req, res) => {
  hospitalModel.findZoneAreLevel(req.params.f_zonearea,4)
  .then((result) => {
    if (result.length > 0) {
      res.json({
        result: result,
        messagesboxs: "Success",
      });
    } else {
      res.json({
        messagesboxs: "unSuccess",
      });
    }
  }).catch((error) => {
    res.status(500).json({
      messagesboxs: 'unSuccess',
      result:"null",
      messages: error,
    });
  });
};

exports.appoveController = (req, res, next) => {};
