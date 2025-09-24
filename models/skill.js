const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SkillSchema = new Schema({
  name: String,

  category: {
    type: String,
    enum: ["Programmiersprache", "Sprache", "Framework", "Tools"]
  },

  level: {
    type: String,
    enum: ["Beginner", "Intermediat", "Expert"]
  }
}); 

module.exports = mongoose.model("Skill", SkillSchema);
