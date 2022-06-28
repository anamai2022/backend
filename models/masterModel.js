const express = require("express");
const Sequelize = require("sequelize");
const db = require("../models/index");
const Op = db.Sequelize.Op;
const MasterDB = db.MasterDB;
const YearDB = db.YearDB;
const ZoneAreaDB = db.ZoneAreaDB;
const ScoreDB = db.ScoreDB;
class MasterModel {

    static findMasterAll() {
        return MasterDB.findAll({
            where:{
              f_status: {
                [Op.eq]: 1,
              },
            },          
          })
          .then((result) => {
            return result;
          })
          .catch((err) => {
            console.log(err);
          });
      }
      static findYearAll() {
        return YearDB.findAll({
          where:{
            f_status: {
              [Op.eq]: 1,
            },
          },          
        })
          .then((result) => {
            return result;
          })
          .catch((err) => {
            console.log(err);
          });
      } 
      
      static findZoneAreaAll() {
        return ZoneAreaDB.findAll({
          where:{
            f_status: {
              [Op.eq]: 1,
            },
          },          
        })
          .then((result) => {
            return result;
          })
          .catch((err) => {
            console.log(err);
          });
      } 

      static findScoreAll() {
        return ScoreDB.findAll({
          where:{
            f_status: {
              [Op.eq]: 1,
            },
          },          
        })
          .then((result) => {
            return result;
          })
          .catch((err) => {
            console.log(err);
          });
      }           
}
module.exports = MasterModel;