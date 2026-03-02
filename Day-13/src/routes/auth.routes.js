const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Testing Route
router.get("/", (req, res) => {
  console.log("Authentication Route Is Working");
});

// Register user
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Step 1: Check if user already exists (like login's if(!user))
    const existingUser = await userModel.findOne({ username: username });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Step 2: Create user (only if username is unique)
    const user = await userModel.create({
      username: username,
      password: password,
    });

    // Step 3: Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.cookie("token", token);

    res.status(201).json({
      message: "User registered successfully",
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Registration failed",
      error: error.message,
    });
  }
});

// Login 
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await noteModel.findOne({username});

  if (!user) {
    return res.status(401).json({
      message: "Account with this username dose not exists",
    });
  }

  const isValidPassword = password == user.password;

  if (!isValidPassword) {
    return res.status(401).json({
      message: "Invalid password",
    });
  }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.cookie("token", token);


  res.status(200).json({
    message: "User logged in succesfull",
  });
});

// Check If Valid User
router.get("/user", async (req, res) => {
  const { token } = req.cookie;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorised",
    });
  }

  try {
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    // res.send(decoded);

    const user = await userModel.findOne({
      _id: decodedData.id,
    });

    res.status(200).json({
      message: "Fetched User Succesfully",
      user: user,
    });
  } catch (error) {
    res.status(401).json({
      message: "Invalid Token",
    });
  }
});

// Find All Users
router.get("/users", async (req, res) => {
  const user = await userModel.find();

  res.status(20).json({
    message: "All User Fetched",
    user: user,
  });
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
  res.clearCookie("token")
  res.status(200).json({
    message: "User logged out successfully",
  });
});

module.exports = router;
