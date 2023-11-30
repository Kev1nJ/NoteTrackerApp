const express = require('express');
const path = require('path');
const router = express.Router();

// Path to the public directory
const publicPath = path.join(__dirname, '../public');

// Route to serve notes.html for GET /notes
router.get('/notes', (req, res) => {
  res.sendFile(path.join(publicPath, 'notes.html'));
});

// Route to serve index.html for GET *
router.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

module.exports = router;