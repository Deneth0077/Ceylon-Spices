'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Send, Globe, Award, ShieldCheck, Heart, ArrowRight } from "lucide-react";
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "Wholesale Opportunities",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let text = `*True Cinnamon Care - Contact Form Inquiry*\n`;
    text += `=================================\n`;
    text += `*Name:* ${formData.name}\n`;
    text += `*Email:* ${formData.email}\n`;
    if (formData.phone) {
      text += `*Phone:* ${formData.phone}\n`;
    }
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
    <div className="w-full bg-[#fcf9f8] text-[#1b1c1c] overflow-x-hidden min-h-screen pb-16 pt-6">
      
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* 1. Header Title */}
        <div className="text-center max-w-[650px] mx-auto mb-16">
  
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-[#42190a] leading-tight mb-4">
            Get in Touch
          </h1>
          <p className="text-base md:text-lg font-semibold text-[#52443f] leading-relaxed max-w-[580px] mx-auto">
            Whether you're looking for wholesale spice solutions or want to learn more about our organic farms in Sri Lanka, our Team is hear to assist.
          </p>
          <div className="w-16 h-1.5 bg-[#795900] mx-auto mt-4 rounded-full" />
        </div>

        {/* 2. Interactive Form & Side Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Left Column: Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-2xl border border-[#eae7e7] shadow-premium">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <span className="text-5xl">🌾</span>
                <h3 className="font-serif font-black text-2xl text-[#42190a]">Message Dispatched</h3>
                <p className="text-base text-[#52443f] max-w-[400px] mx-auto font-medium">
                  Thank you for contacting True Cinnamon Care. Our trade representatives will respond to your business inquiry within 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 bg-[#795900] text-white rounded-xl font-extrabold text-xs uppercase tracking-wider cursor-pointer shadow-md hover:bg-[#5c4300]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Full name input */}
                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#42190a]">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Alexander Wickram"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pb-3 pt-1 bg-transparent text-sm sm:text-base font-semibold text-[#1b1c1c] placeholder:text-[#85736e]/70 border-b-2 border-[#eae7e7] focus:outline-none focus:border-[#795900] transition-all"
                  />
                </div>

                {/* Email address input */}
                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#42190a]">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="alex@heritage.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pb-3 pt-1 bg-transparent text-sm sm:text-base font-semibold text-[#1b1c1c] placeholder:text-[#85736e]/70 border-b-2 border-[#eae7e7] focus:outline-none focus:border-[#795900] transition-all"
                  />
                </div>

                {/* Phone number input */}
                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#42190a]">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    placeholder="+94 77 289 3030"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pb-3 pt-1 bg-transparent text-sm sm:text-base font-semibold text-[#1b1c1c] placeholder:text-[#85736e]/70 border-b-2 border-[#eae7e7] focus:outline-none focus:border-[#795900] transition-all"
                  />
                </div>

                {/* Topic selector */}
                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#42190a]">
                    Topic of Inquiry
                  </label>
                  <select 
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full pb-3 pt-1 bg-transparent text-sm sm:text-base font-bold text-[#1b1c1c] border-b-2 border-[#eae7e7] focus:outline-none focus:border-[#795900] cursor-pointer"
                  >
                    <option value="Wholesale Opportunities">Wholesale Opportunities</option>
                    <option value="Export & Shipping">Export & Shipping</option>
                    <option value="Agro-Tourism & Sourcing">Agro-Tourism & Sourcing</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>

                {/* Message input */}
                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#42190a]">
                    Message
                  </label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Tell us about your interest in Ceylon's finest spices..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pb-3 pt-1 bg-transparent text-sm sm:text-base font-semibold text-[#1b1c1c] placeholder:text-[#85736e]/70 border-b-2 border-[#eae7e7] focus:outline-none focus:border-[#795900] transition-all resize-none"
                  />
                </div>

                <div className="pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-[#85736e] font-medium">
                  <span>By sending this message, you agree to our privacy policy regarding data handling.</span>
                  <button 
                    type="submit"
                    className="px-8 py-3.5 bg-[#ffc641] hover:bg-[#ffdfa0] text-[#42190a] rounded-xl font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer flex-shrink-0"
                  >
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Right Column: Office info cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Top Logo Card */}
            <div className="bg-[#f6f3f2]/80 p-6 rounded-2xl border border-[#eae7e7] flex items-center justify-center shadow-sm">
              <div className="relative w-56 h-28 flex items-center justify-center">
                <TransparentImage
                  src="/images/logo.jpg"
                  alt="True Cinnamon Care Logo"
                  threshold={240}
                  className="max-w-full max-h-full object-contain filter drop-shadow-sm mix-blend-multiply"
                />
              </div>
            </div>

            {/* Headquarters Card */}
            <div className="bg-[#f6f3f2]/80 p-7 rounded-2xl border border-[#eae7e7] flex gap-5 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#42190a]/10 flex items-center justify-center text-[#42190a] flex-shrink-0 mt-0.5">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#795900]">
                 Colombo Head Office, Sri Lanka 
                </p>
                <h4 className="font-serif font-black text-[#42190a] text-lg sm:text-xl">
                  True Cinnamon Care (Pvt) Ltd
                </h4>
                <p className="text-sm sm:text-base font-semibold text-[#2b1810] leading-relaxed">
                  No. 11/10, Centerpoint, Thumbowila, Piliyandala, 10300, Western Province, Sri Lanka.
                </p>
                <a href="tel:+94772893030" className="inline-flex items-center gap-2 text-sm sm:text-base text-[#795900] font-black hover:text-[#528431] pt-1 transition-colors">
                  <Phone className="w-4 h-4 text-[#795900]" /> +94 77 289 3030
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 4. Our Estate Location Map Section */}
        <section className="relative rounded-3xl overflow-hidden shadow-premium h-[320px] md:h-[420px]">
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
              <div className="w-10 h-10 rounded-full bg-[#795900] text-white flex items-center justify-center relative shadow-md">
                <MapPin className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Bottom left info box */}
          <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur border border-[#eae7e7] p-6 rounded-2xl max-w-[320px] shadow-premium space-y-2">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#795900]">Our Estate</p>
            <h4 className="font-serif font-black text-[#42190a] text-base">Experience the Harvest at Ceylon</h4>
            <p className="text-xs text-[#52443f] leading-relaxed font-semibold">
              Visit our field in Denegama-Matara and see the sorting, hand-peeling and manufacturing process
            </p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=6.126765,80.639771" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-xs uppercase font-black tracking-wider text-[#795900] hover:underline pt-1"
            >
              Get Directions &gt;
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
