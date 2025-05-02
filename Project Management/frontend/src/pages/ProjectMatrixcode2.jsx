



import React, { useState } from 'react';
import DeviceLifecycleModal from '../components/DeviceLifecycleModal';

const mockDevices = [
  {
    id: 1,
    city: 'Jamshedpur',
    entity: 'NHL-ISD',
    unit: 'NH-Jamshedpur Brahmananda',
    location: 'Ramp Area Entry Point (Left)',
    device: 'Face Reader 1',
    stakeholders: {
      hr: 'Shree Hari Nair',
      it: 'Anjali',
      pm: 'Arun',
      sm: 'Sunil Rao'
    },
    lifecycle: {
      logistics: 'Completed',
      clearance: 'Completed',
      installation: 'In Progress',
      verification: 'Pending',
      handover: 'Pending'
    }
  },
  {
    id: 2,
    city: 'Jamshedpur',
    entity: 'NHL-ISD',
    unit: 'NH-Jamshedpur Brahmananda',
    location: 'Admin Block Entrance',
    device: 'Face Reader 2',
    stakeholders: {
      hr: 'Shree Hari Nair',
      it: 'Anjali',
      pm: 'Arun',
      sm: 'Sunil Rao'
    },
    lifecycle: {
      logistics: 'Completed',
      clearance: 'Completed',
      installation: 'Completed',
      verification: 'Completed',
      handover: 'Completed'
    }
  }
];

const ProjectMatrixOverviewPage = () => {
  const [filters, setFilters] = useState({ city: '', entity: '', unit: '' });
  const [selectedDevice, setSelectedDevice] = useState(null);

  const filteredDevices = mockDevices.filter((d) =>
    (!filters.city || d.city === filters.city) &&
    (!filters.entity || d.entity === filters.entity) &&
    (!filters.unit || d.unit === filters.unit)
  );

  const summary = {
    total: filteredDevices.length,
    logistics: filteredDevices.filter(d => d.lifecycle.logistics === 'Completed').length,
    clearance: filteredDevices.filter(d => d.lifecycle.clearance === 'Completed').length,
    installation: filteredDevices.filter(d => d.lifecycle.installation === 'Completed').length,
    verification: filteredDevices.filter(d => d.lifecycle.verification === 'Completed').length,
    handover: filteredDevices.filter(d => d.lifecycle.handover === 'Completed').length
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Project Matrix Overview</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select className="border px-3 py-2" onChange={(e) => setFilters({ ...filters, city: e.target.value })}>
          <option value="">Select City</option>
          <option value="Jamshedpur">Jamshedpur</option>
        </select>
        <select className="border px-3 py-2" onChange={(e) => setFilters({ ...filters, entity: e.target.value })}>
          <option value="">Select Entity</option>
          <option value="NHL-ISD">NHL-ISD</option>
        </select>
        <select className="border px-3 py-2" onChange={(e) => setFilters({ ...filters, unit: e.target.value })}>
          <option value="">Select Unit</option>
          <option value="NH-Jamshedpur Brahmananda">NH-Jamshedpur Brahmananda</option>
        </select>
      </div>

      {/* Summary Row */}
      <div className="bg-white p-4 mb-6 shadow rounded grid grid-cols-2 md:grid-cols-5 gap-4 text-sm text-center font-medium text-blue-800">
        <div>📦 Logistics ✅ {summary.logistics}</div>
        <div>🧹 Site Clearance ✅ {summary.clearance}</div>
        <div>🔧 Installation ✅ {summary.installation}</div>
        <div>✅ Verification ✅ {summary.verification}</div>
        <div>📜 Handover ✅ {summary.handover}</div>
      </div>

      {/* Device List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredDevices.map((device) => (
          <div key={device.id} className="bg-white p-4 rounded shadow cursor-pointer hover:bg-blue-50" onClick={() => setSelectedDevice(device)}>
            <h2 className="font-semibold text-blue-700">{device.device}</h2>
            <p className="text-sm">📍 {device.location}</p>
            <p className="text-sm">👷 PM: {device.stakeholders.pm}</p>
            <p className="text-sm">Status: {device.lifecycle.handover === 'Completed' ? '✅ Completed' : '⏳ In Progress'}</p>
          </div>
        ))}
      </div>

      {/* Lifecycle Modal */}
      {selectedDevice && (
        <DeviceLifecycleModal
          device={selectedDevice}
          onClose={() => setSelectedDevice(null)}
        />
      )}
    </div>
  );
};

export default ProjectMatrixOverviewPage;
