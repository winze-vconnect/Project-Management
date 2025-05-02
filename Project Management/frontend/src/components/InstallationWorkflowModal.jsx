// src/components/InstallationWorkflowModal.jsx
import React from 'react';

const statusOptions = [
  'Not Started',
  'In Progress',
  'Pending',
  'Dependencies',
  'Completed'
];

const yesNoOptions = ['Yes', 'No'];
const ipTypes = ['Static', 'DHCP'];
const makes = ['Matrix', 'Hikvision', 'CP Plus'];
const models = ['Cosec-FacePro', 'Face Recognition Lite', 'Matrix XT'];
const installers = ['Amit Kumar', 'Ramesh S.', 'Divya G.'];

const InstallationWorkflowModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-3xl overflow-y-auto max-h-screen">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Installation Workflow Tracker</h2>

        <form className="space-y-6">
          {/* Task Status Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Back Box Installation', 'Face Device Mounting'].map((label, idx) => (
              <div key={idx}>
                <label className="block font-medium text-gray-700">{label}</label>
                <select className="w-full mt-1 border rounded px-3 py-2">
                  {statusOptions.map(opt => <option key={opt}>{opt}</option>)}
                </select>
              </div>
            ))}

            {/* IP Configuration */}
            <div>
              <label className="block font-medium text-gray-700">IP Configuration</label>
              <select className="w-full mt-1 border rounded px-3 py-2">
                {ipTypes.map(opt => <option key={opt}>{opt}</option>)}
              </select>
              <input type="text" placeholder="Enter IP Address" className="mt-2 w-full border rounded px-3 py-2" />
            </div>

            {['Device Pinging', 'Vyom Detection', 'Enrollment Working', 'Attendance Logs Verified'].map((label, idx) => (
              <div key={label}>
                <label className="block font-medium text-gray-700">{label}</label>
                <select className="w-full mt-1 border rounded px-3 py-2">
                  {yesNoOptions.map(opt => <option key={opt}>{opt}</option>)}
                </select>
              </div>
            ))}
          </div>

          {/* Device Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700">Make</label>
              <select className="w-full mt-1 border rounded px-3 py-2">
                {makes.map(opt => <option key={opt}>{opt}</option>)}
              </select>
            </div>
            <div>
              <label className="block font-medium text-gray-700">Model Number</label>
              <select className="w-full mt-1 border rounded px-3 py-2">
                {models.map(opt => <option key={opt}>{opt}</option>)}
              </select>
            </div>
            <div>
              <label className="block font-medium text-gray-700">Asset ID</label>
              <input type="text" className="w-full mt-1 border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Serial Number</label>
              <input type="text" className="w-full mt-1 border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block font-medium text-gray-700">MAC Address</label>
              <input type="text" className="w-full mt-1 border rounded px-3 py-2" />
            </div>
          </div>

          {/* Installer Assignment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700">Installer Name</label>
              <select className="w-full mt-1 border rounded px-3 py-2">
                {installers.map(opt => <option key={opt}>{opt}</option>)}
              </select>
            </div>
            <div>
              <label className="block font-medium text-gray-700">Install Date</label>
              <input type="date" className="w-full mt-1 border rounded px-3 py-2" />
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-end space-x-3 mt-6">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InstallationWorkflowModal;
