
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ApplicationForm from '@/components/ApplicationForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Admission = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Header />
      <main className="flex-grow py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Admission Information
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join our Graphics Design program and start your journey towards a successful career
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader className="bg-green-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl">Admission Requirements</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Educational Requirements</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Minimum HSC/SSC or equivalent</li>
                      <li>• Basic computer knowledge</li>
                      <li>• English reading capability</li>
                      <li>• Willingness to learn</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-3">General Requirements</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Age: 18-35 years</li>
                      <li>• Bangladeshi citizen</li>
                      <li>• Physically and mentally fit</li>
                      <li>• Commitment to complete course</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800 dark:text-white">Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Educational certificates (SSC/HSC)
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      National ID card copy
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Birth certificate copy
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Passport size photographs (4 copies)
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Guardian's consent (if under 21)
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Medical fitness certificate
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800 dark:text-white">Course Fee & Financial Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg text-center border border-green-200 dark:border-green-800">
                  <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2">FREE TRAINING</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    This course is completely free of cost as it is funded by the Government of Bangladesh 
                    through NSDA (National Skills Development Authority).
                  </p>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <p>• No registration fee</p>
                    <p>• No tuition fee</p>
                    <p>• Free certificate upon completion</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Online Application Form */}
          <ApplicationForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admission;
