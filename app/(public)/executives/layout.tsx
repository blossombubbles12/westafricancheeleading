import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Meet the leadership team of West African Cheerleading (WAC) — the dedicated professionals driving cheerleading development across West Africa.",
  keywords: ["WAC leadership", "West African Cheerleading board", "WAC executives", "cheerleading leadership Africa"],
  alternates: { canonical: "/executives" },
  openGraph: { title: "Leadership | West African Cheerleading", description: "The leadership team driving cheerleading development across West Africa.", url: "/executives", images: [{ url: "/waclogo.png", width: 1200, height: 630, alt: "WAC Leadership" }] },
  twitter: { card: "summary", title: "Leadership | West African Cheerleading", description: "Leadership driving cheerleading in West Africa.", images: ["/waclogo.png"] },
};

export default function ExecutivesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
