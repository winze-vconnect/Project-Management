// // src/pages/InstallationWorkflowPage.jsx
// import React, { useState } from 'react';
// import InstallationWorkflowModal from '../components/InstallationWorkflowModal';
// import RemarksAndComments from '../components/RemarksAndComments';

// const InstallationWorkflowPage = () => {
//   const [showModal, setShowModal] = useState(true);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold text-blue-700 mb-4">Installation Workflow Dashboard</h1>

//       <button
//         onClick={() => setShowModal(true)}
//         className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
//       >
//         + Add Installation Record
//       </button>

//       {showModal && <InstallationWorkflowModal onClose={() => setShowModal(false)} />}
//     </div>
//   );
// };

// export default InstallationWorkflowPage;

// src/pages/InstallationWorkflowPage.jsx
import React, { useState } from 'react';
import InstallationWorkflowModal from '../components/InstallationWorkflowModal';
import RemarksAndComments from '../components/RemarksAndComments';

const InstallationWorkflowPage = () => {
  const [showModal, setShowModal] = useState(true);

  const handlePostComment = (comment) => {
    console.log("Comment posted:", comment);
    // Send to backend or update local state
  };

  const handleRemarksChange = (remarks) => {
    console.log("Remarks updated:", remarks);
    // Update remarks in backend or local state
  };



  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Installation Workflow Dashboard</h1>

      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
      >
        + Add Installation Record
      </button>

      {showModal && <InstallationWorkflowModal onClose={() => setShowModal(false)} />}
        {/* Reusable Remarks and Comments */}
      <RemarksAndComments
        entityType="installation"
        entityId="device-1234"
        contextTitle="Installation Remarks & Notes"
        onPostComment={handlePostComment}
        onRemarksChange={handleRemarksChange}
      />
      
    </div>
  );
};

export default InstallationWorkflowPage;

