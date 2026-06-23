import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cap-green text-white pt-20 md:pt-28 pb-8 relative rounded-tl-none rounded-tr-[4rem] sm:rounded-tr-[8rem] md:rounded-tr-[12rem] -mt-12 md:-mt-20 z-40 shadow-[0_-10px_30px_rgba(0,0,0,0.15)]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          
          {/* Column 1: Newsletter */}
          <div>
            <h3 className="text-sm font-bold tracking-[0.2em] mb-6 uppercase text-white font-sans">Newsletter</h3>
            <p className="text-xs text-gray-300 mb-6 font-sans">Get updates about spice harvests</p>
            <div className="flex flex-col gap-3 max-w-xs">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b0633b] text-sm w-full font-sans transition-all duration-300 shadow-sm border border-transparent focus:border-transparent" 
              />
              <button className="px-4 py-3 bg-[#b0633b] hover:bg-[#904f2e] text-white rounded-lg transition-all duration-300 font-bold text-xs tracking-widest shadow-md w-full hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
                SUBSCRIBE
              </button>
            </div>
          </div>
          
          {/* Column 2: Email Links */}
          <div>
            <h3 className="text-sm font-bold tracking-[0.2em] mb-6 uppercase text-white font-sans">Email</h3>
            <ul className="space-y-3 text-xs text-gray-300 font-sans">
              <li><a href="#" className="hover:text-[#cca43b] transition duration-300 block hover:translate-x-1 transform">About harvests</a></li>
              <li><a href="#" className="hover:text-[#cca43b] transition duration-300 block hover:translate-x-1 transform">Srilankan</a></li>
              <li><a href="#" className="hover:text-[#cca43b] transition duration-300 block hover:translate-x-1 transform">Plantins</a></li>
              <li><a href="#" className="hover:text-[#cca43b] transition duration-300 block hover:translate-x-1 transform">Processs</a></li>
              <li><a href="#" className="hover:text-[#cca43b] transition duration-300 block hover:translate-x-1 transform">Tilling</a></li>
              <li><a href="/products" className="hover:text-[#cca43b] transition duration-300 block hover:translate-x-1 transform">Shop</a></li>
              <li><a href="/contact" className="hover:text-[#cca43b] transition duration-300 block hover:translate-x-1 transform">Contact</a></li>
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <h3 className="text-sm font-bold tracking-[0.2em] mb-6 uppercase text-white font-sans">Contact</h3>
            <ul className="space-y-4 text-xs text-gray-300 font-sans">
              <li className="flex items-center gap-3 group">
                <Mail className="w-4 h-4 text-gray-400 group-hover:text-[#cca43b] transition-colors" />
                <span className="hover:text-[#cca43b] transition-colors cursor-pointer">spice@capceylon.com</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-gray-400 group-hover:text-[#cca43b] transition-colors" />
                <span className="hover:text-[#cca43b] transition-colors cursor-pointer">+94 777 557 058</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-8">
              <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white text-xs hover:bg-white hover:text-cap-green hover:border-white hover:scale-110 hover:rotate-12 transition-all duration-300 font-bold">f</a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white text-xs hover:bg-white hover:text-cap-green hover:border-white hover:scale-110 hover:rotate-12 transition-all duration-300 font-bold">ig</a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white text-xs hover:bg-white hover:text-cap-green hover:border-white hover:scale-110 hover:rotate-12 transition-all duration-300 font-bold">in</a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white text-xs hover:bg-white hover:text-cap-green hover:border-white hover:scale-110 hover:rotate-12 transition-all duration-300 font-bold">yt</a>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Line */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-xs text-gray-400 font-sans">
          <p>Copyright © {new Date().getFullYear()} capceylon.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
