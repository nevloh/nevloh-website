// pages/SignupPage.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Users,
  Truck,
  Phone,
  Building2,
  ArrowRight,
  CheckCircle,
  Clock,
  Fuel,
  Settings,
  AlertCircle,
  Home,
  User
} from 'lucide-react';

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'customer',
    companyName: '',
    termsAccepted: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

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
      navigate(dashboardRoutes[userRole] || '/');
    }
  }, [navigate]);

  const roles = [
    {
      id: 'customer',
      name: 'Customer',
      icon: Users,
      description: 'Order fuel and track deliveries',
      color: 'blue',
      features: ['Order Management', 'Delivery Tracking', 'Invoice History', 'Account Settings']
    },
    {
      id: 'driver',
      name: 'Driver',
      icon: Truck,
      description: 'Manage deliveries and routes',
      color: 'green',
      features: ['Route Planning', 'Delivery Updates', 'GPS Navigation', 'Performance Tracking']
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError(''); // Clear error when user types
  };

  const validateForm = () => {
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      setError('Please enter your first and last name.');
      return false;
    }

    if (!formData.email.trim()) {
      setError('Please enter your email address.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return false;
    }

    if (!formData.phone.trim()) {
      setError('Please enter your phone number.');
      return false;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return false;
    }

    if (!formData.termsAccepted) {
      setError('Please accept the terms and conditions.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate signup process
      await new Promise(resolve => setTimeout(resolve, 2000));

      // In a real app, you would send this data to your backend
      const signupData = {
        ...formData,
        createdAt: new Date().toISOString(),
        status: formData.role === 'driver' ? 'pending_approval' : 'active'
      };

      console.log('Account creation data:', signupData);

      // Show success message
      setSuccess('Account created successfully! You can now log in.');

      // Clear form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        role: 'customer',
        companyName: '',
        termsAccepted: false
      });

      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (error) {
      setError('Account creation failed. Please try again.');
      console.error('Signup error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Account Created!</h2>
            <p className="text-gray-600 mb-6">{success}</p>
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-700">
                {formData.role === 'driver'
                  ? 'Driver accounts require approval. You will be contacted within 48 hours.'
                  : 'You will be redirected to the login page shortly.'
                }
              </p>
            </div>
            <Link
              to="/login"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              Go to Login
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Fuel size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Your Account</h1>
          <p className="text-gray-600">Join Nevloh Limited's fuel management platform</p>

          {/* Back to Home Link */}
          <Link
            to="/"
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-500 mt-2"
          >
            <Home size={16} className="mr-1" />
            Back to Website
          </Link>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 mb-6 text-white text-center">
          <div className="flex items-center justify-center mb-2">
            <Settings size={20} className="mr-2" />
            <span className="font-semibold">Fuel Management System</span>
          </div>
          <p className="text-sm opacity-90">Advanced dashboard features coming soon</p>
        </div>

        {/* Role Selection */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Choose Your Account Type</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {roles.map((role) => {
              const IconComponent = role.icon;
              const isSelected = formData.role === role.id;

              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, role: role.id }))}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                    isSelected
                      ? `border-${role.color}-500 bg-${role.color}-50 transform scale-105`
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-3 ${
                      isSelected ? `bg-${role.color}-100` : 'bg-gray-100'
                    }`}>
                      <IconComponent size={24} className={isSelected ? `text-${role.color}-600` : 'text-gray-600'} />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">{role.name}</div>
                      <div className="text-sm text-gray-600">{role.description}</div>
                    </div>
                    {isSelected && (
                      <CheckCircle size={24} className={`text-${role.color}-600 ml-auto`} />
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">Features:</div>
                    {role.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle size={16} className={`mr-2 ${isSelected ? `text-${role.color}-500` : 'text-gray-400'}`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-6">
              <div className="flex items-center">
                <AlertCircle size={18} className="text-red-600 mr-2" />
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800 flex items-center">
                <User size={20} className="mr-2" />
                Personal Information
              </h4>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your first name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your last name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <div className="relative">
                  <Phone size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(876) 123-4567"
                    required
                  />
                </div>
              </div>

              {formData.role === 'customer' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name (Optional)</label>
                  <div className="relative">
                    <Building2 size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Account Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800 flex items-center">
                <Lock size={20} className="mr-2" />
                Account Information
              </h4>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <div className="relative">
                  <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
                <div className="relative">
                  <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Create a password (min 6 chars)"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password *</label>
                <div className="relative">
                  <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {formData.role === 'driver' && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <Clock size={20} className="text-yellow-600 mr-2" />
                    <span className="text-sm font-medium text-yellow-800">Driver Application</span>
                  </div>
                  <p className="text-xs text-yellow-700 mt-1">
                    Driver accounts require approval. You'll be contacted within 48 hours.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="mt-6">
            <label className="flex items-start">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleInputChange}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1"
                required
              />
              <span className="ml-3 text-sm text-gray-600">
                I agree to the{' '}
                <Link to="/terms" className="text-blue-600 hover:text-blue-500">Terms of Service</Link>
                {' '}and{' '}
                <Link to="/privacy" className="text-blue-600 hover:text-blue-500">Privacy Policy</Link>
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading || !formData.termsAccepted}
            className={`w-full mt-6 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
              isLoading || !formData.termsAccepted
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105'
            } text-white`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Creating Account...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <span>Create Account</span>
                <ArrowRight size={20} className="ml-2" />
              </div>
            )}
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:text-blue-500 font-semibold">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;