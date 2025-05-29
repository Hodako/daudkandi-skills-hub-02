
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-md">
      {/* Top Government Bar */}
      <div className="bg-green-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
              <span>গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</span>
              <span className="hidden sm:inline">|</span>
              <span>Government of the People's Republic of Bangladesh</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
              <span>৫ পৌষ ১৪৩১</span>
              <span className="hidden sm:inline">|</span>
              <span>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-4">
            <img 
              src="https://nsda.gov.bd/themes/responsive_npf/img/logo/logo.png" 
              alt="NSDA Logo" 
              className="h-12 w-12 sm:h-16 sm:w-16"
            />
            <div className="text-center lg:text-left">
              <h1 className="text-lg sm:text-2xl font-bold text-gray-800">
                TTC Daudkandi Graphics Lab
              </h1>
              <p className="text-xs sm:text-sm text-gray-600">
                Technical Training Center - NSDA
              </p>
              <p className="text-xs text-gray-500">
                National Skills Development Authority
              </p>
            </div>
          </div>
          <div className="text-center lg:text-right">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg" 
              alt="Bangladesh Flag" 
              className="h-8 w-16 sm:h-12 sm:w-20 mx-auto lg:ml-auto"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 border-t border-gray-200 pt-4">
          <ul className="flex flex-wrap justify-center lg:justify-start space-x-2 sm:space-x-8 text-xs sm:text-sm font-medium">
            <li>
              <Link 
                to="/" 
                className={`px-2 py-1 rounded transition-colors ${
                  isActivePage('/') 
                    ? 'text-green-700 border-b-2 border-green-700 bg-green-50' 
                    : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`px-2 py-1 rounded transition-colors ${
                  isActivePage('/about') 
                    ? 'text-green-700 border-b-2 border-green-700 bg-green-50' 
                    : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/courses" 
                className={`px-2 py-1 rounded transition-colors ${
                  isActivePage('/courses') 
                    ? 'text-green-700 border-b-2 border-green-700 bg-green-50' 
                    : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link 
                to="/staff" 
                className={`px-2 py-1 rounded transition-colors ${
                  isActivePage('/staff') 
                    ? 'text-green-700 border-b-2 border-green-700 bg-green-50' 
                    : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                Faculty & Staff
              </Link>
            </li>
            <li>
              <Link 
                to="/admission" 
                className={`px-2 py-1 rounded transition-colors ${
                  isActivePage('/admission') 
                    ? 'text-green-700 border-b-2 border-green-700 bg-green-50' 
                    : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                Admission
              </Link>
            </li>
            <li>
              <a 
                href="https://nsda.gov.bd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-700 hover:bg-green-50 px-2 py-1 rounded transition-colors"
              >
                NSDA Portal
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
