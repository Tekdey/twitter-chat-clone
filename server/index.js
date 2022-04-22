const connectDB = require("./db/mongoose.db");
const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/userRoute");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/api/auth", userRouter);

connectDB(app);
