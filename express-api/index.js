const db = require("./config/db");
const express = require("express");
const app = express();
const User = require("./models/User");
const router = require("./routers/index");
const cookieParser = require("cookie-parser");
const cors = require("cors");

try {
  db.authenticate();
  console.log("Database Connected...");
  User.sync();
} catch (error) {
  console.log(error);
}

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(3001, () => console.log("Server is listening at port 3001"));
