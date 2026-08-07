'use client';

import { useState } from "react";
import Link from "next/link";
import { Sparkles, History, Layers, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import InquiryModal from "@/components/InquiryModal";

export default function TheCeylonCinnamonPage() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const historyData = [
    {
      era: "Ancient Egypt",
      role: "Rituals, embalming, medicine",
      impact: "Sacred & medicinal value"
    },
    {
      era: "Roman Empire",
      role: "Luxury spice, worth more than silver",
      impact: "Symbol of wealth"
    },
    {
      era: "Arab Traders",
      role: "Monopoly with myths",
      impact: "Maintained rarity & high price"
    },
    {
      era: "Colonial Powers",
      role: "Portuguese, Dutch, British control",
      impact: "Exploitation & plantation expansion"
    },
    {
      era: "Modern Sri Lanka",
      role: "Global exports & research",
      impact: "Leading producer of true cinnamon"
    }
  ];

  const gradesData = [
    {
      grade: "Alba",
      appearance: "Pale gold, paper-thin, delicate",
      bestUse: "Luxury teas, desserts, fine cuisine, premium Dishes",
      priceTier: "$$$$$ (most expensive, rare)"
    },
    {
      grade: "C5 Extra Special / C5 Special",
      appearance: "Golden-brown, little larger than Alba",
      bestUse: "Luxury teas, desserts, fine cuisine, premium Dishes",
      priceTier: "$$$$ (premium standard)"
    },
    {
      grade: "C5",
      appearance: "Golden-brown, tightly rolled",
      bestUse: "Luxury teas, desserts, premium Dishes, Baking",
      priceTier: "$$$ (premium standard)"
    },
    {
      grade: "C4",
      appearance: "Slightly thicker, darker, robust aroma",
      bestUse: "Everyday cooking, simmered dishes",
      priceTier: "$$"
    },
    {
      grade: "M Grades (M5, M4)",
      appearance: "Thicker, bolder, less delicate",
      bestUse: "Slow-cooked dishes, mulled drinks, bulk use",
      priceTier: "$"
    },
    {
      grade: "H Grades (H1, H2, H3)",
      appearance: "Thickest bark, strong",
      bestUse: "Industrial grinding, extracts, bulk trade",
      priceTier: "$"
    },
    {
      grade: "Quillings, Featherings, Chips",
      appearance: "Same bark, irregular form",
      bestUse: "Tea brewing, grinding",
      priceTier: "$"
    }
  ];

  return (
    <div className="w-full bg-[#fcf9f8] text-[#1b1c1c] overflow-x-hidden min-h-screen pb-24 pt-4 font-sans">
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 md:px-8">

        {/* 1. Hero Section matching user mockups */}
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
              alt="The Ceylon Cinnamon"
              className="w-full h-full object-cover object-center opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#140b06] via-[#1c120c]/90 to-[#2e190e]/85" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] md:text-xs font-extrabold uppercase tracking-[0.25em] text-[#ffdfa0] bg-[#ffdfa0]/15 px-3 py-1 rounded-full border border-[#ffdfa0]/30 inline-block">
              Cinnamomum Verum • True Heritage
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#fcf9f8]">
              THE CEYLON CINNAMON
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-[#eae7e7]/90 font-medium leading-relaxed">
              Explore the 4,000-year heritage, unique botanical compounds, and world-standard quill grading of Sri Lanka’s most legendary spice.
            </p>
          </div>
        </motion.div>

        {/* 2. SECTION 1: STORY OF THE HISTORY (Image 2) */}
        <section className="mb-20">
          <div className="mb-8 text-left">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#111827] tracking-tight uppercase border-b-2 border-black inline-block pb-1 font-sans">
              STORY OF THE HISTORY
            </h2>
          </div>

          {/* Showcase Box matching Image 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            
            {/* Left Image Box */}
            <div className="lg:col-span-5 w-full h-72 sm:h-80 bg-white border border-[#eae7e7] rounded-2xl p-4 flex items-center justify-center overflow-hidden shadow-sm">
              <img
                src="/images/alba_cinnamon_detail.png"
                alt="Story of Ceylon Cinnamon"
                className="max-h-full max-w-full object-contain mix-blend-multiply drop-shadow-md"
              />
            </div>

            {/* Right Green Outline Box matching Image 2 */}
            <div className="lg:col-span-7 border-2 border-[#81b752] bg-white rounded-[32px] p-6 sm:p-8 shadow-sm text-left">
              <p className="text-xs sm:text-sm md:text-base text-[#1f2937] font-medium leading-relaxed">
                Ceylon cinnamon has a 4000 year legacy rooted in Sri Lanka, prized since ancient times for its delicate flavor, medicinal value, and role in global trade. From Egyptian rituals to Roman luxury markets, Arab trade monopolies, and European colonial battles, it has shaped Sri Lanka’s economy and identity. Today, Sri Lanka remains the world’s leading source of true cinnamon.
              </p>
            </div>

          </div>

          {/* History Era Table matching Image 2 */}
          <div className="overflow-x-auto bg-white rounded-2xl border border-[#eae7e7] shadow-sm text-left">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#eae7e7] bg-[#f9fafb]">
                  <th className="py-4 px-6 text-xs font-extrabold uppercase tracking-wider text-[#111827] w-1/4">
                    Era
                  </th>
                  <th className="py-4 px-6 text-xs font-extrabold uppercase tracking-wider text-[#795900] w-1/2">
                    Role of Cinnamon
                  </th>
                  <th className="py-4 px-6 text-xs font-extrabold uppercase tracking-wider text-[#166534] w-1/4">
                    Impact
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eae7e7] text-xs sm:text-sm">
                {historyData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#fafafa] transition-colors">
                    <td className="py-3.5 px-6 font-extrabold text-[#111827]">
                      {row.era}
                    </td>
                    <td className="py-3.5 px-6 text-[#374151] font-medium">
                      {row.role}
                    </td>
                    <td className="py-3.5 px-6 text-[#166534] font-bold">
                      {row.impact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. SECTION 2: THE CEYLON CINNAMON OVERVIEW (Image 3) */}
        <section className="mb-20">
          <div className="mb-8 text-left">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#111827] tracking-tight uppercase border-b-2 border-black inline-block pb-1 font-sans">
              THE CEYLON CINNAMON
            </h2>
          </div>

          {/* Showcase Box matching Image 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Green Outline Box matching Image 3 */}
            <div className="lg:col-span-7 border-2 border-[#81b752] bg-white rounded-[32px] p-6 sm:p-8 shadow-sm text-left">
              <p className="text-xs sm:text-sm md:text-base text-[#1f2937] font-medium leading-relaxed">
                Ceylon cinnamon contains over 80 compounds, with Cinnamaldehyde in the bark and Eugenol in the leaf oil. Valued as the most useful spice and it’s used in medicine, perfumes, beverages, and also widely in pharmaceuticals, bakeries, and cosmetics. Known globally for its unique aroma, premium quality, health benefits, and ultra-low coumarin level. Its delicate quills are crafted through a traditional technique exclusive to Sri Lanka, passed down for generations.
              </p>
            </div>

            {/* Right Image Box */}
            <div className="lg:col-span-5 w-full h-72 sm:h-80 bg-white border border-[#eae7e7] rounded-2xl p-4 flex items-center justify-center overflow-hidden shadow-sm">
              <img
                src="/images/card_cinnamon.png"
                alt="Pure Ceylon Cinnamon Compounds"
                className="max-h-full max-w-full object-contain mix-blend-multiply drop-shadow-md"
              />
            </div>

          </div>
        </section>

        {/* 4. SECTION 3: GRADES IN BRIEF (Image 3) */}
        <section className="mb-16 text-left">
          <div className="mb-4">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#111827] tracking-tight uppercase border-b-2 border-black inline-block pb-1 font-sans">
              GRADES IN BRIEF
            </h2>
            <p className="text-xs sm:text-sm text-[#4b5563] font-medium mt-3 max-w-3xl leading-relaxed">
              Ceylon cinnamon is graded mainly by the thickness and quality of its quills, ranging from the ultra-fine Alba to thicker grades like Mexican (M) and Hamburg (H). Thinner quills are sweeter, more delicate, and more expensive, while thicker ones are stronger, and cheaper.
            </p>
          </div>

          {/* Grades Table matching Image 3 */}
          <div className="overflow-x-auto bg-white rounded-2xl border border-[#eae7e7] shadow-sm mt-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#eae7e7] bg-[#f9fafb]">
                  <th className="py-4 px-5 text-xs font-extrabold uppercase tracking-wider text-[#111827] w-1/4">
                    Grade
                  </th>
                  <th className="py-4 px-5 text-xs font-extrabold uppercase tracking-wider text-[#795900] w-1/4">
                    Appearance
                  </th>
                  <th className="py-4 px-5 text-xs font-extrabold uppercase tracking-wider text-[#1f2937] w-1/3">
                    Best Use
                  </th>
                  <th className="py-4 px-5 text-xs font-extrabold uppercase tracking-wider text-[#166534] w-1/6">
                    Price Tier
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eae7e7] text-xs sm:text-sm">
                {gradesData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#fafafa] transition-colors">
                    <td className="py-3.5 px-5 font-extrabold text-[#111827]">
                      {row.grade}
                    </td>
                    <td className="py-3.5 px-5 text-[#4b5563] font-medium">
                      {row.appearance}
                    </td>
                    <td className="py-3.5 px-5 text-[#374151] font-medium">
                      {row.bestUse}
                    </td>
                    <td className="py-3.5 px-5 font-extrabold text-[#166534]">
                      {row.priceTier}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. Bottom Action CTA */}
        <div className="bg-gradient-to-r from-[#1c120c] to-[#2e190e] rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-left">
          <div>
            <h4 className="font-serif font-black text-2xl text-[#ffdfa0] mb-1">
              Ready to Order Authentic Ceylon Cinnamon?
            </h4>
            <p className="text-xs sm:text-sm text-[#eae7e7]">
              Inquire for bulk wholesale container loads or consumer-ready luxury canisters.
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
              href="/products/the-difference"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
            >
              View The Difference
            </Link>
          </div>
        </div>

      </div>

      {/* Inquiry Form Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        productTitle="Ceylon Cinnamon Commercial & Gourmet Grades"
      />
    </div>
  );
}
