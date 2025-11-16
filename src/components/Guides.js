import Image from "next/image";

export default function Guides() {
  return (
    <section id="guides" className="py-16 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Guides & Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl overflow-hidden shadow-lg">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">BOOK WITH CONFIDENCE</h3>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">How to Perform Umrah - Complete Step-by-Step Guide</h4>
              <p className="text-gray-600 mb-6 text-sm">Learn everything about Umrah rituals, Duas, Ihram, Tawaf, Sa'i, and More</p>
              <button className="text-teal-600 font-semibold text-sm hover:underline">Read More →</button>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <div className="relative h-48">
              <Image src="/images/s2hzkms1g2l4eaaa2zog.jpg" alt="Guide" fill className="object-cover" />
            </div>
            <div className="p-6 bg-white">
              <h4 className="font-bold text-black text-lg mb-2">Umrah Visa Guide for Indians in 2025 - Your Complete Step Guide</h4>
              <p className="text-sm text-gray-600 mb-4">Complete documentation, requirements, and application process explained</p>
              <button className="text-teal-600 font-semibold text-sm hover:underline">Read More →</button>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <div className="relative h-48">
              <Image src="/images/uudlm0zpbesao5cdd5sw.jpg" alt="Guide" fill className="object-cover" />
            </div>
            <div className="p-6 bg-white">
              <h4 className="font-bold text-black text-lg mb-2">What to Pack for Umrah - Important Items & Easy Application - Required</h4>
              <p className="text-sm text-gray-600 mb-4">Essential items checklist for your spiritual journey</p>
              <button className="text-teal-600 font-semibold text-sm hover:underline">Read More →</button>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition">View All</button>
        </div>
      </div>
    </section>
  );
}