const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoute");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/api/auth", userRouter);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection ✅"))
  .catch((err) => console.log(err));

module.exports = app;
