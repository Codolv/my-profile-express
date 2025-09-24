const mongoose = require("mongoose");
const Skill = require("./skill")
const Project = require("./project")

const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  first_name: String,
  last_name: String,
  description: String,
  date_of_birth: Date,
  country: String,
  street_name: String,
  house_number: String,
  zip_code: String,
  city: String,
  phone_number: String,
  email_address: String,
  linked_in_url: String,
  xind_url: String,
  freelancemap_url: String,
  skills: [{ type: Schema.Types.ObjectId, ref: "Skill"}],
  projects: [{ type: Schema.Types.ObjectId, ref: "Project"}]
});

ProfileSchema.query.byFirstName = function(first_name) {
  return this.where({first_name: new RegExp(first_name, 'i')});
}

ProfileSchema.post('findOneAndDelete', async function(doc) {
  await Skill.deleteMany({ _id: { $in: doc.skills } })
  await Project.deleteMany({ _id: { $in: doc.projects } })
})

module.exports = mongoose.model("Profile", ProfileSchema);
