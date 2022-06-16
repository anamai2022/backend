const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const logger = require("morgan");
const router = require("./routers/index");
const swaggerUi = require('swagger-ui-express'),swaggerDocument = require('./swagger.json');

const cors = require("cors");
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:4200','http://localhost:8081', 'http://localhost:8080'],
}));
app.use(logger("dev"));
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