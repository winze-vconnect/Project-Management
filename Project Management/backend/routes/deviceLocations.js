
// const express = require('express');
// const router = express.Router();
// const db = require('../config/db'); // Make sure this points to your db connection

// // ✅ GET all device locations with facility details
// router.get('/', async (req, res) => {
//   try {
//     const [rows] = await db.query('SELECT * FROM device_locations ORDER BY id DESC');
//     res.json(rows);
//   } catch (err) {
//     console.error('Error fetching device locations:', err);
//     res.status(500).json({ error: 'Database error', details: err.message });
//   }
// });



// // POST new device location
// router.post('/', async (req, res) => {
//   const {
//     unit, city, entity, unit_hr, block, floor,
//     area, system_placement_location, device_to_install
//   } = req.body;

//   try {
//     const [result] = await db.query(
//       'INSERT INTO device_locations (unit, city, entity, unit_hr, block, floor, area, system_placement_location, device_to_install) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
//       [unit, city, entity, unit_hr, block, floor, area, system_placement_location, device_to_install]
//     );
//     res.json({ message: 'Inserted successfully', id: result.insertId });
//   } catch (err) {
//     res.status(500).json({ error: 'Insert failed', details: err.message });
//   }
// });

// // PUT update device location
// router.put('/:id', async (req, res) => {
//   const { id } = req.params;
//   const {
//     unit, city, entity, unit_hr, block, floor,
//     area, system_placement_location, device_to_install
//   } = req.body;

//   try {
//     await db.query(
//       'UPDATE device_locations SET unit=?, city=?, entity=?, unit_hr=?, block=?, floor=?, area=?, system_placement_location=?, device_to_install=? WHERE id=?',
//       [unit, city, entity, unit_hr, block, floor, area, system_placement_location, device_to_install, id]
//     );
//     res.json({ message: 'Updated successfully' });
//   } catch (err) {
//     res.status(500).json({ error: 'Update failed', details: err.message });
//   }
// });

// // ✅ GET distinct unit names
// router.get('/units', async (req, res) => {
//   try {
//     const [rows] = await db.query('SELECT DISTINCT unit_name FROM device_locations ORDER BY unit_name ASC');
//     res.json(rows.map(row => row.unit));
//   } catch (err) {
//     console.error('Error fetching distinct units:', err);
//     res.status(500).json({ error: 'Database error', details: err.message });
//   }
// });


// // DELETE device location
// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     await db.query('DELETE FROM device_locations WHERE id = ?', [id]);
//     res.json({ message: 'Deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ error: 'Delete failed', details: err.message });
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Make sure this points to your db connection

// GET devices for a specific unit
router.get('/', async (req, res) => {
  try {
    let query = 'SELECT * FROM device_locations';
    const params = [];
    
    // If unit parameter is provided, filter by unit_name
    if (req.query.unit) {
      query += ' WHERE unit_name = ?';
      params.push(req.query.unit);
    }
    
    query += ' ORDER BY id ASC';
    
    const [rows] = await db.query(query, params);
    res.json(rows);
  } catch (err) {
    console.error('Error fetching device locations:', err);
    res.status(500).json({ error: 'Database error', details: err.message });
  }
});

