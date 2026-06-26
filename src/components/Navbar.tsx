'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-500 ${
      scrolled 
        ? "bg-white/85 backdrop-blur-md shadow-md py-2 border-b border-gray-100" 
        : "bg-white py-4 shadow-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${
          scrolled ? "h-14" : "h-16"
        }`}>
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center group">
              <img 
                src="/images/logo.jpg" 
                alt="True Cinnamon Care Logo" 
                className="h-12 md:h-14 w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.03]" 
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-cap-gold font-semibold hover-underline-animation transition duration-300">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-cap-gold font-medium hover-underline-animation transition duration-300">About Us</Link>
            <Link href="/products" className="text-gray-600 hover:text-cap-gold font-medium hover-underline-animation transition duration-300">Products</Link>
            <Link href="/quality" className="text-gray-600 hover:text-cap-gold font-medium hover-underline-animation transition duration-300">Quality & Certifications</Link>
            <Link href="/contact" className="text-gray-600 hover:text-cap-gold font-medium hover-underline-animation transition duration-300">Contact</Link>
          </div>
          <div className="flex items-center space-x-6 text-gray-600">
             <Search className="w-5 h-5 cursor-pointer hover:text-cap-gold hover:scale-110 transition duration-300" />
             <User className="w-5 h-5 cursor-pointer hover:text-cap-gold hover:scale-110 transition duration-300" />
             <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-cap-gold hover:scale-110 transition duration-300" />
          </div>
        </div>
      </div>
    </nav>
  );
}

