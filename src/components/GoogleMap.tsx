
import React from 'react';

const GoogleMap = () => {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.4!2d90.7820024!3d23.5239132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMxJzI2LjEiTiA5MMKwNDYnNTUuMiJF!5e0!3m2!1sen!2sbd!4v1640000000000!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="TTC Daudkandi Graphics Lab Location"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
