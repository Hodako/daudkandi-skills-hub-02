
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CourseHighlights from '@/components/CourseHighlights';
import StaffSection from '@/components/StaffSection';
import NSDAPortal from '@/components/NSDAPortal';
import LocationInfo from '@/components/LocationInfo';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CourseHighlights />
        <StaffSection />
        <NSDAPortal />
        <LocationInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
