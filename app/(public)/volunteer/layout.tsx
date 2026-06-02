import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer",
  description: "Volunteer with West African Cheerleading (WAC). Opportunities in event management, coaching, administration, marketing, and regional coordination.",
  keywords: ["WAC volunteer", "cheerleading volunteer", "West Africa sports volunteer", "cheerleading careers", "WAC opportunities"],
  alternates: { canonical: "/volunteer" },
  openGraph: { title: "Volunteer | West African Cheerleading", description: "Volunteer opportunities with WAC — event management, coaching, administration, and more.", url: "/volunteer", images: [{ url: "/waclogo.png", width: 1200, height: 630, alt: "WAC Volunteer" }] },
  twitter: { card: "summary_large_image", title: "Volunteer | West African Cheerleading", description: "Volunteer with WAC.", images: ["/waclogo.png"] },
};

export default function VolunteerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
