const express = require("express");
const userModel = require("../models/user.model");

const router = express.Router();

// Testing Route
router.get("/", (req, res) => {
  console.log("Authentication Route Is Working");
});

// Register
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await userModel.create({
      username: username,
      password: password,
    });
    res.status(201).json({
      message: "User registed succesfully",
    });
    console.log(username, password);
  } catch (error) {
    console.error("User creatio failed", error.message);
  }
});

// Login
router.post("/login", (req, res) => {
  res.status().json({
    message: "",
  });
});

// Find All Users
router.get("/users", async (req, res) => {
  const user = await userModel.find();

  res.status(20).json({
    message: "",
    user: user,
  });


  try{

  }
  catch(error){

  }
});

// Find Single User
router.get("/users/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const user = await userModel.findById({
      _id: id,
    });

    res.status(200).json({
      message: "Fetched User Succesfully",
      user: user,
    });
  } catch (error) {
    res.status(404).json({
      message: "User not found",
    });

    console.error("Failed to get user", error.message);
  }
});

// Logout
router.get("/logout", (req, res) => {
  res.status().json({
    message: "",
  });
});

module.exports = router;
