const mongoose = require("mongoose");

const connectDB = async (dbUrl) => {
  try {
    await mongoose.connect(dbUrl);
    console.log("Database connected");
  } catch (error) {
    console.error("DB connection failed", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;