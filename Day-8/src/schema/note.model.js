const mongoose = require("mongoose")



const noteSchema = new mongoose.Schema({
    name:String,
    age:Number
})

const noteModel = mongoose.model("note",noteSchema)

module.exports = noteModel