const express = require('express');
const router = express.Router();
const skillRouter = require('./skills')
const projectRouter = require('./projects')
const profileController = require('../controllers/profile')

router.get('/', async (req, res) => {
  const pro = await profileController.findAll() 
  res.json(pro);
});

router.post('/', async (req, res) => {
  const pro = await profileController.create(req.body)
  res.send("Saved Profile " + pro._id)
})

router.get('/:id', async (req, res) => {
  const pro = await profileController.findById(req.params.id)
  res.render('profile', pro)
})

router.put('/:id', async (req, res) => {
  await profileController.update(req.params.id, req.body)
  res.send("Profile updated")
})

router.delete('/:id', async (req, res) => {
  await profileController.delete(req.params.id)
  res.send("Deleted " + req.params.id)
})

router.use('/:profileId/skills', skillRouter)

router.use('/:profileId/projects', projectRouter)


module.exports = router;
