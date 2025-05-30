
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CourseLogos from './CourseLogos';

const CourseHighlights = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const highlights = [
    {
      icon: 'fas fa-clock',
      title: '3 Month Duration',
      description: 'Comprehensive course designed to be completed in 3 months with practical training',
      color: 'bg-blue-500'
    },
    {
      icon: 'fas fa-certificate',
      title: 'NSDA Certified',
      description: 'Get officially recognized certification from National Skills Development Authority',
      color: 'bg-green-500'
    },
    {
      icon: 'fas fa-users',
      title: 'Limited Seats - 25 Only',
      description: 'Only 25 seats available to ensure quality education and personal attention',
      color: 'bg-purple-500'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Expert Trainers',
      description: 'Learn from industry professionals with years of practical experience',
      color: 'bg-orange-500'
    },
    {
      icon: 'fas fa-laptop',
      title: 'Modern Lab',
      description: 'State-of-the-art computer lab with latest software and equipment',
      color: 'bg-indigo-500'
    },
    {
      icon: 'fas fa-gift',
      title: 'FREE Training',
      description: 'Government funded course - No fees required for enrollment',
      color: 'bg-red-500'
    },
  ];

  const itemsPerSlide = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  };

  const getItemsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return itemsPerSlide.mobile;
      if (window.innerWidth < 1024) return itemsPerSlide.tablet;
    }
    return itemsPerSlide.desktop;
  };

  const [itemsToShow, setItemsToShow] = useState(getItemsPerSlide());

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(getItemsPerSlide());
      setCurrentSlide(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(highlights.length / itemsToShow));
    }, 4000);

    return () => clearInterval(timer);
  }, [highlights.length, itemsToShow]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(highlights.length / itemsToShow));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(highlights.length / itemsToShow)) % Math.ceil(highlights.length / itemsToShow));
  };

  const getCurrentItems = () => {
    const startIndex = currentSlide * itemsToShow;
    return highlights.slice(startIndex, startIndex + itemsToShow);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4 font-roboto">
            Course Highlights
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-cascadia">
            Our Graphics Design course offers comprehensive training with modern tools and expert guidance
          </p>
        </div>

        {/* Slideshow Container */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="flex items-center justify-between">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all z-10 -ml-6"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>

            <div className="flex-1 overflow-hidden mx-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
                {getCurrentItems().map((highlight, index) => (
                  <Card key={currentSlide * itemsToShow + index} className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in">
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 ${highlight.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                        <i className={`${highlight.icon} text-2xl text-white`}></i>
                      </div>
                      <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white font-roboto">
                        {highlight.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 text-center font-cascadia">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all z-10 -mr-6"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(highlights.length / itemsToShow) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-green-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4 font-roboto">
            Software You'll Master
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 font-cascadia">
            Get hands-on experience with industry-standard design software
          </p>
        </div>

        <CourseLogos />

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 px-6 py-3 rounded-lg shadow-lg">
            <Badge variant="secondary" className="bg-green-600 text-white font-roboto">
              Free Training
            </Badge>
            <span className="text-green-700 dark:text-green-400 font-semibold font-roboto">
              Government Funded Course
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;
