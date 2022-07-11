const express = require("express");
const HospitalModel = require("../models/HospitalModel");


exports.getProfileByZoneArea = (req, res) => {
  HospitalModel.findHospitalZoneAreByCode(req.params.f_code)
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
