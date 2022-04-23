const connectDB = require("./db/mongoose.db");
const express = require("express");
const app = express();
const cors = require("cors");
const authRouter = require("./routes/auth.users.routes");
const usersRouter = require("./routes/users.routes");
const tokenRouter = require("./routes/token.routes");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth/", authRouter);
app.use("/api/users/", usersRouter);
app.use("/api/token/", tokenRouter);

/*////////////////// Refresh token ///////////////////*/

connectDB(app);
