// lib/auth.js - Next.js Authentication helper functions
import { useRouter } from 'next/router';
import { useState, useEffect, createContext, useContext } from 'react';

// Storage keys constants
const STORAGE_KEYS = {
  IS_AUTHENTICATED: 'isAuthenticated',
  USER_ROLE: 'userRole',
  USER_EMAIL: 'userEmail',
  LOGIN_TIME: 'loginTime',
  REMEMBER_ME: 'rememberMe',
  SESSION_ID: 'sessionId'
};

// User roles constants
export const USER_ROLES = {
  ADMIN: 'admin',
  CUSTOMER: 'customer',
  DRIVER: 'driver',
  MANAGER: 'manager'
};

// Session configuration
const SESSION_CONFIG = {
  DEFAULT_MAX_AGE_HOURS: 24,
  REMEMBER_ME_MAX_AGE_HOURS: 168, // 7 days
  REFRESH_THRESHOLD_MINUTES: 30
};

/**
 * Safe localStorage access (prevents SSR issues)
 * @param {string} key
 * @param {string} defaultValue
 * @returns {string|null}
 */
const safeGetLocalStorage = (key, defaultValue = null) => {
  if (typeof window === 'undefined') return defaultValue;
  try {
    return localStorage.getItem(key) || defaultValue;
  } catch (error) {
    console.warn('localStorage access failed:', error);
    return defaultValue;
  }
};

/**
 * Safe localStorage set
 * @param {string} key
 * @param {string} value
 */
const safeSetLocalStorage = (key, value) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.warn('localStorage write failed:', error);
  }
};

/**
 * Safe localStorage remove
 * @param {string} key
 */
const safeRemoveLocalStorage = (key) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.warn('localStorage remove failed:', error);
  }
};

/**
 * Check if user is authenticated
 * @returns {boolean}
 */
export const isAuthenticated = () => {
  return safeGetLocalStorage(STORAGE_KEYS.IS_AUTHENTICATED) === 'true';
};

/**
 * Get current user role
 * @returns {string|null}
 */
export const getUserRole = () => {
  return safeGetLocalStorage(STORAGE_KEYS.USER_ROLE);
};

/**
 * Get current user email
 * @returns {string|null}
 */
export const getUserEmail = () => {
  return safeGetLocalStorage(STORAGE_KEYS.USER_EMAIL);
};

/**
 * Get login time
 * @returns {string|null}
 */
export const getLoginTime = () => {
  return safeGetLocalStorage(STORAGE_KEYS.LOGIN_TIME);
};

/**
 * Get session ID
 * @returns {string|null}
 */
export const getSessionId = () => {
  return safeGetLocalStorage(STORAGE_KEYS.SESSION_ID);
};

/**
 * Check if remember me is enabled
 * @returns {boolean}
 */
export const isRememberMeEnabled = () => {
  return safeGetLocalStorage(STORAGE_KEYS.REMEMBER_ME) === 'true';
};

/**
 * Get comprehensive user info object
 * @returns {object}
 */
export const getUserInfo = () => {
  return {
    isAuthenticated: isAuthenticated(),
    role: getUserRole(),
    email: getUserEmail(),
    loginTime: getLoginTime(),
    sessionId: getSessionId(),
    rememberMe: isRememberMeEnabled(),
    isSessionExpired: isSessionExpired()
  };
};

/**
 * Check if user has specific role
 * @param {string|string[]} requiredRole - Single role or array of roles
 * @returns {boolean}
 */
export const hasRole = (requiredRole) => {
  const userRole = getUserRole();
  if (!userRole) return false;

  if (Array.isArray(requiredRole)) {
    return requiredRole.includes(userRole);
  }

  return userRole === requiredRole;
};

/**
 * Check if user is admin
 * @returns {boolean}
 */
export const isAdmin = () => {
  return hasRole(USER_ROLES.ADMIN);
};

/**
 * Check if user is customer
 * @returns {boolean}
 */
export const isCustomer = () => {
  return hasRole(USER_ROLES.CUSTOMER);
};

/**
 * Check if user is driver
 * @returns {boolean}
 */
export const isDriver = () => {
  return hasRole(USER_ROLES.DRIVER);
};

/**
 * Check if user is manager
 * @returns {boolean}
 */
export const isManager = () => {
  return hasRole(USER_ROLES.MANAGER);
};

/**
 * Check if user has admin privileges
 * @returns {boolean}
 */
export const hasAdminPrivileges = () => {
  return hasRole([USER_ROLES.ADMIN, USER_ROLES.MANAGER]);
};

