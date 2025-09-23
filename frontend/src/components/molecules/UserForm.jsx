import React, { useState, useEffect } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const UserForm = ({ 
  user, 
  onSubmit, 
  onCancel, 
  loading = false,
  errors = {} 
}) => {
  const [formData, setFormData] = useState({
    fname: '',
    mname: '',
    lname: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    if (user) {
      setFormData({
        fname: user.fname,
        mname: user.mname,
        lname: user.lname,
        email: user.email,
        phone: user.phone || ''
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="First Name"
        name="fname"
        value={formData.fname}
        onChange={handleChange}
        placeholder="Enter first name"
        required
        error={errors.fname}
      />

      <Input
        label="Middle Name"
        name="mname"
        value={formData.mname}
        onChange={handleChange}
        placeholder="Optional"
        error={errors.mname}

      />

      <Input
        label="Last Name"
        name="lname"
        value={formData.lname}
        onChange={handleChange}
        placeholder="Enter last name"
        required
        error={errors.lname}
      />

      <Input
        label="Email Address"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter email address"
        required
        error={errors.email}
      />

      <Input
        label="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter phone number"
        error={errors.phone}
      />

      <div className="flex space-x-3 pt-4">
        <Button
          type="submit"
          variant="primary"
          loading={loading}
          disabled={loading}
          className="flex-1"
        >
          {user ? 'Update User' : 'Create User'}
        </Button>
        
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={loading}
          className="flex-1"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default UserForm;