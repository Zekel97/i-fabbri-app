import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useJwt } from "react-jwt";


const PrivateRoute = () => {
  const { isExpired } = useJwt(localStorage.getItem('i-fabbri-jwt'));
    return !isExpired ? <Outlet /> : <Navigate to="/login" />;
  };

export default PrivateRoute;