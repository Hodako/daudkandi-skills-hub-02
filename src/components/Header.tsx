
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import MobileNavigation from './MobileNavigation';

const Header = () => {
  const location = useLocation();

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-background/95 backdrop-blur-md shadow-md border-b relative">
      {/* Main Header */}
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Layout */}
          <div className="flex items-center space-x-2 lg:hidden">
            <img 
              src="https://nsda.gov.bd/themes/responsive_npf/img/logo/logo.png" 
              alt="NSDA Logo" 
              className="h-6 w-6 sm:h-8 sm:w-8"
            />
            <div>
              <h1 className="text-xs sm:text-sm font-bold text-foreground font-roboto">
                TTC Daudkandi Graphics Lab
              </h1>
              <p className="text-xs text-muted-foreground font-cascadia">
                Technical Training Center
              </p>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center space-x-4">
            <img 
              src="https://nsda.gov.bd/themes/responsive_npf/img/logo/logo.png" 
              alt="NSDA Logo" 
              className="h-16 w-16"
            />
            <div>
              <h1 className="text-2xl font-bold text-foreground font-roboto">
                TTC Daudkandi Graphics Lab
              </h1>
              <p className="text-sm text-muted-foreground font-cascadia">
                Technical Training Center - NSDA
              </p>
              <p className="text-xs text-muted-foreground font-cascadia">
                National Skills Development Authority
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg" 
              alt="Bangladesh Flag" 
              className="h-4 w-8 sm:h-6 sm:w-12 lg:h-12 lg:w-20"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="mt-4 border-t border-border pt-4 hidden lg:block">
          <ul className="flex justify-center lg:justify-start space-x-8 text-sm font-medium">
            <li>
              <Link 
                to="/" 
                className={`px-3 py-2 rounded transition-colors font-roboto ${
                  isActivePage('/') 
                    ? 'text-green-700 border-b-2 border-green-700 bg-green-50 dark:bg-green-900/20' 
                    : 'text-foreground hover:text-green-700 hover:bg-green-50 dark:hover:bg-green-900/20'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`px-3 py-2 rounded transition-colors font-roboto ${
                  isActivePage('/about') 
                    ? 'text-green-700 border-b-2 border-green-700 bg-green-50 dark:bg-green-900/20' 
                    : 'text-foreground hover:text-green-700 hover:bg-green-50 dark:hover:bg-green-900/20'
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/courses" 
                className={`px-3 py-2 rounded transition-colors font-roboto ${
                  isActivePage('/courses') 
                    ? 'text-green-700 border-b-2 border-green-700 bg-green-50 dark:bg-green-900/20' 
                    : 'text-foreground hover:text-green-700 hover:bg-green-50 dark:hover:bg-green-900/20'
                }`}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link 
                to="/staff" 
                className={`px-3 py-2 rounded transition-colors font-roboto ${
                  isActivePage('/staff') 
                    ? 'text-green-700 border-b-2 border-green-700 bg-green-50 dark:bg-green-900/20' 
                    : 'text-foreground hover:text-green-700 hover:bg-green-50 dark:hover:bg-green-900/20'
                }`}
              >
                Faculty & Staff
              </Link>
            </li>
            <li>
              <Link 
                to="/admission" 
                className={`px-3 py-2 rounded transition-colors font-roboto ${
                  isActivePage('/admission') 
                    ? 'text-green-700 border-b-2 border-green-700 bg-green-50 dark:bg-green-900/20' 
                    : 'text-foreground hover:text-green-700 hover:bg-green-50 dark:hover:bg-green-900/20'
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
                className="text-foreground hover:text-green-700 hover:bg-green-50 dark:hover:bg-green-900/20 px-3 py-2 rounded transition-colors font-roboto"
              >
                NSDA Portal
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation />
    </header>
  );
};

export default Header;
