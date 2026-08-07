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

/* 1. Botanical Watermark for Card 1, 2, 3 */
const BotanicalCardWatermark = () => (
  <div className="absolute -right-2 top-2 bottom-2 w-28 md:w-36 h-[90%] opacity-35 pointer-events-none transition-transform duration-500 group-hover:scale-105 select-none">
    <Image
      src="/images/botanical_sketch_watermark.png"
      alt="Botanical Sketch Watermark"
      fill
      className="object-contain object-right-bottom mix-blend-multiply"
    />
  </div>
);

/* 2. Botanical Watermark for Section 4 Right Side */
const BotanicalSectionWatermark = () => (
  <div className="absolute right-0 top-4 bottom-4 w-80 md:w-[450px] h-[95%] opacity-30 pointer-events-none z-0 select-none">
    <Image
      src="/images/botanical_sketch_watermark.png"
      alt="Botanical Section Watermark"
      fill
      className="object-contain object-right mix-blend-multiply"
    />
  </div>
);

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

      {/* Decorative Single Giant Sri Lankan Cinnamon Bush Centered */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2800px] w-[500px] md:w-[800px] pointer-events-none z-10 overflow-hidden select-none opacity-[0.06]">
        <TransparentImage
          src="/images/cinnamon_bush.png"
          alt=""
          className="w-full h-full object-fill object-bottom"
        />
      </div>


      {/* 1. Hero Section (Centered Layout Matching User's Mockup) */}
      <section className="relative w-full overflow-hidden bg-[#fbf8f5] min-h-[550px] md:min-h-[620px] lg:min-h-[660px] pt-6 sm:pt-8 md:pt-10 pb-48 sm:pb-52 md:pb-60 lg:pb-64 border-b border-[#eae7e7]/40 flex flex-col justify-start">

        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_cinnamon_background.png"
            alt="Estate tea plantation and cinnamon table background"
            fill
            className="object-cover object-bottom select-none"
            priority
          />
          {/* Soft warm gradient overlay on upper sky area to ensure high contrast for centered text */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#fbf8f5]/90 via-[#fbf8f5]/45 to-transparent h-[55%]" />
        </div>

        <div className="relative z-10 max-w-[880px] mx-auto px-6 md:px-8 flex flex-col items-center text-center space-y-3 sm:space-y-3.5">

          {/* Vertical Brand Logo in Upper-Center Hero Position */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-52 h-28 sm:w-60 sm:h-32 md:w-72 md:h-38 mb-2 flex items-center justify-center"
          >
            <TransparentImage
              src="/images/logo.jpg"
              alt="True Cinnamon Care Logo"
              threshold={240}
              className="max-w-full max-h-full object-contain filter drop-shadow-md mix-blend-multiply"
            />
          </motion.div>

          {/* 1. Top Pill Badge
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#486338]/30 bg-[#edf3ea]/90 text-[#325220] text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-sm"
          >
            <Leaf className="w-3.5 h-3.5 text-[#325220]" />
            <span>100% ORGANIC • ETHICALLY SOURCED</span>
          </motion.div> */}

          {/* 2. Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black text-[#2b1810] tracking-tight leading-[1.12] max-w-[900px] text-center"
          >
            FROM CEYLON SOIL <br />
            <span className="text-[#8c4a27] font-serif uppercase tracking-normal">TO YOUR TABLE</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-[0.18em] text-[#795900] mt-3 text-center"
          >
            world's finest Ceylon cinnamon
          </motion.p>

          {/* 5. Sub-paragraph */}
         

          {/* 6. CTA Buttons */}
          {/* <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2"
          >
            <Link
              href="/products"
              className="px-6 py-2.5 bg-[#7a421d] hover:bg-[#5f3316] text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:translate-y-[-1px] flex items-center gap-2"
            >
              Explore Our Products <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/about"
              className="px-6 py-2.5 border-2 border-[#7a421d] text-[#7a421d] hover:bg-[#7a421d]/10 rounded-full font-bold text-xs uppercase tracking-wider transition-all"
            >
              Our Story
            </Link>
          </motion.div> */}

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
            <h2 className="font-serif text-4xl md:text-6xl lg:text-[62px] font-normal text-[#2b3024] tracking-tight">Quality & Sustainability</h2>

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

            {/* Card 1: Ethical and Sustainability */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e6e2da] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group min-h-[300px]"
            >
              <BotanicalCardWatermark />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#5d634f] text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <Leaf className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif font-normal text-xl text-[#2b3024] mb-2.5">
                  Ethical and Sustainability
                </h3>
                <p className="text-xs md:text-sm text-[#635f56] leading-relaxed font-normal">
                  We work directly with local farming cooperatives & fair trade partners to support sustainable agriculture and empower rural communities.
                </p>
              </div>

              <div className="pt-4 mt-4 relative z-10">
                <Link href="/about#community" className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-[#2b3024] group-hover:text-[#5d634f] transition-colors">
                  LEARN MORE <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Card 2: Go Beyond with Accountability */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e6e2da] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group min-h-[300px]"
            >
              <BotanicalCardWatermark />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#5d634f] text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <Award className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif font-normal text-xl text-[#2b3024] mb-2.5">
                  Go Beyond with Accountability
                </h3>
                <p className="text-xs md:text-sm text-[#635f56] leading-relaxed font-normal">
                  Our processes adhere strictly to global quality standards, ensuring complete transparency and uncompromised excellence at every step.
                </p>
              </div>

              <div className="pt-4 mt-4 relative z-10">
                <Link href="/sourcing" className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-[#2b3024] group-hover:text-[#5d634f] transition-colors">
                  LEARN MORE <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Card 3: Single-Origin */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e6e2da] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group min-h-[300px]"
            >
              <BotanicalCardWatermark />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#5d634f] text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <Sparkles className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif font-normal text-xl text-[#2b3024] mb-2.5">
                  Single-Origin
                </h3>
                <p className="text-xs md:text-sm text-[#635f56] leading-relaxed font-normal">
                  Pure Ceylon Spices sourced exclusively from our dedicated plantations in southern Sri Lanka, guaranteed authentic and unblended.
                </p>
              </div>

              <div className="pt-4 mt-4 relative z-10">
                <Link href="/sourcing" className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-[#2b3024] group-hover:text-[#5d634f] transition-colors">
                  LEARN MORE <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Card 4: Aromatic Quality */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e6e2da] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group min-h-[300px]"
            >
              <BotanicalCardWatermark />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#5d634f] text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <Droplet className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif font-normal text-xl text-[#2b3024] mb-2.5">
                  Hand-Packaged
                </h3>
                <p className="text-xs md:text-sm text-[#635f56] leading-relaxed font-normal">
                  Our essential oils and spices are cold-processed to retain maximum natural essential oils, delicate aroma, and therapeutic potency.
                </p>
              </div>

              <div className="pt-4 mt-4 relative z-10">
                <Link href="/products" className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-[#2b3024] group-hover:text-[#5d634f] transition-colors">
                  LEARN MORE <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Card 5: Health & Wellness */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e6e2da] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group min-h-[300px]"
            >
              <BotanicalCardWatermark />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#5d634f] text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <Heart className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif font-normal text-xl text-[#2b3024] mb-2.5">
                  Transparency
                </h3>
                <p className="text-xs md:text-sm text-[#635f56] leading-relaxed font-normal">
                  Ceylon Cinnamon is world-famous for ultra-low coumarin (&lt;0.004%), high antioxidants, and active anti-inflammatory compounds.
                </p>
              </div>

              <div className="pt-4 mt-4 relative z-10">
                <Link href="/sourcing" className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-[#2b3024] group-hover:text-[#5d634f] transition-colors">
                  LEARN MORE <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Card 6: Pure & Unadulterated */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e6e2da] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group min-h-[300px]"
            >
              <BotanicalCardWatermark />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#5d634f] text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif font-normal text-xl text-[#2b3024] mb-2.5">
                   Exclusive from Our Plantation
                </h3>
                <p className="text-xs md:text-sm text-[#635f56] leading-relaxed font-normal">
                  Free from synthetic chemicals, filler barks, or additives. Packed fresh at origin to ensure farm-to-table natural purity.
                </p>
              </div>

              <div className="pt-4 mt-4 relative z-10">
                <Link href="/sourcing" className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-[#2b3024] group-hover:text-[#5d634f] transition-colors">
                  LEARN MORE <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>



      {/* 5. From Forest Garden To Your Kitchen (Farm-to-Table Craftsmanship Journey) */}
      
      <section id="processing-production-journey" className="max-w-[1280px] mx-auto px-6 md:px-8 py-20 bg-[#edd6b4] scroll-mt-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-[650px] mx-auto mb-16"
        >
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-[#42190a]">From Forest Garden To Your Table</h2>
          <p className="text-sm md:text-base font-semibold text-[#52443f] mt-3 leading-relaxed">
            How we harvest, preserve, and deliver Sri Lanka's finest spices without compromising natural environment
          </p>
          <div className="w-16 h-1 bg-[#e6d8bc] mx-auto mt-4 rounded-full" />
        </motion.div>



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

        {/* Asymmetrical Grid featuring Pepper & Garcinia Color Design */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Card 1: Cinnamon (col-span 8) */}
          <div className="group relative rounded-xl overflow-hidden shadow-premium bg-[#42190a] text-white h-[320px] md:col-span-8 flex flex-col justify-end p-8 transition-transform duration-300 hover:translate-y-[-4px]">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/card_cinnamon.png"
                alt="Ceylon Cinnamon Close Up"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover opacity-60 group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>

            <div className="relative z-10 space-y-3 max-w-[480px]">
              <h3 className="font-serif text-2xl font-bold text-white">Ceylon Cinnamon</h3>
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
          <div className="group relative rounded-xl overflow-hidden shadow-premium bg-[#1e381b] text-white h-[320px] md:col-span-4 flex flex-col justify-end p-8 transition-transform duration-300 hover:translate-y-[-4px]">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/artisan_vanilla_ravindra.png"
                alt="Ceylon Cinnamon Leaf Oil"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-75 group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>

            <div className="relative z-10 space-y-3">
              <h3 className="font-serif text-xl font-bold text-white">Cinnamon Leaf Oil</h3>
              <Link
                href="/products"
                className="inline-block px-5 py-2 border border-white/50 bg-white/10 backdrop-blur-md text-white rounded font-bold text-xs uppercase tracking-wider transition-colors hover:bg-white/20 text-center"
              >
                LEARN MORE
              </Link>
            </div>
          </div>

          {/* Card 3: Black Pepper - Maroon & Green Theme (col-span 4) */}
          <div className="group relative rounded-xl overflow-hidden shadow-premium bg-gradient-to-br from-[#4a0e17] via-[#66121e] to-[#1e381b] text-white h-[320px] md:col-span-4 flex flex-col justify-end p-8 transition-transform duration-300 hover:translate-y-[-4px]">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/card_pepper.png"
                alt="Black Peppercorns"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-70 group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4a0e17]/90 via-[#4a0e17]/40 to-transparent" />
            </div>

            <div className="relative z-10 space-y-3">
              
              <h3 className="font-serif text-2xl font-bold text-white">Ceylon Black Peppercones  </h3>
              <Link
                href="/products"
                className="inline-block px-5 py-2 border border-white/50 bg-white/10 backdrop-blur-md text-white rounded font-bold text-xs uppercase tracking-wider transition-colors hover:bg-white/20 text-center"
              >
                LEARN MORE
              </Link>
            </div>
          </div>

          {/* Card 4: Garcinia Goraka - Vibrant Yellow, Green & Red Theme (col-span 8) */}
          <div className="group relative rounded-xl overflow-hidden shadow-premium bg-gradient-to-br from-[#d97706] via-[#b91c1c] to-[#15803d] text-white h-[320px] md:col-span-8 flex flex-col justify-end p-8 transition-transform duration-300 hover:translate-y-[-4px]">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/card_garcinia.png"
                alt="Organic Garcinia Goraka"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover opacity-60 group-hover:scale-[1.02] transition-transform duration-700 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#7c2d12]/90 via-[#7c2d12]/30 to-transparent" />
            </div>

            <div className="relative z-10 space-y-3 max-w-[480px]">

              <h3 className="font-serif text-2xl font-bold text-white">Ceylon Organic Garcinia (Goraka)</h3>
              <p className="text-sm text-white/90 leading-relaxed font-medium">
                
              </p>
              <Link
                href="/products"
                className="inline-block px-5 py-2 bg-white text-[#7c2d12] rounded font-extrabold text-xs uppercase tracking-wider transition-colors hover:bg-[#eae7e7]"
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

                {/* Cinnamon Sticks Image Box matching Mockup 2 */}
                <div className="mt-6 relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden border border-[#eae7e7]">
                  <Image
                    src="/images/card_cinnamon.png"
                    alt="Ceylon Cinnamon Quills and Powder"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
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

                <p className="text-xs sm:text-sm md:text-base text-[#575045] leading-relaxed font-normal max-w-[600px]">
                  Discover Sri Lanka, an island of breathtaking landscapes, rich cultural heritage, and vibrant biodiversity. From pristine beaches and world-class surfing spots to lush tea plantations and historic landmarks like the Nine Arches Bridge, Sri Lanka offers an unforgettable blend of adventure and tranquility. Explore its renowned wildlife, ancient temples, and flavorful Ceylon spices, all while experiencing the warmth of its people and the richness of its traditions.
                </p>

                {/* Button & QR Code Row */}
                <div className="pt-4 flex flex-wrap items-center gap-6 sm:gap-8">
                  <Link
                    href="https://www.srilanka.travel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#787165] hover:bg-[#5f594e] text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>

                  {/* QR Code Container */}
                  <div className="bg-white p-2 rounded-2xl shadow-md border border-white/60">
                    <Image
                      src="/images/visit_srilanka_qr_code.png"
                      alt="Scan to Visit Sri Lanka Tourism"
                      width={100}
                      height={100}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-xl"
                    />
                  </div>
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

      {/* 9. Local Farming Community & Heritage Banner */}
      <section className="w-full bg-[#f8f6f0] pb-16 md:pb-24 px-6 md:px-8">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="relative rounded-3xl md:rounded-[36px] overflow-hidden shadow-lg border border-[#e6e2da] bg-white group"
          >
            <div className="relative w-full aspect-[1024/258] min-h-[220px] sm:min-h-[280px] md:min-h-[360px]">
              <Image
                src="/images/ceylon_farming_community_banner.png"
                alt="Local Sri Lankan Spice Farming Community"
                fill
                sizes="100vw"
                className="object-cover group-hover:scale-[1.01] transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
