
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const EnhancedNSDAPortal = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            <i className="fas fa-globe mr-3 text-green-600"></i>
            NSDA Online Portal
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Access official NSDA services, resources, and training programs through our integrated portal
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="services" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 mb-8">
              <TabsTrigger value="services" className="text-xs sm:text-sm">Services</TabsTrigger>
              <TabsTrigger value="resources" className="text-xs sm:text-sm">Resources</TabsTrigger>
              <TabsTrigger value="portal" className="text-xs sm:text-sm">Quick Access</TabsTrigger>
            </TabsList>

            <TabsContent value="services" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="glass-effect hover-lift">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center text-green-700">
                      <i className="fas fa-user-graduate mr-3"></i>
                      Online Registration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">Register for courses and training programs directly through the NSDA portal</p>
                  </CardContent>
                </Card>

                <Card className="glass-effect hover-lift">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center text-blue-700">
                      <i className="fas fa-certificate mr-3"></i>
                      Digital Certificates
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">Download and verify your training certificates online</p>
                  </CardContent>
                </Card>

                <Card className="glass-effect hover-lift">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center text-purple-700">
                      <i className="fas fa-chart-line mr-3"></i>
                      Progress Tracking
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">Monitor your learning progress and course completion status</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="resources" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-800">Learning Materials</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center">
                        <i className="fas fa-book text-green-500 mr-3"></i>
                        Course handbooks and guides
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-video text-blue-500 mr-3"></i>
                        Video tutorials and demonstrations
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-download text-purple-500 mr-3"></i>
                        Downloadable software and tools
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-tasks text-orange-500 mr-3"></i>
                        Practice exercises and projects
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-800">Support Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center">
                        <i className="fas fa-headset text-green-500 mr-3"></i>
                        24/7 Technical support
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-users text-blue-500 mr-3"></i>
                        Student community forums
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-briefcase text-purple-500 mr-3"></i>
                        Career guidance and placement
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-calendar text-orange-500 mr-3"></i>
                        Live webinars and workshops
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="portal" className="space-y-6">
              <Card className="glass-effect">
                <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl flex items-center">
                    <i className="fas fa-external-link-alt mr-3"></i>
                    Quick Portal Access
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="bg-gray-100 p-6 rounded-lg mb-6 text-center">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/en/3/37/National_Skills_Development_Authority_logo.png" 
                          alt="NSDA Logo" 
                          className="h-16 w-16 sm:h-20 sm:w-20 mx-auto mb-4"
                        />
                        <p className="text-sm text-gray-600">
                          National Skills Development Authority
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          Government of Bangladesh
                        </p>
                      </div>
                      
                      <div className="text-center space-y-2 text-sm text-gray-600">
                        <p><i className="fas fa-clock mr-2"></i>Available 24/7</p>
                        <p><i className="fas fa-shield-alt mr-2"></i>Secure Access</p>
                        <p><i className="fas fa-mobile-alt mr-2"></i>Mobile Friendly</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <Button 
                        size="lg" 
                        className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-4 text-lg pulse-glow"
                        onClick={() => window.open('https://nsda.gov.bd', '_blank')}
                      >
                        <i className="fas fa-external-link-alt mr-3"></i>
                        Visit NSDA Portal
                      </Button>
                      
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="w-full border-green-600 text-green-600 hover:bg-green-50 font-semibold py-4 text-lg"
                        onClick={() => window.open('https://nsda.gov.bd/training-centers', '_blank')}
                      >
                        <i className="fas fa-building mr-3"></i>
                        Training Centers
                      </Button>
                      
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-4 text-lg"
                        onClick={() => window.open('https://nsda.gov.bd/courses', '_blank')}
                      >
                        <i className="fas fa-graduation-cap mr-3"></i>
                        Browse All Courses
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default EnhancedNSDAPortal;
