// src/components/pages/UserManagementPage.jsx
import React, { useState, useEffect } from 'react';

import UserManagementHeader from '../components/organisms/UserManagementHeader';
import UserTable from '../components/organisms/UserTable';
import Modal from '../components/atoms/Modal';
import UserForm from '../components/molecules/UserForm';
import Alert from '../components/atoms/Alert';
import userService from '../services/userService';

const UserManagementPage = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await userService.getUsers();
      setUsers(response.data);
      setError('');
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Failed to fetch users. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = () => {
    setEditingUser(null);
    setShowFormModal(true);
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setShowFormModal(true);
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await userService.deleteUser(id);
        setSuccess('User deleted successfully!');
        setTimeout(() => setSuccess(''), 3000);
        fetchUsers();
      } catch (error) {
        console.error('Error deleting user:', error);
        setError('Failed to delete user. Please try again.');
      }
    }
  };

  const handleFormSubmit = async (formData) => {
    try {
      setFormLoading(true);
      if (editingUser) {
        await userService.updateUser(editingUser.id, formData);
        setSuccess('User updated successfully!');
      } else {
        await userService.createUser(formData);
        setSuccess('User created successfully!');
      }
      setTimeout(() => setSuccess(''), 3000);
      setShowFormModal(false);
      fetchUsers();
    } catch (error) {
      console.error('Error saving user:', error);
      setError('Failed to save user. Please try again.');
    } finally {
      setFormLoading(false);
    }
  };

  const handleFormCancel = () => {
    setShowFormModal(false);
    setEditingUser(null);
  };

  const clearError = () => setError('');
  const clearSuccess = () => setSuccess('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {error && (
          <div className="mb-6">
            <Alert type="error" message={error} onClose={clearError} />
          </div>
        )}

        {success && (
          <div className="mb-6">
            <Alert type="success" message={success} onClose={clearSuccess} />
          </div>
        )}

        <UserManagementHeader
          userCount={users.length}
          onAddUser={handleAddUser}
        />

        <UserTable
          users={users}
          onEdit={handleEditUser}
          onDelete={handleDeleteUser}
          loading={loading}
        />

        <Modal
          isOpen={showFormModal}
          onClose={handleFormCancel}
          title={editingUser ? 'Edit User' : 'Create New User'}
          size="medium"
        >
          <UserForm
            user={editingUser}
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
            loading={formLoading}
          />
        </Modal>
      </div>
    </div>
  );
};

export default UserManagementPage;