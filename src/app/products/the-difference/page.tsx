'use client';

import { useState } from "react";
import Link from "next/link";
import { Sparkles, ShieldAlert, ShieldCheck, Check, X, ArrowRight, HeartPulse } from "lucide-react";
import { motion } from "framer-motion";
import InquiryModal from "@/components/InquiryModal";

export default function TheDifferencePage() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const comparisonData = [
    {
      aspect: "Taste & Aroma",
      ceylon: "Mild, Sweet, Delicate with citrus notes",
      cassia: "Slightly bitter, Strong, Spicy, Pungent"
    },
    {
      aspect: "Health & Safety",
      ceylon: "Negligible coumarin content (~0.017 mg/teaspoon) • Safe for daily use",
      cassia: "High coumarin content (7–18 mg/teaspoon) • Excess intake may cause Liver damage"
    },
    {
      aspect: "Appearance",
      ceylon: "Thin & Fragile • Quills made of multiple fine paper-like layers",
      cassia: "Thick & Hard • Hard bark rolled into a single scroll"
    },
    {
      aspect: "Availability",
      ceylon: "Premium Quality • Mainly from Sri Lanka (Ceylon)",
      cassia: "Cheaper • Widely available (China, Indonesia, Vietnam)"
    },
    {
      aspect: "Nutritional Value",
      ceylon: "Rich in Antioxidants • Safer for long-term consumption",
      cassia: "Contains Antioxidants • But NOT safe for long-term consumption"
    },
    {
      aspect: "Culinary Use",
      ceylon: "Best for Premium desserts, Teas, Delicate dishes & Gourmet use",
      cassia: "Common in Baking & Curries"
    },
    {
      aspect: "Market Position",
      ceylon: "Luxury spice • Known as “True Cinnamon”",
      cassia: "Not real cinnamon (Commercial Cassia substitute)"
    }
  ];

  return (
    <div className="w-full bg-[#fcf9f8] text-[#1b1c1c] overflow-x-hidden min-h-screen pb-24 pt-4 font-sans">
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 md:px-8">

        {/* 1. HERO Section matching prompt request */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-3xl overflow-hidden mb-12 shadow-2xl border border-[#795900]/20 bg-[#1c120c] text-white p-8 sm:p-12 text-center"
        >
          {/* Background image & gradient */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero_cinnamon_background.png"
              alt="Ceylon Cinnamon vs Cassia"
              className="w-full h-full object-cover object-center opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#140b06] via-[#1c120c]/90 to-[#2e190e]/85" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] md:text-xs font-extrabold uppercase tracking-[0.25em] text-[#ffdfa0] bg-[#ffdfa0]/15 px-3 py-1 rounded-full border border-[#ffdfa0]/30 inline-block">
              Consumer Safety & Quality Guide
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#fcf9f8]">
              Cassia vs Ceylon Cinnamon
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-[#eae7e7]/90 font-medium leading-relaxed">
              Understand the crucial differences between True Ceylon Cinnamon and industrial Cassia bark — from Coumarin toxicity to delicate culinary flavor.
            </p>
          </div>
        </motion.div>

        {/* 2. Heading Section */}
        <div className="mb-8 text-left">
          <p className="text-xs font-extrabold text-[#795900] uppercase tracking-widest mb-1">
            Cassia vs Ceylon Cinnamon
          </p>
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#111827] tracking-tight uppercase border-b-2 border-black inline-block pb-1">
            THE DIFFERENCE
          </h2>
        </div>

        {/* 3. Showcase Grid matching user layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column: Pictures Box (Cassia Picture + Ceylon Cinnamon Picture) */}
          <div className="lg:col-span-4 bg-white border-2 border-[#81b752] rounded-2xl p-5 shadow-sm space-y-6 flex flex-col justify-between">
            
            {/* Cassia Picture */}
            <div className="space-y-2">
              <span className="block text-xs font-extrabold uppercase tracking-wider text-[#991b1b] text-center bg-[#fee2e2] py-1.5 rounded-lg border border-[#fecaca]">
                Cassia Bark (Thick Hard Bark)
              </span>
              <div className="w-full h-44 sm:h-48 bg-[#faf8f5] rounded-2xl overflow-hidden border border-[#eae7e7] flex items-center justify-center p-3">
                <img
                  src="/images/card_cinnamon.png"
                  alt="Cassia Cinnamon Bark"
                  className="max-h-full max-w-full object-contain mix-blend-multiply drop-shadow"
                />
              </div>
            </div>

            {/* Ceylon Cinnamon Picture */}
            <div className="space-y-2 pt-2 border-t border-[#eae7e7]">
              <span className="block text-xs font-extrabold uppercase tracking-wider text-[#166534] text-center bg-[#dcfce7] py-1.5 rounded-lg border border-[#bbf7d0]">
                Ceylon Cinnamon (Paper-Thin Quills)
              </span>
              <div className="w-full h-44 sm:h-48 bg-[#faf8f5] rounded-2xl overflow-hidden border border-[#eae7e7] flex items-center justify-center p-3">
                <img
                  src="/images/alba_cinnamon_detail.png"
                  alt="Pure Ceylon Cinnamon Paper-Thin Quills"
                  className="max-h-full max-w-full object-contain mix-blend-multiply drop-shadow"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Green Outline Text Container Vertically Centered & Height Matched */}
          <div className="lg:col-span-8 border-2 border-[#81b752] bg-white rounded-[32px] p-6 sm:p-10 shadow-sm space-y-6 text-left flex flex-col justify-center h-full">
            <div className="space-y-4">
              <p className="text-xs sm:text-sm md:text-base text-[#1f2937] leading-relaxed">
                <strong className="text-[#991b1b] font-bold">Cassia Cinnamon (Cinnamomum Cassia)</strong> is a cheaper, stronger-flavoured spice compared to True Ceylon Cinnamon. Its bark is darker, thicker, and rougher, with a brown exterior and reddish-brown interior. Unlike Ceylon Cinnamon, Cassia is just a single thick bark layer rolled into sticks, requiring less processing. Commonly sourced from China, Indonesia, and Vietnam, it contains high levels of <strong className="text-[#991b1b]">Coumarin</strong>, giving it a strong aroma and taste but not safer to daily use.
              </p>

              <div className="border-t border-[#81b752]/30 pt-4">
                <p className="text-xs sm:text-sm md:text-base text-[#1f2937] leading-relaxed">
                  <strong className="text-[#166534] font-bold">Pure Ceylon Cinnamon (Cinnamomum Zeylanicum Blume)</strong> is rare and pricier, grown only in Sri Lanka. Its quills are light brown, silky, paper-thin, and delicately layered. Unlike Cassia, it has a sweeter, softer, citrus flavour, making it the premium choice for culinary and artistic uses plus safer to daily use.
                </p>
              </div>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#eae7e7]">
              <div className="flex items-center gap-2.5 bg-[#dcfce7]/60 p-3 rounded-xl border border-[#86efac]">
                <ShieldCheck className="w-5 h-5 text-[#166534] flex-shrink-0" />
                <span className="text-[11px] md:text-xs font-extrabold text-[#166534]">Ultra-Low Coumarin (0.017mg/tsp)</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#fee2e2]/60 p-3 rounded-xl border border-[#fca5a5]">
                <ShieldAlert className="w-5 h-5 text-[#991b1b] flex-shrink-0" />
                <span className="text-[11px] md:text-xs font-extrabold text-[#991b1b]">Cassia High Coumarin (7-18mg/tsp)</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Comparison Table matching Image 1 layout */}
        <div className="mb-16">
          <h3 className="font-serif font-black text-xl md:text-2xl text-[#111827] mb-6 text-left">
            Detailed Comparison: Ceylon Cinnamon vs Cassia
          </h3>

          <div className="overflow-x-auto bg-white rounded-2xl border border-[#eae7e7] shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#eae7e7] bg-[#f9fafb]">
                  <th className="py-4 px-5 text-xs font-extrabold uppercase tracking-wider text-[#111827] w-1/4">
                    Aspect
                  </th>
                  <th className="py-4 px-5 text-xs font-extrabold uppercase tracking-wider text-[#166534] bg-[#f0fdf4] w-3/8">
                    🌿 Ceylon Cinnamon (True Cinnamon)
                  </th>
                  <th className="py-4 px-5 text-xs font-extrabold uppercase tracking-wider text-[#991b1b] bg-[#fef2f2] w-3/8">
                    ⚠️ Cassia Cinnamon (Commercial)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eae7e7] text-xs sm:text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#fafafa] transition-colors">
                    <td className="py-4 px-5 font-bold text-[#111827] align-top">
                      {row.aspect}
                    </td>
                    <td className="py-4 px-5 text-[#166534] font-medium bg-[#f0fdf4]/40 align-top">
                      {row.ceylon}
                    </td>
                    <td className="py-4 px-5 text-[#7f1d1d] font-medium bg-[#fef2f2]/40 align-top">
                      {row.cassia}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 5. Bottom Action CTA */}
        <div className="bg-gradient-to-r from-[#1c120c] to-[#2e190e] rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-left">
          <div>
            <h4 className="font-serif font-black text-2xl text-[#ffdfa0] mb-1">
              Looking for 100% Certified Ceylon Cinnamon?
            </h4>
            <p className="text-xs sm:text-sm text-[#eae7e7]">
              We source directly from southern Sri Lankan plantations with guaranteed single-origin authenticity.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => setIsInquiryModalOpen(true)}
              className="px-6 py-3 bg-[#ffdfa0] hover:bg-[#ffeac2] text-[#1c120c] font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
            >
              Inquire Now
            </button>
            <Link
              href="/products/wholesale"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
            >
              Wholesale Grades
            </Link>
          </div>
        </div>

      </div>

      {/* Inquiry Form Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        productTitle="True Ceylon Cinnamon (GI Certified)"
      />
    </div>
  );
}
