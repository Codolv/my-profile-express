const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: String,
  role: String,
  description: String,
  from_date: Date,
  till_date: Date,
  techs: [String]
});

module.exports = mongoose.model("Project", ProjectSchema); 
