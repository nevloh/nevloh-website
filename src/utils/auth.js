// utils/auth.js - Authentication helper functions

/**
 * Check if user is authenticated
 * @returns {boolean}
 */
export const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true';
};

/**
 * Get current user role
 * @returns {string|null}
 */
export const getUserRole = () => {
  return localStorage.getItem('userRole');
};

/**
 * Get current user email
 * @returns {string|null}
 */
export const getUserEmail = () => {
  return localStorage.getItem('userEmail');
};

/**
 * Get login time
 * @returns {string|null}
 */
export const getLoginTime = () => {
  return localStorage.getItem('loginTime');
};

/**
 * Get user info object
 * @returns {object}
 */
export const getUserInfo = () => {
  return {
    isAuthenticated: isAuthenticated(),
    role: getUserRole(),
    email: getUserEmail(),
    loginTime: getLoginTime()
  };
};

/**
 * Check if user has specific role
 * @param {string} requiredRole
 * @returns {boolean}
 */
export const hasRole = (requiredRole) => {
  return getUserRole() === requiredRole;
};

/**
 * Check if user is admin
 * @returns {boolean}
 */
export const isAdmin = () => {
  return hasRole('admin');
};

/**
 * Check if user is customer
 * @returns {boolean}
 */
export const isCustomer = () => {
  return hasRole('customer');
};

/**
 * Check if user is driver
 * @returns {boolean}
 */
export const isDriver = () => {
  return hasRole('driver');
};

/**
 * Login user
 * @param {string} email
 * @param {string} role
 */
export const loginUser = (email, role) => {
  localStorage.setItem('isAuthenticated', 'true');
  localStorage.setItem('userRole', role);
  localStorage.setItem('userEmail', email);
  localStorage.setItem('loginTime', new Date().toISOString());
};

/**
 * Logout user
 */
export const logoutUser = () => {
  localStorage.removeItem('isAuthenticated');
  localStorage.removeItem('userRole');
  localStorage.removeItem('userEmail');
  localStorage.removeItem('loginTime');
};

/**
 * Get dashboard route for user role
 * @param {string} role
 * @returns {string}
 */
export const getDashboardRoute = (role) => {
  const dashboardRoutes = {
    customer: '/customer-portal',
    driver: '/driver-dashboard',
    admin: '/admin-dashboard'
  };
  return dashboardRoutes[role] || '/';
};

/**
 * Check if session is expired (optional - for future use)
 * @param {number} maxAgeHours - Maximum session age in hours
 * @returns {boolean}
 */
export const isSessionExpired = (maxAgeHours = 24) => {
  const loginTime = getLoginTime();
  if (!loginTime) return true;

  const loginDate = new Date(loginTime);
  const now = new Date();
  const diffHours = (now - loginDate) / (1000 * 60 * 60);

  return diffHours > maxAgeHours;
};

/**
 * Demo credentials for testing
 */
export const DEMO_CREDENTIALS = {
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