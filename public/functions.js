const functions = require("firebase-functions");
const express = require("express");
const app = express();

// Route đơn giản
app.get("/", (req, res) => {
  res.send("Hello from Firebase Cloud Functions!");
});

// Export API của bạn
exports.api = functions.https.onRequest(app);
