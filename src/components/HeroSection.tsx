
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Banner Image */}
      <div className="relative w-full h-64 sm:h-80 lg:h-96">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Technical_Training_Institute_Daudkandi.png/960px-Technical_Training_Institute_Daudkandi.png"
          alt="Technical Training Institute Daudkandi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 font-roboto leading-tight">
              Technical Training Center
              <span className="block text-xl sm:text-3xl lg:text-5xl mt-2 text-yellow-300 font-berlin">
                Daudkandi Graphics Lab
              </span>
            </h1>
            
            <p className="text-sm sm:text-lg lg:text-2xl mb-6 opacity-90 font-cascadia">
              Professional Graphics Design Training under 
              <span className="font-semibold text-yellow-300"> NSDA</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-green-700 hover:bg-gray-100 font-semibold px-6 py-3 text-sm sm:text-base hover-lift pulse-glow font-roboto"
                onClick={() => {
                  const applySection = document.getElementById('apply-now');
                  applySection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <i className="fas fa-graduation-cap mr-2"></i>
                Apply for Admission
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-green-700 font-semibold px-6 py-3 text-sm sm:text-base glass-effect hover-lift font-roboto"
                onClick={() => window.open('https://nsda.gov.bd', '_blank')}
              >
                <i className="fas fa-external-link-alt mr-2"></i>
                Visit NSDA Portal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
