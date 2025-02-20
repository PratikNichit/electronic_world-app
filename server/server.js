const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();

mongoose
  .connect(process.env.DEV_CONNECTION_URL)
  .then(() => console.log("Connected to the MongoDB Atals..."))
  .catch((err) =>
    console.error("could not connect to the mongoDB Atals...", err)
  );
