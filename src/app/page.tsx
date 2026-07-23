'use client';

import Image from "next/image";
import Link from "next/link";
import { Leaf, Award, ShieldCheck, Heart, ArrowRight, Droplet, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
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

export default function Home() {
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

          {/* 1. Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#486338]/30 bg-[#edf3ea]/90 text-[#325220] text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-sm"
          >
            <Leaf className="w-3.5 h-3.5 text-[#325220]" />
            <span>100% ORGANIC • ETHICALLY SOURCED</span>
          </motion.div>

          {/* 2. Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold text-[#2b1810] tracking-tight leading-[1.12] max-w-[780px]"
          >
            We bring <span className="text-[#8c4a27] font-serif uppercase tracking-normal">TRUE CINNAMON</span> <br />
            Hand-selected products
          </motion.h1>

          {/* 3. Middle Tag / Badge with decorative lines */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="flex items-center justify-center gap-2.5 my-0.5 w-full max-w-[380px]"
          >
            <div className="h-[1px] bg-[#8c4a27]/30 flex-1" />
            <div className="relative bg-[#4a2617] text-[#fce4b8] px-3.5 py-1 rounded-md text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.16em] shadow-md flex items-center gap-1.5">
              <span className="text-[8px]">🍃</span>
              SINGLE ORIGIN Sri Lanka (CEYLON)
            </div>
            <div className="h-[1px] bg-[#8c4a27]/30 flex-1" />
          </motion.div>

          {/* 4. Secondary Heading */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-bold text-[#2b1810] leading-tight"
          >
            so <span className="text-[#8c4a27] font-serif uppercase font-black tracking-wide">AUTHENTIC</span> you can <span className="text-[#8c4a27] font-serif uppercase font-black tracking-wide">TRUST</span>
          </motion.div>

          {/* 5. Sub-paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="text-[#4a3b34] text-xs sm:text-sm leading-relaxed max-w-[540px] pt-0.5 font-medium"
          >
            Sourced directly from the fertile lands of Sri Lanka, our cinnamon is pure, aromatic and crafted with care by generations of traditional farmers.
          </motion.p>

          {/* 6. CTA Buttons */}
          <motion.div
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
          </motion.div>

        </div>
      </section>

      {/* 2. Global Certifications Row & Announcement */}
      {/* 2. Global Certifications & Compliance Section (Ultra-Stylish Glassmorphic Layout) */}
      <section className="relative w-full bg-gradient-to-r from-[#192a14] via-[#243b1d] to-[#192a14] text-white py-14 overflow-hidden border-y border-[#795900]/30 shadow-2xl">
        {/* Ambient glow decorative backgrounds */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-64 h-64 bg-[#795900]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-64 h-64 bg-[#ffc641]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left: Headline & Badges */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-5 space-y-4 text-left"
          >
            <div className="inline-flex items-center gap-2 text-[#ffc641] bg-[#ffc641]/10 border border-[#ffc641]/30 text-[10px] font-extrabold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" /> International Quality & Standards
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-black tracking-tight text-white">
              Global Certifications
            </h2>

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 shadow-md">
                <ShieldCheck className="w-4 h-4 text-[#ffc641]" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-white">GMP Facility Standard</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 shadow-md">
                <Award className="w-4 h-4 text-[#ffc641]" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-white">FDA Process Underway</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Announcement Card (Glassmorphic) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-7 bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 shadow-premium relative overflow-hidden group hover:border-[#ffc641]/40 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#ffc641]/20 to-transparent rounded-bl-full pointer-events-none" />

            <p className="text-sm md:text-base text-white/90 leading-relaxed font-medium relative z-10">
              <strong className="text-[#ffc641]">The Cinnamon Care</strong> is pleased to announce that we are in the process of establishing a <span className="underline decoration-[#ffc641]/50 underline-offset-4 font-bold text-white">GMP-certified facility</span>, which we intend to complete in the near future. <span className="font-extrabold text-[#ffc641]">FDA approvals are currently underway.</span>
            </p>
          </motion.div>

        </div>
      </section>

      {/* 3. Why Choose Us Section (Quality & Sustainability - Reference Matched Design) */}
      <section className="relative w-full bg-[#f8f6f0] py-24 px-6 md:px-8 border-t border-[#e8e4da]">
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
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#2b3024] tracking-tight">Quality & Sustainability</h2>
            
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

          {/* 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Ethically Sourced */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-white rounded-3xl p-8 md:p-10 border border-[#e6e2da] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group min-h-[380px]"
            >
              {/* 2. Card 1 Pure Transparent Botanical Sketch Watermark */}
              <BotanicalCardWatermark />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-[#5d634f] text-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                  <Leaf className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif font-normal text-2xl text-[#2b3024] mb-3">
                  Ethically Sourced
                </h3>
                <p className="text-xs md:text-sm text-[#635f56] leading-relaxed font-normal max-w-[240px]">
                  We work directly with local farming cooperatives & fair trade partners to support sustainable agriculture and empower rural communities.
                </p>
              </div>

              <div className="pt-6 mt-6 relative z-10">
                <Link href="/about#community" className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-[#2b3024] group-hover:text-[#5d634f] transition-colors">
                  LEARN MORE <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Card 2: Aromatic Quality */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-white rounded-3xl p-8 md:p-10 border border-[#e6e2da] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group min-h-[380px]"
            >
              {/* 3. Card 2 Pure Transparent Botanical Sketch Watermark */}
              <BotanicalCardWatermark />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-[#5d634f] text-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                  <Droplet className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif font-normal text-2xl text-[#2b3024] mb-3">
                  Aromatic Quality
                </h3>
                <p className="text-xs md:text-sm text-[#635f56] leading-relaxed font-normal max-w-[240px]">
                  Our essential oils and spices are carefully selected and cold-processed to retain natural aroma, potency and therapeutic benefits.
                </p>
              </div>

              <div className="pt-6 mt-6 relative z-10">
                <Link href="/products" className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-[#2b3024] group-hover:text-[#5d634f] transition-colors">
                  EXPLORE QUALITY <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Card 3: Health Benefits */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-white rounded-3xl p-8 md:p-10 border border-[#e6e2da] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group min-h-[380px]"
            >
              {/* 4. Card 3 Pure Transparent Botanical Sketch Watermark */}
              <BotanicalCardWatermark />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-[#5d634f] text-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                  <Heart className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif font-normal text-2xl text-[#2b3024] mb-3">
                  Health Benefits
                </h3>
                <p className="text-xs md:text-sm text-[#635f56] leading-relaxed font-normal max-w-[240px]">
                  Ceylon Spices are world-famous for high antioxidant levels, active anti-inflammatory compounds, and are free from harmful additives.
                </p>
              </div>

              <div className="pt-6 mt-6 relative z-10">
                <Link href="/about" className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-[#2b3024] group-hover:text-[#5d634f] transition-colors">
                  DISCOVER BENEFITS <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Our Legacy & Future Section (Reference Matched Design) */}
      <section className="relative w-full bg-[#f2efe9] py-24 px-6 md:px-8 border-t border-[#e2ddd3] overflow-hidden">
        
        {/* 6. Section 4 Right Pure Transparent Background Botanical Watermark */}
        <BotanicalSectionWatermark />

        {/* 7. Section 4 Bottom-Left Pure Transparent Foreground Green Leaf Corner */}
        <ForegroundCornerLeaf />

        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">

          {/* Left Column: Image with Overlay Stamp */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="md:col-span-6 relative flex justify-center"
          >
            <div className="relative w-full aspect-square max-w-[480px] rounded-3xl overflow-hidden shadow-lg border-4 border-white group">
              <Image
                src="/images/legacy_cinnamon_pots.png"
                alt="Rustic cinnamon sticks in clay pots"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Floating Dark Olive Stamp Badge */}
              <div className="absolute top-6 right-6 bg-[#2f3928] text-white px-5 py-3.5 rounded-2xl shadow-xl border border-white/20 text-center max-w-[200px] backdrop-blur-md">
                <svg className="w-4 h-4 text-[#ffdfa0] mx-auto mb-1 fill-current" viewBox="0 0 24 24">
                  <path d="M17,8C8,10 5,16 3,22C5,22 9,21 13,17C16,14 18,10 17,8Z" />
                </svg>
                <p className="text-[11px] font-normal leading-tight text-[#f2efe9]">
                  Rooted in Sri Lanka's Natural Heritage
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="md:col-span-6 flex flex-col space-y-6"
          >
            {/* Our Legacy */}
            <motion.div variants={fadeInUp} className="space-y-2">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#967b54]">OUR LEGACY</p>
              <h2 className="font-serif text-3xl md:text-4xl font-normal text-[#2b3024]">The Heritage of Wellness</h2>
              <p className="text-xs md:text-sm text-[#635f56] leading-relaxed font-normal pt-1">
                For centuries, Sri Lanka has been blessed with a rich heritage of spices and botanical treasures. Passed down through generations, our traditions continue to inspire premium products that nurture well-being, naturally.
              </p>
            </motion.div>

            {/* 5. Middle Section Divider with Leaf Emblem */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3 py-2">
              <div className="w-20 h-[1px] bg-[#d8d2c5]" />
              <svg className="w-3.5 h-3.5 text-[#88775f] fill-current" viewBox="0 0 24 24">
                <path d="M17,8C8,10 5,16 3,22C5,22 9,21 13,17C16,14 18,10 17,8Z" />
              </svg>
              <div className="w-20 h-[1px] bg-[#d8d2c5]" />
            </motion.div>

            {/* Our Future */}
            <motion.div variants={fadeInUp} className="space-y-2">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#967b54]">OUR FUTURE</p>
              <h2 className="font-serif text-2xl md:text-3xl font-normal text-[#2b3024]">Sustainable Cultivation</h2>
              <p className="text-xs md:text-sm text-[#635f56] leading-relaxed font-normal pt-1">
                By maintaining strong relationships with local growers and practicing eco-friendly cultivation, we ensure the purest organic harvests for a healthier tomorrow.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeInUp} className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#2f3928] hover:bg-[#1e251a] text-white rounded-full text-[11px] font-extrabold uppercase tracking-wider transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                EXPLORE SUSTAINABLE PRACTICES <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 5. From Forest Garden To Your Kitchen (Farm-to-Table Craftsmanship Journey) */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-8 py-20 bg-[#fcf9f8]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-[650px] mx-auto mb-16"
        >
          <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#795900] mb-2">CEYLON PROVENANCE & HARVEST</p>
          <h2 className="font-serif text-3xl md:text-4xl font-black text-[#42190a]">From Forest Garden To Your Kitchen</h2>
          <p className="text-sm md:text-base font-semibold text-[#52443f] mt-3 leading-relaxed">
            How we harvest, preserve, and deliver Sri Lanka's finest organic spices without compromising natural therapeutic potency.
          </p>
          <div className="w-16 h-1 bg-[#795900] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

          {/* Step 1 */}
          <div className="bg-white p-6 rounded-2xl border border-[#eae7e7] flex flex-col justify-between hover:shadow-premium hover:border-[#795900]/30 transition-all duration-300 group">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-serif font-black text-[#795900]/40 group-hover:text-[#795900] transition-colors">01</span>
                <div className="w-10 h-10 rounded-xl bg-[#d3e9c7]/50 text-[#192a14] flex items-center justify-center">
                  <Leaf className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-serif font-extrabold text-lg text-[#42190a] mb-2">Hand-Peeled at Dawn</h3>
              <p className="text-xs text-[#52443f] leading-relaxed font-medium">
                Peeled by master artisans in Kandy & Matale highlands during early morning humidity to retain peak essential oil sweetness.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#eae7e7]/60">
              <span className="text-[9px] font-extrabold text-[#192a14] uppercase tracking-wider bg-[#d3e9c7]/60 px-2 py-0.5 rounded">Ancestral Trade</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-2xl border border-[#eae7e7] flex flex-col justify-between hover:shadow-premium hover:border-[#795900]/30 transition-all duration-300 group">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-serif font-black text-[#795900]/40 group-hover:text-[#795900] transition-colors">02</span>
                <div className="w-10 h-10 rounded-xl bg-[#ffdfa0]/50 text-[#795900] flex items-center justify-center">
                  <Droplet className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-serif font-extrabold text-lg text-[#42190a] mb-2">Slow Shaded Curing</h3>
              <p className="text-xs text-[#52443f] leading-relaxed font-medium">
                Sun-cured under shaded solar facilities to prevent thermal degradation and preserve active piperine & curcumin.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#eae7e7]/60">
              <span className="text-[9px] font-extrabold text-[#795900] uppercase tracking-wider bg-[#ffdfa0]/60 px-2 py-0.5 rounded">Cold-Milling</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-2xl border border-[#eae7e7] flex flex-col justify-between hover:shadow-premium hover:border-[#795900]/30 transition-all duration-300 group">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-serif font-black text-[#795900]/40 group-hover:text-[#795900] transition-colors">03</span>
                <div className="w-10 h-10 rounded-xl bg-[#ffdbcf]/50 text-[#42190a] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-serif font-extrabold text-lg text-[#42190a] mb-2">Zero-Coumarin Testing</h3>
              <p className="text-xs text-[#52443f] leading-relaxed font-medium">
                Strict batch testing ensuring ultra-low coumarin, zero synthetic additives, and 100% USDA Organic compliance.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#eae7e7]/60">
              <span className="text-[9px] font-extrabold text-[#42190a] uppercase tracking-wider bg-[#ffdbcf]/60 px-2 py-0.5 rounded">Lab Verified</span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-2xl border border-[#eae7e7] flex flex-col justify-between hover:shadow-premium hover:border-[#795900]/30 transition-all duration-300 group">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-serif font-black text-[#795900]/40 group-hover:text-[#795900] transition-colors">04</span>
                <div className="w-10 h-10 rounded-xl bg-[#f5ebe0] text-[#795900] flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-serif font-extrabold text-lg text-[#42190a] mb-2">Origin Sealed Freshness</h3>
              <p className="text-xs text-[#52443f] leading-relaxed font-medium">
                Packaged directly at origin in airtight glass jars and eco-pouches, ensuring farm-fresh potency worldwide.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#eae7e7]/60">
              <span className="text-[9px] font-extrabold text-[#795900] uppercase tracking-wider bg-[#f5ebe0] px-2 py-0.5 rounded">Global Shipping</span>
            </div>
          </div>

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
            <h2 className="font-serif text-3xl md:text-4xl font-black text-[#42190a] leading-tight">
              Explore our Artisanal Collections
            </h2>
            <p className="text-sm md:text-base text-[#52443f] max-w-[650px] leading-relaxed font-medium">
              Selected harvests from the most fertile regions of Ceylon, chosen for their superior flavor and medicinal properties.
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
                True Alba Grade Ceylon Cinnamon, known for its sweet aroma and delicate flavor profile.
              </p>
              <Link
                href="/products/1"
                className="inline-block px-5 py-2 bg-white text-[#42190a] rounded font-bold text-xs uppercase tracking-wider transition-colors hover:bg-[#eae7e7]"
              >
                Shop Selection
              </Link>
            </div>
          </div>

          {/* Card 2: Turmeric (col-span 4) */}
          <div className="group relative rounded-xl overflow-hidden shadow-premium bg-[#ffdfa0] text-white h-[320px] md:col-span-4 flex flex-col justify-end p-8 transition-transform duration-300 hover:translate-y-[-4px]">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/card_turmeric.png"
                alt="Turmeric Roots & Powder"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-75 group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>

            <div className="relative z-10 space-y-3">
              <h3 className="font-serif text-2xl font-bold text-white">Turmeric</h3>
              <Link
                href="/products/3"
                className="inline-block px-5 py-2 border border-white/50 bg-white/10 backdrop-blur-md text-white rounded font-bold text-xs uppercase tracking-wider transition-colors hover:bg-white/20 text-center"
              >
                Explore
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
              <span className="inline-block text-[9px] font-extrabold uppercase tracking-widest text-[#d3e9c7] bg-[#1e381b]/80 px-2 py-0.5 rounded">Maroon & Green</span>
              <h3 className="font-serif text-2xl font-bold text-white">Black Pepper</h3>
              <Link
                href="/products/2"
                className="inline-block px-5 py-2 border border-white/50 bg-white/10 backdrop-blur-md text-white rounded font-bold text-xs uppercase tracking-wider transition-colors hover:bg-white/20 text-center"
              >
                Explore
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
              <span className="inline-block text-[9px] font-extrabold uppercase tracking-widest text-[#fef08a] bg-[#15803d]/80 px-2.5 py-0.5 rounded">Vibrant Yellow, Red & Green</span>
              <h3 className="font-serif text-2xl font-bold text-white">Organic Garcinia (Goraka)</h3>
              <p className="text-sm text-white/90 leading-relaxed font-medium">
                Traditional sun-dried Garcinia segments, widely prized for natural culinary souring and digestive benefits.
              </p>
              <Link
                href="/products/5"
                className="inline-block px-5 py-2 bg-white text-[#7c2d12] rounded font-extrabold text-xs uppercase tracking-wider transition-colors hover:bg-[#eae7e7]"
              >
                Shop Garcinia
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
