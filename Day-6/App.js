const express = require("express");
const connecttoDB = require('./src/db/db')


connecttoDB()
const app = express();

app.use(express.json());

let notes = [];

app.get("/notes", (req, res) => {
  res.json({
    message: "Nots derived susscessfully",
    notes: notes,
  });
});

app.post("/notes", (req, res) => {
  notes.push(req.body);

  res.json({
    message: "Nots derived susscessfully",
    notes: notes,
  });
});

app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;

  delete notes[index];

  res.json({
    message: "Nots deleted susscessfully",
    notes: notes,
  });
});



app.patch("/notes/:index", (req, res) => {
  const index = req.params.index;
    const title  = req.body.title


    console.log(req.body)
  

  notes[index].title = title

  res.json({
    message: "Nots deleted susscessfully",
    notes: notes,
  });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});







