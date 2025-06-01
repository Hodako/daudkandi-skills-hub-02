
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
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white max-w-4xl w-full">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 font-roboto leading-tight text-white">
              {/* Hide "Technical Training Center" on mobile */}
              <span className="hidden sm:block">Technical Training Center</span>
              <span className="block text-xl sm:text-3xl lg:text-5xl mt-2 text-yellow-300 font-berlin">
                Daudkandi Graphics Lab
              </span>
            </h1>
            
            <p className="text-sm sm:text-lg lg:text-2xl mb-6 opacity-90 font-cascadia text-white">
              Master professional graphics design with our comprehensive 3-month program. 
              Learn Office Management, Adobe Photoshop, and Illustrator under 
              <span className="font-semibold text-yellow-300"> NSDA certification.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-8 mb-8">
              <Button 
                size="lg" 
                className="bg-green-600 text-white hover:bg-green-700 font-semibold px-6 py-3 text-sm sm:text-base hover-lift pulse-glow font-roboto w-full sm:w-auto"
                onClick={() => {
                  const applySection = document.getElementById('apply-now');
                  applySection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <i className="fas fa-graduation-cap mr-2"></i>
                Apply Now - FREE Course
                <i className="fas fa-arrow-down ml-2"></i>
              </Button>
              {/* NSDA Portal button - hidden on mobile */}
              <Button 
                size="lg" 
                variant="outline" 
                className="hidden sm:flex border-2 border-white text-green-600 bg-white hover:bg-green-50 hover:text-green-700 font-semibold px-6 py-3 text-sm sm:text-base glass-effect hover-lift font-roboto w-full sm:w-auto ml-4"
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
