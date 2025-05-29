
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      {/* Top Government Bar */}
      <div className="bg-green-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span>গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</span>
              <span>|</span>
              <span>Government of the People's Republic of Bangladesh</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>৫ পৌষ ১৪৩১</span>
              <span>|</span>
              <span>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="https://nsda.gov.bd/assets/images/logo.png" 
              alt="NSDA Logo" 
              className="h-16 w-16"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                TTC Daudkandi Graphics Lab
              </h1>
              <p className="text-sm text-gray-600">
                Technical Training Center - NSDA
              </p>
              <p className="text-xs text-gray-500">
                National Skills Development Authority
              </p>
            </div>
          </div>
          <div className="text-right">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg" 
              alt="Bangladesh Flag" 
              className="h-12 w-20 ml-auto"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 border-t border-gray-200 pt-4">
          <ul className="flex space-x-8 text-sm font-medium">
            <li>
              <Link to="/" className="text-green-700 hover:text-green-800 border-b-2 border-green-700 pb-1">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-600 hover:text-green-700">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/courses" className="text-gray-600 hover:text-green-700">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/staff" className="text-gray-600 hover:text-green-700">
                Faculty & Staff
              </Link>
            </li>
            <li>
              <Link to="/admission" className="text-gray-600 hover:text-green-700">
                Admission
              </Link>
            </li>
            <li>
              <a 
                href="https://nsda.gov.bd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-700"
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
