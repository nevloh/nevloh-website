// CustomerDashboard.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Added for navigation
import {
  Users,
  Search,
  Filter,
  Download,
  Mail,
  Phone,
  MessageSquare,
  Building2,
  MapPin,
  Calendar,
  Eye,
  CheckCircle,
  Clock,
  AlertCircle,
  TrendingUp,
  Fuel,
  Star,
  RefreshCw,
  Loader,
  LogOut, // Added for logout
  Home    // Added for home navigation
} from 'lucide-react';

// Import Firebase services
import {
  getAllCustomers,
  updateCustomerStatus,
  getCustomersByStatus,
  searchCustomers
} from '../../firebaseServices';

const CustomerDashboard = () => {
  const navigate = useNavigate(); // Added for navigation

  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Authentication state
  const userEmail = localStorage.getItem('userEmail');
  const userRole = localStorage.getItem('userRole');
  const loginTime = localStorage.getItem('loginTime');

  // Load customers when component mounts
  useEffect(() => {
    loadCustomers();
  }, []);

  // Filter customers based on search and status
  useEffect(() => {
    let filtered = customers;

    if (searchTerm) {
      filtered = filtered.filter(customer =>
        customer.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (customer.companyName && customer.companyName.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(customer => customer.status === statusFilter);
    }

    setFilteredCustomers(filtered);
  }, [customers, searchTerm, statusFilter]);

  const loadCustomers = async () => {
    try {
      setIsLoading(true);
      setError(null);
      console.log('Loading customers from Firebase...');

      const customerData = await getAllCustomers();
      setCustomers(customerData);
      console.log(`Loaded ${customerData.length} customers`);

    } catch (error) {
      console.error('Error loading customers:', error);
      setError('Failed to load customers. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await loadCustomers();
    setIsRefreshing(false);
  };

  // Added logout function
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('loginTime');
    navigate('/login');
  };

  // Added go to homepage function
  const handleGoHome = () => {
    navigate('/');
  };

  const handleStatusUpdate = async (customerId, newStatus) => {
    try {
      console.log(`Updating customer ${customerId} status to ${newStatus}`);

      const result = await updateCustomerStatus(customerId, newStatus);

      if (result.success) {
        // Update local state
        setCustomers(prev =>
          prev.map(customer =>
            customer.id === customerId
              ? { ...customer, status: newStatus, updatedAt: new Date() }
              : customer
          )
        );
        console.log('Status updated successfully');
      } else {
        console.error('Failed to update status:', result.error);
        alert('Failed to update status: ' + result.error);
      }
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Error updating status. Please try again.');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'customer': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'new': return <AlertCircle size={16} />;
      case 'contacted': return <Clock size={16} />;
      case 'customer': return <CheckCircle size={16} />;
      case 'inactive': return <AlertCircle size={16} />;
      default: return <AlertCircle size={16} />;
    }
  };

  const exportToCSV = () => {
    if (filteredCustomers.length === 0) {
      alert('No customers to export');
      return;
    }

    const headers = [
      'Name', 'Email', 'Phone', 'WhatsApp', 'Company', 'Position', 'Business Type',
      'Parish', 'Address', 'Fuel Types', 'Delivery Frequency', 'Volume',
      'Preferred Contact', 'Newsletter', 'Status', 'Created Date', 'Message'
    ];

    const csvContent = [
      headers.join(','),
      ...filteredCustomers.map(customer => [
        `"${customer.firstName} ${customer.lastName}"`,
        customer.email,
        customer.phone,
        customer.whatsapp || '',
        `"${customer.companyName || ''}"`,
        `"${customer.position || ''}"`,
        customer.businessType,
        customer.parish,
        `"${customer.address || ''}"`,
        `"${customer.fuelTypes ? customer.fuelTypes.join('; ') : ''}"`,
        customer.deliveryFrequency,
        customer.averageVolume,
        customer.preferredContact,
        customer.newsletter ? 'Yes' : 'No',
        customer.status,
        customer.createdAt ? customer.createdAt.toLocaleDateString() : '',
        `"${customer.message || ''}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nevloh-customers-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  // Calculate statistics
  const stats = {
    total: customers.length,
    new: customers.filter(c => c.status === 'new').length,
    contacted: customers.filter(c => c.status === 'contacted').length,
    customers: customers.filter(c => c.status === 'customer').length,
    totalRevenue: customers.reduce((sum, c) => sum + (c.totalSpent || 0), 0)
  };

  if (isLoading && customers.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader size={48} className="animate-spin text-blue-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-700">Loading Customers...</h2>
          <p className="text-gray-500">Connecting to Firebase database</p>
        </div>
      </div>
    );
  }

  if (error && customers.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md">
          <AlertCircle size={48} className="text-red-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Connection Error</h2>
          <p className="text-gray-500 mb-4">{error}</p>
          <button
            onClick={loadCustomers}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Updated Header with Authentication Info */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <Users size={32} className="mr-3 text-blue-600" />
                Customer Management
                {isRefreshing && <Loader size={24} className="ml-3 animate-spin text-blue-600" />}
              </h1>
              <p className="text-gray-600 mt-1">
                Manage your fuel delivery customers and leads from Firebase
              </p>
              {/* Added user session info */}
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                <span>
                  Logged in as: <strong className="text-gray-700">{userEmail || 'Admin User'}</strong>
                </span>
                <span>
                  Role: <strong className="text-blue-600 capitalize">{userRole || 'Unknown'}</strong>
                </span>
                {loginTime && (
                  <span>
                    Session: <strong>{new Date(loginTime).toLocaleString()}</strong>
                  </span>
                )}
              </div>
            </div>
            {/* Updated action buttons with authentication controls */}
            <div className="flex gap-3">
              <button
                onClick={handleGoHome}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center"
                title="Go to Website"
              >
                <Home size={18} className="mr-2" />
                Website
              </button>
              <button
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center disabled:opacity-50"
                title="Refresh Data"
              >
                <RefreshCw size={18} className={`mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                Refresh
              </button>
              <button
                onClick={exportToCSV}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
                title="Export to CSV"
              >
                <Download size={18} className="mr-2" />
                Export CSV
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center"
                title="Logout"
              >
                <LogOut size={18} className="mr-2" />
                Logout
              </button>
            </div>
          </div>

          {/* Error Banner */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-center">
                <AlertCircle size={20} className="text-red-600 mr-3" />
                <p className="text-red-700">{error}</p>
                <button
                  onClick={() => setError(null)}
                  className="ml-auto text-red-600 hover:text-red-800"
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-600 text-sm font-medium">Total Leads</p>
                  <p className="text-2xl font-bold text-blue-900">{stats.total}</p>
                </div>
                <Users size={24} className="text-blue-600" />
              </div>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-yellow-600 text-sm font-medium">New</p>
                  <p className="text-2xl font-bold text-yellow-900">{stats.new}</p>
                </div>
                <AlertCircle size={24} className="text-yellow-600" />
              </div>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-600 text-sm font-medium">Contacted</p>
                  <p className="text-2xl font-bold text-orange-900">{stats.contacted}</p>
                </div>
                <Clock size={24} className="text-orange-600" />
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-600 text-sm font-medium">Customers</p>
                  <p className="text-2xl font-bold text-green-900">{stats.customers}</p>
                </div>
                <CheckCircle size={24} className="text-green-600" />
              </div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-600 text-sm font-medium">Live Data</p>
                  <p className="text-lg font-bold text-purple-900">Firebase</p>
                </div>
                <TrendingUp size={24} className="text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search customers by name, email, or company..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="customer">Customer</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredCustomers.length} of {customers.length} customers
            {searchTerm && ` matching "${searchTerm}"`}
            {statusFilter !== 'all' && ` with status "${statusFilter}"`}
          </div>
        </div>

        {/* Customer List */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {filteredCustomers.length === 0 ? (
            <div className="p-12 text-center">
              <Users size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {searchTerm || statusFilter !== 'all' ? 'No customers found' : 'No customers yet'}
              </h3>
              <p className="text-gray-500">
                {searchTerm || statusFilter !== 'all'
                  ? 'Try adjusting your search or filter criteria'
                  : 'Customer data will appear here once forms are submitted'
                }
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Business
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fuel Needs
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredCustomers.map((customer) => (
                    <tr key={customer.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {customer.firstName} {customer.lastName}
                          </div>
                          <div className="text-sm text-gray-500 flex items-center">
                            <MapPin size={12} className="mr-1" />
                            {customer.parish || 'Not specified'}
                          </div>
                          <div className="text-xs text-gray-400">
                            <Calendar size={10} className="inline mr-1" />
                            {customer.createdAt ? customer.createdAt.toLocaleDateString() : 'Unknown date'}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{customer.email}</div>
                        <div className="text-sm text-gray-500">{customer.phone}</div>
                        {customer.whatsapp && (
                          <div className="text-xs text-green-600">WhatsApp: {customer.whatsapp}</div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {customer.companyName || 'Individual'}
                        </div>
                        <div className="text-sm text-gray-500">
                          {customer.position && (
                            <div>{customer.position}</div>
                          )}
                          <div className="capitalize">
                            {customer.businessType ? customer.businessType.replace('-', ' ') : 'Not specified'}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {customer.fuelTypes && customer.fuelTypes.length > 0 ? (
                            <>
                              {customer.fuelTypes.slice(0, 2).join(', ')}
                              {customer.fuelTypes.length > 2 && '...'}
                            </>
                          ) : (
                            'Not specified'
                          )}
                        </div>
                        <div className="text-sm text-gray-500">
                          {customer.deliveryFrequency && customer.averageVolume ? (
                            <span className="capitalize">
                              {customer.deliveryFrequency} • {customer.averageVolume}
                            </span>
                          ) : (
                            'Preferences not set'
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(customer.status)}`}>
                          {getStatusIcon(customer.status)}
                          <span className="ml-1 capitalize">{customer.status}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => {
                              setSelectedCustomer(customer);
                              setIsDetailModalOpen(true);
                            }}
                            className="text-blue-600 hover:text-blue-900"
                            title="View Details"
                          >
                            <Eye size={16} />
                          </button>
                          <a
                            href={`mailto:${customer.email}`}
                            className="text-green-600 hover:text-green-900"
                            title="Send Email"
                          >
                            <Mail size={16} />
                          </a>
                          <a
                            href={`tel:${customer.phone}`}
                            className="text-blue-600 hover:text-blue-900"
                            title="Call"
                          >
                            <Phone size={16} />
                          </a>
                          {customer.whatsapp && (
                            <a
                              href={`https://wa.me/${customer.whatsapp.replace(/[^0-9]/g, '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-green-600 hover:text-green-900"
                              title="WhatsApp"
                            >
                              <MessageSquare size={16} />
                            </a>
                          )}
                          <select
                            value={customer.status}
                            onChange={(e) => handleStatusUpdate(customer.id, e.target.value)}
                            className="text-xs border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500"
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="customer">Customer</option>
                            <option value="inactive">Inactive</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Customer Detail Modal */}
        {isDetailModalOpen && selectedCustomer && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Customer Details</h2>
                  <button
                    onClick={() => setIsDetailModalOpen(false)}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Personal Information */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <Users size={16} className="mr-2" />
                      Personal Information
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Name:</strong> {selectedCustomer.firstName} {selectedCustomer.lastName}</p>
                      <p><strong>Email:</strong> {selectedCustomer.email}</p>
                      <p><strong>Phone:</strong> {selectedCustomer.phone}</p>
                      {selectedCustomer.whatsapp && (
                        <p><strong>WhatsApp:</strong> {selectedCustomer.whatsapp}</p>
                      )}
                      <p><strong>Preferred Contact:</strong> {selectedCustomer.preferredContact || 'Not specified'}</p>
                      <p><strong>Customer ID:</strong> <code className="bg-gray-200 px-1 rounded text-xs">{selectedCustomer.id}</code></p>
                    </div>
                  </div>

                  {/* Business Information */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <Building2 size={16} className="mr-2" />
                      Business Information
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Company:</strong> {selectedCustomer.companyName || 'N/A'}</p>
                      <p><strong>Position:</strong> {selectedCustomer.position || 'N/A'}</p>
                      <p><strong>Business Type:</strong> {selectedCustomer.businessType || 'Not specified'}</p>
                      <p><strong>Address:</strong> {selectedCustomer.address || 'Not provided'}</p>
                      <p><strong>Parish:</strong> {selectedCustomer.parish || 'Not specified'}</p>
                    </div>
                  </div>

                  {/* Service Preferences */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <Fuel size={16} className="mr-2" />
                      Service Preferences
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Fuel Types:</strong> {selectedCustomer.fuelTypes && selectedCustomer.fuelTypes.length > 0 ? selectedCustomer.fuelTypes.join(', ') : 'Not specified'}</p>
                      <p><strong>Delivery Frequency:</strong> {selectedCustomer.deliveryFrequency || 'Not specified'}</p>
                      <p><strong>Average Volume:</strong> {selectedCustomer.averageVolume || 'Not specified'}</p>
                      <p><strong>Preferred Time:</strong> {selectedCustomer.preferredDeliveryTime || 'Not specified'}</p>
                    </div>
                  </div>

                  {/* Marketing Preferences */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <Star size={16} className="mr-2" />
                      Marketing Preferences
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Newsletter:</strong> {selectedCustomer.newsletter ? 'Yes' : 'No'}</p>
                      <p><strong>WhatsApp Updates:</strong> {selectedCustomer.whatsappUpdates ? 'Yes' : 'No'}</p>
                      <p><strong>SMS Alerts:</strong> {selectedCustomer.smsAlerts ? 'Yes' : 'No'}</p>
                      <p><strong>How they heard about us:</strong> {selectedCustomer.hearAboutUs || 'Not specified'}</p>
                    </div>
                  </div>

                  {/* Database Information */}
                  <div className="md:col-span-2 bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 mb-3">Database Information</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="font-medium">Created</p>
                        <p className="text-blue-900">
                          {selectedCustomer.createdAt ? selectedCustomer.createdAt.toLocaleDateString() : 'Unknown'}
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">Last Updated</p>
                        <p className="text-blue-900">
                          {selectedCustomer.updatedAt ? selectedCustomer.updatedAt.toLocaleDateString() : 'Unknown'}
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">Source</p>
                        <p className="text-blue-900">{selectedCustomer.source || 'Unknown'}</p>
                      </div>
                      <div>
                        <p className="font-medium">Status</p>
                        <p className="text-blue-900 capitalize">{selectedCustomer.status}</p>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  {selectedCustomer.message && (
                    <div className="md:col-span-2 bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-800 mb-3">Customer Message</h3>
                      <p className="text-sm text-gray-600 italic">"{selectedCustomer.message}"</p>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap justify-end gap-3 mt-6">
                  <a
                    href={`mailto:${selectedCustomer.email}?subject=Welcome to Nevloh Limited&body=Dear ${selectedCustomer.firstName},%0D%0A%0D%0AThank you for your interest in our fuel delivery services.`}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
                  >
                    <Mail size={16} className="mr-2" />
                    Send Email
                  </a>
                  <a
                    href={`tel:${selectedCustomer.phone}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <Phone size={16} className="mr-2" />
                    Call Customer
                  </a>
                  {selectedCustomer.whatsapp && (
                    <a
                      href={`https://wa.me/${selectedCustomer.whatsapp.replace(/[^0-9]/g, '')}?text=Hello ${selectedCustomer.firstName}, thank you for your interest in Nevloh Limited fuel delivery services.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
                    >
                      <MessageSquare size={16} className="mr-2" />
                      WhatsApp
                    </a>
                  )}
                  <select
                    value={selectedCustomer.status}
                    onChange={(e) => {
                      handleStatusUpdate(selectedCustomer.id, e.target.value);
                      setSelectedCustomer(prev => ({ ...prev, status: e.target.value }));
                    }}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="new">Mark as New</option>
                    <option value="contacted">Mark as Contacted</option>
                    <option value="customer">Mark as Customer</option>
                    <option value="inactive">Mark as Inactive</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerDashboard;