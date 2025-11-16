export default function MobileNavigation({ menuOpen }) {
  return (
    <>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden py-4 space-y-3 border-t border-white/10 absolute top-full left-0 right-0 bg-[#0a2540] backdrop-blur-md">
          <a href="#" className="block text-white hover:text-[#F4C430] py-3 px-4 text-sm">Home</a>
          <a href="#services" className="block text-white hover:text-[#F4C430] py-3 px-4 text-sm">Our Services</a>
          <a href="#packages" className="block text-white hover:text-[#F4C430] py-3 px-4 text-sm">Hajj Packages</a>
          <a href="#umrah" className="block text-white hover:text-[#F4C430] py-3 px-4 text-sm">Umrah Packages</a>
          <a href="#about" className="block text-white hover:text-[#F4C430] py-3 px-4 text-sm">About</a>
          <a href="#blog" className="block text-white hover:text-[#F4C430] py-3 px-4 text-sm">Blog</a>
          <a href="#contact" className="block text-white hover:text-[#F4C430] py-3 px-4 text-sm">Contact</a>
        </div>
      )}
    </>
  );
}