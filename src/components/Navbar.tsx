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

  const handleCheckout = () => {
    if (cart.length === 0) return;

    let message = `*Ceylon Spice Artisans - New Order*\n`;
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
    { href: "/products", label: "Shop" },
    { href: "/about", label: "Our Story" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <>
      {/* Top Warning/Promo Banner */}
      <div className="w-full bg-[#ffc641] text-[#42190a] py-2 px-4 text-center text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase z-50 relative select-none">
        ⚡ WORLDWIDE SHIPPING ON ARTISANAL COLLECTIONS
      </div>

      <nav className={`sticky top-0 z-40 w-full transition-all duration-300 ${scrolled
          ? "bg-[#fcf9f8]/95 backdrop-blur-md shadow-sm border-b border-[#eae7e7]/70 py-1"
          : "bg-[#fcf9f8] border-b border-[#eae7e7]/40 py-2.5"
        }`}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="flex justify-between items-center h-16 w-full">

            {/* Left Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-1 group">
                <span className="font-serif text-lg md:text-2xl font-bold tracking-tight text-[#42190a] transition-colors group-hover:text-[#795900]">
                  Ceylon Spice Artisans
                </span>
              </Link>
            </div>

            {/* Center Nav Links */}
            <div className="hidden md:flex flex-1 justify-center px-4">
              <div className="flex space-x-6 items-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-2 text-xs tracking-[0.12em] uppercase font-bold transition-colors ${
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

            {/* Right Icons */}
            <div className="flex items-center space-x-2 md:space-x-3">
              <button
                className="p-2.5 text-[#52443f] hover:text-[#42190a] transition-colors flex items-center justify-center"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
              >
                <Search className="w-[18px] h-[18px]" />
              </button>

              <button
                className="p-2.5 text-[#52443f] hover:text-[#42190a] transition-colors hidden sm:flex items-center justify-center"
                aria-label="User Account"
              >
                <User className="w-[18px] h-[18px]" />
              </button>

              <button
                className="relative p-2.5 text-[#52443f] hover:text-[#42190a] transition-colors flex items-center justify-center"
                onClick={() => setIsCartOpen(true)}
                aria-label="Shopping Cart"
              >
                <ShoppingCart className="w-[18px] h-[18px]" />
                {totalItemsCount > 0 && (
                  <span className="absolute top-1 right-1 bg-[#795900] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {totalItemsCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2.5 text-[#52443f] hover:text-[#42190a] transition-colors"
                aria-label="Mobile Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#fcf9f8] border-t border-[#eae7e7] absolute w-full left-0 z-30 shadow-md">
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
      </nav>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setIsCartOpen(false)} />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-[#fcf9f8] shadow-[-10px_0_30px_rgba(93,46,29,0.08)] border-l border-[#eae7e7] flex flex-col h-full transform transition-transform duration-500 ease-in-out">
              <div className="px-6 py-5 border-b border-[#eae7e7] flex items-center justify-between">
                <h2 className="text-base font-serif font-bold text-[#42190a] flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-[#795900]" />
                  Your Spice Selection
                </h2>
                <button
                  type="button"
                  className="p-2 -mr-2 text-[#52443f] hover:text-[#42190a]"
                  onClick={() => setIsCartOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto py-6 px-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center px-4">
                    <div className="w-16 h-16 rounded-full bg-[#f6f3f2] flex items-center justify-center mb-4 text-[#795900]">
                      <ShoppingCart className="w-6 h-6" />
                    </div>
                    <p className="font-serif text-[#42190a] text-lg font-bold mb-1">Your cart is empty</p>
                    <p className="text-[#52443f] text-xs mb-6">Start adding authentic Ceylon Spices!</p>
                    <button
                      onClick={() => {
                        setIsCartOpen(false);
                        window.location.href = "/products";
                      }}
                      className="px-6 py-2.5 bg-[#795900] hover:bg-[#5c4300] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                    >
                      Browse Collection
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map((item) => (
                      <div key={item.id} className="flex py-4 border-b border-[#eae7e7]/60 group">
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-[#f6f3f2] p-1 border border-[#eae7e7]/80 relative flex items-center justify-center">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-contain mix-blend-multiply"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-sm font-serif font-bold text-[#42190a]">
                              <h3>{item.title}</h3>
                              <button
                                type="button"
                                onClick={() => removeFromCart(item.id)}
                                className="text-[#85736e] hover:text-[#ba1a1a] p-1 transition-colors"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                            <p className="mt-1 text-xs text-[#52443f] line-clamp-1">{item.description}</p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-xs mt-2">
                            <div className="flex items-center border border-[#eae7e7] bg-white rounded-md overflow-hidden">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 hover:bg-[#f6f3f2] text-[#85736e] transition-colors"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-2.5 font-bold text-[#42190a]">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 hover:bg-[#f6f3f2] text-[#85736e] transition-colors"
                              >
                                <Plus className="w-3 h-3" />
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
                <div className="border-t border-[#eae7e7] py-6 px-6 bg-[#f6f3f2]">
                  <div className="flex justify-between text-sm font-bold text-[#42190a] mb-2 font-serif">
                    <span>Total Selection</span>
                    <span>{totalItemsCount} item(s)</span>
                  </div>
                  <p className="text-[10px] text-[#52443f] mb-6">
                    Sourcing directly ensures ultimate freshness. Orders are compiled and finalized via WhatsApp.
                  </p>
                  <div>
                    <button
                      onClick={handleCheckout}
                      className="w-full flex items-center justify-center gap-2 bg-[#2e4028] hover:bg-[#192a14] text-white py-3.5 px-6 rounded-lg font-bold tracking-wider uppercase transition-colors shadow-sm text-xs cursor-pointer"
                    >
                      Confirm Order via WhatsApp
                    </button>
                  </div>
                </div>
              )}
            </div>
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
