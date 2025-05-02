// src/pages/UserRolesPage.jsx
import React, { useState } from 'react';

const rolesData = [
  {
    role: 'Admin',
    permissions: 'Full access, user management, edit all'
  },
  {
    role: 'Installer',
    permissions: 'Assigned sites/devices only'
  },
  {
    role: 'Customer',
    permissions: 'View + verification modules'
  },
  {
    role: 'Regional Head',
    permissions: 'Read-only reports for assigned zone'
  }
];

const roleFilters = {
  Admin: ['Users', 'All Devices', 'Reports', 'Settings'],
  Installer: ['Assigned Installations', 'Tasks', 'Remarks'],
  Customer: ['Verification', 'Status View'],
  'Regional Head': ['Reports', 'Zone Summary']
};

const UserRolesPage = () => {
  const [selectedRole, setSelectedRole] = useState('Admin');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">User Roles & Access Control</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rolesData.map((roleInfo) => (
          <div key={roleInfo.role} className="border p-4 rounded-xl shadow bg-white">
            <h2 className="text-lg font-semibold text-blue-600">{roleInfo.role}</h2>
            <p className="text-gray-700 mt-1">{roleInfo.permissions}</p>
            <button
              onClick={() => setSelectedRole(roleInfo.role)}
              className={`mt-2 px-4 py-1 rounded text-white ${selectedRole === roleInfo.role ? 'bg-orange-500' : 'bg-blue-500'} hover:opacity-90`}
            >
              View Scope
            </button>
          </div>
        ))}
      </div>

      {/* Role View Scope */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-800">Visible Modules for: {selectedRole}</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          {roleFilters[selectedRole].map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserRolesPage;
