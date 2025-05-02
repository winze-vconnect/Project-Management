import React, { useState } from 'react';
import LogisticsTrackerModal from '../components/LogisticsTrackerModal';

const LogisticsTrackerPage = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Logistics & Delivery Dashboard</h1>
      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
      >
        + Add Logistics Entry
      </button>

      {showModal && <LogisticsTrackerModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default LogisticsTrackerPage;
