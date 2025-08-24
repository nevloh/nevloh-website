// lib/firebaseServices.js - Next.js Firebase Services with improved error handling
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  query,
  orderBy,
  where,
  limit,
  startAfter,
  getDoc,
  writeBatch,
  increment
} from 'firebase/firestore';
import { db, handleFirebaseError, createTimestamp } from './firebase';

// Collection names - centralized for easier maintenance
export const COLLECTIONS = {
  CUSTOMERS: 'customers',
  NEWSLETTER: 'newsletter_subscribers',
  ORDERS: 'orders',
  ANALYTICS: 'analytics',
  LOGS: 'system_logs'
};

// Customer status constants
export const CUSTOMER_STATUS = {
  NEW: 'new',
  CONTACTED: 'contacted',
  CUSTOMER: 'customer',
  INACTIVE: 'inactive'
};

// Timeout wrapper for Firebase operations
const withTimeout = (promise, timeoutMs = 25000) => {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(`Operation timed out after ${timeoutMs}ms`)), timeoutMs)
    )
  ]);
};

// Connection check before operations
const checkFirebaseConnection = async () => {
  if (!db) {
    throw new Error('Firestore not initialized. Please check your Firebase configuration.');
  }
};

/**
 * Submit customer form data to Firestore with improved error handling
 * @param {Object} formData - Customer form data
 * @returns {Promise<Object>} - Result with success status and document ID
 */
export const submitCustomerForm = async (formData) => {
  try {
    console.log('Submitting customer data:', formData);

    // Check Firebase connection first
    await checkFirebaseConnection();

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email) {
      throw new Error('First name, last name, and email are required');
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      throw new Error('Invalid email format');
    }

    // Prepare data for Firestore with enhanced structure
    const customerData = {
      // Personal Information
      firstName: formData.firstName?.trim(),
      lastName: formData.lastName?.trim(),
      email: formData.email?.toLowerCase().trim(),
      phone: formData.phone?.trim() || '',
      whatsapp: formData.whatsapp?.trim() || '',

      // Business Information
      companyName: formData.companyName?.trim() || '',
      position: formData.position?.trim() || '',
      businessType: formData.businessType || 'individual',

      // Service Preferences
      fuelTypes: Array.isArray(formData.fuelTypes) ? formData.fuelTypes : [],
      deliveryFrequency: formData.deliveryFrequency || '',
      averageVolume: formData.averageVolume || '',
      preferredDeliveryTime: formData.preferredDeliveryTime || '',

      // Location & Contact Preferences
      address: formData.address?.trim() || '',
      parish: formData.parish || '',
      preferredContact: formData.preferredContact || 'email',

      // Newsletter & Marketing
      newsletter: Boolean(formData.newsletter),
      whatsappUpdates: Boolean(formData.whatsappUpdates),
      smsAlerts: Boolean(formData.smsAlerts),

      // Additional Information
      message: formData.message?.trim() || '',
      hearAboutUs: formData.hearAboutUs || '',

      // Metadata
      createdAt: createTimestamp(),
      updatedAt: createTimestamp(),
      status: CUSTOMER_STATUS.NEW,
      source: formData.source || 'website',

      // Business metrics
      totalOrders: 0,
      totalSpent: 0,
      lastContactDate: null,
      notes: [],

      // System fields
      isActive: true,
      tags: [],
      priority: 'normal',
      assignedTo: null
    };

    console.log('Attempting to save customer data to Firestore...');

    // Add document to Firestore with timeout
    const docRef = await withTimeout(
      addDoc(collection(db, COLLECTIONS.CUSTOMERS), customerData),
      20000 // 20 second timeout for the main operation
    );

    console.log('Customer document created with ID:', docRef.id);

    // Handle newsletter subscription separately (don't let this fail the main operation)
    if (formData.newsletter) {
      try {
        console.log('Processing newsletter subscription...');
        await withTimeout(
          subscribeToNewsletter({
            email: formData.email,
            firstName: formData.firstName,
            lastName: formData.lastName,
            source: 'contact_form'
          }),
          10000 // 10 second timeout for newsletter
        );
        console.log('Newsletter subscription added');
      } catch (newsletterError) {
        console.warn('Newsletter subscription failed (non-critical):', newsletterError);
        // Don't fail the main submission if newsletter fails
      }
    }

    // Log the submission for analytics (also non-critical)
    try {
      await withTimeout(
        logEvent('customer_form_submitted', {
          customerId: docRef.id,
          source: customerData.source,
          hasNewsletter: customerData.newsletter,
          businessType: customerData.businessType
        }),
        5000 // 5 second timeout for logging
      );
    } catch (logError) {
      console.warn('Event logging failed (non-critical):', logError);
      // Don't fail the main submission if logging fails
    }

    return {
      success: true,
      id: docRef.id,
      message: 'Customer information saved successfully!',
      customerData: { ...customerData, id: docRef.id }
    };

  } catch (error) {
    console.error("Error adding customer document:", error);

    // Enhanced error messaging based on error type
    let friendlyMessage = handleFirebaseError(error);

    if (error.message?.includes('timeout')) {
      friendlyMessage = 'The request timed out. Please check your internet connection and try again.';
    } else if (error.message?.includes('not initialized')) {
      friendlyMessage = 'Database connection not available. Please try again later or contact us directly.';
    } else if (error.message?.includes('WebChannel') || error.message?.includes('transport errored')) {
      friendlyMessage = 'Connection error occurred. Please try again or contact us at +1-876-449-5172.';
    } else if (error.message?.includes('offline')) {
      friendlyMessage = 'You appear to be offline. Please check your internet connection.';
    }

    return {
      success: false,
      error: friendlyMessage,
      id: null,
      rawError: error.message // Include raw error for debugging
    };
  }
};

