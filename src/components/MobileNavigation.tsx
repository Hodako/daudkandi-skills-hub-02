
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MobileNavigation = () => {
  const location = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/courses', label: 'Courses' },
    { path: '/staff', label: 'Faculty & Staff' },
    { path: '/admission', label: 'Admission' },
    { path: 'https://nsda.gov.bd', label: 'NSDA Portal', external: true },
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(navigationItems.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  const getCurrentItems = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return navigationItems.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <div className="sm:hidden bg-background border-t border-border">
      <div className="flex items-center justify-between px-4 py-2">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          disabled={totalSlides <= 1}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        
        <div className="flex-1 flex justify-center space-x-2">
          {getCurrentItems().map((item) => (
            item.external ? (
              <a
                key={item.path}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded text-xs font-medium text-foreground hover:text-green-700 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded text-xs font-medium transition-colors ${
                  isActivePage(item.path)
                    ? 'text-green-700 bg-green-50 dark:bg-green-900/20'
                    : 'text-foreground hover:text-green-700 hover:bg-green-50 dark:hover:bg-green-900/20'
                }`}
              >
                {item.label}
              </Link>
            )
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          disabled={totalSlides <= 1}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      
      {totalSlides > 1 && (
        <div className="flex justify-center pb-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 mx-1 rounded-full ${
                index === currentSlide ? 'bg-green-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
