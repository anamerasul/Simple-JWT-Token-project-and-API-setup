const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.post("/login", async (req, res) => {
  const user = req.body;
  console.log(user);
  //DANGER: do not check paasword here

  if (user.password === "123456") {
  } else {
  }
  res.send({ success: true });
});

app.get("/", (req, res) => {
  res.send("Hello from simple JWT Server");
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
