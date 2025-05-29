
import React from 'react';

const CourseLogos = () => {
  const softwareLogos = [
    {
      name: 'Adobe Photoshop',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg',
      description: 'Industry-standard image editing'
    },
    {
      name: 'Adobe Illustrator',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg',
      description: 'Vector graphics design'
    },
    {
      name: 'Microsoft Office 365',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_365_%282022%29.svg',
      description: 'Complete office productivity suite'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {softwareLogos.map((software, index) => (
        <div key={index} className="text-center group">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <img
              src={software.logo}
              alt={software.name}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              {software.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {software.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseLogos;
