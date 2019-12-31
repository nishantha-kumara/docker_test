const mongo = require("mongoose");
const express = require("express");

const app = express();

const DB = "mongodb://mymongo:27017/playground";

mongo
  .connect(DB)
  .then(() => {
    console.log("connected");
  })
  .catch(e => {
    console.log("connection failed");
  });

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to 2020"
  });
});

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
