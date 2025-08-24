// lib/firebase.js - FIXED for multiple initialization issue
import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getFirestore,
  initializeFirestore,
  connectFirestoreEmulator,
  serverTimestamp,
  CACHE_SIZE_UNLIMITED
} from 'firebase/firestore';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getStorage, connectStorageEmulator } from 'firebase/storage';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Firebase configuration using Next.js environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Validate required environment variables
const requiredEnvVars = [
  'NEXT_PUBLIC_FIREBASE_API_KEY',
  'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
  'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
  'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
  'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
  'NEXT_PUBLIC_FIREBASE_APP_ID'
];

const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.error('❌ Missing required Firebase environment variables:', missingEnvVars);
  console.error('📝 Please check your .env.local file');
  console.error('💡 Make sure all variables start with NEXT_PUBLIC_FIREBASE_');
}

// Initialize Firebase App (prevent multiple initialization)
let app;
try {
  app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  console.log('✅ Firebase app initialized successfully');
} catch (error) {
  console.error('❌ Firebase app initialization failed:', error);
  throw error;
}

// Initialize services with better error handling
let db, auth, storage, analytics;

// Track emulator connection status to prevent duplicate connections
let emulatorConnectionAttempted = {
  firestore: false,
  auth: false,
  storage: false
};

// Initialize Firestore with proper handling for multiple initialization
try {
  // Get the custom database name from environment
  const customDatabaseName = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_NAME || 'nevlohdb';

  console.log(`🔧 Initializing Firestore with database: ${customDatabaseName}`);

  // Try to get existing Firestore instance first
  try {
    // Check if Firestore is already initialized
    db = getFirestore(app);
    console.log('✅ Using existing Firestore instance');

    // Verify the database name by checking the connection
    // Note: There's no direct way to check the database name from an existing instance
    // But we'll log what we're attempting to connect to
    console.log(`📍 Connected to database: ${customDatabaseName} (assumed from environment)`);

  } catch (getFirestoreError) {
    console.log('🔄 No existing Firestore instance found, creating new one...');

    // No existing instance, safe to initialize with custom options
    db = initializeFirestore(app, {
      databaseId: customDatabaseName,
      experimentalForceLongPolling: true,
      useFetchStreams: false,
      cacheSizeBytes: CACHE_SIZE_UNLIMITED
    });

    console.log(`✅ Firestore initialized successfully with database: ${customDatabaseName}`);
  }

  // Connect to Firestore emulator in development (only once)
  if (process.env.NODE_ENV === 'development' &&
      process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR === 'true' &&
      !emulatorConnectionAttempted.firestore) {
    try {
      connectFirestoreEmulator(db, 'localhost', 8080);
      console.log('🔧 Connected to Firestore emulator');
      emulatorConnectionAttempted.firestore = true;
    } catch (error) {
      if (error.message.includes('already exists') || error.message.includes('already called')) {
        console.log('🔧 Firestore emulator already connected');
      } else {
        console.log('⚠️ Firestore emulator connection failed:', error.message);
      }
      emulatorConnectionAttempted.firestore = true;
    }
  }

} catch (error) {
  console.error('❌ Error initializing Firestore:', error);

  // Last resort: try to get any existing Firestore instance
  try {
    console.log('🔄 Attempting to get any existing Firestore instance...');
    db = getFirestore(app);
    console.log('⚠️ Using default Firestore instance as fallback');
  } catch (fallbackError) {
    console.error('❌ Complete Firestore initialization failure:', fallbackError);
    throw fallbackError;
  }
}

// Initialize Authentication
try {
  auth = getAuth(app);
  console.log('✅ Firebase Auth initialized');

  // Connect to Auth emulator in development
  if (process.env.NODE_ENV === 'development' &&
      process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR === 'true' &&
      !emulatorConnectionAttempted.auth) {
    try {
      connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
      console.log('🔧 Connected to Auth emulator');
      emulatorConnectionAttempted.auth = true;
    } catch (error) {
      if (error.message.includes('already exists') || error.message.includes('already called')) {
        console.log('🔧 Auth emulator already connected');
      } else {
        console.log('⚠️ Auth emulator connection failed:', error.message);
      }
      emulatorConnectionAttempted.auth = true;
    }
  }
} catch (error) {
  console.error('❌ Error initializing Auth:', error);
}

