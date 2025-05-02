const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');
const db = require('../config/db');
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('file'), async (req, res) => {
  try {
    const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = xlsx.utils.sheet_to_json(sheet);

    for (const row of rows) {
        await db.query(
            `INSERT INTO device_locations (
              unit_name, city, bu_code, entity_name, unit_hr_name,
              block, floor, area, system_placement_location, device_to_install
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
              row['Unit'],
              row['City'],
              row['BU Code'],
              row['Entity'],
              row['Unit HR'],
              row['Block'] || '',
              row['Floor'],
              row['Area'],
              row['System Placement Location'],
              row['System Requirement #']
            ]
          );
          
    }

    res.json({ message: 'Excel data imported successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to import Excel' });
  }
});

module.exports = router;
