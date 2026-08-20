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

        {/* Persistent Spreading Wave WhatsApp Floating Button */}
        <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center pointer-events-auto">
          {/* Spreading Outer Radar Waves */}
          <span className="absolute w-14 h-14 rounded-full bg-[#25D366]/40 animate-ping duration-1000 pointer-events-none" />
          <span className="absolute w-16 h-16 rounded-full bg-[#25D366]/25 animate-pulse duration-700 pointer-events-none blur-[2px]" />

          <a
            href="https://wa.me/94772893030"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl whatsapp-pulse hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Contact us on WhatsApp"
          >
            <svg className="w-7 h-7 fill-white drop-shadow-md" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.49-4.734c1.652.98 3.284 1.493 4.887 1.493 5.485 0 9.948-4.467 9.95-9.95.002-2.653-1.03-5.15-2.906-7.03C16.6 1.899 14.1 .865 11.446.865c-5.485 0-9.949 4.469-9.95 9.954-.001 1.905.518 3.738 1.5 5.367l-.955 3.486 3.572-.937zm12.333-6.242c-.302-.151-1.786-.881-2.062-.982-.276-.1-.476-.151-.676.151-.2.302-.776.982-.95 1.182-.175.201-.35.226-.652.076-.302-.151-1.274-.469-2.428-1.498-.898-.8-1.503-1.79-1.68-2.091-.176-.302-.019-.465.132-.615.136-.135.302-.351.453-.527.151-.176.201-.302.302-.503.101-.201.05-.377-.026-.527-.075-.151-.676-1.631-.926-2.235-.243-.587-.49-.507-.676-.517-.175-.01-.376-.01-.576-.01-.2 0-.526.075-.802.377-.276.302-1.052 1.03-1.052 2.515 0 1.485 1.077 2.918 1.227 3.12.15.201 2.119 3.235 5.132 4.536.717.31 1.277.495 1.713.633.721.23 1.378.197 1.896.12.578-.088 1.786-.73 2.037-1.435.251-.704.251-1.307.176-1.435-.076-.12-.276-.197-.577-.348z" />
            </svg>
          </a>
        </div>
      </body>
    </html>
  );
}

