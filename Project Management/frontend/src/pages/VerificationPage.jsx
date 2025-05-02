// src/pages/VerificationPage.jsx
import React, { useState } from 'react';
import VerificationModal from '../components/VerificationModal';

const VerificationPage = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Verification & Handover Dashboard</h1>

      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
      >
        + Verify Device & Handover
      </button>

      {showModal && <VerificationModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default VerificationPage;
