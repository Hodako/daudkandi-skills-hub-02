
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CourseLogos from './CourseLogos';

const CourseHighlights = () => {
  const highlights = [
    {
      icon: 'fas fa-clock',
      title: '3 Month Duration',
      description: 'Comprehensive course designed to be completed in 3 months with practical training',
    },
    {
      icon: 'fas fa-certificate',
      title: 'NSDA Certified',
      description: 'Get officially recognized certification from National Skills Development Authority',
    },
    {
      icon: 'fas fa-users',
      title: 'Limited Seats',
      description: 'Only 25 seats available to ensure quality education and personal attention',
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Expert Trainers',
      description: 'Learn from industry professionals with years of practical experience',
    },
    {
      icon: 'fas fa-laptop',
      title: 'Modern Lab',
      description: 'State-of-the-art computer lab with latest software and equipment',
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Job Placement',
      description: 'Career guidance and job placement assistance after course completion',
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Course Highlights
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our Graphics Design course offers comprehensive training with modern tools and expert guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${highlight.icon} text-2xl text-green-600 dark:text-green-400`}></i>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
                  {highlight.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Software You'll Master
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Get hands-on experience with industry-standard design software
          </p>
        </div>

        <CourseLogos />

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-green-50 dark:bg-green-900/20 px-6 py-3 rounded-lg">
            <Badge variant="secondary" className="bg-green-600 text-white">
              Free Training
            </Badge>
            <span className="text-green-700 dark:text-green-400 font-semibold">
              Government Funded Course
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;
