// routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Signup
router.post('/signup', async (req, res) => {
  const { name, email, password, country } = req.body;

  try {
    const existing_user = await User.findOne({ email });
    if (existing_user) return res.status(400).json({ msg: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, country, password: hashedPassword });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.cookie('token', token, {
      httpOnly: true,
      secure: false, 
      sameSite: 'lax',
    });

    res.json({ user });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'User not found' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
    });

    res.json({ user });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});
  
// In routes/auth.js
router.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.json({ msg: 'Logged out' });
  });
  
  module.exports = router;