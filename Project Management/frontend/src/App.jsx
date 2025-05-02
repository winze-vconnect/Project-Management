
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import DeviceLocationPlanner from './pages/DeviceLocationPlanner';
import LogisticsTrackerPage from "./pages/LogisticsTrackerPage";
import InstallationWorkflowPage from "./pages/InstallationWorkflowPage";
import VerificationPage from "./pages/VerificationPage";
import ReportsDashboardFull from "./pages/ReportsDashboardFull";
import AdminDashboardPage from './pages/AdminDashboardPage';
import DependenciesChecklistPage from "./pages/DependenciesChecklistPage";
import ProjectMatrixOverviewPage from "./pages/ProjectMatrixOverviewPage";



function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <nav className="bg-blue-600 text-white px-6 py-4 shadow">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-lg font-bold">Matrix COSEC VYOM Portal</Link>
          <div className="space-x-4">
            <Link to="/device-locations" className="hover:underline">Device Locations</Link>
            <Link to="/logistics" className="hover:underline">Logistics Tracker</Link> {/* NEW LINK */}
            <Link to="/install-workflow" className="hover:underline">Installation Workflow</Link>
            <Link to="/verify-handover" className="hover:underline">Verification</Link>
            <Link to="/admin" className="hover:underline">Admin Dashboard</Link>
            <Link to="/reports" className="hover:underline">Dashboard</Link>
            <Link to="/dependencies" className="hover:underline">Site Readiness</Link>
            <Link to="/project-overview" className="hover:underline">Project Matrix</Link>
          </div>
        </div>
      </nav>

      <main className="p-6">
        <Routes>
          <Route path="/device-locations" element={<DeviceLocationPlanner />} />
          <Route path="/logistics" element={<LogisticsTrackerPage />} /> {/* NEW ROUTE */}
          <Route path="/install-workflow" element={<InstallationWorkflowPage />} />
          <Route path="/verify-handover" element={<VerificationPage />} />
          <Route path="/reports" element={<ReportsDashboardFull />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="/dependencies" element={<DependenciesChecklistPage />} />
          <Route path="/project-overview" element={<ProjectMatrixOverviewPage />} />
          <Route path="*" element={<h1 className="text-red-600">❌ No Match Found</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import DeviceLocationPlanner from './pages/DeviceLocationPlanner';
// import LogisticsTrackerPage from "./pages/LogisticsTrackerPage";
// import InstallationWorkflowPage from "./pages/InstallationWorkflowPage";


// function App() {
//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800">
//       <nav className="bg-blue-600 text-white px-6 py-4 shadow">
//         <div className="flex justify-between items-center">
//           <Link to="/" className="text-lg font-bold">Matrix COSEC VYOM Portal</Link>
//           <div className="space-x-4">
//             <Link to="/device-locations" className="hover:underline">Device Locations</Link>
//             <Link to="/logistics" className="hover:underline">Logistics Tracker</Link> {/* NEW LINK */}
//           </div>
//         </div>
//       </nav>

//       <main className="p-6">
//         <Routes>
//           <Route path="/device-locations" element={<DeviceLocationPlanner />} />
//           <Route path="/logistics" element={<LogisticsTrackerPage />} /> {/* NEW ROUTE */}
//           <Route path="/install-workflow" element={<InstallationWorkflowPage />} />
//           <Route path="*" element={<h1 className="text-red-600">❌ No Match Found</h1>} />
//           </Routes>
//       </main>
//     </div>
//   );
// }

// export default App;

