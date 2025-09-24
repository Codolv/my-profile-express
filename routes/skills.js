const express = require('express')
const router = express.Router({ mergeParams: true })
const profileController = require ('../controllers/profile')

router.get('/', async (req, res) => {
  const profile = await profileController.findById(req.params.profileId)
  res.json(profile.skills)
})

router.post('/', async (req, res) => {
  const skill = await profileController.createSkill(req.params.profileId, req.body)
  res.send('Saved Skill ' + skill._id)
})

router.get('/:skill_id', async (req, res) => {
  const skill = await profileController.findSkillById(req.params.skill_id)
  res.json(skill)
})

router.delete('/:skill_id', async (req, res) => {
  await profileController.deleteSkill(req.params.skill_id)
  res.send("Deleted Skill")
})

router.put('/:skill_id', async (req, res) => {
  await profileController.updateSkill(req.params.skill_id, req.body)
  res.send("Skill updated")
})

module.exports = router