/**
 * Generate session ID
 * @returns {string}
 */
const generateSessionId = () => {
  return Math.random().toString(36).substr(2, 16) + Date.now().toString(36);
};

/**
 * Login user with enhanced features
 * @param {string} email
 * @param {string} role
 * @param {boolean} rememberMe
 * @param {object} additionalData
 */
export const loginUser = (email, role, rememberMe = false, additionalData = {}) => {
  const sessionId = generateSessionId();
  const loginTime = new Date().toISOString();

  safeSetLocalStorage(STORAGE_KEYS.IS_AUTHENTICATED, 'true');
  safeSetLocalStorage(STORAGE_KEYS.USER_ROLE, role);
  safeSetLocalStorage(STORAGE_KEYS.USER_EMAIL, email);
  safeSetLocalStorage(STORAGE_KEYS.LOGIN_TIME, loginTime);
  safeSetLocalStorage(STORAGE_KEYS.SESSION_ID, sessionId);
  safeSetLocalStorage(STORAGE_KEYS.REMEMBER_ME, rememberMe.toString());

  // Store additional data if provided
  Object.entries(additionalData).forEach(([key, value]) => {
    safeSetLocalStorage(`user_${key}`, value);
  });

  // Analytics tracking
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'login', {
      event_category: 'Authentication',
      event_label: role,
      custom_parameter_1: email,
      custom_parameter_2: sessionId
    });
  }

  console.log(`User logged in: ${email} as ${role} (Session: ${sessionId})`);
};

/**
 * Logout user with cleanup
 * @param {boolean} redirectToLogin
 */
export const logoutUser = (redirectToLogin = false) => {
  const userEmail = getUserEmail();
  const sessionId = getSessionId();

  // Clear all auth-related storage
  Object.values(STORAGE_KEYS).forEach(key => {
    safeRemoveLocalStorage(key);
  });

  // Clear any additional user data
  if (typeof window !== 'undefined') {
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('user_')) {
        safeRemoveLocalStorage(key);
      }
    });
  }

  // Analytics tracking
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'logout', {
      event_category: 'Authentication',
      event_label: userEmail,
      custom_parameter_1: sessionId
    });
  }

  console.log(`User logged out: ${userEmail}`);

  // Redirect if requested and we're on client side
  if (redirectToLogin && typeof window !== 'undefined') {
    window.location.href = '/login';
  }
};

/**
 * Get dashboard route for user role
 * @param {string} role
 * @returns {string}
 */
export const getDashboardRoute = (role) => {
  const dashboardRoutes = {
    [USER_ROLES.CUSTOMER]: '/customer/dashboard',
    [USER_ROLES.DRIVER]: '/driver/dashboard',
    [USER_ROLES.ADMIN]: '/admin/dashboard',
    [USER_ROLES.MANAGER]: '/admin/dashboard'
  };
  return dashboardRoutes[role] || '/';
};

/**
 * Get allowed routes for user role
 * @param {string} role
 * @returns {string[]}
 */
export const getAllowedRoutes = (role) => {
  const routePermissions = {
    [USER_ROLES.CUSTOMER]: [
      '/customer/dashboard',
      '/customer/orders',
      '/customer/profile',
      '/customer/billing'
    ],
    [USER_ROLES.DRIVER]: [
      '/driver/dashboard',
      '/driver/deliveries',
      '/driver/schedule',
      '/driver/profile'
    ],
    [USER_ROLES.ADMIN]: [
      '/admin/dashboard',
      '/admin/customers',
      '/admin/orders',
      '/admin/drivers',
      '/admin/analytics',
      '/admin/settings'
    ],
    [USER_ROLES.MANAGER]: [
      '/admin/dashboard',
      '/admin/customers',
      '/admin/orders',
      '/admin/analytics'
    ]
  };
  return routePermissions[role] || ['/'];
};

/**
 * Check if user can access route
 * @param {string} route
 * @param {string} userRole
 * @returns {boolean}
 */
export const canAccessRoute = (route, userRole = null) => {
  const role = userRole || getUserRole();
  if (!role) return false;

  const allowedRoutes = getAllowedRoutes(role);
  return allowedRoutes.some(allowedRoute =>
    route.startsWith(allowedRoute) || allowedRoute === '/'
  );
};

/**
 * Check if session is expired
 * @param {number} maxAgeHours - Maximum session age in hours
 * @returns {boolean}
 */
