import { useState, useEffect } from "react";

export default function ServicesSection() {
  const services = [
    { icon: '✈️', name: 'Umrah' },
    { icon: '🕌', name: 'Hajj' },
    { icon: '🏨', name: 'Hotels' },
    { icon: '✈️', name: 'Flights' },
    { icon: '📋', name: 'Visa' },
    { icon: '📚', name: 'Guide' },
    { icon: '🚌', name: 'Transport' },
    { icon: '🐑', name: 'Qurbani' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(8); // Default to desktop view
  const [showArrows, setShowArrows] = useState(false);

  // Determine how many items to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile: show 2-3 items
        setItemsToShow(3);
        setShowArrows(true);
      } else if (window.innerWidth < 1024) {
        // Laptop: show 4-5 items
        setItemsToShow(5);
        setShowArrows(true);
      } else {
        // Desktop: show all 8 items in one row
        setItemsToShow(8);
        setShowArrows(false);
      }
    };

    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < services.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-start text-gray-900 mb-10 sm:mb-16 px-4 sm:px-10 md:px-20">Our Services</h2>
        
        {/* Services Container with Slider */}
        <div className="relative items-center">
          {/* Services Flex Container - Always in one line */}
          <div className="flex flex-nowrap gap-4 sm:gap-6 md:gap-8 overflow-x-auto hide-scrollbar pb-4 px-4 sm:px-6">
            {services.slice(currentIndex, currentIndex + itemsToShow).map((service, idx) => (
              <div key={idx} className="flex-shrink-0 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-[#14B8A6] hover:-translate-y-1 w-24 sm:w-32">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-[#14B8A6]/10 to-[#14B8A6]/5 rounded-full flex items-center justify-center group-hover:from-[#14B8A6] group-hover:to-[#0D9488] transition-all duration-300">
                  <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-gray-800 group-hover:text-[#14B8A6] transition-colors">{service.name}</p>
              </div>
            ))}
          </div>
          
          {/* Slider Navigation Arrows */}
          {showArrows && (
            <>
              <button 
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl'}`}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={nextSlide}
                disabled={currentIndex >= services.length - itemsToShow}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all ${currentIndex >= services.length - itemsToShow ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl'}`}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}