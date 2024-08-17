const mongoose = require("mongoose");

// function to connect to database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Mongo Database connected successfully");
  } catch (error) {
    console.log("error while connecting to database");
  }
};

module.exports = connectDB;
