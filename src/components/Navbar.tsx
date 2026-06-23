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
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="text-2xl font-bold text-cap-gold flex items-center group">
               <span className="mr-2 text-3xl group-hover:scale-110 transition-transform duration-500 ease-out">🦁</span> 
               <span className="bg-gradient-to-r from-cap-gold to-cap-brown bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
                 CAP Ceylon
               </span>
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

