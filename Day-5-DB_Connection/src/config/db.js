const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://pj64530_db_user:CvDIqSGf1aBa7SaH@cluster0.ujyqm1a.mongodb.net/",
    );
    console.log("MongoDB connect successfully");
  } catch (error) {
    console.log("Database not connect", error);
  }
};

module.exports = connectDB;
