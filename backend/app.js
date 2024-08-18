const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
const router = require("./routes/helpCenterRoutes");
const cors = require("cors");

// config the .env file
dotenv.config();
// connecting to database
connectDB();

// port
const PORT = process.env.PORT_URL || 7000;
app.use(express.json());

// enables Cross-Origin Resource Sharing (CORS) for all routes, It adds necessary HTTP headers to allow cross-origin requests in the browser
app.use(cors());

// routes
app.use("/api/help", router);

// starting the server
app.listen(PORT, () => {
  console.log(`Server start at - ${PORT}`);
});
