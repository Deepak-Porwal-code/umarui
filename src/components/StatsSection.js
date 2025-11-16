export default function StatsSection() {
  return (
    <section className="pt-40 sm:pt-40 pb-8 sm:pb-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-md">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#14B8A6] mb-1 sm:mb-2">1,000+</div>
            <div className="text-xs sm:text-sm text-gray-600">VISAs Processed</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-md sm:mt-0">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#14B8A6] mb-1 sm:mb-2">99%</div>
            <div className="text-xs sm:text-sm text-gray-600">Success Rate</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-md mt-4 sm:mt-0">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#14B8A6] mb-1 sm:mb-2">7 Days</div>
            <div className="text-xs sm:text-sm text-gray-600">Support Available</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-md mt-4 sm:mt-0">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#14B8A6] mb-1 sm:mb-2">4</div>
            <div className="text-xs sm:text-sm text-gray-600">Days Processing</div>
          </div>
        </div>
      </div>
    </section>
  );
}