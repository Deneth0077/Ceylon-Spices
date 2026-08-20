import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artisanal Ceylon Spice Collection",
  description: "Browse 100% pure Single-Origin Ceylon Cinnamon quills (Alba, C5, C4), Organic Black Pepper, Sun-Dried Garcinia, and Cinnamon Essential Oils from True Cinnamon Care.",
  openGraph: {
    title: "Artisanal Ceylon Spice Collection | True Cinnamon Care",
    description: "Browse export-grade Ceylon Cinnamon, Black Pepper, Garcinia, and Essential Oils.",
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
