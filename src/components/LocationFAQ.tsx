
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

const LocationFAQ = () => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (item: string) => {
    setOpenItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const faqItems = [
    {
      id: 'location',
      question: 'Where is the training center located?',
      answer: 'Technical Training Center Daudkandi Graphics Lab, Daudkandi, Cumilla, Bangladesh',
      icon: 'fas fa-map-marker-alt'
    },
    {
      id: 'hours',
      question: 'What are the operating hours?',
      answer: 'Open: 9:00 AM - 2:00 PM (Closed on Fridays)',
      icon: 'fas fa-clock'
    },
    {
      id: 'contact',
      question: 'How can I contact the center?',
      answer: 'Phone: +880-XXX-XXXXXX | Email: info@daudkandigraphicslab.edu.bd',
      icon: 'fas fa-phone'
    },
    {
      id: 'transport',
      question: 'How to reach the center?',
      answer: 'The center is accessible by local transport from Daudkandi town center. It\'s located near the main road for easy access.',
      icon: 'fas fa-bus'
    },
    {
      id: 'facilities',
      question: 'What facilities are available?',
      answer: 'Modern computer lab, high-speed internet, air conditioning, parking space, and refreshment area.',
      icon: 'fas fa-building'
    },
    {
      id: 'admission',
      question: 'When can I apply for admission?',
      answer: 'Admissions are open year-round. New batches start every 3 months. Visit during office hours for more information.',
      icon: 'fas fa-graduation-cap'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4 font-roboto">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-cascadia">
            Everything you need to know about our training center
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item) => (
            <Card key={item.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader 
                className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                onClick={() => toggleItem(item.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                      <i className={`${item.icon} text-white`}></i>
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white font-roboto">
                      {item.question}
                    </CardTitle>
                  </div>
                  <div className="text-green-600 dark:text-green-400">
                    {openItems[item.id] ? (
                      <ChevronUp className="h-6 w-6" />
                    ) : (
                      <ChevronDown className="h-6 w-6" />
                    )}
                  </div>
                </div>
              </CardHeader>
              
              {openItems[item.id] && (
                <CardContent className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 animate-fade-in">
                  <p className="text-gray-700 dark:text-gray-300 font-cascadia pl-16">
                    {item.answer}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold font-roboto">
                <i className="fas fa-info-circle mr-3"></i>
                Visit Us Today
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4 font-cascadia">
                Come and see our facilities in person. Our team is ready to help you start your graphics design journey.
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="font-semibold font-roboto">
                  📍 Technical Training Center Daudkandi Graphics Lab
                </p>
                <p className="font-cascadia">Daudkandi, Cumilla, Bangladesh</p>
                <p className="font-cascadia">🕘 Open: 9:00 AM - 2:00 PM (Closed Fridays)</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocationFAQ;
