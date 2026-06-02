import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with West African Cheerleading (WAC). Reach us for membership, partnerships, training, competitions, media inquiries, and volunteer opportunities.",
  keywords: ["contact WAC", "West African Cheerleading contact", "cheerleading West Africa", "WAC membership", "cheerleading partnership"],
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact Us | West African Cheerleading (WAC)", description: "Reach out to WAC for membership, partnerships, training, competitions, and media inquiries.", url: "/contact", images: [{ url: "/waclogo.png", width: 1200, height: 630, alt: "Contact West African Cheerleading" }] },
  twitter: { card: "summary", title: "Contact Us | West African Cheerleading", description: "Get in touch with WAC for membership, partnerships, or volunteering.", images: ["/waclogo.png"] },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
