
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedBanner from '@/components/AnimatedBanner';
import CourseHighlights from '@/components/CourseHighlights';
import StaffSection from '@/components/StaffSection';
import EnhancedNSDAPortal from '@/components/EnhancedNSDAPortal';
import LocationInfo from '@/components/LocationInfo';
import ApplicationForm from '@/components/ApplicationForm';
import GoogleMap from '@/components/GoogleMap';
import GeminiChat from '@/components/GeminiChat';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <AnimatedBanner />
        <CourseHighlights />
        <StaffSection />
        <EnhancedNSDAPortal />
        <ApplicationForm />
        
        {/* Location Section with Google Map */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Find Us
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Visit our training center located in Daudkandi
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <GoogleMap />
            </div>
          </div>
        </section>
        
        <LocationInfo />
      </main>
      <Footer />
      <GeminiChat />
    </div>
  );
};

export default Index;
