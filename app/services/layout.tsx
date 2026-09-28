import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Services | Quality Standard Health Care LTD",
  description: "Explore medical, occupational health, corporate wellness, training, audit and diagnostic services from Quality Standard Health Care LTD.",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
