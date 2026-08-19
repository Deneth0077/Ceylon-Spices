'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  HeartPulse, 
  Activity, 
  Sparkles, 
  ShieldCheck, 
  Droplets, 
  Bug, 
  CheckCircle2, 
  Leaf, 
  Award, 
  ArrowRight,
  Shield,
  FlaskConical,
  Sun
} from "lucide-react";
import Footer from "@/components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HeritageOfWellnessPage() {
  const wellnessBenefits = [
    {
      title: "Blood Sugar",
      benefit: "Show modest reduction, Safer than cassia",
      details: "Clinical trials indicate modest glycemic control support without hepatic risk.",
      icon: Activity,
      highlight: "Safer than Cassia",
      color: "bg-[#e8f3e8] text-[#2d5a27]"
    },
    {
      title: "Cholesterol",
      benefit: "Lower LDL and improve HDL",
      details: "Assists lipid profile regulation by helping lower harmful LDL cholesterol.",
      icon: HeartPulse,
      highlight: "Lipid Balance",
      color: "bg-[#fbf2eb] text-[#8e4c2e]"
    },
    {
      title: "Antioxidant",
      benefit: "80 plus compounds with strong activity protects against oxidative stress",
      details: "Contains polyphenols and proanthocyanidins that neutralize free radicals.",
      icon: Sparkles,
      highlight: "80+ Bioactive Compounds",
      color: "bg-[#fef9e7] text-[#795900]"
    },
    {
      title: "Anti-inflammatory",
      benefit: "Reduces markers of inflammation and supports chronic disease prevention",
      details: "Downregulates inflammatory mediators to promote systemic cellular wellness.",
      icon: ShieldCheck,
      highlight: "Cellular Protection",
      color: "bg-[#e8f3e8] text-[#2d5a27]"
    },
    {
      title: "Antimicrobial",
      benefit: "Active against bacteria & fungi - Useful in food & oral care",
      details: "Natural cinnamaldehyde inhibits pathogenic micro-organisms naturally.",
      icon: Droplets,
      highlight: "Bio-Preservation",
      color: "bg-[#fbf2eb] text-[#8e4c2e]"
    },
    {
      title: "Safety",
      benefit: "Ultra-low coumarin. Safe for long-term daily use",
      details: "Contains less than 0.004% coumarin, eliminating liver toxicity concerns.",
      icon: CheckCircle2,
      highlight: "Daily Safe Standard",
      color: "bg-[#fef9e7] text-[#795900]"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1b1c1c] overflow-x-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-[#f5edd9]/60 via-[#fcf9f8] to-[#fcf9f8]">
        {/* Decorative background watermark */}
        <div className="absolute top-0 right-0 w-96 md:w-[600px] h-96 md:h-[600px] opacity-[0.04] pointer-events-none select-none">
          <img 
            src="/images/cinnamon_bush.png" 
            alt="" 
            className="w-full h-full object-contain object-top-right" 
          />
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#795900]/10 border border-[#795900]/20 text-[#795900] text-xs uppercase tracking-[0.2em] font-extrabold shadow-sm">
              <Leaf className="w-3.5 h-3.5" />
              <span>THE HERITAGE OF WELLNESS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#42190a] leading-[1.15] font-serif">
              Pure Ceylon Cinnamon & Modern Health
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-[#52443f] font-medium leading-relaxed max-w-2xl mx-auto">
              Explore the therapeutic potential, clinical safety, and eco-friendly wellness qualities of authentic Sri Lankan Ceylon Cinnamon.
            </p>

            {/* Quick Feature Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#eae7e7] rounded-lg text-xs font-semibold text-[#42190a] shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2d5a27]" />
                Ultra-Low Coumarin (&lt;0.004%)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#eae7e7] rounded-lg text-xs font-semibold text-[#42190a] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#795900]" />
                80+ Bioactive Compounds
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#eae7e7] rounded-lg text-xs font-semibold text-[#42190a] shadow-xs">
                <Award className="w-3.5 h-3.5 text-[#8e4c2e]" />
                Nutraceutical Grade
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN SECTION: A GOLDEN SPICE FOR MODERN HEALTH */}
      <section className="py-12 md:py-20 relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
          
          {/* Section Heading Banner */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-12 text-center"
          >
            <div className="inline-block relative">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide uppercase text-[#42190a] font-serif border-b-2 border-[#795900]/40 pb-3 inline-block">
                A GOLDEN SPICE FOR MODERN HEALTH
              </h2>
              <div className="w-16 h-1 bg-[#795900] mx-auto mt-[-2px] rounded-full" />
            </div>
          </motion.div>

          {/* Section 1 Grid: Green-Bordered Text Card + Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center mb-20">
            
            {/* Left Card (Green Rounded Border matching user sketch) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:col-span-6"
            >
              <div className="relative border-2 border-[#4a7c59] bg-[#f4f7f4] p-6 sm:p-8 md:p-10 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Botanical Badge */}
                <div className="flex items-center gap-2 mb-4 text-[#2d5a27] font-bold text-xs uppercase tracking-wider">
                  <FlaskConical className="w-4 h-4" />
                  <span>Clinical Research Overview</span>
                </div>

                {/* Paragraph from diagram */}
                <p className="text-sm sm:text-base md:text-lg text-[#1b1c1c] leading-relaxed font-medium">
                  Research shows Ceylon Cinnamon may help lower blood sugar, improve cholesterol and provide antioxidant and anti-inflammatory benefits, with far lower health risks than cassia due to its ultra-low coumarin content. Clinical trials confirm its safety and modest metabolic effects, making it a premium spice with nutraceutical potential. However, cinnamon is not a replacement for medication, though benefits are supportive
                </p>

                {/* Medical Disclaimer Note */}
                <div className="mt-6 pt-5 border-t border-[#4a7c59]/20 flex items-start gap-3 text-xs text-[#52443f]">
                  <Shield className="w-4 h-4 text-[#2d5a27] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Nutraceutical Support:</strong> Always consult your healthcare professional for chronic conditions. Ceylon Cinnamon acts as a dietary and metabolic supportive aid.
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Image Container */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/images/heritage_cinnamon_health.png" 
                  alt="Bundled Ceylon Cinnamon Quills and Ground Powder" 
                  className="w-full h-[340px] sm:h-[400px] md:h-[450px] object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Floating Tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-[#eae7e7] shadow-lg flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#42190a] font-serif">
                      Pure Cinnamomum Verum
                    </h4>
                    <p className="text-[11px] text-[#52443f] font-medium">
                      Hand-peeled layered quills with natural essential oils
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-[#795900] text-white text-[10px] font-bold rounded-full uppercase tracking-wider flex-shrink-0">
                    Authentic
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 3. SECTION 2: WELLNESS & BENEFITS TABLE */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-20"
          >
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#42190a] font-serif tracking-tight">
                Wellness & Health Characteristics
              </h3>
              <p className="text-xs sm:text-sm text-[#52443f] mt-2 font-medium">
                Targeted health benefits confirmed by modern nutritional and pharmacological studies.
              </p>
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-hidden bg-white border border-[#eae7e7] rounded-3xl shadow-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#42190a] text-white">
                    <th className="py-5 px-8 font-serif font-extrabold text-sm uppercase tracking-widest w-1/3">
                      Wellness Focus
                    </th>
                    <th className="py-5 px-8 font-serif font-extrabold text-sm uppercase tracking-widest w-2/3">
                      Health Benefits & Clinical Evidence
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eae7e7]">
                  {wellnessBenefits.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <tr 
                        key={idx} 
                        className={`transition-colors hover:bg-[#fcf9f8] ${idx % 2 === 0 ? "bg-white" : "bg-[#fcf9f8]/50"}`}
                      >
                        <td className="py-5 px-8 font-serif font-extrabold text-base text-[#42190a]">
                          <div className="flex items-center gap-3.5">
                            <div className={`p-2.5 rounded-xl ${item.color}`}>
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <div>
                              <span>{item.title}</span>
                              <span className="block text-[10px] font-sans font-bold uppercase tracking-wider text-[#795900] mt-0.5">
                                {item.highlight}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-5 px-8 text-sm sm:text-base text-[#1b1c1c] font-medium leading-relaxed">
                          <p className="font-semibold text-[#42190a]">{item.benefit}</p>
                          <p className="text-xs text-[#52443f] mt-1 font-normal">{item.details}</p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile Card Grid View */}
            <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
              {wellnessBenefits.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={idx} 
                    className="bg-white border border-[#eae7e7] p-5 rounded-2xl shadow-md space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${item.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-serif font-extrabold text-base text-[#42190a]">
                          {item.title}
                        </h4>
                        <span className="text-[10px] font-bold uppercase text-[#795900]">
                          {item.highlight}
                        </span>
                      </div>
                    </div>
                    <div className="border-t border-[#eae7e7] pt-3">
                      <p className="text-xs font-bold text-[#42190a]">{item.benefit}</p>
                      <p className="text-[11px] text-[#52443f] mt-1">{item.details}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* 4. SECTION 3: INSECT-REPELLENT QUALITY CALLOUT BOX */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16"
          >
            <div className="relative border-2 border-[#4a7c59] bg-[#f4f7f4] p-6 sm:p-10 rounded-[2.5rem] shadow-xl overflow-hidden">
              
              {/* Corner Watermark Leaf Icon */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-8 opacity-10 pointer-events-none text-[#2d5a27]">
                <Bug className="w-32 h-32 sm:w-40 sm:h-40" />
              </div>

              <div className="relative z-10 max-w-3xl">
                {/* Header Tag */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2d5a27]/10 text-[#2d5a27] text-xs font-bold uppercase tracking-wider mb-4">
                  <Bug className="w-4 h-4" />
                  <span>Natural Bio-Protection</span>
                </div>

                {/* Headline from sketch */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#42190a] font-serif mb-4 tracking-tight">
                  Insect-Repellent Quality of Ceylon Cinnamon
                </h3>

                {/* Text from sketch */}
                <p className="text-sm sm:text-base md:text-lg text-[#1b1c1c] font-medium leading-relaxed mb-6">
                  Beyond flavour and health, Ceylon cinnamon&apos;s natural oils (Cinnamaldehyde &amp; eugenol) act as an eco-friendly insect repellent (mosquitoes, ants, and other insects), making it valuable in wellness and household products
                </p>

                {/* Compound Breakdown Tags */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-[#4a7c59]/20 flex items-center gap-2.5">
                    <Sun className="w-4 h-4 text-[#795900]" />
                    <div>
                      <span className="block text-xs font-bold text-[#42190a]">Cinnamaldehyde</span>
                      <span className="block text-[10px] text-[#52443f]">Bark Oil Active</span>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-[#4a7c59]/20 flex items-center gap-2.5">
                    <Leaf className="w-4 h-4 text-[#2d5a27]" />
                    <div>
                      <span className="block text-xs font-bold text-[#42190a]">Eugenol</span>
                      <span className="block text-[10px] text-[#52443f]">Leaf Oil Active</span>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-[#4a7c59]/20 flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#8e4c2e]" />
                    <div>
                      <span className="block text-xs font-bold text-[#42190a]">Eco-Friendly</span>
                      <span className="block text-[10px] text-[#52443f]">Non-Toxic Bio-Shield</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 5. CEYLON VS CASSIA COUMARIN SAFETY BREAKDOWN */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-20 bg-[#42190a] text-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#ffc641]">
                  Safety & Purity Advantage
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-serif leading-tight">
                  Why Coumarin Content Matters for Your Daily Health
                </h3>
                <p className="text-xs sm:text-sm text-[#eae7e7]/80 leading-relaxed font-medium">
                  Cassia cinnamon contains up to 1% coumarin—a compound known to cause liver damage when consumed regularly. In contrast, True Ceylon Cinnamon contains virtually undetectable trace amounts (&lt;0.004%), making it completely safe for daily culinary and wellness use.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <div className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                    <span className="block text-xs text-[#eae7e7]/70 font-semibold">Ceylon Cinnamon</span>
                    <span className="text-lg font-extrabold text-[#ffc641]">0.004% Coumarin</span>
                  </div>
                  <div className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                    <span className="block text-xs text-[#eae7e7]/70 font-semibold">Cassia Cinnamon</span>
                    <span className="text-lg font-extrabold text-red-400">1.000% Coumarin (High Risk)</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <Link 
                  href="/products/ceylon-cinnamon"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#795900] hover:bg-[#8e4c2e] text-white text-xs sm:text-sm font-extrabold uppercase tracking-widest rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span>Explore Ceylon Cinnamon</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
