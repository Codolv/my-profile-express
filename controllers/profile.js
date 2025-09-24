const Profiles = require('../models/profile')
const Skills = require('../models/skill')
const Projects = require('../models/project')

module.exports.create = async (profile) => {
  return await Profiles.create(profile)
}

module.exports.createSkill = async (profile_id, skill) => {
  const s = await Skills.create(skill)
  const profile = await Profiles.findById(profile_id).populate("skills")
  profile.skills.push(s)
  await profile.save()
  return s
}

module.exports.createProject = async (profile_id, project) => {
  const p = await Projects.create(project)
  const profile = await Profiles.findById(profile_id).populate("projects")
  profile.projects.push(p)
  await profile.save()
  return p
}

module.exports.findAll = async () => {
  return await Profiles.find().populate("skills").populate("projects")
}

module.exports.findById = async (profile_id) => {
  var profile = await Profiles.findById(profile_id).populate("skills").populate("projects");
  profile.projects.sort((a,b) => b.till_date.getTime() - a.till_date.getTime());
  profile.skills.sort((a, b) => b.scale - a.scale)
  return profile;
}

module.exports.findProjectById = async (project_id) => {
  return await Projects.findById(project_id)
}

module.exports.findSkillById = async (id) => {
  return await Skills.findById(id)
}

module.exports.delete = async (profile_id) => {
  return await Profiles.fineOndAndDelete({ _id: profile_id })
}

module.exports.deleteSkill = async (id) => {
  return await Skills.findOneAndDelete({ _id: id })
}

module.exports.deleteProject = async (id) => {
  return await Projects.findOneAndDelete({ _id: id })
}

module.exports.update = async (id, profile) => {
  return await Profiles.findById(id).updateOne(profile)
}

module.exports.updateSkill = async (id, skill) => {
  return await Skills.findById(id).updateOne(skill)
}

module.exports.updateProject = async (id, project) => {
  return await Projects.findById(id).updateOne(project)
}

