import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Competitions & Events",
  description: "Stay updated on WAC cheerleading competitions, championships, school festivals, coaching conferences, and community events across West Africa.",
  keywords: ["WAC events", "cheerleading competitions West Africa", "West African cheerleading championship", "cheer events", "WAC calendar"],
  alternates: { canonical: "/events" },
  openGraph: { title: "Competitions & Events | West African Cheerleading", description: "Official calendar of cheerleading competitions, championships, and events organized by WAC.", url: "/events", images: [{ url: "/waclogo.png", width: 1200, height: 630, alt: "WAC Events" }] },
  twitter: { card: "summary_large_image", title: "WAC Events | West African Cheerleading", description: "Competitions, championships, and cheerleading events across West Africa.", images: ["/waclogo.png"] },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
