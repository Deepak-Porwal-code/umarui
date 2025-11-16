import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="max-h-fit w-full border-2 border-white rounded-t-2xl relative bg-no-repeat bg-cover bg-center bg-[url('/images/sm-bg.jpg')] sm:bg-[url('/images/background-1.jpg')]">
      {/* Hero Content Inside Background Container */}
      <div className="py-20 sm:py-30 flex flex-col items-center gap-4">
        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          <span className="bg-white text-[#2C3E50] px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-lg">90% VISA APPROVAL RATE</span>
          <span className="bg-white text-[#2C3E50] px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-lg">2 - 4 DAYS PROCESSING</span>
        </div>
        
        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-white mb-6 sm:mb-8 leading-tight tracking-wide text-center px-4">
          Apply for your Umrah Visa Online Now !
        </h1>
        
        {/* Subtitle */}
        <p className="text-white/95 text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-light text-center px-4">
          Start your sacred journey to Mecca and Medina. Fast, secure, and hassle-free<br className="hidden sm:block" />
          Umrah visa processing with guaranteed approval and expert support.
        </p>
      </div>
    </div>
  );
}