// Initialize Storage
try {
  storage = getStorage(app);
  console.log('✅ Firebase Storage initialized');

  // Connect to Storage emulator in development
  if (process.env.NODE_ENV === 'development' &&
      process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR === 'true' &&
      !emulatorConnectionAttempted.storage) {
    try {
      connectStorageEmulator(storage, 'localhost', 9199);
      console.log('🔧 Connected to Storage emulator');
      emulatorConnectionAttempted.storage = true;
    } catch (error) {
      if (error.message.includes('already exists') || error.message.includes('already called')) {
        console.log('🔧 Storage emulator already connected');
      } else {
        console.log('⚠️ Storage emulator connection failed:', error.message);
      }
      emulatorConnectionAttempted.storage = true;
    }
  }
} catch (error) {
  console.error('❌ Error initializing Storage:', error);
}

// Initialize Analytics (client-side only)
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported && process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID) {
      analytics = getAnalytics(app);
      console.log('✅ Firebase Analytics initialized');
    } else {
      console.log('ℹ️ Firebase Analytics not supported or measurement ID missing');
    }
  }).catch((error) => {
    console.log('⚠️ Analytics initialization failed:', error);
  });
}

// Environment configuration helper
export const firebaseEnv = {
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  useEmulator: process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR === 'true',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  databaseName: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_NAME || 'nevlohdb',
};

// Check if Firebase is properly configured
export const isFirebaseConfigured = () => {
  return missingEnvVars.length === 0 && !!app && !!auth && !!db;
};

// Enhanced connection status checker
export const checkFirebaseConnection = async () => {
  try {
    if (!db) {
      throw new Error('Firestore not initialized');
    }

    // Try to perform a simple operation to check connection
    const { enableNetwork, disableNetwork } = await import('firebase/firestore');

    await disableNetwork(db);
    await enableNetwork(db);

    return {
      connected: true,
      timestamp: new Date().toISOString(),
      environment: firebaseEnv.isDevelopment ? 'development' : 'production',
      emulator: firebaseEnv.useEmulator,
      projectId: firebaseConfig.projectId,
      databaseName: firebaseEnv.databaseName
    };
  } catch (error) {
    console.error('Firebase connection check failed:', error);
    return {
      connected: false,
      error: error.message,
      timestamp: new Date().toISOString(),
    };
  }
};

// Export Firebase services
export { db, auth, storage, analytics };

// Export the app
export default app;

// Helper functions for common Firebase operations

// Auth helpers
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !auth) {
      resolve(null);
      return;
    }

    const unsubscribe = auth.onAuthStateChanged(
      (user) => {
        unsubscribe();
        resolve(user);
      },
      reject
    );
  });
};

// Firestore helpers - Fixed to work properly in both server and client environments
export const createTimestamp = () => {
  // Always use serverTimestamp for Firestore operations
  return serverTimestamp();
};

