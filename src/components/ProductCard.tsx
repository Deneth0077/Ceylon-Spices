import TransparentImage from "@/components/TransparentImage";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  origin?: string;
  bgShapeColor?: string;
  buttonColor?: string;
}

export default function ProductCard({ 
  image, 
  title, 
  description, 
  origin = "Sri Lanka", 
  bgShapeColor = "bg-[#d9a075]",
  buttonColor = "bg-[#b87c47] hover:bg-[#a86a36]"
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 flex flex-col h-full hover:shadow-xl transition-all duration-300 group">
      <div className="relative w-full aspect-square mb-8 flex items-center justify-center overflow-hidden group">
        <div 
          className={`absolute inset-4 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] transition-transform duration-700 group-hover:rotate-[20deg] ${bgShapeColor} opacity-90`}
          style={{ transformOrigin: 'center' }}
        ></div>
        <TransparentImage 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-contain p-4 drop-shadow-2xl z-10 transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">{description}</p>
      <p className="text-xs text-gray-500 mb-6 font-medium tracking-wide uppercase">{origin}</p>
      <button className={`w-full text-white py-3.5 rounded-xl font-semibold tracking-wide transition-colors shadow-md ${buttonColor}`}>
        Add to Cart
      </button>
    </div>
  );
}
