import React, { useEffect, useState } from 'react';
import api from '../api/axios';

function Dashboard() {
  const [devices, setDevices] = useState([]);
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await api.get('/devices');
        setDevices(res.data);

        const completedDevices = res.data.filter(d => d.status === 'completed').length;
        const pendingDevices = res.data.filter(d => d.status !== 'completed').length;

        setCompleted(completedDevices);
        setPending(pendingDevices);
      } catch (err) {
        console.error('Failed to fetch devices:', err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Total Devices</h2>
          <p className="text-3xl font-bold text-blue-500">{devices.length}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Pending Installs</h2>
          <p className="text-3xl font-bold text-yellow-500">{pending}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Completed</h2>
          <p className="text-3xl font-bold text-green-600">{completed}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


