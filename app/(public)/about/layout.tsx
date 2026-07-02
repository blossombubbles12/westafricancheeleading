import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about West African Cheerleading (WAC) — our mission, vision, leadership, and commitment to developing cheerleading across West Africa.",
  keywords: ["WAC mission", "West African Cheerleading history", "cheerleading West Africa", "WAC about", "African cheerleading organization"],
  alternates: { canonical: "/about" },
  openGraph: { title: "About Us | West African Cheerleading (WAC)", description: "Discover how WAC is building the future of cheerleading across West Africa through programs, competitions, and certification.", url: "/about", images: [{ url: "/waclogo.png", width: 1200, height: 630, alt: "About West African Cheerleading" }] },
  twitter: { card: "summary_large_image", title: "About Us | West African Cheerleading", description: "Our mission, leadership, and strategic approach to cheerleading development in West Africa.", images: ["/waclogo.png"] },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
