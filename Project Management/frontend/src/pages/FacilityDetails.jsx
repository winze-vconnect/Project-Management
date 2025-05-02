import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/axios';
import LifecycleModal from '../components/LifecycleModal';

function FacilityDetails() {
  const { id } = useParams();
  const [devices, setDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null);

  useEffect(() => {
    async function fetchDevices() {
      try {
        const res = await api.get('/devices');
        const filtered = res.data.filter(d => d.facility_id === parseInt(id));
        setDevices(filtered);
      } catch (err) {
        console.error('Failed to fetch devices:', err);
      }
    }
    fetchDevices();
  }, [id]);

  const handleChange = (field, value) => {
    setSelectedDevice((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    try {
      await api.put(`/devices/${selectedDevice.id}`, selectedDevice);
      setSelectedDevice(null);
      const res = await api.get('/devices');
      const filtered = res.data.filter(d => d.facility_id === parseInt(id));
      setDevices(filtered);
    } catch (err) {
      console.error('Error saving device update:', err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Facility: {id} - Devices</h1>
      <table className="min-w-full bg-white rounded shadow text-sm">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2">Device ID</th>
            <th className="px-4 py-2">Block</th>
            <th className="px-4 py-2">Floor</th>
            <th className="px-4 py-2">Area</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Delivery</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {devices.map((device) => (
            <tr key={device.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{device.id}</td>
              <td className="px-4 py-2">{device.block}</td>
              <td className="px-4 py-2">{device.floor}</td>
              <td className="px-4 py-2">{device.area}</td>
              <td className="px-4 py-2">{device.status}</td>
              <td className="px-4 py-2">{device.delivery_status}</td>
              <td className="px-4 py-2">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  onClick={() => setSelectedDevice(device)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <LifecycleModal
        device={selectedDevice}
        onClose={() => setSelectedDevice(null)}
        onChange={handleChange}
        onSave={handleSave}
      />
    </div>
  );
}

export default FacilityDetails;
