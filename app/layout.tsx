import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const siteUrl = "https://wacleaders.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "West African Cheerleading (WAC) — Empowering Youth. Building Champions.",
    template: "%s | West African Cheerleading",
  },
  description:
    "West African Cheerleading (WAC) is the premier regional sports organization dedicated to promoting cheerleading, developing athletes, and building champions across West Africa. Join the movement.",
  keywords: [
    "West African Cheerleading",
    "WAC Cheerleading",
    "Cheerleading Africa",
    "Youth Sports Development",
    "Cheerleading Nigeria",
    "Cheerleading Ghana",
    "Cheer Sport Africa",
    "Cheerleading Championship",
    "Coach Certification",
    "Cheerleading West Africa",
    "African Cheerleading",
    "Cheerleading Programs",
    "Athlete Development",
    "Cheer Competition",
  ],
  authors: [{ name: "West African Cheerleading", url: siteUrl }],
  creator: "WAC Media",
  publisher: "West African Cheerleading",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "West African Cheerleading",
    title: "West African Cheerleading (WAC) — Empowering Youth. Building Champions.",
    description:
      "Empowering youth, building champions, and uniting West Africa through cheerleading. Join the movement across West Africa.",
    images: [
      {
        url: "/waclogo.png",
        width: 1200,
        height: 630,
        alt: "West African Cheerleading — Uniting West Africa Through Sport",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "West African Cheerleading (WAC)",
    description:
      "Empowering youth, building champions, and uniting West Africa through cheerleading.",
    images: ["/waclogo.png"],
    creator: "@wacleaders",
  },
  icons: {
    icon: [{ url: "/waclogo.png", type: "image/png" }],
    apple: [{ url: "/waclogo.png" }],
    shortcut: "/waclogo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {},
  category: "sports",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SportsOrganization",
      "@id": `${siteUrl}/#organization`,
      name: "West African Cheerleading",
      alternateName: "WAC",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/waclogo.png`,
        width: 512,
        height: 512,
      },
      description:
        "The premier regional sports organization dedicated to promoting cheerleading, developing athletes, and building champions across West Africa.",
      foundingDate: "2024",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Accra",
        addressCountry: "GH",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          email: "info@westafricancheerleading.org",
          contactType: "general",
          areaServed: "West Africa",
          availableLanguage: ["English", "French"],
        },
      ],
      sameAs: [
        "https://www.facebook.com/wacleaders",
        "https://twitter.com/wacleaders",
        "https://www.instagram.com/wacleaders",
        "https://www.linkedin.com/company/wacleaders",
      ],
      areaServed: {
        "@type": "Country",
        name: "West Africa",
      },
      knowsAbout: [
        "Cheerleading",
        "Youth Development",
        "Athlete Training",
        "Coach Certification",
        "Sports Governance",
        "Competitions",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "West African Cheerleading",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-NG",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href={siteUrl} />
      </head>
      <body
        className={`${sans.variable} ${outfit.variable} antialiased font-sans flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
