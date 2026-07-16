'use client';

import { use, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, Minus, ShoppingCart, ShieldCheck, Heart, Leaf } from "lucide-react";
import { useCart } from "@/context/CartContext";
import TransparentImage from "@/components/TransparentImage";

const products = [
  {
    id: 1,
    title: "Cinnamon (C5 Alba Grade)",
    description: "Premium hand-rolled quills from Ceylon, delicate flavor.",
    image: "/images/cinnamon_sticks_1781650514051.png",
    category: "Whole Spices",
    origin: "Sri Lanka",
    bgShapeColor: "bg-[#e9b996]",
    buttonColor: "bg-[#b87c47] hover:bg-[#a86a36]",
    benefits: ["Boosts metabolism & regulates blood sugar", "Loaded with powerful antioxidants", "Anti-inflammatory properties"],
    uses: "Ideal for curries, desserts, baking, hot tea, and cinnamon rolls."
  },
  {
    id: 2,
    title: "Black Pepper (Organic)",
    description: "Bold, aromatic peppercorns with high piperine.",
    image: "/images/black_pepper_1781650594175.png",
    category: "Organic Spices",
    origin: "Sri Lanka",
    bgShapeColor: "bg-[#5a4d44]",
    buttonColor: "bg-[#4a3d34] hover:bg-[#3a2d24]",
    benefits: ["Improves nutrient absorption", "Promotes gut health & digestion", "Rich in piperine (potent antioxidant)"],
    uses: "Freshly grind onto steaks, roasted vegetables, soups, and marinades."
  },
  {
    id: 3,
    title: "Turmeric Powder (Organic)",
    description: "Vibrant, high curcumin content for wellness.",
    image: "/images/turmeric_powder_1781650611739.png",
    category: "Powders",
    origin: "Sri Lanka",
    bgShapeColor: "bg-[#e9b996]",
    buttonColor: "bg-[#e69b24] hover:bg-[#c68014]",
    benefits: ["Contains Curcumin (powerful anti-inflammatory)", "Supports joint health & cognitive function", "Strengthens immune system"],
    uses: "Essential in South Asian curries, golden milk lattes, or salad dressings."
  },
  {
    id: 4,
    title: "Nutmeg & Mace",
    description: "Fragrant whole nutmeg with protective mace.",
    image: "/images/hero_spices_1781650500572.png",
    category: "Whole Spices",
    origin: "Sri Lanka",
    bgShapeColor: "bg-[#d9a075]",
    buttonColor: "bg-[#b87c47] hover:bg-[#a86a36]",
    benefits: ["Aids sleep & reduces insomnia", "Relieves pain & acts as detoxifier", "Improves brain power & memory"],
    uses: "Grate into bechamel sauces, eggnog, spice cakes, or pumpkin pies."
  },
  {
    id: 5,
    title: "Cloves (Handpicked)",
    description: "Plump, aromatic buds for rich flavor.",
    image: "/images/cloves_dried_1781650553541.png",
    category: "Whole Spices",
    origin: "Sri Lanka",
    bgShapeColor: "bg-[#b8aba1]",
    buttonColor: "bg-[#5a4d44] hover:bg-[#4a3d34]",
    benefits: ["Rich in antimicrobial & liver-protecting properties", "Relieves toothache & oral pain", "High in vital manganese"],
    uses: "Stud into glazed hams, simmer in spiced ciders, or blend into garam masala."
  },
  {
    id: 6,
    title: "Chilli Flakes",
    description: "Sun-dried chilli for a perfect spice kick.",
    image: "/images/turmeric_powder_1781650611739.png",
    category: "Powders",
    origin: "Sri Lanka",
    bgShapeColor: "bg-[#e5a9a9]",
    buttonColor: "bg-[#b82e2e] hover:bg-[#981e1e]",
    benefits: ["Boosts calorie burning (capsaicin)", "Improves cardiovascular health", "Clears nasal congestion"],
    uses: "Sprinkle over pizzas, pasta dishes, stir-fries, or loaded fries."
  }
];

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const productId = parseInt(resolvedParams.id);
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h1>
        <p className="text-gray-500 mb-6">The product you are looking for does not exist in our catalog.</p>
        <Link href="/products" className="px-6 py-2.5 bg-cap-gold text-white font-semibold rounded-xl hover:bg-cap-gold-hover transition">
          Back to Spices
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      image: product.image,
      description: product.description
    }, quantity);
  };

  const handleWhatsAppCheckout = () => {
    const message = `*True Cinnamon Care - Quick Order*\n=================================\nProduct: *${product.title}*\nQuantity: *${quantity}*\n=================================\nPlease confirm my order. Thank you!`;
    const whatsappUrl = `https://wa.me/94761193338?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-gray-50/50 min-h-screen py-12 relative overflow-hidden z-10">
      {/* Animating Background Blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-100/20 blur-3xl pointer-events-none rounded-full animate-pulse-glow z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-100/10 blur-3xl pointer-events-none rounded-full animate-pulse-glow z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs / Back button */}
        <Link href="/products" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-cap-gold font-semibold mb-8 group transition-colors">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Catalog
        </Link>

        {/* Product Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Image Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl p-10 w-full relative overflow-hidden aspect-square flex items-center justify-center group">
              {/* Background Blob decoration */}
              <div className={`absolute inset-6 rounded-[50%_40%_60%_50%/40%_50%_50%_60%] transition-transform duration-1000 group-hover:rotate-[15deg] ${product.bgShapeColor} opacity-90`} />
              
              <TransparentImage 
                src={product.image} 
                alt={product.title} 
                className="absolute inset-0 w-full h-full object-contain p-8 drop-shadow-2xl z-10 transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Quality Badges */}
            <div className="grid grid-cols-3 gap-4 w-full mt-6">
              <div className="bg-white border border-gray-100 shadow-sm p-4 rounded-2xl flex flex-col items-center text-center">
                <Leaf className="w-5 h-5 text-emerald-600 mb-1" />
                <span className="text-[10px] font-bold text-gray-800 tracking-wide uppercase font-sans">100% Organic</span>
              </div>
              <div className="bg-white border border-gray-100 shadow-sm p-4 rounded-2xl flex flex-col items-center text-center">
                <ShieldCheck className="w-5 h-5 text-cap-gold mb-1" />
                <span className="text-[10px] font-bold text-gray-800 tracking-wide uppercase font-sans">Pure Origin</span>
              </div>
              <div className="bg-white border border-gray-100 shadow-sm p-4 rounded-2xl flex flex-col items-center text-center">
                <Heart className="w-5 h-5 text-red-500 mb-1" />
                <span className="text-[10px] font-bold text-gray-800 tracking-wide uppercase font-sans">Healthy</span>
              </div>
            </div>
          </div>

          {/* Right Column: Product details content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white border border-gray-100 shadow-xl rounded-[2.5rem] p-8 md:p-12 space-y-6">
              
              {/* Category Badges */}
              <div className="flex items-center gap-2">
                <span className="px-4 py-1.5 rounded-full bg-amber-50 text-cap-gold font-bold text-xs tracking-wider uppercase font-sans">
                  {product.category}
                </span>
                <span className="px-4 py-1.5 rounded-full bg-gray-50 text-gray-500 font-semibold text-xs tracking-wider uppercase font-sans">
                  {product.origin} Sourced
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-sans tracking-tight">
                {product.title}
              </h1>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-sans">
                {product.description} Sourced directly from local farmer communities in Sri Lanka, our spice crops are handled with precision to safeguard flavor integrity and health benefits.
              </p>

              {/* Culinary Uses & Benefits Grid */}
              <div className="border-t border-gray-100 pt-6 space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-gray-800 tracking-wider uppercase font-sans mb-2">Culinary Uses:</h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-sans">{product.uses}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-bold text-gray-800 tracking-wider uppercase font-sans mb-3">Key Benefits:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.benefits?.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-500 font-sans">
                        <span className="text-emerald-500 mt-0.5 font-bold">✔</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Checkout actions and quantity picker */}
              <div className="border-t border-gray-100 pt-6 space-y-6">
                
                {/* Quantity adjust picker */}
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-gray-800 font-sans uppercase">Select Qty:</span>
                  <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-gray-50">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-gray-200 text-gray-500 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-5 font-bold text-gray-800 text-sm">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-gray-200 text-gray-500 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Main Action buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Add to Cart button */}
                  <button
                    onClick={handleAddToCart}
                    className="flex items-center justify-center gap-2 bg-[#b87c47] hover:bg-[#a86a36] text-white py-4 px-6 rounded-2xl font-bold tracking-wide transition-all shadow-md active:scale-95 cursor-pointer text-sm font-sans"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>

                  {/* Buy/Order on WhatsApp button */}
                  <button
                    onClick={handleWhatsAppCheckout}
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-4 px-6 rounded-2xl font-bold tracking-wide transition-all shadow-md active:scale-95 cursor-pointer text-sm font-sans"
                  >
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.49-4.734c1.652.98 3.284 1.493 4.887 1.493 5.485 0 9.948-4.467 9.95-9.95.002-2.653-1.03-5.15-2.906-7.03C16.6 1.899 14.1 .865 11.446.865c-5.485 0-9.949 4.469-9.95 9.954-.001 1.905.518 3.738 1.5 5.367l-.955 3.486 3.572-.937zm12.333-6.242c-.302-.151-1.786-.881-2.062-.982-.276-.1-.476-.151-.676.151-.2.302-.776.982-.95 1.182-.175.201-.35.226-.652.076-.302-.151-1.274-.469-2.428-1.498-.898-.8-1.503-1.79-1.68-2.091-.176-.302-.019-.465.132-.615.136-.135.302-.351.453-.527.151-.176.201-.302.302-.503.101-.201.05-.377-.026-.527-.075-.151-.676-1.631-.926-2.235-.243-.587-.49-.507-.676-.517-.175-.01-.376-.01-.576-.01-.2 0-.526.075-.802.377-.276.302-1.052 1.03-1.052 2.515 0 1.485 1.077 2.918 1.227 3.12.15.201 2.119 3.235 5.132 4.536.717.31 1.277.495 1.713.633.721.23 1.378.197 1.896.12.578-.088 1.786-.73 2.037-1.435.251-.704.251-1.307.176-1.435-.076-.12-.276-.197-.577-.348z" />
                    </svg>
                    Quick WhatsApp Order
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
