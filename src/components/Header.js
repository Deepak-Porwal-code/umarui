"use client";
import Image from "next/image";
import { useState } from "react";

export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="bg-[#0a2540] py-2 sm:px-6 px-4 flex flex-row items-center justify-between navbar_adding w-full z-50">
      {/* Left Side - Website Logo Image */}
      <div className="flex items-center space-x-4">
        {/* Main Logo */}
        <a href="/">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7d92a2ad-c5ad-40ed-a9c2-add3561e1142-umarui-vercel-app/assets/images/images_1.png"
            alt="Logo"
            width={64}
            height={64}
            className="sm:w-16 w-12 sm:h-16 h-12"
          />
        </a>
      </div>

      {/* Desktop Navigation - Single rounded pill container */}
      <div className="xl:flex hidden text-sm gap-0.5 bg-[#324d5f70] rounded-full border-2 border-[#48626d] navbar_buttons">
        <button className="px-3 py-3 sm:px-4 sm:py-4 cursor-pointer rounded-full transition-colors duration-200 hover:bg-white hover:text-black text-white text-xs sm:text-sm">Home</button>
        <button className="px-3 py-3 sm:px-4 sm:py-4 cursor-pointer rounded-full transition-colors duration-200 hover:bg-white hover:text-black text-white text-xs sm:text-sm">Umrah Packages</button>
        <button className="px-3 py-3 sm:px-4 sm:py-4 cursor-pointer rounded-full transition-colors duration-200 hover:bg-white hover:text-black text-white text-xs sm:text-sm">Hajj Packages</button>
        <button className="px-3 py-3 sm:px-4 sm:py-4 cursor-pointer rounded-full transition-colors duration-200 hover:bg-white hover:text-black text-white text-xs sm:text-sm">Hotel</button>
        <button className="px-3 py-3 sm:px-4 sm:py-4 cursor-pointer rounded-full transition-colors duration-200 hover:bg-white hover:text-black text-white text-xs sm:text-sm">Transport</button>
        <button className="px-3 py-3 sm:px-4 sm:py-4 cursor-pointer rounded-full transition-colors duration-200 hover:bg-white hover:text-black text-white text-xs sm:text-sm">Ziarath</button>
        <button className="px-3 py-3 sm:px-4 sm:py-4 cursor-pointer rounded-full transition-colors duration-200 hover:bg-white hover:text-black text-white text-xs sm:text-sm">Guide</button>
        <button className="px-3 py-3 sm:px-4 sm:py-4 cursor-pointer rounded-full transition-colors duration-200 hover:bg-white hover:text-black text-white text-xs sm:text-sm">Visa</button>
        <button className="px-3 py-3 sm:px-4 sm:py-4 cursor-pointer rounded-full transition-colors duration-200 hover:bg-white hover:text-black text-white text-xs sm:text-sm">Group Flight</button>
        <button className="px-3 py-3 sm:px-4 sm:py-4 cursor-pointer rounded-full transition-colors duration-200 hover:bg-white hover:text-black text-white text-xs sm:text-sm">Blog</button>
        <button className="px-3 py-3 sm:px-4 sm:py-4 cursor-pointer rounded-full transition-colors duration-200 hover:bg-white hover:text-black text-white text-xs sm:text-sm">Contact</button>
      </div>

      {/* Right Side - Signup, Login and Cart buttons with Website Logo */}
      <div className="xl:flex hidden text-sm flex-row gap-2 items-center">
        <button className="px-3 py-2 sm:px-4 sm:py-3 rounded-full border-2 border-[#48626d] bg-[#324d5f70] text-white hover:bg-white hover:text-black transition-colors text-xs sm:text-sm">
          Sign Up
        </button>
        <button className="px-3 py-2 sm:px-4 sm:py-3 rounded-full border-2 border-[#48626d] bg-[#324d5f70] text-white hover:bg-white hover:text-black transition-colors text-xs sm:text-sm">
          Login
        </button>
        <button className="relative cursor-pointer px-3 py-2 sm:px-4 sm:py-3 rounded-full border-2 border-[#48626d] bg-[#324d5f70] text-white hover:bg-white hover:text-black transition-colors">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xl sm:text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white">
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>
    </header>
  );
}