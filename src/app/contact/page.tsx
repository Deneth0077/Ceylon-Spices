'use client';

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

// Framer Motion Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    spice: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", spice: "", message: "" });
    }, 800);
  };

  return (
    <div className="w-full flex flex-col bg-[#ede4d7] overflow-hidden">
      
      {/* Top Banner / Hero Section */}
      <section className="relative w-full h-[320px] sm:h-[400px] flex items-center justify-center overflow-hidden z-10">
        <Image 
          src="/images/hero_spices_1781650500572.png" 
          alt="Contact and Export Spices Assortment" 
          fill
          sizes="100vw"
          priority
          className="object-cover filter brightness-[0.8] contrast-[1.02] scale-100"
        />
        {/* Soft vignette/dimming overlay */}
        <div className="absolute inset-0 bg-black/15 z-10" />

        {/* Banner content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
          <div className="relative">
            {/* Left Leaf branch */}
            <svg className="w-14 h-14 absolute -left-16 top-1 text-white/70 pointer-events-none hidden lg:block" fill="none" viewBox="0 0 64 64" stroke="currentColor" strokeWidth={1}>
              <path d="M10,50 Q25,45 45,15" />
              <path d="M45,15 Q50,10 52,8 Q46,14 45,15" />
              <path d="M25,35 Q20,30 15,32 Q22,38 25,35" />
              <path d="M30,30 Q35,22 40,24 Q32,28 30,30" />
              <path d="M35,25 Q32,15 25,18 Q32,23 35,25" />
              <path d="M40,20 Q48,15 46,10 Q42,16 40,20" />
            </svg>

            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight select-none"
            >
              Contact and Export Inquiries
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-20 h-[2px] bg-[#cca43b]/90 rounded-full my-3" 
          />

          <div className="relative">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-sm sm:text-base text-white tracking-wide font-sans max-w-xl select-none"
            >
              Connect with us for premium Sri Lankan spices.
            </motion.p>
            {/* Right Leaf branch */}
            <svg className="w-14 h-14 absolute -right-16 -top-4 text-white/70 pointer-events-none hidden lg:block" fill="none" viewBox="0 0 64 64" stroke="currentColor" strokeWidth={1}>
              <path d="M54,14 Q39,19 19,49" />
              <path d="M19,49 Q14,54 12,56 Q18,50 19,49" />
              <path d="M39,29 Q44,34 49,32 Q42,26 39,29" />
              <path d="M34,34 Q29,42 24,40 Q32,36 34,34" />
              <path d="M29,39 Q32,49 39,46 Q32,41 29,39" />
              <path d="M24,44 Q16,49 18,54 Q22,48 24,44" />
            </svg>
          </div>

          {/* REQUEST A FREE CONSULTATION Button */}
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            onClick={() => document.getElementById('inquiry-card')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-6 bg-[#cca43b] hover:bg-[#b58f2f] text-white rounded-full py-3 px-8 font-sans font-bold text-xs tracking-wider uppercase shadow-md transition-all duration-300 hover:-translate-y-[1px] active:translate-y-0 cursor-pointer"
          >
            REQUEST A FREE CONSULTATION
          </motion.button>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="max-w-5xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-16 sm:py-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
          
          {/* Card 1: Send Your Inquiry Form */}
          <motion.div 
            id="inquiry-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="bg-gradient-to-br from-[#ebdcb9]/40 via-white to-white rounded-[24px] p-8 sm:p-10 border border-[#b48648]/15 shadow-[0_15px_45px_rgba(40,30,20,0.04)]"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-8 font-sans tracking-tight">
              Send Your Inquiry
            </h2>
            
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-3"
              >
                <span className="text-3xl">✅</span>
                <h3 className="font-bold text-lg">Thank You for Your Inquiry!</h3>
                <p className="text-sm text-emerald-700 max-w-md mx-auto">
                  We have received your message. Our export team will review your requirements and get back to you within 24 business hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs tracking-wider uppercase rounded-xl transition duration-300 shadow-sm"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <div>
                  <label htmlFor="name" className="block text-[10px] font-extrabold uppercase tracking-widest text-[#5c4f3d] mb-2 font-sans">
                    NAME
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white text-stone-800 border border-[#dfd4c6] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#cca43b] focus:border-[#cca43b] transition-all duration-300 text-xs font-sans shadow-sm placeholder-stone-400/80" 
                  />
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-[10px] font-extrabold uppercase tracking-widest text-[#5c4f3d] mb-2 font-sans">
                    BUSINESS EMAIL
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    placeholder="e.g., name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white text-stone-800 border border-[#dfd4c6] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#cca43b] focus:border-[#cca43b] transition-all duration-300 text-xs font-sans shadow-sm placeholder-stone-400/80" 
                  />
                </div>

                {/* Dropdown field */}
                <div>
                  <label htmlFor="spice" className="block text-[10px] font-extrabold uppercase tracking-widest text-[#5c4f3d] mb-2 font-sans">
                    SPICES INTERESTED IN
                  </label>
                  <div className="relative">
                    <select 
                      id="spice"
                      required
                      value={formData.spice}
                      onChange={(e) => setFormData({ ...formData, spice: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white text-stone-800 border border-[#dfd4c6] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#cca43b] focus:border-[#cca43b] transition-all duration-300 text-xs font-sans shadow-sm appearance-none cursor-pointer placeholder-stone-400/80"
                    >
                      <option value="" disabled>Select Spices...</option>
                      <option value="cinnamon">Ceylon Cinnamon</option>
                      <option value="pepper">Organic Black Pepper</option>
                      <option value="cardamom">Green Cardamom</option>
                      <option value="cloves">Organic Dried Cloves</option>
                      <option value="turmeric">Organic Turmeric Powder</option>
                      <option value="multiple">Multiple Spices / Wholesales</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-[10px] font-extrabold uppercase tracking-widest text-[#5c4f3d] mb-2 font-sans">
                    MESSAGE
                  </label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell us about your needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white text-stone-800 border border-[#dfd4c6] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#cca43b] focus:border-[#cca43b] transition-all duration-300 text-xs font-sans shadow-sm resize-none placeholder-stone-400/80" 
                  />
                </div>

                {/* Button */}
                <button 
                  type="submit"
                  className="w-full py-3 bg-[#1f3621] hover:bg-[#152516] text-white rounded-full transition-all duration-300 font-bold text-xs tracking-widest uppercase shadow-md flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-[1px] active:translate-y-0 group"
                >
                  SEND INQUIRY
                </button>
              </form>
            )}
          </motion.div>

          {/* Card 2: Quick Contact & Location Details */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="bg-gradient-to-br from-[#ebdcb9]/40 via-white to-white rounded-[24px] p-8 sm:p-10 border border-[#b48648]/15 shadow-[0_15px_45px_rgba(40,30,20,0.04)] space-y-8"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4 font-sans tracking-tight">
                Quick Contact &<br />Location
              </h2>
              <div className="w-12 h-[2.5px] bg-[#cca43b] rounded-full mb-2" />
            </div>

            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/94771234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#4bae6f] hover:bg-[#3d915b] text-white rounded-full transition-all duration-300 font-bold text-xs tracking-widest uppercase shadow-md flex items-center justify-center gap-2 hover:-translate-y-[1px] active:translate-y-0 group"
            >
              {/* Inline WhatsApp SVG */}
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.012 14.077.99 11.72.99c-5.439 0-9.865 4.37-9.87 9.8-.001 1.777.464 3.51 1.346 5.048L2.2 20.8l5.09-1.332zm12.193-7.72c-.27-.135-1.597-.788-1.848-.879-.25-.09-.433-.135-.615.135-.183.27-.708.879-.868 1.058-.16.18-.32.203-.59.068-.27-.135-1.14-.42-2.172-1.34-.803-.717-1.345-1.603-1.502-1.873-.16-.27-.018-.416.117-.551.121-.122.27-.315.405-.473.135-.158.18-.27.27-.45.09-.18.045-.338-.023-.473-.068-.135-.615-1.487-.843-2.036-.222-.538-.445-.465-.615-.473-.16-.008-.343-.01-.525-.01-.18 0-.473.068-.72.338-.248.27-.946.923-.946 2.25s.968 2.61 1.103 2.79c.135.18 1.902 2.904 4.61 4.07.644.278 1.148.444 1.54.568.647.206 1.237.177 1.703.107.519-.078 1.597-.653 1.823-1.284.225-.63.225-1.17.158-1.284-.068-.113-.25-.18-.52-.315z"/>
              </svg>
              Chat on WhatsApp
            </a>

            {/* Phone Channels */}
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-[#f4e6d7] text-[#cca43b] flex items-center justify-center shrink-0 shadow-sm">
                <Phone className="w-4 h-4" strokeWidth={1.5} />
              </div>
              <div className="font-sans text-xs sm:text-sm text-stone-700">
                <p className="font-bold text-stone-950 mb-1 select-none">Call Channels</p>
                <a href="tel:+94771234567" className="hover:text-[#cca43b] transition duration-300 block font-medium">+94 77 123 4567</a>
                <a href="tel:+94112345678" className="hover:text-[#cca43b] transition duration-300 block font-medium">+94 11 234 5678</a>
              </div>
            </div>

            {/* Email Channels */}
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-[#f4e6d7] text-[#cca43b] flex items-center justify-center shrink-0 shadow-sm">
                <Mail className="w-4 h-4" strokeWidth={1.5} />
              </div>
              <div className="font-sans text-xs sm:text-sm text-stone-700">
                <p className="font-bold text-stone-950 mb-1 select-none">Email Accounts</p>
                <a href="mailto:exports@srilankanspice.com" className="hover:text-[#cca43b] transition duration-300 block font-medium">exports@srilankanspice.com</a>
                <a href="mailto:info@srilankanspice.com" className="hover:text-[#cca43b] transition duration-300 block font-medium">info@srilankanspice.com</a>
              </div>
            </div>

            {/* Location Map Embed */}
            <div className="space-y-3 pt-2">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#5c4f3d] font-sans">
                SRI LANKAN SPICE EXPORTS HQ
              </p>
              <div className="relative w-full h-[220px] rounded-[16px] overflow-hidden shadow-inner border border-[#dfd4c6] group">
                <iframe 
                  src="https://maps.google.com/maps?q=Matale,%20Sri%20Lanka&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy"
                  title="Matale Sri Lanka Map"
                  className="filter contrast-[0.92] group-hover:scale-[1.015] transition-transform duration-[1.5s] ease-out"
                />
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-stone-200/60 shadow-sm pointer-events-none flex items-center gap-1.5 z-10 select-none">
                  <MapPin className="w-3.5 h-3.5 text-[#cca43b]" />
                  <span className="text-[10px] font-bold text-stone-850 font-sans">Matale, Sri Lanka</span>
                </div>
              </div>
            </div>

          </motion.div>
          
        </div>
      </section>
      
    </div>
  );
}
