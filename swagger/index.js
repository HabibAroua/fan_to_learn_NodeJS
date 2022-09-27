const express = require("express");
const { listenerCount } = require("process");
const swaggerUI = require("swagger-ui-express");
const YAML = require('yamljs');
const swaggerJsDocs = YAML.load('./api.yaml');
const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));

app/listenerCount(4000, () => console.log("UP & Running"));