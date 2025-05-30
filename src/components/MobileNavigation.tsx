
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const MobileNavigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/courses', label: 'Courses' },
    { path: '/staff', label: 'Faculty & Staff' },
    { path: '/admission', label: 'Admission' },
    { path: 'https://nsda.gov.bd', label: 'NSDA Portal', external: true },
  ];

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="lg:hidden bg-background border-t border-border">
      {/* Mobile Menu Toggle */}
      <div className="flex items-center justify-between px-4 py-3">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          )}
        </button>
        
        <span className="text-sm font-medium text-gray-600 dark:text-gray-300 font-roboto">
          Menu
        </span>
        
        <ThemeToggle />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-white dark:bg-gray-800 border-t border-border shadow-lg animate-fade-in">
          <div className="px-4 py-2 space-y-1">
            {navigationItems.map((item) => (
              item.external ? (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:text-green-700 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors font-roboto"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors font-roboto ${
                    isActivePage(item.path)
                      ? 'text-green-700 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-700'
                      : 'text-foreground hover:text-green-700 hover:bg-green-50 dark:hover:bg-green-900/20'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
