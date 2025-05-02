import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import DeviceListModal from '../components/DeviceListModal';

const ProjectMatrixOverviewPage = () => {
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);

  // Fetch unit names from the API
  useEffect(() => {
    const fetchUnits = async () => {
      setLoading(true);
      try {
        const response = await api.get('/device-locations/units');
        setUnits(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching units:', error);
        setError('Failed to load units. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchUnits();
  }, []);

  // Function to determine the status color based on unit status
  const getStatusColor = (status) => {
    switch (status) {
      case 'Green': return 'bg-green-500';
      case 'Yellow': return 'bg-yellow-400';
      case 'Red': return 'bg-red-500';
      default: return 'bg-gray-300'; // Grey for units with no status
    }
  };

  if (loading) {
    return (
      <div className="p-6 flex justify-center items-center min-h-screen">
        <div className="text-xl text-blue-700">Loading units...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 flex justify-center items-center min-h-screen">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Project Matrix Overview</h1>
      
      {units.length === 0 ? (
        <p className="text-gray-600">No units found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {units.map(unit => (
            <div
              key={unit.id}
              className={`p-4 rounded shadow text-white cursor-pointer hover:opacity-90 transition-opacity ${getStatusColor(unit.status)}`}
              onClick={() => setSelectedUnit(unit)}
            >
              <h2 className="text-lg font-semibold">{unit.unit_name}</h2>
              <div className="mt-2 text-sm space-y-1">
                <p>Location: {unit.city}</p>
                <p>Entity: {unit.entity_name}</p>
                <p>Status: {unit.status}</p>
                <p>Devices: {unit.installed_devices}/{unit.total_devices} ({unit.installation_percentage}%)</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Show modal when a unit is selected */}
      {selectedUnit && (
        <DeviceListModal 
          unit={selectedUnit} 
          onClose={() => setSelectedUnit(null)} 
        />
      )}
    </div>
  );
};

export default ProjectMatrixOverviewPage;