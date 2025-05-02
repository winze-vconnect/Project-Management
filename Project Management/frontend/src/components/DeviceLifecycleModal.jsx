// import React from 'react';

// const steps = [
//   { name: 'Logistics', key: 'logistics' },
//   { name: 'Site Clearance', key: 'clearance' },
//   { name: 'Installation', key: 'installation' },
//   { name: 'Verification', key: 'verification' },
//   { name: 'Handover', key: 'handover' },
// ];

// // For demo purposes, let's assume installation is in progress.
// const statusMap = {
//   logistics: 'Completed',
//   clearance: 'Completed',
//   installation: 'In Progress',
//   verification: 'Pending',
//   handover: 'Pending',
// };

// const getStatusStyle = (status) => {
//   switch (status) {
//     case 'Completed': return 'bg-green-500 text-white';
//     case 'In Progress': return 'bg-yellow-400 text-white';
//     case 'Pending': return 'bg-gray-300 text-gray-700';
//     default: return 'bg-gray-200';
//   }
// };

// const DeviceLifecycleModal = ({ device, onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
//       <div className="bg-white rounded-lg w-full max-w-xl p-6 relative">
//         <button onClick={onClose} className="absolute top-2 right-4 text-gray-600 hover:text-red-600 text-xl">✖</button>

//         <h2 className="text-xl font-bold text-blue-700 mb-4">{device.name} – Lifecycle</h2>

//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//           {steps.map(step => (
//             <div
//               key={step.key}
//               className={`rounded p-4 text-center font-semibold ${getStatusStyle(statusMap[step.key])}`}
//             >
//               {step.name}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeviceLifecycleModal;



import React, { useState } from 'react';

const DeviceLifecycleModal = ({ device, onClose }) => {
  const [lifecycle, setLifecycle] = useState(device.lifecycle);

  const updateStatus = (key, value) => {
    setLifecycle((prev) => ({ ...prev, [key]: value }));
  };

  const stages = [
    { key: 'logistics', label: '📦 Logistics' },
    { key: 'clearance', label: '🧹 Site Clearance' },
    { key: 'installation', label: '🔧 Installation' },
    { key: 'verification', label: '✅ Verification' },
    { key: 'handover', label: '📜 Handover' }
  ];

  const getColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-500 text-white';
      case 'In Progress': return 'bg-yellow-400 text-white';
      case 'Pending': default: return 'bg-gray-300 text-gray-700';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full relative">
        <button onClick={onClose} className="absolute top-2 right-4 text-gray-600 hover:text-red-600 text-xl">✖</button>

        <h2 className="text-xl font-bold text-blue-700 mb-4">{device.device} – Lifecycle Tracker</h2>
        <p className="text-sm mb-2">📍 {device.location}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stages.map(({ key, label }) => (
            <div key={key} className={`p-4 rounded shadow ${getColor(lifecycle[key])}`}>
              <div className="font-semibold mb-1">{label}</div>
              <select
                className="w-full px-2 py-1 text-sm rounded"
                value={lifecycle[key]}
                onChange={(e) => updateStatus(key, e.target.value)}
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
              <p className="text-xs mt-1">👤 {device.stakeholders[key === 'logistics' || key === 'installation' ? 'pm' : key === 'clearance' ? 'it' : key === 'handover' ? 'sm' : 'hr']}</p>
              <textarea className="mt-1 w-full text-xs border rounded px-2 py-1" placeholder="Comments..." />
            </div>
          ))}
        </div>

        <div className="text-right mt-6">
          <button
            onClick={() => {
              console.log('Save changes:', lifecycle);
              onClose();
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save & Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeviceLifecycleModal;
