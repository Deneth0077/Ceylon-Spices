import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Wholesale Inquiries",
  description: "Get in touch with True Cinnamon Care for wholesale export inquiries, bulk spice container orders, sample requests, and global distribution.",
  openGraph: {
    title: "Contact & Wholesale Inquiries | True Cinnamon Care",
    description: "Contact True Cinnamon Care for bulk Ceylon Cinnamon, Organic Black Pepper, and Garcinia export inquiries.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
