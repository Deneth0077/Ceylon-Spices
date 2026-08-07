'use client';

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { productsData, Product } from "@/data/products";
import InquiryModal from "@/components/InquiryModal";
import { motion } from "framer-motion";

export default function WholesalePage() {
  const [selectedProductForInquiry, setSelectedProductForInquiry] = useState<Product | null>(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const wholesaleProducts = productsData.filter(p => p.category === "Wholesale");

  const handleOpenInquiry = (product: Product) => {
    setSelectedProductForInquiry(product);
    setIsInquiryModalOpen(true);
  };

  return (
    <div className="w-full bg-[#fcf9f8] text-[#1b1c1c] overflow-x-hidden min-h-screen pb-20 pt-8">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8">

        {/* 1. Top Section Title matching user design */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight uppercase border-b-2 border-black inline-block pb-1 font-sans">
            WHOLESALE
          </h1>
          <p className="text-sm text-[#52443f] font-medium mt-3 max-w-2xl">
            Export-grade bulk spices, pure cinnamon oils, and authentic Ceylon quills directly from Sri Lanka plantations.
          </p>
        </motion.div>

        {/* 2. Grid of Wholesale Products matching user image design (2 Columns on MD+) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {wholesaleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-[#eae7e7] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              {/* Product Image Box */}
              <Link href={`/products/${product.id}`} className="block relative w-full h-64 bg-white p-6 flex items-center justify-center group">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                />
              </Link>

              {/* Product Metadata Box matching screenshot layout */}
              <div className="p-6 pt-4 border-t border-[#f3f4f6] flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-xs font-bold text-[#b48325] tracking-wide uppercase block mb-1">
                    {product.subCategory || "Whole Spices"}
                  </span>
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-lg md:text-xl font-extrabold text-[#111827] font-sans hover:text-[#795900] transition-colors line-clamp-1 mb-4">
                      {product.title}
                    </h3>
                  </Link>
                </div>

                {/* Dark Navy / Black VIEW PRODUCT Button matching mockup */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <Link
                    href={`/products/${product.id}`}
                    className="w-full bg-[#111827] hover:bg-[#1f2937] text-white text-center py-3 text-xs font-extrabold uppercase tracking-wider transition-colors rounded"
                  >
                    VIEW PRODUCT
                  </Link>
                  <button
                    onClick={() => handleOpenInquiry(product)}
                    className="w-full bg-[#795900] hover:bg-[#5c4300] text-white text-center py-3 text-xs font-extrabold uppercase tracking-wider transition-colors rounded cursor-pointer"
                  >
                    INQUIRE NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Cinnamon Pictures Reference Link (As shown in user prompt image) */}
        <div className="mt-14 p-6 bg-[#f4f7f6] border border-[#d1e5dd] rounded-xl flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-sans text-[#1c3f35]">
          <p className="font-semibold">
            <strong className="text-[#0d2a22]">Dineth!</strong> For cinnamon pictures reference, you can visit below link:
          </p>
          <a
            href="https://samagispice.com/shop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-bold text-[#0d5c46] hover:text-[#063b2c] underline flex-shrink-0"
          >
            https://samagispice.com/shop <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Inquiry Form Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        productTitle={selectedProductForInquiry?.title}
      />
    </div>
  );
}
