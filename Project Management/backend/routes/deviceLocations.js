
const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Make sure this points to your db connection

// ✅ GET all device locations with facility details
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM device_locations ORDER BY id DESC');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching device locations:', err);
    res.status(500).json({ error: 'Database error', details: err.message });
  }
});



// POST new device location
router.post('/', async (req, res) => {
  const {
    unit, city, entity, unit_hr, block, floor,
    area, system_placement_location, device_to_install
  } = req.body;

  try {
    const [result] = await db.query(
      'INSERT INTO device_locations (unit, city, entity, unit_hr, block, floor, area, system_placement_location, device_to_install) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [unit, city, entity, unit_hr, block, floor, area, system_placement_location, device_to_install]
    );
    res.json({ message: 'Inserted successfully', id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: 'Insert failed', details: err.message });
  }
});

// PUT update device location
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const {
    unit, city, entity, unit_hr, block, floor,
    area, system_placement_location, device_to_install
  } = req.body;

  try {
    await db.query(
      'UPDATE device_locations SET unit=?, city=?, entity=?, unit_hr=?, block=?, floor=?, area=?, system_placement_location=?, device_to_install=? WHERE id=?',
      [unit, city, entity, unit_hr, block, floor, area, system_placement_location, device_to_install, id]
    );
    res.json({ message: 'Updated successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Update failed', details: err.message });
  }
});

// DELETE device location
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await db.query('DELETE FROM device_locations WHERE id = ?', [id]);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Delete failed', details: err.message });
  }
});

module.exports = router;
