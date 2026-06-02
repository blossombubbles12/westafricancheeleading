import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Media",
  description: "The latest news, updates, and stories from West African Cheerleading (WAC). Stay informed about championship results, athlete success stories, and community impact.",
  keywords: ["WAC news", "cheerleading news West Africa", "WAC updates", "African cheerleading", "cheerleading championships"],
  alternates: { canonical: "/news" },
  openGraph: { title: "News & Media | West African Cheerleading", description: "Updates, stories, and announcements from WAC — championships, training, and community impact.", url: "/news", images: [{ url: "/waclogo.png", width: 1200, height: 630, alt: "WAC News" }] },
  twitter: { card: "summary_large_image", title: "WAC News | West African Cheerleading", description: "Latest updates and stories from WAC.", images: ["/waclogo.png"] },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
