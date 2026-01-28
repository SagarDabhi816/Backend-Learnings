const express = require("express");

const router = express.Router();

// Middleware Set Between Router And The API
router.use((req, res, next) => {
  console.log("API Middleware Created");
  next();
});

router.get("/", (req, res) => {
  res.json({
    message: "Get route working",
  });
});

module.exports = router;
