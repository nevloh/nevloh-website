// pages/unauthorized.js
// Tier 1 Institutional — Secure Access Firewall
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  ShieldAlert, ArrowLeft, Home, LogOut, Lock,
  UserCheck, Terminal, HelpCircle, Phone, Mail
} from 'lucide-react';

const UnauthorizedPage = () => {
  const router = useRouter();
  const [session, setSession] = useState({ role: null, email: null });
  const [isClient, setIsClient] = useState(false);
  const [errorCode, setErrorCode] = useState('');

  useEffect(() => {
    setIsClient(true);
    // Generate error code on client side only
    setErrorCode(`AUTH_${Math.floor(Math.random() * 9000) + 1000}`);

    if (typeof window !== 'undefined') {
      setSession({
        role: localStorage.getItem('userRole'),
        email: localStorage.getItem('userEmail')
      });
    }
  }, []);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('userRole');
      localStorage.removeItem('userEmail');
      router.push('/login');
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  const handleHomeRedirect = () => {
    router.push('/');
  };

  // Loading state
  if (!isClient) {
    return (
      <>
        <Head>
          <title>Access Restricted | Nevloh Limited</title>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <div className="min-h-screen bg-[#0F172A] flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-slate-700 border-t-red-500 rounded-full animate-spin" />
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Access Restricted | Nevloh Limited Security</title>
        <meta
          name="description"
          content="Access restricted - You don't have permission to access this resource. Contact support for assistance."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.nevloh.com/unauthorized" />

        {/* Security headers */}
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      </Head>

      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center p-4 font-sans selection:bg-red-500/30">
        {/* Ambient Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23ffffff'/%3E%3C/svg%3E")`,
              backgroundSize: '20px 20px'
            }}
          />
        </div>

        <div className="relative max-w-xl w-full">
          {/* Main Card */}
          <div className="bg-slate-900/50 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="text-center mb-10">
              {/* Icon with glow */}
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-red-500 blur-2xl opacity-20 animate-pulse" aria-hidden="true" />
                <div className="relative w-20 h-20 bg-red-500/10 border border-red-500/20 rounded-3xl flex items-center justify-center mx-auto">
                  <ShieldAlert size={40} className="text-red-500" />
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">
                Access <span className="text-red-500">Restricted</span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed">
                Your current credentials do not have permission to access this resource.
              </p>
            </div>

            {/* Session Diagnostics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-2">
                  <UserCheck size={14} />
                  <span>Current Session</span>
                </div>
                <div className="text-white font-medium truncate">
                  {session.email || 'Not signed in'}
                </div>
                <div className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-wider">
                  Role: {session.role || 'Guest'}
                </div>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-2">
                  <Terminal size={14} />
                  <span>Reference Code</span>
                </div>
                <div className="text-white font-mono">{errorCode}</div>
                <div className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-wider">
                  Status: Logged
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleGoBack}
                className="w-full py-4 bg-white text-slate-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-all active:scale-[0.98]"
                aria-label="Go back to previous page"
              >
                <ArrowLeft size={20} />
                Go Back
              </button>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleHomeRedirect}
                  className="py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all active:scale-[0.98]"
                  aria-label="Go to homepage"
                >
                  <Home size={18} />
                  Home
                </button>
                <button
                  onClick={handleLogout}
                  className="py-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-500/20 transition-all active:scale-[0.98]"
                  aria-label="Switch to different user account"
                >
                  <LogOut size={18} />
                  Switch User
                </button>
              </div>
            </div>

            {/* Support Section */}
            <div className="mt-10 pt-8 border-t border-white/5">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h4 className="text-white font-bold flex items-center gap-2 justify-center md:justify-start mb-2">
                    <HelpCircle size={16} className="text-blue-400" />
                    Need Access?
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Contact your administrator if you believe you should have access.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:admin@nevloh.com"
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-400 text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
                  >
                    <Mail size={14} />
                    admin@nevloh.com
                  </a>
                  <a
                    href="tel:+18764495172"
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-400 text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
                  >
                    <Phone size={14} />
                    (876) 449-5172
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="mt-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              {[1, 2, 3].map(i => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center"
                >
                  <Lock size={10} className="text-slate-500" />
                </div>
              ))}
            </div>
            <p className="text-[10px] text-slate-600 uppercase tracking-widest font-bold">
              Access attempts are logged for security purposes
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnauthorizedPage;