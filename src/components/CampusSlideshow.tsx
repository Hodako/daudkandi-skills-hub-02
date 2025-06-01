
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const CampusSlideshow = () => {
  const campusImages = [
    {
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "TTC Daudkandi Main Campus Building",
      title: "Main Campus Building"
    },
    {
      src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Computer Lab with Latest Equipment",
      title: "Modern Computer Lab"
    },
    {
      src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Students Learning Graphics Design",
      title: "Graphics Design Classroom"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Library and Study Area",
      title: "Library & Study Area"
    },
    {
      src: "https://images.unsplash.com/photo-1567521464027-f127ff144326?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Student Common Area",
      title: "Student Common Area"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4 font-roboto">
            Our Campus
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Take a virtual tour of our modern facilities and learning environment
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {campusImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative">
                    <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                        <p className="text-sm opacity-90">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white/80 hover:bg-white text-gray-800" />
            <CarouselNext className="right-2 bg-white/80 hover:bg-white text-gray-800" />
          </Carousel>
          
          {/* Campus Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">2000+</div>
              <p className="text-gray-600 dark:text-gray-300">Square Feet Campus</p>
            </div>
            <div className="text-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">50+</div>
              <p className="text-gray-600 dark:text-gray-300">Modern Computers</p>
            </div>
            <div className="text-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">24/7</div>
              <p className="text-gray-600 dark:text-gray-300">Lab Access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusSlideshow;
