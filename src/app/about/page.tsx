'use client';

import Image from "next/image";
import Link from "next/link";
import { Leaf, Award, ShieldCheck, Heart, Droplet, ArrowRight } from "lucide-react";
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

export default function AboutPage() {
  return (
    <div className="relative w-full bg-[#fcf9f8] text-[#1b1c1c] overflow-x-hidden">
      
      {/* Decorative Background Graphics (Goraka Tree on Right & Climbing Pepper Vine on Left) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        {/* Right Side: Garcinia (Goraka) Tree near the top (Larger, pointing down) */}
        <div className="absolute right-[-220px] md:right-[-180px] top-[15%] w-[500px] md:w-[750px] h-[750px] opacity-[0.06] transform rotate-[120deg]">
          <TransparentImage 
            src="/images/goraka_tree.png" 
            alt="" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Side: Another Garcinia (Goraka) Tree near the bottom (Larger, pointing down) */}
        <div className="absolute right-[-240px] md:right-[-200px] top-[65%] w-[500px] md:w-[750px] h-[750px] opacity-[0.05] transform rotate-[140deg]">
          <TransparentImage 
            src="/images/goraka_tree.png" 
            alt="" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Left Side: Single Giant Black Pepper (Gammiris) Vine climbing starting above the brown section to Spice Trail (Wider, spreading) */}
        <div className="absolute left-[-220px] md:left-[-180px] top-[1400px] bottom-[580px] w-[600px] md:w-[900px] opacity-[0.06]">
          <TransparentImage 
            src="/images/pepper_vine.png" 
            alt="" 
            className="w-full h-full object-fill object-bottom"
          />
        </div>
      </div>
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[500px] flex items-center justify-center py-20 px-6 md:px-8">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/estate_tea_plantation.png" 
            alt="Lush tea and spice plantation background" 
            fill 
            sizes="100vw"
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-[#42190a]/30 pointer-events-none" />
        </div>
        
        {/* Overlay Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-[650px] bg-[#fcf9f8]/90 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-premium border border-white/40 text-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#795900]">Our Legacy</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#42190a] mt-2 mb-4">
            The Cinnamon Care
          </h1>
          <p className="text-sm md:text-base text-[#52443f] leading-relaxed mb-6">
            For generations, the families of Ceylon have cultivated the soil with deep respect and care. Our mission is to preserve this artisanal wisdom, providing the world with pure spices that capture the true climate and soul of our island.
          </p>
          <Link 
            href="#spice-trail" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#795900] hover:bg-[#5c4300] text-white rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
          >
            Discover Our Process <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </section>

      {/* 2. Why Choose Us Section */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-8 py-20 border-b border-[#eae7e7]">
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
          <div className="bg-[#fcf9f8] p-8 rounded-xl border border-[#eae7e7] text-center">
            <div className="w-12 h-12 rounded-full bg-[#ffdbcf] text-[#42190a] flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#42190a] mb-3">Ethically Sourced</h3>
            <p className="text-sm text-[#52443f] leading-relaxed">
              We work directly with traditional families, ensuring fair earnings, premium farm-gate prices, and chemical-free heritage growth.
            </p>
          </div>
          
          <div className="bg-[#fcf9f8] p-8 rounded-xl border border-[#eae7e7] text-center">
            <div className="w-12 h-12 rounded-full bg-[#d3e9c7] text-[#192a14] flex items-center justify-center mx-auto mb-6">
              <Droplet className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#42190a] mb-3">Aromatic Quality</h3>
            <p className="text-sm text-[#52443f] leading-relaxed">
              Rich natural oils, pungent flavor profiles, and deep colors are locked inside our spices through natural, small-batch drying.
            </p>
          </div>
          
          <div className="bg-[#fcf9f8] p-8 rounded-xl border border-[#eae7e7] text-center">
            <div className="w-12 h-12 rounded-full bg-[#ffdfa0] text-[#795900] flex items-center justify-center mx-auto mb-6">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#42190a] mb-3">Health Benefits</h3>
            <p className="text-sm text-[#52443f] leading-relaxed">
              Ceylon Spices are packed with bio-active compounds, antioxidants, and low coumarin levels, offering holistic therapeutic nourishment.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Spice Trail Section */}
      <section id="spice-trail" className="max-w-[1280px] mx-auto px-6 md:px-8 py-20 space-y-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-[600px] mx-auto"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#795900] mb-2">Our Process</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#42190a]">The Spice Trail</h2>
          <div className="w-16 h-1 bg-[#795900] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Trail Item 1: Legacy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#42190a]">A Legacy of Ceylon</h3>
            <p className="text-sm text-[#52443f] leading-relaxed">
              In 1826, our family journey began in the Matale and Kandy highlands. The goal was simple: to work in harmony with nature, cultivating the purest spices that thrive in our specific soil and tropical weather. Today, we remain true to this path.
            </p>
          </div>
          <div className="relative h-[250px] md:h-[350px] rounded-xl overflow-hidden shadow-premium">
            <Image 
              src="/images/legacy_cinnamon_pots.png" 
              alt="Artisanal clay pots with spices" 
              fill 
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Trail Item 2: Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[250px] md:h-[350px] rounded-xl overflow-hidden shadow-premium">
            <Image 
              src="/images/artisan_turmeric_leela.png" 
              alt="Hands sorting turmeric roots" 
              fill 
              sizes="50vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#42190a]">The Artisanal Process</h3>
            <p className="text-sm text-[#52443f] leading-relaxed">
              Every cinnamon quill is hand-peeled, and every turmeric root is sorted by the skilled hands of our community. This careful sorting and slow drying process guarantees that only premium quality leaves the plantation for your home.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Our Origins Section (Green theme card) */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-8 py-12">
        <div className="bg-[#192a14] rounded-2xl overflow-hidden shadow-premium grid grid-cols-1 md:grid-cols-12 gap-8 p-8 md:p-12 text-white items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="md:col-span-7 space-y-6"
          >
            <span className="inline-block text-[9px] font-bold uppercase tracking-widest text-[#97ac8d] bg-[#2e4028] px-2.5 py-1 rounded">Our Origins</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">Soil, Sun & Rain</h2>
            <p className="text-sm text-[#eae7e7]/80 leading-relaxed">
              Discover Sri Lanka's unique soil, high elevations, and ideal weather patterns that give Ceylon spices their premium reputation. We nurture the earth with natural compost and forest canopy shade, preserving the soil's natural integrity.
            </p>
            <div className="pt-2">
              <Link 
                href="/products" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffc641] hover:bg-[#ffdfa0] text-[#42190a] rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
          
          <div className="md:col-span-5 relative h-[300px] md:h-[350px] flex items-center justify-center">
            <div className="relative w-[80%] h-full rounded-xl overflow-hidden border border-white/15">
              <Image 
                src="/images/srilanka_purest_spices.png" 
                alt="Sri Lanka purest spices packaging mockup" 
                fill 
                sizes="40vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 5. Meet the Artisans Section */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-8 py-20 border-t border-[#eae7e7] mt-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-[600px] mx-auto mb-16"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#795900] mb-2">Our People</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#42190a]">Meet the Artisans</h2>
          <div className="w-16 h-1 bg-[#795900] mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Artisan 1 */}
          <div className="bg-[#fcf9f8] rounded-xl overflow-hidden border border-[#eae7e7] hover:shadow-premium transition-all duration-300">
            <div className="relative h-[250px] w-full">
              <Image 
                src="/images/artisan_cinnamon_ranjan.png" 
                alt="Portrait of Ranjan Silva" 
                fill 
                sizes="33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#795900]">Master Cinnamon Peeler • 42 Years</p>
              <h3 className="font-serif text-lg font-bold text-[#42190a]">Ranjan Silva</h3>
              <p className="text-sm text-[#52443f] leading-relaxed">
                Ranjan represents a long family line of master peelers. He handles each quill with precision, sorting Alba quills in the highlands.
              </p>
            </div>
          </div>

          {/* Artisan 2 */}
          <div className="bg-[#fcf9f8] rounded-xl overflow-hidden border border-[#eae7e7] hover:shadow-premium transition-all duration-300">
            <div className="relative h-[250px] w-full">
              <Image 
                src="/images/artisan_turmeric_leela.png" 
                alt="Portrait of Leela Perera" 
                fill 
                sizes="33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#795900]">Turmeric Cultivator • 18 Years</p>
              <h3 className="font-serif text-lg font-bold text-[#42190a]">Leela Perera</h3>
              <p className="text-sm text-[#52443f] leading-relaxed">
                Leela manages the root collection and sun-drying process, ensuring our turmeric retains its bright golden color and natural potency.
              </p>
            </div>
          </div>

          {/* Artisan 3 */}
          <div className="bg-[#fcf9f8] rounded-xl overflow-hidden border border-[#eae7e7] hover:shadow-premium transition-all duration-300">
            <div className="relative h-[250px] w-full">
              <Image 
                src="/images/artisan_vanilla_ravindra.png" 
                alt="Portrait of Ravindra Sen" 
                fill 
                sizes="33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#795900]">Vanilla Curator • 30 Years</p>
              <h3 className="font-serif text-lg font-bold text-[#42190a]">Ravindra Sen</h3>
              <p className="text-sm text-[#52443f] leading-relaxed">
                Ravindra oversees the curing and fermentation of vanilla pods, maintaining constant temperature levels to lock in flavor.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Grown in Soils Section */}
      <section className="bg-[#5d2e1d] text-white py-20 px-6 md:px-8 border-t border-[#eae7e7]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="md:col-span-7 space-y-6"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight">
              Grown in Soils,<br />Committed to Quality
            </h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-serif font-bold text-lg text-[#ffdfa0]">Sustainable Cultivation</h4>
                <p className="text-sm text-[#eae7e7]/80 leading-relaxed mt-1">
                  We treat the land with respect. Our farming preserves soil nutrition and avoids chemical enhancers, letting the forest feed the crop.
                </p>
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-[#ffdfa0]">We Focus on Wellness</h4>
                <p className="text-sm text-[#eae7e7]/80 leading-relaxed mt-1">
                  Pure spices are natural remedies. We guarantee our clients get unadulterated spices that deliver peak holistic benefits.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 px-4 py-2 rounded border border-white/10">100% Pure Ceylon</span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 px-4 py-2 rounded border border-white/10">Single Origin</span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 px-4 py-2 rounded border border-white/10">Organic & Clean</span>
            </div>
          </motion.div>
          
          <div className="md:col-span-5 relative h-[350px] md:h-[450px] flex items-center justify-center">
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-premium">
              <Image 
                src="/images/spice_jar_plinth.png" 
                alt="Spice jar on plinth in front of tea fields" 
                fill 
                sizes="40vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
