export default function FormCard() {
  return (
    <div className="px-1 rounded-b-xl absolute left-0 right-0">
      <div className="relative -mt-24 sm:-mt-32 z-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">
          {/* Flex container: Left content, Right button */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Left Side: Pricing and Features */}
            <div className="flex-1">
              <div className="mb-4">
                <h3 className="text-left text-[#2C3E50] font-bold text-lg mb-2">Starting from</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-bold text-[#2C3E50]">₹ 1</span>
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">Per person - All inclusive</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="inline-flex items-center gap-1 sm:gap-2 text-[#0066CC] text-xs sm:text-sm font-medium">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"/></svg>
                  Secure SSI
                </span>
                <span className="inline-flex items-center gap-1 sm:gap-2 text-[#0066CC] text-xs sm:text-sm font-medium">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"/></svg>
                  No Hidden Fees
                </span>
                <span className="inline-flex items-center gap-1 sm:gap-2 text-[#0066CC] text-xs sm:text-sm font-medium">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"/></svg>
                  Money Back
                </span>
              </div>
            </div>

            {/* Right Side: Button */}
            <div className="flex-shrink-0 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#0B5345] hover:bg-[#0a4a3d] text-white px-8 py-3 sm:px-12 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base transition-all duration-300 shadow-lg whitespace-nowrap">
                Apply Now - ₹1
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}