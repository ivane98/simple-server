require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const postsRouter = require("./routes/posts");
const PORT = 3000 || process.env.PORT;

app.use(cors());

app.use(express.json());

app.use("/posts", postsRouter);

app.get("/", (req, res) => {
  res.send("home");
});

mongoose.connect(process.env.DB_URL).then(() => console.log("connected to db"));
app.listen(PORT, () => console.log("server running on 3000"));
