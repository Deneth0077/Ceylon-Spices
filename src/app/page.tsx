'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Award, ShieldCheck, Heart, ArrowRight, Droplet, Star, Sparkles, Plus, Minus, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TransparentImage from "@/components/TransparentImage";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

/* 1. Botanical Watermark for Card 1, 2, 3 (Disabled per user request) */
const BotanicalCardWatermark = () => null;

/* 2. Botanical Watermark for Section (Disabled per user request) */
const BotanicalSectionWatermark = () => null;

/* 3. Foreground Corner Leaf for Section 4 Bottom-Left */
const ForegroundCornerLeaf = () => (
  <div className="absolute -bottom-6 -left-6 w-60 md:w-80 h-60 md:h-80 pointer-events-none z-20 select-none">
    <TransparentImage
      src="/images/user_exact_leaf_clean.png"
      alt="Green Leaf Branch Corner Overlay"
      threshold={240}
      className="w-full h-full object-contain filter drop-shadow-sm"
    />
  </div>
);

const faqData = [
  {
    id: 1,
    question: "Sri Lanka? What is this Country?",
    answer: "Sri Lanka also known as Ceylon, a South Asian tropical island nation located near the equator known as “Pearl of the Indian Ocean”. The world’s finest Cinnamon originates only in Sri Lanka’s fertile soil. Sri Lanka holds the EU-issued Geographical Indication (GI) certification for Ceylon cinnamon."
  },
  {
    id: 2,
    question: "Is there Two types Cinnamon in the World?",
    answer: "Yes, Ceylon Cinnamon and Cassia. Real cinnamon is “Ceylon Cinnamon” and it is special. Ceylon Cinnamon is full of wellness properties and healthy for daily use. Cassia is not healthy for daily use. Cassia cause liver damage."
  },
  {
    id: 3,
    question: "How can I identify the difference between Ceylon Cinnamon and Cassia?",
    answer: "Ceylon Cinnamon stick is filled with thin fine multiple layers inside and its soft and delicate aroma. It is in Gold mixed light brown colour. Cassia is rough and no fillings inside. Just a rolled rough bark in dark brown."
  },
  {
    id: 4,
    question: "Will my Cinnamon quality preserved when get to my Hands?",
    answer: "Absolutely. Our cinnamon sticks are vacuum-sealed for freshness, aroma and elegantly packed in a recyclable paper canister."
  },
  {
    id: 5,
    question: "Is my cinnamon Traceable?",
    answer: "Of course. Our company adhere with Single-Origin concept. We source Cinnamon from our own plantations. Hence, transparency and traceability is very clear."
  },
  {
    id: 6,
    question: "How should I store my cinnamon to ensure freshness?",
    answer: "Your goods are vacuum-packed. Once open Store in a air-tight, cool, dry place away from direct sunlight."
  },
  {
    id: 7,
    question: "Is True Cinnamon Care Pvt Ltd committed to ethical and sustainable practices?",
    answer: "Absolutely. We ensure our farmers are fairly compensated and not overworked. Through sustainable and ethical practices, we safeguard Sri Lanka’s unique spices and natural heritage for the next generations to come."
  }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <div className="relative w-full bg-[#fcf9f8] text-[#1b1c1c] overflow-x-hidden">


      {/* 1. Hero Section (Full Width Edge-to-Edge Banner) */}
      <section className="relative w-full overflow-hidden bg-[#f5edd9] border-b border-[#e5dac4]/80">
        <div className="w-full">
          <Image
            src="/images/hero_tcc_banner.png"
            alt="True Cinnamon Care - Hand-selected Single Origin Sri Lanka Ceylon Spices"
            width={1920}
            height={914}
            priority
            className="w-full h-auto block object-cover select-none"
          />
        </div>
      </section>

      {/* 2. Global Certifications Row & Announcement (Sage Green #a7ba88 Theme) */}
      <section className="relative w-full bg-[#d1dbbd] text-[#1a2914] py-14 overflow-hidden border-y border-[#95a877] shadow-md">
        {/* Soft glow decorative backgrounds */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-64 h-64 bg-[#ffffff]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-64 h-64 bg-[#1a2916]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left: Headline & Badges */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-5 space-y-4 text-left"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#172613]">
              Global Certifications
            </h2>

            {/* GMP Certification Seal Logo */}
            <div className="pt-2">
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40">
                <TransparentImage
                  src="/images/gmp_certified_badge.png"
                  alt="Good Manufacturing Practice (GMP) Certified Seal"
                  threshold={235}
                  className="w-full h-full object-contain filter drop-shadow-md mix-blend-multiply"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Announcement Card (Sage Green Theme Card) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-7 bg-[#172613]/85 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-[#172613]/30 shadow-premium relative overflow-hidden group hover:border-[#172613]/60 transition-all duration-300 flex flex-col justify-between space-y-4 text-white"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#a7ba88]/30 to-transparent rounded-bl-full pointer-events-none" />

            <p className="text-sm md:text-base text-white/95 leading-relaxed font-medium relative z-10">
              <strong className="text-[#a7ba88]">True Cinnamon Care</strong> is pleased to announce that we are in the process of establishing a <span className="underline decoration-[#a7ba88]/70 underline-offset-4 font-bold text-white">GMP-certified facility</span>, aligned with <span className="underline decoration-[#a7ba88]/70 underline-offset-4 font-bold text-white">ISO 22000 standards</span>, which we intend to obtain in the near future. <span className="font-extrabold text-[#a7ba88]">FDA approvals are currently underway.</span>
            </p>

            <div className="pt-2 relative z-10">
              <Link
                href="/sourcing#processing-production-journey"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#a7ba88] hover:bg-[#b8cb98] text-[#172613] font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-[1.02] cursor-pointer border border-[#a7ba88]"
              >
                <span>Check Progress</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#172613]" />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2.5 Feature Link Cards (The Ceylon Cinnamon & The Difference) */}
      <section className="relative w-full bg-[#fdfbf7] py-16 px-6 md:px-8 border-b border-[#eae5d9]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">

            {/* Card 1: THE CEYLON CINNAMON */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInUp}
              className="group relative bg-gradient-to-br from-[#fbf4eb] to-[#f4e6d4] rounded-3xl p-8 md:p-10 border border-[#e4d3bf] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <BotanicalCardWatermark />
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#8c4a27]/30 bg-[#8c4a27]/10 text-[#7a3b1a] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#8c4a27]" />
                  <span>ORIGIN & HERITAGE</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2b1810] tracking-tight group-hover:text-[#8c4a27] transition-colors">
                  THE CEYLON CINNAMON
                </h3>

                <p className="text-sm md:text-base text-[#5c473a] leading-relaxed font-medium">
                  Discover the sacred history, soft delicate quills, and rich aroma of true <em>Cinnamomum zeylanicum</em> native exclusively to Sri Lanka's tropical soil.
                </p>
              </div>

              <div className="pt-6 relative z-10">
                <Link
                  href="/products/ceylon-cinnamon"
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#7a421d] hover:bg-[#5f3316] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-[1.02] cursor-pointer"
                >
                  <span>Explore Ceylon Cinnamon</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </motion.div>

            {/* Card 2: THE DIFFERENCE */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInUp}
              className="group relative bg-gradient-to-br from-[#f2f6ed] to-[#e1ebd7] rounded-3xl p-8 md:p-10 border border-[#ccd9be] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <BotanicalCardWatermark />
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#486338]/30 bg-[#486338]/10 text-[#325220] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#325220]" />
                  <span>PURE VS CASSIA</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1c2e17] tracking-tight group-hover:text-[#325220] transition-colors">
                  THE DIFFERENCE
                </h3>

                <p className="text-sm md:text-base text-[#3d5236] leading-relaxed font-medium">
                  Learn why Ceylon Cinnamon is ultra-low in coumarin, safe for daily wellness, and completely distinct from common commercial Cassia bark.
                </p>
              </div>

              <div className="pt-6 relative z-10">
                <Link
                  href="/products/the-difference"
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#325220] hover:bg-[#233d16] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-[1.02] cursor-pointer"
                >
                  <span>See The Difference</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Why Choose Us Section (Quality & Sustainability - Reference Matched Design) */}
      <section id="why-choose-us" className="relative w-full bg-[#f8f6f0] py-24 px-6 md:px-8 border-t border-[#e8e4da] scroll-mt-24">
        <div className="max-w-[1280px] mx-auto">

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-[650px] mx-auto mb-16 space-y-2"
          >
            <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#967b54]">WHY CHOOSE US</p>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-[62px] font-normal text-[#2b3024] tracking-tight">Quality & Values</h2>

            {/* 1. Circled Header Line & Leaf Emblem Divider */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <div className="w-20 h-[1px] bg-[#d8d2c5]" />
              <svg className="w-4 h-4 text-[#88775f] fill-current" viewBox="0 0 24 24">
                <path d="M17,8C8,10 5,16 3,22C5,22 9,21 13,17C16,14 18,10 17,8Z" />
                <path d="M21,3C13,5 9,11 7,17C9,17 14,16 18,12C20,10 22,6 21,3Z" opacity="0.7" />
              </svg>
              <div className="w-20 h-[1px] bg-[#d8d2c5]" />
            </div>
          </motion.div>

          {/* 6 Cards Grid (Compact Sizing) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">

            {/* Card 1: Go Beyond with Accountability */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-white hover:bg-[#eaf1e3] rounded-3xl p-6 sm:p-7 border border-[#e6e2da] hover:border-[#8fad77] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group min-h-[300px]"
            >
              <BotanicalCardWatermark />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#5d634f] group-hover:bg-[#2e4220] text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <Award className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif font-normal text-xl text-[#2b3024] group-hover:text-[#1c2e17] mb-2.5 transition-colors duration-300">
                  Go Beyond with Accountability
                </h3>
                <p className="text-xs md:text-sm text-[#635f56] group-hover:text-[#384831] leading-relaxed font-normal transition-colors duration-300">
                  We are not spice traders. We go beyond delivering spices. Committed to deliver Trust, Quality & Accountability at every step
                </p>
              </div>

              <div className="pt-4 mt-4 relative z-10">
                <Link href="/sourcing" className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-[#2b3024] group-hover:text-[#2e4220] transition-colors">
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>

            {/* Card 2: Single-Origin */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-white hover:bg-[#eaf1e3] rounded-3xl p-6 sm:p-7 border border-[#e6e2da] hover:border-[#8fad77] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group min-h-[300px]"
            >
              <BotanicalCardWatermark />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#5d634f] group-hover:bg-[#2e4220] text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <Sparkles className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif font-normal text-xl text-[#2b3024] group-hover:text-[#1c2e17] mb-2.5 transition-colors duration-300">
                  Single-Origin
                </h3>
                <p className="text-xs md:text-sm text-[#635f56] group-hover:text-[#384831] leading-relaxed font-normal transition-colors duration-300">
                  Our Cinnamon is Single-Origin and sourced exclusively from southern part of Sri Lanka, Matara District ensuring uncomprising Quality
                </p>
              </div>

              <div className="pt-4 mt-4 relative z-10">
                <Link href="/sourcing" className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-[#2b3024] group-hover:text-[#2e4220] transition-colors">
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>

            {/* Card 3: Ethical & Sustainability */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-white hover:bg-[#eaf1e3] rounded-3xl p-6 sm:p-7 border border-[#e6e2da] hover:border-[#8fad77] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group min-h-[300px]"
            >
              <BotanicalCardWatermark />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#5d634f] group-hover:bg-[#2e4220] text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <Leaf className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif font-normal text-xl text-[#2b3024] group-hover:text-[#1c2e17] mb-2.5 transition-colors duration-300">
                  Ethical & Sustainability
                </h3>
                <p className="text-xs md:text-sm text-[#635f56] group-hover:text-[#384831] leading-relaxed font-normal transition-colors duration-300">
                  We uphold ethical practices that support communities and preserve the environment for the future generations. Choosing us means the brand that cares for people and nature alike.
                </p>
              </div>

              <div className="pt-4 mt-4 relative z-10">
                <Link href="/about#community" className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-[#2b3024] group-hover:text-[#2e4220] transition-colors">
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>

            {/* Card 4: Hand Packed */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-white hover:bg-[#eaf1e3] rounded-3xl p-6 sm:p-7 border border-[#e6e2da] hover:border-[#8fad77] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group min-h-[300px]"
            >
              <BotanicalCardWatermark />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#5d634f] group-hover:bg-[#2e4220] text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <Droplet className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif font-normal text-xl text-[#2b3024] group-hover:text-[#1c2e17] mb-2.5 transition-colors duration-300">
                  Hand Packed
                </h3>
                <p className="text-xs md:text-sm text-[#635f56] group-hover:text-[#384831] leading-relaxed font-normal transition-colors duration-300">
                  Every stick is carefully tested & Hand-Packaged in a premium design, reflects natural purity & the Luxury of our brand. Personal touch ensures consistency & craftsmanship at every stage
                </p>
              </div>

              <div className="pt-4 mt-4 relative z-10">
                <Link href="/products" className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-[#2b3024] group-hover:text-[#2e4220] transition-colors">
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>

            {/* Card 5: Transparency */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-white hover:bg-[#eaf1e3] rounded-3xl p-6 sm:p-7 border border-[#e6e2da] hover:border-[#8fad77] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group min-h-[300px]"
            >
              <BotanicalCardWatermark />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#5d634f] group-hover:bg-[#2e4220] text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <Heart className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif font-normal text-xl text-[#2b3024] group-hover:text-[#1c2e17] mb-2.5 transition-colors duration-300">
                  Transparency
                </h3>
                <p className="text-xs md:text-sm text-[#635f56] group-hover:text-[#384831] leading-relaxed font-normal transition-colors duration-300">
                  Choosing us means choosing Transparency from sourcing to packaging. We openly share our processes with integrity, so you know exactly what goes until deliver the product to you
                </p>
              </div>

              <div className="pt-4 mt-4 relative z-10">
                <Link href="/sourcing" className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-[#2b3024] group-hover:text-[#2e4220] transition-colors">
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>

            {/* Card 6: Exclusive to our plantation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-white hover:bg-[#eaf1e3] rounded-3xl p-6 sm:p-7 border border-[#e6e2da] hover:border-[#8fad77] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group min-h-[300px]"
            >
              <BotanicalCardWatermark />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#5d634f] group-hover:bg-[#2e4220] text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <ShieldCheck className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif font-normal text-xl text-[#2b3024] group-hover:text-[#1c2e17] mb-2.5 transition-colors duration-300">
                  Exclusive to our plantation
                </h3>
                <p className="text-xs md:text-sm text-[#635f56] group-hover:text-[#384831] leading-relaxed font-normal transition-colors duration-300">
                  Experience the Taste that is Truly Unique which is Exclusive to our Plantation. This ensures the complete control of our Values from soil to shelf
                </p>
              </div>

              <div className="pt-4 mt-4 relative z-10">
                <Link href="/sourcing" className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-[#2b3024] group-hover:text-[#2e4220] transition-colors">
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>



      {/* 5. From Forest Garden To Your Table Section */}
      <section id="processing-production-journey" className="relative w-full bg-[#edd6b4] py-16 md:py-20 px-6 md:px-8 border-t border-[#dfc5a0] scroll-mt-24">
        <div className="max-w-[1280px] mx-auto space-y-12">

          {/* Top 2-Column Grid: Left Text & Right Farmer Harvesting Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">

            {/* Left Content Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:col-span-7 text-left space-y-4"
            >
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#42190a] leading-tight">
                From Forest Garden To Your Table
              </h2>
              <p className="text-base sm:text-lg md:text-xl font-medium text-[#52443f] leading-relaxed max-w-[620px]">
                How we harvest, preserve, and deliver Sri Lanka's finest spices without compromising natural environment
              </p>
              <div className="w-20 h-1 bg-[#42190a] rounded-full mt-2" />
            </motion.div>

            {/* Right Image Column (Farmer Harvesting Cinnamon in Forest) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 group">
                <Image
                  src="/images/forest_garden_harvest.jpg"
                  alt="Sri Lankan Farmer Harvesting Cinnamon in Forest Garden"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </motion.div>

          </div>

          {/* Quality Highlight Metrics Pill */}
          <div className="bg-gradient-to-r from-[#42190a] via-[#5c2813] to-[#192a14] rounded-2xl p-6 text-white shadow-premium flex flex-wrap items-center justify-around gap-6 text-center">
            <div className="space-y-1">
              <span className="font-serif text-2xl md:text-3xl font-black text-[#ffc641]">100%</span>
              <p className="text-[10px] uppercase tracking-widest font-extrabold text-white/80">Single Origin Ceylon</p>
            </div>
            <div className="h-8 w-[1px] bg-white/20 hidden sm:block" />
            <div className="space-y-1">
              <span className="font-serif text-2xl md:text-3xl font-black text-[#ffc641]">&lt; 0.004%</span>
              <p className="text-[10px] uppercase tracking-widest font-extrabold text-white/80">Ultra-Low Coumarin</p>
            </div>
            <div className="h-8 w-[1px] bg-white/20 hidden sm:block" />
            <div className="space-y-1">
              <span className="font-serif text-2xl md:text-3xl font-black text-[#ffc641]">0%</span>
              <p className="text-[10px] uppercase tracking-widest font-extrabold text-white/80">Synthetic Additives</p>
            </div>
            <div className="h-8 w-[1px] bg-white/20 hidden sm:block" />
            <div className="space-y-1">
              <span className="font-serif text-2xl md:text-3xl font-black text-[#ffc641]">180+ Yrs</span>
              <p className="text-[10px] uppercase tracking-widest font-extrabold text-white/80">Artisanal Heritage</p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Explore our Artisanal Collections (Mockup Grid) */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-8 py-16 border-t border-[#eae7e7]/60">

        {/* Title and Header Actions */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10"
        >
          <div className="space-y-2">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-[#42190a] leading-tight">
              Explore our Artisanal Collections
            </h2>
            <p className="text-sm md:text-base text-[#52443f] max-w-[650px] leading-relaxed font-medium">
              Selected harvests from the Soil of Ceylon, chosen for their superior flavor and medicinal properties.
            </p>
          </div>
          <Link
            href="/products"
            className="text-xs font-extrabold uppercase tracking-wider text-[#795900] hover:underline hover-underline-animation self-start md:self-auto"
          >
            View All Spices
          </Link>
        </motion.div>

        {/* Asymmetrical Grid featuring Clean Natural Photos */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Card 1: Cinnamon (col-span 8) */}
          <div className="group relative rounded-2xl overflow-hidden shadow-premium bg-gray-900 text-white h-[360px] md:h-[420px] md:col-span-8 flex flex-col justify-end p-8 transition-transform duration-300 hover:translate-y-[-4px]">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/card_cinnamon_powder_real.jpg"
                alt="Ceylon Cinnamon Quills and Powder in Clay Bowl"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover object-top opacity-100 group-hover:scale-[1.02] transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
            </div>

            <div className="relative z-10 space-y-3 max-w-[480px]">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">Ceylon Cinnamon</h3>
              <p className="text-sm text-white/85 leading-relaxed">

              </p>
              <Link
                href="/products"
                className="inline-block px-5 py-2 bg-white text-[#42190a] rounded font-bold text-xs uppercase tracking-wider transition-colors hover:bg-[#eae7e7]"
              >
                LEARN MORE
              </Link>
            </div>
          </div>

          {/* Card 2: Ceylon Cinnamon Leaf Oil (col-span 4) */}
          <div className="group relative rounded-2xl overflow-hidden shadow-premium bg-gray-900 text-white h-[360px] md:h-[420px] md:col-span-4 flex flex-col justify-end p-8 transition-transform duration-300 hover:translate-y-[-4px]">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/card_leaf_oil_real.jpg"
                alt="Ceylon Cinnamon Leaf Oil"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center opacity-100 group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
            </div>

            <div className="relative z-10 space-y-3">
              <h3 className="font-serif text-xl md:text-2xl font-bold text-white">Cinnamon Leaf Oil</h3>
              <Link
                href="/products"
                className="inline-block px-5 py-2 border border-white/50 bg-white/10 backdrop-blur-md text-white rounded font-bold text-xs uppercase tracking-wider transition-colors hover:bg-white/20 text-center"
              >
                LEARN MORE
              </Link>
            </div>
          </div>

          {/* Card 3: Black Pepper (col-span 4) */}
          <div className="group relative rounded-2xl overflow-hidden shadow-premium bg-gray-900 text-white h-[360px] md:h-[420px] md:col-span-4 flex flex-col justify-end p-8 transition-transform duration-300 hover:translate-y-[-4px]">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/card_pepper_real.jpg"
                alt="Black Peppercorns in Clay Bowl"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center opacity-100 group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
            </div>

            <div className="relative z-10 space-y-3">

              <h3 className="font-serif text-2xl font-bold text-white">Ceylon Black Peppercorns  </h3>
              <Link
                href="/products"
                className="inline-block px-5 py-2 border border-white/50 bg-white/10 backdrop-blur-md text-white rounded font-bold text-xs uppercase tracking-wider transition-colors hover:bg-white/20 text-center"
              >
                LEARN MORE
              </Link>
            </div>
          </div>

          {/* Card 4: Garcinia Goraka (col-span 8) */}
          <div className="group relative rounded-2xl overflow-hidden shadow-premium bg-gray-900 text-white h-[360px] md:h-[420px] md:col-span-8 flex flex-col justify-end p-8 transition-transform duration-300 hover:translate-y-[-4px]">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/card_garcinia_real.jpg"
                alt="Organic Garcinia Goraka"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover object-center opacity-100 group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
            </div>

            <div className="relative z-10 space-y-3 max-w-[480px]">

              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">Ceylon Organic Garcinia (Goraka)</h3>
              <p className="text-sm text-white/90 leading-relaxed font-medium">

              </p>
              <Link
                href="/products"
                className="inline-block px-5 py-2 bg-white text-gray-900 rounded font-extrabold text-xs uppercase tracking-wider transition-colors hover:bg-[#eae7e7]"
              >
                LEARN MORE
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 7. FAQ Section (Frequently Asked Questions) */}
      <section className="relative w-full bg-[#f7f4ee] py-20 px-6 md:px-8 border-t border-[#e5dfd5]">
        <div className="max-w-[1280px] mx-auto">

          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-left mb-12 space-y-2"
          >
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#795900] bg-[#795900]/10 border border-[#795900]/20 px-3 py-1 rounded-full inline-block">
              Question?
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2b1810] tracking-tight">
              F.A.Q
            </h2>
            <p className="text-xs md:text-sm text-[#52443f] max-w-[600px] font-medium leading-relaxed">
              Find answers to common questions about authentic Ceylon Cinnamon, quality guarantees, and single-origin sourcing.
            </p>
          </motion.div>

          {/* Grid Layout: Left Column (FAQ Accordion 7 cols), Right Column (Got Questions Box 5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Column: FAQ Accordion List (7 Cols) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-7 space-y-3.5"
            >
              {faqData.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <motion.div
                    key={item.id}
                    variants={fadeInUp}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                      ? "bg-white border-[#795900]/40 shadow-md"
                      : "bg-white/80 hover:bg-white border-[#e2ddd3] shadow-sm"
                      }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-serif font-bold text-sm md:text-base text-[#2b1810] cursor-pointer select-none"
                    >
                      <span className="flex-1 font-sans font-bold text-sm text-[#2b1810]">
                        {item.question}
                      </span>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${isOpen ? "bg-[#795900] text-white" : "bg-[#f2efe9] text-[#795900]"
                        }`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-[#52443f] leading-relaxed font-medium border-t border-[#f2efe9]">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Right Column: Got Questions CTA Card (5 Cols) - Matched to Mockup Image 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:col-span-5 sticky top-24 space-y-6"
            >
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#e2ddd3] shadow-md flex flex-col justify-between overflow-hidden relative group">

                <div className="space-y-4 relative z-10">
                  <div>
                    <h3 className="font-serif text-2xl font-black text-[#2b1810]">
                      Got <span className="underline decoration-[#6ba343] decoration-2 underline-offset-4">Questions</span> ?
                    </h3>
                  </div>

                  <div className="pt-1">
                    <a
                      href="https://wa.me/94772893030"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xl md:text-2xl font-black text-[#6ba343] hover:text-[#528431] transition-colors tracking-tight font-sans"
                    >
                      <PhoneCall className="w-5 h-5 text-[#6ba343]" />
                      +94 77 289 3030
                    </a>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="w-full py-3.5 px-6 bg-[#6ba343] hover:bg-[#598c36] text-white text-center font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md hover:shadow-lg inline-block cursor-pointer"
                    >
                      CONTACT US
                    </Link>
                  </div>
                </div>

                {/* Cinnamon Sticks Image Box matching User Requested Photo */}
                <div className="mt-6 relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden border border-[#eae7e7]">
                  <Image
                    src="/images/faq_cinnamon_bundle.jpg"
                    alt="Authentic Ceylon Cinnamon Quill Bundle"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 8. Visit Sri Lanka Section */}
      <section className="w-full bg-[#f8f6f0] py-16 md:py-24 px-6 md:px-8 border-t border-[#e8e4da]">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="relative rounded-3xl md:rounded-[36px] overflow-hidden bg-gradient-to-r from-[#e8e2d5] via-[#ded7c7] to-[#d4ccba] border border-[#d6cebc] shadow-lg p-8 sm:p-10 md:p-14"
          >
            {/* Soft Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">

              {/* Left Content Column */}
              <div className="lg:col-span-7 space-y-6">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2d271e] tracking-tight">
                  Visit Sri Lanka
                </h2>

                <p className="text-xs sm:text-sm md:text-base text-[#575045] leading-relaxed font-normal max-w-[640px]">
                  Sri Lanka is an island of stunning beauty and wild life, where breath-taking landscapes meet rich cultural heritage and vibrant biodiversity. From golden beaches and lush Tea/Cinnamon plantations, Paddy-fields to ancient temples and iconic landmarks like Sigiriya, Nine Arches Bridge, offers a perfect blend of adventure and serenity. Experience world-class surfing at southern beaches of Sri Lanka and flavourful Ceylon spices all over the country. With the warmth of its people, your journey will be truly unforgettable.
                </p>

                {/* Button Row */}
                <div className="pt-2 flex items-center">
                  <a
                    href="https://www.evergotravels.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#787165] hover:bg-[#5f594e] text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:scale-105 cursor-pointer"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Map Illustration Column */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[4/5] flex items-center justify-center">
                  <Image
                    src="/images/srilanka_travel_map_illustration.png"
                    alt="Artistic Illustrated Map of Sri Lanka"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. Local Farming Community & Heritage Gallery */}
      <section className="w-full bg-[#f8f6f0] pb-16 md:pb-24 px-6 md:px-8">
        <div className="max-w-[1280px] mx-auto">

          {/* 3-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">

            {/* Left Card: Farmer Harvesting */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="group relative rounded-3xl md:rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl border border-[#e6e2da] hover:border-[#8fad77] bg-white h-[340px] sm:h-[400px] md:h-[440px] transition-all duration-500 hover:-translate-y-1"
            >
              <Image
                src="/images/community_farmer_cutting.jpg"
                alt="Sri Lankan Farmer Harvesting Cinnamon"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#ffc641]">Artisanal Craft</span>
                <h3 className="font-serif text-lg font-bold text-white mt-0.5">Traditional Harvesting</h3>
              </div>
            </motion.div>

            {/* Center Card: Mother & Child (Ammayi Babayi) - Featured Center Position */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="group relative rounded-3xl md:rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl border-2 border-[#8fad77] bg-white h-[360px] sm:h-[420px] md:h-[460px] transition-all duration-500 hover:-translate-y-1.5 md:-mt-3"
            >
              <Image
                src="/images/community_mother_child.jpg"
                alt="Sri Lankan Mother and Child with Cinnamon Sticks"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#ffc641]">Family Plantation</span>
                <h3 className="font-serif text-xl font-bold text-white mt-0.5">Sustaining Future Generations</h3>
              </div>
            </motion.div>

            {/* Right Card: Two Farmers in Estate */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="group relative rounded-3xl md:rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl border border-[#e6e2da] hover:border-[#8fad77] bg-white h-[340px] sm:h-[400px] md:h-[440px] transition-all duration-500 hover:-translate-y-1"
            >
              <Image
                src="/images/community_two_farmers.jpg"
                alt="Local Sri Lankan Spice Farmers in Cinnamon Estate"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#ffc641]">Fair Trade</span>
                <h3 className="font-serif text-lg font-bold text-white mt-0.5">Empowering Rural Farmers</h3>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

    </div>
  );
}
