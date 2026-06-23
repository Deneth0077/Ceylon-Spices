'use client';

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
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
    // Simulate API request
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", spice: "", message: "" });
    }, 800);
  };

  return (
    <div className="w-full flex flex-col bg-[#fcfbf9] overflow-hidden">
      
      {/* Top Banner / Hero Section */}
      <section className="relative w-full h-[250px] sm:h-[350px] flex items-center justify-center overflow-hidden z-10">
        <Image 
          src="/images/hero_spices_1781650500572.png" 
          alt="Contact and Export Spices Assortment" 
          fill
          priority
          className="object-cover filter brightness-[0.45] scale-105"
        />
        {/* Banner content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight text-shadow"
          >
            Contact and Export Inquiries
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-24 h-1 bg-cap-gold rounded-full my-4" 
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm sm:text-lg text-gray-200 tracking-wide font-sans max-w-xl"
          >
            Connect with us for premium Sri Lankan spices.
          </motion.p>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Column 1: Send Your Inquiry Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100"
            >
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-gray-900 mb-6">
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
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 font-sans">
                      Name
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#fcfbf9] text-gray-900 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cap-gold focus:border-transparent transition-all duration-300 text-sm font-sans shadow-inner" 
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 font-sans">
                      Business Email
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      placeholder="e.g., name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#fcfbf9] text-gray-900 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cap-gold focus:border-transparent transition-all duration-300 text-sm font-sans shadow-inner" 
                    />
                  </div>

                  {/* Dropdown field */}
                  <div>
                    <label htmlFor="spice" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 font-sans">
                      Spices Interested in
                    </label>
                    <div className="relative">
                      <select 
                        id="spice"
                        required
                        value={formData.spice}
                        onChange={(e) => setFormData({ ...formData, spice: e.target.value })}
                        className="w-full px-4 py-3 bg-[#fcfbf9] text-gray-900 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cap-gold focus:border-transparent transition-all duration-300 text-sm font-sans shadow-inner appearance-none cursor-pointer"
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
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 font-sans">
                      Message
                    </label>
                    <textarea 
                      id="message"
                      required
                      rows={5}
                      placeholder="Tell us about your needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#fcfbf9] text-gray-900 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cap-gold focus:border-transparent transition-all duration-300 text-sm font-sans shadow-inner resize-none" 
                    />
                  </div>

                  {/* Button */}
                  <button 
                    type="submit"
                    className="w-full py-4 bg-cap-green hover:bg-[#1a311b] text-white rounded-xl transition-all duration-300 font-bold text-xs tracking-widest uppercase shadow-md hover:shadow-xl hover:translate-y-[-2px] active:translate-y-0 cursor-pointer flex items-center justify-center gap-2 group"
                  >
                    SEND INQUIRY
                    <Send className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-1px]" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>

          {/* Column 2: Quick Contact & Location Details */}
          <div className="lg:col-span-5">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100 space-y-8"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-gray-900 mb-6">
                  Quick Contact & Location
                </h2>
                <div className="w-12 h-1 bg-cap-gold rounded-full mb-8" />
              </div>

              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/94771234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#25D366] hover:bg-[#20b858] text-white rounded-xl transition-all duration-300 font-bold text-xs tracking-widest uppercase shadow-md hover:shadow-xl hover:translate-y-[-2px] active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
              >
                {/* Inline WhatsApp SVG */}
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.012 14.077.99 11.72.99c-5.439 0-9.865 4.37-9.87 9.8-.001 1.777.464 3.51 1.346 5.048L2.2 20.8l5.09-1.332zm12.193-7.72c-.27-.135-1.597-.788-1.848-.879-.25-.09-.433-.135-.615.135-.183.27-.708.879-.868 1.058-.16.18-.32.203-.59.068-.27-.135-1.14-.42-2.172-1.34-.803-.717-1.345-1.603-1.502-1.873-.16-.27-.018-.416.117-.551.121-.122.27-.315.405-.473.135-.158.18-.27.27-.45.09-.18.045-.338-.023-.473-.068-.135-.615-1.487-.843-2.036-.222-.538-.445-.465-.615-.473-.16-.008-.343-.01-.525-.01-.18 0-.473.068-.72.338-.248.27-.946.923-.946 2.25s.968 2.61 1.103 2.79c.135.18 1.902 2.904 4.61 4.07.644.278 1.148.444 1.54.568.647.206 1.237.177 1.703.107.519-.078 1.597-.653 1.823-1.284.225-.63.225-1.17.158-1.284-.068-.113-.25-.18-.52-.315z"/>
                </svg>
                Chat on WhatsApp
              </a>

              {/* Phone Channels */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cap-cream text-cap-gold flex items-center justify-center shrink-0 shadow-inner">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="font-sans text-sm text-gray-700">
                    <p className="font-bold text-gray-900 mb-1">Call Channels</p>
                    <a href="tel:+94771234567" className="hover:text-cap-gold transition block">+94 77 123 4567</a>
                    <a href="tel:+94112345678" className="hover:text-cap-gold transition block">+94 11 234 5678</a>
                  </div>
                </div>
              </div>

              {/* Email Channels */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cap-cream text-cap-gold flex items-center justify-center shrink-0 shadow-inner">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="font-sans text-sm text-gray-700">
                    <p className="font-bold text-gray-900 mb-1">Email Accounts</p>
                    <a href="mailto:exports@srilankanspice.com" className="hover:text-cap-gold transition block">exports@srilankanspice.com</a>
                    <a href="mailto:info@srilankanspice.com" className="hover:text-cap-gold transition block">info@srilankanspice.com</a>
                  </div>
                </div>
              </div>

              {/* Location Map Embed */}
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-700 font-sans">
                  Sri Lankan Spice Exports HQ
                </p>
                <div className="relative w-full h-[270px] rounded-2xl overflow-hidden shadow-inner border border-gray-150 group">
                  <iframe 
                    src="https://maps.google.com/maps?q=Matale,%20Sri%20Lanka&t=&z=12&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy"
                    title="Matale Sri Lanka Map"
                    className="filter contrast-[0.9] group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm pointer-events-none flex items-center gap-1.5 z-10">
                    <MapPin className="w-3.5 h-3.5 text-cap-gold" />
                    <span className="text-[10px] font-bold text-gray-800 font-sans">Matale, Sri Lanka</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </section>
      
    </div>
  );
}
