import React from "react";

const LogisticsTrackerModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-xl">
        <h2 className="text-xl font-semibold text-blue-700 mb-6">
          Logistics & Delivery Tracker
        </h2>

        <form className="space-y-4">
          {/* Courier Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Courier Name</label>
            <select className="w-full mt-1 border-orange-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500">
              <option>DTDC</option>
              <option>BlueDart</option>
              <option>Delhivery</option>
            </select>
          </div>

          {/* Tracking Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Tracking Number</label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value="TRK12345678"
                className="flex-1 border-orange-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
              <a href="https://dtdc.in/tracking/TRK12345678" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                🔗
              </a>
            </div>
          </div>

          {/* Shipped Date & Delivery Status */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Shipped Date</label>
              <input
                type="date"
                value="2025-05-01"
                className="w-full border-orange-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Delivery Status</label>
              <select className="w-full border-orange-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500">
                <option>Shipped</option>
                <option>In Transit</option>
                <option selected>Delivered</option>
              </select>
            </div>
          </div>

          {/* Received By */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Received By</label>
            <input
              type="text"
              value="Ramesh @ Site A"
              className="w-full border-orange-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          {/* POD Upload & MAC Address */}
          <div className="grid grid-cols-2 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-gray-700">POD Upload</label>
              <div className="flex space-x-2">
                <button
                  type="button"
                  className="flex-1 bg-orange-100 text-orange-800 px-4 py-2 rounded-md shadow-sm hover:bg-orange-200"
                >
                  ⬆ Upload
                </button>
                <button
                  type="button"
                  className="flex-1 bg-orange-100 text-orange-800 px-4 py-2 rounded-md shadow-sm hover:bg-orange-200"
                >
                  👁️ View
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">MAC Address</label>
              <input
                type="text"
                value="00-14-22-01-23-45"
                className="w-full border-orange-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>

          {/* Serial Number & Make */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Serial Number</label>
              <input
                type="text"
                value="56483299"
                className="w-full border-orange-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Make</label>
              <select className="w-full border-orange-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500">
                <option selected>Matrix</option>
                <option>CP Plus</option>
                <option>Hikvision</option>
              </select>
            </div>
          </div>

          {/* Model Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Model Number</label>
            <select className="w-full border-orange-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500">
              <option selected>Cosec-FacePro</option>
              <option>Face Recognition Lite</option>
              <option>Matrix XT</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogisticsTrackerModal;
