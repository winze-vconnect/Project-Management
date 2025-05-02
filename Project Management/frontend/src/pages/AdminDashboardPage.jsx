// src/pages/AdminDashboardPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const adminModules = [
  { label: 'Add / Edit Facilities', icon: '🏢', path: '/admin/facilities' },
  { label: 'Upload / Import Data', icon: '📤', path: '/admin/import' },
  { label: 'Audit Logs', icon: '📋', path: '/admin/audit-logs' },
  { label: 'Email Triggers', icon: '📧', path: '/admin/email-triggers' },
  { label: 'Scheduler', icon: '📆', path: '/admin/scheduler' },
  { label: 'Master Records', icon: '📑', path: '/admin/master-records' },
  { label: 'User Management', icon: '👤', path: '/admin/users' },
  { label: 'Dependencies', icon: '🔗', path: '/admin/dependencies' }
];

const AdminDashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">Administration Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {adminModules.map((module, idx) => (
          <div
            key={idx}
            onClick={() => navigate(module.path)}
            className="cursor-pointer bg-white shadow rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-md transition"
          >
            <div className="text-4xl mb-2">{module.icon}</div>
            <div className="text-center text-sm font-semibold text-gray-800">{module.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboardPage;