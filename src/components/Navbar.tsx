'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, User, Menu, X, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

// Simple products database for local search inside navbar
const searchProducts = [
  {
    id: 1,
    title: "Cinnamon (C5 Alba Grade)",
    description: "Premium hand-rolled quills from Ceylon, delicate flavor.",
    image: "/images/cinnamon_sticks_1781650514051.png"
  },
  {
    id: 2,
    title: "Black Pepper (Organic)",
    description: "Bold, aromatic peppercorns with high piperine.",
    image: "/images/black_pepper_1781650594175.png"
  },
  {
    id: 3,
    title: "Turmeric Powder (Organic)",
    description: "Vibrant, high curcumin content for wellness.",
    image: "/images/turmeric_powder_1781650611739.png"
  },
  {
    id: 4,
    title: "Nutmeg & Mace",
    description: "Fragrant whole nutmeg with protective mace.",
    image: "/images/hero_spices_1781650500572.png"
  },
  {
    id: 5,
    title: "Cloves (Handpicked)",
    description: "Plump, aromatic buds for rich flavor.",
    image: "/images/cloves_dried_1781650553541.png"
  },
  {
    id: 6,
    title: "Chilli Flakes",
    description: "Sun-dried chilli for a perfect spice kick.",
    image: "/images/turmeric_powder_1781650611739.png"
  }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const pathname = usePathname();
  const { cart, updateQuantity, removeFromCart, isCartOpen, setIsCartOpen, totalItemsCount } = useCart();

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

  // Close menus on page navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const filteredProducts = searchQuery.trim() === "" 
    ? [] 
    : searchProducts.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    let message = `*True Cinnamon Care - New Order*\n`;
    message += `=================================\n`;
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.title}* - Qty: ${item.quantity}\n`;
    });
    message += `=================================\n`;
    message += `Please confirm my order. Thank you!`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/94761193338?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/quality", label: "Quality & Certifications" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <>
      <nav className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-2 border-b border-gray-100" 
          : "bg-white py-4 shadow-sm"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-500 ${
            scrolled ? "h-14" : "h-16"
          }`}>
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center group">
                <img 
                  src="/images/logo.jpg" 
                  alt="True Cinnamon Care Logo" 
                  className="h-12 md:h-14 w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.03]" 
                />
              </Link>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={`transition duration-300 hover-underline-animation text-sm font-sans ${
                    isActive(link.href)
                      ? "text-cap-gold font-semibold"
                      : "text-gray-600 hover:text-cap-gold font-medium"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4 md:space-x-6 text-gray-600">
              <Search 
                className="w-5 h-5 cursor-pointer hover:text-cap-gold hover:scale-110 transition duration-300"
                onClick={() => setIsSearchOpen(true)} 
              />
              <User className="w-5 h-5 cursor-pointer hover:text-cap-gold hover:scale-110 transition duration-300 hidden sm:block" />
              
              {/* Shopping Cart Trigger */}
              <div 
                className="relative cursor-pointer" 
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="w-5 h-5 hover:text-cap-gold hover:scale-110 transition duration-300" />
                {totalItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#b0633b] text-white text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold animate-pulse shadow-sm">
                    {totalItemsCount}
                  </span>
                )}
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-md hover:text-cap-gold focus:outline-none transition duration-300"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0 z-40 transition-all duration-300">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-base font-sans transition-all duration-300 ${
                    isActive(link.href)
                      ? "bg-amber-50 text-cap-gold font-bold"
                      : "text-gray-600 hover:bg-gray-50 hover:text-cap-gold font-medium"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Global Shopping Cart Sidebar Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setIsCartOpen(false)} />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full transform transition-transform duration-500 ease-in-out">
              {/* Cart Header */}
              <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-cap-gold" />
                  Your Shopping Cart
                </h2>
                <button
                  type="button"
                  className="p-2 -mr-2 text-gray-400 hover:text-gray-500 focus:outline-none"
                  onClick={() => setIsCartOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Cart List */}
              <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center px-4">
                    <div className="w-20 h-20 rounded-full bg-amber-50 flex items-center justify-center mb-4 text-cap-gold">
                      <ShoppingCart className="w-8 h-8" />
                    </div>
                    <p className="text-gray-900 font-bold text-lg mb-1">Your cart is empty</p>
                    <p className="text-gray-500 text-sm mb-6">Start adding authentic Sri Lankan spices!</p>
                    <button
                      onClick={() => {
                        setIsCartOpen(false);
                        window.location.href = "/products";
                      }}
                      className="px-6 py-2.5 bg-cap-gold hover:bg-cap-gold-hover text-white rounded-xl text-sm font-semibold transition"
                    >
                      Browse Products
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map((item) => (
                      <div key={item.id} className="flex py-4 border-b border-gray-100 group">
                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-gray-50 p-2 border border-gray-100 relative">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-contain mix-blend-multiply"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-sm font-semibold text-gray-900">
                              <h3>{item.title}</h3>
                              <button
                                type="button"
                                onClick={() => removeFromCart(item.id)}
                                className="text-gray-400 hover:text-red-500 p-1"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                            <p className="mt-1 text-xs text-gray-500 line-clamp-1">{item.description}</p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-xs">
                            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1.5 hover:bg-gray-100 text-gray-500 transition-colors"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="px-3 font-semibold text-gray-800">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1.5 hover:bg-gray-100 text-gray-500 transition-colors"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              {cart.length > 0 && (
                <div className="border-t border-gray-100 py-6 px-4 sm:px-6 bg-gray-50/70">
                  <div className="flex justify-between text-sm font-bold text-gray-900 mb-4">
                    <span>Total Items</span>
                    <span>{totalItemsCount} item(s)</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-6 font-sans">
                    Shipping is calculated on order confirmation.
                  </p>
                  <div>
                    <button
                      onClick={handleCheckout}
                      className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-4 px-6 rounded-2xl font-bold tracking-wide transition-all shadow-md hover:scale-[1.01] active:scale-95 cursor-pointer text-sm"
                    >
                      <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.49-4.734c1.652.98 3.284 1.493 4.887 1.493 5.485 0 9.948-4.467 9.95-9.95.002-2.653-1.03-5.15-2.906-7.03C16.6 1.899 14.1 .865 11.446.865c-5.485 0-9.949 4.469-9.95 9.954-.001 1.905.518 3.738 1.5 5.367l-.955 3.486 3.572-.937zm12.333-6.242c-.302-.151-1.786-.881-2.062-.982-.276-.1-.476-.151-.676.151-.2.302-.776.982-.95 1.182-.175.201-.35.226-.652.076-.302-.151-1.274-.469-2.428-1.498-.898-.8-1.503-1.79-1.68-2.091-.176-.302-.019-.465.132-.615.136-.135.302-.351.453-.527.151-.176.201-.302.302-.503.101-.201.05-.377-.026-.527-.075-.151-.676-1.631-.926-2.235-.243-.587-.49-.507-.676-.517-.175-.01-.376-.01-.576-.01-.2 0-.526.075-.802.377-.276.302-1.052 1.03-1.052 2.515 0 1.485 1.077 2.918 1.227 3.12.15.201 2.119 3.235 5.132 4.536.717.31 1.277.495 1.713.633.721.23 1.378.197 1.896.12.578-.088 1.786-.73 2.037-1.435.251-.704.251-1.307.176-1.435-.076-.12-.276-.197-.577-.348z" />
                      </svg>
                      Order via WhatsApp
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Global Search Modal Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex items-start justify-center pt-20 px-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={() => setIsSearchOpen(false)} />

          <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl relative z-10 overflow-hidden max-h-[80vh] flex flex-col transform transition-all duration-300">
            {/* Search Input Box */}
            <div className="p-6 border-b border-gray-100 flex items-center gap-3">
              <Search className="w-6 h-6 text-cap-gold flex-shrink-0" />
              <input
                type="text"
                placeholder="Search premium spices (e.g. Cinnamon, Black Pepper...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full text-base md:text-lg border-none focus:outline-none text-gray-900 font-sans"
              />
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search Results */}
            <div className="flex-grow overflow-y-auto p-6">
              {searchQuery.trim() === "" ? (
                <div className="text-center py-10">
                  <p className="text-gray-400 text-sm">Type to search Sri Lankan spices...</p>
                </div>
              ) : filteredProducts.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-gray-500 font-medium mb-1">No products found matching "{searchQuery}"</p>
                  <p className="text-gray-400 text-xs">Try different keywords or check spelling.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-xs font-bold text-cap-gold tracking-widest uppercase mb-4">Matches found ({filteredProducts.length})</p>
                  {filteredProducts.map(product => (
                    <Link
                      key={product.id}
                      href={`/products/${product.id}`}
                      className="flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all group"
                    >
                      <div className="w-14 h-14 bg-gray-50 rounded-xl p-1 border border-gray-100 flex-shrink-0">
                        <img src={product.image} alt={product.title} className="w-full h-full object-contain mix-blend-multiply" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-gray-900 text-sm group-hover:text-cap-gold transition-colors">{product.title}</h4>
                        <p className="text-xs text-gray-500 line-clamp-1">{product.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
