// src/components/atoms/Avatar.jsx
import React from 'react';

const Avatar = ({ 
  name, 
  size = 'medium', 
  className = '',
  showTooltip = false 
}) => {
  const getInitials = (fullName) => {
    return fullName
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const sizes = {
    small: 'w-8 h-8 text-xs',
    medium: 'w-10 h-10 text-sm',
    large: 'w-12 h-12 text-base',
    xlarge: 'w-16 h-16 text-lg'
  };

  const colors = [
    'bg-gradient-to-r from-blue-500 to-purple-600',
    'bg-gradient-to-r from-green-500 to-teal-600',
    'bg-gradient-to-r from-red-500 to-pink-600',
    'bg-gradient-to-r from-yellow-500 to-orange-600',
    'bg-gradient-to-r from-indigo-500 to-purple-600'
  ];

  const colorIndex = name.length % colors.length;
  const bgColor = colors[colorIndex];

  return (
    <div className={`relative inline-flex items-center justify-center rounded-full ${sizes[size]} ${bgColor} text-white font-medium ${className}`}>
      {getInitials(name)}
      {showTooltip && (
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
      )}
    </div>
  );
};

export default Avatar;