export default function FAQSection() {
  const faqs = [
    { q: 'What is included in the Umrah package?', a: 'Our packages include visa processing, round-trip flights, hotel accommodation near Haram, ground transportation, and guided Ziyarat tours.' },
    { q: 'Do I need a visa for Umrah?', a: 'Yes, all pilgrims need an Umrah visa. We handle the complete visa application process for you with all required documentation.' },
    { q: 'Are meals included in the packages?', a: 'Most packages include breakfast. Lunch and dinner can be added as per your preference. Please check individual package details.' },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-start text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-start text-gray-600 mb-12">Find answers to common questions about Umrah and Hajj packages</p>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg text-gray-900 flex-1">{faq.q}</h3>
                <button className="text-teal-600 text-2xl">+</button>
              </div>
              <p className="text-gray-600 mt-3 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}