import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://truecca.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "True Cinnamon Care - Premium Sri Lankan Organic Spices & Export",
    template: "%s | True Cinnamon Care",
  },
  description: "True Cinnamon Care is Sri Lanka's premier producer and exporter of 100% pure Single-Origin Ceylon Cinnamon (Cinnamomum Verum), Organic Black Pepper (High Piperine), Dried Garcinia (Goraka), and Pure Essential Oils directly from sustainable estate harvests.",
  keywords: [
    "truecca.com",
    "truecca",
    "True Cinnamon Care",
    "Ceylon Cinnamon",
    "True Cinnamon",
    "Sri Lankan Spices",
    "Organic Ceylon Spices",
    "Cinnamon Alba",
    "C5 Cinnamon",
    "C4 Cinnamon",
    "Black Pepper Sri Lanka",
    "High Piperine Black Pepper",
    "Ceylon Garcinia",
    "Goraka",
    "Cinnamon Leaf Oil",
    "Wholesale Spices Export Sri Lanka",
    "Ceylon Spice Exporters",
  ],
  authors: [{ name: "True Cinnamon Care" }],
  creator: "True Cinnamon Care",
  publisher: "True Cinnamon Care",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "True Cinnamon Care - Premium Sri Lankan Organic Spices & Export",
    description: "Discover 100% pure Single-Origin Ceylon Cinnamon, Organic Black Pepper, Dried Garcinia, and Essential Oils sourced directly from Sri Lanka.",
    url: siteUrl,
    siteName: "True Cinnamon Care",
    images: [
      {
        url: "/images/hero_tcc_banner.png",
        width: 1200,
        height: 630,
        alt: "True Cinnamon Care - Premium Sri Lankan Spices",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "True Cinnamon Care - Premium Sri Lankan Organic Spices & Export",
    description: "100% Single-Origin Ceylon Cinnamon & Premium Spices Exporter from Sri Lanka.",
    images: ["/images/hero_tcc_banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/tcc_favicon.png", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "True Cinnamon Care",
  "url": siteUrl,
  "logo": `${siteUrl}/images/navbar_brand_logo.png`,
  "description": "Premium exporter of Single-Origin Ceylon Cinnamon, Organic Black Pepper, Dried Garcinia, and Essential Oils from Sri Lanka.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+94-77-289-3030",
    "contactType": "customer service",
    "areaServed": "Worldwide",
    "availableLanguage": ["English", "Sinhala"]
  },
  "sameAs": [
    "https://wa.me/94772893030"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#fcf9f8] text-[#1b1c1c] relative" suppressHydrationWarning>
        <CartProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </CartProvider>

        {/* Mobile & Desktop Floating WhatsApp Fast Inquiry Button */}
        <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center group pointer-events-auto select-none">
          {/* Desktop & Mobile Hover Text Badge */}
          <a
            href="https://wa.me/94772893030"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 pr-5 pl-4 py-2.5 bg-[#1b1c1c]/90 text-white text-xs font-bold rounded-full shadow-2xl backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 -mr-4 transition-all duration-300 transform translate-x-3 group-hover:translate-x-0"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Chat 24/7 on WhatsApp</span>
          </a>

          <a
            href="https://wa.me/94772893030"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 w-13 h-13 sm:w-14 sm:h-14 bg-gradient-to-tr from-[#128C7E] to-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_10px_30px_rgba(37,211,102,0.55)] border-2 border-white/90 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Contact True Cinnamon Care on WhatsApp"
          >
            {/* Spreading Ambient Radar Waves */}
            <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping duration-1000 pointer-events-none" />
            <span className="absolute -inset-1 rounded-full bg-[#25D366]/20 animate-pulse duration-700 pointer-events-none blur-[2px]" />

            <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-white drop-shadow-md relative z-10" viewBox="0 0 24 24">
              <path d="M12.012 2c-5.506 0-9.98 4.473-9.98 9.978 0 1.76.459 3.473 1.33 4.985l-1.413 5.161 5.281-1.385c1.455.794 3.1 1.214 4.777 1.215h.004c5.503 0 9.979-4.474 9.979-9.979 0-2.666-1.037-5.17-2.922-7.054C17.189 3.037 14.68 2 12.012 2zm5.952 14.154c-.25.7-1.458 1.341-2.036 1.429-.518.077-1.175.11-1.896-.12-.436-.138-.996-.323-1.713-.633-3.013-1.301-4.982-4.335-5.132-4.536-.15-.202-1.227-1.635-1.227-3.12 0-1.485.776-2.213 1.052-2.515.276-.302.602-.377.802-.377.2 0 .401 0 .576.01.186.01.433-.07.676.517.25.604.851 2.084.926 2.235.076.15.127.326.026.527-.101.201-.151.327-.302.503-.151.176-.317.392-.453.527-.151.15-.308.313-.132.615.177.301.782 1.291 1.68 2.091 1.154 1.029 2.126 1.347 2.428 1.498.302.151.477.125.652-.076.174-.2.749-.88 1.025-1.182.276-.302.476-.251.777-.15.302.15 1.91.93 2.24 1.094.33.164.55.244.625.37.075.128.075.731-.176 1.435z"/>
            </svg>
          </a>
        </div>
      </body>
    </html>
  );
}

