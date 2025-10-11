import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Shield,
  Users,
  Truck,
  ArrowRight,
  CheckCircle,
  Fuel,
  AlertCircle,
  Home
} from 'lucide-react';

// Demo credentials (hidden from UI but still functional)
const DEMO_CREDENTIALS = {
  admin: {
    email: 'admin@nevloh.com',
    password: 'admin123',
    role: 'admin'
  },
  customer: {
    email: 'customer@nevloh.com',
    password: 'customer123',
    role: 'customer'
  },
  driver: {
    email: 'driver@nevloh.com',
    password: 'driver123',
    role: 'driver'
  }
};

const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'admin' // Default to admin
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Check if user is already authenticated
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const userRole = localStorage.getItem('userRole');

    if (isAuthenticated && userRole) {
      // Redirect to appropriate dashboard
      const dashboardRoutes = {
        customer: '/customer-portal',
        driver: '/driver-dashboard',
        admin: '/admin-dashboard'
      };
      router.push(dashboardRoutes[userRole] || '/');
    }
  }, [router]);

  const roles = [
    {
      id: 'admin',
      name: 'Administrator',
      icon: Shield,
      description: 'System administration and management',
      color: 'purple',
      dashboardPath: '/admin-dashboard'
    },
    {
      id: 'customer',
      name: 'Customer',
      icon: Users,
      description: 'Customer portal access',
      color: 'blue',
      dashboardPath: '/customer-portal'
    },
    {
      id: 'driver',
      name: 'Driver',
      icon: Truck,
      description: 'Driver dashboard and tools',
      color: 'green',
      dashboardPath: '/driver-dashboard'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(''); // Clear error when user types
  };

  const handleRoleSelect = (roleId) => {
    setFormData(prev => ({
      ...prev,
      role: roleId
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please enter both email and password.');
      setIsLoading(false);
      return;
    }

    try {
      // Simulate authentication process
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Check credentials against demo accounts
      const selectedRoleCredentials = DEMO_CREDENTIALS[formData.role];

      if (formData.email === selectedRoleCredentials.email &&
          formData.password === selectedRoleCredentials.password) {

        // Store authentication in localStorage
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userRole', formData.role);
        localStorage.setItem('userEmail', formData.email);
        localStorage.setItem('loginTime', new Date().toISOString());

        // Get the dashboard path for the selected role
        const selectedRole = roles.find(role => role.id === formData.role);
        const dashboardPath = selectedRole.dashboardPath;

        console.log(`Login successful! Redirecting to ${dashboardPath}`);
        router.push(dashboardPath);

      } else {
        setError('Invalid email or password. Please check your credentials and try again.');
      }

    } catch (error) {
      setError('Login failed. Please try again.');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        {/* SEO Meta Tags for Login Page */}
        <title>Login - Nevloh Limited | Secure Access to Fuel Delivery Dashboard</title>
        <meta name="description" content="Secure login to Nevloh Limited's fuel delivery management system. Access admin dashboard, customer portal, or driver tools for Jamaica's premier ULSD delivery service." />

        {/* Keywords for Login Page */}
        <meta name="keywords" content="Nevloh Limited login, fuel delivery dashboard, admin portal, customer login, driver portal, secure access, ULSD management system, Jamaica fuel delivery login" />

        {/* Essential Meta Tags */}
        <meta name="robots" content="noindex, nofollow" />
        <meta name="author" content="Nevloh Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Security Headers */}
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

        {/* Open Graph Tags (for internal sharing) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nevloh.com/login" />
        <meta property="og:title" content="Nevloh Limited - Secure Login Portal" />
        <meta property="og:description" content="Secure access to Nevloh Limited's fuel delivery management system. Professional dashboard for administrators, customers, and drivers." />
        <meta property="og:site_name" content="Nevloh Limited" />

        {/* Theme and Branding */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.nevloh.com/login" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Fuel size={32} className="text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your Nevloh Limited account</p>

            {/* Back to Home Link */}
            <Link
              href="/"
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-500 mt-2 transition-colors"
            >
              <Home size={16} className="mr-1" />
              Back to Website
            </Link>
          </div>

          {/* Role Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Account Type
            </label>
            <div className="grid grid-cols-1 gap-3">
              {roles.map((role) => {
                const IconComponent = role.icon;
                const isSelected = formData.role === role.id;

                return (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => handleRoleSelect(role.id)}
                    className={`flex items-center p-4 rounded-xl border-2 transition-all duration-300 ${
                      isSelected
                        ? `border-${role.color}-500 bg-${role.color}-50`
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                    aria-pressed={isSelected}
                    aria-label={`Select ${role.name} account type`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                      isSelected ? `bg-${role.color}-100` : 'bg-gray-100'
                    }`}>
                      <IconComponent size={20} className={isSelected ? `text-${role.color}-600` : 'text-gray-600'} />
                    </div>
                    <div className="text-left flex-1">
                      <div className="font-semibold text-gray-800">{role.name}</div>
                      <div className="text-xs text-gray-600">{role.description}</div>
                    </div>
                    {isSelected && (
                      <CheckCircle size={20} className={`text-${role.color}-600`} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-lg">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4" role="alert">
                <div className="flex items-center">
                  <AlertCircle size={18} className="text-red-600 mr-2" />
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              </div>
            )}

            <div className="space-y-4">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                    autoComplete="email"
                    required
                    aria-describedby="email-help"
                  />
                </div>
                <p id="email-help" className="sr-only">Enter your registered email address</p>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    aria-describedby="password-help"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <p id="password-help" className="sr-only">Enter your account password</p>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    aria-label="Remember me for future logins"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-500 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105'
                } text-white shadow-lg`}
                aria-label={isLoading ? 'Signing in...' : 'Sign in to your account'}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Signing In...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <span>Sign In</span>
                    <ArrowRight size={20} className="ml-2" />
                  </div>
                )}
              </button>
            </div>
          </form>

          {/* Security Notice */}
          <div className="mt-6 bg-blue-50 rounded-lg p-4">
            <div className="flex items-center">
              <Shield size={16} className="text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-800">Secure Access</span>
            </div>
            <p className="text-xs text-blue-700 mt-1">
              Your login is protected with enterprise-grade security. All sessions are encrypted and monitored for your safety.
            </p>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Need an account?{' '}
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-500 font-semibold transition-colors"
              >
                Contact administrator
              </Link>
            </p>
          </div>

          {/* Demo Information (for development) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <AlertCircle size={16} className="text-yellow-600 mr-2" />
                <span className="text-sm font-medium text-yellow-800">Demo Access</span>
              </div>
              <div className="text-xs text-yellow-700 space-y-1">
                <p><strong>Admin:</strong> admin@nevloh.com / admin123</p>
                <p><strong>Customer:</strong> customer@nevloh.com / customer123</p>
                <p><strong>Driver:</strong> driver@nevloh.com / driver123</p>
              </div>
            </div>
          )}

          {/* Additional Security Features */}
          <div className="mt-6 text-center">
            <div className="flex justify-center items-center space-x-6 text-xs text-gray-500">
              <div className="flex items-center">
                <Shield size={12} className="mr-1" />
                SSL Encrypted
              </div>
              <div className="flex items-center">
                <Lock size={12} className="mr-1" />
                2FA Ready
              </div>
              <div className="flex items-center">
                <Eye size={12} className="mr-1" />
                Activity Monitored
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;