const mongoose = require("mongoose");

function connectToDatabase(){
  mongoose
    .connect(
      "mongodb+srv://sagardabhi816_db_user:Kw8of7XljIra3J6t@cluster0.kjrqfcr.mongodb.net/learnings"
    )
    .then(() => {
      console.log("shit is connectd");
    });
};
module.exports = connectToDatabase







































