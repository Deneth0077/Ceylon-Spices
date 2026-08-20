'use client';

import { useState } from "react";
import Link from "next/link";
import { Sparkles, ShieldCheck, Leaf, Award, ArrowDown, CheckCircle2 } from "lucide-react";
import { productsData, Product } from "@/data/products";
import InquiryModal from "@/components/InquiryModal";
import { motion } from "framer-motion";

export default function SignatureRangePage() {
  const [selectedProductForInquiry, setSelectedProductForInquiry] = useState<Product | null>(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const signatureProducts = productsData.filter(p => p.category === "Signature Range");

  const handleOpenInquiry = (product: Product) => {
    setSelectedProductForInquiry(product);
    setIsInquiryModalOpen(true);
  };

  const scrollToGrid = () => {
    const elem = document.getElementById('signature-collection-grid');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full bg-[#fcf9f8] text-[#1b1c1c] overflow-x-hidden min-h-screen pb-24 pt-4 font-sans">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">

        {/* 1. Stunning Hero Section with Beautiful Background & Canister Presentation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-3xl overflow-hidden mb-16 shadow-2xl border border-[#795900]/20 bg-[#1c120c]"
        >
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero_cinnamon_background.png"
              alt="Ceylon Spice Estate"
              className="w-full h-full object-cover object-center opacity-35"
            />
            {/* Gradient Overlays for Depth & Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#140b06] via-[#1c120c]/90 to-[#2e190e]/80" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#140b06]/40 to-[#140b06]/90" />
          </div>

          {/* Hero Content Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 md:p-16">
            
            {/* Left Column: Typography & Selling Points */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-[#ffdfa0]/15 border border-[#ffdfa0]/30 px-3.5 py-1.5 rounded-full text-[#ffdfa0] text-xs font-extrabold uppercase tracking-widest backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#ffdfa0]" />
                <span>Luxury Heritage Collection</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
                Artisanal Ceylon <br />
                <span className="text-[#ffdfa0] italic font-serif">Signature Range</span>
              </h1>

              {/* Call to Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={scrollToGrid}
                  className="px-6 py-3.5 bg-[#795900] hover:bg-[#5c4300] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg hover:scale-[1.02] cursor-pointer flex items-center gap-2"
                >
                  <span>Explore Products</span>
                  <ArrowDown className="w-4 h-4" />
                </button>
                <a
                  href="https://wa.me/94772893030?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20the%20Signature%20Range%20Gift%20Packs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20b858] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg hover:scale-[1.02] cursor-pointer"
                >
                  WhatsApp Inquiry
                </a>
              </div>
            </div>

            {/* Right Column: Floating 3D Canister Presentation */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              {/* Warm Golden Glow Behind Canister */}
              <div className="absolute w-72 h-72 rounded-full bg-[#ffdfa0]/20 blur-3xl -z-0 pointer-events-none" />
              
              <div className="relative z-10 p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm flex items-center justify-center shadow-2xl">
                <img
                  src="/images/cinnamon_canister_3d.png"
                  alt="True Cinnamon Care Luxury Canister"
                  className="w-auto h-72 sm:h-80 md:h-96 object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </motion.div>

        {/* 2. Section Title matching User Screenshot */}
        <div id="signature-collection-grid" className="mb-10 text-left scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111827] tracking-tight uppercase border-b-2 border-black inline-block pb-1 font-sans">
            SIGNATURE RANGE
          </h2>
          <p className="text-xs sm:text-sm text-[#52443f] font-medium mt-2 max-w-2xl">
            Single-origin Sri Lanka export-grade gift canisters. Vacuum-sealed for peak volatile oil freshness and presented in luxury recyclable paper canisters inspired by Sri Lanka’s cultural heritage.
          </p>
        </div>

        {/* 3. Grid of Signature Range Products (2 Columns Layout matching user mockups) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {signatureProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-[#eae7e7] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Product Image Box */}
              <Link
                href={`/products/${product.id}`}
                className="block relative w-full h-80 bg-[#faf8f5] p-6 flex items-center justify-center"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300 drop-shadow-xl"
                />
              </Link>

              {/* Metadata Box matching screenshot layout */}
              <div className="p-6 pt-5 border-t border-[#f3f4f6] flex flex-col justify-between flex-grow">
                <div>
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-lg md:text-xl font-extrabold text-[#111827] font-sans hover:text-[#795900] transition-colors line-clamp-1 mb-4 text-center">
                      {product.title}
                    </h3>
                  </Link>
                </div>

                {/* Dark Navy / Black VIEW PRODUCT Button navigating into product detail page */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Link
                    href={`/products/${product.id}`}
                    className="w-full bg-[#111827] hover:bg-[#1f2937] text-white text-center py-3.5 text-xs font-extrabold uppercase tracking-wider transition-colors rounded block"
                  >
                    VIEW PRODUCT
                  </Link>
                  <button
                    onClick={() => handleOpenInquiry(product)}
                    className="w-full bg-[#795900] hover:bg-[#5c4300] text-white text-center py-3.5 text-xs font-extrabold uppercase tracking-wider transition-colors rounded cursor-pointer"
                  >
                    INQUIRE NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Inquiry Form Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        productTitle={selectedProductForInquiry?.title}
      />
    </div>
  );
}
