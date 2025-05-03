const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const Project = require('../models/Project');
const auth = require('../middleware/authMiddleware');

// Create a new task
router.post('/', auth, async (req, res) => {
  const { title, description, project } = req.body;

  try {
    // Check if the project exists and belongs to the current user
    const existingProject = await Project.findById(project);
    if (!existingProject || existingProject.user.toString() !== req.user) {
      return res.status(400).json({ msg: 'Project not found or does not belong to you' });
    }

    // Create the task
    const newTask = new Task({
      title,
      description,
      status: 'pending',
      user: req.user,
      project,
    });

    await newTask.save();
    res.json(newTask);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get all tasks for a specific project
router.get('/:projectId', auth, async (req, res) => {
  try {
    const tasks = await Task.find({ project: req.params.projectId, user: req.user });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get a single task
router.get('/task/:taskId', auth, async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.taskId, user: req.user });
    if (!task) return res.status(404).json({ msg: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Update a task (title, description, status)
router.put('/task/:taskId', auth, async (req, res) => {
  const { title, description, status } = req.body;

  try {
    const task = await Task.findOne({ _id: req.params.taskId, user: req.user });
    if (!task) return res.status(404).json({ msg: 'Task not found' });

    task.title = title || task.title;
    task.description = description || task.description;
    task.status = status || task.status;

    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Delete a task
router.delete('/task/:taskId', auth, async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.taskId, user: req.user });
    if (!task) return res.status(404).json({ msg: 'Task not found' });

    await task.remove();
    res.json({ msg: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
