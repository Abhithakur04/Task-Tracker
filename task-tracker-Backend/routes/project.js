const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const auth = require('../middleware/authMiddleware');

// Create a new project (max 4 per user)
router.post('/', auth, async (req, res) => {
  try {
    const existing = await Project.find({ user: req.user });

    if (existing.length >= 4) {
      return res.status(400).json({ msg: 'Project limit reached (max 4).' });
    }

    const newProject = await Project.create({
      title: req.body.title,
      user: req.user,
    });

    res.json(newProject);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get all projects for the logged-in user
router.get('/', auth, async (req, res) => {
  try {
    const projects = await Project.find({ user: req.user });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Delete a project
router.delete('/:id', auth, async (req, res) => {
  try {
    await Project.deleteOne({ _id: req.params.id, user: req.user });
    res.json({ msg: 'Project deleted' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
