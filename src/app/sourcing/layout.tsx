import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "From Ceylon Soil To Your Table | Our Sourcing",
  description: "Explore True Cinnamon Care's ethical sourcing, estate plantations in Sri Lanka's southern hills, sustainable harvesting, and quality standards.",
  openGraph: {
    title: "From Ceylon Soil To Your Table | Our Sourcing | True Cinnamon Care",
    description: "Discover how True Cinnamon Care sources 100% single-origin Ceylon spices directly from sustainable estate harvests in Sri Lanka.",
  },
};

export default function SourcingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
