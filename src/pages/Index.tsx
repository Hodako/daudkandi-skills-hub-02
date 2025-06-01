
import React from 'react';
import { Helmet } from 'react-helmet-async';
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
    <>
      <Helmet>
        <title>TTC Daudkandi Graphics Lab | NSDA Certified Technical Training Center Bangladesh</title>
        <meta name="description" content="TTC Daudkandi Graphics Lab offers government approved NSDA certified graphics design and office management courses in Bangladesh. 100% free training with job placement assistance." />
        <meta name="keywords" content="TTC Daudkandi, Graphics Design Course, NSDA Training, Technical Training Bangladesh, Computer Training, Office Management, Free Training Program, Job Placement" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="TTC Daudkandi Graphics Lab - NSDA Certified Training Center" />
        <meta property="og:description" content="Get professional graphics design and office management training at TTC Daudkandi. Government certified courses with 100% free training and job placement support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ttcdaudkandi.com" />
        <meta property="og:image" content="https://nsda.gov.bd/themes/responsive_npf/img/logo/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TTC Daudkandi Graphics Lab - Technical Training Center" />
        <meta name="twitter:description" content="Professional graphics design and office management training with NSDA certification in Bangladesh." />
        <link rel="canonical" href="https://ttcdaudkandi.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "TTC Daudkandi Graphics Lab",
            "description": "Technical Training Center offering NSDA certified graphics design and office management courses",
            "url": "https://ttcdaudkandi.com",
            "logo": "https://nsda.gov.bd/themes/responsive_npf/img/logo/logo.png",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Daudkandi",
              "addressRegion": "Cumilla",
              "addressCountry": "BD"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+880-XXX-XXXXXX",
              "contactType": "customer service"
            },
            "sameAs": [
              "https://nsda.gov.bd"
            ]
          })}
        </script>
      </Helmet>
      
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
    </>
  );
};

export default Index;
