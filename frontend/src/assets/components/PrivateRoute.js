import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


// TODO: function to get token from cookie with time
const isAuthenticated = true;

const PrivateRoute = () => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  };

export default PrivateRoute;