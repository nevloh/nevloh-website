// pages/UnauthorizedPage.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, ArrowLeft, Home, LogOut } from 'lucide-react';

const UnauthorizedPage = () => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem('userRole');
  const userEmail = localStorage.getItem('userEmail');

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full text-center">
        {/* Error Icon */}
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Shield size={40} className="text-red-600" />
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Access Denied</h1>
        <p className="text-gray-600 mb-6">
          You don't have permission to access this page.
        </p>

        {/* User Info */}
        {userEmail && (
          <div className="bg-white rounded-lg p-4 mb-6 text-left">
            <h3 className="font-semibold text-gray-800 mb-2">Current Session:</h3>
            <p className="text-sm text-gray-600">
              <strong>Email:</strong> {userEmail}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Role:</strong> {userRole || 'Unknown'}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleGoBack}
            className="w-full bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
          >
            <ArrowLeft size={20} className="mr-2" />
            Go Back
          </button>

          <Link
            to="/"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <Home size={20} className="mr-2" />
            Go to Homepage
          </Link>

          <button
            onClick={handleLogout}
            className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center"
          >
            <LogOut size={20} className="mr-2" />
            Logout & Login as Different User
          </button>
        </div>

        {/* Help Text */}
        <div className="mt-8 bg-blue-50 rounded-lg p-4">
          <h4 className="font-semibold text-blue-800 mb-2">Need Access?</h4>
          <p className="text-sm text-blue-700">
            Contact your system administrator if you believe you should have access to this page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedPage;