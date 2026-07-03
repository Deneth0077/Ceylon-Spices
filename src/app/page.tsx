'use client';

import Image from "next/image";
import { Leaf, ShieldCheck, Heart, Globe, Award, Droplet, ArrowRight } from "lucide-react";
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
  return (
    <div className="w-full flex flex-col bg-white overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] md:h-[650px] overflow-hidden flex flex-col items-center justify-center z-20">

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

        {/* Center Golden Frosted Blob */}
        <div className="relative w-full max-w-[1050px] mx-auto h-[320px] md:h-[420px] z-20 mt-[-60px] px-6 sm:px-12 md:px-16 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-[90%] md:w-[85%] h-[85%] md:h-[80%] relative shadow-[0_30px_60px_rgba(0,0,0,0.4)] flex items-center justify-center"
            style={{
              borderRadius: "45% 55% 65% 35% / 55% 45% 60% 40%",
              background: "linear-gradient(135deg, rgba(235,210,135,0.7) 0%, rgba(195,165,85,0.85) 100%)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.4)"
            }}
          >
            {/* The Text */}
            <div className="z-30 pointer-events-none px-4 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-[3.5rem] font-extrabold text-[#3a200e] leading-[1.2] font-serif drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]">
                Sri Lankan Spices: <br />
                Pure, Authentic,<br />
                Tropical
              </h1>
            </div>

            {/* Cinnamon Sticks (Top Left) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute -left-6 sm:-left-12 md:-left-24 top-[-50px] sm:top-[-70px] md:top-[-100px] w-36 sm:w-48 md:w-[280px] z-40 pointer-events-none animate-float-slow"
            >
              <TransparentImage src="/images/cinnamon_sticks_with_rope.png" alt="Cinnamon Sticks" className="w-full h-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)]" threshold={230} tintColor={[120, 90, 40]} />
            </motion.div>

            {/* Black Peppercorns (Bottom Left) */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute -left-4 sm:-left-8 md:-left-12 -bottom-8 sm:-bottom-16 md:-bottom-24 w-28 sm:w-40 md:w-[240px] z-40 pointer-events-none animate-float-medium"
            >
              <TransparentImage src="/images/black_pepper_1781650594175.png" alt="Black Pepper" className="w-full h-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)]" threshold={230} tintColor={[120, 90, 40]} />
            </motion.div>

            {/* Green Leaf (Top Right) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute right-0 sm:right-[-10px] md:right-[-20px] top-[-20px] sm:top-[-30px] md:top-[-40px] w-28 sm:w-40 md:w-[200px] z-20 pointer-events-none animate-float-slow"
            >
              <TransparentImage src="/images/cinnamon_leaf.png" alt="Cinnamon Leaf" className="w-full h-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.3)] rotate-[-15deg] opacity-95" threshold={230} tintColor={[120, 90, 40]} />
            </motion.div>

            {/* Cloves (Bottom Right) */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -right-4 sm:-right-8 md:-right-16 -bottom-12 sm:-bottom-20 md:-bottom-28 w-36 sm:w-48 md:w-[280px] z-30 pointer-events-none animate-float-fast"
            >
              <TransparentImage src="/images/cloves_dried_1781650553541.png" alt="Cloves" className="w-full h-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)]" threshold={230} tintColor={[120, 90, 40]} />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Down Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-[30px] md:bottom-[60px] left-1/2 -translate-x-1/2 z-50 cursor-pointer group flex items-center justify-center"
          onClick={() => {
            document.getElementById("certifications")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {/* Organic blob background */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-md rounded-[50%_50%_40%_60%/60%_40%_60%_40%] shadow-[0_8px_32px_rgba(0,0,0,0.15)] border border-white/20 transition-all duration-500 ease-out group-hover:rounded-[40%_60%_50%_50%/50%_60%_40%_50%] group-hover:bg-white/40 group-hover:scale-105" />

          <div className="relative px-8 py-3">
            <span className="text-gray-900 font-bold text-xs tracking-widest uppercase font-sans whitespace-nowrap drop-shadow-sm">Scroll Down</span>
          </div>
        </motion.div>

      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-28 bg-[#faf8f5] relative z-10 overflow-hidden">
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

        {/* Bottom Left Stylized Brand "N" */}
        <div className="absolute bottom-6 left-8 font-serif text-3xl font-bold text-[#c09257]/20 select-none z-0">
          N
        </div>

        {/* Subtle Watermark Patterns */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 bg-[radial-gradient(#8d5b24_1px,transparent_1px)] [background-size:32px_32px]" />

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="text-xs md:text-sm font-bold text-[#c09257] tracking-[0.25em] uppercase font-sans block mb-2"
            >
              Trusted Worldwide
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold text-[#4a2e15] tracking-tight font-serif"
            >
              Global Quality Certifications
            </motion.h2>
          </motion.div>

          {/* Desktop Layout (Single Capsule Container with Skewed Wood Panel Overlaid) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="hidden md:block relative w-full max-w-[940px] mx-auto z-10 pb-10"
          >
            {/* White capsule background card */}
            <div className="relative w-full h-[260px] bg-white shadow-xl rounded-full flex items-center justify-between px-20 border border-stone-100/60 z-10">
              
              {/* Left Content */}
              <div className="w-[280px] flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 flex items-center justify-center mb-2 relative">
                  <TransparentImage src="/images/cert_leaf.png" alt="USDA Organic" className="w-full h-full object-contain drop-shadow-md" />
                </div>
                <span className="font-bold text-[0.85rem] tracking-widest text-[#1a4a38] mb-1 font-sans">USDA ORGANIC</span>
                <p className="text-[0.65rem] text-gray-500 font-sans leading-relaxed px-1">
                  100% certified organic spices, grown using traditional methods without chemicals.
                </p>
              </div>

              {/* Right Content */}
              <div className="w-[280px] flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 flex items-center justify-center mb-2 relative">
                  <TransparentImage src="/images/cert_globe.png" alt="ISO Certified" className="w-full h-full object-contain drop-shadow-md" />
                </div>
                <span className="font-bold text-[0.85rem] tracking-widest text-[#164e63] mb-1 font-sans">ISO CERTIFIED</span>
                <p className="text-[0.65rem] text-gray-500 font-sans leading-relaxed px-1">
                  International standard production with strict hygiene and quality management protocols.
                </p>
              </div>

              {/* Middle Wood Card Overlaid in Center (Moved inside capsule for perfect centering) */}
              <div 
                className="absolute left-1/2 top-1/2 w-[360px] h-[280px] shadow-[0_20px_45px_rgba(0,0,0,0.35)] overflow-hidden z-20"
                style={{ transform: "translate(-50%, -50%) skewX(-18deg)", borderRadius: "40px" }}
              >
                {/* Wood background gradient and pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4a877] via-[#ba874a] to-[#8d5b24]" />
                <div className="absolute inset-0 opacity-[0.12] mix-blend-multiply pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(11deg, transparent, transparent 4px, rgba(0,0,0,1) 4px, rgba(0,0,0,1) 8px)" }} />
                <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(255,255,255,1) 15px, rgba(255,255,255,1) 30px)" }} />
                <div className="absolute inset-2 border-[2px] border-[#ffe8b3]/45 pointer-events-none" style={{ borderRadius: "32px" }} />
                
                <div className="w-full h-full flex flex-col items-center justify-center p-8 absolute inset-0" style={{ transform: "skewX(18deg)" }}>
                  {/* Center logo - shiield logo.png with background removed */}
                  <div className="w-20 h-24 relative mb-2 flex items-center justify-center z-10">
                     <TransparentImage src="/images/shiield%20logo.png" alt="Ceylon Spices Logo" className="w-full h-full object-contain drop-shadow-md" threshold={240} />
                  </div>
                  <span className="font-bold text-[0.85rem] tracking-widest text-[#fffbee] mb-1 font-sans drop-shadow-md text-center">CEYLON SPICES</span>
                  <p className="text-[0.65rem] text-[#ffeed4] font-sans text-center leading-relaxed drop-shadow-sm px-6">
                    Authentic Ceylon origin stamp, carrying the world-renowned purity and flavor profile.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Layout (Stacked fallback cards) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6 md:hidden w-full relative z-30 max-w-sm mx-auto pb-10"
          >
            {/* USDA Organic Card */}
            <motion.div variants={fadeInUp} className="w-full bg-white rounded-3xl shadow-lg flex flex-col items-center justify-center p-8 border border-stone-100">
              <div className="w-24 h-24 flex items-center justify-center mb-2 relative">
                <TransparentImage src="/images/cert_leaf.png" alt="USDA Organic" className="w-full h-full object-contain drop-shadow-md" />
              </div>
              <span className="font-bold text-[0.85rem] tracking-widest text-[#1a4a38] mb-2">USDA ORGANIC</span>
              <p className="text-[0.75rem] text-gray-500 text-center leading-relaxed">
                100% certified organic spices, grown using traditional methods without chemicals.
              </p>
            </motion.div>

            {/* Ceylon Spices Card */}
            <motion.div variants={fadeInUp} className="w-full h-[280px] rounded-3xl shadow-xl flex flex-col items-center justify-center p-8 border border-[#ffe8b3]/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4a877] via-[#ba874a] to-[#8d5b24]" />
              <div className="absolute inset-0 opacity-[0.12] mix-blend-multiply pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(11deg, transparent, transparent 4px, rgba(0,0,0,1) 4px, rgba(0,0,0,1) 8px)" }} />
              <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(255,255,255,1) 15px, rgba(255,255,255,1) 30px)" }} />
              <div className="absolute inset-2 border-[2px] border-[#ffe8b3]/45 pointer-events-none" style={{ borderRadius: "20px" }} />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-24 relative mb-2 flex items-center justify-center z-10">
                   <TransparentImage src="/images/shiield%20logo.png" alt="Ceylon Spices Logo" className="w-full h-full object-contain drop-shadow-md" threshold={240} />
                </div>
                <span className="font-bold text-[0.85rem] tracking-widest text-[#fffbee] mb-2 drop-shadow-md">CEYLON SPICES</span>
                <p className="text-[0.75rem] text-[#ffeed4] text-center leading-relaxed drop-shadow-sm px-2">
                  Authentic Ceylon origin stamp, carrying the world-renowned purity and flavor profile.
                </p>
              </div>
            </motion.div>

            {/* ISO Certified Card */}
            <motion.div variants={fadeInUp} className="w-full bg-white rounded-3xl shadow-lg flex flex-col items-center justify-center p-8 border border-stone-100">
              <div className="w-24 h-24 flex items-center justify-center mb-2 relative">
                <TransparentImage src="/images/cert_globe.png" alt="ISO Certified" className="w-full h-full object-contain drop-shadow-md" />
              </div>
              <span className="font-bold text-[0.85rem] tracking-widest text-[#164e63] mb-2">ISO CERTIFIED</span>
              <p className="text-[0.75rem] text-gray-500 text-center leading-relaxed">
                International standard production with strict hygiene and quality management protocols.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="py-24 bg-white relative overflow-hidden z-10">
        
        {/* Inline SVG Clip Path definitions for organic wave dividers */}
        <svg width="0" height="0" className="absolute pointer-events-none">
          <defs>
            <clipPath id="wave-split" clipPathUnits="objectBoundingBox">
              <path d="M 0,0 L 0.48,0 C 0.42,0.15 0.35,0.35 0.42,0.5 C 0.49,0.65 0.53,0.85 0.46,1 L 0,1 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* Ambient watermark details */}
        <div className="absolute -left-16 top-1/4 w-32 h-32 opacity-[0.03] pointer-events-none rotate-45 select-none hidden lg:block">
          <Image src="/images/cinnamon_leaf.png" alt="Cinnamon Leaf Decor" width={150} height={150} className="w-full h-full object-contain filter grayscale" />
        </div>
        <div className="absolute -right-16 bottom-1/4 w-32 h-32 opacity-[0.03] pointer-events-none -rotate-12 select-none hidden lg:block">
          <Image src="/images/cloves_dried_1781650553541.png" alt="Cloves Decor" width={150} height={150} className="w-full h-full object-contain filter grayscale" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-xs md:text-sm font-extrabold text-cap-gold mb-3 tracking-[0.25em] uppercase font-sans">Premium Sri Lankan Spices</h2>
            <p className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-serif">Discover Our Collection</p>
          </div>

          <div className="flex flex-col gap-10">
            {/* Cinnamon Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={fadeInUp}
              className="w-full relative flex flex-col md:flex-row items-center rounded-[32px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-stone-200/40 bg-[#faf8f5] md:h-[400px] min-h-[380px] md:min-h-0"
              style={{
                backgroundImage: "radial-gradient(circle at 80% 20%, rgba(245, 235, 215, 0.4) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(230, 210, 180, 0.3) 0%, transparent 50%)"
              }}
            >
              {/* Wood background section (clipped organically on desktop) */}
              <div 
                className="relative md:absolute w-full md:w-[48%] h-[200px] md:h-full left-0 top-0 z-0 md:[clip-path:url(#wave-split)]"
                style={{
                  background: "linear-gradient(135deg, #c59762 0%, #8c5a2b 100%)"
                }}
              >
                {/* Wood texture details */}
                <div className="absolute inset-0 opacity-[0.15] mix-blend-multiply pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(11deg, transparent, transparent 4px, rgba(0,0,0,1) 4px, rgba(0,0,0,1) 8px)" }} />
                <div className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(255,255,255,1) 15px, rgba(255,255,255,1) 30px)" }} />
                
                {/* Cinnamon Quill Vector Line Art */}
                <svg viewBox="0 0 64 64" className="absolute top-6 right-24 w-12 h-12 opacity-25 stroke-[#fffbee] stroke-[1.2] fill-none pointer-events-none hidden md:block">
                  <path d="M 16,36 C 16,24 24,16 36,16 C 48,16 56,24 56,36 C 56,48 48,56 36,56 C 28,56 22,50 20,44 C 18,38 22,32 28,30 C 34,28 40,32 42,38" />
                  <path d="M 12,32 C 12,18 22,8 36,8 C 50,8 60,18 60,32" />
                </svg>
              </div>

              {/* Left Side Content Container (Podium and Spice Image) */}
              <div className="relative z-10 w-full md:w-[45%] h-[200px] md:h-full flex items-center justify-center p-8 md:absolute md:left-0 md:top-0">
                {/* 3D Wood Podium */}
                <div className="relative w-48 h-10 bg-gradient-to-b from-[#9c7143] to-[#633e1d] rounded-full shadow-[0_12px_24px_rgba(0,0,0,0.35)] border-t border-[#d8a873]/40 mt-16 md:mt-24">
                  {/* Top face of podium */}
                  <div className="absolute -top-2.5 left-0 right-0 h-10 bg-[#bd8e55] rounded-full border border-[#d8a873] shadow-inner flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-1 border border-[#9c7143]/30 rounded-full" />
                    <div className="absolute inset-3 border border-[#9c7143]/15 rounded-full" />
                    <div className="absolute inset-6 border border-[#9c7143]/5 rounded-full" />
                  </div>
                </div>

                {/* Floating Spice Asset - Cinnamon Sticks */}
                <div className="absolute -translate-y-8 md:-translate-y-12 w-48 h-48 md:w-56 md:h-56 z-20">
                  <TransparentImage
                    src="/images/cinnamon_sticks_with_rope.png"
                    alt="Ceylon Cinnamon"
                    className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)] hover:scale-105 hover:-rotate-2 transition-transform duration-500 ease-out"
                    threshold={240}
                  />
                </div>
              </div>

              {/* Right Side Content Container (Frosted Glass Text Panel) */}
              <div className="relative z-10 w-full md:w-[55%] p-6 md:p-8 flex items-center justify-start md:ml-auto">
                <div className="w-full max-w-[480px] backdrop-blur-md bg-white/40 border border-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-[24px] p-6 md:p-8 flex flex-col justify-center relative md:-ml-12 z-10">
                  <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-[0.2em] text-[#b48648] mb-1 font-sans">
                    TRUE CINNAMON (C5 ALBA)
                  </span>
                  <h3 className="text-2xl md:text-4xl font-extrabold text-[#3d240e] mb-2 font-serif leading-none">
                    Ceylon Cinnamon
                  </h3>
                  
                  {/* Gold Wave Divider */}
                  <svg width="40" height="6" viewBox="0 0 40 6" fill="none" className="mb-4">
                    <path d="M0 3 C 10 0, 10 6, 20 3 C 30 0, 30 6, 40 3" stroke="#cca43b" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6 font-sans">
                    Our signature True Ceylon Cinnamon is sourced directly from local farmers, ensuring the highest purity and authentic aroma for your daily wellness.
                  </p>

                  <a 
                    href="/products" 
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#1c3a21] border border-[#d4af37]/20 hover:border-[#d4af37]/50 text-[#fffbee] font-bold text-xs tracking-[0.15em] uppercase rounded-full transition-all duration-300 shadow-[0_6px_20px_rgba(28,58,33,0.35)] hover:shadow-[0_8px_25px_rgba(28,58,33,0.45)] hover:bg-[#112415] hover:-translate-y-[1px] active:translate-y-[0px] w-fit"
                  >
                    SHOP CINNAMON
                    <svg className="w-3.5 h-3.5 stroke-[#fffbee] stroke-[2.5] fill-none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Stamp Circle and Ceylon Spices watermarks */}
              <div className="absolute bottom-6 left-[43%] -translate-x-1/2 w-8 h-8 rounded-full bg-[#1c1c1a] border border-[#d4af37]/35 flex items-center justify-center shadow-md z-20 hidden md:flex">
                <span className="font-serif text-[#d4af37] text-[0.6rem] font-bold">N</span>
              </div>
              <div className="absolute bottom-6 right-8 text-right z-20 font-serif text-[0.6rem] tracking-[0.2em] text-[#5c3e21]/70 font-extrabold select-none hidden md:block">
                CEYLON<br />SPICES
              </div>
            </motion.div>

            {/* Cardamom Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={fadeInUp}
              className="w-full relative flex flex-col md:flex-row items-center rounded-[32px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-stone-200/40 bg-[#faf8f5] md:h-[400px] min-h-[380px] md:min-h-0"
              style={{
                backgroundImage: "radial-gradient(circle at 80% 20%, rgba(245, 235, 215, 0.4) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(230, 210, 180, 0.3) 0%, transparent 50%)"
              }}
            >
              {/* Wood background section (clipped organically on desktop) */}
              <div 
                className="relative md:absolute w-full md:w-[48%] h-[200px] md:h-full left-0 top-0 z-0 md:[clip-path:url(#wave-split)]"
                style={{
                  background: "linear-gradient(135deg, #c59762 0%, #8c5a2b 100%)"
                }}
              >
                {/* Wood texture details */}
                <div className="absolute inset-0 opacity-[0.15] mix-blend-multiply pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(11deg, transparent, transparent 4px, rgba(0,0,0,1) 4px, rgba(0,0,0,1) 8px)" }} />
                <div className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(255,255,255,1) 15px, rgba(255,255,255,1) 30px)" }} />
                
                {/* Cardamom Pod Line Art */}
                <svg viewBox="0 0 64 64" className="absolute top-6 right-24 w-12 h-12 opacity-25 stroke-[#fffbee] stroke-[1.2] fill-none pointer-events-none hidden md:block">
                  <path d="M 32,10 C 20,20 20,44 32,54 C 44,44 44,20 32,10 Z" />
                  <path d="M 32,10 L 32,54" />
                  <path d="M 32,20 Q 26,32 32,44" />
                  <path d="M 32,20 Q 38,32 32,44" />
                </svg>
              </div>

              {/* Left Side Content Container (Podium and Spice Image) */}
              <div className="relative z-10 w-full md:w-[45%] h-[200px] md:h-full flex items-center justify-center p-8 md:absolute md:left-0 md:top-0">
                {/* 3D Wood Podium */}
                <div className="relative w-48 h-10 bg-gradient-to-b from-[#9c7143] to-[#633e1d] rounded-full shadow-[0_12px_24px_rgba(0,0,0,0.35)] border-t border-[#d8a873]/40 mt-16 md:mt-24">
                  {/* Top face of podium */}
                  <div className="absolute -top-2.5 left-0 right-0 h-10 bg-[#bd8e55] rounded-full border border-[#d8a873] shadow-inner flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-1 border border-[#9c7143]/30 rounded-full" />
                    <div className="absolute inset-3 border border-[#9c7143]/15 rounded-full" />
                    <div className="absolute inset-6 border border-[#9c7143]/5 rounded-full" />
                  </div>
                </div>

                {/* Floating Spice Asset - Cardamom */}
                <div className="absolute -translate-y-8 md:-translate-y-12 w-48 h-48 md:w-56 md:h-56 z-20">
                  <TransparentImage
                    src="/images/cardamom_pods_1781650532128.png"
                    alt="Green Cardamom"
                    className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)] hover:scale-105 hover:-rotate-2 transition-transform duration-500 ease-out"
                    threshold={240}
                  />
                </div>
              </div>

              {/* Right Side Content Container (Frosted Glass Text Panel) */}
              <div className="relative z-10 w-full md:w-[55%] p-6 md:p-8 flex items-center justify-start md:ml-auto">
                <div className="w-full max-w-[480px] backdrop-blur-md bg-white/40 border border-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-[24px] p-6 md:p-8 flex flex-col justify-center relative md:-ml-12 z-10">
                  <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-[0.2em] text-[#b48648] mb-1 font-sans">
                    QUEEN OF SPICES (TRUE CARDAMOM)
                  </span>
                  <h3 className="text-2xl md:text-4xl font-extrabold text-[#3d240e] mb-2 font-serif leading-none">
                    Green Cardamom
                  </h3>
                  
                  {/* Gold Wave Divider */}
                  <svg width="40" height="6" viewBox="0 0 40 6" fill="none" className="mb-4">
                    <path d="M0 3 C 10 0, 10 6, 20 3 C 30 0, 30 6, 40 3" stroke="#cca43b" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6 font-sans">
                    Our select Green Cardamom, sourced from dedicated central highland farmers, offers an intense, aromatic experience for daily wellness. Meticulously handpicked for highest purity, it supports digestive health and adds unique flavor to your rituals and creations.
                  </p>

                  <a 
                    href="/products" 
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#1c3a21] border border-[#d4af37]/20 hover:border-[#d4af37]/50 text-[#fffbee] font-bold text-xs tracking-[0.15em] uppercase rounded-full transition-all duration-300 shadow-[0_6px_20px_rgba(28,58,33,0.35)] hover:shadow-[0_8px_25px_rgba(28,58,33,0.45)] hover:bg-[#112415] hover:-translate-y-[1px] active:translate-y-[0px] w-fit"
                  >
                    SHOP CARDAMOM
                    <svg className="w-3.5 h-3.5 stroke-[#fffbee] stroke-[2.5] fill-none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Stamp Circle and Ceylon Spices watermarks */}
              <div className="absolute bottom-6 left-[43%] -translate-x-1/2 w-8 h-8 rounded-full bg-[#1c1c1a] border border-[#d4af37]/35 flex items-center justify-center shadow-md z-20 hidden md:flex">
                <span className="font-serif text-[#d4af37] text-[0.6rem] font-bold">N</span>
              </div>
              <div className="absolute bottom-6 right-8 text-right z-20 font-serif text-[0.6rem] tracking-[0.2em] text-[#5c3e21]/70 font-extrabold select-none hidden md:block">
                CEYLON<br />SPICES
              </div>
            </motion.div>

            {/* Cloves Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={fadeInUp}
              className="w-full relative flex flex-col md:flex-row items-center rounded-[32px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-stone-200/40 bg-[#faf8f5] md:h-[400px] min-h-[380px] md:min-h-0"
              style={{
                backgroundImage: "radial-gradient(circle at 80% 20%, rgba(245, 235, 215, 0.4) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(230, 210, 180, 0.3) 0%, transparent 50%)"
              }}
            >
              {/* Wood background section (clipped organically on desktop) */}
              <div 
                className="relative md:absolute w-full md:w-[48%] h-[200px] md:h-full left-0 top-0 z-0 md:[clip-path:url(#wave-split)]"
                style={{
                  background: "linear-gradient(135deg, #c59762 0%, #8c5a2b 100%)"
                }}
              >
                {/* Wood texture details */}
                <div className="absolute inset-0 opacity-[0.15] mix-blend-multiply pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(11deg, transparent, transparent 4px, rgba(0,0,0,1) 4px, rgba(0,0,0,1) 8px)" }} />
                <div className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(255,255,255,1) 15px, rgba(255,255,255,1) 30px)" }} />
                
                {/* Cloves Line Art */}
                <svg viewBox="0 0 64 64" className="absolute top-6 right-24 w-12 h-12 opacity-25 stroke-[#fffbee] stroke-[1.2] fill-none pointer-events-none hidden md:block">
                  <circle cx="32" cy="20" r="8" />
                  <path d="M 24,20 C 24,32 28,48 32,56 C 36,48 40,32 40,20" />
                  <path d="M 22,16 L 16,10" />
                  <path d="M 42,16 L 48,10" />
                </svg>
              </div>

              {/* Left Side Content Container (Soft Circle Podium and Spice Image) */}
              <div className="relative z-10 w-full md:w-[45%] h-[200px] md:h-full flex items-center justify-center p-8 md:absolute md:left-0 md:top-0">
                {/* Irregular Round Stone Podium */}
                <div className="relative w-44 h-44 rounded-[50%_60%_50%_70%/60%_50%_70%_50%] bg-[#b8aba1]/35 shadow-inner flex items-center justify-center z-10">
                  {/* Floating Spice Asset - Cloves */}
                  <div className="w-36 h-36 z-20">
                    <TransparentImage
                      src="/images/cloves_dried_1781650553541.png"
                      alt="Organic Cloves"
                      className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)] hover:scale-105 hover:-rotate-2 transition-transform duration-500 ease-out"
                      threshold={240}
                    />
                  </div>
                </div>
              </div>

              {/* Right Side Content Container (Frosted Glass Text Panel) */}
              <div className="relative z-10 w-full md:w-[55%] p-6 md:p-8 flex items-center justify-start md:ml-auto">
                <div className="w-full max-w-[480px] backdrop-blur-md bg-white/40 border border-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-[24px] p-6 md:p-8 flex flex-col justify-center relative md:-ml-12 z-10">
                  <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-[0.2em] text-[#b48648] mb-1 font-sans">
                    AROMATIC SPICE BUDS
                  </span>
                  <h3 className="text-2xl md:text-4xl font-extrabold text-[#3d240e] mb-2 font-serif leading-none">
                    Organic Cloves
                  </h3>
                  
                  {/* Gold Wave Divider */}
                  <svg width="40" height="6" viewBox="0 0 40 6" fill="none" className="mb-4">
                    <path d="M0 3 C 10 0, 10 6, 20 3 C 30 0, 30 6, 40 3" stroke="#cca43b" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6 font-sans">
                    Rich in essential oils, these handpicked cloves offer a bold, authentic flavor that represents the true heritage of Sri Lankan spices.
                  </p>

                  <a 
                    href="/products" 
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#1c3a21] border border-[#d4af37]/20 hover:border-[#d4af37]/50 text-[#fffbee] font-bold text-xs tracking-[0.15em] uppercase rounded-full transition-all duration-300 shadow-[0_6px_20px_rgba(28,58,33,0.35)] hover:shadow-[0_8px_25px_rgba(28,58,33,0.45)] hover:bg-[#112415] hover:-translate-y-[1px] active:translate-y-[0px] w-fit"
                  >
                    SHOP CLOVES
                    <svg className="w-3.5 h-3.5 stroke-[#fffbee] stroke-[2.5] fill-none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Stamp Circle and Ceylon Spices watermarks */}
              <div className="absolute bottom-6 left-[43%] -translate-x-1/2 w-8 h-8 rounded-full bg-[#1c1c1a] border border-[#d4af37]/35 flex items-center justify-center shadow-md z-20 hidden md:flex">
                <span className="font-serif text-[#d4af37] text-[0.6rem] font-bold">N</span>
              </div>
              <div className="absolute bottom-6 right-8 text-right z-20 font-serif text-[0.6rem] tracking-[0.2em] text-[#5c3e21]/70 font-extrabold select-none hidden md:block">
                CEYLON<br />SPICES
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Values & Benefits Section */}
      <section className="py-24 bg-[#f8f6f0] relative z-10 overflow-hidden">
        {/* Ambient glow backing */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto px-4"
        >
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-xs md:text-sm font-extrabold text-cap-gold mb-3 tracking-[0.25em] uppercase font-sans">Why Choose Us</h2>
            <p className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Quality & Sustainability</p>
          </div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {/* Card 1: Ethically Sourced */}
            <motion.div
              variants={fadeInUp}
              className="relative overflow-hidden bg-white/75 backdrop-blur-md rounded-2xl p-8 border border-white shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-cap-green hover:text-white transition-all duration-500 ease-out group cursor-default text-center flex flex-col items-center justify-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center group-hover:bg-[#cca43b] group-hover:text-white transition-all duration-500 shadow-inner">
                <Award className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-white text-base font-sans tracking-wide">Ethically Sourced</h3>
              <p className="text-xs text-gray-500 group-hover:text-gray-200 leading-relaxed">
                Direct partnerships ensuring fair wages and support for local farming families.
              </p>
            </motion.div>

            {/* Card 2: Aromatic Quality */}
            <motion.div
              variants={fadeInUp}
              className="relative overflow-hidden bg-white/75 backdrop-blur-md rounded-2xl p-8 border border-white shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-cap-green hover:text-white transition-all duration-500 ease-out group cursor-default text-center flex flex-col items-center justify-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center group-hover:bg-[#cca43b] group-hover:text-white transition-all duration-500 shadow-inner">
                <Droplet className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-white text-base font-sans tracking-wide">Aromatic Quality</h3>
              <p className="text-xs text-gray-500 group-hover:text-gray-200 leading-relaxed">
                Rich in natural essential oils, preserving strong aroma and potent herbal content.
              </p>
            </motion.div>

            {/* Card 3: Health Benefits */}
            <motion.div
              variants={fadeInUp}
              className="relative overflow-hidden bg-white/75 backdrop-blur-md rounded-2xl p-8 border border-white shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-cap-green hover:text-white transition-all duration-500 ease-out group cursor-default text-center flex flex-col items-center justify-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-rose-50 text-rose-800 flex items-center justify-center group-hover:bg-[#cca43b] group-hover:text-white transition-all duration-500 shadow-inner">
                <Heart className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-white text-base font-sans tracking-wide">Health Benefits</h3>
              <p className="text-xs text-gray-500 group-hover:text-gray-200 leading-relaxed">
                Anti-inflammatory, antioxidant properties native to true Ceylon organic products.
              </p>
            </motion.div>

            {/* Card 4: Farm to Table */}
            <motion.div
              variants={fadeInUp}
              className="relative overflow-hidden bg-white/75 backdrop-blur-md rounded-2xl p-8 border border-white shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-cap-green hover:text-white transition-all duration-500 ease-out group cursor-default text-center flex flex-col items-center justify-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-orange-50 text-orange-850 flex items-center justify-center group-hover:bg-[#cca43b] group-hover:text-white transition-all duration-500 shadow-inner">
                <Leaf className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-white text-base font-sans tracking-wide">Farm to Table</h3>
              <p className="text-xs text-gray-500 group-hover:text-gray-200 leading-relaxed">
                Minimal processing ensures freshness and complete tracing from soils to your plate.
              </p>
            </motion.div>

            {/* Card 5: Sustainable Practices */}
            <motion.div
              variants={fadeInUp}
              className="relative overflow-hidden bg-white/75 backdrop-blur-md rounded-2xl p-8 border border-white shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-cap-green hover:text-white transition-all duration-500 ease-out group cursor-default text-center flex flex-col items-center justify-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-sky-50 text-sky-800 flex items-center justify-center group-hover:bg-[#cca43b] group-hover:text-white transition-all duration-500 shadow-inner">
                <ShieldCheck className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-white text-base font-sans tracking-wide">Sustainable Practices</h3>
              <p className="text-xs text-gray-500 group-hover:text-gray-200 leading-relaxed">
                Eco-friendly cultivation methods protect biodiversity and conserve forest soils.
              </p>
            </motion.div>

            {/* Card 6: Global Reach */}
            <motion.div
              variants={fadeInUp}
              className="relative overflow-hidden bg-white/75 backdrop-blur-md rounded-2xl p-8 border border-white shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-cap-green hover:text-white transition-all duration-500 ease-out group cursor-default text-center flex flex-col items-center justify-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-indigo-50 text-indigo-800 flex items-center justify-center group-hover:bg-[#cca43b] group-hover:text-white transition-all duration-500 shadow-inner">
                <Globe className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-white text-base font-sans tracking-wide">Global Reach</h3>
              <p className="text-xs text-gray-500 group-hover:text-gray-200 leading-relaxed">
                Exporting authentic, certified true spices to kitchens and operations worldwide.
              </p>
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
            <h2 className="text-xs md:text-sm font-extrabold text-cap-gold mb-3 tracking-[0.25em] uppercase font-sans">Follow Us</h2>
            <p className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Instagram Feed</p>
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
          <span className="text-xs font-bold uppercase tracking-widest text-[#cca43b] mb-3 block font-sans">Global Distribution</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 uppercase mb-12 font-sans">
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
