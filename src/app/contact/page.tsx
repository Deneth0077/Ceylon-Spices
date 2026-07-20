'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Send, Globe, Award, ShieldCheck, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "Wholesale Opportunities",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", topic: "Wholesale Opportunities", message: "" });
    }, 800);
  };

  return (
    <div className="w-full bg-[#fcf9f8] text-[#1b1c1c] overflow-x-hidden min-h-screen py-16">
      
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* 1. Header Title */}
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#795900] mb-2">Heritage & Provenance</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#42190a] leading-tight mb-4">
            Get in Touch
          </h1>
          <p className="text-xs md:text-sm text-[#52443f] leading-relaxed max-w-[500px] mx-auto">
            Whether you're looking for wholesale spice solutions or want to learn more about our organic farms in Sri Lanka, our artisans are here to assist.
          </p>
          <div className="w-16 h-1 bg-[#795900] mx-auto mt-4 rounded-full" />
        </div>

        {/* 2. Interactive Form & Side Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Left Column: Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-xl border border-[#eae7e7]/80 shadow-premium">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <span className="text-4xl">🌾</span>
                <h3 className="font-serif font-bold text-xl text-[#42190a]">Message Dispatched</h3>
                <p className="text-xs text-[#52443f] max-w-[360px] mx-auto">
                  Thank you for contacting Ceylon Spice Artisans. Our trade representatives will respond to your business inquiry within 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-[#795900] text-white rounded font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Full name input */}
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#52443f]">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Alexander Wickram"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pb-2 bg-transparent text-xs font-sans text-[#1b1c1c] border-b border-[#eae7e7] focus:outline-none focus:border-[#42190a] transition-all"
                  />
                </div>

                {/* Email address input */}
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#52443f]">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="alex@heritage.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pb-2 bg-transparent text-xs font-sans text-[#1b1c1c] border-b border-[#eae7e7] focus:outline-none focus:border-[#42190a] transition-all"
                  />
                </div>

                {/* Topic selector */}
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#52443f]">Topic of Inquiry</label>
                  <select 
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full pb-2 bg-transparent text-xs font-sans text-[#1b1c1c] border-b border-[#eae7e7] focus:outline-none focus:border-[#42190a] cursor-pointer"
                  >
                    <option value="Wholesale Opportunities">Wholesale Opportunities</option>
                    <option value="Export & Shipping">Export & Shipping</option>
                    <option value="Agro-Tourism & Sourcing">Agro-Tourism & Sourcing</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>

                {/* Message input */}
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#52443f]">Message</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Tell us about your interest in Ceylon's finest spices..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pb-2 bg-transparent text-xs font-sans text-[#1b1c1c] border-b border-[#eae7e7] focus:outline-none focus:border-[#42190a] transition-all resize-none"
                  />
                </div>

                <div className="pt-4 flex justify-between items-center text-[10px] text-[#85736e]">
                  <span>By sending this message, you agree to our privacy policy regarding data handling.</span>
                  <button 
                    type="submit"
                    className="px-6 py-3 bg-[#ffc641] hover:bg-[#ffdfa0] text-[#42190a] rounded font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center gap-2 cursor-pointer flex-shrink-0"
                  >
                    Send Message <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Right Column: Office info cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="bg-[#f6f3f2]/60 p-6 rounded-xl border border-[#eae7e7]/80 flex gap-4">
              <div className="w-10 h-10 rounded bg-[#42190a]/10 flex items-center justify-center text-[#42190a] flex-shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#795900]">Sri Lanka Headquarters</p>
                <h4 className="font-serif font-bold text-[#42190a] text-sm">The Source of Heritage</h4>
                <p className="text-xs text-[#52443f]/80 leading-relaxed">
                  19th Mile Post, Uduwela Road,<br />Thanamalwila, Sri Lanka.
                </p>
                <a href="tel:+94777557058" className="inline-flex items-center gap-1 text-xs text-[#42190a] font-bold hover:underline pt-1">
                  <Phone className="w-3.5 h-3.5 text-[#795900]" /> +94 777 557 058
                </a>
              </div>
            </div>

            {/* Global Distribution Card */}
            <div className="bg-[#f6f3f2]/60 p-6 rounded-xl border border-[#eae7e7]/80 flex gap-4">
              <div className="w-10 h-10 rounded bg-[#192a14]/10 flex items-center justify-center text-[#192a14] flex-shrink-0 mt-0.5">
                <Globe className="w-5 h-5" />
              </div>
              <div className="space-y-2 flex-grow">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#795900]">Global Distribution</p>
                <h4 className="font-serif font-bold text-[#42190a] text-sm">Portways & Logistics</h4>
                
                <div className="space-y-1.5 text-xs text-[#52443f]/80">
                  <div className="flex justify-between border-b border-[#eae7e7]/60 pb-1">
                    <span>London Hub</span>
                    <span className="font-bold text-[#192a14] bg-[#d3e9c7] px-2 py-0.25 rounded text-[9px] uppercase">Europe East</span>
                  </div>
                  <div className="flex justify-between border-b border-[#eae7e7]/60 pb-1">
                    <span>Singapore Warehouse</span>
                    <span className="font-bold text-[#795900] bg-[#ffdfa0] px-2 py-0.25 rounded text-[9px] uppercase">Asia Pacific</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dubai Logistics</span>
                    <span className="font-bold text-white bg-[#5d2e1d] px-2 py-0.25 rounded text-[9px] uppercase">Middle East</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card Button */}
            <Link 
              href="/about#spice-trail"
              className="block bg-[#5d2e1d] hover:bg-[#42190a] text-white p-6 rounded-xl shadow-premium text-center transition-colors group cursor-pointer"
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#ffdfa0] mb-1">Common Questions?</p>
              <h4 className="font-serif font-bold text-sm text-white group-hover:underline inline-flex items-center gap-1.5 justify-center">
                Visit Our Artisanal Trail <ArrowRight className="w-3.5 h-3.5 text-[#ffdfa0]" />
              </h4>
            </Link>

          </div>
        </div>

        {/* 3. We Export Internationally Map Section */}
        <section className="bg-[#f6f3f2]/40 rounded-2xl border border-[#eae7e7] p-8 md:p-12 mb-20 text-center">
          <p className="text-[9px] font-bold uppercase tracking-wider text-[#795900] mb-2">Logistics Coverage</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#42190a] mb-8">We Export Internationally</h2>
          
          {/* Custom graphic styled World map */}
          <div className="relative w-full aspect-[2.1/1] max-w-4xl mx-auto rounded-xl overflow-hidden bg-white border border-[#eae7e7]/60 flex items-center justify-center p-6 shadow-sm">
            {/* Visual World Map (Minimal stylized gray theme) */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 1000 500" fill="currentColor">
                {/* Simplified continents SVGs */}
                <path d="M150,150 L250,130 L300,160 L320,250 L250,350 L200,420 L150,450 L100,400 L80,300 L90,200 Z" />
                <path d="M400,120 L480,100 L550,140 L600,200 L580,280 L520,380 L480,450 L440,300 Z" />
                <path d="M600,100 L720,80 L800,110 L850,220 L800,320 L750,380 L650,250 Z" />
              </svg>
            </div>
            
            {/* Sourcing / Shipping routes */}
            <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 1000 500">
              {/* Colombo hub coordinates: 600, 310 */}
              <circle cx="600" cy="310" r="8" fill="#795900" className="animate-ping" />
              <circle cx="600" cy="310" r="5" fill="#795900" />
              <text x="615" y="315" fill="#42190a" className="font-sans font-bold text-[10px] uppercase tracking-wider">Colombo Hub</text>
              
              {/* Shipping lines */}
              {/* Line 1: Colombo to London (440, 160) */}
              <path d="M600,310 Q490,200 440,160" fill="none" stroke="#795900" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="440" cy="160" r="4" fill="#42190a" />
              
              {/* Line 2: Colombo to Singapore (720, 350) */}
              <path d="M600,310 Q680,330 720,350" fill="none" stroke="#795900" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="720" cy="350" r="4" fill="#42190a" />

              {/* Line 3: Colombo to Dubai (510, 260) */}
              <path d="M600,310 Q540,280 510,260" fill="none" stroke="#795900" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="510" cy="260" r="4" fill="#42190a" />
            </svg>
            
            {/* World Map Text */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-around flex-wrap gap-4 text-left z-20">
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-[#85736e]">Single Origin</p>
                <p className="text-xs font-serif font-bold text-[#42190a]">100% Sri Lankan</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-[#85736e]">Global Reach</p>
                <p className="text-xs font-serif font-bold text-[#42190a]">Exporting to 30+ Countries</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-[#85736e]">Certifications</p>
                <p className="text-xs font-serif font-bold text-[#42190a]">Organic & GMP Certified</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-[#85736e]">Direct Shipping</p>
                <p className="text-xs font-serif font-bold text-[#42190a]">From Soil to Your Doorstep</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Our Estate Location Map Section */}
        <section className="relative rounded-2xl overflow-hidden shadow-premium h-[300px] md:h-[400px]">
          {/* Background image: plantation */}
          <div className="absolute inset-0">
            <Image 
              src="/images/estate_tea_plantation.png" 
              alt="Ceylon estate rolling green landscape" 
              fill 
              sizes="100vw"
              className="object-cover brightness-[0.8]"
            />
            <div className="absolute inset-0 bg-[#192a14]/25 pointer-events-none" />
          </div>

          {/* Floating Address Pin */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Glowing pin ripple */}
              <span className="absolute -top-1.5 -left-1.5 w-12 h-12 bg-[#ffdfa0] rounded-full opacity-35 animate-ping" />
              <div className="w-9 h-9 rounded-full bg-[#795900] text-white flex items-center justify-center relative shadow-md">
                <MapPin className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Bottom left info box */}
          <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur border border-[#eae7e7] p-5 rounded-lg max-w-[280px] shadow-premium space-y-1.5">
            <p className="text-[9px] font-bold uppercase tracking-wider text-[#795900]">Our Estate</p>
            <h4 className="font-serif font-bold text-[#42190a] text-sm">Experience the Harvest at Ceylon</h4>
            <p className="text-[10px] text-[#52443f] leading-relaxed">
              Visit our organic fields in Thanamalwila and see the sorting and hand-peeling process.
            </p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              className="inline-block text-[10px] uppercase font-bold tracking-wider text-[#795900] hover:underline pt-1.5"
            >
              Get Directions &gt;
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
