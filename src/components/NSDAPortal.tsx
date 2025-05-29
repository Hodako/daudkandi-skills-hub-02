
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const NSDAPortal = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-green-200">
            <CardHeader className="text-center bg-green-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl mb-2">NSDA Online Portal</CardTitle>
              <p className="text-green-100">National Skills Development Authority</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Portal Services</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Online Course Registration
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Digital Certificates
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Training Center Directory
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Student Progress Tracking
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Employment Opportunities
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="bg-gray-100 p-6 rounded-lg mb-6">
                    <img 
                      src="https://nsda.gov.bd/assets/images/logo.png" 
                      alt="NSDA Logo" 
                      className="h-20 w-20 mx-auto mb-4"
                    />
                    <p className="text-sm text-gray-600">
                      Access official NSDA services and resources
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      size="lg" 
                      className="w-full bg-green-600 hover:bg-green-700"
                      onClick={() => window.open('https://nsda.gov.bd', '_blank')}
                    >
                      Visit NSDA Main Portal
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="w-full border-green-600 text-green-600 hover:bg-green-50"
                      onClick={() => window.open('https://nsda.gov.bd/online-portal', '_blank')}
                    >
                      Access Online Services
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NSDAPortal;
