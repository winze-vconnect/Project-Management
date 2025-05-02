// // src/components/RemarksPanel.jsx
// import React, { useState } from 'react';

// const RemarksPanel = () => {
//   const [remarks, setRemarks] = useState('');
//   const [comment, setComment] = useState('');
//   const [comments, setComments] = useState([
//     {
//       user: 'Amit K.',
//       time: 'Apr 30, 10:45 AM',
//       text: 'POE not available at location. Requested change to power adapter.'
//     },
//     {
//       user: 'Divya G.',
//       time: 'Apr 30, 11:20 AM',
//       text: 'Customer approved adapter use. Proceeding with rework.'
//     }
//   ]);

//   const historyLogs = [
//     {
//       user: 'Ramesh S.',
//       action: 'updated status to',
//       status: 'Completed',
//       time: 'Apr 30, 9:15 AM'
//     },
//     {
//       user: 'Divya G.',
//       action: 'posted internal comment',
//       time: 'Apr 30, 11:20 AM'
//     },
//     {
//       user: 'Amit K.',
//       action: 'uploaded device photo',
//       time: 'Apr 30, 12:00 PM'
//     }
//   ];

//   const handlePostComment = () => {
//     if (!comment.trim()) return;
//     const newComment = {
//       user: 'Current User',
//       time: new Date().toLocaleString(),
//       text: comment
//     };
//     setComments([newComment, ...comments]);
//     setComment('');
//   };

//   return (
//     <div className="p-4 bg-white rounded-xl shadow border mt-4">
//       {/* Remarks Section */}
//       <div>
//         <label className="block font-semibold text-gray-700 mb-1">Remarks</label>
//         <textarea
//           rows={3}
//           value={remarks}
//           onChange={(e) => setRemarks(e.target.value)}
//           className="w-full border rounded px-3 py-2"
//           placeholder="e.g. Loose cable, Power fluctuation..."
//         />
//       </div>

//       {/* Internal Comment Thread */}
//       <div className="mt-6">
//         <label className="block font-semibold text-gray-700 mb-1">Internal Comments</label>
//         <div className="space-y-3 bg-gray-50 p-3 rounded border">
//           {comments.map((c, idx) => (
//             <div key={idx} className="text-sm">
//               <span className="font-bold text-blue-700">{c.user}</span>{' '}
//               <span className="text-gray-500">– {c.time}</span>
//               <div>{c.text}</div>
//             </div>
//           ))}
//         </div>

//         <textarea
//           rows={2}
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//           className="mt-2 w-full border rounded px-3 py-2"
//           placeholder="Add a comment..."
//         />
//         <button
//           onClick={handlePostComment}
//           className="mt-2 px-4 py-1 bg-orange-500 text-white rounded hover:bg-orange-600"
//         >
//           Post Comment
//         </button>
//       </div>

//       {/* History Section */}
//       <div className="mt-6">
//         <label className="block font-semibold text-gray-700 mb-1">Activity History</label>
//         <ul className="border-l-2 border-blue-500 pl-4 space-y-2 text-sm text-gray-600">
//           {historyLogs.map((log, idx) => (
//             <li key={idx}>
//               <span className="text-blue-700 font-medium">{log.user}</span> {log.action}{' '}
//               {log.status && <span className="font-semibold text-green-600">{log.status}</span>} – {log.time}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default RemarksPanel;

// src/components/RemarksAndComments.jsx
import React, { useState, useEffect } from 'react';

const RemarksAndComments = ({
  entityId = '',
  entityType = '',
  initialRemarks = '',
  initialComments = [],
  onPostComment = () => {},
  onRemarksChange = () => {},
  contextTitle = 'Remarks & Internal Comments',
  readOnly = false,
  hideHistory = false
}) => {
  const [remarks, setRemarks] = useState(initialRemarks);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(initialComments);

  useEffect(() => {
    setRemarks(initialRemarks);
    setComments(initialComments);
  }, [initialRemarks, initialComments]);

  const handlePostComment = () => {
    if (!comment.trim()) return;
    const newComment = {
      user: 'Current User',
      time: new Date().toLocaleString(),
      text: comment
    };
    setComments([newComment, ...comments]);
    setComment('');
    onPostComment(newComment);
  };

  const handleRemarksChange = (e) => {
    setRemarks(e.target.value);
    onRemarksChange(e.target.value);
  };

  const historyLogs = [
    {
      user: 'System',
      action: 'created',
      time: 'Apr 30, 9:00 AM'
    },
    {
      user: 'Engineer A',
      action: 'added remark',
      time: 'Apr 30, 10:10 AM'
    },
    {
      user: 'Engineer B',
      action: 'posted comment',
      time: 'Apr 30, 11:15 AM'
    }
  ];

  return (
    <div className="mt-6 p-4 bg-white rounded-xl shadow border">
      <h2 className="text-lg font-semibold text-blue-700 mb-4">{contextTitle}</h2>

      {/* Remarks Section */}
      <div>
        <label className="block font-semibold text-gray-700 mb-1">Remarks</label>
        <textarea
          rows={3}
          value={remarks}
          onChange={handleRemarksChange}
          disabled={readOnly}
          className="w-full border rounded px-3 py-2"
          placeholder="Root cause, technician note, etc."
        />
      </div>

      {/* Internal Comments */}
      <div className="mt-6">
        <label className="block font-semibold text-gray-700 mb-1">Internal Comments</label>
        <div className="space-y-3 bg-gray-50 p-3 rounded border">
          {comments.map((c, idx) => (
            <div key={idx} className="text-sm">
              <span className="font-bold text-blue-700">{c.user}</span>{' '}
              <span className="text-gray-500">– {c.time}</span>
              <div>{c.text}</div>
            </div>
          ))}
        </div>

        {!readOnly && (
          <>
            <textarea
              rows={2}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="mt-2 w-full border rounded px-3 py-2"
              placeholder="Add a comment..."
            />
            <button
              onClick={handlePostComment}
              className="mt-2 px-4 py-1 bg-orange-500 text-white rounded hover:bg-orange-600"
            >
              Post Comment
            </button>
          </>
        )}
      </div>

      {/* Activity History */}
      {!hideHistory && (
        <div className="mt-6">
          <label className="block font-semibold text-gray-700 mb-1">Activity History</label>
          <ul className="border-l-2 border-blue-500 pl-4 space-y-2 text-sm text-gray-600">
            {historyLogs.map((log, idx) => (
              <li key={idx}>
                <span className="text-blue-700 font-medium">{log.user}</span> {log.action} – {log.time}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RemarksAndComments;

