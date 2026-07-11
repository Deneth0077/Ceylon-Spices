'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, Menu, X, ArrowRight } from "lucide-react";


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

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/product-tracing-sourcing", label: "Product Tracing & Sourcing" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <>
      <nav className={`sticky top-0 z-50 w-full transition-all duration-500 ${scrolled
          ? "bg-white/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] py-1.5 border-b border-white/50"
          : "bg-white/80 backdrop-blur-md py-2 shadow-sm border-b border-white/20"
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center w-full transition-all duration-500 ${scrolled ? "h-14" : "h-16"
            }`}>

            {/* Left Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center group">
                <img
                  src="/images/logo-v4.png"
                  alt="True Cinnamon Care Logo"
                  className="h-10 md:h-14 w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </Link>
            </div>

            {/* Center Desktop Nav Links (Glass Buttons) */}
            <div className="hidden md:flex flex-1 justify-center px-4">
              <div className="flex space-x-2 lg:space-x-4 items-center">
                {navLinks.map((link) => (
                  <div key={link.href} className="relative group">
                    <Link
                      href={link.href}
                      className={`px-4 lg:px-5 py-2 lg:py-2.5 rounded-full backdrop-blur-md border transition-all duration-300 text-[10px] lg:text-xs tracking-[0.15em] uppercase font-sans flex items-center gap-1.5 ${isActive(link.href)
                          ? "bg-white/70 border-[#B68D40]/80 text-[#B68D40] font-semibold shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
                          : "bg-white/30 border-[#B68D40]/40 text-gray-700 hover:bg-white/60 hover:border-[#B68D40]/80 hover:text-[#B68D40] font-medium shadow-sm hover:shadow-md hover:-translate-y-[1px]"
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

                    {/* Dropdown for Products */}
                    {link.label === "Products" && (
                      <div className="absolute left-0 mt-2 w-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 pt-2 z-50">
                        <div className="bg-white/90 backdrop-blur-xl border border-[#B68D40]/30 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex flex-col overflow-hidden">
                          {["All", "Whole Spices", "Powders", "Organic Spices"].map((cat) => (
                            <Link 
                              key={cat} 
                              href={`/products?category=${encodeURIComponent(cat)}`}
                              className="px-2 py-2.5 border-b border-[#B68D40]/20 last:border-b-0 text-[10px] lg:text-[11px] tracking-wider uppercase font-sans font-medium text-gray-700 hover:bg-[#B68D40]/10 hover:text-[#B68D40] transition-all duration-200 text-center"
                            >
                              {cat}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-3 md:space-x-4">
              <button
                className="p-2.5 rounded-full bg-white/30 backdrop-blur-md border border-[#B68D40]/40 shadow-sm hover:bg-white/60 hover:border-[#B68D40]/80 hover:shadow-md transition-all duration-300 flex items-center justify-center text-gray-700 hover:text-[#B68D40] hover:-translate-y-[1px]"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
              >
                <Search className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>

              <button
                className="p-2.5 rounded-full bg-white/30 backdrop-blur-md border border-[#B68D40]/40 shadow-sm hover:bg-white/60 hover:border-[#B68D40]/80 hover:shadow-md transition-all duration-300 hidden sm:flex items-center justify-center text-gray-700 hover:text-[#B68D40] hover:-translate-y-[1px]"
                aria-label="User Account"
              >
                <User className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2.5 rounded-full bg-white/30 backdrop-blur-md border border-[#B68D40]/40 shadow-sm hover:bg-white/60 hover:border-[#B68D40]/80 hover:shadow-md transition-all duration-300 flex items-center justify-center text-gray-700 hover:text-[#B68D40]"
                aria-label="Mobile Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
                  className={`px-4 py-3 rounded-xl text-base font-sans transition-all duration-300 ${isActive(link.href)
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
                  <p className="text-gray-500 font-medium mb-1">No products found matching &ldquo;{searchQuery}&rdquo;</p>
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
