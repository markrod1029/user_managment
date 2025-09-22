// src/components/molecules/UserTableRow.jsx
import React from 'react';
import Avatar from '../atoms/Avatar';
import Button from '../atoms/Button';

const UserTableRow = ({ 
  user, 
  onEdit, 
  onDelete, 
  index 
}) => {
  return (
    <tr className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <Avatar name={user.name} size="medium" className="mr-4" />
          <div>
            <div className="text-sm font-medium text-gray-900">{user.name}</div>
            <div className="text-sm text-gray-500">ID: {user.id}</div>
          </div>
        </div>
      </td>
      
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{user.email}</div>
        <div className="text-sm text-gray-500">{user.phone || 'No phone'}</div>
      </td>
      
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {new Date(user.created_at).toLocaleDateString()}
      </td>
      
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <div className="flex justify-end space-x-2">
          <Button
            variant="secondary"
            size="small"
            onClick={() => onEdit(user)}
            className="bg-indigo-50 hover:bg-indigo-100 text-indigo-600 hover:text-indigo-900"
          >
            Edit
          </Button>
          
          <Button
            variant="danger"
            size="small"
            onClick={() => onDelete(user.id)}
            className="bg-red-50 hover:bg-red-100 hover:text-red-900"
          >
            Delete
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default UserTableRow;