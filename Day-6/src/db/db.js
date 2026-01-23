const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect(
      "mongodb+srv://sagardabhi816_db_user:Kw8of7XljIra3J6t@cluster0.kjrqfcr.mongodb.net/Learnings"
    )
    .then(() => {
      console.log("Shit is connected");
    });
}

module.exports = connectToDB;

// 3 Steps to perform crud operation in database
// 1 : connect application to server
// 2 : create schema of data means how the data will look in database
// 3 : create model and add schema variable in place of callbaclk func
 