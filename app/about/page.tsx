import type { Metadata } from "next";
import CTA from "@/components/CTA";
import OurStory from "@/components/OurStory";
import aboutHero from "@/images/05-healthcare-team.png";
import Image from "next/image";
import TrustStrip from "@/components/TrustStrip";
import MissionVision from "@/components/MissionVision";
import Values from "@/components/Values";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata: Metadata = {
  title: "About Us | Quality Standard Health Care LTD",
  description: "Quality Standard Health Care LTD is a Kenyan-registered company providing occupational health, medical, training and audit services.",
};

export default function AboutPage() {
  return (
    <>
        <section className="relative overflow-hidden bg-linear-to-b from-brand-soft to-white md:py-12">
        {/* Photo, desktop only: fills the full section height, feathered on the left with a CSS mask
            (not a baked-in image) so it always covers correctly regardless of the section's actual height. */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] lg:block">
          <div className="absolute -inset-x-10 -inset-y-16 rounded-[4rem] bg-brand/25 blur-3xl" />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 30%)",
              maskImage: "linear-gradient(to right, transparent 0%, black 30%)",
            }}
          >
            <Image
              src={aboutHero}
              alt="African healthcare team standing together in a modern clinic"
              fill
              sizes="52vw"
              className="object-cover object-right"
              priority
            />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-2 py-16 sm:px-2 lg:py-24">
          <div className="max-w-xl lg:pr-[8%] text-brand">
            <span className="text-lg">About Quality Standard Health Care</span>
            <h1 className="font-display text-4xl font-bold  text-ink sm:text-5xl">
              A step to safety is a step to <span className="text-brand"> better health</span>
            </h1>
            <p className="mt-3 max-w-md text-ink/70">
              Our core business is Occupational Safety and Health. We combine
              safety practice with clinical care to keep every worker safe,
              healthy and fit to work.
            </p>

          </div>

          {/* Photo, mobile/tablet only: plain card, no glow panel */}
          <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[5px] shadow-xl lg:hidden">
            <Image src={aboutHero} alt="African healthcare team standing together in a modern clinic" fill sizes="100vw" className="object-cover" priority />
          </div>
        </div>
      </section>
      <section className="bg-[#fbfaff] py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-2">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#682696]">
            WHAT WE STAND FOR
          </p>
          <h2 className="mt-2 max-w-3xl text-xl font-bold text-[#21194b] sm:text-4xl">
            Safety signs and clinical signs, read together.
          </h2>
          <p className="mt-3 max-w-3xl text-md leading-[1.6] text-[#777187]">
            From PPE and hazard warnings to medical assessments and first aid,
            our work connects prevention with care. We support corporates,
            NGOs, schools, warehouses, workshops, call centres, roads and every
            other workplace where people work.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["/safety/ppe-sign.svg", "Prevent"],
              ["/safety/warning-sign.svg", "Protect"],
              ["/safety/first-aid-sign.svg", "Assess"],
              ["/safety/certified-sign.svg", "Support"],
            ].map(([src, label]) => (
              <div key={label} className="flex items-center gap-3 rounded-[5px] border border-[#ebe6f5] bg-white p-3">
                <Image src={src} alt={`${label} safety sign`} width={52} height={52} />
                <span className="text-sm font-bold text-[#35265d]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
<div className="space-y-10 md:space-y-16">
  <OurStory />
  <TrustStrip />
  <MissionVision />
  <Values />
  <WhyChooseUs />
  </div>

  

      <CTA />
    </>
  );
}
