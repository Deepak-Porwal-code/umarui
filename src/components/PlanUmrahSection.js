export default function PlanUmrahSection() {
  const steps = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#023F3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
          <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2"/>
          <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2"/>
          <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"/>
        </svg>
      ),
      step: "Step 1",
      description: "Choose Dates"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#023F3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" strokeWidth="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeWidth="2"/>
        </svg>
      ),
      step: "Step 2",
      description: "Add Visa, Flights & Hotels"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#023F3A]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      step: "Step 3",
      description: "Add Ziyarats & Transport"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#023F3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth="2"/>
          <line x1="2" y1="10" x2="22" y2="10" strokeWidth="2"/>
        </svg>
      ),
      step: "Step 4",
      description: "Checkout & Pay"
    }
  ];

  return (
    <section className="relative py-20 w-[100%px] overflow-hidden" style={{backgroundImage: "url('/images/plan-way-bg.43a493c1.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#f8f9fa'}}>
      <div className="absolute inset-0 bg-white/80"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left Aligned Title */}
        <div className="mb-14">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-gray-900 mb-4 leading-tight">Plan Your Umrah and Hajj, the Smart Way</h2>
          <p className="text-gray-600 text-lg sm:text-xl">Visa, Hotels, Flights and Ziyarats — All in One Islamic Travel App</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="bg-[#E8DCC8] w-16 h-16 rounded-full flex items-center justify-center mb-5">
                {step.icon}
              </div>
              <h3 className="font-bold text-2xl mb-2 text-gray-900">{step.step}</h3>
              <p className="text-gray-600 text-base">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Full Width Button with 30px radius */}
        <div>
          <button className="w-full bg-[#023F3A] hover:bg-[#14B8A6] text-white px-10 py-5 font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl" style={{borderRadius: '30px'}}>
            Start Building Your Umrah Package
          </button>
        </div>
      </div>
    </section>
  );
}