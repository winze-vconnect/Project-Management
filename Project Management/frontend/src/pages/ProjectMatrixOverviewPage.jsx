// import React, { useState } from 'react';

// const dummyUnits = [
//   {
//     id: 'U101',
//     name: 'Unit 101',
//     status: 'Red', // Site not ready
//     devices: [
//       { name: 'Face Reader 1', status: 'Dependencies' },
//       { name: 'Face Reader 2', status: 'Dependencies' },
//     ],
//     installer: 'Ramesh',
//     itSPOC: 'Anjali',
//     updatedAt: '2025-05-01',
//   },
//   {
//     id: 'U102',
//     name: 'Unit 102',
//     status: 'Yellow',
//     devices: [
//       { name: 'Face Reader 1', status: 'Installation' },
//     ],
//     installer: 'Divya',
//     itSPOC: 'Prakash',
//     updatedAt: '2025-05-01',
//   },
//   {
//     id: 'U103',
//     name: 'Unit 103',
//     status: 'Blue',
//     devices: [
//       { name: 'Face Reader 1', status: 'Verification' },
//     ],
//     installer: 'Naveen',
//     itSPOC: 'Shreya',
//     updatedAt: '2025-05-02',
//   },
//   {
//     id: 'U104',
//     name: 'Unit 104',
//     status: 'Green',
//     devices: [
//       { name: 'Face Reader 1', status: 'Completed' },
//     ],
//     installer: 'Vishal',
//     itSPOC: 'Renu',
//     updatedAt: '2025-04-30',
//   },
// ];

// const getStatusColor = (status) => {
//   switch (status) {
//     case 'Red': return 'bg-red-500';
//     case 'Yellow': return 'bg-yellow-400';
//     case 'Blue': return 'bg-blue-400';
//     case 'Green': return 'bg-green-500';
//     default: return 'bg-gray-300';
//   }
// };

// const ProjectMatrixOverviewPage = () => {
//   const [selectedUnit, setSelectedUnit] = useState(null);

//   return (
//     <div className="flex min-h-screen bg-gray-50">
      
//       {/* Sidebar Filters */}
//       <aside className="w-64 bg-white border-r p-4">
//         <h2 className="text-lg font-bold mb-4">Filters</h2>
//         <label className="block mb-2 text-sm">Project</label>
//         <select className="w-full border rounded px-2 py-1 mb-4">
//           <option>Matrix Biometric Rollout</option>
//         </select>

//         <label className="block mb-2 text-sm">Entity</label>
//         <select className="w-full border rounded px-2 py-1 mb-4">
//           <option>Block A</option>
//         </select>

//         <label className="block mb-2 text-sm">Regional IT SPOC</label>
//         <select className="w-full border rounded px-2 py-1 mb-4">
//           <option>Prakash</option>
//         </select>

//         <label className="block mb-2 text-sm">Unit HR</label>
//         <select className="w-full border rounded px-2 py-1 mb-4">
//           <option>Radhika</option>
//         </select>
//       </aside>

//       {/* Main Panel */}
//       <main className="flex-1 p-6">
//         <h1 className="text-2xl font-bold text-blue-700 mb-6">Project Overview Matrix</h1>

//         {/* Legend */}
//         <div className="flex space-x-4 mb-6 text-sm">
//           <span className="flex items-center space-x-2"><div className="w-4 h-4 bg-red-500 rounded-sm"></div> <span>Site Not Ready</span></span>
//           <span className="flex items-center space-x-2"><div className="w-4 h-4 bg-yellow-400 rounded-sm"></div> <span>Installation In Progress</span></span>
//           <span className="flex items-center space-x-2"><div className="w-4 h-4 bg-blue-400 rounded-sm"></div> <span>Verification Ongoing</span></span>
//           <span className="flex items-center space-x-2"><div className="w-4 h-4 bg-green-500 rounded-sm"></div> <span>Completed</span></span>
//         </div>

//         {/* Unit Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {dummyUnits.map(unit => (
//             <div
//               key={unit.id}
//               className={`p-4 rounded shadow cursor-pointer ${getStatusColor(unit.status)} text-white`}
//               onClick={() => setSelectedUnit(unit)}
//             >
//               <h2 className="text-md font-semibold">{unit.name}</h2>
//               <p className="text-sm">👷 {unit.installer}</p>
//               <p className="text-sm">🧑‍💼 {unit.itSPOC}</p>
//               <p className="text-sm">🕒 {unit.updatedAt}</p>
//             </div>
//           ))}
//         </div>

//         {/* Modal */}
//         {selectedUnit && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white w-full max-w-2xl rounded p-6 relative">
//               <button
//                 onClick={() => setSelectedUnit(null)}
//                 className="absolute top-2 right-3 text-gray-600 hover:text-red-600"
//               >
//                 ✖
//               </button>

//               <h2 className="text-xl font-bold mb-4 text-blue-700">{selectedUnit.name} – Device Status</h2>

//               <ul className="space-y-3">
//                 {selectedUnit.devices.map((device, index) => (
//                   <li key={index} className="border rounded p-3">
//                     <p className="font-semibold">{device.name}</p>
//                     <p>Status: <span className="font-bold text-blue-600">{device.status}</span></p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default ProjectMatrixOverviewPage;



import React, { useState } from 'react';
import DeviceListModal from '../components/DeviceListModal';

const dummyUnits = [
  { id: 'U101', name: 'NH-Jamshedpur Brahmananda', status: 'Green' },
  { id: 'U102', name: 'NH-Bangalore SJR', status: 'Yellow' },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Green': return 'bg-green-500';
    case 'Yellow': return 'bg-yellow-400';
    case 'Red': return 'bg-red-500';
    default: return 'bg-gray-300';
  }
};

