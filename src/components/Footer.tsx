import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#c9c8ad] text-stone-850 pt-20 pb-8 relative z-40 border-t border-stone-800/5 shadow-[0_-8px_30px_rgba(0,0,0,0.05)]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          
          {/* Column 1: GET TO KNOW US */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-stone-900 font-sans">
              GET TO KNOW US
            </h3>
            
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center group">
                <img
                  src="/images/logo-v4.png"
                  alt="True Cinnamon Care Logo"
                  className="h-10 md:h-12 w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </Link>
            </div>

            <p className="text-xs text-stone-700 leading-relaxed font-sans max-w-[270px]">
              True Cinnamon is dedicated to bringing you the purest, authentic spices directly from our dedicated farming families in Sri Lanka.
            </p>

            {/* Outlined Circular Social Icons */}
            <div className="flex gap-3 mt-2">
              <a href="#" className="w-8 h-8 rounded-full border border-stone-800/30 flex items-center justify-center text-stone-800 hover:bg-[#ac623f] hover:text-white hover:border-[#ac623f] transition-all duration-300 shadow-sm" aria-label="Facebook">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V1H13c-3.3 0-4 1.7-4 4v3z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-stone-800/30 flex items-center justify-center text-stone-800 hover:bg-[#ac623f] hover:text-white hover:border-[#ac623f] transition-all duration-300 shadow-sm" aria-label="Instagram">
                <svg className="w-3.5 h-3.5 stroke-current stroke-[1.8] fill-none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-stone-800/30 flex items-center justify-center text-stone-800 hover:bg-[#ac623f] hover:text-white hover:border-[#ac623f] transition-all duration-300 shadow-sm" aria-label="LinkedIn">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-stone-800/30 flex items-center justify-center text-stone-800 hover:bg-[#ac623f] hover:text-white hover:border-[#ac623f] transition-all duration-300 shadow-sm" aria-label="YouTube">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163c-.272-1.022-1.074-1.824-2.096-2.097C19.558 3.5 12 3.5 12 3.5s-7.558 0-9.402.566C1.776 4.339.974 5.141.702 6.163 0 8.01 0 12 0 12s0 3.99.702 5.837c.272 1.022 1.074 1.824 2.096 2.097C4.442 20.5 12 20.5 12 20.5s7.558 0 9.402-.566c1.022-.273 1.824-1.075 2.096-2.097C24 15.99 24 12 24 12s0-3.99-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Column 2: EXPLORE TRUE FLAVORS */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-stone-900 font-sans">
              EXPLORE TRUE FLAVORS
            </h3>
            
            <ul className="space-y-3.5 text-xs md:text-sm text-stone-700 font-sans font-medium">
              <li>
                <Link href="/products" className="hover:text-[#ac623f] transition duration-300 block hover:translate-x-0.5">
                  Ceylon Cinnamon
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#ac623f] transition duration-300 block hover:translate-x-0.5">
                  Whole Black Pepper
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#ac623f] transition duration-300 block hover:translate-x-0.5">
                  Cardamom Pods
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#ac623f] transition duration-300 block hover:translate-x-0.5">
                  Browse All Products
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#ac623f] transition duration-300 block hover:translate-x-0.5">
                  Recipe Ideas
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: STAY CONNECTED */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-stone-900 font-sans">
              STAY CONNECTED
            </h3>
            
            <div className="flex flex-col gap-3 max-w-[280px]">
              <input 
                type="email" 
                placeholder="your.email@example.com" 
                className="px-4 py-2.5 bg-white text-stone-850 rounded-lg placeholder-stone-400 font-sans focus:outline-none focus:ring-1 focus:ring-[#ac623f] border border-stone-800/10 w-full text-xs shadow-inner" 
              />
              <button className="px-4 py-2.5 bg-[#ac623f] hover:bg-[#8f4e30] text-white rounded-lg transition-all duration-300 font-bold text-xs tracking-widest shadow-md w-full cursor-pointer hover:-translate-y-[1px] active:translate-y-0">
                SUBSCRIBE
              </button>
            </div>

            <ul className="space-y-3.5 text-xs md:text-sm text-stone-700 font-sans font-medium mt-1">
              <li className="flex items-center gap-3">
                <Mail className="w-4.5 h-4.5 text-stone-600" strokeWidth={1.5} />
                <a href="mailto:spice@capceylon.com" className="hover:text-[#ac623f] transition-colors">
                  spice@capceylon.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4.5 h-4.5 text-stone-600" strokeWidth={1.5} />
                <a href="tel:+94777557058" className="hover:text-[#ac623f] transition-colors">
                  +94 777 557 058
                </a>
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* Divider line and copyright block */}
        <div className="border-t border-stone-800/10 mt-16 pt-8 text-center text-[10px] md:text-xs text-stone-600 font-sans font-medium select-none">
          <p>Copyright © {new Date().getFullYear()} capceylon.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
