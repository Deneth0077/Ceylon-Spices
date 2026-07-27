'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Shield, Star, Filter, RotateCcw, Award } from "lucide-react";
import { useCart } from "@/context/CartContext";
import TransparentImage from "@/components/TransparentImage";
import { motion } from "framer-motion";
import { productsData, Product } from "@/data/products";
import InquiryModal from "@/components/InquiryModal";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export default function ShopPage() {
  const { addToCart } = useCart();

  // States
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedOrigins, setSelectedOrigins] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Most Popular");
  const [selectedProductForInquiry, setSelectedProductForInquiry] = useState<Product | null>(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Sync category from URL query if present
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get("category");
      if (catParam) {
        let matched = "";
        if (catParam === "Whole Spices" || catParam === "Organic Spices") matched = "Whole Spices";
        if (catParam === "Cinnamon" || catParam === "Signature Range") matched = "Cinnamon";
        if (matched) {
          setSelectedCategories([matched]);
        }
      }
    }
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const handleOriginChange = (origin: string) => {
    setSelectedOrigins(prev =>
      prev.includes(origin) ? prev.filter(o => o !== origin) : [...prev, origin]
    );
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedOrigins([]);
    setSearchQuery("");
    setSortBy("Most Popular");
  };

  const handleOpenInquiry = (product: Product) => {
    setSelectedProductForInquiry(product);
    setIsInquiryModalOpen(true);
  };

  // Filtered Products logic
  const filteredProducts = productsData.filter(p => {
    const pCategory = p.subCategory || (p.category === "Signature Range" ? "Signature Range" : "Whole Spices");
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(pCategory) || (selectedCategories.includes("Signature Range") && p.category === "Signature Range");
    const matchesOrigin = selectedOrigins.length === 0 || selectedOrigins.includes(p.origin);
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesOrigin && matchesSearch;
  });

  // Sort logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    return (b.id - a.id); // Default
  });

  return (
    <div className="relative w-full bg-[#fcf9f8] text-[#1b1c1c] overflow-x-hidden min-h-screen pb-16 pt-4">
      
      {/* Decorative Single Giant Sri Lankan Cinnamon Farmer Centered */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[800px] md:w-[1300px] pointer-events-none z-0 overflow-hidden select-none opacity-[0.12]">
        <TransparentImage 
          src="/images/cinnamon_harvest.png" 
          alt="" 
          className="w-full h-full object-fill object-bottom"
        />
      </div>

      {/* 1. Header & Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-[1280px] mx-auto px-6 md:px-8 text-center max-w-[750px] mx-auto mb-16"
      >
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-[#42190a] leading-tight mb-4 tracking-tight">
          Our Artisanal Collection
        </h1>
        <p className="text-sm md:text-base font-semibold text-[#42190a]/90 leading-relaxed max-w-[640px] mx-auto">
          Discover the soul of Sri Lanka through our hand-curated spices. Harvested at the peak of ripeness and processed with ancestral techniques to preserve therapeutic potency.
        </p>
      </motion.div>



      {/* 3. Shop Workspace Grid */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 relative">

        {/* Left Filters Sidebar (col-span-3) */}
        <aside className="lg:col-span-3 space-y-4 lg:space-y-8 bg-[#f6f3f2]/90 p-4 sm:p-6 rounded-2xl border border-[#eae7e7] self-start shadow-sm">
          
          {/* Mobile Filter Header Toggle Button */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="lg:pointer-events-none font-serif font-black text-base sm:text-lg text-[#42190a] flex items-center gap-2 cursor-pointer w-full justify-between lg:justify-start"
            >
              <span className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-[#795900]" /> Filters & Search
              </span>
              <span className="lg:hidden text-xs font-sans font-bold text-[#795900] bg-white px-2.5 py-1 rounded-full border border-[#eae7e7]">
                {isMobileFilterOpen ? "Hide ▲" : "Show ▼"}
              </span>
            </button>
            <button
              onClick={resetFilters}
              className="hidden lg:flex text-xs uppercase font-extrabold tracking-wider text-[#795900] hover:text-[#5c4300] items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>

          {/* Filter Content Container (Always visible on lg+, toggleable on mobile) */}
          <div className={`${isMobileFilterOpen ? "block" : "hidden"} lg:block space-y-6 pt-2 border-t lg:border-t-0 border-[#eae7e7]`}>
            {/* Reset button for mobile */}
            <div className="flex justify-end lg:hidden">
              <button
                onClick={resetFilters}
                className="text-xs uppercase font-extrabold tracking-wider text-[#795900] flex items-center gap-1 cursor-pointer py-1"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Clear All Filters
              </button>
            </div>

            {/* Search box within filters */}
            <div className="space-y-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#42190a]">Search Spices</h4>
              <div className="relative flex items-center bg-white border border-[#eae7e7] rounded-lg px-3 py-2 focus-within:border-[#795900] shadow-sm">
                <input
                  type="text"
                  placeholder="Type keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs sm:text-sm font-semibold bg-transparent focus:outline-none text-[#1b1c1c]"
                />
                <Search className="w-4 h-4 text-[#85736e] absolute right-3" />
              </div>
            </div>

            {/* Category Filter */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#42190a]">Category</h4>
              <div className="space-y-2 text-xs sm:text-sm">
                {["Whole Spices", "Cinnamon"].map((cat) => (
                  <label key={cat} className="flex items-center gap-2.5 cursor-pointer text-[#2b1810] font-bold">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => handleCategoryChange(cat)}
                      className="accent-[#795900] w-4 h-4 rounded text-white cursor-pointer"
                    />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Origin Filter */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#42190a]">Origin</h4>
              <div className="space-y-2 text-xs sm:text-sm">
                {["Single-Origin Sri Lanka"].map((orig) => (
                  <label key={orig} className="flex items-center gap-2.5 cursor-pointer text-[#2b1810] font-bold">
                    <input
                      type="checkbox"
                      checked={selectedOrigins.includes(orig)}
                      onChange={() => handleOriginChange(orig)}
                      className="accent-[#795900] w-4 h-4 rounded text-white cursor-pointer"
                    />
                    <span>{orig}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Certifications Box (Visual indicator) */}
            <div className="space-y-3 pt-2 border-t border-[#eae7e7]">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#42190a]">Global Certifications</h4>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                <div className="flex items-center gap-2 bg-white/80 p-2 rounded-lg border border-[#eae7e7] text-[11px] font-extrabold text-[#192a14]">
                  <span className="w-2 h-2 rounded-full bg-[#192a14]" /> Single Origin
                </div>
                <div className="flex items-center gap-2 bg-white/80 p-2 rounded-lg border border-[#eae7e7] text-[11px] font-extrabold text-[#795900]">
                  <span className="w-2 h-2 rounded-full bg-[#795900]" /> GMP Facility
                </div>
                <div className="flex items-center gap-2 bg-white/80 p-2 rounded-lg border border-[#eae7e7] text-[11px] font-extrabold text-[#42190a]">
                  <span className="w-2 h-2 rounded-full bg-[#42190a]" /> HACCP Safety
                </div>
                <div className="flex items-center gap-2 bg-white/80 p-2 rounded-lg border border-[#eae7e7] text-[11px] font-extrabold text-[#52443f]">
                  <span className="w-2 h-2 rounded-full bg-[#52443f]" /> FDA Underway
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Catalog View (col-span-9) */}
        <main className="lg:col-span-9 space-y-6">

          {/* Header Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#eae7e7] pb-4 gap-3">
            <p className="text-sm text-[#42190a] font-semibold">
              Showing <span className="font-extrabold text-[#795900] text-base">{sortedProducts.length}</span> premium spices
            </p>

            {/* Sort by dropdown */}
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <span className="text-[#85736e] font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-[#eae7e7] rounded-lg px-3 py-1.5 text-[#42190a] font-extrabold focus:outline-none cursor-pointer shadow-sm"
              >
                <option value="Most Popular">Most Popular</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
                <option value="Rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Products grid */}
          {sortedProducts.length === 0 ? (
            <div className="text-center py-20 bg-[#f6f3f2]/30 border border-[#eae7e7]/70 rounded-xl px-4">
              <ShoppingBag className="w-12 h-12 text-[#85736e]/40 mx-auto mb-4" />
              <h3 className="font-serif font-bold text-[#42190a] text-lg mb-1">No spices found</h3>
              <p className="text-xs text-[#52443f] mb-4">Adjust your filters or query to find items.</p>
              <button
                onClick={resetFilters}
                className="px-6 py-2.5 bg-[#795900] text-white rounded font-bold text-xs uppercase cursor-pointer hover:bg-[#5c4300]"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((p) => (
                <div
                  key={p.id}
                  className={`rounded-2xl border p-4 flex flex-col h-[440px] justify-between hover:shadow-premium transition-all duration-300 group ${
                    p.id === 1 ? "bg-gradient-to-br from-[#4a0e17]/10 via-[#5c1320]/15 to-[#192a14]/10 border-[#4a0e17]/25 hover:bg-[#4a0e17]/20" :
                    p.id === 3 ? "bg-gradient-to-br from-[#16a34a]/10 via-[#15803d]/15 to-[#795900]/10 border-[#16a34a]/25 hover:bg-[#16a34a]/20" :
                    "bg-[#f5ebe0]/40 border-[#42190a]/15 hover:bg-[#f5ebe0]/90 hover:border-[#42190a]/30"
                  }`}
                >

                  {/* Origin Badge */}
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${
                      p.id === 1 ? "bg-[#58141c] text-[#d3e9c7] border-[#225729]/40" :
                      p.id === 3 ? "bg-[#15803d] text-white border-[#16a34a]/40" :
                      "text-[#795900] bg-[#ffdfa0]/60 border-[#795900]/20"
                    }`}>
                      {p.origin}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-extrabold text-[#795900]">
                      <Star className="w-4 h-4 fill-current" />
                      <span>5.0</span>
                    </div>
                  </div>

                  {/* Centered 3D Floating Image inside Organic Shape */}
                  <Link
                    href={`/products/${p.id}`}
                    className="relative w-full h-48 overflow-visible flex items-center justify-center p-2 mb-2 cursor-pointer group/img"
                  >
                    <div className={`absolute inset-2 transition-transform duration-700 group-hover/img:scale-[1.04] ${
                      p.id === 1 ? "rounded-[42%_58%_70%_30%_/_45%_45%_55%_55%] bg-gradient-to-br from-[#58141c] via-[#4a0e17] to-[#1e381b] opacity-90" :
                      p.id === 3 ? "rounded-[30%_70%_70%_30%_/_50%_60%_40%_50%] bg-gradient-to-br from-[#16a34a] via-[#15803d] to-[#795900] opacity-90" :
                      p.id % 4 === 1 ? "rounded-[50%_50%_30%_70%_/_50%_60%_40%_50%] bg-[#ebdcb9]" :
                      p.id % 4 === 2 ? "rounded-[42%_58%_70%_30%_/_45%_45%_55%_55%] bg-[#d3e9c7]" :
                      p.id % 4 === 3 ? "rounded-[60%_40%_50%_50%_/_50%_40%_60%_50%] bg-[#ffdfa0]/50" :
                      "rounded-[30%_70%_70%_30%_/_50%_60%_40%_50%] bg-[#ffdbcf]"
                    }`} />
                    <div className="w-[105%] h-[105%] relative flex items-center justify-center transition-transform duration-500 group-hover/img:scale-110 group-hover/img:-translate-y-2 z-10">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="max-w-none w-[105%] h-[105%] object-contain drop-shadow-[0_12px_12px_rgba(0,0,0,0.25)] transition-all duration-500"
                      />
                    </div>
                  </Link>

                  {/* Details */}
                  <div className="space-y-1 text-left flex-grow flex flex-col justify-start my-1">
                    <Link href={`/products/${p.id}`} className="block">
                      <h3 className="font-serif font-black text-[#42190a] text-base sm:text-lg hover:text-[#795900] transition-colors leading-snug line-clamp-1">
                        {p.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-[#42190a]/85 font-medium leading-relaxed line-clamp-2">
                      {p.description}
                    </p>
                  </div>

                  {/* Actions - INQUIRE NOW & WHATSAPP */}
                  <div className="grid grid-cols-2 gap-2 pt-2.5 border-t border-[#eae7e7]/80 mt-auto">
                    <button
                      onClick={() => handleOpenInquiry(p)}
                      className="py-2 px-2 bg-[#6c7073] hover:bg-[#575a5d] text-white font-extrabold text-[10px] sm:text-xs uppercase tracking-wider rounded-full transition-all shadow-md hover:scale-[1.02] cursor-pointer text-center"
                    >
                      INQUIRE NOW
                    </button>
                    <button
                      onClick={() => {
                        const message = `*True Cinnamon Care - Product Inquiry*\n=================================\nProduct: *${p.title}*\n=================================\nPlease confirm details. Thank you!`;
                        window.open(`https://wa.me/94772893030?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                      className="py-2 px-2 bg-[#6ba343] hover:bg-[#598c36] text-white font-extrabold text-[10px] sm:text-xs uppercase tracking-wider rounded-full transition-all shadow-md hover:scale-[1.02] cursor-pointer text-center"
                    >
                      WHATSAPP
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {sortedProducts.length > 0 && (
            <div className="flex justify-center items-center gap-2 pt-10">
              <span className="w-8 h-8 rounded-full border border-[#eae7e7] flex items-center justify-center text-xs font-bold text-[#52443f] bg-white cursor-pointer select-none">1</span>
              <span className="w-8 h-8 rounded-full hover:bg-[#f6f3f2] flex items-center justify-center text-xs font-bold text-[#85736e] cursor-pointer select-none">2</span>
              <span className="w-8 h-8 rounded-full hover:bg-[#f6f3f2] flex items-center justify-center text-xs font-bold text-[#85736e] cursor-pointer select-none">3</span>
            </div>
          )}

        </main>

        {/* Floating Certified Badge (Bottom-Right) */}
        <div className="fixed bottom-6 right-6 z-30 bg-[#5d2e1d] text-[#ffdfa0] border border-[#795900]/40 px-4 py-3 rounded-full shadow-premium flex items-center gap-2 select-none hover:scale-105 transition-transform">
          <Award className="w-4 h-4" />
          <span className="text-[9px] font-bold uppercase tracking-wider">100% Organic Ceylon Certified</span>
        </div>

      </section>

      {/* Inquiry Form Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        productTitle={selectedProductForInquiry?.title}
      />

    </div>
  );
}
