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
    
    let text = `*The Cinnamon Care - Contact Form Inquiry*\n`;
    text += `=================================\n`;
    text += `*Name:* ${formData.name}\n`;
    text += `*Email:* ${formData.email}\n`;
    text += `*Topic:* ${formData.topic}\n`;
    if (formData.message) {
      text += `*Message:* ${formData.message}\n`;
    }
    text += `=================================\n`;
    text += `Please get back to me. Thank you!`;

    const whatsappUrl = `https://wa.me/94772893030?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#fcf9f8] text-[#1b1c1c] overflow-x-hidden min-h-screen pb-16 pt-4">
      
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* 1. Header Title */}
        <div className="text-center max-w-[650px] mx-auto mb-16">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#795900] mb-2">Heritage & Provenance</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-[#42190a] leading-tight mb-4">
            Get in Touch
          </h1>
          <p className="text-sm md:text-base font-semibold text-[#52443f] leading-relaxed max-w-[540px] mx-auto">
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
                <p className="text-sm text-[#52443f] max-w-[360px] mx-auto">
                  Thank you for contacting The Cinnamon Care. Our trade representatives will respond to your business inquiry within 24 hours.
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
                <p className="text-sm text-[#52443f]/80 leading-relaxed">
                  19th Mile Post, Uduwela Road,<br />Thanamalwila, Sri Lanka.
                </p>
                <a href="tel:+94772893030" className="inline-flex items-center gap-1 text-xs text-[#42190a] font-bold hover:underline pt-1">
                  <Phone className="w-3.5 h-3.5 text-[#795900]" /> +94 77 289 3030
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

        {/* 4. Our Estate Location Map Section */}
        <section className="relative rounded-2xl overflow-hidden shadow-premium h-[300px] md:h-[400px]">
          {/* Background image: plantation */}
          <div className="absolute inset-0">
            <Image 
              src="/images/ceylon_spice_farm_contact.png" 
              alt="Ceylon organic spice farm aerial landscape" 
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
