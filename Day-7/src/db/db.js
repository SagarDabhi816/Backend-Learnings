const mongoose = require("mongoose")

function connectToDB(){
        mongoose.connect("mongodb+srv://sagardabhi816_db_user:12345666@cluster0.kjrqfcr.mongodb.net/cohort").then(()=>{
            console.log("Yeahhhh boiiii")
        })
}

module.exports = connectToDB