import React from 'react';
import { Routes, Route } from 'react-router-dom';

import UserManagement from '../pages/UserManagement';
import NotFound from '../pages/NotFound';

export const routes = [
  {
    path: '/',
    component: UserManagement,
    exact: true,
    name: 'Home'
  },
  {
    path: '/users',
    component: UserManagement,
    exact: true,
    name: 'User Management'
  },
  
];

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<route.component />}
          exact={route.exact}
        />
      ))}
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;