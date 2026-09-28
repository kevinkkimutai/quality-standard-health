import type { Metadata } from "next";
import CTA from "@/components/CTA";
import OurStory from "@/components/OurStory";
import heroDoctor from "@/images/hero-doctor.jpg";
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
              src={heroDoctor}
              alt="A smiling doctor in a white coat holding a tablet, with the caption 'Better Care for a Healthier Tomorrow'"
              fill
              sizes="52vw"
              className="object-cover object-right"
              priority
            />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-2 py-16 sm:px-2 lg:py-24">
          <div className="max-w-xl lg:pr-[8%] text-brand">
            <span className="text-lg">About Us</span>
            <h1 className="font-display text-5xl font-bold  text-ink sm:text-6xl">
              Committed to <span className="text-brand"> Better Health</span>
            </h1>
            <p className="mt-3 max-w-md text-ink/70">
              We provide high-quality, professional and comprehensive healthcare services to meet the needs of our clients and the community.
            </p>

          </div>

          {/* Photo, mobile/tablet only: plain card, no glow panel */}
          <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[5px] shadow-xl lg:hidden">
            <Image src={heroDoctor} alt="A smiling doctor in a white coat holding a tablet, with the caption 'Better Care for a Healthier Tomorrow'" fill sizes="100vw" className="object-cover" priority />
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