import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ADDRESS, EMAIL, PHONE, SITE_URL } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Quality Standard Health Care LTD | Your Health Our Priority",
  description: "Comprehensive occupational health, medical, training and audit services for organizations and individuals across Kenya.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Quality Standard Health Care LTD",
    title: "Quality Standard Health Care LTD | Your Health Our Priority",
    description: "Comprehensive occupational health, medical, training and audit services across Kenya.",
    locale: "en_KE",
    images: [
      {
        url: "/logo.png",
        alt: "Quality Standard Health Care medical care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quality Standard Health Care LTD | Your Health Our Priority",
    description: "Comprehensive occupational health, medical, training and audit services across Kenya.",
    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": `${SITE_URL}/#organization`,
      name: "Quality Standard Health Care LTD",
      url: SITE_URL,
      description: "Professional occupational health, medical, training and audit services across Kenya.",
      telephone: PHONE,
      email: EMAIL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
        postalCode: "00100",
        streetAddress: ADDRESS,
      },
      areaServed: { "@type": "Country", name: "Kenya" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Quality Standard Health Care LTD",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} bg-white font-sans text-ink antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
