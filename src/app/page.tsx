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
      <section className="bg-cap-green w-full pt-8 pb-20 md:pt-16 md:pb-28 px-4 md:px-8 relative overflow-visible z-20">
        
        {/* Glow ambient effect in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-gradient-to-r from-cap-gold to-yellow-500 rounded-full blur-[120px] opacity-[0.12] pointer-events-none animate-pulse-glow z-10" />

        <div className="max-w-[1050px] mx-auto relative overflow-visible h-[280px] md:h-[380px]">
          {/* Inner card with gradient */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-full h-full bg-gradient-to-br from-[#9b7328] via-[#cca43b] to-[#805e1b] rounded-[2rem] relative overflow-visible shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10"
          >
            {/* Text content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4 pointer-events-none">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] tracking-wide font-sans"
              >
                Sri Lankan Spices:<br />
                <span className="bg-gradient-to-r from-white via-[#fbf7eb] to-white bg-clip-text text-transparent">Pure, Authentic,</span><br />
                <span className="text-[#fce4a6]">Tropical</span>
              </motion.h1>
            </div>

            {/* Cinnamon Sticks (Left) */}
            <div className="absolute -left-8 sm:-left-16 md:-left-36 top-[-30px] sm:top-[-45px] md:top-[-65px] w-32 sm:w-52 md:w-[350px] h-32 sm:h-52 md:h-[350px] z-30 pointer-events-none hover:scale-105 transition-all duration-500 ease-out animate-float-slow">
              <TransparentImage 
                src="/images/cinnamon_sticks_with_rope.png" 
                alt="Cinnamon Sticks" 
                threshold={230}
                className="w-full h-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.35)]"
              />
            </div>

            {/* Black Peppercorns (Bottom Left) */}
            <div className="absolute -left-4 sm:-left-8 md:-left-12 -bottom-16 sm:-bottom-24 md:-bottom-32 w-28 sm:w-48 md:w-[290px] h-28 sm:h-48 md:h-[290px] z-40 pointer-events-none hover:scale-105 transition-transform duration-500 ease-out animate-float-medium">
              <TransparentImage 
                src="/images/black_pepper_1781650594175.png" 
                alt="Black Pepper" 
                threshold={230}
                className="w-full h-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.35)]" 
              />
            </div>

            {/* Green Leaf & Cloves (Right) */}
            <div className="absolute right-[-12px] sm:right-[-20px] md:right-[-36px] top-[-30px] sm:top-[-50px] md:top-[-80px] w-28 sm:w-48 md:w-[320px] h-28 sm:h-48 md:h-[320px] z-20 pointer-events-none rotate-[-30deg] opacity-95 hover:rotate-[-40deg] hover:scale-105 transition-all duration-500 ease-out animate-float-slow">
              <TransparentImage 
                src="/images/cinnamon_leaf.png" 
                alt="Cinnamon Leaf" 
                threshold={230}
                className="w-full h-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.2)]" 
              />
            </div>

            {/* Cloves (Bottom Right) */}
            <div className="absolute right-[-8px] sm:right-[-12px] md:right-[-24px] -bottom-16 sm:-bottom-24 md:-bottom-28 w-32 sm:w-52 md:w-[330px] h-32 sm:h-52 md:h-[330px] z-30 pointer-events-none hover:scale-105 transition-transform duration-500 ease-out animate-float-fast">
              <TransparentImage 
                src="/images/cloves_dried_1781650553541.png" 
                alt="Cloves" 
                threshold={230}
                className="w-full h-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.35)]" 
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6, y: [0, 8, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 hidden md:flex flex-col items-center gap-1 cursor-pointer text-white/70 hover:text-white transition-colors"
          onClick={() => {
            document.getElementById("certifications")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-[10px] tracking-[0.25em] font-medium uppercase font-sans">Scroll Down</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>

        {/* SVG Wave Divider at base */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-30 pointer-events-none translate-y-[2px]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[80px] fill-[#FAF7F2] scale-y-[1.02]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,90,27.35,172,50,248.8,69.91,321.39,56.44z"></path>
          </svg>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="pt-24 pb-24 bg-gradient-to-b from-[#FAF7F2] via-[#FCFAF7] to-white relative z-10 overflow-hidden">
        {/* Floating background decorative spice elements */}
        <div className="absolute -left-12 -top-12 w-48 h-48 pointer-events-none opacity-25 hover:opacity-60 transition-opacity duration-700 animate-float-slow select-none z-0">
          <img 
            src="/images/cinnamon_leaf.png" 
            alt="Cinnamon Leaf" 
            className="w-full h-full object-contain rotate-12"
          />
        </div>
        <div className="absolute -right-16 top-8 w-40 h-40 pointer-events-none opacity-30 hover:opacity-75 transition-opacity duration-700 animate-float-medium select-none z-0">
          <img 
            src="/images/cloves_dried_1781650553541.png" 
            alt="Dried Cloves" 
            className="w-full h-full object-contain -rotate-45"
          />
        </div>
        <div className="absolute left-6 bottom-4 w-44 h-44 pointer-events-none opacity-30 hover:opacity-75 transition-opacity duration-700 animate-float-fast select-none z-0">
          <img 
            src="/images/cardamom_pods_1781650532128.png" 
            alt="Cardamom Pods" 
            className="w-full h-full object-contain rotate-45"
          />
        </div>
        <div className="absolute -right-12 -bottom-16 w-52 h-52 pointer-events-none opacity-25 hover:opacity-60 transition-opacity duration-700 animate-float-slow select-none z-0">
          <img 
            src="/images/cinnamon_sticks_with_rope.png" 
            alt="Cinnamon Sticks" 
            className="w-full h-full object-contain -rotate-12"
          />
        </div>

        {/* Decorative blur blobs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-[#c3843a]/5 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0 animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#764522]/5 blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2 z-0 animate-pulse-glow" />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto px-4 text-center relative z-10"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-xs md:text-sm font-extrabold text-cap-gold mb-3 tracking-[0.25em] uppercase font-sans"
          >
            Trusted Worldwide
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-16 tracking-tight font-sans"
          >
            Global Quality Certifications
          </motion.p>
          
          <motion.div 
            variants={staggerContainer}
            className="flex justify-center items-stretch gap-8 md:gap-12 lg:gap-16 flex-wrap"
          >
            {/* USDA Organic Card */}
            <motion.div 
              variants={fadeInUp}
              className="w-full sm:w-64 min-h-[260px] p-8 rounded-[2rem] border-2 border-emerald-600/10 flex flex-col items-center text-center bg-white/70 backdrop-blur-md shadow-md text-emerald-800 transition-all duration-500 hover:border-emerald-600/40 hover:shadow-[0_20px_40px_rgba(16,185,129,0.08)] hover:scale-[1.03] active:scale-95 group cursor-default relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-0" />
              
              <div className="w-20 h-20 rounded-full bg-emerald-50/80 flex items-center justify-center mb-6 group-hover:bg-emerald-100/90 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-sm border border-emerald-500/10 z-10">
                <span className="text-4xl transform group-hover:scale-110 transition-transform duration-300">🍃</span>
              </div>
              
              <span className="z-10 font-bold text-sm tracking-widest text-emerald-900 mb-2 font-sans">USDA ORGANIC</span>
              <p className="z-10 text-xs text-gray-500 font-sans max-w-[190px] leading-relaxed">
                100% certified organic spices, grown using traditional methods without chemicals.
              </p>
            </motion.div>

            {/* Ceylon Lion Card */}
            <motion.div 
              variants={fadeInUp}
              className="w-full sm:w-64 min-h-[260px] p-8 rounded-[2rem] border-2 border-amber-700/10 flex flex-col items-center text-center bg-[#fdfaf5]/70 backdrop-blur-md shadow-md text-amber-900 transition-all duration-500 hover:border-amber-700/40 hover:shadow-[0_20px_40px_rgba(217,119,6,0.08)] hover:scale-[1.03] active:scale-95 group cursor-default relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-amber-500/0 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-0" />
              
              <div className="w-20 h-20 rounded-2xl bg-amber-50/80 flex items-center justify-center mb-6 group-hover:bg-amber-100/90 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12 shadow-sm border border-amber-500/10 z-10">
                <span className="text-4xl transform group-hover:scale-110 transition-transform duration-300">🦁</span>
              </div>
              
              <span className="z-10 font-bold text-sm tracking-widest text-amber-900 mb-2 font-sans">CEYLON SPICES</span>
              <p className="z-10 text-xs text-gray-500 font-sans max-w-[190px] leading-relaxed">
                Authentic Ceylon origin stamp, carrying the world-renowned purity and flavor profile.
              </p>
            </motion.div>

            {/* ISO Certified Card */}
            <motion.div 
              variants={fadeInUp}
              className="w-full sm:w-64 min-h-[260px] p-8 rounded-[2rem] border-2 border-blue-600/10 flex flex-col items-center text-center bg-white/70 backdrop-blur-md shadow-md text-blue-900 transition-all duration-500 hover:border-blue-600/40 hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] hover:scale-[1.03] active:scale-95 group cursor-default relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-0" />
              
              <div className="w-20 h-20 rounded-full bg-blue-50/80 flex items-center justify-center mb-6 group-hover:bg-blue-100/90 transition-all duration-500 group-hover:scale-110 shadow-sm border border-blue-500/10 z-10">
                <Globe className="w-10 h-10 text-blue-600 group-hover:text-blue-700 transition-colors animate-[spin_12s_linear_infinite] group-hover:animate-[spin_6s_linear_infinite]" strokeWidth={1.5} />
              </div>
              
              <span className="z-10 font-bold text-sm tracking-widest text-blue-950 mb-2 font-sans">ISO CERTIFIED</span>
              <p className="z-10 text-xs text-gray-500 font-sans max-w-[190px] leading-relaxed">
                International standard production with strict hygiene and quality management protocols.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Products Showcase */}
      <section className="py-20 bg-white relative overflow-hidden z-10">
        
        {/* Floating background decorative leaf details linking the grid */}
        <div className="absolute -left-16 top-1/4 w-32 h-32 opacity-15 pointer-events-none rotate-45 select-none hidden lg:block">
          <Image src="/images/cinnamon_leaf.png" alt="Cinnamon Leaf Decor" width={150} height={150} className="w-full h-full object-contain filter grayscale contrast-125" />
        </div>
        <div className="absolute -right-16 bottom-1/4 w-32 h-32 opacity-15 pointer-events-none -rotate-12 select-none hidden lg:block">
          <Image src="/images/cloves_dried_1781650553541.png" alt="Cloves Decor" width={150} height={150} className="w-full h-full object-contain filter grayscale contrast-125" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 md:space-y-40">
          
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-xs md:text-sm font-extrabold text-cap-gold mb-3 tracking-[0.25em] uppercase font-sans">Premium Sri Lankan Spices</h2>
            <p className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Discover Our Collection</p>
          </div>

          {/* Ceylon Cinnamon */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-16 group"
          >
            {/* Image side with morphing shape */}
            <motion.div 
              variants={slideInLeft}
              className="flex-1 relative w-full aspect-square max-w-sm mx-auto"
            >
               {/* Offset thin border blob */}
               <div className="absolute inset-0 border-2 border-cap-gold/30 rounded-[50%_40%_60%_40%/40%_50%_40%_60%] translate-x-4 translate-y-4 scale-105 z-0 transition-transform duration-[1.5s] ease-out group-hover:rotate-12"></div>
               {/* Morphing color blob */}
               <div className="absolute inset-0 bg-[#e9b996]/40 rounded-[50%_40%_60%_40%/40%_50%_40%_60%] z-10 shadow-sm animate-morph-1"></div>
               <TransparentImage 
                 src="/images/cinnamon_sticks_1781650514051.png" 
                 alt="Ceylon Cinnamon" 
                 className="absolute inset-0 w-full h-full object-contain p-8 drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] z-20 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-rotate-3" 
               />
            </motion.div>
            
            {/* Text side */}
            <motion.div 
              variants={slideInRight}
              className="flex-1 text-center md:text-left flex flex-col items-center md:items-start"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#cca43b] mb-2 font-sans">True Cinnamon (C5 Alba)</span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-950 mb-4 tracking-tight leading-none">Ceylon<br/>Cinnamon</h3>
              <div className="w-12 h-1 bg-[#cca43b] mb-6 rounded-full" />
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                Our signature True Ceylon Cinnamon is sourced directly from local farmers, ensuring the highest purity and authentic aroma for your daily wellness.
              </p>
              <a href="/products" className="inline-flex items-center gap-2 px-6 py-3 bg-cap-green hover:bg-[#1f3820] text-white font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:translate-y-[-2px] active:translate-y-[0px] group/btn">
                Shop Cinnamon
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Cardamom */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 group"
          >
            {/* Image side with morphing shape */}
            <motion.div 
              variants={slideInRight}
              className="flex-1 relative w-full aspect-square max-w-sm mx-auto"
            >
               <div className="absolute inset-0 border-2 border-emerald-500/20 rounded-[40%_60%_50%_50%/50%_40%_60%_50%] -translate-x-4 -translate-y-4 scale-105 z-0 transition-transform duration-[1.5s] ease-out group-hover:-rotate-12"></div>
               <div className="absolute inset-0 bg-[#d1dfc5]/40 rounded-[40%_60%_50%_50%/50%_40%_60%_50%] z-10 shadow-sm animate-morph-2"></div>
               <TransparentImage 
                 src="/images/cardamom_pods_1781650532128.png" 
                 alt="Cardamom" 
                 className="absolute inset-0 w-full h-full object-contain p-8 drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] z-20 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-3" 
               />
            </motion.div>

            {/* Text side */}
            <motion.div 
              variants={slideInLeft}
              className="flex-1 text-center md:text-left flex flex-col items-center md:items-start"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2 font-sans">Queen of Spices</span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-950 mb-4 tracking-tight leading-none">Green<br/>Cardamom</h3>
              <div className="w-12 h-1 bg-emerald-700 mb-6 rounded-full" />
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                Handpicked from the central highlands, our premium green cardamom delivers an intense, natural aroma perfect for elevating any dish.
              </p>
              <a href="/products" className="inline-flex items-center gap-2 px-6 py-3 bg-[#b87c47] hover:bg-[#a36c3e] text-white font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:translate-y-[-2px] active:translate-y-[0px] group/btn">
                Shop Cardamom
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Cloves */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-16 group"
          >
            {/* Image side with morphing shape */}
            <motion.div 
              variants={slideInLeft}
              className="flex-1 relative w-full aspect-square max-w-sm mx-auto"
            >
               <div className="absolute inset-0 border-2 border-stone-400/20 rounded-[60%_40%_50%_50%/50%_50%_40%_60%] translate-x-4 -translate-y-4 scale-105 z-0 transition-transform duration-[1.5s] ease-out group-hover:rotate-12"></div>
               <div className="absolute inset-0 bg-[#b8aba1]/30 rounded-[60%_40%_50%_50%/50%_50%_40%_60%] z-10 shadow-sm animate-morph-1"></div>
               <TransparentImage 
                 src="/images/cloves_dried_1781650553541.png" 
                 alt="Cloves" 
                 className="absolute inset-0 w-full h-full object-contain p-8 drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] z-20 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-rotate-3" 
               />
            </motion.div>

            {/* Text side */}
            <motion.div 
              variants={slideInRight}
              className="flex-1 text-center md:text-left flex flex-col items-center md:items-start"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#764522] mb-2 font-sans">Aromatic Spice Buds</span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-950 mb-4 tracking-tight leading-none">Organic<br/>Cloves</h3>
              <div className="w-12 h-1 bg-[#764522] mb-6 rounded-full" />
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                Rich in essential oils, these handpicked cloves offer a bold, authentic flavor that represents the true heritage of Sri Lankan spices.
              </p>
              <a href="/products" className="inline-flex items-center gap-2 px-6 py-3 bg-cap-green hover:bg-[#1f3820] text-white font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:translate-y-[-2px] active:translate-y-[0px] group/btn">
                Shop Cloves
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
              </a>
            </motion.div>
          </motion.div>

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

               <style dangerouslySetInnerHTML={{__html: `
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
