'use client';

import Image from "next/image";
import Link from "next/link";
import { Leaf, Award, ShieldCheck, Heart, ArrowRight, Droplet, Star } from "lucide-react";
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


      {/* 1. Hero Section (With Background Image and 3D Canister Table Alignment) */}
      <section className="relative w-full overflow-hidden bg-[#fcf9f8] pt-16 pb-20 md:pt-28 md:pb-28 border-b border-[#eae7e7]/40">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero_cinnamon_background.jpg" 
            alt="Estate tea plantation and cinnamon table background" 
            fill
            className="object-cover opacity-95 select-none object-bottom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fcf9f8]/68 via-[#fcf9f8]/42 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column Text (Centered layout on mobile, left on desktop) */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col space-y-6 md:pr-8 text-left justify-center h-full"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 bg-[#d3e9c7] text-[#192a14] rounded-full text-xs font-bold uppercase tracking-wider self-start">
              <Leaf className="w-3.5 h-3.5" /> 100% Organic Sourced
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#42190a] leading-[1.15]">
              We bring <span className="text-[#795900] font-sans font-black tracking-wide uppercase block md:inline">True Cinnamon</span> & <br />
              Hand-selected products <br />
              <span className="font-sans font-extrabold uppercase text-xs tracking-[0.2em] bg-[#5d2e1d] text-[#ffdfa0] px-3 py-1 rounded inline-block my-2">SINGLE ORIGIN Sri Lanka (CEYLON)</span> <br />
              so <span className="italic text-[#795900]">authentic</span> you can trust.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-[#52443f] text-sm md:text-base leading-relaxed max-w-[480px]">
              Sourced directly from village home gardens in the mist-veiled forests of Ceylon. Completely additive-free, pure, and harvested by family farmers who preserve our ancient heritage.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="/products" 
                className="px-6 py-3.5 bg-[#795900] hover:bg-[#5c4300] text-white rounded-lg font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:translate-y-[-2px]"
              >
                Shop Our Collection
              </Link>
              <Link 
                href="/about" 
                className="px-6 py-3.5 border border-[#85736e] hover:border-[#42190a] text-[#42190a] rounded-lg font-bold text-xs uppercase tracking-wider transition-all hover:bg-[#f6f3f2]"
              >
                Our Process
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right Column: 3D Canister Product Showcase */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-end items-end h-[420px] md:h-[580px]"
          >
            {/* 3D Canister Product (Placed on the table in the background image) */}
            <motion.div 
              animate={{ 
                y: [0, -10, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute z-20 w-[65%] h-[125%] bottom-[5%] right-[5%] md:right-[8%] md:left-auto flex items-end justify-center pointer-events-none drop-shadow-[0_30px_50px_rgba(0,0,0,0.42)]"
            >
              <img 
                src="/images/cinnamon_canister_3d.png" 
                alt="The Cinnamon Care Canister 3D" 
                className="max-h-[95%] object-contain"
              />
            </motion.div>

            {/* Pulsing Shadow under Canister */}
            <motion.div 
              animate={{ 
                scale: [0.9, 1.05, 0.9],
                opacity: [0.45, 0.28, 0.45]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-[3%] right-[22%] md:right-[25%] md:left-auto z-10 w-[30%] h-4 bg-black/40 blur-md rounded-full pointer-events-none"
            />
            
            {/* Floating Badge */}
            <div className="absolute bottom-[8%] left-[2%] md:left-[10%] bg-white border border-[#eae7e7] p-3.5 rounded-xl shadow-premium flex items-center gap-3 z-35 select-none">
              <div className="w-9 h-9 rounded-full bg-[#ffdfa0] flex items-center justify-center text-[#795900]">
                <Star className="w-4.5 h-4.5 fill-current" />
              </div>
              <div>
                <p className="text-[9px] font-bold text-[#85736e] uppercase tracking-wider">Premium Quality</p>
                <p className="text-xs font-serif font-bold text-[#42190a]">Grade A Canister Spices</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. Global Certifications Row & Announcement */}
      <section className="bg-[#f6f3f2] border-y border-[#eae7e7] py-12">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Headline and Badges list */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-5 space-y-4"
          >
            <div className="inline-flex items-center gap-1.5 text-[#192a14] bg-[#d3e9c7] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded">
              certified
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#42190a] tracking-tight">
              GLOBAL CERTIFICATIONS
            </h2>
            <div className="flex flex-wrap gap-4 text-[#52443f]/80 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider border border-[#eae7e7] bg-white px-3 py-1.5 rounded shadow-sm flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#795900]" /> USDA Organic
              </span>
              <span className="text-xs font-bold uppercase tracking-wider border border-[#eae7e7] bg-white px-3 py-1.5 rounded shadow-sm flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#795900]" /> GMP Facility
              </span>
              <span className="text-xs font-bold uppercase tracking-wider border border-[#eae7e7] bg-white px-3 py-1.5 rounded shadow-sm flex items-center gap-1.5">
                <Leaf className="w-4 h-4 text-[#795900]" /> 100% Organic
              </span>
            </div>
          </motion.div>

          {/* Right: Announcement Text */}
          <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-[#eae7e7] shadow-sm">
            <p className="text-sm text-[#52443f] leading-relaxed font-medium">
              The Cinnamon Care is pleased to announce that we are in the process of establishing a GMP-certified facility, aligned with ISO 22000 standards, which we intend to obtain in the near future. FDA approvals are currently underway.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Why Choose Us Section */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-8 py-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-[600px] mx-auto mb-16"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#795900] mb-2">Why Choose Us</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#42190a]">Quality & Sustainability</h2>
          <div className="w-16 h-1 bg-[#795900] mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#fcf9f8] p-8 rounded-xl border border-[#eae7e7] text-center hover:shadow-premium transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[#ffdbcf] text-[#42190a] flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#42190a] mb-3">Ethically Sourced</h3>
            <p className="text-sm text-[#52443f] leading-relaxed">
              We work directly with small farming cooperatives, ensuring fair wages, sustainable agricultural practices, and community empowerment.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#fcf9f8] p-8 rounded-xl border border-[#eae7e7] text-center hover:shadow-premium transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[#d3e9c7] text-[#192a14] flex items-center justify-center mx-auto mb-6">
              <Droplet className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#42190a] mb-3">Aromatic Quality</h3>
            <p className="text-sm text-[#52443f] leading-relaxed">
              Rich essential oils and potent aromas preserved through hand-harvesting and slow natural drying in shaded facilities.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#fcf9f8] p-8 rounded-xl border border-[#eae7e7] text-center hover:shadow-premium transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[#ffdfa0] text-[#795900] flex items-center justify-center mx-auto mb-6">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#42190a] mb-3">Health Benefits</h3>
            <p className="text-sm text-[#52443f] leading-relaxed">
              Ceylon Spices are famous for their high antioxidants, anti-inflammatory compounds, and low coumarin levels, boosting health.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Our Legacy & Future Double-Layered Section */}
      <section className="bg-[#f6f3f2] border-y border-[#eae7e7] py-20 px-6 md:px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

          {/* Left Column Stacked Images */}
          <div className="md:col-span-6 relative h-[380px] md:h-[480px] flex items-center justify-center">
            {/* Base Image */}
            <div className="relative w-[75%] h-[80%] rounded-xl overflow-hidden shadow-premium z-10">
              <Image
                src="/images/legacy_cinnamon_pots.png"
                alt="Cinnamon sticks in rustic clay pots"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>

            {/* Top overlapping stamp/badge */}
            <div className="absolute top-[10%] right-[5%] bg-[#192a14] text-white p-6 rounded-xl shadow-premium z-20 max-w-[180px] text-center">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#97ac8d] mb-1">Single Origin</p>
              <h4 className="font-serif font-bold text-sm leading-tight text-white">Knuckles Mountain Range</h4>
            </div>
          </div>

          {/* Right Column Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="md:col-span-6 flex flex-col space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#795900]">Our Legacy</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#42190a] leading-tight">The Heritage of Wellness</h2>
              <p className="text-sm text-[#52443f] leading-relaxed">
                For centuries, the highlands of Sri Lanka have nurtured spices prized by empires. Our spice farmers preserve this heritage through regenerative farming, keeping our soils vibrant and spices pure. We bring you these pristine treasures directly, completely untouched by additives.
              </p>
            </motion.div>
 
            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#795900]">Our Future</p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#42190a]">Sustainable Cultivation</h2>
              <p className="text-sm text-[#52443f] leading-relaxed">
                By maintaining forest-gardens that mimic natural ecosystems, we preserve Sri Lanka's unique biodiversity. This protects wildlife, sustains water cycles, and ensures the purest organic harvest for generations to come.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#42190a] hover:bg-[#5d2e1d] text-white rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                Explore Sustainable Practices <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. Discover Our Collection (2-Column Blurred-Background Layout) */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-8 py-20 bg-[#fcf9f8]">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-[600px] mx-auto mb-16"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#795900] mb-2">OUR OFFERINGS</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#42190a]">Discover Our Collection</h2>
          <div className="w-16 h-1 bg-[#795900] mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Card 1: Cinnamon (Dark theme) */}
          <div className="group relative rounded-3xl overflow-hidden shadow-premium bg-[#192a14] text-white h-[380px] flex flex-col justify-end p-8 md:p-12 transition-transform duration-300 hover:translate-y-[-4px]">
            {/* Background Image Layer with overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/alba_cinnamon_detail.png"
                alt="Ceylon Cinnamon Sticks"
                fill
                sizes="50vw"
                className="object-cover opacity-35 group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#192a14]/95 via-[#192a14]/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-4 text-left">
              <span className="inline-block text-[9px] font-bold uppercase tracking-widest text-[#97ac8d] bg-[#2e4028] px-2.5 py-1 rounded">100% Organic</span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold">Ceylon Cinnamon</h3>
              <p className="text-sm text-[#eae7e7]/85 leading-relaxed max-w-[360px]">
                The world's finest Alba grade cinnamon quills, hand-peeled, sweet, and low in coumarin. Perfect for wellness.
              </p>
              <button
                onClick={() => {
                  const message = `*The Cinnamon Care - Home Inquiry*\n=================================\nProduct: *Ceylon Cinnamon*\nPrice: *$14.50*\n=================================\nPlease confirm my order. Thank you!`;
                  window.open(`https://wa.me/94761193338?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#ffc641] hover:underline pt-2 cursor-pointer"
              >
                SHOP CINNAMON &rarr;
              </button>
            </div>
          </div>

          {/* Card 2: Turmeric (Light theme) */}
          <div className="group relative rounded-3xl overflow-hidden shadow-premium bg-[#ffdfa0] text-[#42190a] h-[380px] flex flex-col justify-end p-8 md:p-12 transition-transform duration-300 hover:translate-y-[-4px]">
            {/* Background Image Layer with overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/turmeric_spoon.png"
                alt="Vibrant organic turmeric powder"
                fill
                sizes="50vw"
                className="object-cover opacity-25 group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#ffdfa0]/90 via-[#ffdfa0]/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-4 text-left">
              <span className="inline-block text-[9px] font-bold uppercase tracking-widest text-[#795900] bg-white/70 px-2.5 py-1 rounded">Aromatic Gold</span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold">Turmeric</h3>
              <p className="text-sm text-[#52443f] leading-relaxed max-w-[360px]">
                Sun-dried turmeric root, rich in active curcumin compounds for peak anti-inflammatory benefits.
              </p>
              <button
                onClick={() => {
                  const message = `*The Cinnamon Care - Home Inquiry*\n=================================\nProduct: *Turmeric*\nPrice: *$12.00*\n=================================\nPlease confirm my order. Thank you!`;
                  window.open(`https://wa.me/94761193338?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#795900] hover:underline pt-2 cursor-pointer"
              >
                SHOP TURMERIC &rarr;
              </button>
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
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#42190a] leading-tight">
              Explore our Artisanal Collections
            </h2>
            <p className="text-sm md:text-base text-[#52443f] max-w-[650px] leading-relaxed">
              Selected harvests from the most fertile regions of Ceylon, chosen for their superior flavor and medicinal properties.
            </p>
          </div>
          <Link
            href="/products"
            className="text-xs font-bold uppercase tracking-wider text-[#795900] hover:underline hover-underline-animation self-start md:self-auto"
          >
            View All Spices
          </Link>
        </motion.div>

        {/* Asymmetrical Grid */}
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
              <h3 className="font-serif text-2xl font-bold text-white">Cinnamon</h3>
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

          {/* Card 3: Black Pepper (col-span 4) */}
          <div className="group relative rounded-xl overflow-hidden shadow-premium bg-[#303030] text-white h-[320px] md:col-span-4 flex flex-col justify-end p-8 transition-transform duration-300 hover:translate-y-[-4px]">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/card_pepper.png"
                alt="Black Peppercorns"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-70 group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>

            <div className="relative z-10 space-y-3">
              <h3 className="font-serif text-2xl font-bold text-white">Black Pepper</h3>
              <Link
                href="/products/2"
                className="inline-block px-5 py-2 border border-white/50 bg-white/10 backdrop-blur-md text-white rounded font-bold text-xs uppercase tracking-wider transition-colors hover:bg-white/20 text-center"
              >
                Explore
              </Link>
            </div>
          </div>

          {/* Card 4: Cardamom (col-span 8) */}
          <div className="group relative rounded-xl overflow-hidden shadow-premium bg-[#192a14] text-white h-[320px] md:col-span-8 flex flex-col justify-end p-8 transition-transform duration-300 hover:translate-y-[-4px]">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/card_cardamom.png"
                alt="Green Cardamom Pods"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover opacity-65 group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>

            <div className="relative z-10 space-y-3 max-w-[480px]">
              <h3 className="font-serif text-2xl font-bold text-white">Cardamom</h3>
              <p className="text-sm text-white/85 leading-relaxed">
                Highly aromatic green pods hand-picked at peak maturity from our mountain estates.
              </p>
              <Link
                href="/products/4"
                className="inline-block px-5 py-2 bg-white text-[#42190a] rounded font-bold text-xs uppercase tracking-wider transition-colors hover:bg-[#eae7e7]"
              >
                Shop Selection
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
