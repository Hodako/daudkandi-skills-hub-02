
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CourseHighlights = () => {
  const courseFeatures = [
    {
      title: "Office Management",
      description: "Complete training in office productivity tools and management systems",
      duration: "4 weeks",
      icon: "📊"
    },
    {
      title: "Adobe Photoshop",
      description: "Professional photo editing and digital image manipulation",
      duration: "4 weeks", 
      icon: "🎨"
    },
    {
      title: "Adobe Illustrator", 
      description: "Vector graphics design and professional illustration techniques",
      duration: "4 weeks",
      icon: "✏️"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Graphics Design Course Curriculum
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive 3-month program designed to provide industry-ready skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {courseFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl text-green-700">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  {feature.duration}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="border-r border-gray-200 last:border-r-0">
              <div className="text-3xl font-bold text-green-600">3</div>
              <div className="text-sm text-gray-600">Months Duration</div>
            </div>
            <div className="border-r border-gray-200 last:border-r-0">
              <div className="text-3xl font-bold text-green-600">25</div>
              <div className="text-sm text-gray-600">Available Seats</div>
            </div>
            <div className="border-r border-gray-200 last:border-r-0">
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-sm text-gray-600">Practical Training</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">FREE</div>
              <div className="text-sm text-gray-600">Government Funded</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;
