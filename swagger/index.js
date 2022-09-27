const express = require("express");
const swaggerUI = require("swagger-ui-express");
const YAML = require('yamljs');
const swaggerJsDocs = YAML.load('./api.yaml');
const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));

app.get('/string',(req, res)=>{ res.status(200).send("This is a String") })

app.get('/user', (req, res)=>{
    const obj = {id: 1, name: "Habib Aroua"};
    res.status(200).send(obj)
});

app.listen(4000, () => console.log("UP & Running"));