// POST new device location
router.post('/', async (req, res) => {
  try {
    // Extract all fields from request body
    const {
      unit_name, city, bu_code, entity_name, unit_hr_name, block, floor,
      area, system_placement_location, device_to_install, courier_name,
      tracking_number, shipped_date, delivery_status, received_by, pod_url,
      installer_name, install_date, make, model_number, asset_id, back_box_status,
      face_device_status, ip_type, ip_address, device_pinged, vyom_detected,
      enrollment_done, attendance_verified, serial_number, mac_address
    } = req.body;

    // Create query with all columns
    const [result] = await db.query(
      `INSERT INTO device_locations (
        unit_name, city, bu_code, entity_name, unit_hr_name, block, floor,
        area, system_placement_location, device_to_install, courier_name,
        tracking_number, shipped_date, delivery_status, received_by, pod_url,
        installer_name, install_date, make, model_number, asset_id, back_box_status,
        face_device_status, ip_type, ip_address, device_pinged, vyom_detected,
        enrollment_done, attendance_verified, serial_number, mac_address
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        unit_name, city, bu_code, entity_name, unit_hr_name, block, floor,
        area, system_placement_location, device_to_install, courier_name,
        tracking_number, shipped_date, delivery_status, received_by, pod_url,
        installer_name, install_date, make, model_number, asset_id, back_box_status,
        face_device_status, ip_type, ip_address, device_pinged, vyom_detected,
        enrollment_done, attendance_verified, serial_number, mac_address
      ]
    );
    res.json({ message: 'Inserted successfully', id: result.insertId });
  } catch (err) {
    console.error('Error creating device location:', err);
    res.status(500).json({ error: 'Insert failed', details: err.message });
  }
});

// PUT update device location
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    // Extract all fields from request body
    const {
      unit_name, city, bu_code, entity_name, unit_hr_name, block, floor,
      area, system_placement_location, device_to_install, courier_name,
      tracking_number, shipped_date, delivery_status, received_by, pod_url,
      installer_name, install_date, make, model_number, asset_id, back_box_status,
      face_device_status, ip_type, ip_address, device_pinged, vyom_detected,
      enrollment_done, attendance_verified, serial_number, mac_address
    } = req.body;

    // Update query with all columns
    await db.query(
      `UPDATE device_locations SET 
        unit_name = ?, city = ?, bu_code = ?, entity_name = ?, unit_hr_name = ?, 
        block = ?, floor = ?, area = ?, system_placement_location = ?, 
        device_to_install = ?, courier_name = ?, tracking_number = ?, 
        shipped_date = ?, delivery_status = ?, received_by = ?, pod_url = ?,
        installer_name = ?, install_date = ?, make = ?, model_number = ?, 
        asset_id = ?, back_box_status = ?, face_device_status = ?, ip_type = ?, 
        ip_address = ?, device_pinged = ?, vyom_detected = ?, enrollment_done = ?, 
        attendance_verified = ?, serial_number = ?, mac_address = ?
      WHERE id = ?`,
      [
        unit_name, city, bu_code, entity_name, unit_hr_name, block, floor,
        area, system_placement_location, device_to_install, courier_name,
        tracking_number, shipped_date, delivery_status, received_by, pod_url,
        installer_name, install_date, make, model_number, asset_id, back_box_status,
        face_device_status, ip_type, ip_address, device_pinged, vyom_detected,
        enrollment_done, attendance_verified, serial_number, mac_address, id
      ]
    );
    res.json({ message: 'Updated successfully' });
  } catch (err) {
    console.error('Error updating device location:', err);
    res.status(500).json({ error: 'Update failed', details: err.message });
  }
});

// GET distinct units with status
router.get('/units', async (req, res) => {
  try {
    // Get unique unit names and calculate status for each unit
    const [units] = await db.query(`
      SELECT DISTINCT unit_name, city, entity_name
      FROM device_locations
      ORDER BY unit_name ASC
    `);
    
    // For each unit, determine status based on installation progress
    const unitsWithStatus = await Promise.all(units.map(async (unit) => {
      // Count total devices for this unit
      const [countResult] = await db.query(
        'SELECT COUNT(*) as total FROM device_locations WHERE unit_name = ?',
        [unit.unit_name]
      );
      
      // Count devices in different stages of the process
      const [deviceStatusCounts] = await db.query(`
        SELECT 
          COUNT(CASE WHEN install_date IS NOT NULL THEN 1 END) as installed,
          COUNT(CASE WHEN delivery_status = 'Delivered' AND install_date IS NULL THEN 1 END) as delivered,
          COUNT(CASE WHEN shipped_date IS NOT NULL AND delivery_status IS NULL THEN 1 END) as shipped
        FROM device_locations 
        WHERE unit_name = ?
      `, [unit.unit_name]);
      
      const total = countResult[0].total;
      const installed = deviceStatusCounts[0].installed || 0;
      const delivered = deviceStatusCounts[0].delivered || 0;
      const shipped = deviceStatusCounts[0].shipped || 0;
      
      // Calculate installation percentage
      const installPercentage = total > 0 ? Math.round((installed / total) * 100) : 0;
      
      // Calculate status based on installation progress
      let status = 'Red';
      if (installPercentage === 100) {
        status = 'Green';
      } else if (installPercentage >= 50) {
        status = 'Yellow';
      } else if (installPercentage > 0 || delivered > 0 || shipped > 0) {
        status = 'Orange';
      }
      
      return {
        id: unit.unit_name.replace(/\s+/g, '-').toLowerCase(),
        unit_name: unit.unit_name,
        city: unit.city,
        entity_name: unit.entity_name,
        total_devices: total,
        installed_devices: installed,
        delivered_devices: delivered,
        shipped_devices: shipped,
        installation_percentage: installPercentage,
        status
      };
    }));
    
    res.json(unitsWithStatus);
  } catch (err) {
    console.error('Error fetching distinct units:', err);
    res.status(500).json({ error: 'Database error', details: err.message });
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

// GET devices for a specific unit
router.get('/', async (req, res) => {
  try {
    let query = 'SELECT * FROM device_locations';
    const params = [];
    
    // If unit parameter is provided, filter by unit_name
    if (req.query.unit) {
      query += ' WHERE unit_name = ?';
      params.push(req.query.unit);
    }
    
    query += ' ORDER BY id ASC';
    
    const [rows] = await db.query(query, params);
    res.json(rows);
  } catch (err) {
    console.error('Error fetching device locations:', err);
    res.status(500).json({ error: 'Database error', details: err.message });
  }
});

module.exports = router;