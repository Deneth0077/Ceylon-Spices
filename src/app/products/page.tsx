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
    const matchesCategory = selectedCategories.length === 0 ||
      selectedCategories.includes(p.category) ||
      (p.subCategory && selectedCategories.includes(p.subCategory));
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
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[800px] md:w-[1300px] pointer-events-none z-0 overflow-hidden select-none opacity-[0.03]">
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
          Discover the soul of Ceylon through our hand-selected and sustainable harvesting with ancestral techniques to preserve Nature
        </p>
      </motion.div>



      {/* 3. Shop Workspace Grid - Full Width Clean Catalog */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-8 relative">

        <main className="w-full space-y-6">

          {/* Header Summary Bar */}
          <div className="flex items-center justify-between border-b border-[#eae7e7] pb-4">
            <p className="text-sm text-[#42190a] font-semibold">
              Showing <span className="font-extrabold text-[#795900] text-base">{productsData.length}</span> artisanal Ceylon products
            </p>
          </div>

          {/* Products grid - 4 Column Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productsData.map((p) => (
              <div
                key={p.id}
                className="bg-white border border-[#e8e2d9] rounded-2xl p-4 flex flex-col justify-between hover:shadow-[0_20px_40px_-12px_rgba(66,25,10,0.12)] hover:border-[#b48325]/50 transition-all duration-300 group"
              >
                {/* Header Row: Origin Badge & Star Rating */}
                <div className="flex justify-between items-center mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#f5ebd9] text-[#5e4300] border border-[#e2d2b4]">
                    {p.origin}
                  </span>
                  <div className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#795900] bg-[#fffaf0] px-2 py-0.5 rounded-full border border-[#f3ebd8]">
                    <Star className="w-3.5 h-3.5 fill-current text-[#b48325]" />
                    <span>5.0</span>
                  </div>
                </div>

                {/* Product Image Window */}
                <Link
                  href={`/products/${p.id}`}
                  className="relative w-full h-52 bg-[#f8f5f0] rounded-xl overflow-hidden mb-3 group/img flex items-center justify-center p-2 border border-[#ede7de] shadow-inner"
                >
                  <div className="w-full h-full relative overflow-hidden rounded-lg flex items-center justify-center">
                    <img
                      src={p.image}
                      alt={p.title}
                      className={`transition-transform duration-700 ease-out group-hover/img:scale-108 ${
                        p.image.endsWith('.png') && !p.image.includes('real') && !p.image.includes('detail')
                          ? 'max-h-full max-w-full object-contain drop-shadow-md'
                          : 'w-full h-full object-cover rounded-lg'
                      }`}
                    />
                  </div>
                  {/* Subtle Gradient Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
                </Link>

                {/* Details Section */}
                <div className="space-y-1.5 text-left flex-grow flex flex-col justify-start mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#966b18]">
                    {p.subCategory || p.category}
                  </span>
                  <Link href={`/products/${p.id}`} className="block">
                    <h3 className="font-serif font-black text-[#2b1810] text-base sm:text-lg group-hover:text-[#966b18] transition-colors leading-snug line-clamp-1">
                      {p.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-[#635149] font-medium leading-relaxed line-clamp-2">
                    {p.description}
                  </p>
                </div>

                {/* Actions Row - INQUIRE NOW & WHATSAPP */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#f0eae0]/80 mt-auto">
                  <button
                    onClick={() => handleOpenInquiry(p)}
                    className="py-2.5 px-2 bg-[#2d1b14] hover:bg-[#1a0f0b] text-white font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer text-center"
                  >
                    INQUIRE NOW
                  </button>
                  <button
                    onClick={() => {
                      const message = `*True Cinnamon Care - Product Inquiry*\n=================================\nProduct: *${p.title}*\n=================================\nPlease confirm details. Thank you!`;
                      window.open(`https://wa.me/94772893030?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                    className="py-2.5 px-2 bg-[#25D366] hover:bg-[#1fb958] text-white font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer text-center flex items-center justify-center gap-1"
                  >
                    WHATSAPP
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Pagination */}
          {sortedProducts.length > 0 && (
            <div className="flex justify-center items-center gap-2 pt-10">
              <span className="w-8 h-8 rounded-full border border-[#eae7e7] flex items-center justify-center text-xs font-bold text-[#52443f] bg-white cursor-pointer select-none">1</span>
              <span className="w-8 h-8 rounded-full hover:bg-[#f6f3f2] flex items-center justify-center text-xs font-bold text-[#85736e] cursor-pointer select-none">2</span>
              <span className="w-8 h-8 rounded-full hover:bg-[#f6f3f2] flex items-center justify-center text-xs font-bold text-[#85736e] cursor-pointer select-none">3</span>
            </div>
          )}

        </main>

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
