const express = require("express");
const authRoute = require("./routes/auth.routes");
 
const app = express();
app.use(express.json())

// app.use((req,res,next)=>{

// })
app.use("/auth", authRoute);

module.exports = app;
