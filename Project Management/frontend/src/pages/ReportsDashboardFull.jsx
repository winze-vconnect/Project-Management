// src/pages/ReportsDashboardFull.jsx
import React, { useState } from 'react';

const reportOptions = [
  '📊 Global Summary',
  '🏢 Site Status View',
  '👷 Installer Performance',
  '🚚 Logistics Tracker',
  '⚠️ Dependency Tracker',
  '🧾 Rework Report',
  '📅 Gantt View',
  '📈 Daily Progress',
  '🗃️ Completion Docs Tracker',
  '📤 Export Reports'
];

const ReportsDashboardFull = () => {
  const [selectedReport, setSelectedReport] = useState('📊 Global Summary');

  const renderReportContent = () => {
    switch (selectedReport) {
      case '📊 Global Summary':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-blue-100 text-blue-800 p-4 rounded shadow">
                <h3 className="font-bold">Planned Devices</h3>
                <p className="text-2xl">129</p>
              </div>
              <div className="bg-orange-100 text-orange-800 p-4 rounded shadow">
                <h3 className="font-bold">Delivered Devices</h3>
                <p className="text-2xl">120</p>
              </div>
              <div className="bg-green-100 text-green-800 p-4 rounded shadow">
                <h3 className="font-bold">Installed Devices</h3>
                <p className="text-2xl">97</p>
              </div>
              <div className="bg-red-100 text-red-800 p-4 rounded shadow">
                <h3 className="font-bold">Verified Devices</h3>
                <p className="text-2xl">83</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-semibold mb-2">Device Status Chart (Static)</h3>
              <p>[Bar Chart Placeholder]</p>
            </div>
          </div>
        );

      case '🏢 Site Status View':
        return (
          <table className="min-w-full bg-white border rounded">
            <thead className="bg-blue-100">
              <tr>
                <th className="text-left p-2">Site</th>
                <th className="text-left p-2">Planned</th>
                <th className="text-left p-2">Installed</th>
                <th className="text-left p-2">Progress</th>
                <th className="text-left p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-2">Site A</td>
                <td className="p-2">5</td>
                <td className="p-2">5</td>
                <td className="p-2">100%</td>
                <td className="p-2 text-green-600">✅ Green</td>
              </tr>
              <tr className="border-t">
                <td className="p-2">Site B</td>
                <td className="p-2">10</td>
                <td className="p-2">4</td>
                <td className="p-2">40%</td>
                <td className="p-2 text-yellow-600">⚠️ Yellow</td>
              </tr>
              <tr className="border-t">
                <td className="p-2">Site C</td>
                <td className="p-2">7</td>
                <td className="p-2">1</td>
                <td className="p-2">14%</td>
                <td className="p-2 text-red-600">❌ Red</td>
              </tr>
            </tbody>
          </table>
        );

      case '👷 Installer Performance':
        return (
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold mb-2">Installer Stats</h3>
            <ul className="space-y-2">
              <li>Ramesh – 9/10 installs</li>
              <li>Divya – 12/15 installs</li>
              <li>Amit – 7/8 installs</li>
            </ul>
          </div>
        );

      case '🚚 Logistics Tracker':
        return <p className="text-gray-700">Static Logistics table here</p>;
      case '⚠️ Dependency Tracker':
        return <p className="text-gray-700">List of sites with missing POE/IP/Internet</p>;
      case '🧾 Rework Report':
        return <p className="text-gray-700">Devices marked Not Working with remarks</p>;
      case '📅 Gantt View':
        return <p className="text-gray-700">[Static Gantt Timeline Placeholder]</p>;
      case '📈 Daily Progress':
        return <p className="text-gray-700">Chart of daily installs (static)</p>;
      case '🗃️ Completion Docs Tracker':
        return <p className="text-gray-700">Table of uploaded handover files</p>;
      case '📤 Export Reports':
        return <p className="text-gray-700">Download buttons for PDF/Excel (static)</p>;

      default:
        return <p className="text-gray-600">Select a report to view content.</p>;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-4 border-r">
        <h2 className="text-lg font-bold text-blue-700 mb-4">📁 Reports Menu</h2>
        <ul className="space-y-2">
          {reportOptions.map((report) => (
            <li key={report}>
              <button
                onClick={() => setSelectedReport(report)}
                className={`w-full text-left px-4 py-2 rounded hover:bg-blue-100 ${
                  selectedReport === report ? 'bg-blue-200 text-blue-800 font-semibold' : 'text-gray-800'
                }`}
              >
                {report}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Dashboard Main */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">{selectedReport}</h1>
        {renderReportContent()}
      </div>
    </div>
  );
};

export default ReportsDashboardFull;

