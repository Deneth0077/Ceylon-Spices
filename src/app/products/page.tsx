import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      title: "Cinnamon (C5 Alba Grade)",
      description: "Premium hand-rolled quills from Ceylon, delicate flavor.",
      image: "/images/cinnamon_sticks_1781650514051.png",
      bgShapeColor: "bg-[#e9b996]",
      buttonColor: "bg-[#b87c47] hover:bg-[#a86a36]"
    },
    {
      id: 2,
      title: "Black Pepper (Organic)",
      description: "Bold, aromatic peppercorns with high piperine.",
      image: "/images/black_pepper_1781650594175.png",
      bgShapeColor: "bg-[#5a4d44]",
      buttonColor: "bg-[#4a3d34] hover:bg-[#3a2d24]"
    },
    {
      id: 3,
      title: "Turmeric Powder (Organic)",
      description: "Vibrant, high curcumin content for wellness.",
      image: "/images/turmeric_powder_1781650611739.png",
      bgShapeColor: "bg-[#e9b996]",
      buttonColor: "bg-[#e69b24] hover:bg-[#c68014]"
    },
    {
      id: 4,
      title: "Nutmeg & Mace",
      description: "Fragrant whole nutmeg with protective mace.",
      image: "/images/hero_spices_1781650500572.png", // Placeholder
      bgShapeColor: "bg-[#d9a075]",
      buttonColor: "bg-[#b87c47] hover:bg-[#a86a36]"
    },
    {
      id: 5,
      title: "Cloves (Handpicked)",
      description: "Plump, aromatic buds for rich flavor.",
      image: "/images/cloves_dried_1781650553541.png",
      bgShapeColor: "bg-[#b8aba1]",
      buttonColor: "bg-[#5a4d44] hover:bg-[#4a3d34]"
    },
    {
      id: 6,
      title: "Chilli Flakes",
      description: "Sun-dried chilli for a perfect spice kick.",
      image: "/images/turmeric_powder_1781650611739.png", // Placeholder
      bgShapeColor: "bg-[#e5a9a9]",
      buttonColor: "bg-[#b82e2e] hover:bg-[#981e1e]"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Tabs */}
        <div className="flex justify-center items-center gap-4 mb-16 overflow-x-auto pb-4">
          <button className="px-8 py-3 rounded-full bg-[#c3843a] text-white font-semibold shadow-md whitespace-nowrap">
            Whole Spices
          </button>
          <button className="px-8 py-3 rounded-full bg-[#f0e6dd] text-gray-700 font-semibold hover:bg-[#e0d6cd] transition whitespace-nowrap">
            Powders
          </button>
          <button className="px-8 py-3 rounded-full bg-[#f0e6dd] text-gray-700 font-semibold hover:bg-[#e0d6cd] transition whitespace-nowrap">
            Organic Spices
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              bgShapeColor={product.bgShapeColor}
              buttonColor={product.buttonColor}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
}
