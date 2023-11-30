
const express = require('express');
const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');

const router = express.Router();

// Combine API routes
router.use('/api', apiRoutes);

// Combine HTML routes
router.use('/', htmlRoutes);

module.exports = router;
