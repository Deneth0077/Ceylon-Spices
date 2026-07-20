import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import TransparentImage from "./TransparentImage";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-[#eae7e7] pt-20 pb-8 relative z-30 border-t border-[#eae7e7]/10">
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* Column 1: BRAND DETAIL */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block self-start">
              <img 
                src="/images/footer_logo.png" 
                alt="The Cinnamon Care Logo" 
                className="h-12 md:h-16 w-auto object-contain" 
              />
            </Link>
            <p className="text-xs text-[#eae7e7]/70 leading-relaxed max-w-[270px]">
              Dedicated to the preservation of traditional organic farming and the global distribution of Sri Lanka's finest spices. Culinary heritage since 1826.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-[#eae7e7]/75 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V1H13c-3.3 0-4 1.7-4 4v3z" />
                </svg>
              </a>
              <a href="#" className="text-[#eae7e7]/75 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Column 2: DISCOVER */}
          <div className="flex flex-col gap-5">
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white font-sans">
              Discover
            </h4>
            <ul className="space-y-3 text-xs text-[#eae7e7]/70 font-medium">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Join the Spice Trail
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Wholesale Spices
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: COMPANY / INFO */}
          <div className="flex flex-col gap-5">
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white font-sans">
              Support
            </h4>
            <ul className="space-y-3 text-xs text-[#eae7e7]/70 font-medium">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: GET IN TOUCH */}
          <div className="flex flex-col gap-5">
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white font-sans">
              Stay Connected
            </h4>
            <div className="flex gap-2 max-w-[280px]">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="px-3.5 py-2 bg-[#212121] text-white rounded placeholder-[#85736e] font-sans focus:outline-none border border-white/10 w-full text-xs" 
              />
              <button className="px-4 py-2 bg-[#795900] hover:bg-[#5c4300] text-white rounded font-bold text-xs uppercase transition-colors cursor-pointer">
                Subscribe
              </button>
            </div>
            
            <ul className="space-y-3.5 text-xs text-[#eae7e7]/70 font-medium mt-1">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#eae7e7]/50 mt-0.5" strokeWidth={1.5} />
                <a href="mailto:hello@ceylonartisans.com" className="hover:text-white transition-colors leading-tight">
                  hello@ceylonartisans.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#eae7e7]/50 mt-0.5" strokeWidth={1.5} />
                <a href="tel:+94777557058" className="hover:text-white transition-colors leading-tight">
                  +94 777 557 058
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#eae7e7]/50 mt-0.5" strokeWidth={1.5} />
                <span className="leading-tight">
                  19th Mile Post, Uduwela Rd, Thanamalwila, Sri Lanka.
                </span>
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* Divider line and copyright block */}
        <div className="border-t border-[#eae7e7]/10 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] md:text-xs text-[#eae7e7]/40 font-medium font-sans select-none">
          <p className="mb-2 sm:mb-0">© {new Date().getFullYear()} The Cinnamon Care. Handcrafted Heritage from Sri Lanka.</p>
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
