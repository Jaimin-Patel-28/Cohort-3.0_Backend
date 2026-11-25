const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/notes-app");
    console.log("Database Connected");
  } catch (error) {
    console.log("Error while connection", error);
  }
};

module.exports = connectDB;
