const express = require('express');
const router = express.Router();

// @route   GET api/posts
// @desc    User route
// @access  Public
router.get('/', (req, res) => res.send('Posts route added'));

module.exports = router;