
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Courses = () => {
  const courseModules = [
    {
      week: "Week 1-4",
      title: "Office Management",
      topics: [
        "Microsoft Word - Document creation and formatting",
        "Microsoft Excel - Spreadsheet management and formulas", 
        "Microsoft PowerPoint - Presentation design",
        "Email management and professional communication",
        "File organization and data management",
        "Office productivity techniques"
      ]
    },
    {
      week: "Week 5-8", 
      title: "Adobe Photoshop",
      topics: [
        "Photoshop interface and workspace",
        "Layer management and blending modes",
        "Photo editing and retouching techniques",
        "Color correction and adjustment",
        "Selection tools and masking",
        "Text effects and typography",
        "Digital art and manipulation"
      ]
    },
    {
      week: "Week 9-12",
      title: "Adobe Illustrator", 
      topics: [
        "Vector graphics fundamentals",
        "Drawing tools and pen tool mastery",
        "Logo design and branding",
        "Typography and text effects",
        "Color theory and palettes",
        "Print design and layouts",
        "Portfolio development"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Header />
      <main className="flex-grow py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Graphics Design Course
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive 3-month program covering essential graphics design and office management skills
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <Card className="mb-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader className="bg-green-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl">Course Overview</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Course Details</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li><span className="font-medium">Duration:</span> 3 Months (12 Weeks)</li>
                      <li><span className="font-medium">Class Size:</span> Maximum 25 Students</li>
                      <li><span className="font-medium">Schedule:</span> 6 days per week</li>
                      <li><span className="font-medium">Mode:</span> Hands-on Practical Training</li>
                      <li><span className="font-medium">Certification:</span> NSDA Certified</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Prerequisites</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Basic computer literacy</li>
                      <li>• High school education or equivalent</li>
                      <li>• Age: 18-35 years</li>
                      <li>• Commitment to complete the course</li>
                      <li>• No prior graphics experience required</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {courseModules.map((module, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-gray-800 dark:text-white">{module.title}</CardTitle>
                      <Badge variant="secondary" className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                        {module.week}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {module.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600 dark:text-gray-300">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800 dark:text-white">Career Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Upon successful completion of this course, graduates will be equipped for various career paths:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Graphic Designer
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Digital Marketing Assistant
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Office Administrator
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Freelance Designer
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Print Media Designer
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Small Business Owner
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
