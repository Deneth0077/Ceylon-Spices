'use client';

import { use, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, Minus, ShoppingBag, ShieldCheck, Heart, Leaf, Star, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface DetailedProduct {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  image: string;
  thumbs: string[];
  category: string;
  origin: string;
  rating: number;
  reviewsCount: number;
  sensoryProfile: string;
  healthBenefits: string;
  provenanceText: string;
  certifiedText: string;
}

const detailedProducts: DetailedProduct[] = [
  {
    id: 1,
    title: "Ceylon Cinnamon (Alba Grade)",
    subtitle: "The world's highest quality cinnamon grade, hand-rolled in Ceylon.",
    description: "Our Alba Grade Ceylon Cinnamon is meticulously prepared by master peelers who scrape and roll thin inner bark layers into compact quills. It has a delicate, sweet flavor and complex woody notes that elevate any dish.",
    price: 14.50,
    image: "/images/alba_cinnamon_detail.png",
    thumbs: [
      "/images/alba_cinnamon_detail.png",
      "/images/legacy_cinnamon_pots.png",
      "/images/artisan_cinnamon_ranjan.png",
      "/images/spice_jar_plinth.png"
    ],
    category: "Whole Spices",
    origin: "Kandy Highlands",
    rating: 5.0,
    reviewsCount: 12,
    sensoryProfile: "Exceptional sweetness with complex citrus and woody notes. A delicate, ethereal aroma that elevates both savory and sweet recipes. Sourced directly from local farmers.",
    healthBenefits: "Low coumarin content compared to Cassia. Rich in antioxidants, supports heart health, and helps manage blood sugar levels. Essential for holistic living.",
    provenanceText: "Harvested from the ancient plantations of the Southern Coast and misty hills of Sri Lanka. Hand-peeled by master craftsmen who have inherited this artisanal trade.",
    certifiedText: "USDA Organic certified, ensuring no pesticides or synthetic fertilizers touch our soil. Sourced directly from local farmers, ensuring 100% authentic purity."
  },
  {
    id: 3,
    title: "Golden Sun Turmeric",
    subtitle: "Vibrant ground turmeric powder with high curcumin content.",
    description: "Grown in the rich soils of Matale, our turmeric is harvested at peak maturity and naturally sun-dried before being slow-milled into a fine golden powder. It delivers a pungent earthy flavor and robust color.",
    price: 12.00,
    image: "/images/turmeric_spoon.png",
    thumbs: [
      "/images/turmeric_spoon.png",
      "/images/artisan_turmeric_leela.png",
      "/images/spice_jar_plinth.png"
    ],
    category: "Ground Powders",
    origin: "Matale Gardens",
    rating: 4.9,
    reviewsCount: 18,
    sensoryProfile: "Bold earthy flavor with warm, slightly bitter undertones and a pleasant musky aroma. Highly concentrated curcumin oil content.",
    healthBenefits: "Powerful natural anti-inflammatory agent and strong antioxidant. Supports digestive health, joint comfort, and immune defense.",
    provenanceText: "Sourced from smallholder home forest gardens in the spice capital of Matale. Dried on traditional woven mats under natural tropical sunlight.",
    certifiedText: "100% chemical-free and certified organic. Clean cultivation practices protect natural watersheds and village communities."
  },
  {
    id: 4,
    title: "Green Queen Cardamom",
    subtitle: "Plump green cardamom pods from the Knuckles mountain range.",
    description: "Highly prized for its cooling, sweet flavor, our cardamom is hand-selected and dried in small batches to preserve its natural green color and essential oil content.",
    price: 18.75,
    image: "/images/cardamom_bowl.png",
    thumbs: [
      "/images/cardamom_bowl.png",
      "/images/hero_organic_grain.png",
      "/images/spice_jar_plinth.png"
    ],
    category: "Whole Spices",
    origin: "Kandy Highlands",
    rating: 4.8,
    reviewsCount: 14,
    sensoryProfile: "Highly intense, sweet, and cooling notes with accents of pine and citrus. A complex spice that is highly aromatic.",
    healthBenefits: "Aids digestion, freshens breath naturally, and contains active compounds that improve circulation and heart wellness.",
    provenanceText: "Wild-harvested from deep under forest canopies near the Knuckles Range, where high mist and damp soils create ultimate quality.",
    certifiedText: "Independently certified organic. Every pod is hand-sorted to guarantee maximum size and premium grade status."
  },
  {
    id: 2,
    title: "Bold Black Pepper",
    subtitle: "Aromatic, bold peppercorns from Sri Lankan home gardens.",
    description: "Ceylon Black Pepper is famous for its high piperine content, which gives it a sharp, bold heat. Our peppercorns are hand-harvested and naturally dried until black.",
    price: 15.00,
    image: "/images/black_pepper_1781650594175.png",
    thumbs: [
      "/images/black_pepper_1781650594175.png",
      "/images/legacy_cinnamon_pots.png"
    ],
    category: "Whole Spices",
    origin: "Matale Gardens",
    rating: 4.7,
    reviewsCount: 9,
    sensoryProfile: "Robust heat, sharp citrusy highlights, and a deep woody aroma. Unmatchable flavor compared to standard commercial pepper.",
    healthBenefits: "Improves digestion and enhances nutrient absorption (especially curcumin). Natural warming properties boost circulation.",
    provenanceText: "Cultivated on organic vines wrapped around shade trees in Matale. Sun-cured on community drying platforms.",
    certifiedText: "Certified USDA Organic. Entirely unbleached, raw, and free from industrial irradiation."
  },
  {
    id: 5,
    title: "Handpicked Cloves",
    subtitle: "Plump, aromatic whole dried cloves.",
    description: "Our Ceylon Cloves are handpicked at the perfect stage just before the buds open. They are packed with essential eugenol oil, giving them rich medicinal and culinary value.",
    price: 16.50,
    image: "/images/cloves_dried_1781650553541.png",
    thumbs: [
      "/images/cloves_dried_1781650553541.png",
      "/images/spice_jar_plinth.png"
    ],
    category: "Whole Spices",
    origin: "Matale Gardens",
    rating: 4.9,
    reviewsCount: 7,
    sensoryProfile: "Deeply warm, sweet, and highly pungent flavor. A tiny pinch delivers massive culinary impact.",
    healthBenefits: "Strong antiseptic and anaesthetic qualities. Excellent for dental hygiene and throat health. Full of manganese.",
    provenanceText: "Harvested from tall clove trees in integrated organic agroforests, dried naturally to lock in essential oils.",
    certifiedText: "Certified organic and fair trade. Sourcing supports forest farming communities and promotes native tree planting."
  },
  {
    id: 6,
    title: "Artisanal Chilli Blend",
    subtitle: "Coarse sun-dried Ceylon chilli flakes.",
    description: "Ceylon red chillies are carefully dried in hot tropical sun and coarsely crushed to preserve seeds and pulp. Offers vibrant color and robust heat.",
    price: 13.80,
    image: "/images/card_chilli.png",
    thumbs: [
      "/images/card_chilli.png",
      "/images/turmeric_spoon.png"
    ],
    category: "Artisanal Blends",
    origin: "Kandy Highlands",
    rating: 4.8,
    reviewsCount: 11,
    sensoryProfile: "Vibrant fire, smoky fruity undertones, and clean spice kick. Delivers an authentic Sri Lankan culinary heat.",
    healthBenefits: "Contains active capsaicin which boosts metabolism, helps ease nasal congestion, and triggers natural endorphins.",
    provenanceText: "Harvested from dry zone border fields, dried under sun beams until crisp before crushing.",
    certifiedText: "Organic certified with zero chemical sprays or dyes. Safe, pure capsicum flavor."
  }
];

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const productId = parseInt(resolvedParams.id);
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const [size, setSize] = useState("100g Jar");

  // Accordion drawer states
  const [isSensoryOpen, setIsSensoryOpen] = useState(true);
  const [isBenefitsOpen, setIsBenefitsOpen] = useState(false);

  const product = detailedProducts.find((p) => p.id === productId) || detailedProducts[0];

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      image: product.image,
      description: product.description
    }, quantity);
  };

  const handleWhatsAppCheckout = () => {
    const message = `*The Cinnamon Care - Quick Order*\n=================================\nProduct: *${product.title}*\nSize: *${size}*\nQuantity: *${quantity}*\n=================================\nPlease confirm my order. Thank you!`;
    const whatsappUrl = `https://wa.me/94761193338?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full bg-[#fcf9f8] text-[#1b1c1c] overflow-x-hidden py-12">

      <div className="max-w-[1280px] mx-auto px-6 md:px-8">

        {/* Breadcrumb / Back Navigation */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#52443f] hover:text-[#42190a] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Collection
          </Link>
          <span className="text-[10px] text-[#85736e] font-semibold">
            Shop &gt; Spices &gt; {product.category}
          </span>
        </div>

        {/* 1. Main Product Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">

          {/* Left Side: Images Showcase (5 Cols) */}
          <div className="lg:col-span-6 space-y-4">

            {/* Big Main Image Card */}
            <div className="relative w-full aspect-square bg-[#f6f3f2] rounded-xl border border-[#eae7e7]/70 flex items-center justify-center p-8 overflow-hidden shadow-premium">
              {/* Organic background blob */}
              <div className="absolute inset-8 bg-[#ffdfa0]/30 rounded-[42%_58%_70%_30%_/_45%_45%_55%_55%] -z-10 animate-morph-1 opacity-70" />

              <div className="w-[85%] h-[85%] relative flex items-center justify-center">
                <img
                  src={product.thumbs[activeThumb] || product.image}
                  alt={product.title}
                  className="max-w-full max-h-full object-contain mix-blend-multiply drop-shadow-xl"
                />
              </div>
            </div>

            {/* Thumbnails Row */}
            <div className="grid grid-cols-4 gap-3">
              {product.thumbs.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveThumb(idx)}
                  className={`aspect-square rounded-lg border bg-[#f6f3f2]/30 p-1 overflow-hidden transition-all flex items-center justify-center cursor-pointer ${activeThumb === idx
                      ? "border-[#795900] ring-1 ring-[#795900]/30 shadow-sm"
                      : "border-[#eae7e7] hover:border-[#85736e]"
                    }`}
                >
                  <img
                    src={thumb}
                    alt={`Thumbnail ${idx + 1}`}
                    className="max-w-full max-h-full object-contain mix-blend-multiply"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Product Details Column (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">

            {/* Category / Star rating */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#795900] bg-[#ffdfa0]/40 px-3 py-1 rounded">
                {product.origin}
              </span>

              <div className="flex items-center gap-2">
                <div className="flex text-[#795900]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-[11px] text-[#52443f] font-bold font-sans">
                  ({product.rating} / 5 based on {product.reviewsCount} reviews)
                </span>
              </div>
            </div>

            {/* Title / Subtitle */}
            <div className="space-y-2">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#42190a] leading-tight">
                {product.title}
              </h1>
              <p className="text-xs font-bold text-[#52443f] tracking-wide uppercase italic">
                {product.subtitle}
              </p>
            </div>

            {/* Price display */}
            <div className="text-2xl font-serif font-bold text-[#42190a] border-b border-[#eae7e7] pb-4">
              ${product.price.toFixed(2)} <span className="text-xs text-[#85736e] font-sans font-normal">/ 100g premium jar</span>
            </div>

            {/* Description */}
            <p className="text-xs text-[#52443f] leading-relaxed">
              {product.description} Sourced directly from agricultural families that use shade-canopy growth, safeguarding ultimate oil concentration and clean natural flavor.
            </p>

            {/* Size selection */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#52443f]">Select Size</span>
              <div className="flex gap-3">
                {["100g Jar", "250g Pack", "500g Bulk"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-4 py-2 border rounded text-xs font-bold transition-all cursor-pointer ${size === s
                        ? "border-[#42190a] bg-[#42190a] text-white"
                        : "border-[#eae7e7] hover:border-[#85736e] text-[#52443f]"
                      }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#192a14] bg-[#d3e9c7] px-3 py-1 rounded-[0.25rem]">
                <Leaf className="w-3 h-3" /> Organic Certified
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#192a14] bg-[#d3e9c7] px-3 py-1 rounded-[0.25rem]">
                <Sparkles className="w-3 h-3" /> Extra Fine Grade
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#192a14] bg-[#d3e9c7] px-3 py-1 rounded-[0.25rem]">
                <ShieldCheck className="w-3 h-3" /> Eco Friendly Packaging
              </span>
            </div>

            {/* Cart controls / Add to Bag */}
            <div className="flex flex-col sm:flex-row gap-4 border-t border-[#eae7e7] pt-6">

              {/* Quantity selector */}
              <div className="flex items-center border border-[#eae7e7] bg-[#f6f3f2]/40 rounded-lg overflow-hidden self-start">
                <button
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="p-3.5 hover:bg-[#f6f3f2] text-[#85736e] transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-5 font-bold text-[#42190a] text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="p-3.5 hover:bg-[#f6f3f2] text-[#85736e] transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex-1">
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-3.5 bg-[#795900] hover:bg-[#5c4300] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.49-4.734c1.652.98 3.284 1.493 4.887 1.493 5.485 0 9.948-4.467 9.95-9.95.002-2.653-1.03-5.15-2.906-7.03C16.6 1.899 14.1 .865 11.446.865c-5.485 0-9.949 4.469-9.95 9.954-.001 1.905.518 3.738 1.5 5.367l-.955 3.486 3.572-.937zm12.333-6.242c-.302-.151-1.786-.881-2.062-.982-.276-.1-.476-.151-.676.151-.2.302-.776.982-.95 1.182-.175.201-.35.226-.652.076-.302-.151-1.274-.469-2.428-1.498-.898-.8-1.503-1.79-1.68-2.091-.176-.302-.019-.465.132-.615.136-.135.302-.351.453-.527.151-.176.201-.302.302-.503.101-.201.05-.377-.026-.527-.075-.151-.676-1.631-.926-2.235-.243-.587-.49-.507-.676-.517-.175-.01-.376-.01-.576-.01-.2 0-.526.075-.802.377-.276.302-1.052 1.03-1.052 2.515 0 1.485 1.077 2.918 1.227 3.12.15.201 2.119 3.235 5.132 4.536.717.31 1.277.495 1.713.633.721.23 1.378.197 1.896.12.578-.088 1.786-.73 2.037-1.435.251-.704.251-1.307.176-1.435-.076-.12-.276-.197-.577-.348z" />
                  </svg>
                  <span>Order via WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Collapsible drawers */}
            <div className="space-y-2 border-t border-[#eae7e7] pt-6">
              {/* Sensory Profile */}
              <div className="border border-[#eae7e7] rounded-lg overflow-hidden bg-white shadow-sm">
                <button
                  onClick={() => setIsSensoryOpen(!isSensoryOpen)}
                  className="w-full px-4 py-3 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#42190a] hover:bg-[#f6f3f2]/30 text-left cursor-pointer"
                >
                  <span>Sensory Profile</span>
                  {isSensoryOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {isSensoryOpen && (
                  <div className="px-4 pb-4 pt-1 text-[11px] text-[#52443f] leading-relaxed border-t border-[#eae7e7]/40">
                    {product.sensoryProfile}
                  </div>
                )}
              </div>

              {/* Health Benefits */}
              <div className="border border-[#eae7e7] rounded-lg overflow-hidden bg-white shadow-sm">
                <button
                  onClick={() => setIsBenefitsOpen(!isBenefitsOpen)}
                  className="w-full px-4 py-3 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#42190a] hover:bg-[#f6f3f2]/30 text-left cursor-pointer"
                >
                  <span>Health Benefits</span>
                  {isBenefitsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {isBenefitsOpen && (
                  <div className="px-4 pb-4 pt-1 text-[11px] text-[#52443f] leading-relaxed border-t border-[#eae7e7]/40">
                    {product.healthBenefits}
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* 2. Deep Provenance Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {/* True Ceylon Origin (Brown card) */}
          <div className="bg-[#5d2e1d] text-white p-8 rounded-xl relative overflow-hidden shadow-premium flex flex-col justify-between min-h-[220px]">
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/5 blur-xl rounded-full" />
            <div className="space-y-4">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#ffdfa0] bg-white/10 px-2.5 py-1 rounded">Heritage</span>
              <h3 className="font-serif text-xl md:text-2xl font-bold">The True Ceylon Origin</h3>
              <p className="text-xs text-[#eae7e7]/80 leading-relaxed">
                {product.provenanceText} We partner directly with forest farming groups who preserve soil integrity and clean agriculture.
              </p>
            </div>
            <div className="flex gap-6 mt-6 border-t border-white/10 pt-4 text-center">
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-[#ffdfa0]">Purity</p>
                <p className="text-sm font-serif font-bold">100% Highlands</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-[#ffdfa0]">Quality</p>
                <p className="text-sm font-serif font-bold">Premium Grade</p>
              </div>
            </div>
          </div>

          {/* Certified Organic (Green card) */}
          <div className="bg-[#192a14] text-white p-8 rounded-xl relative overflow-hidden shadow-premium flex flex-col justify-between min-h-[220px]">
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/5 blur-xl rounded-full" />
            <div className="space-y-4">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#97ac8d] bg-[#2e4028] px-2.5 py-1 rounded">Certified</span>
              <h3 className="font-serif text-xl md:text-2xl font-bold">Certified Organic</h3>
              <p className="text-xs text-[#eae7e7]/80 leading-relaxed">
                {product.certifiedText} Sourced directly, fair compensation, supporting forest-garden farming and village community prosperity.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-6 border-t border-[#eae7e7]/10 pt-4">
              <div className="w-8 h-8 rounded-full bg-[#2e4028] flex items-center justify-center text-[#97ac8d]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#97ac8d]">USDA Organic Approved</span>
            </div>
          </div>
        </section>

        {/* 3. The Artisan's Pantry (Recommended Pairings) */}
        <section className="mb-20">
          <div className="flex justify-between items-end border-b border-[#eae7e7] pb-4 mb-8">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#795900]">Recommended Pairings</p>
              <h2 className="font-serif text-2xl font-bold text-[#42190a]">The Artisan's Pantry</h2>
            </div>
            <div className="flex gap-2">
              <Link
                href="/products"
                className="text-xs font-bold uppercase tracking-wider text-[#795900] hover:underline"
              >
                View All Spices
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {detailedProducts.filter(p => p.id !== product.id).slice(0, 4).map(p => (
              <div
                key={p.id}
                className="bg-white rounded-lg border border-[#eae7e7]/60 p-4 flex flex-col hover:shadow-premium transition-all group"
              >
                <Link href={`/products/${p.id}`} className="relative w-full aspect-square bg-[#f6f3f2]/40 rounded-lg overflow-hidden flex items-center justify-center p-2 mb-3">
                  <img src={p.image} alt={p.title} className="w-[80%] h-[80%] object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" />
                </Link>
                <Link href={`/products/${p.id}`}>
                  <h4 className="font-serif font-bold text-[#42190a] text-sm hover:text-[#795900] leading-snug">{p.title}</h4>
                </Link>
                <p className="text-[10px] text-[#85736e] uppercase font-bold tracking-wider mt-1">{p.origin}</p>
                <div className="flex justify-between items-center mt-3 pt-2 border-t border-[#eae7e7]/30">
                  <span className="font-serif font-bold text-xs text-[#42190a]">${p.price.toFixed(2)}</span>
                  <Link href={`/products/${p.id}`} className="text-[10px] font-bold uppercase tracking-wider text-[#795900] hover:underline">
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Whispers from the Kitchen (Reviews Showcase) */}
        <section className="bg-[#f6f3f2]/50 rounded-xl border border-[#eae7e7] p-8 md:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left summary column */}
            <div className="lg:col-span-4 space-y-4">
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#795900]">Whispers from the Kitchen</p>
              <h2 className="font-serif text-2xl font-bold text-[#42190a]">Verified Reviews</h2>

              <div className="flex items-end gap-3 pt-2">
                <span className="text-4xl font-serif font-bold text-[#42190a]">{product.rating.toFixed(1)}</span>
                <div>
                  <div className="flex text-[#795900] mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-[#85736e] uppercase tracking-wider">Based on {product.reviewsCount} reviews</span>
                </div>
              </div>
              <button className="w-full py-2.5 border border-[#42190a] hover:bg-[#42190a]/5 text-[#42190a] rounded font-bold text-[10px] uppercase tracking-wider transition-all cursor-pointer">
                Write a Review
              </button>
            </div>

            {/* Right reviews column */}
            <div className="lg:col-span-8 space-y-6">
              <div className="border-b border-[#eae7e7] pb-6 space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-[#795900] text-white flex items-center justify-center text-xs font-bold">E</span>
                    <div>
                      <h4 className="text-xs font-bold text-[#1b1c1c]">Eleanor V.</h4>
                      <p className="text-[9px] font-bold text-[#85736e] uppercase tracking-wider">Verified Buyer • October 14, 2025</p>
                    </div>
                  </div>
                  <div className="flex text-[#795900]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-[11px] font-serif font-bold text-[#42190a] italic">"A revelation for my baking!"</p>
                <p className="text-xs text-[#52443f] leading-relaxed">
                  The difference between this Alba grade cinnamon and supermarket cinnamon is huge. The aroma fills the entire kitchen when I open the jar. It is delicate, sweet, and pure luxury in my cakes.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-[#192a14] text-white flex items-center justify-center text-xs font-bold">J</span>
                    <div>
                      <h4 className="text-xs font-bold text-[#1b1c1c]">Julian R.</h4>
                      <p className="text-[9px] font-bold text-[#85736e] uppercase tracking-wider">Verified Buyer • September 22, 2025</p>
                    </div>
                  </div>
                  <div className="flex text-[#795900]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-[11px] font-serif font-bold text-[#42190a] italic">"Superior Quality & Ethics"</p>
                <p className="text-xs text-[#52443f] leading-relaxed">
                  Knowing that this is directly sourced and supports rural families in Sri Lanka makes it worth every cent. The quality of cardamom and cinnamon is unmatched. Absolutely premium!
                </p>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
