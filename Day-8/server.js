// import dependecies
// create server
// start server on 3000
// use middleware to parse data
// create src>db>db.js
// create function to connect with db and export function
// create src>schema>model.js
// start connection to db from server.js
// create schema for the db , create model using schema
// export model
// import files on server.js and use model to perform crud

// Import adependecies
const express = require("express");
const connectToDataBase = require("./src/db/db");
const noteModel = require("./src/schema/note.model");

// Create server
const app = express();

connectToDataBase();

// Use Middleware to parse data
app.use(express.json());

app.post("/notes", async (req, res) => {
  // notes.push(req.body)

    const{ name , age } = req.body;
    console.log(name,age)

  await noteModel.create(req.body);
  res.json({
    message: "notes created succesfully",
  });
});

app.get("/notes", async (req, res) => {
  const response = await noteModel.find();

  res.json({
    message: "notes fetched succesfully",
    notes: response,
  });

  // console.log(response[0].name);
});

app.delete("/notes/:index", async (req, res) => {
  const noteId = req.params.index;

  await noteModel.findOneAndDelete({
    _id: noteId,
  });

  res.status(204).json({
    message: "Note Deleted Succesfully",
  });
});

app.patch("/notes/:index", async (req, res) => {

  const noteId = req.params.index;

  
    const { name } = req.body;

  await noteModel.findOneAndUpdate(
    {
      _id: noteId,
    },
    {
      name: name,
    },
  );

  res.json({
    message: "Notes Updated Succesfully",
  });

});

// Start server
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
