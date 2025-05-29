import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StaffSection = () => {
  const staff = [
    {
      name: "MD Kamruzzaman",
      position: "Main Instructor",
      role: "Graphics Design & Office Management Specialist",
      experience: "Senior instructor with extensive experience in graphics design and training",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Untitled_design_20250529_164238_0000.png"
    },
    {
      name: "Suborna Jerin Khan", 
      position: "Co-Instructor",
      role: "Adobe Creative Suite Specialist",
      experience: "Expert in Adobe Photoshop and Illustrator with industry experience",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/76/Daudkandi_TTC_Subarna_Jerin_Khan.png"
    },
    {
      name: "Forhad Mia",
      position: "Support Staff",
      role: "Administrative & Technical Support",
      experience: "Provides administrative and technical assistance to students and faculty",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Untitled_design_20250529_163729_0000.png"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Faculty & Staff
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our experienced team of instructors and support staff dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {staff.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto"
                  />
                </div>
                <CardTitle className="text-xl text-gray-800">{member.name}</CardTitle>
                <p className="text-green-600 font-semibold">{member.position}</p>
                <p className="text-sm text-gray-500">{member.role}</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm">{member.experience}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
