'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { Leaf, ShieldCheck, Heart, Globe, Award, Droplet, ArrowRight, Handshake, Utensils } from "lucide-react";
import TransparentImage from "@/components/TransparentImage";
import { motion } from "framer-motion";

// Framer Motion Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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
    transition: {
      staggerChildren: 0.15
    }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export default function Home() {
  const [sliderIndex, setSliderIndex] = useState(7); // Start at index 7 (middle copy)
  const [isTransitioning, setIsTransitioning] = useState(true);

  const heroProducts = [
    {
      id: "cinnamon",
      displayName: "Cinnamon",
      image: "/images/card_cinnamon.png",
    },
    {
      id: "pepper",
      displayName: "Pepper",
      image: "/images/card_pepper.png",
    },
    {
      id: "turmeric",
      displayName: "Turmeric",
      image: "/images/card_turmeric.png",
    },
    {
      id: "nutmeg",
      displayName: "Nutmeg",
      image: "/images/card_nutmeg.png",
    },
    {
      id: "cloves",
      displayName: "Cloves",
      image: "/images/card_cloves.png",
    },
    {
      id: "chilli",
      displayName: "Chilli",
      image: "/images/card_chilli.png",
    },
    {
      id: "cardamom",
      displayName: "Cardamom",
      image: "/images/card_cardamom.png",
    }
  ];

  // Tripled list for infinite scrolling
  const tripledProducts = [...heroProducts, ...heroProducts, ...heroProducts];

  const handleNext = () => {
    if (!isTransitioning) return;
    setSliderIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    setSliderIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (sliderIndex >= 14) {
      setIsTransitioning(false);
      setSliderIndex(sliderIndex - 7);
    } else if (sliderIndex < 7) {
      setIsTransitioning(false);
      setSliderIndex(sliderIndex + 7);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSliderIndex((prev) => prev + 1);
    }, 3800);
    return () => clearInterval(timer);
  }, [sliderIndex]);

  return (
    <div className="w-full flex flex-col bg-white overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative w-full h-auto min-h-[600px] md:h-[700px] overflow-hidden flex flex-col items-center justify-center z-20 pt-24 pb-20 md:py-0">

        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/rustic-spices-bg.png" alt="Rustic Spice Background" fill className="object-cover" priority />
        </div>

        {/* Dark overlay to make the center blob pop */}
        <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />

        {/* Luminous Wave Design */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10 pointer-events-none leading-[0]">
          <svg viewBox="0 0 1440 250" preserveAspectRatio="none" className="w-full h-[120px] md:h-[220px] block drop-shadow-[0_-5px_15px_rgba(255,255,255,0.2)]">
            <defs>
              <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.8)" />
              </linearGradient>
              <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(220,180,80,0)" />
                <stop offset="50%" stopColor="rgba(220,180,80,0.3)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.9)" />
              </linearGradient>
              <linearGradient id="goldGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(204,164,59,0)" />
                <stop offset="30%" stopColor="rgba(204,164,59,0.8)" />
                <stop offset="70%" stopColor="rgba(255,230,150,1)" />
                <stop offset="100%" stopColor="rgba(255,255,255,1)" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter id="glow-strong" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="15" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Back wide glowing highlight */}
            <path d="M-100,120 C200,200 400,20 800,100 C1100,160 1300,50 1500,20" fill="none" stroke="url(#goldGlow)" strokeWidth="15" filter="url(#glow-strong)" opacity="0.6" />

            {/* Sharp gold line */}
            <path d="M-100,120 C200,200 400,20 800,100 C1100,160 1300,50 1500,20" fill="none" stroke="url(#goldGlow)" strokeWidth="2" filter="url(#glow)" />

            {/* Translucent wave overlay 1 */}
            <path d="M0,150 C300,230 500,80 900,130 C1200,170 1350,70 1440,30 L1440,250 L0,250 Z" fill="url(#waveGrad1)" />

            {/* Translucent wave overlay 2 (Gold tinted) */}
            <path d="M0,180 C250,250 550,110 950,180 C1200,220 1350,100 1440,60 L1440,250 L0,250 Z" fill="url(#waveGrad2)" />

            {/* Solid base matching next section #FAF7F2 */}
            <path d="M0,200 C300,260 600,150 1000,210 C1250,240 1350,140 1440,110 L1440,250 L0,250 Z" fill="#FAF7F2" />
          </svg>
        </div>

        {/* Main Content Split Layout */}
        <div className="relative max-w-6xl mx-auto px-6 sm:px-12 md:px-16 w-full z-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mt-[-30px] md:mt-[-70px]">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left pointer-events-auto lg:-translate-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold text-white leading-[1.1] font-serif mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            >
              Sri Lankan Spices: <br />
              Pure, Authentic, <br />
              Tropical
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#ffe8b3] text-xs md:text-sm tracking-[0.25em] font-extrabold uppercase font-sans mb-8 drop-shadow-sm"
            >
              DISCOVER THE TRUE FLAVORS OF CEYLON
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button 
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3.5 bg-[#c09257] hover:bg-[#ba874a] text-white font-extrabold text-xs tracking-[0.15em] uppercase rounded-full transition-all duration-300 shadow-[0_6px_20px_rgba(192,146,87,0.35)] hover:-translate-y-[1px] active:translate-y-[0px] w-fit"
              >
                Learn More
              </button>
            </motion.div>
          </div>

          {/* Right Product Slider Column */}
          <div className="lg:col-span-6 w-full flex flex-col items-center lg:items-start relative pointer-events-auto overflow-visible">
            {/* Carousel Container */}
            <div className="relative w-full overflow-hidden h-[410px] flex items-center">
              <div 
                onTransitionEnd={handleTransitionEnd}
                className="flex gap-6"
                style={{ 
                  transform: `translateX(-${sliderIndex * 304}px)`,
                  transition: isTransitioning ? 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
                  paddingLeft: 'calc(50% - 140px)'
                }}
              >
                {tripledProducts.map((p, idx) => {
                  const isActive = idx === sliderIndex;
                  return (
                    <div 
                      key={`${p.id}-${idx}`}
                      className={`w-[280px] h-[350px] bg-white border-2 border-[#1c120c] flex flex-col justify-between transition-all duration-700 ease-out relative overflow-hidden select-none ${
                        isActive 
                          ? 'scale-[1.05] opacity-100 z-20 translate-y-[-10px] shadow-[6px_6px_0px_0px_rgba(28,15,8,0.3)]' 
                          : 'scale-95 opacity-40 z-10 translate-y-0 shadow-[4px_4px_0px_0px_rgba(28,15,8,0.15)] pointer-events-none'
                      }`}
                      style={{ borderRadius: '8px' }}
                    >
                      {/* Top: Image Section */}
                      <div className="w-full h-[260px] relative overflow-hidden border-b-2 border-[#1c120c]">
                        <Image 
                          src={p.image} 
                          alt={p.displayName} 
                          fill
                          sizes="280px"
                          className="object-cover"
                          priority={isActive}
                        />
                      </div>
                      
                      {/* Bottom: Text Section */}
                      <div className="w-full h-[86px] bg-white flex items-center justify-center">
                        <h4 className="font-serif font-bold text-3xl tracking-wide text-[#3a100e] text-center select-none">
                          {p.displayName}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between w-[280px] mt-4 px-2">
              {/* Pagination Dots */}
              <div className="flex gap-2">
                {heroProducts.map((_, idx) => {
                  const isDotActive = idx === (sliderIndex % 7);
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        if (!isTransitioning) return;
                        setSliderIndex(idx + 7);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${isDotActive ? 'bg-[#c09257] w-4' : 'bg-white/40'}`}
                    />
                  );
                })}
              </div>
              
              {/* Arrow Buttons */}
              <div className="flex gap-3">
                <button 
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 cursor-pointer"
                >
                  <svg className="w-4 h-4 stroke-white stroke-[2.5] fill-none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button 
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 cursor-pointer"
                >
                  <svg className="w-4 h-4 stroke-white stroke-[2.5] fill-none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Scroll Down Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-[30px] md:bottom-[45px] left-1/2 -translate-x-1/2 z-50 cursor-pointer group flex flex-col items-center gap-1.5"
          onClick={() => {
            document.getElementById("certifications")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-[#3a200e] font-bold text-[0.65rem] md:text-xs tracking-[0.25em] uppercase font-sans whitespace-nowrap drop-shadow-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300 select-none">
            Scroll Down
          </span>

          {/* Shaking/Bouncing Down Arrow Head */}
          <motion.div
            animate={{
              y: [0, 5, 0]
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex items-center justify-center text-[#3a200e] opacity-75 group-hover:opacity-100 transition-opacity duration-300"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 stroke-[#3a200e] stroke-[2.5] fill-none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </motion.div>
        </motion.div>

      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 bg-[#faf8f5] relative z-10 overflow-hidden">
        {/* Floating background decorative spice elements (Mockup Spices) */}
        <div className="absolute -top-14 -left-14 w-64 h-64 md:w-80 md:h-80 pointer-events-none opacity-90 select-none z-0">
          <TransparentImage
            src="/images/cardamom_pods_1781650532128.png"
            alt="Green Cardamom"
            className="w-full h-full object-contain rotate-[-15deg] drop-shadow-md"
            threshold={240}
          />
        </div>

        <div className="absolute -bottom-24 -right-20 w-72 h-72 md:w-96 md:h-96 pointer-events-none opacity-95 select-none z-0">
          <TransparentImage
            src="/images/cinnamon_sticks_with_rope.png"
            alt="Cinnamon Sticks"
            className="w-full h-full object-contain rotate-[-20deg] drop-shadow-lg"
            threshold={240}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.span
              variants={fadeInUp}
              className="text-xs md:text-sm font-extrabold text-[#b48648] tracking-[0.25em] uppercase font-sans block mb-3"
            >
              Trusted Worldwide
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-4xl font-extrabold text-[#3a200e] tracking-tight font-sans"
            >
              Global Quality Certifications
            </motion.h2>
          </motion.div>

          {/* Native HTML/CSS Cards Grid with Real CSS Shadows and Hover Pop-Up/Lift Effects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 max-w-5xl mx-auto z-10 relative mt-12 px-4 justify-items-center items-center">
            
            {/* USDA Organic Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="w-[280px] h-[340px] rounded-[8px] p-3 flex flex-col items-center justify-between shadow-[0_12px_28px_rgba(0,0,0,0.12)] relative border border-[#162720]/80 overflow-hidden group cursor-pointer hover:-translate-y-1.5 hover:shadow-[0_18px_36px_rgba(0,0,0,0.18)] transition-all duration-300"
            >
              {/* Background texture */}
              <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image src="/images/cardamom_bg_card.png" alt="Green Marble" fill className="object-cover contrast-[1.1] saturate-[0.6] brightness-[0.8]" />
              </div>
              
              {/* Inner Panel */}
              <div className="w-full h-full bg-[#f6f4f0]/95 backdrop-blur-[1px] border-2 border-[#d4af37]/60 rounded-[4px] p-5 flex flex-col items-center justify-center text-center relative z-10 select-none">
                {/* Seal */}
                <div className="w-14 h-14 rounded-full border-2 border-[#d4af37] flex items-center justify-center bg-white shadow-[0_3px_6px_rgba(0,0,0,0.06)] mb-4">
                  <Leaf className="w-7 h-7 text-[#1b4332]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#2c1a11] mb-2 select-none">USDA Organic</h3>
                <div className="w-10 h-[1.5px] bg-[#d4af37] mb-3" />
                <p className="text-[11px] text-stone-600 font-sans font-medium leading-relaxed max-w-[190px] select-none">
                  100% certified organic spices, grown using traditional methods without chemicals.
                </p>
              </div>
              
              {/* Gold Clip */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-2.5 bg-gradient-to-r from-[#aa7c11] via-[#ffd700] to-[#aa7c11] border border-[#8c620c] rounded-[1px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] z-20 select-none" />
            </motion.div>

            {/* Ceylon Spices Card (Middle Featured Card) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="w-[280px] h-[365px] rounded-[8px] p-3 flex flex-col items-center justify-between shadow-[0_16px_36px_rgba(0,0,0,0.2)] relative border border-[#3a2212]/80 overflow-hidden group cursor-pointer md:mt-[-12px] hover:-translate-y-2 hover:shadow-[0_22px_44px_rgba(0,0,0,0.28)] transition-all duration-300"
            >
              {/* Background texture */}
              <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image src="/images/cinnamon_bg_card.png" alt="Wood Texture" fill className="object-cover brightness-[0.7] contrast-[1.05]" />
              </div>
              
              {/* Inner Panel */}
              <div className="w-full h-full bg-gradient-to-br from-[#ffe79a] via-[#e6c15c] to-[#b38f2d]/95 border-2 border-[#b38f2d] rounded-[4px] p-5 flex flex-col items-center justify-center text-center relative z-10 shadow-inner select-none">
                {/* Seal */}
                <div className="w-14 h-14 rounded-full border-2 border-[#b38f2d] flex items-center justify-center bg-[#ffe79a] shadow-[0_3px_6px_rgba(0,0,0,0.1)] mb-4 overflow-hidden p-2">
                  <Image src="/images/shiield logo.png" alt="Ceylon Spices Lion" width={32} height={32} className="object-contain" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#3d240e] mb-2 select-none">Ceylon Spices</h3>
                <div className="w-10 h-[1.5px] bg-[#5c3a21] mb-3" />
                <p className="text-[11px] text-[#3d240e] font-sans font-semibold leading-relaxed max-w-[190px] select-none">
                  Authentic Ceylon origin stamp, carrying the world-renowned purity and flavor profile.
                </p>
              </div>
              
              {/* Gold Clip */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-2.5 bg-gradient-to-r from-[#aa7c11] via-[#ffd700] to-[#aa7c11] border border-[#8c620c] rounded-[1px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] z-20 select-none" />
            </motion.div>

            {/* ISO Certified Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="w-[280px] h-[340px] rounded-[8px] p-3 flex flex-col items-center justify-between shadow-[0_12px_28px_rgba(0,0,0,0.12)] relative border border-[#334e56]/80 overflow-hidden group cursor-pointer hover:-translate-y-1.5 hover:shadow-[0_18px_36px_rgba(0,0,0,0.18)] transition-all duration-300"
            >
              {/* Background texture */}
              <div className="absolute inset-0 z-0 select-none pointer-events-none bg-gradient-to-br from-[#7fa2ad] via-[#50727d] to-[#334e56]" />
              
              {/* Inner Panel */}
              <div className="w-full h-full bg-gradient-to-br from-[#f2f4f7] via-[#e2e5ea] to-[#c7cbd1]/95 border-2 border-[#9aa4b0] rounded-[4px] p-5 flex flex-col items-center justify-center text-center relative z-10 select-none">
                {/* Seal */}
                <div className="w-14 h-14 rounded-full border-2 border-[#7fa2ad] flex items-center justify-center bg-white shadow-[0_3px_6px_rgba(0,0,0,0.06)] mb-4">
                  <Globe className="w-7 h-7 text-[#334e56]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#1e2f33] mb-2 select-none">ISO Certified</h3>
                <div className="w-10 h-[1.5px] bg-[#7fa2ad] mb-3" />
                <p className="text-[11px] text-stone-600 font-sans font-medium leading-relaxed max-w-[190px] select-none">
                  International standard production with strict hygiene and quality management protocols.
                </p>
              </div>
              
              {/* Gold Clip */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-2.5 bg-gradient-to-r from-[#aa7c11] via-[#ffd700] to-[#aa7c11] border border-[#8c620c] rounded-[1px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] z-20 select-none" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section id="products" className="py-24 relative overflow-hidden z-10">

        {/* Paper texture section background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/products_section_bg.png"
            alt="Products Section Background Texture"
            fill
            className="object-cover opacity-90"
            priority
          />
        </div>

        {/* Inline SVG Clip Path definitions for organic wave dividers */}
        <svg width="0" height="0" className="absolute pointer-events-none">
          <defs>
            <clipPath id="wave-split" clipPathUnits="objectBoundingBox">
              <path d="M 0,0 L 0.48,0 C 0.42,0.15 0.35,0.35 0.42,0.5 C 0.49,0.65 0.53,0.85 0.46,1 L 0,1 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* Ambient watermark details */}
        <div className="absolute -left-16 top-1/4 w-32 h-32 opacity-[0.03] pointer-events-none rotate-45 select-none hidden lg:block z-10">
          <Image src="/images/cinnamon_leaf.png" alt="Cinnamon Leaf Decor" width={150} height={150} className="w-full h-full object-contain filter grayscale" />
        </div>
        <div className="absolute -right-16 bottom-1/4 w-32 h-32 opacity-[0.03] pointer-events-none -rotate-12 select-none hidden lg:block z-10">
          <Image src="/images/cloves_dried_1781650553541.png" alt="Cloves Decor" width={150} height={150} className="w-full h-full object-contain filter grayscale" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">

          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-xs md:text-sm font-extrabold text-[#b48648] mb-3 tracking-[0.25em] uppercase font-sans">
              PREMIUM SRI LANKAN SPICES
            </h2>
            <p className="text-2xl md:text-4xl font-extrabold text-[#3a200e] tracking-tight font-sans">
              Discover Our Collection
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {/* Cinnamon Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={fadeInUp}
              className="w-full relative aspect-[1000/495] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-stone-200/40"
            >


              <Image src="/images/cinnamon_bg_card.png" alt="Ceylon Cinnamon Card Background" fill className="object-cover scale-[1.15]" style={{ objectPosition: "center 30%" }} />

              {/* Dynamic Content Overlay (Perfectly Positioned Inside the empty Frosted Panel) */}

              <div className="absolute left-[55%] right-[5%] top-[2%] bottom-[14%] flex flex-col justify-center z-10">
                <span className="text-[0.55rem] md:text-xs font-bold uppercase tracking-[0.25em] text-[#b48648] mb-0.5 md:mb-1 block font-sans">
                  TRUE CINNAMON (C5 ALBA)
                </span>
                <h3 className="text-sm sm:text-2xl md:text-4xl font-extrabold text-[#3d240e] mb-1 md:mb-2 font-serif leading-none">
                  Ceylon Cinnamon
                </h3>

                {/* Gold Wave Divider */}
                <svg viewBox="0 0 40 6" className="w-8 md:w-12 h-1 md:h-1.5 mb-1.5 md:mb-3 opacity-90">
                  <path d="M0 3 C 10 0, 10 6, 20 3 C 30 0, 30 6, 40 3" stroke="#cca43b" strokeWidth="2.5" strokeLinecap="round" />
                </svg>

                <p className="text-[#4a2e15]/85 text-[0.55rem] sm:text-[0.7rem] md:text-sm leading-relaxed mb-3 md:mb-6 font-sans max-w-[95%] line-clamp-3 md:line-clamp-none">
                  Our signature True Ceylon Cinnamon is sourced directly from local farmers, ensuring the highest purity and authentic aroma for your daily wellness.
                </p>

                <a
                  href="/products"
                  className="inline-flex items-center justify-center gap-1.5 md:gap-2 px-4 md:px-7 py-1.5 md:py-3 bg-[#1c3a21] border border-[#d4af37]/20 hover:border-[#d4af37]/50 text-[#fffbee] font-bold text-[0.55rem] md:text-xs tracking-[0.15em] uppercase rounded-full transition-all duration-300 shadow-[0_4px_15px_rgba(28,58,33,0.3)] hover:bg-[#112415] hover:-translate-y-[1px] active:translate-y-[0px] w-fit mt-1 md:mt-2"
                >
                  SHOP CINNAMON
                  <svg className="w-3 md:w-3.5 h-3 md:h-3.5 stroke-[#fffbee] stroke-[2.5] fill-none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Cardamom Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={fadeInUp}
              className="w-full relative aspect-[1000/495] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-stone-200/40"
            >
              <Image src="/images/cardamom_bg_card_v2.png" alt="Green Cardamom Card Background" fill className="object-cover scale-[1.2]" />

              {/* Dynamic Content Overlay (Perfectly Positioned Inside the marble panel of the image) */}
              <div className="absolute left-[55%] right-[5%] top-[2%] bottom-[14%] flex flex-col justify-center z-10">
                <span className="text-[0.55rem] md:text-xs font-bold uppercase tracking-[0.25em] text-[#b48648] mb-0.5 md:mb-1 block font-sans">
                  QUEEN OF SPICES (TRUE CARDAMOM)
                </span>
                <h3 className="text-sm sm:text-2xl md:text-4xl font-extrabold text-[#3d240e] mb-1 md:mb-2 font-serif leading-none">
                  Green Cardamom
                </h3>

                {/* Gold Wave Divider */}
                <svg viewBox="0 0 40 6" className="w-8 md:w-12 h-1 md:h-1.5 mb-1.5 md:mb-3 opacity-90">
                  <path d="M0 3 C 10 0, 10 6, 20 3 C 30 0, 30 6, 40 3" stroke="#cca43b" strokeWidth="2.5" strokeLinecap="round" />
                </svg>

                <p className="text-[#4a2e15]/85 text-[0.55rem] sm:text-[0.7rem] md:text-sm leading-relaxed mb-3 md:mb-6 font-sans max-w-[95%] line-clamp-3 md:line-clamp-none">
                  Our select Green Cardamom, sourced from dedicated central highland farmers, offers an intense, aromatic experience for daily wellness. Meticulously handpicked for highest purity, it supports digestive health and adds unique flavor to your rituals and creations.
                </p>

                <a
                  href="/products"
                  className="inline-flex items-center justify-center gap-1.5 md:gap-2 px-4 md:px-7 py-1.5 md:py-3 bg-[#1c3a21] border border-[#d4af37]/20 hover:border-[#d4af37]/50 text-[#fffbee] font-bold text-[0.55rem] md:text-xs tracking-[0.15em] uppercase rounded-full transition-all duration-300 shadow-[0_4px_15px_rgba(28,58,33,0.3)] hover:bg-[#112415] hover:-translate-y-[1px] active:translate-y-[0px] w-fit mt-1 md:mt-2"
                >
                  SHOP CARDAMOM
                  <svg className="w-3 md:w-3.5 h-3 md:h-3.5 stroke-[#fffbee] stroke-[2.5] fill-none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Cloves Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={fadeInUp}
              className="w-full relative aspect-[1000/495] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-stone-200/40"
            >


              <Image src="/images/cloves_bg_card.png" alt="Organic Cloves Card Background" fill className="object-cover scale-[1.2]" />

              {/* Dynamic Content Overlay (Perfectly Positioned Inside the empty Frosted Panel) */}

              <div className="absolute left-[55%] right-[5%] top-[2%] bottom-[14%] flex flex-col justify-center z-10">
                <span className="text-[0.55rem] md:text-xs font-bold uppercase tracking-[0.25em] text-[#b48648] mb-0.5 md:mb-1 block font-sans">
                  AROMATIC SPICE BUDS
                </span>
                <h3 className="text-sm sm:text-2xl md:text-4xl font-extrabold text-[#3d240e] mb-1 md:mb-2 font-serif leading-none">
                  Organic Cloves
                </h3>

                {/* Gold Wave Divider */}
                <svg viewBox="0 0 40 6" className="w-8 md:w-12 h-1 md:h-1.5 mb-1.5 md:mb-3 opacity-90">
                  <path d="M0 3 C 10 0, 10 6, 20 3 C 30 0, 30 6, 40 3" stroke="#cca43b" strokeWidth="2.5" strokeLinecap="round" />
                </svg>

                <p className="text-[#4a2e15]/85 text-[0.55rem] sm:text-[0.7rem] md:text-sm leading-relaxed mb-3 md:mb-6 font-sans max-w-[95%] line-clamp-3 md:line-clamp-none">
                  Rich in essential oils, these handpicked cloves offer a bold, authentic flavor that represents the true heritage of Sri Lankan spices.
                </p>

                <a
                  href="/products"
                  className="inline-flex items-center justify-center gap-1.5 md:gap-2 px-4 md:px-7 py-1.5 md:py-3 bg-[#1c3a21] border border-[#d4af37]/20 hover:border-[#d4af37]/50 text-[#fffbee] font-bold text-[0.55rem] md:text-xs tracking-[0.15em] uppercase rounded-full transition-all duration-300 shadow-[0_4px_15px_rgba(28,58,33,0.3)] hover:bg-[#112415] hover:-translate-y-[1px] active:translate-y-[0px] w-fit mt-1 md:mt-2"
                >
                  SHOP CLOVES
                  <svg className="w-3 md:w-3.5 h-3 md:h-3.5 stroke-[#fffbee] stroke-[2.5] fill-none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Values & Benefits Section */}
      <section className="py-28 relative z-10 overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/values_bg.png" 
            alt="Values Background" 
            fill 
            className="object-cover opacity-80" 
            priority 
          />
        </div>
        
        {/* Soft overlay to make cards pop */}
        <div className="absolute inset-0 bg-[#faf8f5]/65 z-0 pointer-events-none" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto px-6 relative z-10"
        >
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-xs md:text-sm font-extrabold text-[#b48648] mb-3 tracking-[0.25em] uppercase font-sans">Why Choose Us</h2>
            <p className="text-2xl md:text-4xl font-extrabold text-[#3a200e] tracking-tight font-serif">Quality & Sustainability</p>
          </div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 lg:gap-10"
          >
            {/* Card 1: Ethically Sourced */}
            <motion.div
              variants={fadeInUp}
              className="bg-white/40 backdrop-blur-md rounded-[20px] p-8 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center justify-center text-center relative h-[255px] group cursor-default"
            >
              {/* Glowing Icon Wrapper */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center relative mb-5 bg-amber-500/5">
                <div className="absolute inset-0 rounded-full bg-amber-500/10 blur-md opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <Handshake className="w-7 h-7 text-[#b48648] relative z-10 filter drop-shadow-[0_2px_6px_rgba(180,134,72,0.15)]" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-gray-900 text-base font-sans tracking-wide mb-2 select-none">Ethically Sourced</h3>
              <p className="text-xs md:text-sm text-gray-600 font-sans leading-relaxed max-w-[245px] select-none">
                Direct partnerships ensuring fair wages and support for local farming families.
              </p>
              {/* Bottom Right Arrow */}
              <div className="absolute bottom-5 right-5 text-[#b48648] opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300">
                <svg className="w-3.5 h-3.5 stroke-current stroke-[2.5] fill-none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </motion.div>

            {/* Card 2: Aromatic Quality */}
            <motion.div
              variants={fadeInUp}
              className="bg-white/40 backdrop-blur-md rounded-[20px] p-8 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center justify-center text-center relative h-[255px] group cursor-default"
            >
              {/* Glowing Icon Wrapper */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center relative mb-5 bg-teal-500/5">
                <div className="absolute inset-0 rounded-full bg-teal-500/10 blur-md opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <Droplet className="w-7 h-7 text-teal-600 relative z-10 filter drop-shadow-[0_2px_6px_rgba(20,184,166,0.2)]" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-gray-900 text-base font-sans tracking-wide mb-2 select-none">Aromatic Quality</h3>
              <p className="text-xs md:text-sm text-gray-600 font-sans leading-relaxed max-w-[245px] select-none">
                Rich in natural essential oils, preserving strong aroma and potent herbal content.
              </p>
              {/* Bottom Right Arrow */}
              <div className="absolute bottom-5 right-5 text-[#b48648] opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300">
                <svg className="w-3.5 h-3.5 stroke-current stroke-[2.5] fill-none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </motion.div>

            {/* Card 3: Health Benefits */}
            <motion.div
              variants={fadeInUp}
              className="bg-white/40 backdrop-blur-md rounded-[20px] p-8 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center justify-center text-center relative h-[255px] group cursor-default"
            >
              {/* Glowing Icon Wrapper */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center relative mb-5 bg-rose-500/5">
                <div className="absolute inset-0 rounded-full bg-rose-500/10 blur-md opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <Heart className="w-7 h-7 text-rose-500 relative z-10 filter drop-shadow-[0_2px_6px_rgba(244,63,94,0.2)]" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-gray-900 text-base font-sans tracking-wide mb-2 select-none">Health Benefits</h3>
              <p className="text-xs md:text-sm text-gray-600 font-sans leading-relaxed max-w-[245px] select-none">
                Anti-inflammatory, antioxidant properties native to true Ceylon organic products.
              </p>
              {/* Bottom Right Arrow */}
              <div className="absolute bottom-5 right-5 text-[#b48648] opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300">
                <svg className="w-3.5 h-3.5 stroke-current stroke-[2.5] fill-none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </motion.div>

            {/* Card 4: Farm to Table */}
            <motion.div
              variants={fadeInUp}
              className="bg-white/40 backdrop-blur-md rounded-[20px] p-8 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center justify-center text-center relative h-[255px] group cursor-default"
            >
              {/* Glowing Icon Wrapper */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center relative mb-5 bg-amber-600/5">
                <div className="absolute inset-0 rounded-full bg-amber-600/10 blur-md opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <Utensils className="w-7 h-7 text-amber-700 relative z-10 filter drop-shadow-[0_2px_6px_rgba(180,83,9,0.15)]" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-gray-900 text-base font-sans tracking-wide mb-2 select-none">Farm to Table</h3>
              <p className="text-xs md:text-sm text-gray-600 font-sans leading-relaxed max-w-[245px] select-none">
                Minimal processing ensures freshness and complete tracing from soils to your plate.
              </p>
              {/* Bottom Right Arrow */}
              <div className="absolute bottom-5 right-5 text-[#b48648] opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300">
                <svg className="w-3.5 h-3.5 stroke-current stroke-[2.5] fill-none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </motion.div>

            {/* Card 5: Sustainable Practices */}
            <motion.div
              variants={fadeInUp}
              className="bg-white/40 backdrop-blur-md rounded-[20px] p-8 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center justify-center text-center relative h-[255px] group cursor-default"
            >
              {/* Glowing Icon Wrapper */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center relative mb-5 bg-emerald-500/5">
                <div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-md opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <ShieldCheck className="w-7 h-7 text-emerald-600 relative z-10 filter drop-shadow-[0_2px_6px_rgba(16,185,129,0.2)]" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-gray-900 text-base font-sans tracking-wide mb-2 select-none">Sustainable Practices</h3>
              <p className="text-xs md:text-sm text-gray-600 font-sans leading-relaxed max-w-[245px] select-none">
                Eco-friendly cultivation methods protect biodiversity and conserve forest soils.
              </p>
              {/* Bottom Right Arrow */}
              <div className="absolute bottom-5 right-5 text-[#b48648] opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300">
                <svg className="w-3.5 h-3.5 stroke-current stroke-[2.5] fill-none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </motion.div>

            {/* Card 6: Global Reach */}
            <motion.div
              variants={fadeInUp}
              className="bg-white/40 backdrop-blur-md rounded-[20px] p-8 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center justify-center text-center relative h-[255px] group cursor-default"
            >
              {/* Glowing Icon Wrapper */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center relative mb-5 bg-indigo-500/5">
                <div className="absolute inset-0 rounded-full bg-indigo-500/10 blur-md opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <Globe className="w-7 h-7 text-indigo-600 relative z-10 filter drop-shadow-[0_2px_6px_rgba(99,102,241,0.2)]" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-gray-900 text-base font-sans tracking-wide mb-2 select-none">Global Reach</h3>
              <p className="text-xs md:text-sm text-gray-600 font-sans leading-relaxed max-w-[245px] select-none">
                Exporting authentic, certified true spices to kitchens and operations worldwide.
              </p>
              {/* Bottom Right Arrow */}
              <div className="absolute bottom-5 right-5 text-[#b48648] opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300">
                <svg className="w-3.5 h-3.5 stroke-current stroke-[2.5] fill-none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Instagram Grid Section */}
      <section className="py-20 bg-white relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto px-4"
        >
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-xs md:text-sm font-extrabold text-[#b48648] mb-3 tracking-[0.25em] uppercase font-sans">Follow Us</h2>
            <p className="text-2xl md:text-4xl font-extrabold text-[#3a200e] tracking-tight font-sans">Instagram Feed</p>
          </div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          >
            {/* Insta Card 1 */}
            <motion.div
              variants={fadeInUp}
              className="aspect-square bg-gray-100 rounded-2xl overflow-hidden group shadow-md relative cursor-pointer"
            >
              <Image src="/images/export_farmers_1781650578148.png" alt="Insta 1" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                {/* Inline Instagram SVG */}
                <svg className="w-8 h-8 mb-2 text-[#cca43b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="text-xs font-semibold font-sans tracking-wider">@capceylon</span>
                <p className="text-[10px] text-gray-300 mt-1 hidden sm:block">Empowering local Sri Lankan farmers</p>
              </div>
            </motion.div>

            {/* Insta Card 2 */}
            <motion.div
              variants={fadeInUp}
              className="aspect-square bg-gray-100 rounded-2xl overflow-hidden group shadow-md relative cursor-pointer"
            >
              <Image src="/images/hero_spices_1781650500572.png" alt="Insta 2" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                {/* Inline Instagram SVG */}
                <svg className="w-8 h-8 mb-2 text-[#cca43b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="text-xs font-semibold font-sans tracking-wider">@capceylon</span>
                <p className="text-[10px] text-gray-300 mt-1 hidden sm:block">Aromatic whole species curation</p>
              </div>
            </motion.div>

            {/* Insta Card 3 */}
            <motion.div
              variants={fadeInUp}
              className="aspect-square bg-gray-100 rounded-2xl overflow-hidden group shadow-md relative cursor-pointer"
            >
              <Image src="/images/black_pepper_1781650594175.png" alt="Insta 3" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                {/* Inline Instagram SVG */}
                <svg className="w-8 h-8 mb-2 text-[#cca43b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="text-xs font-semibold font-sans tracking-wider">@capceylon</span>
                <p className="text-[10px] text-gray-300 mt-1 hidden sm:block">Premium organic black pepper harvest</p>
              </div>
            </motion.div>

            {/* Insta Card 4 */}
            <motion.div
              variants={fadeInUp}
              className="aspect-square bg-gray-100 rounded-2xl overflow-hidden group shadow-md relative cursor-pointer"
            >
              <Image src="/images/turmeric_powder_1781650611739.png" alt="Insta 4" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                {/* Inline Instagram SVG */}
                <svg className="w-8 h-8 mb-2 text-[#cca43b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="text-xs font-semibold font-sans tracking-wider">@capceylon</span>
                <p className="text-[10px] text-gray-300 mt-1 hidden sm:block">Curcumin rich organic turmeric powder</p>
              </div>
            </motion.div>

            {/* Insta Card 5 */}
            <motion.div
              variants={fadeInUp}
              className="aspect-square bg-gray-100 rounded-2xl overflow-hidden group shadow-md relative cursor-pointer"
            >
              <Image src="/images/cinnamon_sticks_1781650514051.png" alt="Insta 5" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                {/* Inline Instagram SVG */}
                <svg className="w-8 h-8 mb-2 text-[#cca43b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="text-xs font-semibold font-sans tracking-wider">@capceylon</span>
                <p className="text-[10px] text-gray-300 mt-1 hidden sm:block">Delicate Ceylon Cinnamon quills</p>
              </div>
            </motion.div>

            {/* Insta Card 6 */}
            <motion.div
              variants={fadeInUp}
              className="aspect-square bg-gray-100 rounded-2xl overflow-hidden group shadow-md relative cursor-pointer"
            >
              <Image src="/images/cardamom_pods_1781650532128.png" alt="Insta 6" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                {/* Inline Instagram SVG */}
                <svg className="w-8 h-8 mb-2 text-[#cca43b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="text-xs font-semibold font-sans tracking-wider">@capceylon</span>
                <p className="text-[10px] text-gray-300 mt-1 hidden sm:block">Aromatic green cardamom pods</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Export Section */}
      <section className="pt-24 pb-0 relative overflow-hidden bg-white z-20 w-full">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="text-xs md:text-sm font-extrabold text-[#b48648] mb-3 tracking-[0.25em] uppercase font-sans block">Global Distribution</span>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-[#3a200e] uppercase mb-12 font-sans">
            WE EXPORT INTERNATIONALLY
          </h2>
        </div>

        {/* Immersive World Map Container - Full Width with Side Fading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="w-full relative overflow-hidden mb-10"
        >
          <div className="relative w-full aspect-[2.1/1] max-w-[1400px] mx-auto overflow-visible group hover:scale-[1.005] transition-all duration-1000 ease-out px-4 md:px-12">
            {/* Left and Right Smooth Fading Overlays */}
            <div className="absolute inset-y-0 left-0 w-12 sm:w-24 md:w-48 lg:w-72 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 sm:w-24 md:w-48 lg:w-72 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

            {/* Map Background */}
            <div
              className="w-full h-full opacity-40 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain transition-all duration-1000"
              style={{ filter: 'invert(80%) sepia(20%) saturate(800%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
            />

            {/* Export lines SVG overlay */}
            <svg viewBox="0 0 800 400" className="absolute inset-0 w-full h-full z-10 pointer-events-none">
              <defs>
                <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#cca43b" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#cca43b" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Curves */}
              <path d="M 515 235 Q 362 135 210 140" stroke="url(#routeGrad)" strokeWidth="2.5" fill="none" className="route-path" />
              <path d="M 515 235 Q 452 145 390 110" stroke="url(#routeGrad)" strokeWidth="2.5" fill="none" className="route-path" />
              <path d="M 515 235 Q 490 205 465 175" stroke="url(#routeGrad)" strokeWidth="2.5" fill="none" className="route-path" />
              <path d="M 515 235 Q 577 185 640 135" stroke="url(#routeGrad)" strokeWidth="2.5" fill="none" className="route-path" />
              <path d="M 515 235 Q 605 270 695 305" stroke="url(#routeGrad)" strokeWidth="2.5" fill="none" className="route-path" />

              {/* Sri Lanka Pulse */}
              <circle cx="515" cy="235" r="8" fill="#cca43b" className="animate-ping opacity-60" />
              <circle cx="515" cy="235" r="4.5" fill="#cca43b" />

              {/* Destinations */}
              <circle cx="210" cy="140" r="3.5" fill="#cca43b" className="animate-pulse" />
              <circle cx="390" cy="110" r="3.5" fill="#cca43b" className="animate-pulse" />
              <circle cx="465" cy="175" r="3.5" fill="#cca43b" className="animate-pulse" />
              <circle cx="640" cy="135" r="3.5" fill="#cca43b" className="animate-pulse" />
              <circle cx="695" cy="305" r="3.5" fill="#cca43b" className="animate-pulse" />
            </svg>

            <style dangerouslySetInnerHTML={{
              __html: `
                 @keyframes routeTravel {
                   to {
                     stroke-dashoffset: -20;
                   }
                 }
                 .route-path {
                   stroke-dasharray: 6, 4;
                   animation: routeTravel 2s linear infinite;
                 }
               `}} />
          </div>
        </motion.div>

        {/* Farmers Image Container - Full Width with smooth blend overlay */}
        <div className="relative mt-8 z-30 w-full overflow-hidden hover:scale-[1.002] transition-transform duration-[1.5s] ease-out">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent h-24 top-0 left-0 w-full z-10 pointer-events-none" />
          <Image
            src="/images/export_farmers_1781650578148.png"
            alt="Our Farmers"
            width={1920}
            height={500}
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover filter brightness-95"
          />
        </div>
      </section>
    </div>
  );
}
