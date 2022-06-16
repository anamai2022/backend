const configs = {
    database: "Appyfhs",
    username: "root",
    password: "#Iris@2013",
    host: "localhost",
    port: "3306", // Mssql port : 1433 , mysql port : 3306
    dialect: "mysql",
    srvPort: "4000",
    secret: "@#SDfionli1818685*-+sfsf",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    expiresIn: "1h", //86400 = expires in 24 hours
    expiresTime: "3600",
  };
  module.exports = configs;