// components/ProtectedRoute.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Shield, Loader2 } from 'lucide-react';

const ProtectedRoute = ({
  children,
  requiredRole = null,
  redirectTo = '/login',
  unauthorizedRedirect = '/unauthorized',
  loadingComponent = null
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const checkAuthentication = () => {
      // Only run on client side
      if (typeof window === 'undefined') {
        return;
      }

      try {
        const authStatus = localStorage.getItem('isAuthenticated') === 'true';
        const role = localStorage.getItem('userRole');
        const email = localStorage.getItem('userEmail');

        setIsAuthenticated(authStatus);
        setUserRole(role);
        setUserEmail(email);

        // Authentication checks
        if (!authStatus) {
          console.log('User not authenticated, redirecting to login');
          router.replace(redirectTo);
          return;
        }

        // Role-based access control
        if (requiredRole && role !== requiredRole) {
          console.log(`Access denied. Required role: ${requiredRole}, User role: ${role}`);
          router.replace(unauthorizedRedirect);
          return;
        }

        // Log successful access
        console.log(`Access granted to ${email} with role ${role} for route: ${router.pathname}`);

        // Analytics tracking for protected route access
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'protected_route_access', {
            event_category: 'Authentication',
            event_label: `${router.pathname} - ${role}`,
            custom_parameter_1: email,
            custom_parameter_2: role
          });
        }

      } catch (error) {
        console.error('Error checking authentication:', error);
        // On error, redirect to login
        router.replace(redirectTo);
      } finally {
        setIsLoading(false);
      }
    };

    // Initial authentication check
    checkAuthentication();

    // Listen for storage changes (e.g., logout in another tab)
    const handleStorageChange = (e) => {
      if (e.key === 'isAuthenticated' || e.key === 'userRole') {
        checkAuthentication();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Cleanup
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [router, requiredRole, redirectTo, unauthorizedRedirect]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <>
        <Head>
          <title>Loading... | Nevloh Limited</title>
          <meta name="robots" content="noindex, nofollow" />
        </Head>

        {loadingComponent || (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Loader2 size={32} className="text-blue-600 animate-spin" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Verifying Access...
              </h2>
              <p className="text-gray-600">
                Please wait while we check your permissions
              </p>
            </div>
          </div>
        )}
      </>
    );
  }

  // If we reach here, authentication and authorization passed
  return (
    <>
      {/* Add security headers for protected content */}
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </Head>

      {children}
    </>
  );
};

// Higher Order Component pattern for easier usage
export const withProtectedRoute = (WrappedComponent, options = {}) => {
  const ProtectedComponent = (props) => {
    return (
      <ProtectedRoute {...options}>
        <WrappedComponent {...props} />
      </ProtectedRoute>
    );
  };

  // Set display name for debugging
  ProtectedComponent.displayName = `withProtectedRoute(${WrappedComponent.displayName || WrappedComponent.name})`;

  return ProtectedComponent;
};

// Hook for accessing auth state in protected components
export const useAuth = () => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    userRole: null,
    userEmail: null,
    isLoading: true
  });

  useEffect(() => {
    const updateAuthState = () => {
      if (typeof window === 'undefined') return;

      try {
        const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
        const userRole = localStorage.getItem('userRole');
        const userEmail = localStorage.getItem('userEmail');

        setAuthState({
          isAuthenticated,
          userRole,
          userEmail,
          isLoading: false
        });
      } catch (error) {
        console.error('Error reading auth state:', error);
        setAuthState(prev => ({ ...prev, isLoading: false }));
      }
    };

    // Initial load
    updateAuthState();

    // Listen for changes
    const handleStorageChange = (e) => {
      if (['isAuthenticated', 'userRole', 'userEmail'].includes(e.key)) {
        updateAuthState();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const logout = () => {
    if (typeof window === 'undefined') return;

    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');

    // Trigger storage event for other tabs
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'isAuthenticated',
      newValue: null
    }));

    // Analytics tracking for logout
    if (window.gtag) {
      window.gtag('event', 'logout', {
        event_category: 'Authentication',
        event_label: authState.userEmail
      });
    }
  };

  return {
    ...authState,
    logout
  };
};

// Role-based access control helper
export const hasRole = (requiredRole, userRole) => {
  if (!requiredRole) return true;
  if (!userRole) return false;

  // Support for multiple roles
  if (Array.isArray(requiredRole)) {
    return requiredRole.includes(userRole);
  }

  return userRole === requiredRole;
};

// Conditional rendering based on role
export const RoleGuard = ({ requiredRole, userRole, children, fallback = null }) => {
  if (hasRole(requiredRole, userRole)) {
    return children;
  }

  return fallback;
};

export default ProtectedRoute;

// Usage Examples:

// 1. Basic usage with component:
// <ProtectedRoute>
//   <AdminDashboard />
// </ProtectedRoute>

// 2. With specific role requirement:
// <ProtectedRoute requiredRole="admin">
//   <AdminPanel />
// </ProtectedRoute>

// 3. With custom redirects:
// <ProtectedRoute
//   requiredRole="manager"
//   redirectTo="/custom-login"
//   unauthorizedRedirect="/access-denied"
// >
//   <ManagerDashboard />
// </ProtectedRoute>

// 4. Using HOC pattern:
// const ProtectedAdminPanel = withProtectedRoute(AdminPanel, { requiredRole: 'admin' });

// 5. Using the auth hook in a component:
// const MyComponent = () => {
//   const { isAuthenticated, userRole, userEmail, logout } = useAuth();
//
//   return (
//     <div>
//       <p>Welcome {userEmail}</p>
//       <p>Role: {userRole}</p>
//       <button onClick={logout}>Logout</button>
//     </div>
//   );
// };

// 6. Role-based conditional rendering:
// <RoleGuard requiredRole="admin" userRole={userRole}>
//   <AdminOnlyComponent />
// </RoleGuard>