
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
      color: 'bg-blue-500',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=200&fit=crop'
    },
    {
      icon: 'fas fa-certificate',
      title: 'NSDA Certified',
      description: 'Get officially recognized certification from National Skills Development Authority',
      color: 'bg-green-500',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop'
    },
    {
      icon: 'fas fa-users',
      title: 'Limited Seats - 25 Only',
      description: 'Only 25 seats available to ensure quality education and personal attention',
      color: 'bg-purple-500',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Expert Trainers',
      description: 'Learn from industry professionals with years of practical experience',
      color: 'bg-orange-500',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop'
    },
    {
      icon: 'fas fa-laptop',
      title: 'Modern Lab',
      description: 'State-of-the-art computer lab with latest software and equipment',
      color: 'bg-indigo-500',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop'
    },
    {
      icon: 'fas fa-gift',
      title: 'FREE Training',
      description: 'Government funded course - No fees required for enrollment',
      color: 'bg-red-500',
      image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=300&h=200&fit=crop'
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
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4 font-roboto">
            Course Highlights
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-cascadia">
            Our Graphics Design course offers comprehensive training with modern tools and expert guidance
          </p>
        </div>

        {/* Slideshow Container */}
        <div className="relative max-w-6xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-between">
            <button
              onClick={prevSlide}
              className="hidden sm:block p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all z-10 -ml-6"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>

            <div className="flex-1 overflow-hidden mx-0 sm:mx-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 transition-all duration-500">
                {getCurrentItems().map((highlight, index) => (
                  <Card key={currentSlide * itemsToShow + index} className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in overflow-hidden">
                    <div className="relative">
                      <img 
                        src={highlight.image} 
                        alt={highlight.title}
                        className="w-full h-32 sm:h-40 object-cover"
                      />
                      <div className={`absolute top-2 right-2 w-12 h-12 ${highlight.color} rounded-full flex items-center justify-center shadow-lg`}>
                        <i className={`${highlight.icon} text-lg text-white`}></i>
                      </div>
                    </div>
                    <CardHeader className="text-center pb-2">
                      <CardTitle className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white font-roboto">
                        {highlight.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center font-cascadia">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="hidden sm:block p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all z-10 -mr-6"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          {/* Mobile navigation buttons */}
          <div className="flex justify-center mt-4 space-x-4 sm:hidden">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-300" />
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

        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4 font-roboto">
            Software You'll Master
          </h3>
          <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 font-cascadia">
            Get hands-on experience with industry-standard design software
          </p>
        </div>

        <CourseLogos />

        <div className="text-center mt-8 sm:mt-12">
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
