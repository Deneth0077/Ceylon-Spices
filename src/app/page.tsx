'use client';

import Image from "next/image";
import Link from "next/link";
import { Leaf, Award, ShieldCheck, Heart, ArrowRight, Droplet, Star } from "lucide-react";
import { motion } from "framer-motion";

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
    <div className="w-full bg-[#fcf9f8] text-[#1b1c1c] overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative max-w-[1280px] mx-auto px-6 md:px-8 pt-12 pb-20 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column Text */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col space-y-6 md:pr-8"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 bg-[#d3e9c7] text-[#192a14] rounded-full text-xs font-bold uppercase tracking-wider self-start">
            <Leaf className="w-3.5 h-3.5" /> 100% Organic Certified
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-[#42190a] leading-[1.1]">
            The Soul of <br />
            <span className="italic text-[#795900]">Sri Lanka</span> <br />
            in Every Grain
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-[#52443f] text-base md:text-lg leading-relaxed max-w-[480px]">
            Discover pure, artisanal spices sourced directly from the misty highlands of Ceylon. Ethically farmed, hand-selected, and packed fresh for your kitchen.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
            <Link 
              href="/products" 
              className="px-6 py-3 bg-[#795900] hover:bg-[#5c4300] text-white rounded-lg font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:translate-y-[-2px]"
            >
              Shop Our Collection
            </Link>
            <Link 
              href="/about" 
              className="px-6 py-3 border border-[#85736e] hover:border-[#42190a] text-[#42190a] rounded-lg font-bold text-xs uppercase tracking-wider transition-all hover:bg-[#f6f3f2]"
            >
              Our Process
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Right Column Image with Organic Shape */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center items-center h-[350px] md:h-[500px]"
        >
          {/* Background decorative blob */}
          <div className="absolute inset-0 bg-[#dcd9d9]/40 rounded-[50%_50%_30%_70%_/_50%_60%_40%_50%] animate-morph-1 -z-10 w-[95%] h-[95%]" />
          
          {/* Main Image Masked */}
          <div className="relative w-[90%] h-[90%] rounded-[42%_58%_70%_30%_/_45%_45%_55%_55%] overflow-hidden animate-morph-2 shadow-premium border-2 border-white">
            <Image 
              src="/images/hero_organic_grain.png" 
              alt="Lush green tea and spice plantation in Sri Lanka" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          
          {/* Floating Badge */}
          <div className="absolute bottom-6 left-6 md:left-12 bg-white/95 backdrop-blur border border-[#eae7e7] p-4 rounded-xl shadow-premium flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#ffdfa0] flex items-center justify-center text-[#795900]">
              <Star className="w-5 h-5 fill-current" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#85736e] uppercase tracking-wider">Premium Quality</p>
              <p className="text-xs font-serif font-bold text-[#42190a]">Grade A Artisanal Spices</p>
            </div>
          </div>
        </motion.div>

      </section>

      {/* 2. Global Certifications Row */}
      <section className="bg-[#f6f3f2] border-y border-[#eae7e7] py-8">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex flex-wrap justify-around items-center gap-6 text-[#52443f]/60">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#795900]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#42190a]/80">USDA Organic Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#795900]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#42190a]/80">GMP Facility Standard</span>
          </div>
          <div className="flex items-center gap-2">
            <Leaf className="w-5 h-5 text-[#795900]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#42190a]/80">100% Raw & Natural</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#795900]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#42190a]/80">HACCP Certified Quality</span>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us Section */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-8 py-20">
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#795900] mb-2">Why Choose Us</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#42190a]">Quality & Sustainability</h2>
          <div className="w-16 h-1 bg-[#795900] mx-auto mt-4 rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#fcf9f8] p-8 rounded-xl border border-[#eae7e7] text-center hover:shadow-premium transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[#ffdbcf] text-[#42190a] flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#42190a] mb-3">Ethically Sourced</h3>
            <p className="text-xs text-[#52443f] leading-relaxed">
              We work directly with small farming cooperatives, ensuring fair wages, sustainable agricultural practices, and community empowerment.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-[#fcf9f8] p-8 rounded-xl border border-[#eae7e7] text-center hover:shadow-premium transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[#d3e9c7] text-[#192a14] flex items-center justify-center mx-auto mb-6">
              <Droplet className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#42190a] mb-3">Aromatic Quality</h3>
            <p className="text-xs text-[#52443f] leading-relaxed">
              Rich essential oils and potent aromas preserved through hand-harvesting and slow natural drying in shaded facilities.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-[#fcf9f8] p-8 rounded-xl border border-[#eae7e7] text-center hover:shadow-premium transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[#ffdfa0] text-[#795900] flex items-center justify-center mx-auto mb-6">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#42190a] mb-3">Health Benefits</h3>
            <p className="text-xs text-[#52443f] leading-relaxed">
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
          <div className="md:col-span-6 flex flex-col space-y-8">
            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#795900]">Our Legacy</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#42190a] leading-tight">The Heritage of Wellness</h2>
              <p className="text-xs text-[#52443f] leading-relaxed">
                For centuries, the highlands of Sri Lanka have nurtured spices prized by empires. Our spice farmers preserve this heritage through regenerative farming, keeping our soils vibrant and spices pure. We bring you these pristine treasures directly, completely untouched by additives.
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#795900]">Our Future</p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#42190a]">Sustainable Cultivation</h2>
              <p className="text-xs text-[#52443f] leading-relaxed">
                By maintaining forest-gardens that mimic natural ecosystems, we preserve Sri Lanka's unique biodiversity. This protects wildlife, sustains water cycles, and ensures the purest organic harvest for generations to come.
              </p>
            </div>
            
            <div className="pt-4">
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#42190a] hover:bg-[#5d2e1d] text-white rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                Explore Sustainable Practices <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Discover Our Collection (Side-by-side) */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-8 py-20">
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#795900] mb-2">Our Offerings</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#42190a]">Discover Our Collection</h2>
          <div className="w-16 h-1 bg-[#795900] mx-auto mt-4 rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Cinnamon (Dark theme) */}
          <div className="group relative rounded-xl overflow-hidden shadow-premium bg-[#192a14] text-white h-[380px] flex flex-col justify-end p-8 md:p-12 transition-transform duration-300 hover:translate-y-[-4px]">
            {/* Background Image Layer with overlay */}
            <div className="absolute inset-0 z-0">
              <Image 
                src="/images/alba_cinnamon_detail.png" 
                alt="Ceylon Cinnamon Sticks" 
                fill 
                sizes="50vw"
                className="object-cover opacity-35 group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#192a14]/90 via-[#192a14]/40 to-transparent" />
            </div>
            
            {/* Content */}
            <div className="relative z-10 space-y-4">
              <span className="inline-block text-[9px] font-bold uppercase tracking-widest text-[#97ac8d] bg-[#2e4028] px-2.5 py-1 rounded">100% Organic</span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold">Ceylon Cinnamon</h3>
              <p className="text-xs text-[#eae7e7]/80 leading-relaxed max-w-[360px]">
                The world's finest Alba grade cinnamon quills, hand-peeled, sweet, and low in coumarin. Perfect for wellness.
              </p>
              <Link 
                href="/products/1" 
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ffc641] hover:underline pt-2"
              >
                Shop Cinnamon <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
          
          {/* Card 2: Turmeric (Light theme) */}
          <div className="group relative rounded-xl overflow-hidden shadow-premium bg-[#ffdfa0] text-[#42190a] h-[380px] flex flex-col justify-end p-8 md:p-12 transition-transform duration-300 hover:translate-y-[-4px]">
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
            <div className="relative z-10 space-y-4">
              <span className="inline-block text-[9px] font-bold uppercase tracking-widest text-[#795900] bg-white/70 px-2.5 py-1 rounded">Aromatic Gold</span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold">Turmeric</h3>
              <p className="text-xs text-[#52443f] leading-relaxed max-w-[360px]">
                Sun-dried turmeric root, rich in active curcumin compounds for peak anti-inflammatory benefits.
              </p>
              <Link 
                href="/products/3" 
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#795900] hover:underline pt-2"
              >
                Shop Turmeric <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
}
