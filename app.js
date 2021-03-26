const express = require("express");
const router = express.Router;
const app = express();
const port = process.env.PORT || 8080;
const Sequelize = require("sequelize");
const DB = require("./models");

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/users", async (req, res) => {
  console.log("in the route");
  const allUsers = await DB.user.findAll();
  console.log({ allUsers });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
