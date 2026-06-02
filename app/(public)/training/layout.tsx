import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training & Certification",
  description: "WAC training and certification programs for coaches, judges, athletes, and event officials across West Africa.",
  keywords: ["WAC training", "coach certification", "judge certification", "athlete workshops", "safety training", "cheerleading certification"],
  alternates: { canonical: "/training" },
  openGraph: { title: "Training & Certification | West African Cheerleading", description: "Professional training and certification programs for cheerleading coaches, judges, and officials.", url: "/training", images: [{ url: "/waclogo.png", width: 1200, height: 630, alt: "WAC Training" }] },
  twitter: { card: "summary_large_image", title: "Training | West African Cheerleading", description: "Coach and judge certification programs.", images: ["/waclogo.png"] },
};

export default function TrainingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
