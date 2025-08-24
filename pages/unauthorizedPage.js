// pages/unauthorized.js or app/unauthorized/page.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Shield, ArrowLeft, Home, LogOut } from 'lucide-react';

const UnauthorizedPage = () => {
  const router = useRouter();
  const [userRole, setUserRole] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [isClient, setIsClient] = useState(false);

  // Handle client-side mounting to avoid hydration issues
  useEffect(() => {
    setIsClient(true);

    // Only access localStorage on client side
    if (typeof window !== 'undefined') {
      setUserRole(localStorage.getItem('userRole'));
      setUserEmail(localStorage.getItem('userEmail'));
    }
  }, []);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('userRole');
      localStorage.removeItem('userEmail');
      router.push('/login');
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  const handleHomeRedirect = () => {
    router.push('/');
  };

  // Don't render localStorage-dependent content until client-side
  if (!isClient) {
    return (
      <>
        <Head>
          <title>Access Denied | Nevloh Limited</title>
          <meta name="description" content="Access denied - insufficient permissions to view this page." />
          <meta name="robots" content="noindex, nofollow" />
        </Head>

        <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center py-12 px-4">
          <div className="max-w-md w-full text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield size={40} className="text-red-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Loading...</h1>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Access Denied | Nevloh Limited - Unauthorized Access</title>
        <meta
          name="description"
          content="Access denied - You don't have permission to access this page. Contact system administrator for assistance."
        />
        <meta name="keywords" content="access denied, unauthorized, permission, login required" />

        {/* Prevent indexing of error pages */}
        <meta name="robots" content="noindex, nofollow" />

        {/* Open Graph */}
        <meta property="og:title" content="Access Denied | Nevloh Limited" />
        <meta property="og:description" content="Unauthorized access - insufficient permissions to view this page." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nevloh.com/unauthorized" />
        <meta property="og:site_name" content="Nevloh Limited" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Access Denied | Nevloh Limited" />
        <meta name="twitter:description" content="Unauthorized access - insufficient permissions." />

        {/* Canonical */}
        <link rel="canonical" href="https://nevloh.com/unauthorized" />

        {/* Additional security headers via meta tags */}
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </Head>

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

          {/* User Info - Only show if user data exists */}
          {userEmail && (
            <div className="bg-white rounded-lg p-4 mb-6 text-left shadow-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Current Session:</h3>
              <p className="text-sm text-gray-600 mb-1">
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
              className="w-full bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              aria-label="Go back to previous page"
            >
              <ArrowLeft size={20} className="mr-2" />
              Go Back
            </button>

            <button
              onClick={handleHomeRedirect}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Go to homepage"
            >
              <Home size={20} className="mr-2" />
              Go to Homepage
            </button>

            <button
              onClick={handleLogout}
              className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              aria-label="Logout and login as different user"
            >
              <LogOut size={20} className="mr-2" />
              Logout & Login as Different User
            </button>
          </div>

          {/* Help Text */}
          <div className="mt-8 bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">Need Access?</h4>
            <p className="text-sm text-blue-700 mb-3">
              Contact your system administrator if you believe you should have access to this page.
            </p>

            {/* Contact Information */}
            <div className="text-xs text-blue-600">
              <p>Email: admin@nevloh.com</p>
              <p>Phone: +1-876-XXX-XXXX</p>
            </div>
          </div>

          {/* Additional Security Notice */}
          <div className="mt-6 text-xs text-gray-500">
            <p>This access attempt has been logged for security purposes.</p>
          </div>
        </div>
      </div>
    </>
  );
};

// Optional: Add static props if needed (for pages directory)
export async function getStaticProps() {
  return {
    props: {
      // You can add any static props here if needed
    },
    // Don't revalidate frequently for error pages
    revalidate: false
  };
}

export default UnauthorizedPage;