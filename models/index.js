const util = require("util");
require('dotenv').config()
const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_User, process.env.DB_Password, {
  host: process.env.DB_Server,
  port: process.env.DB_Port,
  dialect: process.env.DB_Dialect,
  logging: false,
  freezeTableName: true,
  operatorsAliases: 0, 
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.AuthenDB = require('../schema/user/authen')(sequelize, Sequelize);
db.UserContactDB = require('../schema/user/contact')(sequelize, Sequelize);
db.ProfileDB = require('../schema/profile/index')(sequelize, Sequelize);
db.ContactDB = require('../schema/contact/index')(sequelize, Sequelize);
db.HospitalDB = require('../schema/hospital/index')(sequelize, Sequelize);
db.MasterDB = require('../schema/master/index')(sequelize, Sequelize);
db.ScoreDB = require('../schema/master/score')(sequelize, Sequelize);
db.YearDB = require('../schema/master/year')(sequelize, Sequelize);
db.ZoneAreaDB = require('../schema/master/zonearea')(sequelize, Sequelize);
db.QuestionnaireDB = require('../schema/Questionnaire/index')(sequelize, Sequelize);
module.exports = db;