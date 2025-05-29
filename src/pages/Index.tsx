
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedBanner from '@/components/AnimatedBanner';
import CourseHighlights from '@/components/CourseHighlights';
import StaffSection from '@/components/StaffSection';
import EnhancedNSDAPortal from '@/components/EnhancedNSDAPortal';
import LocationInfo from '@/components/LocationInfo';
import ApplicationForm from '@/components/ApplicationForm';

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
        <LocationInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
