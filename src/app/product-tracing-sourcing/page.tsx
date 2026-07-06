'use client';

import Image from "next/image";
import { Globe, Award, FileText, CheckCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

// Framer Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  }
};

const scaleBadge = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

export default function ProductTracingSourcingPage() {
  return (
    <div className="w-full flex flex-col bg-[#fcfbf9] overflow-x-hidden">
      
      {/* Header Section */}
      <section className="bg-[#532e1c] text-white py-16 px-4 text-center relative overflow-hidden z-10 border-b-4 border-cap-gold/30">
        
        {/* Leaf Watermark Corner SVGs */}
        <div className="absolute top-[-20px] left-[-20px] w-32 h-32 opacity-15 pointer-events-none select-none rotate-45">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-white/80">
            <path d="M70,20 C85,35 90,60 90,80 C70,80 45,75 30,60 C45,55 60,35 70,20 Z" />
            <path d="M50,40 C65,55 70,70 70,85 C55,85 40,80 30,70 C40,65 45,50 50,40 Z" />
          </svg>
        </div>
        <div className="absolute top-[-20px] right-[-20px] w-32 h-32 opacity-15 pointer-events-none select-none -rotate-90">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-white/80">
            <path d="M70,20 C85,35 90,60 90,80 C70,80 45,75 30,60 C45,55 60,35 70,20 Z" />
          </svg>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto space-y-3"
        >
          <span className="text-cap-gold text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase font-sans block">
            Product Tracing & Sourcing
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight font-serif text-white">
            PRODUCT TRACING & SOURCING:<br />
            <span className="text-[#eacda3]">Lion Logo Authenticity, Farm to World</span>
          </h1>
        </motion.div>
      </section>

      {/* Main Split Layout Section */}
      <section className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 z-10 mb-10 overflow-visible">
        
        {/* Large Layout Split Panel Container */}
        <div className="relative flex flex-col lg:flex-row shadow-2xl rounded-3xl overflow-visible">
          
          {/* 1. Left Panel: Traditional Cultivation */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            className="flex-grow lg:w-1/2 bg-[#964724] p-6 sm:p-10 text-white rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none flex flex-col gap-8 border-b-2 lg:border-b-0 lg:border-r border-white/10"
          >
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-serif tracking-tight leading-tight uppercase text-white mb-1">
                Traditional Cultivation
              </h2>
              <span className="text-xs uppercase tracking-widest text-[#f5c6b3] font-bold font-sans">
                & Processing
              </span>
            </div>

            {/* Top Large Plantation Image */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md group">
              <Image 
                src="/images/media__1781649846239.png" 
                alt="Traditional Sri Lankan spice cultivation" 
                fill 
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>

            {/* Title & Description */}
            <div className="space-y-3 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                Generations of Expertise
              </h3>
              <p className="text-[#fcebe3] text-xs sm:text-sm leading-relaxed font-sans">
                Our centuries of expertise in spices cultivation allows us to provide quality spices from spice farms in Sri Lanka.
              </p>
            </div>

            {/* Side-by-Side Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-inner group">
                <Image 
                  src="/images/media__1781649879280.png" 
                  alt="Harvesting bark" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-inner group">
                <Image 
                  src="/images/cardamom_pods_1781650532128.png" 
                  alt="Green cardamom pods" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
            </div>

            {/* Sun Drying Section (Horizontal Card) */}
            <div className="bg-[#7e3919] p-5 rounded-2xl shadow-inner border border-white/5 flex flex-col sm:flex-row gap-5 items-center">
              <div className="relative w-full sm:w-[45%] aspect-video sm:aspect-square rounded-xl overflow-hidden shrink-0">
                <Image 
                  src="/images/media__1781649925972.png" 
                  alt="Sun Drying Racks" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="flex-1 space-y-2 text-center sm:text-left">
                <h4 className="font-bold text-sm sm:text-base font-serif text-[#ffdcd0]">
                  Natural Sun Drying
                </h4>
                <p className="text-[#fcebe3]/80 text-[10px] sm:text-xs leading-relaxed font-sans">
                  Natural Sun Drying is used to preserve the essential oils, colors and flavor content of our spices.
                </p>
              </div>
            </div>

            {/* Bottom Side-by-Side Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-inner group">
                <Image 
                  src="/images/media__1781649964744.png" 
                  alt="Grading spices" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-inner group">
                <Image 
                  src="/images/cloves_dried_1781650553541.png" 
                  alt="Cloves selection" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
            </div>

          </motion.div>

          {/* 2. Crease Badge overlays - Floating centrally between columns on desktop */}
          <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-30">
            {/* ISO Badge */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleBadge}
              className="w-18 h-18 rounded-full bg-white border-[3px] border-blue-600 shadow-xl flex items-center justify-center font-extrabold text-blue-700 text-[10px] tracking-wide hover:scale-110 hover:rotate-12 transition-transform cursor-default"
            >
              ISO 22000
            </motion.div>
            
            {/* HACCP Badge */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleBadge}
              className="w-18 h-18 rounded-full bg-white border-[3px] border-emerald-600 shadow-xl flex items-center justify-center font-extrabold text-emerald-800 text-[10px] tracking-wide hover:scale-110 hover:-rotate-12 transition-transform cursor-default"
            >
              HACCP
            </motion.div>

            {/* USDA ORG Badge */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleBadge}
              className="w-18 h-18 rounded-full bg-white border-[3px] border-amber-700 shadow-xl flex flex-col items-center justify-center font-extrabold text-amber-900 text-[8px] leading-tight hover:scale-110 hover:rotate-12 transition-transform cursor-default"
            >
              <span>USDA</span>
              <span>ORGANIC</span>
            </motion.div>
          </div>

          {/* Mobile Badge Container (between columns) */}
          <div className="flex lg:hidden justify-center items-center gap-6 bg-[#8c4d2d] py-6 px-4 border-y border-white/15">
            <div className="w-16 h-16 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center shadow-md font-bold text-blue-700 text-[9px]">
              ISO 22000
            </div>
            <div className="w-16 h-16 rounded-full bg-white border-2 border-green-600 flex items-center justify-center shadow-md font-bold text-green-700 text-[9px]">
              HACCP
            </div>
            <div className="w-16 h-16 rounded-full bg-white border-2 border-amber-700 flex flex-col items-center justify-center shadow-md font-bold text-amber-800 text-[7px] leading-tight">
              <span>USDA</span>
              <span>ORGANIC</span>
            </div>
          </div>

          {/* 3. Right Panel: Modern Lab Testing */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
            className="flex-grow lg:w-1/2 bg-[#647646] p-6 sm:p-10 text-white rounded-b-3xl lg:rounded-r-3xl lg:rounded-tl-none flex flex-col gap-8"
          >
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-serif tracking-tight leading-tight uppercase text-white mb-1">
                Modern Quality
              </h2>
              <span className="text-xs uppercase tracking-widest text-[#d5dfc6] font-bold font-sans">
                & Lab Testing
              </span>
            </div>

            {/* Top Large Lab Image */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md group">
              <Image 
                src="/images/media__1781649901584.png" 
                alt="Modern analytical laboratory testing" 
                fill 
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>

            {/* Title & Description */}
            <div className="space-y-3 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                State-of-the-Art Analysis
              </h3>
              <p className="text-[#f3f7ef] text-xs sm:text-sm leading-relaxed font-sans">
                High tech analysis is used to measure parameters like moisture content, volatile oil content, and purity.
              </p>
            </div>

            {/* Side-by-Side Zoomed/Cropped Lab Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-inner group">
                <Image 
                  src="/images/media__1781649901584.png" 
                  alt="Microscopic analysis" 
                  fill 
                  className="object-cover scale-150 origin-top-left transition-transform duration-500 group-hover:scale-[1.6]" 
                />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-inner group">
                <Image 
                  src="/images/media__1781649901584.png" 
                  alt="Chemical verification" 
                  fill 
                  className="object-cover scale-150 origin-bottom-right transition-transform duration-500 group-hover:scale-[1.6]" 
                />
              </div>
            </div>

            {/* Purity & Potency Section (Horizontal Card) */}
            <div className="bg-[#526139] p-5 rounded-2xl shadow-inner border border-white/5 flex flex-col sm:flex-row gap-5 items-center">
              <div className="relative w-full sm:w-[45%] aspect-video sm:aspect-square rounded-xl overflow-hidden shrink-0">
                <Image 
                  src="/images/media__1781649901584.png" 
                  alt="Purity verification" 
                  fill 
                  className="object-cover scale-125 origin-center" 
                />
              </div>
              <div className="flex-1 space-y-2 text-center sm:text-left">
                <h4 className="font-bold text-sm sm:text-base font-serif text-[#e4edd4]">
                  Purity & Potency Testing
                </h4>
                <p className="text-[#f3f7ef]/80 text-[10px] sm:text-xs leading-relaxed font-sans">
                  Purity & Potency testing is done to ensure the absence of contaminants and verify active ingredients.
                </p>
              </div>
            </div>

            {/* Bottom Card: Adherence & Certificates side-by-side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
              
              {/* Adherence Card */}
              <div className="bg-[#526139] p-5 rounded-xl border border-white/5 flex flex-col justify-center text-center sm:text-left">
                <h4 className="font-bold text-sm font-serif text-[#ffdcd0] mb-2">
                  Adherence to International Standards
                </h4>
                <p className="text-[#f3f7ef]/70 text-[10px] leading-relaxed font-sans">
                  Adherence to international thresholds, and standards and adherence to global standards.
                </p>
              </div>

              {/* Styled Mock Certificate Cards */}
              <div className="flex items-center justify-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 relative overflow-hidden">
                
                {/* Certificate 1 */}
                <div className="w-[70px] h-[95px] bg-white rounded shadow-md border border-gray-200 p-1 flex flex-col justify-between transform -rotate-6 hover:rotate-0 hover:-translate-y-1 hover:scale-105 transition-all duration-300 select-none">
                  <div className="w-full h-1 bg-amber-500 rounded" />
                  <div className="flex flex-col items-center gap-0.5">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    <span className="text-[5px] font-bold text-gray-800 text-center uppercase tracking-tighter">HACCP CERT</span>
                  </div>
                  <div className="w-full flex justify-between px-1">
                    <div className="w-4 h-[2px] bg-gray-300" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  </div>
                </div>

                {/* Certificate 2 */}
                <div className="w-[70px] h-[95px] bg-white rounded shadow-md border border-gray-200 p-1 flex flex-col justify-between transform rotate-6 hover:rotate-0 hover:-translate-y-1 hover:scale-105 transition-all duration-300 select-none">
                  <div className="w-full h-1 bg-blue-700 rounded" />
                  <div className="flex flex-col items-center gap-0.5">
                    <Award className="w-5 h-5 text-blue-600" />
                    <span className="text-[5px] font-bold text-gray-800 text-center uppercase tracking-tighter">ISO 9001</span>
                  </div>
                  <div className="w-full flex justify-between px-1">
                    <div className="w-4 h-[2px] bg-gray-300" />
                    <div className="w-3 h-3 rounded-full bg-blue-500/80" />
                  </div>
                </div>

              </div>

            </div>

          </motion.div>

        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100 z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.span 
            variants={fadeInUp}
            className="text-cap-gold text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase font-sans mb-3 block"
          >
            International Spices Source
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 font-serif tracking-tight"
          >
            OUR GLOBAL REACH:
          </motion.h2>
          <motion.h3 
            variants={fadeInUp}
            className="text-xl sm:text-2xl font-bold text-[#8c4d2d] mb-16 tracking-tight leading-none"
          >
            Exporting Excellence Worldwide.
          </motion.h3>
          
          {/* Map and Tooltips Grid */}
          <div className="relative w-full aspect-[2/1] max-w-4xl mx-auto mb-6">
            
            {/* World Map Background */}
            <div 
              className="w-full h-full opacity-35 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain"
              style={{ filter: 'invert(80%) sepia(20%) saturate(800%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
            />

            {/* Glowing routes overlaid */}
            <svg viewBox="0 0 800 400" className="absolute inset-0 w-full h-full z-10 pointer-events-none">
              <path d="M 515 235 Q 362 135 210 140" stroke="#c3843a" strokeWidth="2.5" fill="none" className="route-path-quality" />
              <path d="M 515 235 Q 452 145 390 110" stroke="#c3843a" strokeWidth="2.5" fill="none" className="route-path-quality" />
              <path d="M 515 235 Q 577 185 640 135" stroke="#c3843a" strokeWidth="2.5" fill="none" className="route-path-quality" />
              <circle cx="515" cy="235" r="7" fill="#c3843a" className="animate-ping opacity-60" />
              <circle cx="515" cy="235" r="4" fill="#c3843a" />
            </svg>

            {/* Region Glassmorphic Tooltips */}
            
            {/* USA */}
            <motion.div 
              variants={scaleBadge}
              className="absolute left-[8%] sm:left-[12%] top-[30%] sm:top-[35%] bg-white/85 backdrop-blur-md px-3 py-3 rounded-2xl shadow-xl border border-red-500/20 text-left w-[110px] sm:w-[130px] hover:scale-105 transition-transform group cursor-default"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 absolute top-4 right-4 animate-ping" />
              <h4 className="font-extrabold text-[11px] sm:text-xs text-gray-950 uppercase tracking-wider font-sans mb-1.5 border-b border-gray-100 pb-1 flex items-center gap-1">
                <span className="text-[10px]">📍</span> USA
              </h4>
              <ul className="text-[9px] sm:text-[10px] text-gray-600 font-sans space-y-0.5 leading-tight">
                <li>• USA</li>
                <li>• Germany</li>
                <li>• Usmea</li>
                <li>• Japan</li>
              </ul>
            </motion.div>

            {/* Europe */}
            <motion.div 
              variants={scaleBadge}
              className="absolute left-[38%] sm:left-[43%] top-[15%] sm:top-[20%] bg-white/85 backdrop-blur-md px-3 py-3 rounded-2xl shadow-xl border border-blue-500/20 text-left w-[110px] sm:w-[130px] hover:scale-105 transition-transform group cursor-default"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 absolute top-4 right-4 animate-ping" />
              <h4 className="font-extrabold text-[11px] sm:text-xs text-gray-950 uppercase tracking-wider font-sans mb-1.5 border-b border-gray-100 pb-1 flex items-center gap-1">
                <span className="text-[10px]">📍</span> Europe
              </h4>
              <ul className="text-[9px] sm:text-[10px] text-gray-600 font-sans space-y-0.5 leading-tight">
                <li>• UK</li>
                <li>• UE</li>
                <li>• Germany</li>
              </ul>
            </motion.div>

            {/* Middle East */}
            <motion.div 
              variants={scaleBadge}
              className="absolute left-[54%] sm:left-[59%] top-[45%] sm:top-[50%] bg-white/85 backdrop-blur-md px-3 py-3 rounded-2xl shadow-xl border border-green-500/20 text-left w-[110px] sm:w-[130px] hover:scale-105 transition-transform group cursor-default"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 absolute top-4 right-4 animate-ping" />
              <h4 className="font-extrabold text-[11px] sm:text-xs text-gray-950 uppercase tracking-wider font-sans mb-1.5 border-b border-gray-100 pb-1 flex items-center gap-1">
                <span className="text-[10px]">📍</span> Mid East
              </h4>
              <ul className="text-[9px] sm:text-[10px] text-gray-600 font-sans space-y-0.5 leading-tight">
                <li>• UAE</li>
                <li>• Europe</li>
                <li>• Saudi Arabia</li>
              </ul>
            </motion.div>

            <style dangerouslySetInnerHTML={{__html: `
              @keyframes travel {
                to {
                  stroke-dashoffset: -20;
                }
              }
              .route-path-quality {
                stroke-dasharray: 5, 5;
                animation: travel 2.5s linear infinite;
              }
            `}} />

          </div>
        </motion.div>
      </section>

    </div>
  );
}
