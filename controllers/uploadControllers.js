var express = require("express");
var md5 = require("md5");
const db = require('../models/index');
const uploadModel = require("../models/uploadModel");
const AttachmentFileModel = require('../models/attachmentFileModel')
const fs = require("fs");
const moment = require('moment');
const upLoadfile = require('path').resolve('./public/uploads/')
const SLASH_DMYHMS = 'YYYY-MM-DD HH:mm:ss';

exports.getUploadController = (req, res, next) => {
  try {
   console.log(req.file);
   console.log(req.file.originalname);
   console.log(req.file.filename);
    //คำสั่ง Try เป็นส่วนของบริเวณที่คาดการว่าอาจจะเกิดเหตุผิดปกติของโปรแกรม
    res.status(200).send({
      message: "Uploaded the file successfully ",
      originalname: req.file.originalname,
      filename: req.file.filename
    });
  } catch (err) {
    //คำสั่ง Catch เป็นส่วนของการแก้ไขข้อผิดพลาด หรือความผิดปกติของโปรแกรม
    res.status(500).send({
      message: `Could not upload the file: . ${err}`,
    });
  } finally {
    // คำสั่ง Finally เป็นส่วนเสริม สำหรับการทำงานก่อนจบ การจัดการความผิดปกติของโปรแกรม
    console.log("Commit Finally Uploaded the file successfully ");
  }
};

exports.getUploadSaveController = (req, res) => {
  try {
    if (req.body !== null || req.body == "") {
      console.log(req.body)    
      AttachmentFileModel.insertDB(req.body)
        
    } else {
      res.status(500).send({
        message: "กรุณาส่งข้อมูลมาลงระบบ",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: `Could not upload Save the file: . ${err}`,
    });
  } finally {
    console.log("Commit Finally");
  }
};

exports.getUploadFileController = (req, res) => {
  try {
    if (req.body !== null || req.body == "") {
      fs.mkdir(req.body.f_hospitalCode, 0777, function (err) {
        if (err) {
          res.status(500).send({
            message: err,
          });
        } else {
          console.log("New directory successfully created.");
          const UploadData = new uploadModel({
            f_docrunning: req.body.f_docrunning,
            f_userCode: req.body.f_userCode,
            f_zone: req.body.f_zone,
            f_province: req.body.f_province,
            f_filedocument: req.body.f_filedocument,
            f_image: req.body.f_image,
            f_filetype: req.body.f_filetype,
            f_status: req.body.f_status,
            f_hospitalLevel: req.body.f_hospitalLevel,
            f_hospitalCode: req.body.f_hospitalCode,
            f_positionCode: req.body.f_positionCode,
          });
          UploadData.saveAll()
            .then((result) => {
              let message = "Save Scuccessfully";
              res.status(200).send({
                message: message,
              });
            })
            .catch((error) => {
              let message = `Could not Save: . ${error}`;
              res.status(500).send({
                message: message,
              });
            });
        }
      });
    } else {
      res.status(500).send({
        message: "กรุณาส่งข้อมูลมาลงระบบ",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: `Could not upload Save the file: . ${err}`,
    });
  } finally {
    console.log("Commit Finally");
  }
};

exports.getUploadImageController = (req, res) => {
  try {
    // console.log(req.file);
  //   console.log(req.file.originalname);
   //  console.log(req.file.filename);
     //คำสั่ง Try เป็นส่วนของบริเวณที่คาดการว่าอาจจะเกิดเหตุผิดปกติของโปรแกรม
     res.status(200).send({
       message: "Uploaded the image file successfully ",
       originalname: req.file.originalname,
       filename: req.file.filename
     });
   } catch (err) {
     //คำสั่ง Catch เป็นส่วนของการแก้ไขข้อผิดพลาด หรือความผิดปกติของโปรแกรม
     res.status(500).send({
       message: `Could not upload the file: . ${err}`,
     });
   } finally {
     // คำสั่ง Finally เป็นส่วนเสริม สำหรับการทำงานก่อนจบ การจัดการความผิดปกติของโปรแกรม
     console.log("Commit Finally Uploaded the file successfully ");
   }
};

exports.getImageController = (req, res) => {
  uploadModel
  .findHospitalCode(req.params.f_code)
  .then((result) => {
    res.status(200).json({
      data: {
        data: result,
      },
      messagesboxs: 'Success',
    });
  })
  .catch((error) => {
    res.status(500).json({
      messagesboxs: error,
    });
  });
};

exports.uploadControllers = (req, res, next) => {};
