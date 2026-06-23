'use client';

import Image from "next/image";
import { Leaf, HeartHandshake, Landmark } from "lucide-react";
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

export default function AboutPage() {
  return (
    <div className="relative w-full bg-[#fcfbf9] overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Background Watermark Leaves (Left & Right margins) */}
      <div className="absolute top-[10%] left-[-80px] md:left-[-50px] w-48 h-48 opacity-[0.04] pointer-events-none rotate-45 select-none z-0">
        <Image src="/images/cinnamon_leaf.png" alt="Cinnamon Leaf" width={200} height={200} className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-[40%] right-[-80px] md:right-[-50px] w-52 h-52 opacity-[0.04] pointer-events-none -rotate-12 select-none z-0">
        <Image src="/images/cinnamon_leaf.png" alt="Cinnamon Leaf" width={200} height={200} className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-[20%] left-[-80px] md:left-[-50px] w-56 h-56 opacity-[0.04] pointer-events-none rotate-90 select-none z-0">
        <Image src="/images/cinnamon_leaf.png" alt="Cinnamon Leaf" width={200} height={200} className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-[5%] right-[-80px] md:right-[-50px] w-48 h-48 opacity-[0.04] pointer-events-none rotate-180 select-none z-0">
        <Image src="/images/cinnamon_leaf.png" alt="Cinnamon Leaf" width={200} height={200} className="w-full h-full object-contain" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        
        {/* Page Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-gray-900 tracking-tight leading-tight">
            Our Heritage and People
          </h1>
          <div className="w-24 h-1.5 bg-cap-gold mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Section 1: Our Heritage Plantation Card */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 p-4 sm:p-6"
        >
          <div className="relative w-full h-[220px] sm:h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-inner group">
            <Image 
              src="/images/media__1781649846239.png" 
              alt="Sri Lankan Spice Garden" 
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" 
            />
            {/* Dark bottom overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 sm:p-8 text-center text-white">
              <p className="text-xs sm:text-sm md:text-base font-sans leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                Ceylon is a Sri Lankan spice garden lived as forest-forest in the Matale/Kandy region with seasonal and spice garden, renowning, cinnamon, cardamom, and for cardamom and clove.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Section 2: Empowering Our Communities */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="bg-[#fdfaf5] border border-[#cca43b]/25 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden flex flex-col md:flex-row gap-8 items-center"
        >
          {/* Corner Leaves Motif */}
          <div className="absolute top-0 right-0 w-24 h-24 opacity-15 pointer-events-none select-none">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-emerald-800">
              <path d="M70,20 C85,35 90,60 90,80 C70,80 45,75 30,60 C45,55 60,35 70,20 Z" />
              <path d="M50,40 C65,55 70,70 70,85 C55,85 40,80 30,70 C40,65 45,50 50,40 Z" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-20 h-20 opacity-15 pointer-events-none select-none rotate-180">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-emerald-800">
              <path d="M70,20 C85,35 90,60 90,80 C70,80 45,75 30,60 C45,55 60,35 70,20 Z" />
            </svg>
          </div>

          {/* Left Column: Image */}
          <motion.div 
            variants={slideInLeft}
            className="w-full md:w-[45%] aspect-[4/3] relative rounded-2xl overflow-hidden shadow-md group shrink-0"
          >
            <Image 
              src="/images/export_farmers_1781650578148.png" 
              alt="Empowering Our Communities" 
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
            />
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div 
            variants={slideInRight}
            className="flex-1 space-y-6 text-gray-800 relative z-10 text-center md:text-left"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-gray-950 leading-tight">
              Empowering Our Communities
            </h2>
            <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-gray-600 font-sans">
              <p>
                We supported local farmers and their families, from as more come to apply in Kandy. From our minimal process was just running local farmers, and their families to make our usability and supporting. The heritage's we're trying to sure our own. Our farmer's wagons who has our all harvests beverageing farmers to help we enhanced our products, and gardens, and their flavors.
              </p>
              <p className="font-semibold text-cap-green">
                We are always details standard, standards to stabilize standard rates.
              </p>
              <p className="font-serif font-bold text-gray-950 italic mt-4">
                Thank you.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Section 3: Pillars / Circular Green Badges */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6"
        >
          {/* Sustainability Badge */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col items-center text-center p-4"
          >
            <div className="w-28 h-28 rounded-full border-[3px] border-amber-600/30 flex items-center justify-center bg-cap-green text-cap-light-green shadow-lg hover:border-cap-gold hover:scale-105 active:scale-95 transition-all duration-300 relative overflow-hidden group cursor-default mb-6">
              <div className="absolute inset-0 bg-[#cca43b]/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full z-0" />
              <Leaf className="w-12 h-12 text-[#cca43b] z-10 transform group-hover:rotate-12 transition-transform duration-300" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold font-serif text-gray-950 mb-3">Sustainability</h3>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs font-sans">
              Sustainability is our vast warns of center and resources to convert to Sustainability.
            </p>
          </motion.div>

          {/* Fair Trade Badge */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col items-center text-center p-4"
          >
            <div className="w-28 h-28 rounded-full border-[3px] border-amber-600/30 flex items-center justify-center bg-cap-green text-cap-light-green shadow-lg hover:border-cap-gold hover:scale-105 active:scale-95 transition-all duration-300 relative overflow-hidden group cursor-default mb-6">
              <div className="absolute inset-0 bg-[#cca43b]/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full z-0" />
              <HeartHandshake className="w-12 h-12 text-[#cca43b] z-10 transform group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold font-serif text-gray-950 mb-3">Fair Trade</h3>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs font-sans">
              We now client to monitor Fair Trade and grow to both variables and our growth.
            </p>
          </motion.div>

          {/* Ancient Heritage Badge */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col items-center text-center p-4"
          >
            <div className="w-28 h-28 rounded-full border-[3px] border-amber-600/30 flex items-center justify-center bg-cap-green text-cap-light-green shadow-lg hover:border-cap-gold hover:scale-105 active:scale-95 transition-all duration-300 relative overflow-hidden group cursor-default mb-6">
              <div className="absolute inset-0 bg-[#cca43b]/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full z-0" />
              <Landmark className="w-12 h-12 text-[#cca43b] z-10 transform group-hover:translate-y-[-2px] transition-transform duration-300" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold font-serif text-gray-950 mb-3">Ancient Heritage</h3>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs font-sans">
              Ancient Heritage is a new location of ceylon and flavor identified by existing of typical fruit.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
