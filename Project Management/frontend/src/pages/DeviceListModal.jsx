import React, { useState, useEffect } from 'react';
import api from '../api/axios';

const DeviceListModal = ({ unit, onClose }) => {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        // Fetch devices for the selected unit
        const response = await api.get(`/device-locations?unit=${encodeURIComponent(unit.unit_name)}`);
        setDevices(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching devices:', error);
        setError('Failed to load devices. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchDevices();
  }, [unit.unit_name]);

  // Function to determine the installation status of a device
  const getInstallStatus = (device) => {
    if (device.install_date) {
      return 'Installed';
    } else if (device.delivery_status === 'Delivered') {
      return 'Delivered';
    } else if (device.shipped_date) {
      return 'Shipped';
    } else if (device.asset_id) {
      return 'Assigned';
    }
    return 'Not Shipped';
  };

  // Function to get status color for a device
  const getDeviceStatusColor = (device) => {
    const status = getInstallStatus(device);
    switch (status) {
      case 'Installed': return 'bg-green-100 text-green-800';
      case 'Delivered': return 'bg-yellow-100 text-yellow-800';
      case 'Shipped': return 'bg-blue-100 text-blue-800';
      case 'Assigned': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="p-4 border-b flex justify-between items-center bg-blue-700 text-white">
          <h2 className="text-xl font-bold">{unit.unit_name} - Device List</h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-blue-800 rounded"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-4 bg-blue-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold">City:</span> {unit.city}</p>
              <p><span className="font-semibold">Entity:</span> {unit.entity_name}</p>
            </div>
            <div>
              <p><span className="font-semibold">Status:</span> {unit.status}</p>
              <p><span className="font-semibold">Total Devices:</span> {unit.total_devices} ({unit.installation_percentage}% installed)</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-4">
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <p className="text-blue-700">Loading devices...</p>
            </div>
          ) : error ? (
            <div className="text-red-600 p-4">{error}</div>
          ) : devices.length === 0 ? (
            <div className="text-gray-600 p-4">No devices found for this unit.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Area</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Placement</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Device Type</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Serial #</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset ID</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {devices.map((device) => (
                    <tr key={device.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {device.block ? `${device.block}, ` : ''}{device.floor}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{device.area}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{device.system_placement_location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {device.device_to_install === 1 ? 'Face Recognition' : 
                         device.device_to_install === 2 ? 'Access Control' : 'Other'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${getDeviceStatusColor(device)}`}>
                          {getInstallStatus(device)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{device.serial_number || 'N/A'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{device.asset_id || 'N/A'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        
        <div className="p-4 border-t flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeviceListModal;