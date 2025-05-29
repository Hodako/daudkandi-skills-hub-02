
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Staff = () => {
  const staffMembers = [
    {
      name: "Kamruzzaman",
      position: "Main Instructor",
      qualifications: [
        "Bachelor's in Computer Science",
        "Adobe Certified Expert (ACE)",
        "10+ years in Graphics Design",
        "NSDA Certified Trainer"
      ],
      expertise: [
        "Advanced Adobe Photoshop",
        "Adobe Illustrator",
        "Digital Marketing Design",
        "Print Media Design",
        "Logo and Brand Design"
      ],
      experience: "With over a decade of experience in the graphics design industry, Kamruzzaman sir brings professional expertise and practical knowledge to our training program. He has worked with various local and international clients, providing students with real-world insights.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Suborna Jerin Khan",
      position: "Co-Instructor",
      qualifications: [
        "Bachelor's in Fine Arts",
        "Adobe Certified Professional",
        "5+ years teaching experience",
        "Digital Design Specialist"
      ],
      expertise: [
        "Creative Design Concepts",
        "Color Theory and Typography",
        "Digital Illustration",
        "UI/UX Design Basics",
        "Portfolio Development"
      ],
      experience: "Suborna brings a unique blend of artistic creativity and technical expertise to our program. Her background in fine arts combined with modern digital design skills helps students develop both aesthetic sense and technical proficiency.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Forhad Hossain",
      position: "Support Staff",
      qualifications: [
        "Diploma in Computer Applications",
        "Office Management Certification",
        "Technical Support Specialist",
        "Administrative Excellence"
      ],
      expertise: [
        "Student Support Services",
        "Technical Assistance",
        "Administrative Operations",
        "Equipment Management",
        "Student Counseling"
      ],
      experience: "Forhad ensures smooth operation of our training center by providing comprehensive support to both students and faculty. His dedication to student success and administrative efficiency makes him an invaluable team member.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Our Faculty & Staff
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet our dedicated team of professionals committed to providing quality education and support
            </p>
          </div>

          <div className="space-y-8">
            {staffMembers.map((member, index) => (
              <Card key={index} className="max-w-6xl mx-auto hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="text-center lg:text-left">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-48 h-48 rounded-lg object-cover mx-auto lg:mx-0 mb-4"
                      />
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h2>
                      <p className="text-lg text-green-600 font-semibold mb-4">{member.position}</p>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">About</h3>
                        <p className="text-gray-600 leading-relaxed">{member.experience}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-3">Qualifications</h3>
                          <ul className="space-y-2">
                            {member.qualifications.map((qual, qualIndex) => (
                              <li key={qualIndex} className="flex items-center text-gray-600">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                {qual}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-3">Areas of Expertise</h3>
                          <ul className="space-y-2">
                            {member.expertise.map((skill, skillIndex) => (
                              <li key={skillIndex} className="flex items-center text-gray-600">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto mt-12">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-800">Our Commitment</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 leading-relaxed">
                Our team is dedicated to providing the highest quality education and support to help our students 
                succeed in their careers. With a perfect blend of theoretical knowledge and practical experience, 
                we ensure that each student receives personalized attention and guidance throughout their learning journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Staff;
