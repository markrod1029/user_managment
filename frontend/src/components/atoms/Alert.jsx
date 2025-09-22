// src/components/atoms/Alert.jsx
import React from 'react';

const Alert = ({ 
  type = 'info', 
  message, 
  onClose, 
  className = '' 
}) => {
  const styles = {
    info: 'bg-blue-100 border-blue-400 text-blue-700',
    success: 'bg-green-100 border-green-400 text-green-700',
    warning: 'bg-yellow-100 border-yellow-400 text-yellow-700',
    error: 'bg-red-100 border-red-400 text-red-700'
  };

  const icons = {
    info: 'ℹ️',
    success: '✅',
    warning: '⚠️',
    error: '❌'
  };

  return (
    <div className={`border rounded px-4 py-3 relative ${styles[type]} ${className}`} role="alert">
      <div className="flex items-center">
        <span className="mr-2">{icons[type]}</span>
        <span className="block sm:inline">{message}</span>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-0 right-0 px-4 py-3"
        >
          <span className="text-current">×</span>
        </button>
      )}
    </div>
  );
};

export default Alert;