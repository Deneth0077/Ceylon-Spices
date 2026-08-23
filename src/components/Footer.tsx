'use client';

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, CheckCircle2, Loader2 } from "lucide-react";
import TransparentImage from "./TransparentImage";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 600);
  };

  return (
    <footer className="bg-black text-[#eae7e7] pt-16 pb-8 relative z-30 border-t border-white/10">
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          
          {/* Column 1: GET TO KNOW US */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-extrabold tracking-[0.18em] uppercase text-white font-sans">
              GET TO KNOW US
            </h4>
            <Link href="/" className="inline-block self-start my-2">
              <img 
                src="/images/footer_logo.png" 
                alt="True Cinnamon Care Logo" 
                className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain transition-transform hover:scale-[1.02] filter brightness-0 invert opacity-95" 
              />
            </Link>
            <p className="text-xs text-[#eae7e7]/75 leading-relaxed max-w-[320px] font-medium">
              True Cinnamon is dedicated to bringing you the purest, authentic spices directly from our dedicated Sustainable cultivation in Sri Lanka.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-2">
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#eae7e7]/75 hover:text-white hover:border-white transition-colors" aria-label="Facebook">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V1H13c-3.3 0-4 1.7-4 4v3z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#eae7e7]/75 hover:text-white hover:border-white transition-colors" aria-label="Instagram">
                <svg className="w-3.5 h-3.5 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#eae7e7]/75 hover:text-white hover:border-white transition-colors" aria-label="LinkedIn">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#eae7e7]/75 hover:text-white hover:border-white transition-colors" aria-label="YouTube">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Column 2: EXPLORE */}
          <div className="flex flex-col gap-5">
            <h4 className="text-xs font-extrabold tracking-[0.18em] uppercase text-white font-sans">
              EXPLORE
            </h4>
            <ul className="space-y-3.5 text-xs text-[#eae7e7]/75 font-medium">
              <li>
                <Link href="/products/ceylon-cinnamon" className="hover:text-white transition-colors">
                  The Ceylon Cinnamon
                </Link>
              </li>
              <li>
                <Link href="/products/the-difference" className="hover:text-white transition-colors">
                  The Difference
                </Link>
              </li>
              <li>
                <Link href="/heritage-of-wellness" className="hover:text-white transition-colors">
                  The Heritage of Wellness
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Browse All Products
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: STAY CONNECTED */}
          <div className="flex flex-col gap-5">
            <div className="space-y-1">
              <h4 className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#ffc641] font-sans">
                STAY CONNECTED
              </h4>
              <p className="text-[11px] text-white/60 font-medium">
                Subscribe for authentic Ceylon spice updates & export insights.
              </p>
            </div>

            {/* Newsletter Interactive Form */}
            {status === "success" ? (
              <div className="p-3.5 bg-[#486338]/20 border border-[#81b752]/40 rounded-xl flex items-center justify-between gap-3 max-w-[360px] animate-fadeIn">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#81b752] flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-white">Thank you for subscribing!</p>
                    <p className="text-[10px] text-white/70">You&apos;ll receive our latest updates & export insights.</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setEmail("");
                  }}
                  className="text-[10px] text-[#ffc641] hover:underline flex-shrink-0 font-medium"
                >
                  Reset
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center max-w-[360px] group">
                <div className="absolute left-3.5 text-white/40 group-focus-within:text-[#ffc641] transition-colors pointer-events-none">
                  <Mail className="w-4 h-4" />
                </div>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com" 
                  className="w-full pl-10 pr-28 py-3 bg-white/10 text-white rounded-xl placeholder-white/40 border border-white/15 focus:border-[#ffc641] focus:bg-white/15 focus:outline-none text-xs font-medium transition-all shadow-inner" 
                />
                <button 
                  type="submit"
                  disabled={status === "loading"}
                  className="absolute right-1.5 px-4 py-2 bg-gradient-to-r from-[#ab5e3b] to-[#8c502b] hover:from-[#c8734a] hover:to-[#9e5c33] text-white rounded-lg font-extrabold text-[11px] uppercase tracking-wider transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer flex-shrink-0 disabled:opacity-75 flex items-center gap-1.5"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>...</span>
                    </>
                  ) : (
                    "SUBSCRIBE"
                  )}
                </button>
              </form>
            )}

            {/* Email Contact Link */}
            <a 
              href="mailto:info@truecca.com" 
              className="inline-flex items-center gap-2.5 text-xs text-white/80 hover:text-[#ffc641] font-semibold transition-colors group max-w-fit"
            >
              <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#ffc641] group-hover:bg-[#ffc641]/10 group-hover:border-[#ffc641]/30 transition-all">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <span>info@truecca.com</span>
            </a>

            {/* Premium QUESTIONS & Hotline Card */}
            <div className="p-4.5 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/15 shadow-xl hover:border-[#ffc641]/40 transition-all max-w-[360px]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-serif font-black uppercase tracking-wider text-[#ffc641]">
                  QUESTIONS?
                </span>
                <span className="text-[10px] uppercase tracking-widest font-extrabold px-2.5 py-0.5 rounded-full bg-[#ffc641]/15 text-[#ffc641] border border-[#ffc641]/30">
                  Hotline
                </span>
              </div>
              <a 
                href="tel:+94772893030" 
                className="flex items-center gap-3 text-lg sm:text-xl font-black text-white hover:text-[#ffc641] transition-colors tracking-tight font-sans group/phone"
              >
                <div className="w-9 h-9 rounded-xl bg-[#ffc641] text-[#2c1810] flex items-center justify-center shadow-md flex-shrink-0 group-hover/phone:scale-105 transition-transform">
                  <Phone className="w-4 h-4 fill-current" strokeWidth={2.5} />
                </div>
                <span>+94 77 289 3030</span>
              </a>
            </div>

          </div>
          
        </div>
        
        {/* Divider line and copyright block */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] md:text-xs text-[#eae7e7]/60 font-medium font-sans select-none">
          <p className="mb-2 sm:mb-0">© {new Date().getFullYear()} True Cinnamon Care Pvt Ltd. Handcrafted Heritage from Sri Lanka.</p>
          <p className="text-right">Design by Ceylon Clicks</p>
        </div>
      </div>
      
      {/* Centered White Cinnamon Bush Background Watermark */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[500px] md:w-[800px] h-[350px] pointer-events-none z-0 overflow-hidden opacity-[0.03] select-none">
        <TransparentImage 
          src="/images/cinnamon_bush.png" 
          alt="" 
          className="w-full h-full object-fill object-bottom invert brightness-200" 
        />
      </div>
    </footer>
  );
}

