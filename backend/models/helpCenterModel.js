const mongoose = require("mongoose");

// created the mongoose schema for helpcard model with title and description
const helpCenterModel = new mongoose.Schema({
  title: String,
  description: String,
});

module.exports = mongoose.model("HelpCenter", helpCenterModel);
