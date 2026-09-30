/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { TEAM } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Team | Quality Standard Health Care LTD",
  description: "Meet the healthcare professionals at Quality Standard Health Care LTD.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero title="Our Team" text="Our team of healthcare professionals is dedicated to providing compassionate, high-quality care and support to our clients." />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((t) => (
            <div key={t.name} className="overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm">
              <img src={t.img} alt={t.name} className="aspect-[4/5] w-full object-cover" />
              <div className="p-5">
                <p className="font-bold text-ink">{t.name}</p>
                <p className="text-sm text-ink/60">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-xl text-sm text-ink/60">
          Full profiles, qualifications and years of experience for each team member can be added once details are confirmed.
        </p>
      </section>
      <CtaBand />
    </>
  );
}