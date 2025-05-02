// src/pages/DeviceLocationPlanner.jsx
import React, { useState, useEffect } from 'react';
import ExcelUpload from '../components/ExcelUpload'; // ✅ Add this line
import api from '../api/axios';

const DeviceLocationPlanner = () => {
  const [locations, setLocations] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    fetchLocations();
  }, []);

  
  const fetchLocations = async () => {
    setLoading(true);
    try {
      const res = await api.get('/device-locations');
      setLocations(res.data);
    } catch (err) {
      console.error('Failed to load locations:', err);
    } finally {
      setLoading(false);
    }
  };

  const deleteLocation = async (id) => {
    if (!window.confirm('Are you sure you want to delete this location?')) return;
    try {
      await api.delete(`/device-locations/${id}`);
      fetchLocations(); // Refresh list
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

//   const filteredLocations = locations.filter(loc =>
//     loc.unit.toLowerCase().includes(search.toLowerCase()) ||
//     loc.city.toLowerCase().includes(search.toLowerCase()) ||
//     loc.entity.toLowerCase().includes(search.toLowerCase())
//   );

const filteredLocations = locations.filter(loc =>
    (loc.unit || '').toLowerCase().includes(search.toLowerCase()) ||
    (loc.city || '').toLowerCase().includes(search.toLowerCase()) ||
    (loc.entity || '').toLowerCase().includes(search.toLowerCase())
  );

  
  return (


    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-blue-700">Device Location Planner</h1>
        <ExcelUpload /> {/* ✅ Upload button component here */}
        <div className="flex items-center justify-end mb-4">
        <input
          type="text"
          placeholder="Search by Unit, City or Entity"
          className="border rounded px-3 py-2 shadow w-1/3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
         </div>
      </div>



      {loading ? (
        <div className="text-gray-600 text-center">Loading...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 shadow rounded">
            <thead className="bg-blue-100 text-blue-700">
              <tr>
                <th className="p-2 border">#</th>
                <th className="p-2 border">Unit</th>
                <th className="p-2 border">City</th>
                <th className="p-2 border">Entity</th>
                <th className="p-2 border">Unit HR</th>
                <th className="p-2 border">Block</th>
                <th className="p-2 border">Floor</th>
                <th className="p-2 border">Area</th>
                <th className="p-2 border">System Placement</th>
                <th className="p-2 border">Devices</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLocations.map((loc, index) => (
                <tr key={loc.id} className="hover:bg-orange-50">
                  <td className="p-2 border text-center">{index + 1}</td>
                  <td className="p-2 border">{loc.unit}</td>
                  <td className="p-2 border">{loc.city}</td>
                  <td className="p-2 border">{loc.entity}</td>
                  <td className="p-2 border">{loc.unit_hr}</td>
                  <td className="p-2 border">{loc.block}</td>
                  <td className="p-2 border">{loc.floor}</td>
                  <td className="p-2 border">{loc.area}</td>
                  <td className="p-2 border">{loc.system_placement_location}</td>
                  <td className="p-2 border text-center">{loc.device_to_install}</td>
                  <td className="p-2 border text-center">
                    <button className="bg-blue-600 text-white px-2 py-1 rounded mr-1 text-sm">Edit</button>
                    <button onClick={() => deleteLocation(loc.id)} className="bg-red-600 text-white px-2 py-1 rounded text-sm">Delete</button>
                  </td>
                </tr>
              ))}
              {filteredLocations.length === 0 && (
                <tr>
                  <td colSpan="11" className="p-4 text-center text-gray-500">No matching records found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
        
  );


};

export default DeviceLocationPlanner;