/**
 * Get all customers from Firestore with pagination support and timeout
 * @param {Object} options - Query options
 * @returns {Promise<Object>} - Customers data with pagination info
 */
export const getAllCustomers = async (options = {}) => {
  try {
    await checkFirebaseConnection();

    const {
      pageSize = 50,
      lastDoc = null,
      orderField = 'createdAt',
      orderDirection = 'desc',
      status = null
    } = options;

    let q = query(collection(db, COLLECTIONS.CUSTOMERS));

    // Add status filter if provided
    if (status && status !== 'all') {
      q = query(q, where('status', '==', status));
    }

    // Add ordering
    q = query(q, orderBy(orderField, orderDirection));

    // Add pagination
    if (lastDoc) {
      q = query(q, startAfter(lastDoc));
    }

    q = query(q, limit(pageSize));

    const querySnapshot = await withTimeout(getDocs(q), 15000);
    const customers = [];
    let lastDocument = null;

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      customers.push({
        id: doc.id,
        ...data,
        // Convert Firestore timestamps to JavaScript Dates
        createdAt: data.createdAt?.toDate() || new Date(),
        updatedAt: data.updatedAt?.toDate() || new Date(),
        lastContactDate: data.lastContactDate?.toDate() || null
      });
      lastDocument = doc;
    });

    console.log(`Retrieved ${customers.length} customers`);

    return {
      customers,
      hasMore: customers.length === pageSize,
      lastDoc: lastDocument,
      total: customers.length
    };

  } catch (error) {
    console.error("Error getting customers:", error);
    throw new Error(handleFirebaseError(error));
  }
};

/**
 * Get customer by ID with timeout
 * @param {string} customerId - Customer document ID
 * @returns {Promise<Object|null>} - Customer data or null
 */
export const getCustomerById = async (customerId) => {
  try {
    await checkFirebaseConnection();

    const docRef = doc(db, COLLECTIONS.CUSTOMERS, customerId);
    const docSnap = await withTimeout(getDoc(docRef), 10000);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        ...data,
        createdAt: data.createdAt?.toDate() || new Date(),
        updatedAt: data.updatedAt?.toDate() || new Date(),
        lastContactDate: data.lastContactDate?.toDate() || null
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting customer by ID:", error);
    throw new Error(handleFirebaseError(error));
  }
};

/**
 * Update customer status with logging and timeout
 * @param {string} customerId - Customer document ID
 * @param {string} newStatus - New status
 * @param {string} updatedBy - Who updated the status
 * @returns {Promise<Object>} - Result with success status
 */
export const updateCustomerStatus = async (customerId, newStatus, updatedBy = 'system') => {
  try {
    await checkFirebaseConnection();

    if (!Object.values(CUSTOMER_STATUS).includes(newStatus)) {
      throw new Error('Invalid status value');
    }

    const customerRef = doc(db, COLLECTIONS.CUSTOMERS, customerId);
    const updateData = {
      status: newStatus,
      updatedAt: createTimestamp(),
      lastContactDate: newStatus === CUSTOMER_STATUS.CONTACTED ? createTimestamp() : null
    };

    await withTimeout(updateDoc(customerRef, updateData), 10000);

    // Log the status change (non-critical)
    try {
      await withTimeout(
        logEvent('customer_status_updated', {
          customerId,
          oldStatus: null, // Could be enhanced to track previous status
          newStatus,
          updatedBy
        }),
        5000
      );
    } catch (logError) {
      console.warn('Status update logging failed (non-critical):', logError);
    }

    console.log(`Customer ${customerId} status updated to ${newStatus}`);
    return {
      success: true,
      message: 'Status updated successfully',
      newStatus
    };

  } catch (error) {
    console.error("Error updating customer status:", error);
    return {
      success: false,
      error: handleFirebaseError(error)
    };
  }
};

