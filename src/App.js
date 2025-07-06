// App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Sustainability from './pages/Sustainability';
import Industry from './pages/Industries';
import Contact from './pages/Contact';
import LoginPage from './pages/Login';
import SignupPage from './pages/SignupPage';
import Layout from './components/Layout';
import CustomerDashboard from './dashboard/admin/CustomerDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import UnauthorizedPage from './pages/UnauthorizedPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes with Layout */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/sustainability" element={<Layout><Sustainability /></Layout>} />
        <Route path="/industry" element={<Layout><Industry /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />

        {/* Authentication Routes (No Layout) */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected Admin Routes (No Layout - Dashboard has its own styling) */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute requiredRole="admin">
              <CustomerDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/customerdashboard"
          element={
            <ProtectedRoute requiredRole="admin">
              <CustomerDashboard />
            </ProtectedRoute>
          }
        />

        {/* Future Protected Routes */}
        <Route
          path="/customer-portal"
          element={
            <ProtectedRoute requiredRole="customer">
              <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-3xl font-bold text-gray-800 mb-4">Customer Portal</h1>
                  <p className="text-gray-600">Coming Soon - Track your fuel orders and deliveries</p>
                </div>
              </div>
            </ProtectedRoute>
          }
        />

        <Route
          path="/driver-dashboard"
          element={
            <ProtectedRoute requiredRole="driver">
              <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-3xl font-bold text-gray-800 mb-4">Driver Dashboard</h1>
                  <p className="text-gray-600">Coming Soon - Manage deliveries and routes</p>
                </div>
              </div>
            </ProtectedRoute>
          }
        />

        {/* Error Routes */}
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;