import Head from 'next/head';
import Link from 'next/link';
import { Home, Phone, ArrowLeft } from 'lucide-react';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found - Nevloh Limited</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Nevloh Limited's homepage for fuel delivery services across Jamaica." />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-6xl font-bold text-blue-600 mb-4">404</div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h1>
            <p className="text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>

            <div className="space-y-4">
              <Link
                href="/"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Home size={20} className="mr-2" />
                Return Home
              </Link>

              <Link
                href="/contact"
                className="w-full border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center"
              >
                <Phone size={20} className="mr-2" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}