import React from 'react';
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
          <div>
            <div className="text-sm font-medium text-gray-900">{user.fname} {user.mname} {user.lname}</div>
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
          >
            Edit
          </Button>
          
          <Button
            variant="danger"
            size="small"
            onClick={() => onDelete(user.id)}
          >
            Delete
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default UserTableRow;