
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                About TTC Daudkandi Graphics Lab
              </h1>
              <p className="text-lg text-gray-600">
                Empowering youth through professional graphics design education
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-green-700">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To provide high-quality technical training in graphics design and office management, 
                    empowering young people with industry-relevant skills for better employment opportunities 
                    and economic development.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-green-700">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To become a leading technical training center in the region, producing skilled 
                    graphics designers who contribute to Bangladesh's digital economy and creative industry growth.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">About NSDA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  The National Skills Development Authority (NSDA) is the apex body for skills development 
                  in Bangladesh, established under the Ministry of Education. NSDA coordinates and oversees 
                  all skills development activities in the country.
                </p>
                <p className="text-gray-600 mb-4">
                  Our training center operates under NSDA's guidelines and standards, ensuring that our 
                  students receive internationally recognized training that meets industry requirements.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Government-funded training programs</li>
                    <li>Industry-standard curriculum</li>
                    <li>Modern equipment and facilities</li>
                    <li>Experienced and certified instructors</li>
                    <li>Job placement assistance</li>
                    <li>NSDA certified completion certificates</li>
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

export default About;
