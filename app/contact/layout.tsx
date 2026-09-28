import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Quality Standard Health Care LTD",
  description: "Contact Quality Standard Health Care LTD for healthcare, occupational health, training and audit services in Kenya.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
