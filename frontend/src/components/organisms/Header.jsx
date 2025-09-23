import React from 'react';
import Button from '../atoms/Button';

const Header = ({ 
  userCount, 
  onAddUser,
  title = "User Management ",
  subtitle = "Manage your users efficiently and effectively"
}) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">{title}</h1>
      <p className="text-gray-600 mb-6">{subtitle}</p>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-2xl font-semibold text-gray-800">Users</h2>
            <p className="text-gray-600">Total: {userCount} users</p>
          </div>
          <Button
            onClick={onAddUser}
            variant="primary"
            size="large"
            className="flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add New User
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;