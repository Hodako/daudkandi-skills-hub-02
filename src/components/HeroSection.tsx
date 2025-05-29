
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Technical Training Center
            <span className="block text-3xl md:text-4xl mt-2">Daudkandi Graphics Lab</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Professional Graphics Design Training under NSDA
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Empowering youth with modern graphics design skills through comprehensive training in 
            Office Management, Adobe Photoshop, and Adobe Illustrator
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-green-700 hover:bg-gray-100 font-semibold px-8 py-3"
            >
              Apply for Admission
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-green-700 font-semibold px-8 py-3"
              onClick={() => window.open('https://nsda.gov.bd', '_blank')}
            >
              Visit NSDA Portal
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
