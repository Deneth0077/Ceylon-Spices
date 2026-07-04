'use client';

import Link from "next/link";
import TransparentImage from "@/components/TransparentImage";
import { useCart } from "@/context/CartContext";

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
  const { addToCart } = useCart();

  return (
    <div className="bg-gradient-to-br from-[#ebdcb9]/15 via-white to-white rounded-[24px] border border-[#b48648]/12 p-8 flex flex-col h-full hover:shadow-[0_15px_45px_rgba(40,30,20,0.05)] hover:-translate-y-1 transition-all duration-500 group relative">
      
      {/* Clickable Image to go to Detail Page */}
      <Link href={`/products/${id}`} className="relative w-full aspect-[1.1/1] mb-6 flex items-center justify-center overflow-visible group block cursor-pointer">
        {/* Soft, blurred colorful glowing halo background */}
        <div className={`absolute inset-4 rounded-full bg-gradient-to-br ${bgGlowClass} blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />
        
        <div className="relative w-4/5 h-4/5 flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-105">
          <TransparentImage 
            src={image} 
            alt={title} 
            className="w-full h-full object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
          />
        </div>
      </Link>
      
      {/* Clickable Title */}
      <Link href={`/products/${id}`} className="block group cursor-pointer mt-2">
        <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2 font-sans tracking-tight leading-tight select-none">
          {title}
        </h3>
      </Link>

      <p className="text-xs sm:text-sm text-stone-600 mb-6 flex-grow leading-relaxed font-sans select-none min-h-[40px]">
        {description}
      </p>
      
      <button 
        onClick={() => addToCart({ id, title, image, description })}
        className={`w-full py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow active:scale-95 cursor-pointer ${buttonClass}`}
      >
        Add to Cart
      </button>
    </div>
  );
}
