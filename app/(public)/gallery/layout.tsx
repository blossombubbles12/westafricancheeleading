import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Gallery",
  description: "Explore the visual archive of West African Cheerleading (WAC). Browse photo albums and videos from cheerleading competitions, training camps, and community events.",
  keywords: ["WAC media gallery", "cheerleading photos West Africa", "WAC photo albums", "cheerleading videos", "African cheerleading gallery"],
  alternates: { canonical: "/media" },
  openGraph: { title: "Media Gallery | West African Cheerleading", description: "Browse the official photo and video archive of WAC — competitions, training, and community events.", url: "/media", images: [{ url: "/waclogo.png", width: 1200, height: 630, alt: "WAC Media Gallery" }] },
  twitter: { card: "summary_large_image", title: "Media Gallery | West African Cheerleading", description: "Photos and videos from WAC cheerleading events and programs.", images: ["/waclogo.png"] },
};

export default function MediaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
