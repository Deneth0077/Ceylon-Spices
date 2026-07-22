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
    image: "/images/alba_cinnamon_detail.png"
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
    image: "/images/turmeric_spoon.png"
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
    title: "Green Cardamom",
    description: "Plump green pods filled with highly aromatic seeds.",
    image: "/images/cardamom_bowl.png"
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
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Unregister any stale service workers that interfere with Next.js development HMR
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const registration of registrations) {
          registration.unregister().then((success) => {
            if (success) {
              console.log("Successfully unregistered stale service worker:", registration);
              window.location.reload();
            }
          });
        }
      });
    }
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

    let message = `*The Cinnamon Care - New Order*\n`;
    message += `=================================\n`;
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.title}* - Qty: ${item.quantity}\n`;
    });
    message += `=================================\n`;
    message += `Please confirm my order. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/94772893030?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Our Products" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <>
      <header className={`left-0 right-0 z-40 w-full transition-all duration-300 ${scrolled ? "fixed top-0 bg-transparent border-b border-transparent shadow-none" : "absolute top-0 bg-transparent border-b border-transparent"}`}>
      {/* Top Announcement Bar - Hides smoothly on scroll */}
      <div className={`w-full text-[#eae7e7] overflow-hidden z-50 relative select-none text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase font-sans transition-all duration-300 ${scrolled ? "max-h-0 py-0 opacity-0 border-none" : "max-h-12 py-1.5 opacity-100 bg-black/80 backdrop-blur-sm border-b border-white/10"}`}>
        <div className="w-max flex items-center gap-32 md:gap-98 animate-marquee whitespace-nowrap">
          <span>24/7 Service: +94 77 289 3030</span>
          <span>24/7 Service: +94 77 289 3030</span>
          <span>24/7 Service: +94 77 289 3030</span>
          <span>24/7 Service: +94 77 289 3030</span>
          <span>24/7 Service: +94 77 289 3030</span>
          <span>24/7 Service: +94 77 289 3030</span>
          <span>24/7 Service: +94 77 289 3030</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`w-full transition-all duration-300 ${scrolled ? "py-1" : "py-2 md:py-3"}`}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="flex justify-between items-center h-20 md:h-22 w-full">

            {/* Left Logo - Enlarged for crystal clear text readability */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center group py-1">
                <img 
                  src="/images/new_brand_logo.png" 
                  alt="The Cinnamon Care Logo"
                  className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </Link>
            </div>

            {/* Center Nav Links */}
            <div className="hidden md:flex flex-1 justify-center px-4">
              <div className="flex space-x-6 lg:space-x-8 items-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-2 text-xs md:text-sm tracking-[0.08em] font-bold transition-colors ${
                      isActive(link.href)
                        ? "text-[#42190a]"
                        : "text-[#52443f] hover:text-[#42190a]"
                    }`}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#795900] rounded-full" />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Icons (Search, User Account, Language Dropdown) */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <button
                className="p-2 text-[#52443f] hover:text-[#42190a] transition-colors flex items-center justify-center cursor-pointer"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                className="p-2 text-[#52443f] hover:text-[#42190a] transition-colors hidden sm:flex items-center justify-center cursor-pointer"
                aria-label="User Account"
              >
                <User className="w-5 h-5" />
              </button>

              {/* Language Selector Dropdown pill */}
              <div className="hidden sm:flex items-center gap-1 border border-[#eae7e7] bg-white px-3 py-1.5 rounded-full text-xs font-bold text-[#52443f] cursor-pointer hover:border-[#85736e] transition-colors shadow-sm">
                <span>EN</span>
                <span className="text-[9px] opacity-70">▼</span>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-[#52443f] hover:text-[#42190a] transition-colors"
                aria-label="Mobile Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

      </nav>
    </header>

    {/* Mobile menu dropdown */}
    {isMobileMenuOpen && (
      <div className="md:hidden bg-[#fcf9f8] border-t border-[#eae7e7] fixed top-24 w-full left-0 z-50 shadow-md">
        <div className="px-4 py-4 space-y-2 flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors ${
                isActive(link.href)
                  ? "bg-[#eae7e7]/50 text-[#42190a]"
                  : "text-[#52443f] hover:bg-[#eae7e7]/30 hover:text-[#42190a]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    )}

    {/* Search Drawer */}
    {isSearchOpen && (
      <div className="fixed inset-0 z-50 overflow-hidden flex items-start justify-center pt-20 px-4">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setIsSearchOpen(false)} />

        <div className="bg-[#fcf9f8] border border-[#eae7e7] rounded-2xl w-full max-w-2xl shadow-[0_20px_50px_rgba(93,46,29,0.12)] relative z-10 overflow-hidden max-h-[80vh] flex flex-col transform transition-all duration-300">
          <div className="p-6 border-b border-[#eae7e7] flex items-center gap-3">
            <Search className="w-5 h-5 text-[#795900] flex-shrink-0" />
            <input
              type="text"
              placeholder="Search premium spices (e.g. Cinnamon, Cardamom...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              className="w-full text-sm border-none focus:outline-none text-[#1b1c1c] font-sans bg-transparent"
            />
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-1 hover:bg-[#f6f3f2] rounded-full transition-colors text-[#85736e] hover:text-[#42190a]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-6">
            {searchQuery.trim() === "" ? (
              <div className="text-center py-10">
                <p className="text-[#85736e] text-xs">Type to search Sri Lankan spices...</p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-[#42190a] font-serif font-bold text-sm mb-1">No spices match "{searchQuery}"</p>
                <p className="text-[#52443f] text-xs">Try searching for Cardamom, Cinnamon, or Turmeric.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-[10px] font-bold text-[#795900] tracking-widest uppercase mb-4">Matches found ({filteredProducts.length})</p>
                {filteredProducts.map(product => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#f6f3f2] border border-transparent hover:border-[#eae7e7] transition-all group"
                  >
                    <div className="w-12 h-12 bg-[#f6f3f2] rounded-lg p-1 border border-[#eae7e7] flex-shrink-0 flex items-center justify-center">
                      <img src={product.image} alt={product.title} className="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-serif font-bold text-[#42190a] text-sm group-hover:text-[#795900] transition-colors">{product.title}</h4>
                      <p className="text-xs text-[#52443f] line-clamp-1">{product.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#85736e] group-hover:translate-x-1 transition-transform" />
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
