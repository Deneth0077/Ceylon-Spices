'use client';

import { use, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Leaf, Star, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { productsData, Product } from "@/data/products";
import InquiryModal from "@/components/InquiryModal";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const productId = parseInt(resolvedParams.id);

  const [activeThumb, setActiveThumb] = useState(0);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  // Accordion drawer states
  const [isSensoryOpen, setIsSensoryOpen] = useState(true);
  const [isBenefitsOpen, setIsBenefitsOpen] = useState(false);

  const product: Product = productsData.find((p) => p.id === productId) || productsData[0];

  const handleWhatsAppCheckout = () => {
    let message = `*TRUE CINNAMON CARE* | Export Quality Ceylon Spices\n`;
    message += `--------------------------------------------------\n`;
    message += `*PRODUCT INQUIRY*\n\n`;
    message += `*SELECTED PRODUCT DETAILS:*\n`;
    message += `- Product Name: *${product.title}*\n`;
    if (product.subtitle) message += `- Category / Spec: ${product.subtitle}\n`;
    message += `- Origin: ${product.origin}\n`;
    if (product.packaging) message += `- Packaging: ${product.packaging}\n`;
    if (product.netWeight) message += `- Net Weight: ${product.netWeight}\n`;
    message += `\n--------------------------------------------------\n`;
    message += `*INQUIRY REQUEST:*\n`;
    message += `Hello True Cinnamon Care Team,\n\n`;
    message += `I am inquiring about *${product.title}*. Kindly provide availability, export quotation, and shipping terms.\n\n`;
    message += `Thank you!\n`;
    message += `--------------------------------------------------\n`;
    message += `*True Cinnamon Care* | Single-Origin Ceylon Spices\n`;
    message += `Hotline: +94 77 289 3030`;
    const whatsappUrl = `https://wa.me/94772893030?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "image": product.image.startsWith("http") ? product.image : `https://truecca.com${product.image}`,
    "description": product.description,
    "sku": `TCC-SPICE-${product.id}`,
    "brand": {
      "@type": "Brand",
      "name": "True Cinnamon Care"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://truecca.com/products/${product.id}`,
      "priceCurrency": "USD",
      "price": "0.00",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "True Cinnamon Care"
      }
    }
  };

  return (
    <div className="w-full bg-[#fcf9f8] text-[#1b1c1c] overflow-x-hidden pb-12 pt-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8">

        {/* Breadcrumb / Back Navigation */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#52443f] hover:text-[#42190a] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Collection
          </Link>
          <span className="text-[10px] text-[#85736e] font-semibold">
            Shop &gt; Spices &gt; {product.subCategory || product.category}
          </span>
        </div>

        {/* Header Heading matching Client Mockup */}
        <div className="mb-6 border-b border-[#eae7e7] pb-4">
          <h1 className="font-serif text-3xl md:text-4xl font-black text-[#2b1810]">
            {product.title}
          </h1>
        </div>

        {/* 1. Main Product Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">

          {/* Left Side: Images Showcase (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">

            {/* Big Main Image Card */}
            <div className="relative w-full aspect-square bg-[#f6f3f2] rounded-2xl border border-[#eae7e7]/70 flex items-center justify-center p-8 overflow-hidden shadow-premium">
              {/* Organic background blob */}
              <div className="absolute inset-8 bg-[#ffdfa0]/30 rounded-[42%_58%_70%_30%_/_45%_45%_55%_55%] -z-10 animate-morph-1 opacity-70" />

              <div className="w-[85%] h-[85%] relative flex items-center justify-center">
                <img
                  src={product.thumbs[activeThumb] || product.image}
                  alt={product.title}
                  className="max-w-full max-h-full object-contain mix-blend-multiply drop-shadow-xl"
                />
              </div>
            </div>

            {/* Thumbnails Row */}
            {product.thumbs.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.thumbs.map((thumb, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveThumb(idx)}
                    className={`aspect-square rounded-xl border bg-[#f6f3f2]/30 p-1 overflow-hidden transition-all flex items-center justify-center cursor-pointer ${activeThumb === idx
                        ? "border-[#795900] ring-2 ring-[#795900]/30 shadow-sm"
                        : "border-[#eae7e7] hover:border-[#85736e]"
                      }`}
                  >
                    <img
                      src={thumb}
                      alt={`Thumbnail ${idx + 1}`}
                      className="max-w-full max-h-full object-contain mix-blend-multiply"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Side: Product Details & Green Outline Box Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">

            {/* Origin Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#795900] bg-[#ffdfa0]/40 px-3 py-1 rounded">
                {product.origin}
              </span>

              <div className="flex items-center gap-2">
                <div className="flex text-[#795900]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-[11px] text-[#52443f] font-bold font-sans">
                  (5.0 / 5 Authentic Ceylon Grade)
                </span>
              </div>
            </div>

            {/* Green Outline Description Box matching Client Uploaded Mockup Images */}
            <div className="border-2 border-[#81b752] bg-white rounded-[32px] p-6 sm:p-8 shadow-sm space-y-4">
              <h3 className="font-serif font-black text-xl text-[#2b1810]">
                {product.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-[#2b1810] font-medium leading-relaxed whitespace-pre-line">
                {product.detailedDescription || product.description}
              </p>
              {product.netWeight && (
                <p className="text-xs sm:text-sm text-[#52443f]">
                  <strong>Net Weight:</strong> {product.netWeight}
                </p>
              )}
            </div>

            {/* Action Buttons: Inquire Now & WhatsApp matching Mockups */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#eae7e7] pt-6">
              <button
                onClick={() => setIsInquiryModalOpen(true)}
                className="py-3.5 px-6 bg-[#7c7c7c] hover:bg-[#636363] text-white text-center font-extrabold text-xs sm:text-sm rounded-2xl transition-all shadow-md hover:scale-[1.02] cursor-pointer"
              >
                Inquire Now
              </button>

              <button
                onClick={handleWhatsAppCheckout}
                className="py-3.5 px-6 bg-[#6ba343] hover:bg-[#598c36] text-white text-center font-extrabold text-xs sm:text-sm rounded-2xl transition-all shadow-md hover:scale-[1.02] cursor-pointer"
              >
                WhatsApp
              </button>
            </div>

            {/* Custom tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#192a14] bg-[#d3e9c7] px-3 py-1 rounded-[0.25rem]">
                <Sparkles className="w-3 h-3" /> Single Origin Ceylon
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#192a14] bg-[#d3e9c7] px-3 py-1 rounded-[0.25rem]">
                <ShieldCheck className="w-3 h-3" /> Eco Friendly Packaging
              </span>
            </div>

          </div>
        </div>

        {/* 2. Deep Provenance & Brand Promise Section (Clean Boxless Layout) */}
        <section className="my-12 py-8 px-6 sm:px-8 bg-transparent border-t border-[#eae7e7]">
          <div className="max-w-[950px] mx-auto space-y-4 text-left">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#795900]">OUR UNCOMPROMISING COMMITMENT</p>
            <p className="text-base sm:text-lg md:text-xl text-[#52443f] leading-relaxed font-medium">
              At <strong className="font-extrabold text-[#2b1810] text-[1.08em]">True Cinnamon Care</strong>, we are not spice traders. We <strong className="font-extrabold text-[#2b1810] text-[1.08em]">Go Beyond</strong> delivering spice. Committed to deliver Trust, <strong className="font-extrabold text-[#2b1810] text-[1.08em]">Accountability</strong>, Heritage, and <strong className="font-extrabold text-[#2b1810] text-[1.08em]">Uncompromising Quality</strong>. Our cinnamon is <strong className="font-extrabold text-[#2b1810] text-[1.08em]">Single-Origin</strong> and sourced exclusively from <strong className="font-extrabold text-[#2b1810] text-[1.08em]">Sri Lanka</strong>, ensuring authenticity and naturally negligible coumarin levels for <strong className="font-extrabold text-[#2b1810] text-[1.08em]">Safe Daily Use</strong>. By partnering with local people, we uphold <strong className="font-extrabold text-[#2b1810] text-[1.08em]">Ethical Practices</strong> that support communities and <strong className="font-extrabold text-[#2b1810] text-[1.08em]">Preserve the Environment</strong>. Every stick is carefully graded, tested, and <strong className="font-extrabold text-[#2b1810] text-[1.08em]">Hand-Packaged</strong> in a recyclable premium design that reflect the <strong className="font-extrabold text-[#2b1810] text-[1.08em]">Sustainability</strong> and <strong className="font-extrabold text-[#2b1810] text-[1.08em]">Luxury</strong> of our brand. Choosing us means choosing purity, <strong className="font-extrabold text-[#2b1810] text-[1.08em]">Transparency</strong>, and a taste experience that is <strong className="font-extrabold text-[#2b1810] text-[1.08em]">Truly Unique</strong> which is <strong className="font-extrabold text-[#2b1810] text-[1.08em]">Exclusive to Our Plantation</strong>.
            </p>
          </div>
        </section>

      </div>

      {/* Inquiry Form Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        productTitle={product.title}
      />

    </div>
  );
}
