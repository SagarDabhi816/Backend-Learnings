const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const noteModel = mongoose.model("user", noteSchema);

module.exports = noteModel;
