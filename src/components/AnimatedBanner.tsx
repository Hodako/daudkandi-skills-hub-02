
import React from 'react';
import { Button } from '@/components/ui/button';

const AnimatedBanner = () => {
  return (
    <section className="relative overflow-hidden animated-gradient text-white py-24">
      {/* Floating shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full float-animation"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full float-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/15 rounded-full float-animation" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white/5 rounded-full float-animation" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <div className="mb-6">
                <span className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <i className="fas fa-certificate mr-2"></i>
                  Government Certified Training
                </span>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Master 
                  <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Graphics Design
                  </span>
                  <span className="block">Skills</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                  Join TTC Daudkandi Graphics Lab - Your Gateway to Professional Design Excellence under NSDA
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-white text-green-700 hover:bg-gray-100 font-semibold px-8 py-4 text-lg pulse-glow"
                  onClick={() => {
                    const applySection = document.getElementById('apply-now');
                    applySection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <i className="fas fa-graduation-cap mr-2"></i>
                  Apply Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-green-700 font-semibold px-8 py-4 text-lg glass-effect"
                  onClick={() => window.open('https://nsda.gov.bd', '_blank')}
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  NSDA Portal
                </Button>
              </div>

  <div className="flex items-center space-x-6 text-sm" style = "color:black">
                <div className="flex items-center">
                  <i className="fas fa-users mr-2 text-yellow-300"></i>
                  <span>25 Seats Available</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-clock mr-2 text-yellow-300"></i>
                  <span>3 Months Course</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-star mr-2 text-yellow-300"></i>
                  <span>Government Certified</span>
                </div>
              </div>
            </div>

            <div className="slide-in-right">
              <div className="relative">
                <div className="glass-effect rounded-3xl p-8 hover-lift">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-2xl text-center">
                      <i className="fas fa-laptop-code text-3xl mb-3"></i>
                      <h3 className="font-semibold">Office Management</h3>
                    </div>
                    <div className="bg-gradient-to-br from-pink-500 to-red-600 p-6 rounded-2xl text-center">
                      <i className="fab fa-adobe text-3xl mb-3"></i>
                      <h3 className="font-semibold">Photoshop</h3>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-500 to-orange-600 p-6 rounded-2xl text-center">
                      <i className="fas fa-palette text-3xl mb-3"></i>
                      <h3 className="font-semibold">Illustrator</h3>
                    </div>
                    <div className="bg-gradient-to-br from-green-500 to-teal-600 p-6 rounded-2xl text-center">
                      <i className="fas fa-certificate text-3xl mb-3"></i>
                      <h3 className="font-semibold">Certification</h3>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold text-sm rotate-12">
                  <i className="fas fa-fire mr-1"></i>
                  FREE Course!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C300,100 400,0 600,40 C800,80 900,20 1200,40 L1200,120 L0,120 Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default AnimatedBanner;
