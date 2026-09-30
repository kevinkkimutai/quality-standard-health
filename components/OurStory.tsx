import { Users } from "lucide-react";
import c from "@/images/services/serv2.jpg"
import Image from "next/image";

export default function OurStory() {
  return (
    <section className="max-w-7xl mx-auto px-2 pt-0 md:pt-16">
      <div className="mx-auto grid gap-5 lg:grid-cols-2">
        <div className="relative">
          <div className="relative md:aspect-[4/3] w-full h-85 overflow-hidden rounded-[5px] bg-linear-to-br from-plum to-navy shadow-card">
            
              <Image src={c} alt="Healthcare professionals supporting a patient" fill className="object-cover" />
           
          </div>

          <div className="absolute bottom-1 right-1 flex max-w-60 items-start gap-3 rounded-[5px] bg-white p-2 shadow-card ">
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-lavender">
              <Users className="h-5 w-5 text-plum" strokeWidth={2} />
            </span>
            <span>
              <span className="block text-sm font-semibold text-navy">
                Trusted Healthcare Partner
              </span>
              <span className="block text-xs leading-relaxed text-muted">
                For Every Worker and Workplace
              </span>
            </span>
          </div>
        </div>

        <div className="lg:pl-6">
          <p className="text-brand font-semibold">OUR STORY</p>
          <h2 className="font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
            Quality Standard
            <br />
            Health Care Ltd
          </h2>
          <p className="mt-2 text-md leading-relaxed text-muted">
            Quality Standard Health Care Ltd is a Kenyan company established
            with a simple but powerful mission — to improve the health and
            well-being of individuals, communities and workplaces through
            high-quality clinical care and practical Occupational Safety and
            Health services.
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">
            We are a team of dedicated healthcare professionals committed to
            providing workplace risk support, statutory training, fit-to-work
            medical assessments, vocational rehabilitation and timely clinical
            support. Our goal is to help every worker stay safe, healthy and
            supported throughout their work journey.
          </p>
        </div>
      </div>
    </section>
  );
}