export const isSessionExpired = (maxAgeHours = null) => {
  const loginTime = getLoginTime();
  if (!loginTime) return true;

  const rememberMe = isRememberMeEnabled();
  const maxAge = maxAgeHours ||
    (rememberMe ? SESSION_CONFIG.REMEMBER_ME_MAX_AGE_HOURS : SESSION_CONFIG.DEFAULT_MAX_AGE_HOURS);

  const loginDate = new Date(loginTime);
  const now = new Date();
  const diffHours = (now - loginDate) / (1000 * 60 * 60);

  return diffHours > maxAge;
};

/**
 * Check if session needs refresh
 * @returns {boolean}
 */
export const needsSessionRefresh = () => {
  const loginTime = getLoginTime();
  if (!loginTime) return false;

  const loginDate = new Date(loginTime);
  const now = new Date();
  const diffMinutes = (now - loginDate) / (1000 * 60);

  return diffMinutes > SESSION_CONFIG.REFRESH_THRESHOLD_MINUTES;
};

/**
 * Refresh session
 */
export const refreshSession = () => {
  if (isAuthenticated() && !isSessionExpired()) {
    safeSetLocalStorage(STORAGE_KEYS.LOGIN_TIME, new Date().toISOString());
    console.log('Session refreshed');
  }
};

/**
 * Demo credentials for testing
 */
export const DEMO_CREDENTIALS = {
  [USER_ROLES.ADMIN]: {
    email: 'admin@nevloh.com',
    password: 'admin123',
    role: USER_ROLES.ADMIN,
    name: 'Admin User'
  },
  [USER_ROLES.CUSTOMER]: {
    email: 'customer@nevloh.com',
    password: 'customer123',
    role: USER_ROLES.CUSTOMER,
    name: 'John Customer'
  },
  [USER_ROLES.DRIVER]: {
    email: 'driver@nevloh.com',
    password: 'driver123',
    role: USER_ROLES.DRIVER,
    name: 'Mike Driver'
  },
  [USER_ROLES.MANAGER]: {
    email: 'manager@nevloh.com',
    password: 'manager123',
    role: USER_ROLES.MANAGER,
    name: 'Sarah Manager'
  }
};

/**
 * Validate demo credentials
 * @param {string} email
 * @param {string} password
 * @returns {object|null}
 */
export const validateDemoCredentials = (email, password) => {
  const credential = Object.values(DEMO_CREDENTIALS).find(
    cred => cred.email === email && cred.password === password
  );
  return credential || null;
};

// React Context for Authentication State
const AuthContext = createContext();

/**
 * Authentication Provider Component
 */
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
    loading: true
  });

  useEffect(() => {
    const checkAuth = () => {
      const userInfo = getUserInfo();

      if (userInfo.isAuthenticated && !userInfo.isSessionExpired) {
        setAuthState({
          isAuthenticated: true,
          user: userInfo,
          loading: false
        });

        // Refresh session if needed
        if (needsSessionRefresh()) {
          refreshSession();
        }
      } else {
        setAuthState({
          isAuthenticated: false,
          user: null,
          loading: false
        });

        // Clear expired session
        if (userInfo.isAuthenticated && userInfo.isSessionExpired) {
          logoutUser();
        }
      }
    };

    // Initial check
    checkAuth();

    // Listen for storage changes (logout in other tabs)
    const handleStorageChange = (e) => {
      if (Object.values(STORAGE_KEYS).includes(e.key)) {
        checkAuth();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Check session periodically
    const interval = setInterval(checkAuth, 60000); // Check every minute

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const login = (email, role, rememberMe = false, additionalData = {}) => {
    loginUser(email, role, rememberMe, additionalData);
    const userInfo = getUserInfo();
    setAuthState({
      isAuthenticated: true,
      user: userInfo,
      loading: false
    });
  };

  const logout = (redirectToLogin = false) => {
    logoutUser(redirectToLogin);
    setAuthState({
      isAuthenticated: false,
      user: null,
      loading: false
    });
  };

  return (
    <AuthContext.Provider value={{
      ...authState,
      login,
      logout,
      hasRole,
      canAccessRoute,
      getDashboardRoute
    }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Hook to use authentication context
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

/**
 * Hook for route protection
 */
export const useRouteProtection = (requiredRole = null) => {
  const router = useRouter();
  const { isAuthenticated, user, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        router.replace('/login');
      } else if (requiredRole && !hasRole(requiredRole)) {
        router.replace('/unauthorized');
      }
    }
  }, [isAuthenticated, user, loading, requiredRole, router]);

  return { isAuthenticated, user, loading };
};