
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LocationInfo = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Location & Contact
          </h2>
          <p className="text-lg text-gray-600">
            Visit us at our training center in Daudkandi, Cumilla
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-green-700">Training Center Address</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-gray-700">Name:</span>
                  <p className="text-gray-600">TTC Daudkandi Graphics Lab</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Address:</span>
                  <p className="text-gray-600">
                    Isapur, Post: Daspara<br/>
                    Daudkandi, Cumilla<br/>
                    Bangladesh
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">District:</span>
                  <p className="text-gray-600">Cumilla</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Type:</span>
                  <p className="text-gray-600">Government Technical Training Center</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-green-700">Training Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-gray-700">Course Duration:</span>
                  <p className="text-gray-600">3 Months</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Available Seats:</span>
                  <p className="text-gray-600">25 Students per batch</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Training Type:</span>
                  <p className="text-gray-600">Graphics Design & Office Management</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Certification:</span>
                  <p className="text-gray-600">NSDA Certified</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Fee:</span>
                  <p className="text-gray-600 text-green-600 font-semibold">Free (Government Funded)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;
