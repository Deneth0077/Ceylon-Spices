'use client';

import Image from "next/image";
import Link from "next/link";
import { Leaf, Award, ShieldCheck, Heart, Droplet, ArrowRight, Target, Eye, Sparkles, Building2, Globe2, Compass } from "lucide-react";
import { motion } from "framer-motion";
import TransparentImage from "@/components/TransparentImage";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function AboutPage() {
  return (
    <div className="relative w-full bg-[#fcf9f8] text-[#1b1c1c] overflow-x-hidden">
      
      {/* Background Graphics */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <div className="absolute right-[-220px] md:right-[-180px] top-[10%] w-[500px] md:w-[750px] h-[750px] opacity-[0.05] transform rotate-[120deg]">
          <TransparentImage 
            src="/images/goraka_tree.png" 
            alt="" 
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute left-[-220px] md:left-[-180px] top-[45%] w-[600px] md:w-[900px] h-[900px] opacity-[0.05]">
          <TransparentImage 
            src="/images/pepper_vine.png" 
            alt="" 
            className="w-full h-full object-fill"
          />
        </div>

        <div className="absolute right-[-200px] md:right-[-160px] top-[80%] w-[500px] md:w-[700px] h-[700px] opacity-[0.04] transform rotate-[45deg]">
          <TransparentImage 
            src="/images/goraka_tree.png" 
            alt="" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[480px] flex items-center justify-center pt-6 pb-20 md:pb-24 px-6 md:px-8 border-b border-[#eae7e7]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/ceylon_cinnamon_estate_about.png" 
            alt="Lush organic Ceylon cinnamon estate in Sri Lankan highlands" 
            fill 
            sizes="100vw"
            className="object-cover brightness-[0.65]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#192a14]/80 via-[#42190a]/40 to-transparent pointer-events-none" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-[850px] bg-[#fcf9f8]/95 backdrop-blur-md p-8 md:p-14 rounded-2xl shadow-premium border border-white/60 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#795900]/10 border border-[#795900]/20 text-[#795900] text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" /> About True Cinnamon Care
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#42190a] leading-tight mb-4">
            Rooted in Sri Lanka's Heritage,<br className="hidden md:inline" /> Elevating Pure Ceylon Spices
          </h1>
          <p className="text-base md:text-lg text-[#52443f] leading-relaxed max-w-[700px] mx-auto mb-8 font-medium">
            We are a single ORIGIN, premium CEYLON-ingredients EXPORT partner for overseas importers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="#who-we-are" 
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#42190a] hover:bg-[#5d2e1d] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
            >
              Who We Are <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#795900] hover:bg-[#5c4300] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. WHO WE ARE SECTION */}
      <section id="who-we-are" className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8 py-20 border-b border-[#eae7e7]">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-[800px] mx-auto mb-16 space-y-3"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#795900] bg-[#ffdfa0]/30 px-3 py-1 rounded-full border border-[#795900]/20">
            About Our Company
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#42190a] tracking-tight">
            WHO WE ARE
          </h2>
          <p className="text-base md:text-lg font-semibold text-[#795900] max-w-[700px] mx-auto leading-relaxed pt-1">
            "We are a single ORIGIN, premium CEYLON-ingredients EXPORT partner for overseas importers"
          </p>
          <div className="w-20 h-1 bg-[#795900] mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Image Box */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-5 relative flex flex-col justify-center"
          >
            <div className="relative w-full h-[380px] lg:h-[100%] min-h-[380px] rounded-2xl overflow-hidden shadow-premium border-2 border-[#795900]/20 group">
              <Image 
                src="/images/farmer_community.png" 
                alt="Sri Lankan farming family holding Ceylon cinnamon harvest" 
                fill 
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#42190a]/80 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#fcf9f8]/90 backdrop-blur-md rounded-xl border border-white/50 shadow-md">
                <p className="text-xs font-bold text-[#42190a] uppercase tracking-wider flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-[#795900]" /> Southern Sri Lanka Harvest
                </p>
                <p className="text-[12px] text-[#52443f] mt-1">
                  Empowering rural farming communities through sustainable spice cultivation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3 Copy Cards */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-7 space-y-6 flex flex-col justify-center"
          >
            {/* Card 1 */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white p-7 rounded-2xl border border-[#eae7e7] shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              <div className="w-1.5 h-full bg-[#795900] absolute left-0 top-0 bottom-0" />
              <p className="text-sm md:text-base text-[#1b1c1c] leading-relaxed pl-2">
                <span className="font-bold text-[#42190a] text-base">True Cinnamon Care (Pvt) Ltd</span>, more than an <span className="font-bold text-[#795900] tracking-wide">EXPORTER</span>, we are a community rooted in Sri Lanka's heritage and dedicated to <span className="font-bold text-[#42190a] tracking-wide">UPLIFT</span> their lives with dignity and <span className="font-bold text-[#795900] tracking-wide">QUALITY</span>.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white p-7 rounded-2xl border border-[#eae7e7] shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              <div className="w-1.5 h-full bg-[#192a14] absolute left-0 top-0 bottom-0" />
              <p className="text-sm md:text-base text-[#52443f] leading-relaxed pl-2">
                Our prime activity is to deliver world the finest <span className="font-bold text-[#42190a] tracking-wide">CEYLON CINNAMON</span> maintaining their purity, freshness and its <span className="font-bold text-[#795900] tracking-wide">EXCLUSIVE</span> quality to the World. Our Cinnamon plants originate in fertile soils of southern Sri Lanka. We harvest them <span className="font-bold text-[#192a14] tracking-wide">SUSTAINABLY</span>, the bark is hand-peeled and delicately <span className="font-bold text-[#42190a] tracking-wide">HAND-ROLLED</span> in traditional ways cherished for centuries. All Cinnamon peels are naturally dried to preserve their inborn aroma, sweetness and its <span className="font-bold text-[#795900] tracking-wide">WELLNESS</span> of heritage.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              variants={fadeInUp}
              className="bg-[#fcf9f8] p-7 rounded-2xl border border-[#795900]/30 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              <div className="w-1.5 h-full bg-[#5d2e1d] absolute left-0 top-0 bottom-0" />
              <p className="text-sm md:text-base text-[#1b1c1c] leading-relaxed pl-2">
                We <span className="font-bold text-[#42190a] tracking-wide">ENSURE</span> that our overseas <span className="font-bold text-[#795900] tracking-wide">BUYERS</span> receive not just a spice, but a story of heritage, care, and <span className="font-bold text-[#42190a] tracking-wide">EXCELLENCE</span>. You not only <span className="font-bold text-[#795900] tracking-wide">INVEST</span> in authenticity and ethical trade but also a future where <span className="font-bold text-[#192a14] tracking-wide">COMMUNITY</span> growth thrive together.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. CONNECT WITH NATURE SECTION */}
      <section className="relative z-10 w-full py-16 bg-[#192a14] text-white overflow-hidden shadow-2xl">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/community_nature_grid.png" 
            alt="Connect with Nature community support pictures" 
            fill 
            sizes="100vw"
            className="object-cover opacity-25 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#192a14] via-[#192a14]/85 to-[#192a14]" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8 text-center space-y-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#ffdfa0] text-[11px] font-bold uppercase tracking-[0.25em]">
              <Globe2 className="w-3.5 h-3.5" /> Ethical & Sustainable Growth
            </div>
            
            <h2 className="font-serif text-4xl md:text-6xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ffdfa0] to-white drop-shadow-md">
              CONNECT WITH NATURE
            </h2>

            <p className="text-sm md:text-base text-[#eae7e7]/90 max-w-[650px] mx-auto font-medium">
              Few Community support pictures with our product samples
            </p>
          </motion.div>

          {/* Product Sample & Community Feature Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[950px] mx-auto pt-6">
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/15 text-left flex items-start gap-4">
              <div className="p-3 bg-[#795900] rounded-lg text-white font-bold">01</div>
              <div>
                <h4 className="font-serif font-bold text-white text-base">Community First</h4>
                <p className="text-xs text-white/70 mt-1">Direct support to cultivator families and infrastructure development.</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/15 text-left flex items-start gap-4">
              <div className="p-3 bg-[#795900] rounded-lg text-white font-bold">02</div>
              <div>
                <h4 className="font-serif font-bold text-white text-base">Value-Added Products</h4>
                <p className="text-xs text-white/70 mt-1">Transforming raw harvest into premium exports & wellness extracts.</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/15 text-left flex items-start gap-4">
              <div className="p-3 bg-[#795900] rounded-lg text-white font-bold">03</div>
              <div>
                <h4 className="font-serif font-bold text-white text-base">Eco Stewardship</h4>
                <p className="text-xs text-white/70 mt-1">Preserving biodiversity and chemical-free soil nutrition in southern Sri Lanka.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOUNDER & MANAGING DIRECTOR SECTION */}
      <section className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8 py-24 border-b border-[#eae7e7]">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-[800px] mx-auto mb-16 space-y-3"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#795900] bg-[#ffdfa0]/30 px-3 py-1 rounded-full border border-[#795900]/20">
            Leadership Vision
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#42190a]">
            Nuwan M. Abeysekara
          </h2>
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#795900]">
            FOUNDER | MANAGING DIRECTOR – TRUE CINNAMON CARE (PVT) LTD
          </p>
          <div className="w-20 h-1 bg-[#795900] mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-3xl p-8 md:p-12 border border-[#eae7e7] shadow-premium">
          {/* Left: Founder Picture */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="/images/founder_nuwan.png" 
                alt="Nuwan M. Abeysekara Founder and Managing Director" 
                fill 
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#42190a]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#192a14]/90 backdrop-blur-md rounded-xl text-white border border-white/20">
                <p className="text-xs font-bold uppercase tracking-wider text-[#ffdfa0] flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" /> Leadership Experience
                </p>
                <p className="text-xs text-white/90 mt-1">
                  13+ Years Banking & Commercial Leadership • M.Sc. Graduate
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Bio & Signature */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-sm md:text-base text-[#52443f] leading-relaxed">
              <p className="bg-[#fcf9f8] p-5 rounded-xl border border-[#eae7e7]">
                <strong className="text-[#42190a]">Nuwan M. Abeysekara</strong> built a 13-year career in banking and also gained valuable experience in the commercial sector before turning his passion toward agriculture and exports. After completing Master of Science, he channels his expertise into creating opportunities and promoting Sri Lanka's finest products globally.
              </p>
              
              <p className="bg-[#fcf9f8] p-5 rounded-xl border border-[#eae7e7]">
                As an entrepreneur he founded <strong className="text-[#42190a]">True Cinnamon Care</strong>, a brand dedicated to premium Ceylon Cinnamon and authentic Ceylon spice exports. His vision is to elevate Sri Lanka's agriculture and empower its communities by blending innovation, branding, and modern design. He strives to ensure that local products resonate with international markets, ultimately contributing to a foreign currency rich and prosperous Sri Lanka.
              </p>
            </div>

            {/* Signature Box */}
            <div className="pt-4 border-t border-[#eae7e7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="relative w-[220px] h-[65px]">
                  <Image 
                    src="/images/founder_signature.png" 
                    alt="Nuwan M. Abeysekara Signature" 
                    fill 
                    sizes="220px"
                    className="object-contain object-left mix-blend-multiply"
                  />
                </div>
                <p className="font-serif font-bold text-lg text-[#42190a]">Nuwan M. Abeysekara</p>
                <p className="text-xs font-bold uppercase tracking-wider text-[#795900]">
                  FOUNDER | MANAGING DIRECTOR
                </p>
              </div>

              <div className="bg-[#ffdfa0]/30 px-4 py-3 rounded-xl border border-[#795900]/20 text-xs text-[#795900] font-semibold max-w-[240px]">
                "Blending innovation, branding, and modern design to empower local communities."
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. OUR MISSION & OUR VISION SECTION */}
      <section className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8 py-20 border-b border-[#eae7e7]">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-[800px] mx-auto mb-16 space-y-3"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#795900] bg-[#ffdfa0]/30 px-3 py-1 rounded-full border border-[#795900]/20">
            Our Purpose
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#42190a]">
            OUR MISSION & VISION
          </h2>
          <div className="w-20 h-1 bg-[#795900] mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="bg-[#192a14] text-white p-8 md:p-10 rounded-3xl shadow-premium relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Target className="w-40 h-40 text-white" />
            </div>
            
            <div className="space-y-4 z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#ffdfa0] text-[#192a14] flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#ffdfa0]">
                OUR MISSION
              </h3>
              <p className="text-sm md:text-base text-white/90 leading-relaxed pt-2">
                To refine the agro industry in Sri Lanka, by guiding and training cultivators to use the latest best practices and technology for the highest quality production. Our mission includes developing infrastructure, elevate lifestyles and social standing of the community. The quality produce from the harvest to be developed into value-added products to boost foreign exchange earnings and elevate local revenues.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/15 text-xs text-[#97ac8d] font-semibold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#ffdfa0]" /> Best Practices • Infrastructure • Foreign Exchange Growth
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="bg-[#42190a] text-white p-8 md:p-10 rounded-3xl shadow-premium relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Eye className="w-40 h-40 text-white" />
            </div>

            <div className="space-y-4 z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#ffdfa0] text-[#42190a] flex items-center justify-center font-bold">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#ffdfa0]">
                OUR VISION
              </h3>
              <p className="text-sm md:text-base text-white/90 leading-relaxed pt-2">
                To elevate local communities through innovation, branding, and modern design, while contributing to a prosperous and foreign currency rich nation.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/15 text-xs text-[#feb69d] font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#ffdfa0]" /> Community Elevation • Global Branding • Prosperous Sri Lanka
            </div>
          </motion.div>
        </div>

        {/* Product & Logo Showcase Card */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-white rounded-3xl p-8 md:p-12 border border-[#eae7e7] shadow-premium grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-7 relative h-[300px] md:h-[380px] rounded-2xl overflow-hidden border border-[#eae7e7] group">
            <Image 
              src="/images/premium_ceylon_spice_exports.png" 
              alt="Premium Ceylon organic spices, cinnamon Alba quills, turmeric, cardamom, black pepper" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-[#42190a]/95 text-white px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider backdrop-blur-md shadow-md">
              OUR SPICE COLLECTION
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center text-center space-y-5 p-2">
            <div className="relative w-[180px] h-[100px]">
              <Image 
                src="/images/new_brand_logo.png" 
                alt="True Cinnamon Care Brand Emblem" 
                fill 
                sizes="180px"
                className="object-contain"
              />
            </div>
            <div className="space-y-2">
              <h4 className="font-serif font-black text-2xl text-[#42190a]">True Cinnamon Care</h4>
              <p className="text-xs text-[#795900] font-extrabold uppercase tracking-widest">PREMIUM CEYLON EXPORT PARTNER</p>
              <p className="text-sm text-[#52443f] max-w-[340px] mx-auto leading-relaxed pt-1 font-medium">
                Delivering high-value Ceylon spices & organic extracts to international markets with uncompromised quality and single-origin authenticity.
              </p>
            </div>
            <Link 
              href="/products" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#795900] hover:bg-[#5c4300] text-white rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              Explore All Spices <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="relative z-10 bg-[#5d2e1d] text-white py-20 px-6 md:px-8">
        <div className="max-w-[1000px] mx-auto text-center space-y-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-[#ffdfa0] bg-white/10 px-4 py-1.5 rounded-full border border-white/15">
              Connect With Us
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight">
              Partner with Sri Lanka's Finest<br />Single-Origin Spice Exporter
            </h2>
            <p className="text-sm md:text-base text-[#eae7e7]/90 max-w-[650px] mx-auto leading-relaxed">
              Whether you are an overseas importer, buyer, or trade partner, we invite you to experience authentic Ceylon cinnamon and value-added agro produce.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="pt-2"
          >
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 px-9 py-4 bg-[#ffc641] hover:bg-[#ffdfa0] text-[#42190a] rounded-xl font-bold text-xs uppercase tracking-widest transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              CONTACT US <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