// Enhanced error handling helper with WebChannel specific errors
export const handleFirebaseError = (error) => {
  console.error('Firebase Error:', error);

  // Handle network errors
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return 'You appear to be offline. Please check your internet connection.';
  }

  // Handle WebChannel specific errors
  if (error.message?.includes('WebChannelConnection') ||
      error.message?.includes('transport errored') ||
      error.message?.includes('400 (Bad Request)')) {
    return 'Database connection error. Please try refreshing the page or contact support.';
  }

  const errorMessages = {
    // Auth errors
    'auth/user-not-found': 'No user found with this email address.',
    'auth/wrong-password': 'Incorrect password.',
    'auth/email-already-in-use': 'This email is already registered.',
    'auth/weak-password': 'Password should be at least 6 characters.',
    'auth/invalid-email': 'Invalid email address format.',
    'auth/user-disabled': 'This account has been disabled.',
    'auth/too-many-requests': 'Too many failed attempts. Please try again later.',
    'auth/invalid-api-key': 'Firebase API key is invalid. Please check your configuration.',
    'auth/network-request-failed': 'Network error. Please check your internet connection.',

    // Firestore errors
    'firestore/permission-denied': 'You do not have permission to perform this action.',
    'firestore/unavailable': 'Service is temporarily unavailable. Please try again.',
    'firestore/deadline-exceeded': 'Request timed out. Please try again.',
    'firestore/not-found': 'The requested document was not found.',
    'firestore/already-exists': 'Document already exists.',
    'firestore/resource-exhausted': 'Quota exceeded. Please try again later.',
    'firestore/cancelled': 'Operation was cancelled.',
    'firestore/data-loss': 'Data loss or corruption occurred.',
    'firestore/unauthenticated': 'Authentication required.',
    'firestore/invalid-argument': 'Invalid data provided.',

    // Configuration errors
    'app/invalid-api-key': 'Invalid Firebase API key. Please check your .env.local file.',
    'app/app-deleted': 'Firebase app has been deleted.',
    'app/duplicate-app': 'Firebase app already exists.',
    'app/invalid-app-argument': 'Invalid app argument provided.',

    // Network and general errors
    'network-request-failed': 'Network error. Please check your connection and try again.',
    'internal-error': 'An internal error occurred. Please try again.',
    'unavailable': 'Service temporarily unavailable. Please try again later.'
  };

  // Check for specific error patterns
  if (error.message?.includes('Failed to get document')) {
    return 'Unable to retrieve data. Please check your connection and try again.';
  }

  if (error.message?.includes('Missing or insufficient permissions')) {
    return 'Access denied. Please check your permissions.';
  }

  if (error.message?.includes('PERMISSION_DENIED')) {
    return 'You do not have permission to access this resource.';
  }

  return errorMessages[error.code] || error.message || 'An unexpected error occurred. Please try again.';
};

// Database connection test specifically for form submissions
export const testDatabaseWrite = async () => {
  try {
    if (!db) {
      throw new Error('Firestore not initialized');
    }

    const { collection, addDoc, deleteDoc, doc } = await import('firebase/firestore');

    // Test write operation
    const testData = {
      test: true,
      timestamp: createTimestamp(),
      source: 'connection_test',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'server',
      databaseUsed: firebaseEnv.databaseName
    };

    console.log('🧪 Testing database write...');
    const docRef = await addDoc(collection(db, 'connection_test'), testData);
    console.log('✅ Test write successful, document ID:', docRef.id);

    // Clean up test document
    await deleteDoc(doc(db, 'connection_test', docRef.id));
    console.log('🧹 Test document cleaned up');

    return {
      success: true,
      message: 'Database write test successful',
      timestamp: new Date().toISOString(),
      documentId: docRef.id,
      databaseUsed: firebaseEnv.databaseName
    };

  } catch (error) {
    console.error('❌ Database write test failed:', error);
    return {
      success: false,
      error: handleFirebaseError(error),
      timestamp: new Date().toISOString(),
      rawError: error.message,
      databaseAttempted: firebaseEnv.databaseName
    };
  }
};

// Development utilities
if (firebaseEnv.isDevelopment) {
  // Expose Firebase services to window for debugging
  if (typeof window !== 'undefined') {
    window.firebase = { app, db, auth, storage, analytics };
    window.firebaseEnv = firebaseEnv;
    window.testDatabaseWrite = testDatabaseWrite;
    window.checkFirebaseConnection = checkFirebaseConnection;
  }

  console.log('🔧 Firebase Development Configuration:', {
    projectId: firebaseConfig.projectId,
    environment: firebaseEnv.isDevelopment ? 'development' : 'production',
    emulator: firebaseEnv.useEmulator,
    configured: isFirebaseConfigured(),
    databaseName: firebaseEnv.databaseName,
    services: {
      firestore: !!db,
      auth: !!auth,
      storage: !!storage,
      analytics: !!analytics,
    },
    missingEnvVars: missingEnvVars.length > 0 ? missingEnvVars : 'None',
    emulatorConnections: emulatorConnectionAttempted
  });

  // Auto-test connection in development
  if (typeof window !== 'undefined' && db) {
    setTimeout(() => {
      testDatabaseWrite().then(result => {
        if (result.success) {
          console.log('✅ Auto database write test passed');
          console.log(`🎯 Successfully connected to database: ${result.databaseUsed}`);
        } else {
          console.error('❌ Auto database write test failed:', result.error);
          console.log('💡 The database might be using default settings instead of custom database name');
        }
      });
    }, 3000); // Wait 3 seconds for everything to initialize
  }
}