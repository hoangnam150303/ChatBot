const path = require("path");
const express = require("express");
const configViewEngine = (app) => {
  app.set("views", path.join("./src", "views"));
  app.set("view engine", "ejs");
};

module.exports = configViewEngine;
