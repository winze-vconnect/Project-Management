// Facility routing and status APIs
const express = require('express');
const router = express.Router();

// Sample route
router.get('/', (req, res) => {
  res.json({ message: 'Facilities API working' });
});

module.exports = router;
