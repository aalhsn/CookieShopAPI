const bodyParser = require("body-parser");
const express = require("express");

// Routes
const cookieRoutes = require("./routes/cookies");

// database
const db = require("./db");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log("I'm a middleware method");
  next();
});


app.use("/cookies", cookieRoutes);
const run = async () => {
  try {
    await db.sync();
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
  
  await app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });
};

app.use((req, res, next) => {
  res.status(404).json("Path not found");
});
run();


