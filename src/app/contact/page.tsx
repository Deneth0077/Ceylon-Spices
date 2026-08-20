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
    
    let text = `*TRUE CINNAMON CARE* | Export Quality Ceylon Spices\n`;
    text += `--------------------------------------------------\n`;
    text += `*CONTACT FORM INQUIRY*\n\n`;
    text += `*SENDER INFORMATION:*\n`;
    text += `- Full Name: ${formData.name}\n`;
    text += `- Email Address: ${formData.email}\n`;
    if (formData.phone) {
      text += `- Phone / WhatsApp: ${formData.phone}\n`;
    }
    text += `- Inquiry Topic: ${formData.topic}\n`;
    if (formData.message) {
      text += `\n*MESSAGE DETAILS:*\n`;
      text += `"${formData.message}"\n\n`;
    }
    text += `--------------------------------------------------\n`;
    text += `Kindly confirm receipt and provide response at your earliest convenience.\n\n`;
    text += `Thank you!\n`;
    text += `--------------------------------------------------\n`;
    text += `*True Cinnamon Care* | Single-Origin Ceylon Spices\n`;
    text += `Hotline: +94 77 289 3030`;

    const whatsappUrl = `https://wa.me/94772893030?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#fcf9f8] text-[#1b1c1c] overflow-x-hidden min-h-screen pb-16 pt-6">
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* 1. Header Title */}
        <div className="text-center max-w-[650px] mx-auto mb-16">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-[#42190a] leading-tight mb-4">
            Get in Touch
          </h1>
          <p className="text-base md:text-lg font-semibold text-[#52443f] leading-relaxed max-w-[580px] mx-auto">
            Whether you&apos;re looking for wholesale spice solutions or want to learn more about our organic farms in Sri Lanka, our Team is here to assist.
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

      </div>

      {/* 4. Our Estate & Factory Location Map Section - Extended Screen Width */}
      <div className="w-full px-2 sm:px-6 md:px-10 lg:px-12 my-16">
        <section className="space-y-6 w-full max-w-[1600px] mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-2 px-4">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#795900]">
              Factory Location & Agro-Climatic Zones
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#42190a]">
              Strategic Location in Sri Lanka&apos;s Prime Spice Belt
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-[#52443f] leading-relaxed">
              Our state-of-the-art processing facility is situated in Hakmana, Matara within the pristine Wet Zone, conveniently connected via expressway from Colombo (CMB) and Mattala Airports.
            </p>
          </div>

          {/* Full-Width Extended Map Banner Card */}
          <div className="relative rounded-[2.5rem] overflow-hidden border-2 border-[#eae7e7] shadow-2xl bg-white group">
            
            {/* Original Map Image Banner */}
            <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[620px] bg-[#dfded6]">
              <img 
                src="/images/factory_location_map.png" 
                alt="Sri Lanka Agro-Climatic Spice Zones and Factory Route Map from Colombo to Hakmana Matara" 
                className="w-full h-full object-contain md:object-cover object-center"
              />
            </div>

            {/* Info Box Positioned comfortably on the Far Left in empty space - Balanced Dimensions */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-10 lg:left-14 z-10 bg-white/95 backdrop-blur-md border border-[#eae7e7] p-5 sm:p-6 rounded-3xl max-w-[320px] sm:max-w-[370px] md:max-w-[400px] shadow-[0_20px_40px_rgba(66,25,10,0.15)] space-y-3.5">
              <div className="flex items-center gap-2 text-[#795900] text-[11px] font-extrabold uppercase tracking-widest">
                <MapPin className="w-4 h-4 text-[#8e4c2e] shrink-0" />
                <span>Our Manufacturing Facility</span>
              </div>
              
              <h4 className="font-serif font-extrabold text-[#42190a] text-lg sm:text-xl leading-snug">
                Hakmana, Matara – Sri Lanka
              </h4>
              
              <p className="text-xs sm:text-sm text-[#52443f] leading-relaxed font-medium">
                Located in Southern Sri Lanka&apos;s rich cinnamon harvesting zone. Visitors and wholesale partners can observe our eco-friendly bark peeling, solar drying, and certified packaging.
              </p>

              <div className="pt-1 flex items-center justify-between gap-3 flex-wrap">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Hakmana,Matara,Sri+Lanka" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4.5 py-2.5 bg-[#795900] hover:bg-[#5c4300] text-white text-xs font-extrabold uppercase tracking-wider rounded-xl shadow-md transition-all shrink-0"
                >
                  Get Directions <ArrowRight className="w-3.5 h-3.5" />
                </a>
                
                <span className="px-3 py-1.5 bg-[#e8f3e8] text-[#2d5a27] text-[10px] font-bold uppercase tracking-wider rounded-lg border border-[#2d5a27]/20 shrink-0">
                  Wet Zone Eco Estate
                </span>
              </div>
            </div>

          </div>
        </section>
      </div>

    </div>
  );
}
