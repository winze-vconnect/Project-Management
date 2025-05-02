const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET all devices
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM devices');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Database error', details: err.message });
  }
});

// ✅ NEW: Update device by ID (used by modal)
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const fields = req.body;

  const updates = Object.keys(fields)
    .map((key) => `${key} = ?`)
    .join(', ');
  const values = Object.values(fields);

  try {
    await db.query(`UPDATE devices SET ${updates} WHERE id = ?`, [...values, id]);
    res.json({ message: 'Device updated successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Update failed', details: err.message });
  }
});

module.exports = router;
