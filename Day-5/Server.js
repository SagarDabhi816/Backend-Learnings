require('dotenv').config()
const express = require("express");

const connectToDatabase = require('./src/db/db.js')

// Final Call to connect server to db
connectToDatabase()

const app = express();

app.use(express.json());

app.get("/notes", (req, res) => [
  resizeBy.json({
    message: "Gotcha nooob",
  }),
]);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
