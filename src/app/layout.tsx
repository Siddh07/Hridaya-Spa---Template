import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://hridayaspa.com"),
  title: {
    default: "Hridaya Wellness & Spa Center | Tokha Road, Kathmandu",
    template: "%s | Hridaya Wellness & Spa",
  },
  description:
    "Hridaya Wellness and Spa Center offers premium massage therapies, body treatments, and holistic wellness services in Greenland Chowk, Tokha Road, Kathmandu. Book your appointment today.",
  keywords: [
    "spa Kathmandu",
    "wellness center Tokha",
    "massage center Nepal",
    "Chandan oil massage Kathmandu",
    "body massage Kathmandu",
    "Hridaya spa",
    "Moroccan bath Kathmandu",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Hridaya Wellness & Spa Center",
    title: "Hridaya Wellness & Spa Center | Tokha Road, Kathmandu",
    description:
      "Premium massage therapies and holistic wellness services in Kathmandu. Experience tranquility at Hridaya Spa.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hridaya Wellness & Spa Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hridaya Wellness & Spa Center | Kathmandu",
    description: "Premium massage therapies and holistic wellness in Kathmandu.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
