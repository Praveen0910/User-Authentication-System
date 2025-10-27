const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Example protected route
router.get('/dashboard', authMiddleware, (req, res) => {
  res.json({
    message: 'Access granted! Welcome to your dashboard.',
    user: req.user
  });
});

module.exports = router;
