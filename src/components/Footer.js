import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0a2540] text-white py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-8">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <div className="flex justify-center sm:justify-start items-center space-x-2 mb-4">
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7d92a2ad-c5ad-40ed-a9c2-add3561e1142-umarui-vercel-app/assets/images/images_1.png" alt="Logo" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
              <span className="text-lg sm:text-xl font-bold">Marhaba Haji</span>
            </div>
            <p className="text-white/70 text-xs sm:text-sm mb-4 text-center sm:text-left">Your trusted partner for Umrah and Hajj journeys. Making sacred pilgrimages accessible and comfortable.</p>
            <div className="flex justify-center sm:justify-start space-x-2 sm:space-x-3">
              <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal-600 transition text-xs sm:text-sm">f</a>
              <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal-600 transition text-xs sm:text-sm">t</a>
              <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal-600 transition text-xs sm:text-sm">in</a>
              <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal-600 transition text-xs sm:text-sm">ig</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-center sm:text-left">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li className="text-center sm:text-left"><a href="#" className="text-white/70 hover:text-teal-400 transition">About Us</a></li>
              <li className="text-center sm:text-left"><a href="#" className="text-white/70 hover:text-teal-400 transition">Our Services</a></li>
              <li className="text-center sm:text-left"><a href="#" className="text-white/70 hover:text-teal-400 transition">Packages</a></li>
              <li className="text-center sm:text-left"><a href="#" className="text-white/70 hover:text-teal-400 transition">Testimonials</a></li>
              <li className="text-center sm:text-left"><a href="#" className="text-white/70 hover:text-teal-400 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Our Information */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-center sm:text-left">Our Information</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li className="text-center sm:text-left"><a href="#" className="text-white/70 hover:text-teal-400 transition">Privacy Policy</a></li>
              <li className="text-center sm:text-left"><a href="#" className="text-white/70 hover:text-teal-400 transition">Terms & Conditions</a></li>
              <li className="text-center sm:text-left"><a href="#" className="text-white/70 hover:text-teal-400 transition">Refund Policy</a></li>
              <li className="text-center sm:text-left"><a href="#" className="text-white/70 hover:text-teal-400 transition">FAQ</a></li>
              <li className="text-center sm:text-left"><a href="#" className="text-white/70 hover:text-teal-400 transition">Blog</a></li>
            </ul>
          </div>

          {/* Support & Help */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-center sm:text-left">Support & Help</h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start justify-center sm:justify-start">
                <span className="text-teal-400 mr-2 mt-0.5">📞</span>
                <div className="text-center sm:text-left">
                  <p className="text-white/70">24/7 Support</p>
                  <p className="font-semibold text-xs sm:text-sm">+91 1234567890</p>
                </div>
              </li>
              <li className="flex items-start justify-center sm:justify-start">
                <span className="text-teal-400 mr-2 mt-0.5">✉️</span>
                <div className="text-center sm:text-left">
                  <p className="text-white/70">Email Us</p>
                  <p className="font-semibold text-xs sm:text-sm">info@marhabahaji.com</p>
                </div>
              </li>
              <li className="flex items-start justify-center sm:justify-start">
                <span className="text-teal-400 mr-2 mt-0.5">📍</span>
                <div className="text-center sm:text-left">
                  <p className="text-white/70">Office Address</p>
                  <p className="font-semibold text-xs sm:text-sm">Mumbai, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-white/60 gap-2">
            <p className="text-center md:text-left">© 2025 Marhaba Haji. All rights reserved. Powered by Islamic Travel Solutions</p>
            <p className="text-center md:text-right">Certified by Ministry of Hajj & Umrah</p>
          </div>
        </div>
      </div>
    </footer>
  );
}