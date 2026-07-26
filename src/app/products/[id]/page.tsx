'use client';

import { use, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Leaf, Star, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { productsData, Product } from "@/data/products";
import InquiryModal from "@/components/InquiryModal";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const productId = parseInt(resolvedParams.id);

  const [activeThumb, setActiveThumb] = useState(0);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  // Accordion drawer states
  const [isSensoryOpen, setIsSensoryOpen] = useState(true);
  const [isBenefitsOpen, setIsBenefitsOpen] = useState(false);

  const product: Product = productsData.find((p) => p.id === productId) || productsData[0];

  const handleWhatsAppCheckout = () => {
    const message = `*True Cinnamon Care - Product Inquiry*\n=================================\nProduct: *${product.title}*\n=================================\nPlease confirm availability & details. Thank you!`;
    const whatsappUrl = `https://wa.me/94772893030?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full bg-[#fcf9f8] text-[#1b1c1c] overflow-x-hidden pb-12 pt-4">

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
            Shop &gt; Spices &gt; {product.subCategory || product.category}
          </span>
        </div>

        {/* Header Heading matching Client Mockup */}
        <div className="mb-6 border-b border-[#eae7e7] pb-4">
          <h1 className="font-serif text-3xl md:text-4xl font-black text-[#2b1810]">
            {product.title}
          </h1>
        </div>

        {/* 1. Main Product Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">

          {/* Left Side: Images Showcase (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">

            {/* Big Main Image Card */}
            <div className="relative w-full aspect-square bg-[#f6f3f2] rounded-2xl border border-[#eae7e7]/70 flex items-center justify-center p-8 overflow-hidden shadow-premium">
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
            {product.thumbs.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.thumbs.map((thumb, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveThumb(idx)}
                    className={`aspect-square rounded-xl border bg-[#f6f3f2]/30 p-1 overflow-hidden transition-all flex items-center justify-center cursor-pointer ${activeThumb === idx
                        ? "border-[#795900] ring-2 ring-[#795900]/30 shadow-sm"
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
            )}
          </div>

          {/* Right Side: Product Details & Green Outline Box Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">

            {/* Origin Badge */}
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
                  (5.0 / 5 Authentic Ceylon Grade)
                </span>
              </div>
            </div>

            {/* Green Outline Description Box matching Client Uploaded Mockup Images */}
            <div className="border-2 border-[#81b752] bg-white rounded-[32px] p-6 sm:p-8 shadow-sm space-y-4">
              <h3 className="font-serif font-black text-xl text-[#2b1810]">
                {product.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-[#2b1810] font-medium leading-relaxed whitespace-pre-line">
                {product.detailedDescription || product.description}
              </p>
              {product.packaging && (
                <p className="text-xs sm:text-sm text-[#52443f] pt-1">
                  <strong>Packaging:</strong> {product.packaging}
                </p>
              )}
              {product.netWeight && (
                <p className="text-xs sm:text-sm text-[#52443f]">
                  <strong>Net Weight:</strong> {product.netWeight}
                </p>
              )}
            </div>

            {/* Action Buttons: INQUIRE NOW (Gray Modal) & WHATSAPP (Green) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#eae7e7] pt-6">
              <button
                onClick={() => setIsInquiryModalOpen(true)}
                className="py-3.5 px-6 bg-[#6c7073] hover:bg-[#575a5d] text-white text-center font-extrabold text-xs uppercase tracking-wider rounded-full transition-all shadow-md hover:scale-[1.02] cursor-pointer"
              >
                INQUIRE NOW
              </button>

              <button
                onClick={handleWhatsAppCheckout}
                className="py-3.5 px-6 bg-[#6ba343] hover:bg-[#598c36] text-white text-center font-extrabold text-xs uppercase tracking-wider rounded-full transition-all shadow-md hover:scale-[1.02] cursor-pointer"
              >
                WHATSAPP
              </button>
            </div>

            {/* Custom tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#192a14] bg-[#d3e9c7] px-3 py-1 rounded-[0.25rem]">
                <Leaf className="w-3 h-3" /> Organic Certified
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#192a14] bg-[#d3e9c7] px-3 py-1 rounded-[0.25rem]">
                <Sparkles className="w-3 h-3" /> Single Origin Ceylon
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#192a14] bg-[#d3e9c7] px-3 py-1 rounded-[0.25rem]">
                <ShieldCheck className="w-3 h-3" /> Eco Friendly Packaging
              </span>
            </div>

          </div>
        </div>

        {/* 2. Deep Provenance Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {/* True Ceylon Origin (Brown card) */}
          <div className="bg-[#5d2e1d] text-white p-8 rounded-xl relative overflow-hidden shadow-premium flex flex-col justify-between min-h-[220px]">
            <div className="space-y-4">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#ffdfa0] bg-white/10 px-2.5 py-1 rounded">Heritage</span>
              <h3 className="font-serif text-xl md:text-2xl font-bold">The True Ceylon Origin</h3>
              <p className="text-sm text-[#eae7e7]/80 leading-relaxed">
                Harvested directly from our single-origin plantations in Sri Lanka. We partner directly with forest farming groups who preserve soil integrity and clean agriculture.
              </p>
            </div>
            <div className="flex gap-6 mt-6 border-t border-white/10 pt-4 text-center">
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-[#ffdfa0]">Purity</p>
                <p className="text-sm font-serif font-bold">100% Single Origin</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-[#ffdfa0]">Quality</p>
                <p className="text-sm font-serif font-bold">Export Grade</p>
              </div>
            </div>
          </div>

          {/* Certified Organic (Green card) */}
          <div className="bg-[#192a14] text-white p-8 rounded-xl relative overflow-hidden shadow-premium flex flex-col justify-between min-h-[220px]">
            <div className="space-y-4">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#97ac8d] bg-[#2e4028] px-2.5 py-1 rounded">Certified</span>
              <h3 className="font-serif text-xl md:text-2xl font-bold">Certified Organic & Ethical</h3>
              <p className="text-sm text-[#eae7e7]/80 leading-relaxed">
                100% chemical-free and sustainably harvested. Sourced directly with fair compensation, supporting forest-garden farming and village community prosperity.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-6 border-t border-[#eae7e7]/10 pt-4">
              <div className="w-8 h-8 rounded-full bg-[#2e4028] flex items-center justify-center text-[#97ac8d]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#97ac8d]">USDA & EU GI Certified</span>
            </div>
          </div>
        </section>

      </div>

      {/* Inquiry Form Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        productTitle={product.title}
      />

    </div>
  );
}
