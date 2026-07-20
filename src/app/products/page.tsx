'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Shield, Heart, HelpCircle, Star, Filter, RotateCcw, Award } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  origin: string;
  tags: string[];
  rating: number;
  reviewsCount: number;
}

const initialProducts: Product[] = [
  {
    id: 1,
    title: "True Ceylon Cinnamon",
    description: "Premium hand-rolled Alba grade quills from Kandy. Sweet flavor, high antioxidants.",
    price: 14.50,
    image: "/images/alba_cinnamon_detail.png",
    category: "Whole Spices",
    origin: "Kandy Highlands",
    tags: ["Woody", "Sweet"],
    rating: 5.0,
    reviewsCount: 12
  },
  {
    id: 3,
    title: "Golden Sun Turmeric",
    description: "Sun-dried turmeric root ground to a fine powder. High active curcumin levels.",
    price: 12.00,
    image: "/images/turmeric_spoon.png",
    category: "Ground Powders",
    origin: "Matale Gardens",
    tags: ["Earthy", "Healing"],
    rating: 4.9,
    reviewsCount: 18
  },
  {
    id: 4,
    title: "Green Queen Cardamom",
    description: "Lush green pods handpicked in the Knuckles Range. Intense floral aroma.",
    price: 18.75,
    image: "/images/cardamom_bowl.png",
    category: "Whole Spices",
    origin: "Kandy Highlands",
    tags: ["Floral", "Aromatic"],
    rating: 4.8,
    reviewsCount: 14
  },
  {
    id: 2,
    title: "Bold Black Pepper",
    description: "Rich, hand-sorted organic black peppercorns. Sharp heat, high piperine.",
    price: 15.00,
    image: "/images/black_pepper_1781650594175.png",
    category: "Whole Spices",
    origin: "Matale Gardens",
    tags: ["Pungent", "Bold"],
    rating: 4.7,
    reviewsCount: 9
  },
  {
    id: 5,
    title: "Handpicked Cloves",
    description: "Dried aromatic flower buds. Intense spicy warmth and strong flavor profile.",
    price: 16.50,
    image: "/images/cloves_dried_1781650553541.png",
    category: "Whole Spices",
    origin: "Matale Gardens",
    tags: ["Intense", "Warm"],
    rating: 4.9,
    reviewsCount: 7
  },
  {
    id: 6,
    title: "Artisanal Chilli Blend",
    description: "Coarsely ground sun-dried red chillies for the perfect balanced heat.",
    price: 13.80,
    image: "/images/card_chilli.png",
    category: "Artisanal Blends",
    origin: "Kandy Highlands",
    tags: ["Fiery", "Zesty"],
    rating: 4.8,
    reviewsCount: 11
  }
];

