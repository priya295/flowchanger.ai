import React from 'react';
import { Navigate, Outlet} from 'react-router-dom';
import { useAuthContext } from './Context/AuthContext';

const ProtectedRoute = () => {
  let { isAuthenticated } =useAuthContext();
    isAuthenticated = true;
  
  return isAuthenticated ? <Outlet /> : <Navigate to="/authentication/login" />;
};

export default ProtectedRoute;
