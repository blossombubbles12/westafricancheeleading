import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs",
  description: "Explore WAC programs — athlete development, coach education, school programs, competitions, community engagement, and international pathways.",
  keywords: ["WAC programs", "cheerleading programs West Africa", "athlete development", "coach education", "school cheerleading"],
  alternates: { canonical: "/programs" },
  openGraph: { title: "Programs | West African Cheerleading", description: "WAC programs developing athletes, coaches, and communities through cheerleading.", url: "/programs", images: [{ url: "/waclogo.png", width: 1200, height: 630, alt: "WAC Programs" }] },
  twitter: { card: "summary_large_image", title: "Programs | West African Cheerleading", description: "Explore WAC cheerleading programs.", images: ["/waclogo.png"] },
};

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
