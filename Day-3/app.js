// Import the express from express
const express = require("express");
// Create server
const app = express();

// empty array of notes
const notes = [];
``
//  Middleware to parse the express request body
app.use(express.json());

// get method to fetch th current data using json({})
app.get("/getnotes", (req, res) => {
  //  res.send("Request successfull")
  console.log(res.body);
  res.status(200).json({
    message: "Its working fine",
    notes: notes,
  });
});

// use post method to send the postman data to the server
app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.status(201).send({
    message: "working fine",
    notes: notes,
  });
});

// Start the server 
app.listen(3000, () => {
  console.log("Sever is running on port 3000");
});
