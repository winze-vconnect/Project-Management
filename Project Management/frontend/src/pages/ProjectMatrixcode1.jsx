import React, { useState } from 'react';

const dummyUnits = [
  {
    id: 'U101',
    name: 'Unit 101',
    status: 'Red', // Site not ready
    devices: [
      { name: 'Face Reader 1', status: 'Dependencies' },
      { name: 'Face Reader 2', status: 'Dependencies' },
    ],
    installer: 'Ramesh',
    itSPOC: 'Anjali',
    updatedAt: '2025-05-01',
  },
  {
    id: 'U102',
    name: 'Unit 102',
    status: 'Yellow',
    devices: [
      { name: 'Face Reader 1', status: 'Installation' },
    ],
    installer: 'Divya',
    itSPOC: 'Prakash',
    updatedAt: '2025-05-01',
  },
  {
    id: 'U103',
    name: 'Unit 103',
    status: 'Blue',
    devices: [
      { name: 'Face Reader 1', status: 'Verification' },
    ],
    installer: 'Naveen',
    itSPOC: 'Shreya',
    updatedAt: '2025-05-02',
  },
  {
    id: 'U104',
    name: 'Unit 104',
    status: 'Green',
    devices: [
      { name: 'Face Reader 1', status: 'Completed' },
    ],
    installer: 'Vishal',
    itSPOC: 'Renu',
    updatedAt: '2025-04-30',
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Red': return 'bg-red-500';
    case 'Yellow': return 'bg-yellow-400';
    case 'Blue': return 'bg-blue-400';
    case 'Green': return 'bg-green-500';
    default: return 'bg-gray-300';
  }
};

const ProjectMatrixOverviewPage = () => {
  const [selectedUnit, setSelectedUnit] = useState(null);

  return (
    <div className="flex min-h-screen bg-gray-50">
      
      {/* Sidebar Filters */}
      <aside className="w-64 bg-white border-r p-4">
        <h2 className="text-lg font-bold mb-4">Filters</h2>
        <label className="block mb-2 text-sm">Project</label>
        <select className="w-full border rounded px-2 py-1 mb-4">
          <option>Matrix Biometric Rollout</option>
        </select>

        <label className="block mb-2 text-sm">Entity</label>
        <select className="w-full border rounded px-2 py-1 mb-4">
          <option>Block A</option>
        </select>

        <label className="block mb-2 text-sm">Regional IT SPOC</label>
        <select className="w-full border rounded px-2 py-1 mb-4">
          <option>Prakash</option>
        </select>

        <label className="block mb-2 text-sm">Unit HR</label>
        <select className="w-full border rounded px-2 py-1 mb-4">
          <option>Radhika</option>
        </select>
      </aside>

      {/* Main Panel */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-blue-700 mb-6">Project Overview Matrix</h1>

        {/* Legend */}
        <div className="flex space-x-4 mb-6 text-sm">
          <span className="flex items-center space-x-2"><div className="w-4 h-4 bg-red-500 rounded-sm"></div> <span>Site Not Ready</span></span>
          <span className="flex items-center space-x-2"><div className="w-4 h-4 bg-yellow-400 rounded-sm"></div> <span>Installation In Progress</span></span>
          <span className="flex items-center space-x-2"><div className="w-4 h-4 bg-blue-400 rounded-sm"></div> <span>Verification Ongoing</span></span>
          <span className="flex items-center space-x-2"><div className="w-4 h-4 bg-green-500 rounded-sm"></div> <span>Completed</span></span>
        </div>

        {/* Unit Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dummyUnits.map(unit => (
            <div
              key={unit.id}
              className={`p-4 rounded shadow cursor-pointer ${getStatusColor(unit.status)} text-white`}
              onClick={() => setSelectedUnit(unit)}
            >
              <h2 className="text-md font-semibold">{unit.name}</h2>
              <p className="text-sm">👷 {unit.installer}</p>
              <p className="text-sm">🧑‍💼 {unit.itSPOC}</p>
              <p className="text-sm">🕒 {unit.updatedAt}</p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedUnit && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-full max-w-2xl rounded p-6 relative">
              <button
                onClick={() => setSelectedUnit(null)}
                className="absolute top-2 right-3 text-gray-600 hover:text-red-600"
              >
                ✖
              </button>

              <h2 className="text-xl font-bold mb-4 text-blue-700">{selectedUnit.name} – Device Status</h2>

              <ul className="space-y-3">
                {selectedUnit.devices.map((device, index) => (
                  <li key={index} className="border rounded p-3">
                    <p className="font-semibold">{device.name}</p>
                    <p>Status: <span className="font-bold text-blue-600">{device.status}</span></p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProjectMatrixOverviewPage;