// components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredRole = null }) => {
  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const userRole = localStorage.getItem('userRole');
  const userEmail = localStorage.getItem('userEmail');

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If specific role is required and user doesn't have it, redirect to unauthorized
  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Log access for debugging
  console.log(`Access granted to ${userEmail} with role ${userRole}`);

  // Render the protected component
  return children;
};

export default ProtectedRoute;