
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const campusImages = [
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800",
      title: "Computer Lab"
    },
    {
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800", 
      title: "Training Session"
    },
    {
      url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
      title: "Programming Class"
    },
    {
      url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800",
      title: "Workshop Area"
    },
    {
      url: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800",
      title: "Modern Facility"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % campusImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [campusImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % campusImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + campusImages.length) % campusImages.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4 font-roboto">
                About TTC Daudkandi Graphics Lab
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 font-cascadia">
                Empowering youth through professional graphics design education
              </p>
            </div>

            {/* Campus Images Slideshow */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8 font-roboto">
                Our Campus
              </h2>
              <div className="relative max-w-4xl mx-auto">
                <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={campusImages[currentImageIndex].url}
                    alt={campusImages[currentImageIndex].title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold font-roboto">{campusImages[currentImageIndex].title}</h3>
                  </div>
                  
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6 text-white" />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6 text-white" />
                  </button>
                </div>
                
                <div className="flex justify-center mt-4 space-x-2">
                  {campusImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-green-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="transform hover:scale-105 transition-all duration-300 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-green-700 font-roboto flex items-center">
                    <i className="fas fa-bullseye mr-3"></i>
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 font-cascadia">
                    To provide high-quality technical training in graphics design and office management, 
                    empowering young people with industry-relevant skills for better employment opportunities 
                    and economic development.
                  </p>
                </CardContent>
              </Card>

              <Card className="transform hover:scale-105 transition-all duration-300 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-green-700 font-roboto flex items-center">
                    <i className="fas fa-eye mr-3"></i>
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 font-cascadia">
                    To become a leading technical training center in the region, producing skilled 
                    graphics designers who contribute to Bangladesh's digital economy and creative industry growth.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl text-white font-roboto flex items-center">
                  <i className="fas fa-university mr-3"></i>
                  About NSDA
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4 font-cascadia">
                  The National Skills Development Authority (NSDA) is the apex body for skills development 
                  in Bangladesh, established under the Ministry of Education. NSDA coordinates and oversees 
                  all skills development activities in the country.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 font-cascadia">
                  Our training center operates under NSDA's guidelines and standards, ensuring that our 
                  students receive internationally recognized training that meets industry requirements.
                </p>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-700 dark:text-green-400 mb-4 font-roboto flex items-center">
                    <i className="fas fa-star mr-2"></i>
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600 dark:text-gray-300 font-cascadia">
                        <i className="fas fa-check-circle text-green-500 mr-2"></i>
                        Government-funded training programs
                      </li>
                      <li className="flex items-center text-gray-600 dark:text-gray-300 font-cascadia">
                        <i className="fas fa-check-circle text-green-500 mr-2"></i>
                        Industry-standard curriculum
                      </li>
                      <li className="flex items-center text-gray-600 dark:text-gray-300 font-cascadia">
                        <i className="fas fa-check-circle text-green-500 mr-2"></i>
                        Modern equipment and facilities
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600 dark:text-gray-300 font-cascadia">
                        <i className="fas fa-check-circle text-green-500 mr-2"></i>
                        Experienced and certified instructors
                      </li>
                      <li className="flex items-center text-gray-600 dark:text-gray-300 font-cascadia">
                        <i className="fas fa-check-circle text-green-500 mr-2"></i>
                        Job placement assistance
                      </li>
                      <li className="flex items-center text-gray-600 dark:text-gray-300 font-cascadia">
                        <i className="fas fa-check-circle text-green-500 mr-2"></i>
                        NSDA certified completion certificates
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
