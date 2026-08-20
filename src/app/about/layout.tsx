import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us & Heritage",
  description: "Learn about True Cinnamon Care's heritage, sustainable Sri Lankan spice plantations, and our commitment to bringing pure Ceylon spices from soil to table.",
  openGraph: {
    title: "About Us & Heritage | True Cinnamon Care",
    description: "Discover True Cinnamon Care's commitment to single-origin authenticity, ethical farming, and sustainable Ceylon spice production.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
