import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support WAC",
  description: "Support West African Cheerleading (WAC) with a donation. Your contribution helps develop cheerleading programs, training, and competitions across West Africa.",
  openGraph: { title: "Support West African Cheerleading", description: "Your contribution fuels our mission to develop cheerleading across West Africa.", url: "/donate", images: [{ url: "/waclogo.png", alt: "Support WAC" }] },
  twitter: { title: "Support | West African Cheerleading", description: "Support cheerleading development in West Africa.", images: ["/waclogo.png"] },
};

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
