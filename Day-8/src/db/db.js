const mongoose = require("mongoose")

function connectToDataBase(){


    mongoose.connect("mongodb+srv://sagardabhi816_db_user:12345666@cluster0.kjrqfcr.mongodb.net/cohort").then(()=>{
        console.log("database is connected")
    })

}

module.exports = connectToDataBase