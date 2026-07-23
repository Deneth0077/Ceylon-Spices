'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Shield, Heart, HelpCircle, Star, Filter, RotateCcw, Award } from "lucide-react";
import { useCart } from "@/context/CartContext";
import TransparentImage from "@/components/TransparentImage";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  }
};

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
    title: "Organic Garcinia (Goraka)",
    description: "Traditional sun-dried Garcinia segments, widely prized for natural culinary souring.",
    price: 13.80,
    image: "/images/card_garcinia.png",
    category: "Whole Spices",
    origin: "Matale Gardens",
    tags: ["Sour", "Digestive"],
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

      {/* 2. Why Choose Our Spices: Wellness & Potency */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-8 mb-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-[550px] mx-auto mb-10"
        >
          <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#795900] mb-2">Why Choose Our Spices</p>
          <h2 className="font-serif text-2xl md:text-3xl font-black text-[#42190a]">Wellness & Potency Standards</h2>
          <div className="w-14 h-1 bg-[#795900] mx-auto mt-3 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#f6f3f2]/60 p-6 rounded-xl border border-[#eae7e7] text-center flex flex-col items-center shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#ffdfa0]/40 text-[#795900] flex items-center justify-center mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-base font-extrabold text-[#42190a] mb-2 uppercase tracking-wide">Overall Health</h3>
            <p className="text-xs sm:text-sm font-medium text-[#42190a]/90 leading-relaxed max-w-[260px]">
              Pure, raw spices with zero additives, maintaining their natural chemical profile for maximum wellness impact.
            </p>
          </div>
          <div className="bg-[#f6f3f2]/60 p-6 rounded-xl border border-[#eae7e7] text-center flex flex-col items-center shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#ffdfa0]/40 text-[#795900] flex items-center justify-center mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-base font-extrabold text-[#42190a] mb-2 uppercase tracking-wide">Anti-Oxidant Capacity</h3>
            <p className="text-xs sm:text-sm font-medium text-[#42190a]/90 leading-relaxed max-w-[260px]">
              High ORAC value products, harvested and processed using cold-milling techniques to prevent thermal degradation.
            </p>
          </div>
          <div className="bg-[#f6f3f2]/60 p-6 rounded-xl border border-[#eae7e7] text-center flex flex-col items-center shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#ffdfa0]/40 text-[#795900] flex items-center justify-center mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-base font-extrabold text-[#42190a] mb-2 uppercase tracking-wide">Bioavailability</h3>
            <p className="text-xs sm:text-sm font-medium text-[#42190a]/90 leading-relaxed max-w-[260px]">
              Traditional processing ensures that active compounds like Curcumin and Cinnamaldehyde remain highly bioavailable.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Shop Workspace Grid */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 relative">

        {/* Left Filters Sidebar (col-span-3) */}
        <aside className="lg:col-span-3 space-y-8 bg-[#f6f3f2]/60 p-6 rounded-2xl border border-[#eae7e7] self-start shadow-sm">
          <div className="flex items-center justify-between border-b border-[#eae7e7] pb-4">
            <h3 className="font-serif font-black text-lg text-[#42190a] flex items-center gap-2">
              <Filter className="w-5 h-5 text-[#795900]" /> Filters
            </h3>
            <button
              onClick={resetFilters}
              className="text-xs uppercase font-extrabold tracking-wider text-[#795900] hover:text-[#5c4300] flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
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
              {["Whole Spices", "Ground Powders", "Artisanal Blends"].map((cat) => (
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
              {["Kandy Highlands", "Matale Gardens"].map((orig) => (
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
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#42190a]">Global Certifications</h4>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-lg border border-[#eae7e7] text-xs font-extrabold text-[#192a14]">
                <span className="w-2 h-2 rounded-full bg-[#192a14]" /> Single Origin Harvest
              </div>
              <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-lg border border-[#eae7e7] text-xs font-extrabold text-[#795900]">
                <span className="w-2 h-2 rounded-full bg-[#795900]" /> GMP Facility Standard
              </div>
              <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-lg border border-[#eae7e7] text-xs font-extrabold text-[#42190a]">
                <span className="w-2 h-2 rounded-full bg-[#42190a]" /> HACCP Safety Standard
              </div>
              <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-lg border border-[#eae7e7] text-xs font-extrabold text-[#52443f]">
                <span className="w-2 h-2 rounded-full bg-[#52443f]" /> FDA Registration Underway
              </div>
            </div>
            <p className="text-[10px] text-[#52443f] font-medium leading-relaxed mt-2">
              Our facilities are independently audited for complete compliance.
            </p>
          </div>
        </aside>

        {/* Right Catalog View (col-span-9) */}
        <main className="lg:col-span-9 space-y-6">

          {/* Header Actions */}
          <div className="flex items-center justify-between border-b border-[#eae7e7] pb-4">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((p) => (
                <div
                  key={p.id}
                  className={`rounded-2xl border p-5 flex flex-col h-[480px] hover:shadow-premium transition-all duration-300 group ${
                    p.id === 2 ? "bg-gradient-to-br from-[#4a0e17]/10 via-[#5c1320]/15 to-[#192a14]/10 border-[#4a0e17]/25 hover:bg-[#4a0e17]/20" :
                    p.id === 5 ? "bg-gradient-to-br from-[#f59e0b]/15 via-[#dc2626]/10 to-[#16a34a]/10 border-[#ea580c]/25 hover:bg-[#f59e0b]/25" :
                    "bg-[#f5ebe0]/30 border-[#42190a]/15 hover:bg-[#f5ebe0]/80 hover:border-[#42190a]/30"
                  }`}
                >

                  {/* Origin Badge */}
                  <div className="flex justify-between items-center mb-3">
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${
                      p.id === 2 ? "bg-[#58141c] text-[#d3e9c7] border-[#225729]/40" :
                      p.id === 5 ? "bg-[#ea580c] text-white border-[#f59e0b]/40" :
                      "text-[#795900] bg-[#ffdfa0]/60 border-[#795900]/20"
                    }`}>
                      {p.origin}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-extrabold text-[#795900]">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{p.rating}</span>
                    </div>
                  </div>

                  {/* Centered Image inside Organic Shape */}
                  <Link
                    href={`/products/${p.id}`}
                    className="relative w-full aspect-[4/3] overflow-hidden flex items-center justify-center p-4 mb-4 cursor-pointer"
                  >
                    <div className={`absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03] ${
                      p.id === 2 ? "rounded-[42%_58%_70%_30%_/_45%_45%_55%_55%] bg-gradient-to-br from-[#58141c] via-[#4a0e17] to-[#1e381b] opacity-95" :
                      p.id === 5 ? "rounded-[30%_70%_70%_30%_/_50%_60%_40%_50%] bg-gradient-to-br from-[#f59e0b] via-[#ea580c] to-[#16a34a] opacity-95" :
                      p.id % 4 === 1 ? "rounded-[50%_50%_30%_70%_/_50%_60%_40%_50%] bg-[#ebdcb9]" :
                      p.id % 4 === 2 ? "rounded-[42%_58%_70%_30%_/_45%_45%_55%_55%] bg-[#d3e9c7]/80" :
                      p.id % 4 === 3 ? "rounded-[60%_40%_50%_50%_/_50%_40%_60%_50%] bg-[#ffdfa0]/40" :
                      "rounded-[30%_70%_70%_30%_/_50%_60%_40%_50%] bg-[#ffdbcf]"
                    }`} />
                    <div className="w-[78%] h-[78%] relative flex items-center justify-center transition-transform duration-500 group-hover:scale-105 z-10">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="max-w-full max-h-full object-contain drop-shadow-md"
                      />
                    </div>
                  </Link>

                  {/* Details */}
                  <div className="space-y-1.5 text-left flex-grow flex flex-col justify-start">
                    <Link href={`/products/${p.id}`} className="block">
                      <h3 className="font-serif font-extrabold text-[#42190a] text-lg sm:text-xl hover:text-[#795900] transition-colors leading-snug line-clamp-1">
                        {p.title}
                      </h3>
                    </Link>
                    <p className="text-xs sm:text-sm text-[#42190a]/85 font-medium leading-relaxed line-clamp-2">
                      {p.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#eae7e7] mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-[#795900] uppercase tracking-wider font-extrabold">Price</span>
                      <span className="font-serif font-black text-base sm:text-lg text-[#42190a]">
                        ${p.price.toFixed(2)}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        const message = `*The Cinnamon Care - Product Inquiry*\n=================================\nProduct: *${p.title}*\nPrice: *$${p.price.toFixed(2)}*\n=================================\nPlease confirm my order. Thank you!`;
                        window.open(`https://wa.me/94772893030?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                      className="w-9 h-9 rounded-full bg-[#ffc641] hover:bg-[#ffb618] text-[#715300] flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm cursor-pointer"
                      title="Inquire on WhatsApp"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.962 3.222 1.488 4.887 1.489 5.485 0 9.948-4.468 9.951-9.953.001-2.657-1.02-5.155-2.877-7.016C16.756 1.813 14.264.796 11.602.796c-5.49 0-9.957 4.469-9.96 9.957-.002 1.8.48 3.553 1.396 5.113l-.997 3.645 3.73-.977zm12.188-7.042c-.3-.15-1.77-.874-2.045-.974-.275-.1-.475-.15-.675.15-.2.3-.775.974-.95 1.174-.175.2-.35.225-.65.075-1.02-.52-1.745-.96-2.425-2.12-.175-.3-.175-.52-.025-.67.125-.125.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.492-.51-.675-.52-.172-.007-.368-.009-.565-.009-.196 0-.518.074-.789.37-.27.295-1.034 1.012-1.034 2.467s1.056 2.855 1.204 3.052c.148.197 2.078 3.175 5.034 4.453.703.304 1.253.486 1.68.621.71.224 1.353.193 1.86.119.566-.082 1.77-.724 2.02-1.417.25-.693.25-1.288.175-1.418-.075-.13-.275-.205-.575-.355z"/>
                      </svg>
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
