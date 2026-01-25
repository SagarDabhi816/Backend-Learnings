const mongoose = require("mongoose");

function connectToDB() {
  mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log("Server is connected");
  });
}

module.exports = connectToDB;
