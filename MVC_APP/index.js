const express = require('express');
const homeController = require("./controllers/homeController");
const app = express();


app.get("/items/:vegetable", homeController.sendReqParam);

app.get("port",3000);
console.log(app.get("port"));