const ProjectMatrixOverviewPage = () => {
  const [selectedUnit, setSelectedUnit] = useState(null);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Project Matrix Overview</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {dummyUnits.map(unit => (
          <div
            key={unit.id}
            className={`p-4 rounded shadow text-white cursor-pointer ${getStatusColor(unit.status)}`}
            onClick={() => setSelectedUnit(unit)}
          >
            <h2 className="text-lg font-semibold">{unit.name}</h2>
            <p className="text-sm mt-1">Status: {unit.status}</p>
          </div>
        ))}
      </div>

      {selectedUnit && (
        <DeviceListModal unit={selectedUnit} onClose={() => setSelectedUnit(null)} />
      )}
    </div>
  );
};

export default ProjectMatrixOverviewPage;





// import React, { useState } from 'react';
// import DeviceLifecycleModal from '../components/DeviceLifecycleModal';

// const mockDevices = [
//   {
//     id: 1,
//     city: 'Jamshedpur',
//     entity: 'NHL-ISD',
//     unit: 'NH-Jamshedpur Brahmananda',
//     location: 'Ramp Area Entry Point (Left)',
//     device: 'Face Reader 1',
//     stakeholders: {
//       hr: 'Shree Hari Nair',
//       it: 'Anjali',
//       pm: 'Arun',
//       sm: 'Sunil Rao'
//     },
//     lifecycle: {
//       logistics: 'Completed',
//       clearance: 'Completed',
//       installation: 'In Progress',
//       verification: 'Pending',
//       handover: 'Pending'
//     }
//   },
//   {
//     id: 2,
//     city: 'Jamshedpur',
//     entity: 'NHL-ISD',
//     unit: 'NH-Jamshedpur Brahmananda',
//     location: 'Admin Block Entrance',
//     device: 'Face Reader 2',
//     stakeholders: {
//       hr: 'Shree Hari Nair',
//       it: 'Anjali',
//       pm: 'Arun',
//       sm: 'Sunil Rao'
//     },
//     lifecycle: {
//       logistics: 'Completed',
//       clearance: 'Completed',
//       installation: 'Completed',
//       verification: 'Completed',
//       handover: 'Completed'
//     }
//   }
// ];

// const ProjectMatrixOverviewPage = () => {
//   const [filters, setFilters] = useState({ city: '', entity: '', unit: '' });
//   const [selectedDevice, setSelectedDevice] = useState(null);

//   const filteredDevices = mockDevices.filter((d) =>
//     (!filters.city || d.city === filters.city) &&
//     (!filters.entity || d.entity === filters.entity) &&
//     (!filters.unit || d.unit === filters.unit)
//   );

//   const summary = {
//     total: filteredDevices.length,
//     logistics: filteredDevices.filter(d => d.lifecycle.logistics === 'Completed').length,
//     clearance: filteredDevices.filter(d => d.lifecycle.clearance === 'Completed').length,
//     installation: filteredDevices.filter(d => d.lifecycle.installation === 'Completed').length,
//     verification: filteredDevices.filter(d => d.lifecycle.verification === 'Completed').length,
//     handover: filteredDevices.filter(d => d.lifecycle.handover === 'Completed').length
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold text-blue-700 mb-4">Project Matrix Overview</h1>

//       {/* Filters */}
//       <div className="flex flex-wrap gap-4 mb-6">
//         <select className="border px-3 py-2" onChange={(e) => setFilters({ ...filters, city: e.target.value })}>
//           <option value="">Select City</option>
//           <option value="Jamshedpur">Jamshedpur</option>
//         </select>
//         <select className="border px-3 py-2" onChange={(e) => setFilters({ ...filters, entity: e.target.value })}>
//           <option value="">Select Entity</option>
//           <option value="NHL-ISD">NHL-ISD</option>
//         </select>
//         <select className="border px-3 py-2" onChange={(e) => setFilters({ ...filters, unit: e.target.value })}>
//           <option value="">Select Unit</option>
//           <option value="NH-Jamshedpur Brahmananda">NH-Jamshedpur Brahmananda</option>
//         </select>
//       </div>

//       {/* Summary Row */}
//       <div className="bg-white p-4 mb-6 shadow rounded grid grid-cols-2 md:grid-cols-5 gap-4 text-sm text-center font-medium text-blue-800">
//         <div>📦 Logistics ✅ {summary.logistics}</div>
//         <div>🧹 Site Clearance ✅ {summary.clearance}</div>
//         <div>🔧 Installation ✅ {summary.installation}</div>
//         <div>✅ Verification ✅ {summary.verification}</div>
//         <div>📜 Handover ✅ {summary.handover}</div>
//       </div>

//       {/* Device List */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {filteredDevices.map((device) => (
//           <div key={device.id} className="bg-white p-4 rounded shadow cursor-pointer hover:bg-blue-50" onClick={() => setSelectedDevice(device)}>
//             <h2 className="font-semibold text-blue-700">{device.device}</h2>
//             <p className="text-sm">📍 {device.location}</p>
//             <p className="text-sm">👷 PM: {device.stakeholders.pm}</p>
//             <p className="text-sm">Status: {device.lifecycle.handover === 'Completed' ? '✅ Completed' : '⏳ In Progress'}</p>
//           </div>
//         ))}
//       </div>

//       {/* Lifecycle Modal */}
//       {selectedDevice && (
//         <DeviceLifecycleModal
//           device={selectedDevice}
//           onClose={() => setSelectedDevice(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default ProjectMatrixOverviewPage;
