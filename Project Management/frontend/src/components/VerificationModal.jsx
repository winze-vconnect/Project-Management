// src/components/VerificationModal.jsx
import React, { useState } from 'react';

const VerificationModal = ({ onClose }) => {
  const [verifiedStatus, setVerifiedStatus] = useState('Working');
  const [reworkTriggered, setReworkTriggered] = useState(false);

  const handleStatusChange = (e) => {
    const value = e.target.value;
    setVerifiedStatus(value);
    if (value === 'Not Working') {
      setReworkTriggered(true);
      // Here you can call a function to reset workflow fields
    } else {
      setReworkTriggered(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-3xl overflow-y-auto max-h-screen">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Verification & Handover</h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700">Verified By</label>
              <input type="text" className="w-full mt-1 border rounded px-3 py-2" placeholder="Customer Name" />
            </div>

            <div>
              <label className="block font-medium text-gray-700">Verified Status</label>
              <select
                value={verifiedStatus}
                onChange={handleStatusChange}
                className="w-full mt-1 border rounded px-3 py-2"
              >
                <option>Working</option>
                <option>Not Working</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block font-medium text-gray-700">Comments</label>
              <textarea className="w-full mt-1 border rounded px-3 py-2" rows={3} placeholder="Additional feedback..." />
            </div>

            <div>
              <label className="block font-medium text-gray-700">Signature Upload</label>
              <input type="file" accept="image/*,.pdf" className="w-full mt-1" />
            </div>

            <div>
              <label className="block font-medium text-gray-700">Device Photo Upload</label>
              <input type="file" accept="image/*" className="w-full mt-1" />
            </div>

            <div>
              <label className="block font-medium text-gray-700">Verified Date</label>
              <input type="date" className="w-full mt-1 border rounded px-3 py-2" />
            </div>

            <div className="flex items-center">
              <span className="inline-block px-3 py-1 text-green-700 bg-green-100 rounded-full">
                ✅ Verified & Handed Over
              </span>
            </div>
          </div>

          {reworkTriggered && (
            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              ❗ Rework triggered. Task status will be reset and re-verification is required.
            </div>
          )}

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerificationModal;
