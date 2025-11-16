import Image from "next/image";

export default function CompleteUmrahServices() {
  const services = [
    { 
      img: '/images/om27hrrdfpqynveyoyqq.jpg', 
      badge: 'HOTELS', 
      title: 'Makkah Hotel Booking',
      features: ['5-star hotels near Haram', 'Complimentary breakfast', '24/7 room service', 'Free WiFi and AC']
    },
    { 
      img: '/images/rwmo6k9htlaxshswjeu7.jpg', 
      badge: 'ZIYARAT', 
      title: 'Makkah Ziyarat Tour',
      features: ['Expert guides', 'Historical sites visit', 'Group transportation', 'Educational sessions']
    },
    { 
      img: '/images/slx24okynri26wzmrwzj.jpg', 
      badge: 'FLIGHTS', 
      title: 'Group Flights',
      features: ['Direct flights', 'Extra baggage', 'Group discounts', 'Priority boarding']
    },
    { 
      img: '/images/uudlm0zpbesao5cdd5sw.jpg', 
      badge: 'PACKAGES', 
      title: 'Group Umrah Packages',
      features: ['All-inclusive packages', 'Visa processing', 'Transport included', 'Guided tours']
    },
    { 
      img: '/images/vozmmwch55oxsvpcioib.jpg', 
      badge: 'PACKAGES', 
      title: 'Ramil Jamarat Packages',
      features: ['Hajj rituals support', 'Expert guidance', 'Safe transportation', 'Emergency support']
    },
    { 
      img: '/images/gcfviqxcpgyvjiqkprab.jpg', 
      badge: 'TRANSPORT', 
      title: 'Hajj Transport Services',
      features: ['AC buses', 'Makkah-Madinah transfer', 'Airport pickup', 'Professional drivers']
    },
    { 
      img: '/images/dlb1be5zsoojhgkzfbdj.jpg', 
      badge: 'GUIDE', 
      title: 'Umrah Visa Guide',
      features: ['Document checklist', 'Fast processing', 'Application support', 'Track status online']
    },
    { 
      img: '/images/ixzvhi3gsgiuubmtradd.jpg', 
      badge: 'TOURS', 
      title: 'Madinah Ziyarat Tours',
      features: ['Prophet\'s Mosque visit', 'Historical sites', 'Knowledgeable guides', 'Comfortable transport']
    },
    { 
      img: '/images/jgsnbqyfxtailukbebzz.jpg', 
      badge: 'TOURS', 
      title: 'Madinah Ziyarat Tours',
      features: ['Sacred locations', 'Spiritual guidance', 'Group tours', 'Photo opportunities']
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">OUR SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Complete Umrah Travel Services</h2>
          <p className="text-gray-600 mt-3">Travel with confidence, comfort, and complete care on your sacred journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-100">
              <div className="relative h-52">
                <Image src={service.img} alt={service.title} fill className="object-cover" unoptimized />
                <div className="absolute top-3 right-3 bg-teal-600 text-black px-3 py-1 rounded-full text-xs font-bold">{service.badge}</div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-black mb-4">{service.title}</h3>
                <ul className="space-y-2 mb-5">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-black">
                      <svg className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}