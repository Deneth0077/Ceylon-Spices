'use client';

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Search, SlidersHorizontal } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Cinnamon (C5 Alba Grade)",
    description: "Premium hand-rolled quills from Ceylon, delicate flavor.",
    image: "/images/cinnamon_sticks_1781650514051.png",
    category: "Whole Spices",
    origin: "Sri Lanka",
    bgShapeColor: "bg-[#e9b996]",
    buttonColor: "bg-[#b87c47] hover:bg-[#a86a36]"
  },
  {
    id: 2,
    title: "Black Pepper (Organic)",
    description: "Bold, aromatic peppercorns with high piperine.",
    image: "/images/black_pepper_1781650594175.png",
    category: "Organic Spices",
    origin: "Sri Lanka",
    bgShapeColor: "bg-[#5a4d44]",
    buttonColor: "bg-[#4a3d34] hover:bg-[#3a2d24]"
  },
  {
    id: 3,
    title: "Turmeric Powder (Organic)",
    description: "Vibrant, high curcumin content for wellness.",
    image: "/images/turmeric_powder_1781650611739.png",
    category: "Powders",
    origin: "Sri Lanka",
    bgShapeColor: "bg-[#e9b996]",
    buttonColor: "bg-[#e69b24] hover:bg-[#c68014]"
  },
  {
    id: 4,
    title: "Nutmeg & Mace",
    description: "Fragrant whole nutmeg with protective mace.",
    image: "/images/hero_spices_1781650500572.png", // Placeholder
    category: "Whole Spices",
    origin: "Sri Lanka",
    bgShapeColor: "bg-[#d9a075]",
    buttonColor: "bg-[#b87c47] hover:bg-[#a86a36]"
  },
  {
    id: 5,
    title: "Cloves (Handpicked)",
    description: "Plump, aromatic buds for rich flavor.",
    image: "/images/cloves_dried_1781650553541.png",
    category: "Whole Spices",
    origin: "Sri Lanka",
    bgShapeColor: "bg-[#b8aba1]",
    buttonColor: "bg-[#5a4d44] hover:bg-[#4a3d34]"
  },
  {
    id: 6,
    title: "Chilli Flakes",
    description: "Sun-dried chilli for a perfect spice kick.",
    image: "/images/turmeric_powder_1781650611739.png", // Placeholder
    category: "Powders",
    origin: "Sri Lanka",
    bgShapeColor: "bg-[#e5a9a9]",
    buttonColor: "bg-[#b82e2e] hover:bg-[#981e1e]"
  }
];

const categories = ["All", "Whole Spices", "Powders", "Organic Spices"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50/50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-2xl text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#c3843a] text-white shadow-md shadow-amber-500/10"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div className="relative w-full md:max-w-sm flex items-center bg-gray-50 border border-gray-200 rounded-2xl px-4 py-2.5 focus-within:border-[#c3843a] focus-within:bg-white transition-all">
            <Search className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search spices catalog..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-sm focus:outline-none text-gray-900 font-sans"
            />
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm px-4">
            <SlidersHorizontal className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-900 font-bold text-lg mb-1">No products found</p>
            <p className="text-gray-500 text-sm">Try adjusting your search filters or browse other categories.</p>
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
                bgShapeColor={product.bgShapeColor}
                buttonColor={product.buttonColor}
              />
            ))}
          </div>
        )}
        
      </div>
    </div>
  );
}
