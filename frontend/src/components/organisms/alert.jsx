import React from 'react';

const AlertNotification = ({ type = 'info', message, onClose, show = false }) => {
  if (!show || !message) return null;

  const styles = {
    info: 'bg-blue-100 border-blue-400 text-blue-700',
    success: 'bg-green-100 border-green-400 text-green-700',
    error: 'bg-red-100 border-red-400 text-red-700',
    warning: 'bg-yellow-100 border-yellow-400 text-yellow-700'
  };



  return (
    <div className={`border rounded px-4 py-3 relative mb-6 ${styles[type]}`} role="alert">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span>{message}</span>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-current hover:text-gray-800"
          >
           
          </button>
        )}
      </div>
    </div>
  );
};

export default AlertNotification;