import React from 'react';

const DependenciesChecklistModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white w-full max-w-5xl rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-blue-700 mb-4">
          Site Readiness Checklist – Dependencies
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          {/* Mounting */}
          <div>
            <label className="font-medium text-gray-700">Mounting Location Finalized?</label>
            <select className="w-full mt-1 border rounded px-2 py-1">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div>
            <label className="font-medium text-gray-700">Surface Type / Height Notes</label>
            <input type="text" className="w-full mt-1 border rounded px-2 py-1" placeholder="e.g. 5.5ft wall" />
          </div>

          {/* Power Readiness */}
          <div>
            <label className="font-medium text-gray-700">POE Available?</label>
            <select className="w-full mt-1 border rounded px-2 py-1">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div>
            <label className="font-medium text-gray-700">12V Adapter Required?</label>
            <select className="w-full mt-1 border rounded px-2 py-1">
              <option>No</option>
              <option>Yes - Provide Adapter</option>
            </select>
          </div>
          <div>
            <label className="font-medium text-gray-700">Power Socket Nearby?</label>
            <select className="w-full mt-1 border rounded px-2 py-1">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div>
            <label className="font-medium text-gray-700">UPS Backup Available?</label>
            <select className="w-full mt-1 border rounded px-2 py-1">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          {/* Network Readiness */}
          <div>
            <label className="font-medium text-gray-700">LAN Port Available?</label>
            <select className="w-full mt-1 border rounded px-2 py-1">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div>
            <label className="font-medium text-gray-700">Switch Port Details</label>
            <input type="text" className="w-full mt-1 border rounded px-2 py-1" placeholder="e.g. Port 14 - VLAN 5" />
          </div>
          <div>
            <label className="font-medium text-gray-700">Static IP</label>
            <input type="text" className="w-full mt-1 border rounded px-2 py-1" placeholder="e.g. 192.168.1.22" />
          </div>
          <div>
            <label className="font-medium text-gray-700">Subnet Mask</label>
            <input type="text" className="w-full mt-1 border rounded px-2 py-1" placeholder="e.g. 255.255.255.0" />
          </div>
          <div>
            <label className="font-medium text-gray-700">Gateway</label>
            <input type="text" className="w-full mt-1 border rounded px-2 py-1" placeholder="e.g. 192.168.1.1" />
          </div>
          <div>
            <label className="font-medium text-gray-700">Bandwidth Available</label>
            <select className="w-full mt-1 border rounded px-2 py-1">
              <option>Above 1024 kbps</option>
              <option>Below 1024 kbps</option>
            </select>
          </div>

          {/* Environmental Checks */}
          <div>
            <label className="font-medium text-gray-700">Lighting Condition</label>
            <select className="w-full mt-1 border rounded px-2 py-1">
              <option>Well-lit</option>
              <option>Dim Area</option>
              <option>Direct Glare Present</option>
            </select>
          </div>
          <div>
            <label className="font-medium text-gray-700">Final Comments</label>
            <textarea className="w-full mt-1 border rounded px-2 py-1" rows={2} placeholder="Any other notes..." />
          </div>
        </form>

        {/* Actions */}
        <div className="flex justify-end space-x-3 mt-6">
          <button
            type="button"
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => {
              console.log('Static submission – connect to API later');
              onClose();
            }}
          >
            Save Checklist
          </button>
        </div>
      </div>
    </div>
  );
};

export default DependenciesChecklistModal;
