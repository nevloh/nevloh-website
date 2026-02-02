// pages/_app.js - Main App Component for Next.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../components/Layout';
import ProtectedRoute from '../components/ProtectedRoute';
import { AuthProvider } from '../utils/auth';
import '../styles/globals.css';

// Google Analytics ID from environment variables
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Global useEffect for analytics, performance monitoring, etc.
  useEffect(() => {
    // Handle route changes for analytics
    const handleRouteChange = (url) => {
      // Track page views
      if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
        window.gtag('config', GA_TRACKING_ID, {
          page_path: url,
          page_title: document.title,
        });
      }

      // Optional: Add custom analytics tracking
      console.log('Route changed to:', url);
    };

    const handleRouteChangeStart = (url) => {
      // Optional: Show loading indicator
      console.log('Route changing to:', url);
    };

    const handleRouteChangeError = (err, url) => {
      // Track route change errors
      console.error('Route change error:', err, url);

      if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
        window.gtag('event', 'exception', {
          description: `Route change error: ${err.message}`,
          fatal: false,
        });
      }
    };

    // Register event listeners
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('routeChangeError', handleRouteChangeError);

    // Cleanup event listeners
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, [router.events]);

  // Get the page name for conditional logic
  const getPageName = () => {
    if (router.pathname === '/') return 'home';
    return router.pathname.split('/')[1] || 'home';
  };

  // Check if current page is blog-related
  const isBlogPage = () => {
    return router.pathname === '/blog' || router.pathname.startsWith('/blog/');
  };

  // Check if current page is services-related
  const isServicesPage = () => {
    return router.pathname === '/services' || router.pathname.startsWith('/services/');
  };

  // Determine if this page should use the main layout
  const shouldUseLayout = () => {
    const publicPages = [
      'home',
      'about',
      'services',
      'sustainability',
      'industries',
      'industry-solutions',
      'contact',
      'privacy',
      'terms',
      'blog'
    ];

    const currentPage = getPageName();
    return publicPages.includes(currentPage) || isBlogPage() || isServicesPage();
  };

  // Determine if this page needs protection
  const getProtectedRouteConfig = () => {
    const protectedRoutes = {
      'admin': { requiredRole: 'admin' },
      'admin-dashboard': { requiredRole: 'admin' },
      'customerdashboard': { requiredRole: 'admin' },
      'customer': { requiredRole: 'customer' },
      'customer-portal': { requiredRole: 'customer' },
      'driver': { requiredRole: 'driver' },
      'driver-dashboard': { requiredRole: 'driver' }
    };

    const currentPage = getPageName();
    return protectedRoutes[currentPage];
  };

  // Check if page should not have any layout (login, signup, etc.)
  const shouldHaveNoLayout = () => {
    const noLayoutPages = [
      'login',
      'signup',
      'unauthorized',
      '404',
      '_error'
    ];
    const currentPage = getPageName();
    return noLayoutPages.includes(currentPage);
  };

  const protectedConfig = getProtectedRouteConfig();

  return (
    <>
      {/* Global Head elements - DO NOT put stylesheets here */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Global meta tags */}
        <meta name="author" content="Nevloh Limited" />
        <meta name="robots" content="index, follow" />

        {/* Security headers */}
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

        {/* Blog-specific meta tags */}
        {isBlogPage() && (
          <>
            <meta property="og:site_name" content="Nevloh Limited" />
            <meta property="article:publisher" content="https://www.nevloh.com" />
            <meta name="twitter:site" content="@nevlohltd" />
            <meta name="twitter:creator" content="@nevlohltd" />
          </>
        )}

        {/* Services-specific meta tags */}
        {isServicesPage() && (
          <>
            <meta property="og:site_name" content="Nevloh Limited" />
            <meta name="twitter:site" content="@nevlohltd" />
            <meta name="twitter:creator" content="@nevlohltd" />
          </>
        )}

        {/* DNS prefetch for external services */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//firebase.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

      </Head>

      {/* Google Analytics - only load if GA_TRACKING_ID exists */}
      {GA_TRACKING_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
                page_title: document.title,
                page_location: window.location.href,
              });
              
              // Enhanced content tracking
              ${isBlogPage() ? `
              gtag('event', 'page_view', {
                page_title: document.title,
                page_location: window.location.href,
                content_group1: 'Blog'
              });
              ` : ''}
              
              ${isServicesPage() ? `
              gtag('event', 'page_view', {
                page_title: document.title,
                page_location: window.location.href,
                content_group1: 'Services'
              });
              ` : ''}
            `}
          </Script>
        </>
      )}

      {/* Web Vitals reporting */}
      <Script id="web-vitals" strategy="afterInteractive">
        {`
          if ('web-vitals' in window) {
            // Web Vitals will be handled by reportWebVitals function
          }
        `}
      </Script>

      {/* Auth Provider wrapper for the entire app */}
      <AuthProvider>
        {/* Conditional rendering based on route type */}
        {protectedConfig ? (
          // Protected route
          <ProtectedRoute
            requiredRole={protectedConfig.requiredRole}
            redirectTo="/login"
            unauthorizedRedirect="/unauthorized"
          >
            {shouldUseLayout() ? (
              <Layout>
                <Component {...pageProps} />
              </Layout>
            ) : (
              <Component {...pageProps} />
            )}
          </ProtectedRoute>
        ) : shouldHaveNoLayout() ? (
          // Pages without layout (login, signup, etc.)
          <Component {...pageProps} />
        ) : shouldUseLayout() ? (
          // Public pages with layout
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          // Fallback: render component without layout
          <Component {...pageProps} />
        )}
      </AuthProvider>
    </>
  );
}

// Next.js Web Vitals reporting function
export function reportWebVitals(metric) {
  // Log metrics in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vital:', metric);
  }

  // Send to analytics in production
  if (process.env.NODE_ENV === 'production') {
    // Google Analytics 4
    if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
        custom_parameter_1: metric.rating, // 'good', 'needs-improvement', 'poor'
      });
    }

    // Send to custom analytics endpoint if available
    if (process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
      fetch(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: metric.name,
          value: metric.value,
          rating: metric.rating,
          id: metric.id,
          url: window.location.href,
          timestamp: Date.now(),
        }),
      }).catch(error => {
        console.warn('Analytics error:', error);
      });
    }
  }
}

// Error boundary for the app
MyApp.getInitialProps = async (appContext) => {
  // Capture any errors during SSR
  let pageProps = {};

  try {
    if (appContext.Component.getInitialProps) {
      pageProps = await appContext.Component.getInitialProps(appContext.ctx);
    }
  } catch (error) {
    console.error('Error in getInitialProps:', error);

    // Track SSR errors in production
    if (process.env.NODE_ENV === 'production') {
      // You could send this to your error tracking service
      console.error('SSR Error:', error);
    }
  }

  return { pageProps };
};

export default MyApp;