export default function ShopPage() {
  const { addToCart } = useCart();
  
  // States
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedOrigins, setSelectedOrigins] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Most Popular");

  // Sync category from URL query if present
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get("category");
      if (catParam) {
        let matched = "";
        if (catParam === "Whole Spices") matched = "Whole Spices";
        if (catParam === "Powders") matched = "Ground Powders";
        if (catParam === "Organic Spices") matched = "Whole Spices"; // map to category
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

  // Filtered Products logic
  const filteredProducts = initialProducts.filter(p => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(p.category);
    const matchesOrigin = selectedOrigins.length === 0 || selectedOrigins.includes(p.origin);
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesOrigin && matchesSearch;
  });

  // Sort logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "Price: Low to High") return a.price - b.price;
    if (sortBy === "Price: High to Low") return b.price - a.price;
    if (sortBy === "Rating") return b.rating - a.rating;
    return b.reviewsCount - a.reviewsCount; // Default: Most Popular
  });

  return (
    <div className="w-full bg-[#fcf9f8] text-[#1b1c1c] overflow-x-hidden min-h-screen py-16">
      
      {/* 1. Header & Title */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 text-center max-w-[700px] mx-auto mb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#42190a] leading-tight mb-4">
          Our Artisanal Collection
        </h1>
        <p className="text-xs md:text-sm text-[#52443f] leading-relaxed max-w-[600px] mx-auto">
          Discover the soul of Sri Lanka through our hand-curated spices. Harvested at the peak of ripeness and processed with ancestral techniques to preserve therapeutic potency.
        </p>
      </div>

      {/* 2. Why Choose Our Spices: Wellness & Potency */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-8 mb-20">
        <div className="text-center max-w-[500px] mx-auto mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#795900] mb-2">Why Choose Our Spices</p>
          <h2 className="font-serif text-xl md:text-2xl font-bold text-[#42190a]">Wellness & Potency Standards</h2>
          <div className="w-12 h-0.5 bg-[#795900] mx-auto mt-2" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#f6f3f2]/50 p-6 rounded-lg border border-[#eae7e7]/70 text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#ffdfa0]/30 text-[#795900] flex items-center justify-center mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-sm font-bold text-[#42190a] mb-2 uppercase tracking-wide">Overall Health</h3>
            <p className="text-[11px] text-[#52443f] leading-relaxed max-w-[240px]">
              Pure, raw spices with zero additives, maintaining their natural chemical profile for maximum wellness impact.
            </p>
          </div>
          <div className="bg-[#f6f3f2]/50 p-6 rounded-lg border border-[#eae7e7]/70 text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#ffdfa0]/30 text-[#795900] flex items-center justify-center mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-sm font-bold text-[#42190a] mb-2 uppercase tracking-wide">Anti-Oxidant Capacity</h3>
            <p className="text-[11px] text-[#52443f] leading-relaxed max-w-[240px]">
              High ORAC value products, harvested and processed using cold-milling techniques to prevent thermal degradation.
            </p>
          </div>
          <div className="bg-[#f6f3f2]/50 p-6 rounded-lg border border-[#eae7e7]/70 text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#ffdfa0]/30 text-[#795900] flex items-center justify-center mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-sm font-bold text-[#42190a] mb-2 uppercase tracking-wide">Bioavailability</h3>
            <p className="text-[11px] text-[#52443f] leading-relaxed max-w-[240px]">
              Traditional processing ensures that active compounds like Curcumin and Cinnamaldehyde remain highly bioavailable.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Shop Workspace Grid */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
        
        {/* Left Filters Sidebar (col-span-3) */}
        <aside className="lg:col-span-3 space-y-8 bg-[#f6f3f2]/30 p-6 rounded-xl border border-[#eae7e7] self-start">
          <div className="flex items-center justify-between border-b border-[#eae7e7] pb-4">
            <h3 className="font-serif font-bold text-base text-[#42190a] flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#795900]" /> Filters
            </h3>
            <button 
              onClick={resetFilters}
              className="text-[10px] uppercase font-bold tracking-wider text-[#795900] hover:text-[#5c4300] flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" /> Reset
            </button>
          </div>

          {/* Search box within filters */}
          <div className="space-y-2">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#52443f]">Search Spices</h4>
            <div className="relative flex items-center bg-white border border-[#eae7e7] rounded-md px-3 py-1.5 focus-within:border-[#795900]">
              <input 
                type="text" 
                placeholder="Type keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs bg-transparent focus:outline-none text-[#1b1c1c]"
              />
              <Search className="w-3.5 h-3.5 text-[#85736e] absolute right-3" />
            </div>
          </div>

          {/* Category Filter */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#52443f]">Category</h4>
            <div className="space-y-2 text-xs">
              {["Whole Spices", "Ground Powders", "Artisanal Blends"].map((cat) => (
                <label key={cat} className="flex items-center gap-2.5 cursor-pointer text-[#1b1c1c] font-medium">
                  <input 
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => handleCategoryChange(cat)}
                    className="accent-[#795900] rounded text-white" 
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Origin Filter */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#52443f]">Origin</h4>
            <div className="space-y-2 text-xs">
              {["Kandy Highlands", "Matale Gardens"].map((orig) => (
                <label key={orig} className="flex items-center gap-2.5 cursor-pointer text-[#1b1c1c] font-medium">
                  <input 
                    type="checkbox"
                    checked={selectedOrigins.includes(orig)}
                    onChange={() => handleOriginChange(orig)}
                    className="accent-[#795900] rounded text-white" 
                  />
                  <span>{orig}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Certifications Box (Visual indicator) */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#52443f]">Global Certifications</h4>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 bg-white/60 p-2 rounded border border-[#eae7e7]/50 text-[10px] font-bold text-[#192a14]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#192a14]" /> Organic Certified
              </div>
              <div className="flex items-center gap-2 bg-white/60 p-2 rounded border border-[#eae7e7]/50 text-[10px] font-bold text-[#795900]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#795900]" /> GMP Facility Standard
              </div>
              <div className="flex items-center gap-2 bg-white/60 p-2 rounded border border-[#eae7e7]/50 text-[10px] font-bold text-[#42190a]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#42190a]" /> HACCP Safety Standard
              </div>
              <div className="flex items-center gap-2 bg-white/60 p-2 rounded border border-[#eae7e7]/50 text-[10px] font-bold text-[#52443f]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#52443f]" /> ISO 22000 Certified
              </div>
            </div>
            <p className="text-[9px] text-[#85736e] leading-relaxed mt-2">
              Our facilities are independently audited for complete compliance.
            </p>
          </div>
        </aside>

        {/* Right Catalog View (col-span-9) */}
        <main className="lg:col-span-9 space-y-6">
          
          {/* Header Actions */}
          <div className="flex items-center justify-between border-b border-[#eae7e7]/80 pb-4">
            <p className="text-xs text-[#52443f] font-medium">
              Showing <span className="font-bold text-[#1b1c1c]">{sortedProducts.length}</span> premium spices
            </p>
            
            {/* Sort by dropdown */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#85736e]">Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-none text-[#1b1c1c] font-bold focus:outline-none cursor-pointer"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((p) => (
                <div 
                  key={p.id}
                  className="bg-white rounded-xl border border-[#eae7e7]/60 p-5 flex flex-col h-full hover:shadow-premium transition-all duration-300 group"
                >
                  
                  {/* Origin Badge */}
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#795900] bg-[#ffdfa0]/40 px-2 py-0.5 rounded">
                      {p.origin}
                    </span>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-[#795900]">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{p.rating}</span>
                    </div>
                  </div>

                  {/* Image Link */}
                  <Link 
                    href={`/products/${p.id}`}
                    className="relative w-full aspect-square bg-[#f6f3f2]/40 rounded-lg overflow-hidden flex items-center justify-center p-4 border border-[#eae7e7]/40 mb-4 cursor-pointer"
                  >
                    <div className="w-[85%] h-[85%] relative flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                      <img 
                        src={p.image} 
                        alt={p.title} 
                        className="max-w-full max-h-full object-contain mix-blend-multiply" 
                      />
                    </div>
                  </Link>

                  {/* Details */}
                  <div className="space-y-1 mb-4">
                    <Link href={`/products/${p.id}`} className="block">
                      <h3 className="font-serif font-bold text-[#42190a] text-lg hover:text-[#795900] transition-colors leading-tight">
                        {p.title}
                      </h3>
                    </Link>
                    
                    {/* Tag chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {p.tags.map(t => (
                        <span 
                          key={t}
                          className="text-[9px] font-bold uppercase tracking-wide text-[#192a14] bg-[#d3e9c7] px-2 py-0.5 rounded-[0.25rem]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-[11px] text-[#52443f] leading-relaxed flex-grow line-clamp-2 mb-6">
                    {p.description}
                  </p>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#eae7e7]/40 mt-auto">
                    <span className="font-serif font-bold text-base text-[#42190a]">
                      ${p.price.toFixed(2)}
                    </span>
                    
                    <button 
                      onClick={() => addToCart({ id: p.id, title: p.title, image: p.image, description: p.description })}
                      className="px-4 py-2 bg-[#795900] hover:bg-[#5c4300] text-white rounded font-bold text-[10px] uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Quick Add
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

    </div>
  );
}
