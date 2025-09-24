const express = require('express')
const router = express.Router({ mergeParams: true })
const profileController = require ('../controllers/profile')

router.get('/', async (req, res) => {
  const pro = await profileController.findById(req.params.profileId)
  res.json(pro.projects)
})

router.post('/', async (req, res) => {
  const project = await profileController.createProject(req.params.profileId, req.body)
  res.send("Seved Project " + project._id)
})

router.get('/:project_id', async (req, res) => {
  const project = await profileController.findProjectById(req.params.project_id)
  res.json(project)
})

router.delete('/:project_id', async (req, res) => {
  await profileController.deleteProject(req.params.project_id)
  res.send("Deleted Project")
})

router.put('/:project_id', async (req, res) => {
  await profileController.updateProject(req.params.project_id, req.body)
  res.send("Project updated")
})

module.exports = router
