import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  User,
  Lock,
  Mail,
  Phone,
  Eye,
  EyeOff,
  Shield,
  Users,
  Truck,
  Building2,
  ArrowRight,
  CheckCircle,
  Clock,
  Fuel,
  Settings,
  BarChart3
} from 'lucide-react';

// Login Page Component
export const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'customer'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const roles = [
    {
      id: 'customer',
      name: 'Customer',
      icon: Users,
      description: 'Access your fuel orders and delivery tracking',
      color: 'blue'
    },
    {
      id: 'driver',
      name: 'Driver',
      icon: Truck,
      description: 'Manage deliveries and route assignments',
      color: 'green'
    },
    {
      id: 'admin',
      name: 'Admin',
      icon: Shield,
      description: 'Full system access and management',
      color: 'purple'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Redirect based on role
    const dashboardRoutes = {
      customer: '/customer-dashboard',
      driver: '/driver-dashboard',
      admin: '/admin-dashboard'
    };

    console.log(`Redirecting to ${dashboardRoutes[formData.role]}`);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Fuel size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your Nevloh Limited account</p>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 mb-6 text-white text-center">
          <div className="flex items-center justify-center mb-2">
            <Settings size={20} className="mr-2" />
            <span className="font-semibold">Fuel Management System</span>
          </div>
          <p className="text-sm opacity-90">Coming Soon - Enhanced dashboard experience</p>
        </div>

        {/* Role Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Select Your Role
          </label>
          <div className="grid grid-cols-1 gap-3">
            {roles.map((role) => {
              const IconComponent = role.icon;
              const isSelected = formData.role === role.id;

              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, role: role.id }))}
                  className={`flex items-center p-4 rounded-xl border-2 transition-all duration-300 ${
                    isSelected
                      ? `border-${role.color}-500 bg-${role.color}-50`
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                    isSelected ? `bg-${role.color}-100` : 'bg-gray-100'
                  }`}>
                    <IconComponent size={20} className={isSelected ? `text-${role.color}-600` : 'text-gray-600'} />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-800">{role.name}</div>
                    <div className="text-xs text-gray-600">{role.description}</div>
                  </div>
                  {isSelected && (
                    <CheckCircle size={20} className={`text-${role.color}-600 ml-auto`} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
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

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your password"
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

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
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
              } text-white`}
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

        {/* Sign Up Link */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:text-blue-500 font-semibold">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

// Signup Page Component
export const SignupPage = () => {
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (!formData.termsAccepted) {
      alert('Please accept the terms and conditions');
      return;
    }

    setIsLoading(true);

    // Simulate signup process
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Account created:', formData);
    setIsLoading(false);
  };

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
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 mb-6 text-white text-center">
          <div className="flex items-center justify-center mb-2">
            <Settings size={20} className="mr-2" />
            <span className="font-semibold">Fuel Management System</span>
          </div>
          <p className="text-sm opacity-90">Coming Soon - Advanced dashboard features</p>
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
          <div className="grid md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800">Personal Information</h4>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
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
              <h4 className="text-lg font-semibold text-gray-800">Account Information</h4>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Create a password"
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
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