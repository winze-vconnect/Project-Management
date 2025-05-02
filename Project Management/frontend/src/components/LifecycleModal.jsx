
import React from 'react';

function LifecycleModal({ device, onClose, onChange, onSave }) {
  if (!device) return null;

  const lifecycleLabels = {
    back_box: "Back Box Installation",
    face_device: "Face Device Mounting",
    ip_config_status: "IP Configuration",
    pinged: "Device Pinging",
    vyom_detected: "Vyom Detection",
    enrollment_done: "Enrollment Working",
    attendance_tested: "Attendance Logs Verified",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded shadow-lg p-6 w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">Lifecycle Tracker – Device {device.id}</h2>
        <div className="space-y-4">
          {lifecycleSteps.map((step) => (
            <div key={step} className="flex items-center justify-between">
              <label className="capitalize">{step.replace('_', ' ')}</label>
              <select
                className="border px-3 py-1 rounded"
                value={device[step] || ''}
                onChange={(e) => onChange(step, e.target.value)}
              >
                <option value="">Select</option>
                <option value="not_started">Not Started</option>
                <option value="on_progress">On Progress</option>
                <option value="pending">Pending</option>
                <option value="dependencies">Dependencies</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end space-x-4">
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>Cancel</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={onSave}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default LifecycleModal;
