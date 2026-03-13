import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
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
    "Thai massage Kathmandu",
    "body massage Kathmandu",
    "Hridaya spa",
    "deep tissue massage",
    "Moroccan bath Kathmandu",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Hridaya Wellness & Spa Center",
    title: "Hridaya Wellness & Spa Center | Tokha Road, Kathmandu",
    description:
      "Premium massage therapies and holistic wellness services in Kathmandu. Experience tranquility at Hridaya Spa.",
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
      </body>
    </html>
  );
}
