'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ShieldCheck, QrCode, CheckCircle2, ArrowRight, Leaf, Compass, Play, AlertTriangle } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export default function OurSourcingPage() {
  const comparisonData = [
    {
      aspect: "Taste & Aroma",
      ceylon: "Mild, Sweet, Delicate with citrus notes",
      cassia: "Slightly bitter Strong, Spicy, Pungent,"
    },
    {
      aspect: "Health & Safety",
      ceylon: "Negligible coumarin content (~0.017 mg/teaspoon) Safe for daily use",
      cassia: "High coumarin content (7–18 mg/teaspoon) Excess intake may cause Liver damage"
    },
    {
      aspect: "Appearance",
      ceylon: "Thin & Fragile Quills made of multiple fine paper-like layers",
      cassia: "Thick & Hard Hard bark rolled into a single scroll"
    },
    {
      aspect: "Availability",
      ceylon: "Premium Quality Mainly from Sri Lanka (Ceylon)",
      cassia: "Cheaper Widely available"
    },
    {
      aspect: "Nutritional Value",
      ceylon: "Rich in Antioxidants. Safer for long-term consumption",
      cassia: "Contains Antioxidants. But NOT safe for long-term consumption"
    },
    {
      aspect: "Culinary Use",
      ceylon: "Best for Premium desserts, Teas, Delicate dishes & Gourmet use",
      cassia: "Common in Baking & Curries"
    },
    {
      aspect: "Market Position",
      ceylon: "Luxury spice Known as “True Cinnamon”",
      cassia: "Not real cinnamon"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Cultivation & Harvesting",
      desc: "Two Pictures of the own Cultivation and Harvesting",
      image: "/images/cinnamon_harvest.png"
    },
    {
      step: 2,
      title: "Transport by Foot",
      desc: "Picture of Farmers bringing cinnamon Barks to the processing facility by foot",
      image: "/images/artisan_cinnamon_ranjan.png"
    },
    {
      step: 3,
      title: "Peeling & Drying",
      desc: "Two Pictures of our processing facility (Bark peeling and Drying)",
      image: "/images/alba_cinnamon_detail.png"
    },
    {
      step: 4,
      title: "Cutting & Packing",
      desc: "Picture of our processing facility-Cutting & packing",
      image: "/images/cinnamon_canister_3d.png"
    },
    {
      step: 5,
      title: "Quality Check & Packing",
      desc: "Pictures of our processing facility-Cutting & packing",
      image: "/images/value_added_products.png"
    },
    {
      step: 6,
      title: "Shipping",
      desc: "Picture of Shipping",
      image: "/images/ceylon_spice_farm_contact.png"
    }
  ];

  const galleryImages = [
    { src: "/images/gourmet_cinnamon_tea.jpg", alt: "Artisanal Ceylon Cinnamon Tea", caption: "Artisanal Cinnamon Tea" },
    { src: "/images/gourmet_savory_dish.jpg", alt: "Gourmet Savory Culinary Creation", caption: "Gourmet Culinary Use" },
    { src: "/images/gourmet_dessert_pear.jpg", alt: "Poached Pear & Cinnamon Dessert", caption: "Traditional Island Spices" }
  ];

  return (
    <div className="relative w-full bg-[#f7f2ea] text-[#2c1810] overflow-x-hidden font-sans">

      {/* Background Craft Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#42190a_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[500px] md:min-h-[560px] flex items-center justify-center overflow-hidden py-20 md:py-28 px-6 md:px-8 border-b border-[#eae7e7]">
        
        {/* Background Image with About Hero Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about_soil_to_table_bg.jpg"
            alt="Lush Sri Lankan river and cinnamon estate landscape"
            fill
            quality={100}
            unoptimized
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/30 pointer-events-none" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-[950px] mx-auto text-center space-y-6"
        >
          <h1 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white text-center leading-snug drop-shadow-lg tracking-wide uppercase">
            FROM CEYLON SOIL <span className="text-[#ffdfa0]">TO YOUR TABLE</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-[780px] mx-auto font-medium leading-relaxed drop-shadow-md">
            Single-Origin, Sustainability, Genuine & Premium Sourcing. <br className="hidden sm:inline" />
            Discover how True Cinnamon Care brings you the world's finest Ceylon cinnamon, sourced with integrity and passion.
          </p>
        </motion.div>
      </section>


      {/* ========================================================================= */}
      {/* 2. OUR ORIGINS SECTION */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 max-w-[1240px] mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#8c502b] uppercase tracking-[0.2em] block mb-2">Heritage & Geography</span>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#3a1b0e]">Our Origins</h2>
          <div className="w-16 h-1 bg-[#8c502b] mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Map Card (Highlighting Matara District) */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 bg-[#efe6d8] border-2 border-[#d6c4ae] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md relative overflow-hidden group"
          >
            <div className="space-y-3 mb-6 relative z-10">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#4a2717] bg-[#e3d0b8] px-3 py-1 rounded-full border border-[#c4ae95]">
                  <MapPin className="w-3.5 h-3.5 text-[#8c502b]" /> Matara District
                </span>
                <span className="text-[11px] font-mono text-[#6b4735] font-bold">6.1268° N, 80.6398° E</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#3a1b0e]">Southern Ceylon Highlands</h3>
              <p className="text-xs text-[#593d2e] leading-relaxed">
                Sub-areas: <strong className="text-[#3a1b0e]">Hakmana & Denegama</strong> — world-renowned for large-scale cultivation of Ceylon Cinnamon.
              </p>
            </div>

            {/* Map Frame */}
            <div className="relative w-full h-[360px] sm:h-[420px] bg-[#efe6d8] rounded-2xl border border-[#cbbb9e] overflow-hidden flex items-center justify-center p-3 shadow-inner">
              <Image
                src="/images/srilanka_district_matara_map.png"
                alt="Sri Lanka District Map with Matara Highlighted"
                fill
                className="object-contain rounded-xl p-1"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810]/60 via-transparent to-transparent rounded-xl pointer-events-none" />
              
              {/* Map Pin Badge */}
           
            </div>
          </motion.div>

          {/* Right: Craft Card with Story */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 bg-[#faf5ed] border-2 border-[#d6c4ae] rounded-3xl p-6 sm:p-10 shadow-md flex flex-col justify-center space-y-5"
          >
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-bold text-[#3a1b0e]">
                Sri Lanka — Birthplace of True Ceylon Cinnamon
              </h3>
              <p className="text-xs font-bold text-[#8c502b] uppercase tracking-wider">
                Cinnamomum Zeylanicum • Cinnamomum Verum
              </p>
            </div>

            <p className="text-sm text-[#4a3429] leading-relaxed">
              Sri Lanka (Ceylon), a South Asian <strong>Tropical Island</strong> nation located near the equator known as <em>“Pearl of the Indian Ocean”</em>, is renowned for its fertile soils and sustainable agriculture.
            </p>

            <p className="text-sm text-[#4a3429] leading-relaxed">
              Sri Lanka is the <strong>Birthplace of True Ceylon Cinnamon</strong> — <em>“Cinnamomum Zeylanicum”</em> also known as <em>“Cinnamomum Verum”</em>. Its golden soil and tropical climate have nurtured this spice, prized for its <strong>Delicate sweetness</strong> and <strong>Health Benefits</strong> for centuries.
            </p>

            <div className="p-4 rounded-2xl bg-[#efe6d8] border border-[#d6c4ae] space-y-2 text-xs sm:text-sm text-[#3a1b0e] leading-relaxed">
              <p>
                At <strong>True Cinnamon Care</strong>, We honour this heritage by sourcing directly from our <strong>Own Plantations (Single Origin)</strong> located in the hills of southern part of the Island call <strong>Matara (sub area-Hakmana & Denegama)</strong>, where renowned for large-scale cultivation of Ceylon Cinnamon.
              </p>
              <p>
                We respect the <strong>Ethical Partnership</strong> with our local farmers and fair wages who harvest the cultivation and follow <strong>Sustainable Practices</strong>. Every cinnamon stick carries the <strong>Story of Hands</strong> that care for the land and its community.
              </p>
            </div>
          </motion.div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 3. TRACEABILITY & PROCESS FLOW SECTION */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-20 bg-[#debf92] border-y border-[#d6c4ae]">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#8c502b] uppercase tracking-[0.2em] block mb-2">Uncompromised Transparency</span>
            <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#3a1b0e]">Traceability</h2>
            <div className="w-16 h-1 bg-[#8c502b] mx-auto mt-3 rounded-full" />
          </div>

          {/* Upper Split: Google Map Callout & Transparency Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-stretch">
            
            {/* Left Card: Factory Location Coordinates & Interactive Map */}
            <div className="lg:col-span-6 bg-[#faf5ed] border-2 border-[#d6c4ae] rounded-3xl p-6 sm:p-8 shadow-md flex flex-col justify-between space-y-5">
              
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#8c502b] bg-[#efe6d8] px-3 py-1 rounded-full border border-[#d6c4ae]">
                    <MapPin className="w-3.5 h-3.5 text-[#8c502b]" /> Google Map Location
                  </span>
                  <span className="text-[10px] font-bold text-[#486338] uppercase tracking-widest bg-[#e5ebd9] px-2.5 py-0.5 rounded-full border border-[#b8c9a3]">Verified</span>
                </div>

                <h4 className="font-serif font-extrabold text-2xl text-[#3a1b0e]">Factory Location Coordinates</h4>
                <p className="text-xs sm:text-sm text-[#593d2e] leading-relaxed">
                  <strong>Transparency</strong> matters. From cultivation to packaging, we track every step of the journey. Scan the QR code on our paper canister packaging to <strong>Trace</strong> your <strong>Cinnamon</strong> back to its <strong>Origin</strong>. Because you deserve to know where your spice comes from.
                </p>
              </div>

              {/* Styled High-Res Map Frame */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=6.126765,80.639771"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full h-[260px] sm:h-[280px] bg-[#efe6d8] border-2 border-[#cbbb9e] rounded-2xl overflow-hidden shadow-inner group flex items-center justify-center p-2 block"
              >
                <Image
                  src="/images/srilanka_district_matara_map.png"
                  alt="Sri Lanka District Map - Matara Location"
                  fill
                  className="object-contain rounded-xl p-1 group-hover:scale-[1.03] transition-transform duration-500"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810]/70 via-transparent to-transparent rounded-xl pointer-events-none" />

                {/* Top-Left Location Badge Overlay */}
                <div className="absolute top-3 left-3 bg-[#3a1b0e]/95 backdrop-blur-sm text-[#f7f2ea] px-3 py-1.5 rounded-lg border border-[#8c502b]/50 shadow-md text-[11px] z-20 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-[#e08e45] rounded-full animate-ping" />
                  <span className="font-bold font-serif">Matara Facility (6°07&apos;36.4&quot;N 80°38&apos;23.2&quot;E)</span>
                </div>

                {/* Bottom Center Hover Callout */}
                <div className="absolute bottom-3 bg-[#3a1b0e]/90 text-[#f7f2ea] px-4 py-1.5 rounded-full text-xs font-bold shadow-lg opacity-90 group-hover:opacity-100 group-hover:bg-[#522b19] transition-all flex items-center gap-1.5">
                  <span>View Location on Google Maps</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#e08e45] group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              {/* Coordinates Pill & Direct Google Maps CTA */}
              <div className="p-4 bg-[#efe6d8] rounded-2xl border border-[#d6c4ae] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#8c502b] block tracking-widest">COORDINATES</span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#3a1b0e]">Lat: 6.126765° N | Long: 80.639771° E (6°07&apos;36.4&quot;N 80°38&apos;23.2&quot;E)</span>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=6.126765,80.639771"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-[#3a1b0e] text-[#f7f2ea] rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#522b19] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Open Full Map</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#e08e45]" />
                </a>
              </div>

            </div>

            {/* Right Card: Single Origin & Same-Land Processing */}
            <div className="lg:col-span-6 bg-[#faf5ed] border-2 border-[#d6c4ae] rounded-3xl p-6 sm:p-8 shadow-md flex flex-col justify-between space-y-6">
              
              <div className="space-y-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#486338] bg-[#e5ebd9] px-3 py-1 rounded-full border border-[#b8c9a3]">
                  <Leaf className="w-3.5 h-3.5 text-[#486338]" /> Single-Origin Guarantee
                </span>
                <h4 className="font-serif font-extrabold text-2xl sm:text-3xl text-[#3a1b0e]">Single Origin & Same-Land Processing</h4>
              </div>

              <div className="space-y-4">
                <p className="text-xs sm:text-sm text-[#4a3429] leading-relaxed">
                  Our <strong>Cultivation</strong> and <strong>Processing</strong> facility are located side by side on the <strong>Same Land</strong> to <strong>Ensure</strong> absolute purity, uncompromised <strong>Freshness</strong> and traceability.
                </p>
                <p className="text-xs sm:text-sm text-[#4a3429] leading-relaxed">
                  Each cinnamon pack is vacuum-sealed to <strong>Preserve</strong> the delicate aroma and the authentic <strong>Quality</strong> of Ceylon cinnamon to reaches ultimate destination, the consumer’s table.
                </p>
              </div>

              {/* 3 Feature Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-[#efe6d8] rounded-xl border border-[#d6c4ae] text-center space-y-1">
                  <span className="text-lg block">🌱</span>
                  <span className="text-[11px] font-bold text-[#3a1b0e] block">100% Single Origin</span>
                  <span className="text-[9px] text-[#6b4735] block">Matara Estate</span>
                </div>
                <div className="p-3 bg-[#efe6d8] rounded-xl border border-[#d6c4ae] text-center space-y-1">
                  <span className="text-lg block">🔒</span>
                  <span className="text-[11px] font-bold text-[#3a1b0e] block">Vacuum Sealed</span>
                  <span className="text-[9px] text-[#6b4735] block">On Same Land</span>
                </div>
                <div className="p-3 bg-[#efe6d8] rounded-xl border border-[#d6c4ae] text-center space-y-1">
                  <span className="text-lg block">🛡️</span>
                  <span className="text-[11px] font-bold text-[#3a1b0e] block">Pure & Safe</span>
                  <span className="text-[9px] text-[#6b4735] block">Zero Additives</span>
                </div>
              </div>

            </div>

          </div>

          {/* 6-Step Visual Process Flowchart */}
          <div id="processing-production-journey" className="mb-14 scroll-mt-24">
            <h3 className="font-serif text-2xl font-bold text-[#3a1b0e] text-center mb-8">
              Processing & Production Journey
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((s) => (
                <div key={s.step} className="bg-[#faf5ed] border border-[#d6c4ae] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col space-y-3">
                  <div className="relative w-full h-40 bg-[#efe6d8] rounded-xl overflow-hidden">
                    <Image src={s.image} alt={s.title} fill className="object-cover" />
                    <div className="absolute top-2 left-2 w-7 h-7 bg-[#3a1b0e] text-[#f7f2ea] rounded-full flex items-center justify-center font-bold text-xs shadow-md">
                      {s.step}
                    </div>
                  </div>
                  <h5 className="font-serif font-bold text-base text-[#3a1b0e]">{s.title}</h5>
                  <p className="text-xs text-[#593d2e] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Processing Facility Video Placeholder Card */}
          <div className="bg-[#faf5ed] border-2 border-dashed border-[#8c502b]/40 rounded-2xl p-6 sm:p-8 text-center max-w-2xl mx-auto space-y-3">
            <div className="w-12 h-12 bg-[#efe6d8] rounded-full flex items-center justify-center mx-auto text-[#8c502b]">
              <Play className="w-6 h-6 fill-[#8c502b]" />
            </div>
            <h4 className="font-serif font-bold text-lg text-[#3a1b0e]">Short Video (1 minute) of our processing facility</h4>
            <p className="text-xs text-[#6b4735] italic">
              *This can be embedded once facility construction is over*
            </p>
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 4. WHY CHOOSE US & CEYLON VS CASSIA COMPARISON TABLE */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 max-w-[1240px] mx-auto px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-xs font-bold text-[#8c502b] uppercase tracking-[0.2em] block">Why Choose Us</span>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#3a1b0e]">
            Why Choose Us
          </h2>
          <div className="w-16 h-1 bg-[#8c502b] mx-auto rounded-full" />
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border-2 border-[#d6c4ae] shadow-lg bg-[#faf5ed] mb-12">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#3a1b0e] text-[#f7f2ea] font-serif text-sm sm:text-base">
                <th className="py-4 px-6 font-bold w-1/4">Aspect</th>
                <th className="py-4 px-6 font-bold w-3/8 text-[#e08e45] border-l border-r border-[#522b19]">
                  Ceylon Cinnamon
                </th>
                <th className="py-4 px-6 font-bold w-3/8 text-[#d4bca0]/70">
                  Cassia Cinnamon
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d6c4ae] text-xs sm:text-sm">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-[#faf5ed]" : "bg-[#f4ebd9]"}>
                  <td className="py-4 px-6 font-bold text-[#3a1b0e] font-serif">{row.aspect}</td>
                  <td className="py-4 px-6 text-[#2c1810] font-medium bg-[#efe6d8]/60 border-l border-r border-[#d6c4ae]">
                    <div className="flex items-start gap-2">
                      <Leaf className="w-4 h-4 text-[#486338] flex-shrink-0 mt-0.5" />
                      <span>{row.ceylon}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-[#6b4735]">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-[#9e4228] flex-shrink-0 mt-0.5" />
                      <span>{row.cassia}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA Button */}
        <div className="text-center pt-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#3a1b0e] text-[#f7f2ea] font-bold text-sm uppercase tracking-wider shadow-lg hover:bg-[#522b19] active:scale-95 transition-all duration-300 group"
          >
            <span>Experience True Cinnamon Care</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#e08e45]" />
          </Link>
        </div>

      </section>


      {/* ========================================================================= */}
      {/* 5. CULINARY & PRODUCT GALLERY SECTION */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#a1b58f]
       border-t border-[#d6c4ae]">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 text-center space-y-8">
          
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#8c502b] uppercase tracking-[0.2em] block">Gourmet Inspiration</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#3a1b0e]">
              Pure Ceylon Cinnamon in Culinary Art
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="group relative h-56 sm:h-64 bg-[#faf5ed] rounded-3xl overflow-hidden border-2 border-[#d6c4ae]/60 shadow-md hover:shadow-xl transition-all duration-300">
                <Image src={img.src} alt={img.alt} fill unoptimized className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810]/85 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <span className="absolute bottom-4 left-4 right-4 text-sm font-bold text-[#f7f2ea] font-serif text-left">
                  {img.caption}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
