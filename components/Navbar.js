// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Menu, X, ChevronDown, Truck, Zap, MapPin, Building2, Users, Fuel } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const router = useRouter();

  // Close mobile menu when route changes
  React.useEffect(() => {
    const handleRouteChange = () => {
      setIsMobileMenuOpen(false);
      setIsServicesOpen(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
      if (isServicesOpen && !event.target.closest('.services-dropdown')) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen, isServicesOpen]);

  // Analytics tracking for navigation clicks
  const handleNavClick = (linkName) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Navigation',
        event_label: linkName,
        value: 1
      });
    }
  };

  // Check if current route is active
  const isActiveRoute = (path) => {
    if (path === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(path);
  };

  // Services dropdown items with icons and descriptions
  const servicesDropdownItems = [
    {
      href: '/services/haulage',
      label: 'Haulage Services',
      description: 'Licensed petroleum transportation',
      icon: Users,
      color: 'text-slate-600'
    },
    {
      href: '/services/fleet-refuelling',
      label: 'Fleet Refuelling',
      description: 'On-site fleet fuel management',
      icon: Truck,
      color: 'text-blue-600'
    },
    {
      href: '/services/generator-refuelling',
      label: 'Generator Refuelling',
      description: '24/7 emergency power support',
      icon: Zap,
      color: 'text-green-600'
    },
    {
      href: '/services/on-site-fuel-delivery',
      label: 'On-Site Fuel Delivery',
      description: 'Direct delivery anywhere in Jamaica',
      icon: MapPin,
      color: 'text-purple-600'
    },
    {
      href: '/services/bulk-fuel',
      label: 'Bulk Fuel Supply',
      description: 'Industrial volume fuel supply',
      icon: Building2,
      color: 'text-orange-600'
    },
    {
      href: '/services/ulsd',
      label: 'Ultra Low Sulphur Diesel',
      description: '90% cleaner emissions fuel',
      icon: Fuel,
      color: 'text-emerald-600'
    },
  ];

  // Navigation items configuration
  const navigationItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    {
      href: '/services',
      label: 'Services',
      hasDropdown: true,
      dropdownItems: servicesDropdownItems
    },
    { href: '/blog', label: 'Blog' },
    { href: '/sustainability', label: 'Sustainability' },
    { href: '/industries', label: 'Industries' }
  ];

  return (
    <nav
      className="bg-white/95 backdrop-blur-sm shadow-lg py-3 px-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Company Name */}
        <Link
          href="/"
          className="flex items-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
          onClick={() => handleNavClick('Logo')}
          aria-label="Nevloh Limited - Go to homepage"
        >
          <div className="relative">
            <Image
              src="/images/logo.png"
              alt="Nevloh Limited - Premium Fuel Delivery Services"
              width={48}
              height={48}
              className="rounded-full shadow-md transition-transform duration-300 group-hover:scale-105"
              priority
              onError={(e) => {
                e.currentTarget.src = '/favicon.ico';
              }}
            />
          </div>
          <span className="text-lg md:text-xl font-bold text-blue-900 hidden sm:block group-hover:text-blue-700 transition-colors duration-200">
            Nevloh Limited
          </span>
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2 transition-colors duration-200 hover:bg-blue-100"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation links - Desktop */}
        <ul className="hidden md:flex space-x-2 lg:space-x-4 items-center" role="menubar">
          {navigationItems.map((item) => (
            <li key={item.href} className="relative" role="none">
              {item.hasDropdown ? (
                <div className="relative services-dropdown">
                  <Link
                    href={item.href}
                    className={`flex items-center font-semibold text-base transition-colors duration-200 py-2 px-3 lg:px-4 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isActiveRoute(item.href) 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-blue-800 hover:text-blue-600'
                    }`}
                    onClick={() => handleNavClick(item.label)}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    role="menuitem"
                    aria-haspopup="true"
                    aria-expanded={isServicesOpen}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-transform duration-300 ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </Link>

                  {/* Invisible bridge to prevent dropdown from closing */}
                  {isServicesOpen && (
                    <div
                      className="absolute top-full left-0 w-full h-2 bg-transparent"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    />
                  )}

                  {/* Dropdown Menu */}
                  {isServicesOpen && (
                    <div
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 py-3 z-50 animate-dropdown-in"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                      style={{
                        filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))',
                        transform: 'translateX(-10px)'
                      }}
                    >
                      <div className="px-4 py-2 border-b border-gray-100">
                        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
                          Our Services
                        </h3>
                      </div>

                      {item.dropdownItems.map((dropdownItem, index) => {
                        const IconComponent = dropdownItem.icon;
                        return (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="group flex items-start px-4 py-3 hover:bg-blue-50 transition-all duration-200 border-l-4 border-transparent hover:border-blue-500"
                            onClick={() => handleNavClick(dropdownItem.label)}
                            role="menuitem"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors duration-200`}>
                              <IconComponent size={20} className={`${dropdownItem.color} group-hover:scale-110 transition-transform duration-200`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200 text-sm leading-tight">
                                {dropdownItem.label}
                              </div>
                              <div className="text-xs text-gray-500 mt-1 leading-tight">
                                {dropdownItem.description}
                              </div>
                            </div>
                            <ChevronDown
                              size={14}
                              className="text-gray-400 group-hover:text-blue-500 transform rotate-[-90deg] group-hover:translate-x-1 transition-all duration-200 mt-1"
                            />
                          </Link>
                        );
                      })}

                      {/* View All Services Link */}
                      <div className="border-t border-gray-100 mt-2 pt-2 px-4">
                        <Link
                          href="/services"
                          className="flex items-center justify-center w-full py-2 px-4 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200 group"
                          onClick={() => handleNavClick('View All Services')}
                          role="menuitem"
                        >
                          <span>View All Services</span>
                          <ChevronDown size={14} className="ml-2 transform rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`font-semibold text-base transition-colors duration-200 py-2 px-3 lg:px-4 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isActiveRoute(item.href) 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-blue-800 hover:text-blue-600'
                  }`}
                  onClick={() => handleNavClick(item.label)}
                  role="menuitem"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}

          {/* Contact Button */}
          <li role="none">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mr-2"
              onClick={() => handleNavClick('Contact')}
              role="menuitem"
            >
              Contact
            </Link>
          </li>

          {/* Login Button */}
          <li role="none">
            <Link
              href="/login"
              className="inline-block bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={() => handleNavClick('Login')}
              role="menuitem"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden mt-4 animate-fade-in-down"
          role="menu"
          aria-labelledby="mobile-menu-button"
        >
          <ul className="flex flex-col space-y-3 bg-blue-50 p-4 rounded-lg shadow-inner border border-blue-200">
            {navigationItems.map((item) => (
              <li key={item.href} role="none">
                <div>
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between font-semibold text-base py-2 px-3 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isActiveRoute(item.href)
                        ? 'text-blue-600 bg-blue-100'
                        : 'text-blue-800 hover:text-blue-600 hover:bg-blue-100'
                    }`}
                    onClick={() => {
                      handleNavClick(item.label);
                      if (!item.hasDropdown) {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    role="menuitem"
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setIsServicesOpen(!isServicesOpen);
                        }}
                        className="ml-2 p-1 rounded hover:bg-blue-200 transition-colors duration-200"
                        aria-label="Toggle services menu"
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            isServicesOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    )}
                  </Link>

                  {/* Mobile dropdown items */}
                  {item.hasDropdown && isServicesOpen && (
                    <ul className="ml-2 mt-3 space-y-2 animate-fade-in bg-white rounded-lg p-3 shadow-lg border border-blue-200">
                      {item.dropdownItems.map((dropdownItem) => {
                        const IconComponent = dropdownItem.icon;
                        return (
                          <li key={dropdownItem.href} role="none">
                            <Link
                              href={dropdownItem.href}
                              className="flex items-center text-sm text-gray-600 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
                              onClick={() => {
                                handleNavClick(dropdownItem.label);
                                setIsMobileMenuOpen(false);
                                setIsServicesOpen(false);
                              }}
                              role="menuitem"
                            >
                              <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors duration-200`}>
                                <IconComponent size={16} className={dropdownItem.color} />
                              </div>
                              <div className="flex-1">
                                <div className="font-medium">{dropdownItem.label}</div>
                                <div className="text-xs text-gray-500 mt-0.5">
                                  {dropdownItem.description}
                                </div>
                              </div>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </li>
            ))}

            {/* Mobile Contact Button */}
            <li role="none">
              <Link
                href="/contact"
                className="block text-center bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md mt-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => {
                  handleNavClick('Contact Mobile');
                  setIsMobileMenuOpen(false);
                }}
                role="menuitem"
              >
                Contact Us
              </Link>
            </li>

            {/* Mobile Login Button */}
            <li role="none">
              <Link
                href="/login"
                className="block text-center bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => {
                  handleNavClick('Login Mobile');
                  setIsMobileMenuOpen(false);
                }}
                role="menuitem"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(-8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes dropdown-in {
          0% {
            opacity: 0;
            transform: translateX(-10px) translateY(-5px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateX(-10px) translateY(0) scale(1);
          }
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.3s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        .animate-dropdown-in {
          animation: dropdown-in 0.25s ease-out;
        }

        /* Ensure smooth hover transitions */
        .services-dropdown:hover .group {
          transition-delay: 0ms;
        }
      `}</style>
    </nav>
  );
}