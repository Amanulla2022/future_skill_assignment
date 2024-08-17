const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
const router = require("./routes/helpCenterRoutes");

// config the .env file
dotenv.config();
// connecting to database
connectDB();

// port
const PORT = process.env.PORT_URL || 7000;
app.use(express.json());

// routes
app.use("/api/help", router);

// starting the server
app.listen(PORT, () => {
  console.log(`Server start at - ${PORT}`);
});
