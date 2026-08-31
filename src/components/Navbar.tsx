'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, User, Menu, X, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

const searchProducts = [
  {
    id: 4,
    title: "Ceylon Cinnamon",
    description: "Delicate, sweet flavor with citrus and floral notes, fine layered quills.",
    image: "/images/cinnamon_alba_real.png"
  },
  {
    id: 1,
    title: "Cones Black pepper",
    description: "Prized worldwide for its highest piperine content (5–9%) and strong pungency.",
    image: "/images/black_pepper_1781650594175.png"
  },
  {
    id: 2,
    title: "Ceylon Cinnamon Leaf Oil",
    description: "Warm, spicy essential oil distilled from True Cinnamon leaves, high Eugenol content.",
    image: "/images/cinnamon_leaf_oil_real.jpg"
  },
  {
    id: 3,
    title: "Ceylon Dried-Garcinia",
    description: "Traditional sun-dried Goraka native to Sri Lanka, valued for culinary souring.",
    image: "/images/garcinia_pot_outer_zoomed.jpg"
  },
  {
    id: 5,
    title: "Ceylon Cinnamon Other Grades",
    description: "Alba Grade, Continental (C), Mexican (M), and Hamburg (H) commercial grades.",
    image: "/images/cinnamon_tree.png"
  },
  {
    id: 101,
    title: "Ceylon Cinnamon Premium Gift Pack ",
    description: "Elegantly packed in a recyclable paper canister inspired by Sri Lanka's heritage.",
    image: "/images/cinnamon_canister_3d.png"
  }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const pathname = usePathname();
  const { cart, updateQuantity, removeFromCart, isCartOpen, setIsCartOpen, totalItemsCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
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

    let message = `*TRUE CINNAMON CARE* | Export Quality Ceylon Spices\n`;
    message += `--------------------------------------------------\n`;
    message += `*NEW WHOLESALE ORDER / CART INQUIRY*\n\n`;
    message += `*REQUESTED ITEMS:*\n`;
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.title}* - Qty: ${item.quantity}\n`;
    });
    message += `\n--------------------------------------------------\n`;
    message += `Please confirm order availability, pricing, and dispatch estimate.\n\n`;
    message += `Thank you!\n`;
    message += `--------------------------------------------------\n`;
    message += `*True Cinnamon Care* | Single-Origin Ceylon Spices\n`;
    message += `Hotline: +94 77 289 3030`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/94772893030?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Our Products" },
    { href: "/sourcing", label: "Our Sourcing" },
    { href: "/contact", label: "Contact" }
  ];

  const productSubLinks = [
    { href: "/products/signature-range", label: "Signature Range" },
    { href: "/products/wholesale", label: "Wholesale" },
    { href: "/products", label: "All Products" }
  ];

  return (
    <>
      {/* 1. Top Black Announcement Bar - Static at the very top of the page */}
      <div className="w-full bg-black/90 text-[#eae7e7] overflow-hidden z-30 relative select-none text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase font-sans py-1.5 border-b border-white/10">
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

      {/* 2. Main Navigation Header - Always accessible sticky header */}
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${scrolled
        ? "bg-[#fcf9f8]/95 backdrop-blur-md border-b border-[#eae7e7] shadow-md py-1.5 md:py-2"
        : pathname === "/"
          ? "bg-[#f5edd9] border-b border-[#e5dac4]/60 py-2 md:py-2.5"
          : "bg-[#fcf9f8]/90 backdrop-blur-sm border-b border-[#eae7e7]/50 py-2 md:py-2.5"
        }`}>
        <nav className="w-full">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex justify-between items-center h-14 sm:h-15 md:h-16 w-full">

              {/* Left Logo - Resized for proportional layout */}
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="flex items-center group py-0.5" onClick={() => setIsMobileMenuOpen(false)}>
                  <img
                    src="/images/navbar_brand_logo.png"
                    alt="True Cinnamon Care Logo"
                    className="h-7 sm:h-8 md:h-9 lg:h-10 max-h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </Link>
              </div>

              {/* Center Nav Links */}
              <div className="hidden md:flex flex-1 justify-center px-4">
                <div className="flex space-x-6 lg:space-x-8 items-center">
                  <Link
                    href="/"
                    className={`relative py-2 text-xs md:text-sm tracking-[0.08em] font-bold transition-colors ${pathname === "/" ? "text-[#42190a]" : "text-[#52443f] hover:text-[#42190a]"}`}
                  >
                    Home
                    {pathname === "/" && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#795900] rounded-full" />}
                  </Link>

                  <Link
                    href="/about"
                    className={`relative py-2 text-xs md:text-sm tracking-[0.08em] font-bold transition-colors ${pathname === "/about" ? "text-[#42190a]" : "text-[#52443f] hover:text-[#42190a]"}`}
                  >
                    About Us
                    {pathname === "/about" && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#795900] rounded-full" />}
                  </Link>

                  {/* PRODUCTS + Dropdown */}
                  <div
                    className="relative group py-2 cursor-pointer"
                    onMouseEnter={() => setIsProductsDropdownOpen(true)}
                    onMouseLeave={() => setIsProductsDropdownOpen(false)}
                  >
                    <div
                      className={`flex items-center gap-1.5 text-xs md:text-sm tracking-[0.08em] font-bold transition-colors select-none ${isActive("/products") ? "text-[#42190a]" : "text-[#52443f] group-hover:text-[#42190a]"}`}
                    >
                      <Link href="/products">Our Products +</Link>
                      {isActive("/products") && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#795900] rounded-full" />}
                    </div>

                    {/* Dropdown Menu Container with seamless Mouse-Bridge Padding */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-1.5 z-50 transition-all duration-200 ${isProductsDropdownOpen
                          ? "opacity-100 visible translate-y-0 pointer-events-auto"
                          : "opacity-0 invisible -translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto"
                        }`}
                    >
                      <div className="w-56 bg-[#fcf9f8] border border-[#eae7e7] rounded-xl shadow-xl py-2 overflow-hidden">
                        {productSubLinks.map((subLink) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            onClick={() => setIsProductsDropdownOpen(false)}
                            className={`block px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${pathname === subLink.href
                                ? "bg-[#795900] text-white"
                                : "text-[#42190a] hover:bg-[#eae7e7]/60 hover:text-[#795900]"
                              }`}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/sourcing"
                    className={`relative py-2 text-xs md:text-sm tracking-[0.08em] font-bold transition-colors ${pathname === "/sourcing" ? "text-[#42190a]" : "text-[#52443f] hover:text-[#42190a]"}`}
                  >
                    Our Sourcing
                    {pathname === "/sourcing" && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#795900] rounded-full" />}
                  </Link>

                  <Link
                    href="/contact"
                    className={`relative py-2 text-xs md:text-sm tracking-[0.08em] font-bold transition-colors ${pathname === "/contact" ? "text-[#42190a]" : "text-[#52443f] hover:text-[#42190a]"}`}
                  >
                    Contact
                    {pathname === "/contact" && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#795900] rounded-full" />}
                  </Link>
                </div>
              </div>

              {/* Right Icons (Search, User Account, Language Dropdown, Hamburger) */}
              <div className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-4">
                <button
                  className="p-2 min-w-[40px] min-h-[40px] text-[#52443f] hover:text-[#42190a] hover:bg-[#eae7e7]/40 rounded-full transition-colors flex items-center justify-center cursor-pointer"
                  onClick={() => setIsSearchOpen(true)}
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>

                <button
                  className="p-2 min-w-[40px] min-h-[40px] text-[#52443f] hover:text-[#42190a] hover:bg-[#eae7e7]/40 rounded-full transition-colors hidden sm:flex items-center justify-center cursor-pointer"
                  aria-label="User Account"
                >
                  <User className="w-5 h-5" />
                </button>

                {/* Language Selector Dropdown pill */}
                <div className="hidden sm:flex items-center gap-1 border border-[#eae7e7] bg-white px-3 py-1.5 rounded-full text-xs font-bold text-[#52443f] cursor-pointer hover:border-[#85736e] transition-colors shadow-sm">
                  <span>EN</span>
                  <span className="text-[9px] opacity-70">▼</span>
                </div>

                {/* Mobile Menu Hamburger Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 min-w-[44px] min-h-[44px] text-[#52443f] hover:text-[#42190a] hover:bg-[#eae7e7]/40 rounded-xl transition-colors flex items-center justify-center"
                  aria-label="Mobile Menu"
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

            </div>
          </div>
        </nav>

        {/* Mobile menu dropdown inside header */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#fcf9f8] border-t border-b border-[#eae7e7] w-full left-0 shadow-lg transition-all animate-fadeIn">
            <div className="px-4 py-4 space-y-1 flex flex-col">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors min-h-[44px] flex items-center ${pathname === "/" ? "bg-[#42190a] text-white shadow-sm" : "text-[#52443f] hover:bg-[#eae7e7]/50 hover:text-[#42190a]"}`}
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors min-h-[44px] flex items-center ${pathname === "/about" ? "bg-[#42190a] text-white shadow-sm" : "text-[#52443f] hover:bg-[#eae7e7]/50 hover:text-[#42190a]"}`}
              >
                About Us
              </Link>

              {/* PRODUCTS + Mobile expandable section */}
              <div className="space-y-1">
                <div className="px-4 py-3 text-sm font-bold uppercase tracking-wider text-[#42190a] border-b border-[#eae7e7]/60 flex items-center justify-between">
                  <span>Our Products +</span>
                </div>
                <div className="pl-4 space-y-1">
                  {productSubLinks.map((subLink) => (
                    <Link
                      key={subLink.href}
                      href={subLink.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center ${pathname === subLink.href ? "bg-[#795900] text-white" : "text-[#52443f] hover:bg-[#eae7e7]/50 hover:text-[#42190a]"}`}
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/sourcing"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors min-h-[44px] flex items-center ${pathname === "/sourcing" ? "bg-[#42190a] text-white shadow-sm" : "text-[#52443f] hover:bg-[#eae7e7]/50 hover:text-[#42190a]"}`}
              >
                Our Sourcing
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors min-h-[44px] flex items-center ${pathname === "/contact" ? "bg-[#42190a] text-white shadow-sm" : "text-[#52443f] hover:bg-[#eae7e7]/50 hover:text-[#42190a]"}`}
              >
                Contact
              </Link>

              <div className="pt-3 mt-2 border-t border-[#eae7e7] space-y-2.5">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsSearchOpen(true);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-[#eae7e7] text-xs font-bold text-[#42190a] uppercase tracking-wider"
                >
                  <Search className="w-4 h-4 text-[#795900]" /> Search Spices & Collections
                </button>

                <a
                  href="https://wa.me/94772893030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#128C7E] to-[#25D366] text-white text-xs font-extrabold uppercase tracking-wider shadow-md hover:opacity-95 active:scale-98 transition-all"
                >
                  <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                    <path d="M12.012 2c-5.506 0-9.98 4.473-9.98 9.978 0 1.76.459 3.473 1.33 4.985l-1.413 5.161 5.281-1.385c1.455.794 3.1 1.214 4.777 1.215h.004c5.503 0 9.979-4.474 9.979-9.979 0-2.666-1.037-5.17-2.922-7.054C17.189 3.037 14.68 2 12.012 2zm5.952 14.154c-.25.7-1.458 1.341-2.036 1.429-.518.077-1.175.11-1.896-.12-.436-.138-.996-.323-1.713-.633-3.013-1.301-4.982-4.335-5.132-4.536-.15-.202-1.227-1.635-1.227-3.12 0-1.485.776-2.213 1.052-2.515.276-.302.602-.377.802-.377.2 0 .401 0 .576.01.186.01.433-.07.676.517.25.604.851 2.084.926 2.235.076.15.127.326.026.527-.101.201-.151.327-.302.503-.151.176-.317.392-.453.527-.151.15-.308.313-.132.615.177.301.782 1.291 1.68 2.091 1.154 1.029 2.126 1.347 2.428 1.498.302.151.477.125.652-.076.174-.2.749-.88 1.025-1.182.276-.302.476-.251.777-.15.302.15 1.91.93 2.24 1.094.33.164.55.244.625.37.075.128.075.731-.176 1.435z"/>
                  </svg>
                  <span>WhatsApp 24/7 Hotline</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

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
