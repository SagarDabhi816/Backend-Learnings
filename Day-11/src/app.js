const express = require("express");
const indexRoutes = require("./routes/index.routes");

const app = express();

// Middleware Set Between App And The Router
app.use((req, res, next) => {
  console.log("APP Middleware Created");
  next();
});

app.use("/", indexRoutes);

module.exports = app;
