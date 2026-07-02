'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, User, Menu, X, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

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
          ? "bg-white/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] py-2 border-b border-white/50" 
          : "bg-white/80 backdrop-blur-md py-4 shadow-sm border-b border-white/20"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center w-full transition-all duration-500 ${
            scrolled ? "h-16" : "h-20"
          }`}>
            
            {/* Left Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center group">
                <img 
                  src="/images/new-logo.jpeg" 
                  alt="True Cinnamon Care Logo" 
                  className="h-12 md:h-16 w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.03]" 
                />
              </Link>
            </div>

            {/* Center Desktop Nav Links (Glass Buttons) */}
            <div className="hidden md:flex flex-1 justify-center px-4">
              <div className="flex space-x-2 lg:space-x-4 items-center">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className={`px-4 lg:px-5 py-2 lg:py-2.5 rounded-full backdrop-blur-md border transition-all duration-300 text-[10px] lg:text-xs tracking-[0.15em] uppercase font-sans flex items-center gap-1.5 ${
                      isActive(link.href)
                        ? "bg-white/70 border-white/90 text-cap-gold font-semibold shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
                        : "bg-white/30 border-white/40 text-gray-700 hover:bg-white/60 hover:border-white/70 hover:text-cap-gold font-medium shadow-sm hover:shadow-md hover:-translate-y-[1px]"
                    }`}
                  >
                    {link.label}
                    {/* Add a subtle chevron to products to match the screenshot vibe */}
                    {link.label === "Products" && (
                      <svg className="w-3 h-3 opacity-60 mt-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4 md:space-x-6 text-gray-600">
              <Search 
                className="w-5 h-5 cursor-pointer hover:text-cap-gold hover:scale-110 transition duration-300"
                onClick={() => setIsSearchOpen(true)} 
              />
              <User className="w-5 h-5 cursor-pointer hover:text-cap-gold hover:scale-110 transition duration-300 hidden sm:block" />
              
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

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-md hover:text-cap-gold focus:outline-none transition duration-300"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-xl border-t border-white/40 shadow-lg absolute w-full left-0 z-40 transition-all duration-300">
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

      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setIsCartOpen(false)} />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white/85 backdrop-blur-2xl shadow-[-10px_0_30px_rgba(0,0,0,0.1)] border-l border-white/40 flex flex-col h-full transform transition-transform duration-500 ease-in-out">
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

      {isSearchOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex items-start justify-center pt-20 px-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={() => setIsSearchOpen(false)} />

          <div className="bg-white/85 backdrop-blur-2xl border border-white/40 rounded-3xl w-full max-w-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative z-10 overflow-hidden max-h-[80vh] flex flex-col transform transition-all duration-300">
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
