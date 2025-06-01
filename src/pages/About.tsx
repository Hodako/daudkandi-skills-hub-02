
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - TTC Daudkandi Graphics Lab | Technical Training Center</title>
        <meta name="description" content="Learn about TTC Daudkandi Graphics Lab - a leading technical training center providing NSDA certified graphics design and office management courses in Bangladesh." />
        <meta name="keywords" content="TTC Daudkandi, Graphics Lab, Technical Training, NSDA, Bangladesh, Graphics Design, Office Management, Skills Development" />
        <meta property="og:title" content="About TTC Daudkandi Graphics Lab" />
        <meta property="og:description" content="Empowering individuals with professional graphics design and office management skills through government approved NSDA certified courses." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ttcdaudkandi.com/about" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
        <Header />
        <main className="flex-grow py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            {/* Campus Image Slider */}
            <div className="mb-12 overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-64 sm:h-80 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-600/80 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="TTC Daudkandi Campus"
                  className="w-full h-full object-cover animate-fade-in"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-slide-in-right">
                      About TTC Daudkandi
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl animate-fade-in" style={{animationDelay: '0.5s'}}>
                      Excellence in Technical Education
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                About TTC Daudkandi Graphics Lab
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Empowering individuals with professional graphics design and office management skills
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader className="bg-green-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    To provide quality technical education and training in graphics design and office management, 
                    enabling individuals to develop professional skills and contribute to the digital economy. 
                    We are committed to bridging the skills gap and creating employment opportunities for the youth of Bangladesh.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800 dark:text-white">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    To become a leading technical training center in Bangladesh, recognized for excellence in 
                    graphics design education and producing skilled professionals who can compete globally in 
                    the creative industry.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800 dark:text-white">Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Government approved NSDA certified course
                      </li>
                      <li className="flex items-center text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Experienced and qualified instructors
                      </li>
                      <li className="flex items-center text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Hands-on practical training
                      </li>
                      <li className="flex items-center text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Modern computer lab facilities
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        100% free training program
                      </li>
                      <li className="flex items-center text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Job placement assistance
                      </li>
                      <li className="flex items-center text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Industry-relevant curriculum
                      </li>
                      <li className="flex items-center text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Small class sizes for personalized attention
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800 dark:text-white">Our Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">500+</div>
                      <p className="text-gray-600 dark:text-gray-300">Students Trained</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">80%</div>
                      <p className="text-gray-600 dark:text-gray-300">Job Placement Rate</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">5+</div>
                      <p className="text-gray-600 dark:text-gray-300">Years of Excellence</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
