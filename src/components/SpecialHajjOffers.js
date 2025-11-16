import Image from "next/image";
import { useState, useRef } from "react";

export default function SpecialHajjOffers() {
  const offers = [
    { 
      img: '/images/dlb1be5zsoojhgkzfbdj.jpg', 
      badge: 'HAJJ', 
      title: 'Premium Hajj Experience 2025', 
      days: '15 days', 
      price: '₹88,200', 
      oldPrice: '₹98,000' 
    },
    { 
      img: '/images/gcfviqxcpgyvjiqkprab.jpg', 
      badge: 'HAJJ', 
      title: 'Grand Hajj Experience 2025', 
      days: '20 days', 
      price: '₹81,000', 
      oldPrice: '₹90,000' 
    },
    { 
      img: '/images/s2hzkms1g2l4eaaa2zog.jpg', 
      badge: 'HAJJ', 
      title: 'Deluxe Hajj Experience 2025', 
      days: '31 days', 
      price: '₹88,200', 
      oldPrice: '₹98,000' 
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const nextSlide = () => {
    if (currentIndex < offers.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-0">Special Hajj Offers</h2>
          <div className="flex gap-2">
            <button 
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`p-2 sm:p-3 rounded-full ${currentIndex === 0 ? 'bg-gray-200 text-gray-400' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentIndex >= offers.length - 1}
              className={`p-2 sm:p-3 rounded-full ${currentIndex >= offers.length - 1 ? 'bg-gray-200 text-gray-400' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div className="flex gap-4 sm:gap-6 overflow-x-auto hide-scrollbar pb-4">
          {offers.slice(currentIndex, currentIndex + (window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3)).map((offer, idx) => (
            <div key={idx} className="flex-shrink-0 w-64 sm:w-80 bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-200">
              <div className="relative h-40 sm:h-56">
                <Image src={offer.img} alt={offer.title} fill className="object-cover" unoptimized />
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-amber-500 text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs font-bold shadow-lg">LIMITED OFFER</div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-[#023F3A] text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs font-bold">{offer.badge}</div>
              </div>
              <div className="p-4 sm:p-6">
                {/* Title on Left */}
                <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-gray-900 text-left">{offer.title}</h3>
                
                {/* Price Section on Right */}
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div className="text-left">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">From</p>
                    <div className="flex items-baseline gap-1 sm:gap-2">
                      <span className="text-xl sm:text-2xl font-bold text-[#14B8A6]">{offer.price}</span>
                      <span className="text-base sm:text-lg text-gray-400 line-through">{offer.oldPrice}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">For {offer.days}</p>
                  </div>
                </div>
                
                {/* Button on Left */}
                <div className="text-left">
                  <button className="bg-[#023F3A] hover:bg-[#14B8A6] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all shadow-md">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}