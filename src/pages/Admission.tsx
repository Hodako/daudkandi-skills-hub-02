
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Admission = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Admission Information
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our Graphics Design program and start your journey towards a successful career
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader className="bg-green-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl">Admission Requirements</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Educational Requirements</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Minimum HSC/SSC or equivalent</li>
                      <li>• Basic computer knowledge</li>
                      <li>• English reading capability</li>
                      <li>• Willingness to learn</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">General Requirements</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Age: 18-35 years</li>
                      <li>• Bangladeshi citizen</li>
                      <li>• Physically and mentally fit</li>
                      <li>• Commitment to complete course</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Educational certificates (SSC/HSC)
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      National ID card copy
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Birth certificate copy
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Passport size photographs (4 copies)
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Guardian's consent (if under 21)
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Medical fitness certificate
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Admission Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Badge className="bg-green-600">1</Badge>
                    <div>
                      <h4 className="font-semibold text-gray-800">Application Submission</h4>
                      <p className="text-gray-600">Submit completed application form with required documents</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Badge className="bg-green-600">2</Badge>
                    <div>
                      <h4 className="font-semibold text-gray-800">Document Verification</h4>
                      <p className="text-gray-600">Our staff will verify all submitted documents</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Badge className="bg-green-600">3</Badge>
                    <div>
                      <h4 className="font-semibold text-gray-800">Interview</h4>
                      <p className="text-gray-600">Brief interview to assess motivation and basic computer skills</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Badge className="bg-green-600">4</Badge>
                    <div>
                      <h4 className="font-semibold text-gray-800">Selection & Enrollment</h4>
                      <p className="text-gray-600">Selected candidates will be notified and enrolled</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Course Fee & Financial Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <h3 className="text-2xl font-bold text-green-700 mb-2">FREE TRAINING</h3>
                  <p className="text-gray-600 mb-4">
                    This course is completely free of cost as it is funded by the Government of Bangladesh 
                    through NSDA (National Skills Development Authority).
                  </p>
                  <div className="text-sm text-gray-500">
                    <p>• No registration fee</p>
                    <p>• No tuition fee</p>
                    <p>• Free certificate upon completion</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Important Dates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Next Batch Schedule</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Application Start: Always Open</li>
                      <li>• Batch Start: Every 3 months</li>
                      <li>• Application Deadline: 2 weeks before batch start</li>
                      <li>• Class Schedule: 6 days/week</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Contact for Application</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Visit center during office hours</li>
                      <li>• Monday to Saturday: 9 AM - 5 PM</li>
                      <li>• Friday: Closed</li>
                      <li>• Contact staff for more information</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              >
                Apply Now - Visit Our Center
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                Visit TTC Daudkandi Graphics Lab to submit your application
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admission;
