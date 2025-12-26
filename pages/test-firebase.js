// Save this as: pages/test-firebase.js
// Access it at: http://localhost:3002/test-firebase

import React, { useState } from 'react';
import Head from 'next/head';
import { submitCustomerForm } from '../utils/firebaseServices';

const FirebaseTestPage = () => {
  const [testResults, setTestResults] = useState([]);
  const [isTesting, setIsTesting] = useState(false);

  const addResult = (message, type = 'info') => {
    const emoji = type === 'success' ? '✅' : type === 'error' ? '❌' : type === 'warning' ? '⚠️' : 'ℹ️';
    setTestResults(prev => [...prev, { message: `${emoji} ${message}`, type, time: new Date().toLocaleTimeString() }]);
  };

  const runTests = async () => {
    setIsTesting(true);
    setTestResults([]);

    addResult('Starting Firebase Connection Tests...', 'info');

    // Test 1: Check Environment Variables
    addResult('Test 1: Checking Environment Variables', 'info');
    const requiredVars = [
      'NEXT_PUBLIC_FIREBASE_API_KEY',
      'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
      'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
      'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
      'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
      'NEXT_PUBLIC_FIREBASE_APP_ID'
    ];

    let allVarsPresent = true;
    requiredVars.forEach(varName => {
      if (process.env[varName]) {
        addResult(`${varName}: Found (${process.env[varName].substring(0, 20)}...)`, 'success');
      } else {
        addResult(`${varName}: MISSING!`, 'error');
        allVarsPresent = false;
      }
    });

    if (!allVarsPresent) {
      addResult('CRITICAL: Missing environment variables! Check .env.local', 'error');
      setIsTesting(false);
      return;
    }

    // Test 2: Check if submitCustomerForm exists
    addResult('Test 2: Checking Firebase Service Function', 'info');
    if (typeof submitCustomerForm === 'function') {
      addResult('submitCustomerForm function found!', 'success');
    } else {
      addResult('submitCustomerForm function NOT found!', 'error');
      setIsTesting(false);
      return;
    }

    // Test 3: Try submitting test data
    addResult('Test 3: Attempting Test Submission to Firebase', 'info');

    const testData = {
      firstName: 'Firebase',
      lastName: 'Test',
      email: 'test@firebasetest.com',
      phone: '+1-876-999-9999',
      message: `Automated test from browser - ${new Date().toISOString()}`,
      source: 'browser_test_page',
      whatsapp: '',
      companyName: 'Test Company',
      position: 'Tester',
      businessType: 'individual',
      fuelTypes: ['diesel'],
      deliveryFrequency: 'as_needed',
      averageVolume: 'under_100',
      preferredDeliveryTime: '',
      address: '123 Test Street',
      parish: 'Kingston',
      preferredContact: 'email',
      hearAboutUs: 'other',
      newsletter: false,
      whatsappUpdates: false,
      smsAlerts: false
    };

    addResult('Submitting test data...', 'info');

    try {
      const result = await submitCustomerForm(testData);

      if (result && result.success) {
        addResult('SUCCESS! Form submitted to Firebase!', 'success');
        addResult(`Document ID: ${result.documentId}`, 'success');
        addResult(result.message, 'success');
        addResult('🎉 Your contact form should be working correctly!', 'success');
      } else {
        addResult('Submission failed', 'error');
        addResult(`Error: ${result?.error || 'Unknown error'}`, 'error');
        if (result?.details) {
          addResult(`Details: ${result.details}`, 'error');
        }
        if (result?.code) {
          addResult(`Error Code: ${result.code}`, 'error');
        }
      }
    } catch (error) {
      addResult('Exception during submission', 'error');
      addResult(`Error: ${error.message}`, 'error');
      addResult(`Error Name: ${error.name}`, 'error');

      if (error.code) {
        addResult(`Error Code: ${error.code}`, 'error');

        // Provide specific guidance
        if (error.code === 'permission-denied') {
          addResult('🔒 DIAGNOSIS: Firestore Security Rules Issue', 'warning');
          addResult('ACTION: Go to Firebase Console → Firestore → Rules', 'warning');
          addResult('Set: allow read, write: if true; (for testing)', 'warning');
        } else if (error.code === 'unavailable') {
          addResult('🌐 DIAGNOSIS: Firebase Service Unavailable', 'warning');
          addResult('ACTION: Check Firebase status and your internet', 'warning');
        }
      }
    }

    setIsTesting(false);
    addResult('All tests completed!', 'info');
  };

  const checkFirestoreData = () => {
    window.open('https://console.firebase.google.com/project/nevloh-website/firestore/data', '_blank');
  };

  return (
    <>
      <Head>
        <title>Firebase Connection Test | Nevloh Limited</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              🔥 Firebase Connection Test
            </h1>
            <p className="text-gray-600 mb-8">
              This page tests your Firebase connection and form submission functionality.
            </p>

            <div className="flex gap-4 mb-6">
              <button
                onClick={runTests}
                disabled={isTesting}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isTesting ? 'Testing...' : 'Run Firebase Tests'}
              </button>

              <button
                onClick={checkFirestoreData}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Open Firebase Console
              </button>

              <button
                onClick={() => setTestResults([])}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
              >
                Clear Results
              </button>
            </div>

            {/* Test Results */}
            {testResults.length > 0 && (
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Test Results:</h2>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {testResults.map((result, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg text-sm font-mono ${
                        result.type === 'success'
                          ? 'bg-green-50 text-green-800 border border-green-200'
                          : result.type === 'error'
                          ? 'bg-red-50 text-red-800 border border-red-200'
                          : result.type === 'warning'
                          ? 'bg-yellow-50 text-yellow-800 border border-yellow-200'
                          : 'bg-blue-50 text-blue-800 border border-blue-200'
                      }`}
                    >
                      <span className="text-xs text-gray-500 mr-2">{result.time}</span>
                      {result.message}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Environment Info */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Current Configuration:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold">Project ID:</span>
                  <br />
                  <span className="font-mono text-blue-600">
                    {process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'Not Set'}
                  </span>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold">Auth Domain:</span>
                  <br />
                  <span className="font-mono text-blue-600">
                    {process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'Not Set'}
                  </span>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold">Storage Bucket:</span>
                  <br />
                  <span className="font-mono text-blue-600">
                    {process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'Not Set'}
                  </span>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="font-semibold">App ID:</span>
                  <br />
                  <span className="font-mono text-blue-600 text-xs break-all">
                    {process.env.NEXT_PUBLIC_FIREBASE_APP_ID || 'Not Set'}
                  </span>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">📝 Instructions:</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm text-blue-800">
                <li>Click "Run Firebase Tests" to test your connection</li>
                <li>If tests pass, your contact form should work perfectly!</li>
                <li>Click "Open Firebase Console" to verify data is being saved</li>
                <li>Check Firestore → Data → customers collection for submissions</li>
              </ol>
            </div>

            {/* Quick Links */}
            <div className="mt-6 flex gap-4">
              <a
                href="/contact"
                className="text-blue-600 hover:underline font-semibold"
              >
                → Go to Contact Page
              </a>
              <a
                href="/"
                className="text-blue-600 hover:underline font-semibold"
              >
                → Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirebaseTestPage;