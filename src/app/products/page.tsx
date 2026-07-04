'use client';

import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { Search, SlidersHorizontal } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Cinnamon (C5 Alba Grade)",
    description: "Premium hand-rolled quills from Ceylon, delicate flavor.",
    image: "/images/card_cinnamon.png",
    category: "Whole Spices",
    origin: "Sri Lanka",
    badgeClass: "bg-[#f5ece0] text-[#ab5e3b]",
    buttonClass: "bg-[#ab5e3b] hover:bg-[#8e4c2e] text-white",
    bgGlowClass: "from-amber-600/20 to-orange-400/25"
  },
  {
    id: 2,
    title: "Black Pepper (Organic)",
    description: "Bold, aromatic peppercorns with high piperine.",
    image: "/images/card_pepper.png",
    category: "Organic Spices",
    origin: "Sri Lanka",
    badgeClass: "bg-[#eaeaea] text-[#555555]",
    buttonClass: "bg-[#3f3a36] hover:bg-[#2c2825] text-white",
    bgGlowClass: "from-stone-500/25 to-stone-400/20"
  },
  {
    id: 3,
    title: "Turmeric Powder (Organic)",
    description: "Vibrant, high curcumin content for wellness.",
    image: "/images/card_turmeric.png",
    category: "Powders",
    origin: "Sri Lanka",
    badgeClass: "bg-[#faf3df] text-[#c09c5c]",
    buttonClass: "bg-[#cca43b] hover:bg-[#b08d2f] text-white",
    bgGlowClass: "from-yellow-400/25 to-amber-500/25"
  },
  {
    id: 4,
    title: "Nutmeg & Mace",
    description: "Fragrant whole nutmeg with protective mace.",
    image: "/images/card_nutmeg.png",
    category: "Whole Spices",
    origin: "Sri Lanka",
    badgeClass: "bg-[#f5ece0] text-[#a2783f]",
    buttonClass: "bg-[#a2783f] hover:bg-[#88622f] text-white",
    bgGlowClass: "from-amber-700/20 to-orange-500/20"
  },
  {
    id: 5,
    title: "Cloves (Handpicked)",
    description: "Plump, aromatic buds for rich flavor.",
    image: "/images/card_cloves.png",
    category: "Whole Spices",
    origin: "Sri Lanka",
    badgeClass: "bg-[#eaeaea] text-[#555555]",
    buttonClass: "bg-[#3f3a36] hover:bg-[#2c2825] text-white",
    bgGlowClass: "from-stone-500/25 to-stone-400/20"
  },
  {
    id: 6,
    title: "Chilli Flakes",
    description: "Sun-dried chilli for a perfect spice kick.",
    image: "/images/card_chilli.png",
    category: "Powders",
    origin: "Sri Lanka",
    badgeClass: "bg-[#fcebeb] text-[#9c2c2c]",
    buttonClass: "bg-[#9c2c2c] hover:bg-[#802222] text-white",
    bgGlowClass: "from-rose-500/25 to-red-400/20"
  }
];

const categories = ["All", "Whole Spices", "Powders", "Organic Spices"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const category = params.get('category');
      if (category && categories.includes(category)) {
        setActiveCategory(category);
      }
    }
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#faf8f5] min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header Title */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#cca43b] mb-3 block font-sans">Premium Catalog</span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4 font-sans">
             Our Authentic Spices
          </h1>
          <p className="text-gray-500 text-sm md:text-base font-sans">
             Pure organic crops hand-selected from the heart of Sri Lanka, harvested with care and delivered worldwide.
          </p>
        </div>

        {/* Search & Filter Section */}
        <div className="bg-white/70 backdrop-blur-md rounded-[20px] p-4 border border-stone-200/40 shadow-[0_8px_32px_rgba(0,0,0,0.02)] mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#ab5e3b] text-white shadow-sm"
                    : "bg-[#eae0d3]/50 text-stone-750 hover:bg-[#eae0d3]/85"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div className="relative w-full md:max-w-[280px] flex items-center bg-[#eae0d3]/30 border border-stone-200/60 rounded-full px-4 py-2.5 focus-within:border-[#cca43b] focus-within:bg-white transition-all shadow-inner">
            <input
              type="text"
              placeholder="Search spices catalog..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-xs focus:outline-none text-stone-850 font-sans pr-8 placeholder-stone-400"
            />
            <Search className="w-4 h-4 text-stone-400 absolute right-4 cursor-pointer hover:text-[#cca43b] transition-colors" />
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-[24px] border border-stone-200/30 shadow-sm px-4">
            <SlidersHorizontal className="w-12 h-12 text-stone-300 mx-auto mb-4" />
            <p className="text-stone-900 font-bold text-lg mb-1">No products found</p>
            <p className="text-stone-500 text-sm">Try adjusting your search filters or browse other categories.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                badgeClass={product.badgeClass}
                buttonClass={product.buttonClass}
                bgGlowClass={product.bgGlowClass}
              />
            ))}
          </div>
        )}
        
      </div>
    </div>
  );
}
