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
    "Rejuva Clinic | Dr. Animesh Saxena — Best Dermatologist in Bhopal",
  description:
    "Dr. Animesh Saxena is a leading dermatologist in Bhopal specializing in skin, hair, and cosmetic treatments. Expert in acne, pigmentation, hair fall & hair transplant. Visit Rejuva Clinic, Padmanabh Nagar, Bhopal.",
  keywords: [
    "Dermatologist in Bhopal",
    "Best Dermatologist in Bhopal",
    "Skin Specialist in Bhopal",
    "Rejuva Clinic Bhopal",
    "Dr. Animesh Saxena",
    "Hair Transplant Bhopal",
    "Acne Treatment Bhopal",
    "Hair Fall Treatment Bhopal",
    "Dermatosurgeon Bhopal",
    "Pigmentation Treatment Bhopal",
    "Dermatologist Padmanabh Nagar Bhopal",
    "PRP Therapy Bhopal",
  ],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Rejuva Clinic | Dr. Animesh Saxena — Dermatologist in Bhopal",
    description:
      "Expert skin, hair, and cosmetic treatments by Dr. Animesh Saxena (MBBS, MD Dermatology). Advanced hair transplant & skin clinic in Bhopal.",
    url: "https://rejuva-clinic.vercel.app",
    siteName: "Rejuva Clinic",
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
