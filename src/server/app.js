const express = require("express");
const router = require("./routers");
const responseTime = require("response-time");
const app = express();
app.use(responseTime());
app.use(router);

module.exports = app;
