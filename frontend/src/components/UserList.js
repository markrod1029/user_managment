import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserItem from './UserItem';
import UserForm from './UserForm';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const editUser = (user) => {
    setEditingUser(user);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setEditingUser(null);
    setShowForm(false);
    fetchUsers();
  };

  return (
    <div className="user-management">
      <h1>User Management</h1>
      <button onClick={() => setShowForm(true)} className="btn btn-primary">
        Add New User
      </button>

      {showForm && (
        <UserForm 
          user={editingUser} 
          onClose={handleFormClose} 
          onSave={handleFormClose}
        />
      )}

      <div className="user-list">
        <h2>Users</h2>
        {users.length === 0 ? (
          <p>No users found</p>
        ) : (
          users.map(user => (
            <UserItem 
              key={user.id} 
              user={user} 
              onEdit={editUser} 
              onDelete={deleteUser} 
            />
          ))
        )}
      </div>
    </div>
  );
};

export default UserList;