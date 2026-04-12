import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title:
    "The Derma Clinic | Dr. Vivek Choudhary — Best Dermatologist in Bhopal",
  description:
    "Experience world-class clinical, aesthetic, and laser dermatology by Dr. Vivek Choudhary (MBBS, MD). Specializing in skin, hair, and cosmetic treatments in Bhopal.",
  keywords: [
    "Dermatologist in Bhopal",
    "Best Dermatologist in Bhopal",
    "Skin Specialist in Bhopal",
    "The Derma Clinic",
    "Dr. Vivek Choudhary",
    "Laser Hair Removal Bhopal",
    "Acne Treatment Bhopal",
    "Hair Specialist Bhopal",
    "Cosmetic Dermatology",
    "Dermatologist near Aashima Mall",
  ],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "The Derma Clinic | Dr. Vivek Choudhary — Dermatologist in Bhopal",
    description:
      "Expert skin, hair, and laser treatments by Dr. Vivek Choudhary. Visit Bhopal's premier dermatology and cosmetic clinic.",
    url: "https://the-derma-clinic.vercel.app", // Fallback URL
    siteName: "The Derma Clinic",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${jost.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
