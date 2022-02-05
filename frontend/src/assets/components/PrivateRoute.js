import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useJwt } from "react-jwt";

const localToken = localStorage.getItem('i-fabbri-jwt');

const PrivateRoute = () => {
  const { isExpired } = useJwt(localToken);

    return !isExpired ? <Outlet /> : <Navigate to="/login" />;
  };

export default PrivateRoute;