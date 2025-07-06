// firebaseServices.js
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
  limit
} from 'firebase/firestore';
import { db } from './firebase';
import CustomerDashboard from "./dashboard/admin/CustomerDashboard";

// Collection names
const CUSTOMERS_COLLECTION = 'customers';
const NEWSLETTER_COLLECTION = 'newsletter_subscribers';

/**
 * Submit customer form data to Firestore
 * @param {Object} formData - Customer form data
 * @returns {Object} - Result with success status and document ID
 */
export const submitCustomerForm = async (formData) => {
  try {
    console.log('Submitting customer data:', formData);

    // Prepare data for Firestore
    const customerData = {
      // Personal Information
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      whatsapp: formData.whatsapp || '',

      // Business Information
      companyName: formData.companyName || '',
      position: formData.position || '',
      businessType: formData.businessType || 'individual',

      // Service Preferences
      fuelTypes: formData.fuelTypes || [],
      deliveryFrequency: formData.deliveryFrequency || '',
      averageVolume: formData.averageVolume || '',
      preferredDeliveryTime: formData.preferredDeliveryTime || '',

      // Location & Contact Preferences
      address: formData.address || '',
      parish: formData.parish || '',
      preferredContact: formData.preferredContact || '',

      // Newsletter & Marketing
      newsletter: formData.newsletter || false,
      whatsappUpdates: formData.whatsappUpdates || false,
      smsAlerts: formData.smsAlerts || false,

      // Additional Information
      message: formData.message || '',
      hearAboutUs: formData.hearAboutUs || '',

      // Metadata
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      status: 'new',
      source: 'website',
      totalOrders: 0,
      totalSpent: 0
    };

    // Add document to Firestore
    const docRef = await addDoc(collection(db, CUSTOMERS_COLLECTION), customerData);

    console.log('Customer document created with ID:', docRef.id);

    // If newsletter subscription is enabled, add to newsletter collection
    if (formData.newsletter) {
      try {
        await addDoc(collection(db, NEWSLETTER_COLLECTION), {
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          subscribedAt: serverTimestamp(),
          source: 'contact_form',
          active: true
        });
        console.log('Newsletter subscription added');
      } catch (newsletterError) {
        console.warn('Newsletter subscription failed:', newsletterError);
        // Don't fail the main submission if newsletter fails
      }
    }

    return {
      success: true,
      id: docRef.id,
      message: 'Customer information saved successfully!'
    };

  } catch (error) {
    console.error("Error adding customer document:", error);
    return {
      success: false,
      error: error.message || 'Failed to save customer information. Please try again.',
      id: null
    };
  }
};

/**
 * Get all customers from Firestore
 * @returns {Array} - Array of customer objects
 */
export const getAllCustomers = async () => {
  try {
    const q = query(
      collection(db, CUSTOMERS_COLLECTION),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);

    const customers = [];
    querySnapshot.forEach((doc) => {
      customers.push({
        id: doc.id,
        ...doc.data(),
        // Convert Firestore timestamps to JavaScript Dates
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        updatedAt: doc.data().updatedAt?.toDate() || new Date()
      });
    });

    console.log(`Retrieved ${customers.length} customers`);
    return customers;

  } catch (error) {
    console.error("Error getting customers:", error);
    throw new Error('Failed to retrieve customers');
  }
};

/**
 * Update customer status
 * @param {string} customerId - Customer document ID
 * @param {string} newStatus - New status (new, contacted, customer, inactive)
 * @returns {Object} - Result with success status
 */
export const updateCustomerStatus = async (customerId, newStatus) => {
  try {
    const customerRef = doc(db, CUSTOMERS_COLLECTION, customerId);
    await updateDoc(customerRef, {
      status: newStatus,
      updatedAt: serverTimestamp()
    });

    console.log(`Customer ${customerId} status updated to ${newStatus}`);
    return { success: true, message: 'Status updated successfully' };

  } catch (error) {
    console.error("Error updating customer status:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Update customer information
 * @param {string} customerId - Customer document ID
 * @param {Object} updateData - Data to update
 * @returns {Object} - Result with success status
 */
export const updateCustomer = async (customerId, updateData) => {
  try {
    const customerRef = doc(db, CUSTOMERS_COLLECTION, customerId);
    await updateDoc(customerRef, {
      ...updateData,
      updatedAt: serverTimestamp()
    });

    console.log(`Customer ${customerId} updated successfully`);
    return { success: true, message: 'Customer updated successfully' };

  } catch (error) {
    console.error("Error updating customer:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Delete customer
 * @param {string} customerId - Customer document ID
 * @returns {Object} - Result with success status
 */
export const deleteCustomer = async (customerId) => {
  try {
    await deleteDoc(doc(db, CUSTOMERS_COLLECTION, customerId));

    console.log(`Customer ${customerId} deleted successfully`);
    return { success: true, message: 'Customer deleted successfully' };

  } catch (error) {
    console.error("Error deleting customer:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Get customers by status
 * @param {string} status - Status to filter by
 * @returns {Array} - Array of filtered customers
 */
export const getCustomersByStatus = async (status) => {
  try {
    const q = query(
      collection(db, CUSTOMERS_COLLECTION),
      where('status', '==', status),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);

    const customers = [];
    querySnapshot.forEach((doc) => {
      customers.push({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        updatedAt: doc.data().updatedAt?.toDate() || new Date()
      });
    });

    return customers;

  } catch (error) {
    console.error("Error getting customers by status:", error);
    throw new Error('Failed to retrieve customers by status');
  }
};

/**
 * Search customers by email or name
 * @param {string} searchTerm - Search term
 * @returns {Array} - Array of matching customers
 */
export const searchCustomers = async (searchTerm) => {
  try {
    // Note: Firestore doesn't support full-text search
    // This is a basic implementation - for better search, consider Algolia
    const allCustomers = await getAllCustomers();

    const filtered = allCustomers.filter(customer =>
      customer.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.companyName?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered;

  } catch (error) {
    console.error("Error searching customers:", error);
    throw new Error('Failed to search customers');
  }
};

/**
 * Get newsletter subscribers
 * @returns {Array} - Array of newsletter subscribers
 */
export const getNewsletterSubscribers = async () => {
  try {
    const q = query(
      collection(db, NEWSLETTER_COLLECTION),
      where('active', '==', true),
      orderBy('subscribedAt', 'desc')
    );
    const querySnapshot = await getDocs(q);

    const subscribers = [];
    querySnapshot.forEach((doc) => {
      subscribers.push({
        id: doc.id,
        ...doc.data(),
        subscribedAt: doc.data().subscribedAt?.toDate() || new Date()
      });
    });

    return subscribers;

  } catch (error) {
    console.error("Error getting newsletter subscribers:", error);
    throw new Error('Failed to retrieve newsletter subscribers');
  }
};

/**
 * Test Firebase connection
 * @returns {Object} - Connection test result
 */
export const testFirebaseConnection = async () => {
  try {
    const testDoc = await addDoc(collection(db, 'test'), {
      message: 'Firebase connection test',
      timestamp: serverTimestamp()
    });

    // Clean up test document
    await deleteDoc(doc(db, 'test', testDoc.id));

    return { success: true, message: 'Firebase connection successful!' };

  } catch (error) {
    console.error("Firebase connection test failed:", error);
    return { success: false, error: error.message };
  }
};

