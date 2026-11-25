
const express = require("express");
const connectDB = require("./config/db");
const noteRoutes = require("./routes/note.route");
const app = express();

connectDB();

app.use(express.json());
app.use("/note", noteRoutes);

module.exports = app;
