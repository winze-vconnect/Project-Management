
import React, { useState } from 'react';
import api from '../api/axios';

const ExcelUpload = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await api.post('/excel-upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert(res.data.message);
      if (onUploadSuccess) onUploadSuccess();
    } catch (err) {
      alert('Upload failed. See console.');
      console.error(err);
    }
  };

  return (
    <div className="mb-4 flex items-center gap-4">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button
        onClick={handleUpload}
        className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
      >
        Upload Excel
      </button>
    </div>
  );
};

export default ExcelUpload;
