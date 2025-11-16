export default function Testimonials() {
  const testimonials = [
    { name: 'Ahmed Khan', location: 'Mumbai, India', text: 'An amazing spiritual journey! The team arranged everything perfectly from visa to hotel. Highly recommended for first-time pilgrims.' },
    { name: 'Fatima Begum', location: 'Delhi, India', text: 'Excellent service and very professional. Our guide was knowledgeable and the hotels were close to Haram. Worth every penny!' },
    { name: 'Mohammed Ali', location: 'Kolkata, India', text: 'Best Umrah experience ever! The package was affordable and all arrangements were top-notch. Will definitely book again.' },
    { name: 'Ayesha Siddiqui', location: 'Hyderabad, India', text: 'Very satisfied with the services. The team was responsive and helpful throughout. Made our journey stress-free and blessed.' },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What client says</h2>
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="font-bold text-black text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400">⭐</span>
                ))}
              </div>
              <p className="text-sm text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}