/**
 * Subscribe email to newsletter with timeout
 * @param {Object} subscriberData - Subscriber information
 * @returns {Promise<Object>} - Result with success status
 */
export const subscribeToNewsletter = async (subscriberData) => {
  try {
    await checkFirebaseConnection();

    const { email, firstName, lastName, source = 'website' } = subscriberData;

    if (!email) {
      throw new Error('Email is required for newsletter subscription');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format');
    }

    // Check if already subscribed
    const existingQuery = query(
      collection(db, COLLECTIONS.NEWSLETTER),
      where('email', '==', email.toLowerCase().trim())
    );
    const existingSnapshot = await withTimeout(getDocs(existingQuery), 10000);

    if (!existingSnapshot.empty) {
      return {
        success: true,
        message: 'Email already subscribed to newsletter',
        alreadySubscribed: true
      };
    }

    const newsletterData = {
      email: email.toLowerCase().trim(),
      firstName: firstName?.trim() || '',
      lastName: lastName?.trim() || '',
      subscribedAt: createTimestamp(),
      source,
      active: true,
      preferences: {
        weeklyNewsletter: true,
        promotionalEmails: true,
        fuelPriceAlerts: true
      }
    };

    const docRef = await withTimeout(
      addDoc(collection(db, COLLECTIONS.NEWSLETTER), newsletterData),
      10000
    );

    // Log newsletter subscription (non-critical)
    try {
      await withTimeout(
        logEvent('newsletter_subscribed', {
          subscriberId: docRef.id,
          email,
          source
        }),
        5000
      );
    } catch (logError) {
      console.warn('Newsletter subscription logging failed (non-critical):', logError);
    }

    return {
      success: true,
      message: 'Successfully subscribed to newsletter',
      id: docRef.id
    };

  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return {
      success: false,
      error: handleFirebaseError(error)
    };
  }
};

/**
 * Log events for analytics with timeout
 * @param {string} eventName - Name of the event
 * @param {Object} eventData - Event data
 * @returns {Promise<void>}
 */
export const logEvent = async (eventName, eventData = {}) => {
  try {
    // Only log in production or if explicitly enabled
    if (process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_ENABLE_ANALYTICS_LOGGING !== 'true') {
      console.log('Analytics logging:', eventName, eventData);
      return;
    }

    await checkFirebaseConnection();

    await withTimeout(
      addDoc(collection(db, COLLECTIONS.LOGS), {
        eventName,
        eventData,
        timestamp: createTimestamp(),
        userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'server',
        url: typeof window !== 'undefined' ? window.location.href : 'server'
      }),
      5000
    );

  } catch (error) {
    console.warn('Error logging event (non-critical):', error);
    // Don't throw error for logging failures
  }
};

/**
 * Test Firebase connection with enhanced diagnostics and timeout
 * @returns {Promise<Object>} - Connection test result
 */
export const testFirebaseConnection = async () => {
  try {
    await checkFirebaseConnection();

    const testData = {
      message: 'Firebase connection test',
      timestamp: createTimestamp(),
      testId: Math.random().toString(36).substr(2, 9),
      environment: process.env.NODE_ENV || 'unknown'
    };

    console.log('Testing Firebase connection...');

    // Test write operation with timeout
    const testDoc = await withTimeout(
      addDoc(collection(db, 'connection_test'), testData),
      10000
    );

    // Test read operation with timeout
    const readDoc = await withTimeout(
      getDoc(doc(db, 'connection_test', testDoc.id)),
      10000
    );

    if (!readDoc.exists()) {
      throw new Error('Read test failed - document not found');
    }

    // Test update operation with timeout
    await withTimeout(
      updateDoc(doc(db, 'connection_test', testDoc.id), {
        updated: true,
        updatedAt: createTimestamp()
      }),
      10000
    );

    // Clean up test document with timeout
    await withTimeout(
      deleteDoc(doc(db, 'connection_test', testDoc.id)),
      10000
    );

    console.log('Firebase connection test completed successfully');

    return {
      success: true,
      message: 'Firebase connection successful!',
      operations: ['create', 'read', 'update', 'delete'],
      timestamp: new Date().toISOString()
    };

  } catch (error) {
    console.error("Firebase connection test failed:", error);
    return {
      success: false,
      error: handleFirebaseError(error),
      timestamp: new Date().toISOString(),
      rawError: error.message
    };
  }
};

// Export all constants and functions
export default {
  COLLECTIONS,
  CUSTOMER_STATUS,
  submitCustomerForm,
  getAllCustomers,
  getCustomerById,
  updateCustomerStatus,
  subscribeToNewsletter,
  logEvent,
  testFirebaseConnection,
  withTimeout
};