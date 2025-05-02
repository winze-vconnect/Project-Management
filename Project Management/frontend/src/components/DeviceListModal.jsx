// import React, { useState } from 'react';
// import DeviceLifecycleModal from './DeviceLifecycleModal';

// const DeviceListModal = ({ unit, onClose }) => {
//   const [selectedDevice, setSelectedDevice] = useState(null);

//   const devices = [
//     { id: 1, name: 'Face Reader - Ramp Left', assignedTo: 'Ramesh', status: 'Installation' },
//     { id: 2, name: 'Face Reader - Admin Entry', assignedTo: 'Divya', status: 'Verification' },
//   ];

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
//       <div className="bg-white rounded-lg w-full max-w-2xl p-6 relative">
//         <button onClick={onClose} className="absolute top-2 right-4 text-gray-600 hover:text-red-600 text-xl">✖</button>

//         <h2 className="text-lg font-bold text-blue-700 mb-4">Devices for {unit.name}</h2>

//         <ul className="space-y-3">
//           {devices.map(device => (
//             <li
//               key={device.id}
//               className="p-3 border rounded hover:bg-gray-50 cursor-pointer"
//               onClick={() => setSelectedDevice(device)}
//             >
//               <p className="font-semibold">{device.name}</p>
//               <p className="text-sm">Assigned to: {device.assignedTo}</p>
//               <p className="text-sm">Status: {device.status}</p>
//             </li>
//           ))}
//         </ul>

//         {selectedDevice && (
//           <DeviceLifecycleModal
//             device={selectedDevice}
//             onClose={() => setSelectedDevice(null)}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default DeviceListModal;




import React, { useState } from 'react';
import DeviceLifecycleModal from './DeviceLifecycleModal';

const DeviceListModal = ({ unitName, devices, onClose }) => {
  const [selectedDevice, setSelectedDevice] = useState(null);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-xl text-gray-600 hover:text-red-600">✖</button>
        <h2 className="text-lg font-bold text-blue-700 mb-4">Devices in {unitName}</h2>

        <ul className="space-y-3">
          {devices.map((device, index) => (
            <li
              key={index}
              className="p-3 border rounded hover:bg-gray-50 cursor-pointer"
              onClick={() => setSelectedDevice(device)}
            >
              <p className="font-semibold">{device.device}</p>
              <p className="text-sm">📍 {device.location}</p>
              <p className="text-sm">👷 {device.stakeholders.pm}</p>
            </li>
          ))}
        </ul>

        {selectedDevice && (
          <DeviceLifecycleModal
            device={selectedDevice}
            onClose={() => setSelectedDevice(null)}
          />
        )}
      </div>
    </div>
  );
};

export default DeviceListModal;

