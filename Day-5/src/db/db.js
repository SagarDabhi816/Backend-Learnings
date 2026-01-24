const mongoose = require("mongoose");

function connectToDatabase(){
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("DB is connectd");
    });
};
module.exports = connectToDatabase