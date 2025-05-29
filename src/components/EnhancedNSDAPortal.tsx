
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const EnhancedNSDAPortal = () => {
  const [activeTab, setActiveTab] = useState('portal');

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <i className="fas fa-globe mr-3 text-blue-600"></i>
              NSDA Online Portal
            </h2>
            <p className="text-xl text-gray-600">
              Access official NSDA services and resources from our integrated portal
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="portal" className="flex items-center">
                <i className="fas fa-desktop mr-2"></i>
                NSDA Portal
              </TabsTrigger>
              <TabsTrigger value="services" className="flex items-center">
                <i className="fas fa-cogs mr-2"></i>
                Services
              </TabsTrigger>
              <TabsTrigger value="resources" className="flex items-center">
                <i className="fas fa-book mr-2"></i>
                Resources
              </TabsTrigger>
            </TabsList>

            <TabsContent value="portal" className="space-y-6">
              <Card className="glass-effect">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center">
                    <i className="fas fa-external-link-alt mr-3"></i>
                    NSDA Main Portal
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative">
                    <iframe
                      src="https://nsda.gov.bd"
                      className="w-full h-[600px] border-0 rounded-b-lg"
                      title="NSDA Portal"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    />
                    <div className="absolute top-4 right-4">
                      <Button
                        onClick={() => window.open('https://nsda.gov.bd', '_blank')}
                        className="bg-white/90 text-gray-800 hover:bg-white"
                        size="sm"
                      >
                        <i className="fas fa-external-link-alt mr-2"></i>
                        Open in New Tab
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="services" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover-lift glass-effect">
                  <CardContent className="p-6 text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-user-graduate text-2xl text-blue-600"></i>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Course Registration</h3>
                    <p className="text-gray-600 mb-4">Register for various skill development courses</p>
                    <Button 
                      onClick={() => window.open('https://nsda.gov.bd/online-portal/registration', '_blank')}
                      className="w-full"
                    >
                      Register Now
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover-lift glass-effect">
                  <CardContent className="p-6 text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-certificate text-2xl text-green-600"></i>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Digital Certificates</h3>
                    <p className="text-gray-600 mb-4">Download and verify your certificates</p>
                    <Button 
                      onClick={() => window.open('https://nsda.gov.bd/certificates', '_blank')}
                      className="w-full"
                    >
                      View Certificates
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover-lift glass-effect">
                  <CardContent className="p-6 text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-briefcase text-2xl text-purple-600"></i>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Job Portal</h3>
                    <p className="text-gray-600 mb-4">Find employment opportunities</p>
                    <Button 
                      onClick={() => window.open('https://nsda.gov.bd/jobs', '_blank')}
                      className="w-full"
                    >
                      Browse Jobs
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover-lift glass-effect">
                  <CardContent className="p-6 text-center">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-chart-line text-2xl text-orange-600"></i>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Progress Tracking</h3>
                    <p className="text-gray-600 mb-4">Monitor your learning progress</p>
                    <Button 
                      onClick={() => window.open('https://nsda.gov.bd/progress', '_blank')}
                      className="w-full"
                    >
                      Track Progress
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover-lift glass-effect">
                  <CardContent className="p-6 text-center">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-school text-2xl text-red-600"></i>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Training Centers</h3>
                    <p className="text-gray-600 mb-4">Find nearby training centers</p>
                    <Button 
                      onClick={() => window.open('https://nsda.gov.bd/centers', '_blank')}
                      className="w-full"
                    >
                      Find Centers
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover-lift glass-effect">
                  <CardContent className="p-6 text-center">
                    <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-headset text-2xl text-teal-600"></i>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Support</h3>
                    <p className="text-gray-600 mb-4">Get help and support</p>
                    <Button 
                      onClick={() => window.open('https://nsda.gov.bd/support', '_blank')}
                      className="w-full"
                    >
                      Get Support
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="resources" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <i className="fas fa-download mr-3 text-blue-600"></i>
                      Download Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <i className="fas fa-file-pdf text-red-500 mr-3"></i>
                        <span>Course Curriculum</span>
                      </div>
                      <Button size="sm" variant="outline">Download</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <i className="fas fa-file-word text-blue-500 mr-3"></i>
                        <span>Application Form</span>
                      </div>
                      <Button size="sm" variant="outline">Download</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <i className="fas fa-file-image text-green-500 mr-3"></i>
                        <span>Brochure</span>
                      </div>
                      <Button size="sm" variant="outline">Download</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <i className="fas fa-link mr-3 text-green-600"></i>
                      Quick Links
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start"
                      onClick={() => window.open('https://bteb.gov.bd', '_blank')}
                    >
                      <i className="fas fa-external-link-alt mr-3"></i>
                      BTEB Website
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start"
                      onClick={() => window.open('https://moedu.gov.bd', '_blank')}
                    >
                      <i className="fas fa-external-link-alt mr-3"></i>
                      Ministry of Education
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start"
                      onClick={() => window.open('https://forms.gov.bd', '_blank')}
                    >
                      <i className="fas fa-external-link-alt mr-3"></i>
                      Government Forms
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default EnhancedNSDAPortal;
