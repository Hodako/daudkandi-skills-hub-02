
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-2 text-sm">
              <p>TTC Daudkandi Graphics Lab</p>
              <p>Isapur, Post: Daspara</p>
              <p>Daudkandi, Cumilla</p>
              <p>Bangladesh</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <a href="https://nsda.gov.bd" target="_blank" rel="noopener noreferrer" className="block hover:text-green-400">
                NSDA Main Website
              </a>
              <a href="https://nsda.gov.bd/online-portal" target="_blank" rel="noopener noreferrer" className="block hover:text-green-400">
                NSDA Online Portal
              </a>
              <a href="https://gov.bd" target="_blank" rel="noopener noreferrer" className="block hover:text-green-400">
                Bangladesh Government Portal
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Government Links</h3>
            <div className="space-y-2 text-sm">
              <a href="https://moedu.gov.bd" target="_blank" rel="noopener noreferrer" className="block hover:text-green-400">
                Ministry of Education
              </a>
              <a href="https://bteb.gov.bd" target="_blank" rel="noopener noreferrer" className="block hover:text-green-400">
                BTEB
              </a>
              <a href="https://forms.gov.bd" target="_blank" rel="noopener noreferrer" className="block hover:text-green-400">
                Government Forms
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm">
            © 2024 TTC Daudkandi Graphics Lab - National Skills Development Authority (NSDA)
          </p>
          <p className="text-xs mt-2 text-gray-400">
            Government of the People's Republic of Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
