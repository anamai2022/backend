const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const logger = require("morgan");
const router = require("./routers/index");
const swaggerUi = require('swagger-ui-express'),swaggerDocument = require('./swagger.json');
const dbconfig = require('./confgs/database');
const cors = require("cors");
app.use(cors({
    origin: ['https://yfhs.anamai.moph.go.th', 'http://localhost:8080'],
}));
app.use(logger("dev"));
app.use("/public", express.static("public"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
  );

  app.get('/', (req, res) => {
    res.json({ message: "Ok" });
  })
module.exports = app;