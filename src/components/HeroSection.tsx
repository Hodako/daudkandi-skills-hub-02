
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-green-700 to-blue-800 text-white py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full float-animation"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full float-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-white/5 rounded-full float-animation" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="fade-in-up">
            <div className="inline-flex items-center bg-white/20 px-6 py-3 rounded-full text-sm font-medium mb-6 glass-effect">
              <i className="fas fa-award mr-2 text-yellow-300"></i>
              Government Approved Training Center
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Technical Training Center
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent text-4xl md:text-6xl mt-2">
                Daudkandi Graphics Lab
              </span>
            </h1>
            
            <p className="text-xl md:text-3xl mb-6 opacity-90 font-light">
              Professional Graphics Design Training under 
              <span className="font-semibold text-yellow-300"> NSDA</span>
            </p>
            
            <p className="text-lg mb-10 max-w-4xl mx-auto opacity-80 leading-relaxed">
              Empowering youth with modern graphics design skills through comprehensive training in 
              Office Management, Adobe Photoshop, and Adobe Illustrator. Join our 3-month government-certified program.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 slide-in-left">
            <Button 
              size="lg" 
              className="bg-white text-green-700 hover:bg-gray-100 font-semibold px-10 py-4 text-lg hover-lift pulse-glow"
              onClick={() => {
                const applySection = document.getElementById('apply-now');
                applySection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <i className="fas fa-graduation-cap mr-3"></i>
              Apply for Admission
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-green-700 font-semibold px-10 py-4 text-lg glass-effect hover-lift"
              onClick={() => window.open('https://nsda.gov.bd', '_blank')}
            >
              <i className="fas fa-external-link-alt mr-3"></i>
              Visit NSDA Portal
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 slide-in-right">
            <div className="glass-effect p-6 rounded-2xl hover-lift">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-yellow-900 text-xl"></i>
              </div>
              <h3 className="font-semibold text-lg mb-2">25 Seats</h3>
              <p className="text-sm opacity-80">Limited seats available</p>
            </div>
            
            <div className="glass-effect p-6 rounded-2xl hover-lift">
              <div className="bg-blue-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clock text-blue-900 text-xl"></i>
              </div>
              <h3 className="font-semibold text-lg mb-2">3 Months</h3>
              <p className="text-sm opacity-80">Intensive training program</p>
            </div>
            
            <div className="glass-effect p-6 rounded-2xl hover-lift">
              <div className="bg-green-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-certificate text-green-900 text-xl"></i>
              </div>
              <h3 className="font-semibold text-lg mb-2">Certified</h3>
              <p className="text-sm opacity-80">Government certification</p>
            </div>
            
            <div className="glass-effect p-6 rounded-2xl hover-lift">
              <div className="bg-purple-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-gift text-purple-900 text-xl"></i>
              </div>
              <h3 className="font-semibold text-lg mb-2">FREE</h3>
              <p className="text-sm opacity-80">No course fees</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 C300,120 400,0 600,50 C800,100 900,30 1200,50 L1200,120 L0,120 Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
