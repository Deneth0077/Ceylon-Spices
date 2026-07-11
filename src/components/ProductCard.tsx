'use client';

import Link from "next/link";


interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  origin?: string;
  badgeClass?: string;
  buttonClass?: string;
  bgGlowClass?: string;
}

export default function ProductCard({ 
  id,
  image, 
  title, 
  description, 
  origin = "Sri Lanka", 
  badgeClass = "bg-[#f5ece0] text-[#ab5e3b]",
  buttonClass = "bg-[#ab5e3b] hover:bg-[#8e4c2e] text-white",
  bgGlowClass = "from-amber-600/20 to-orange-400/25"
}: ProductCardProps) {


  return (
    <div className="bg-gradient-to-b from-white to-[#fdfcfb] rounded-[28px] border border-[#b48648]/14 p-6 flex flex-col h-full hover:shadow-[0_20px_50px_rgba(139,90,43,0.08)] hover:-translate-y-1.5 transition-all duration-500 group relative overflow-hidden">
      
      {/* Subtle gold top border on hover */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#ebdcb9] via-[#b48648] to-[#ebdcb9] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      
      {/* Origin Badge */}
      <div className="absolute top-4 left-4 z-20">
        <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#b48648]/20 text-[9px] font-extrabold uppercase tracking-widest text-[#ab5e3b] shadow-sm select-none">
          {origin}
        </span>
      </div>

      {/* Clickable Image Container */}
      <Link 
        href={`/products/${id}`} 
        className="relative w-full aspect-[1.15/1] mb-5 rounded-2xl bg-gradient-to-b from-[#fbfaf6] to-[#f4eee2] border border-[#b48648]/10 overflow-hidden flex items-center justify-center group/img cursor-pointer shadow-[inset_0_2px_8px_rgba(0,0,0,0.02)]"
      >
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#b48648]/30 m-2 rounded-tl opacity-60 group-hover/img:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#b48648]/30 m-2 rounded-br opacity-60 group-hover/img:opacity-100 transition-opacity duration-300" />

        {/* Soft radial light glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7)_0%,transparent_75%)] opacity-90" />
        
        {/* Soft, blurred colorful glowing halo background */}
        <div className={`absolute inset-8 rounded-full bg-gradient-to-br ${bgGlowClass} blur-2xl opacity-40 group-hover/img:opacity-60 transition-opacity duration-500`} />
        
        <div className="relative w-[82%] h-[82%] flex items-center justify-center z-10 transition-transform duration-700 ease-out group-hover:scale-110">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-contain mix-blend-multiply drop-shadow-[0_8px_16px_rgba(60,45,35,0.14)]"
          />
        </div>
      </Link>
      
      {/* Clickable Title */}
      <Link href={`/products/${id}`} className="block group cursor-pointer mt-1">
        <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2 font-serif tracking-tight leading-snug group-hover:text-[#ab5e3b] transition-colors duration-300 select-none">
          {title}
        </h3>
      </Link>

      <p className="text-xs sm:text-sm text-stone-600 mb-6 flex-grow leading-relaxed font-sans select-none min-h-[44px]">
        {description}
      </p>
      
      {/* Action Button */}
      <Link 
        href={`/products/${id}`}
        className={`w-full py-3 rounded-xl font-bold text-[10px] sm:text-xs tracking-[0.15em] uppercase transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer relative overflow-hidden flex items-center justify-center gap-1.5 ${buttonClass}`}
      >
        <span>View Details</span>
        <svg className="w-3.5 h-3.5 transition-transform duration-300 transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  );
}
