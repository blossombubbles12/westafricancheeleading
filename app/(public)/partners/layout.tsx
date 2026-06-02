import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners & Sponsors",
  description: "Partner with West African Cheerleading (WAC). Corporate sponsorships, educational partnerships, and development collaborations.",
  keywords: ["WAC partners", "cheerleading sponsorship", "corporate partnership West Africa", "WAC sponsors", "youth sports partnership"],
  alternates: { canonical: "/partners" },
  openGraph: { title: "Partners & Sponsors | West African Cheerleading", description: "Partner with WAC to support cheerleading development across West Africa.", url: "/partners", images: [{ url: "/waclogo.png", width: 1200, height: 630, alt: "WAC Partners" }] },
  twitter: { card: "summary_large_image", title: "Partners | West African Cheerleading", description: "Partner with WAC.", images: ["/waclogo.png"] },
};

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
