import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function FeaturedPackages() {
  const packages = [
    { img: '/images/emoparyqnc6mpv0qwykj.jpg', title: 'Affordable Umrah Group Package', rating: '5.0', reviews: '245', price: '₹85,000' },
    { img: '/images/ixzvhi3gsgiuubmtradd.jpg', title: 'Luxury Deluxe Umrah Package', rating: '4.9', reviews: '189', price: '₹1,25,000' },
    { img: '/images/jgsnbqyfxtailukbebzz.jpg', title: 'New Location Group Umrah', rating: '5.0', reviews: '312', price: '₹95,000' },
    { img: '/images/mphjiikoboddfdsyghj9.jpg', title: 'Silver Budget Umrah Package', rating: '4.8', reviews: '156', price: '₹75,000' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4); // Default to desktop view
  const containerRef = useRef(null);

  // Determine how many items to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(4);
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
    if (currentIndex < packages.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section id="packages" className="py-12 sm:py-16 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-0">Featured Packages</h2>
          <div className="flex gap-2">
            <button 
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full ${currentIndex === 0 ? 'bg-gray-100 text-gray-400' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentIndex >= packages.length - itemsToShow}
              className={`p-2 rounded-full ${currentIndex >= packages.length - itemsToShow ? 'bg-gray-100 text-gray-400' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {packages.slice(currentIndex, currentIndex + itemsToShow).map((pkg, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="relative h-40 sm:h-48">
                <Image src={pkg.img} alt={pkg.title} fill className="object-cover" unoptimized />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-bold text-base sm:text-lg text-black mb-2 line-clamp-2">{pkg.title}</h3>
                <div className="flex items-center gap-2 text-xs sm:text-sm mb-3">
                  <div className="flex items-center">
                    <span className="text-amber-500">⭐</span>
                    <span className="font-semibold text-black ml-1">{pkg.rating}</span>
                  </div>
                  <span className="text-gray-400">({pkg.reviews})</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-lg sm:text-xl font-bold text-teal-600">{pkg.price}</span>
                  </div>
                  <button className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition">View</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <button className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold transition text-sm sm:text-base">View All</button>
        </div>
      </div>
    </section>
  );
}