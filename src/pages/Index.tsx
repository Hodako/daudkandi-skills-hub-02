
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CourseHighlights from '@/components/CourseHighlights';
import StaffSection from '@/components/StaffSection';
import EnhancedNSDAPortal from '@/components/EnhancedNSDAPortal';
import LocationFAQ from '@/components/LocationFAQ';
import ApplicationForm from '@/components/ApplicationForm';
import GoogleMap from '@/components/GoogleMap';
import GeminiChat from '@/components/GeminiChat';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CourseHighlights />
        <StaffSection />
        <EnhancedNSDAPortal />
        <ApplicationForm />
        
        {/* Location Section with Google Map */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4 font-roboto">
                Find Us
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 font-cascadia">
                Visit our training center located in Daudkandi
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <GoogleMap />
            </div>
          </div>
        </section>
        
        <LocationFAQ />
      </main>
      <Footer />
      <GeminiChat />
    </div>
  );
};

export default Index;
