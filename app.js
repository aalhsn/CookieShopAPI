const express = require("express");
const cookies = require("./cookies");

const app = express();


app.get("/", (req, res) => {
    console.log("HELLO");
    res.json({ message: "Hello World" });
  });

app.get("/cookies", (req, res) => {
    console.log(cookies);
    res.json(cookies);
  });

app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });