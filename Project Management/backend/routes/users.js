// User login/auth routes with role-based filtering
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Users API working' });
});

module.exports = router;
