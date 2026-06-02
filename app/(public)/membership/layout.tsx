import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership",
  description: "Join West African Cheerleading (WAC). Connect with athletes, coaches, schools, clubs, and organizations committed to cheerleading development across West Africa.",
  keywords: ["WAC membership", "cheerleading West Africa membership", "join WAC", "cheerleading community", "African cheerleading network"],
  alternates: { canonical: "/membership" },
  openGraph: { title: "Membership | West African Cheerleading", description: "Join the WAC community — athletes, coaches, schools, clubs, and organizations united through cheerleading.", url: "/membership", images: [{ url: "/waclogo.png", width: 1200, height: 630, alt: "WAC Membership" }] },
  twitter: { card: "summary", title: "Membership | West African Cheerleading", description: "Join the WAC network of cheerleading enthusiasts across West Africa.", images: ["/waclogo.png"] },
};

export default function MembershipLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
