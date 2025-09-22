import api from '../api';

// Get all users
export const getUsers = () => {
  return api.get('/api/users');
};

// Get single user by ID
export const getUser = (id) => {
  return api.get(`/api/users/${id}`);
};

// Create a new user
export const createUser = (userData) => {
  return api.post('/api/users', userData);
};

// Update an existing user
export const updateUser = (id, userData) => {
  return api.put(`/api/users/${id}`, userData);
};

// Delete a user
export const deleteUser = (id) => {
  return api.delete(`/api/users/${id}`);
};

export default {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};