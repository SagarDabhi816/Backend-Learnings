//  import express from express
const express = require("express");

// // create server using express
const app = express();

// use middleware to parse express data 
app.use(express.json());

// initilize empty array of notes
let notes = [];

// // use get method to get the current data of notes

app.get("/notes", (req, res) => {

  if(notes.length === 0){
    res.status(404).json({
      message: "No notes found",
      notes: notes,
    });
  }
  else{
     res.status(200).json({
    message: "yeahh boiii",
    notes: notes,
  });
  }
});

// // use post method to create notes

app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.status(201).json({
    message: "Post created succesfully",
  });
});

// //us delete method to delete notes

app.delete("/notes/:id",(req,res)=>{

  const id = req.params.id
  
  delete notes[id]

    res.json({
      message:"notes deleted succesfully",
      notes:notes[id] ,
    })
})

// use patch method to update existing data

app.patch("/notes/:index", (req, res) => {
  // find index
  const index = req.params.index;

  // Get updated title from req.body
  const { title } = req.body;

  // get notes to be updated
  notes[index].title = title;

  res.json({
    message: "Your notes is updated",
    body: req.body,
  });
});


// Run server

app.listen(3000, () => {
  console.log("server running on port 3000");
})





















