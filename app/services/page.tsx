"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  CircleCheck,
  Heart,
  Mail,
  Microscope,
  Pill,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";
import { useState } from "react";
import heroDoctor from "@/images/hero-doctor.jpg";
import servoce from "@/images/services/serv-1.jpg"
import medical from "@/images/services/serv-1.jpg"
import occupational from "@/images/services/occupationa.jpg"
import health from "@/images/services/health.jpg"
import corporate from "@/images/services/serv2.jpg"
import care from "@/images/services/hiv.jpg"
import maternal from "@/images/services/materna.jpg"
import diagnostic from "@/images/services/lab.jpg"
import pharmacy from "@/images/services/pharma.jpg"

const services = [
  {
    image: medical,
    icon: Stethoscope,
    title: "Medical Services",
    description:
      "General and specialized medical care for individuals and families.",
    items: [
      "General consultations",
      "Specialist referrals",
      "Chronic disease management",
      "Preventive health screening",
    ],
  },
  {
    image: occupational,
    icon: ShieldCheck,
    title: "Occupational Health",
    description:
      "Keep your workforce healthy, safe and productive.",
    items: [
      "Pre-employment medicals",
      "Periodic medical examinations",
      "Fitness for work assessments",
      "Workplace health programs",
    ],
  },
  {
    image: health,
    icon: Heart,
    title: "Health & Wellness",
    description:
      "Promoting healthier lifestyles for a better tomorrow.",
    items: [
      "Wellness programs",
      "Nutrition and lifestyle counselling",
      "Mental health support",
      "Health education and awareness",
    ],
  },
  {
    image: corporate,
    icon: Users,
    title: "Corporate Health Programs",
    description:
      "Supporting your business with healthy teams.",
    items: [
      "On-site clinics",
      "Custom health packages",
      "Health risk assessments",
      "Employee wellness programs",
    ],
  },
  {
    image: care,
    icon: Activity,
    title: "HIV/AIDS Care & Support",
    description:
      "Compassionate care and support for a healthier future.",
    items: [
      "HIV testing and counselling",
      "ART management",
      "Ongoing monitoring and support",
      "Prevention programs",
    ],
  },
  {
    image: maternal,
    icon: Heart,
    title: "Maternal & Child Health",
    description:
      "Caring for mothers and children at every stage.",
    items: [
      "Antenatal and postnatal care",
      "Child immunizations",
      "Growth and development monitoring",
      "Family planning services",
    ],
  },
  {
    image: diagnostic,
    icon: Microscope,
    title: "Diagnostic & Laboratory",
    description:
      "Accurate and timely results for better decisions.",
    items: [
      "Clinical laboratory testing",
      "Imaging services (X-ray, ultrasound)",
      "Pathology services",
      "Health screening packages",
    ],
  },
  {
    image: pharmacy,
    icon: Pill,
    title: "Pharmacy Services",
    description:
      "Safe, reliable and convenient medication services.",
    items: [
      "Prescription dispensing",
      "Over-the-counter medication",
      "Medication counselling",
      "Chronic medication support",
    ],
  },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Experienced Professionals",
    text: "Skilled and certified healthcare specialists.",
  },
  {
    icon: Building2,
    title: "Modern Facilities",
    text: "Well-equipped and up-to-date medical technology.",
  },
  {
    icon: Heart,
    title: "Client-Centered Approach",
    text: "Personalized care for every individual.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Safety",
    text: "Adhering to the highest standards and regulations.",
  },
  {
    icon: Users,
    title: "Trusted Partner",
    text: "For individuals, businesses and organizations.",
  },
];

const additionalServices = [
  "First Aid Training",
  "Emergency Medical Support",
  "Health and Safety Audits",
  "Environmental Health Services",
  "Travel Health Services",
  "Vaccination Programs",
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#17205b]">

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
          <div className="max-w-125">

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase  text-[#682696]">
                  Our Services
                </span>

                <span className="h-[1px] w-9 bg-[#8b56ad]" />
              </div>

              <h2 className="mt-1 text-[42px] font-bold leading-[.95] tracking-[-1.4px] text-[#171e57] sm:text-[53px]">
                Comprehensive
                <br />
                <span className="text-[#1a205b]">
                  Healthcare Services
                </span>
              </h2>

              <p className="mt-2 max-w-112.5 text-sm leading-[1.7] text-[#626580]">
                We offer a wide range of professional and personalized
                healthcare services designed to meet your needs and those
                of your family, workplace and community.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-4 rounded-[5px] bg-linear-to-r from-[#542080] to-[#76279e] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(86,31,128,.22)]"
              >
                Get a Quote
                <ArrowRight size={15} />
              </Link>
            </div>

          {/* Photo, mobile/tablet only: plain card, no glow panel */}
          <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[5px] shadow-xl lg:hidden">
            <Image src={heroDoctor} alt="A smiling doctor in a white coat holding a tablet, with the caption 'Better Care for a Healthier Tomorrow'" fill sizes="100vw" className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN SERVICE CATEGORIES
      ========================================================= */}

      <section className="bg-white py-12 sm:py-16 lg:py-[55px]">

        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">

          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[.32em] text-[#682696]">
                Our Services
              </span>

              <span className="h-[1px] w-9 bg-[#8b56ad]" />
            </div>

            <h2 className="text-[30px] font-bold leading-none text-[#17205b] sm:text-[38px]">
              Main Service Categories
            </h2>

            <p className="mt-2 max-w-[600px] text-sm leading-[1.6] text-[#666b89]">
              We provide comprehensive healthcare solutions through our
              core service categories and additional support services.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-7 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group overflow-hidden rounded-[5px] border border-purple-50 bg-white shadow-[0_4px_18px_rgba(44,27,81,.045)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(74,30,105,.1)]"
                >

                  {/* Card image */}
                  <div className="relative h-[120px] overflow-hidden">

                    <Image
                      src={service.image}
                      alt={service.title}
                      width={1000}
                      height={1000}
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-white/5 to-transparent" />

                    {/* Icon */}
                    <div className="absolute bottom-[-18px] left-4 flex h-[52px] w-[52px] items-center justify-center rounded-full border-[5px] border-white bg-[#f3edfb] text-[#60228c] shadow-sm">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>
                  </div>

                  <div className="px-2 pb-5 pt-2">

                    <h3 className="text-md font-bold text-[#1c255e]">
                      {service.title}
                    </h3>

                    <p className="min-h-[30px] text-sm leading-[1.45] text-[#73778f]">
                      {service.description}
                    </p>

                    <ul className="mt-3 space-y-2">

                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs leading-[1.4] text-[#646983]"
                        >
                          <span className="mt-[2px] flex h-[12px] w-[12px] shrink-0 items-center justify-center rounded-full bg-[#6b2995] text-white">
                            <CheckCircle2 size={10} />
                          </span>

                          {item}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#62228e]"
                    >
                      Learn More

                      <span className="flex h-5 w-5 items-center justify-center ">
                        <ArrowRight size={12} />
                      </span>
                    </Link>

                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          ADDITIONAL SERVICES PURPLE SECTION
      ========================================================= */}

      <section className="relative overflow-hidden bgl-[#40206b]">

        {/* actual extracted graphic/background */}
        <div className="absolute inset-0">
          <Image
            src={servoce}
            alt="additional"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-r from-[#3a1a63]/95 via-[#4a2178]/80 to-[#4a2178]/50" />

        <div className="relative mx-auto grid max-w-7xl gap-4 px-7 py-10 sm:px-12 lg:grid-cols-[38%_35%_27%] lg:px-16 lg:py-11">

          <div className="text-white">

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase text-[#d8bce9]">
                Additional Services
              </span>
            </div>

            <h2 className="max-w-90 text-[30px] font-bold leading-[1] sm:text-[37px]">
              More Services for
              <br />
              Your Complete Care
            </h2>

            <p className="mt-1 max-w-82.5 text-sm text-[#e0d5e9]">
              Beyond our core services, we also offer specialized solutions
              to meet unique health and safety needs.
            </p>

            <Link
              href="/services"
              className="mt-5 inline-flex items-center gap-3 rounded-[5px] border border-white/70 px-5 py-2.5 text-xs font-bold text-white"
            >
              Explore All Services
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-1">

            {additionalServices.map((service) => (
              <div
                key={service}
                className="flex items-center gap-2 text-xs text-white"
              >
                <CircleCheck
                  size={16}
                  className="shrink-0 text-white"
                  fill="rgba(255,255,255,.12)"
                />

                {service}
              </div>
            ))}
          </div>

          <div className="hidden items-center justify-center lg:flex">

            <div className="relative rotate-[-5deg] text-center font-serif text-[27px] font-semibold italic leading-[1.05] text-white">
              Prevent
              <br />
              Protect
              <br />
              Promote

              <div className="mx-auto mt-3 h-[2px] w-[95px] rotate-[-8deg] bg-white" />
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          WHY OUR SERVICES STAND OUT
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#fbfaff] py-12 sm:py-16">

        <div className="absolute right-[-120px] top-[-100px] h-[330px] w-[330px] rounded-full border-[55px] border-[#f1ebf9]" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase text-[#682696]">
              Why Choose Us
            </span>

            <span className="h-[1px] w-9 bg-[#8b56ad]" />
          </div>

          <h2 className="mt-3 text-[30px] font-bold leading-none text-[#17205b] sm:text-[37px]">
            Why Our Services Stand Out
          </h2>

          <p className="mt-3 max-w-[560px] text-sm leading-[1.6] text-[#686d89]">
            We combine expertise, compassion and modern healthcare solutions
            to deliver exceptional care and support.
          </p>

          <div className="mt-8 grid divide-y divide-[#dcd6e8] border-[#dcd6e8] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5">

            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="px-2 py-4 first:pl-0 lg:px-4"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f1eafb] text-[#632391]">
                    <Icon size={20} strokeWidth={2} />
                  </div>

                  <h3 className="mt-2 text-sm font-bold text-[#1d285f]">
                    {reason.title}
                  </h3>

                  <p className="text-xs mt-2 text-[#777b91]">
                    {reason.text}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =========================================================
          QUOTATION / CONTACT
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#44206d]">

        <div className="absolute inset-0">
          <Image
            src="/images/quote-bg.png"
            alt="quote"
            fill
            className="object-cover opacity-60"
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-r from-[#3b1a60]/95 to-[#55227c]/80" />

        <div className="relative mx-auto grid max-w-7xl gap-9 px-7 py-11 sm:px-12 lg:grid-cols-[42%_58%] lg:px-16">

          <div className="flex flex-col justify-center text-white">

            <div className="text-xs font-bold uppercase text-[#d7bce9]">
              Get In Touch
            </div>

            <h2 className="mt-2 text-[31px] font-bold leading-none sm:text-[37px]">
              Request a Quotation
            </h2>

            <p className="mt-3 max-w-[390px] text-sm text-[#ded2e7]">
              Fill in the form below and we will get back to you with a
              customized quote for our services.
            </p>

            <div className="mt-7 space-y-4">

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <span className="text-[15px]">☎</span>
                </div>

                <div>
                  <p className="text-xs font-bold">Call Us</p>
                  <p className="text-[11px] text-[#d8cce1]">
                    +254 20 734 9030 / 0732 314 372
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <Mail size={15} />
                </div>

                <div>
                  <p className="text-xs font-bold">Email Us</p>
                  <p className="text-[11px] text-[#d8cce1]">
                    info@qualityhealthcare.co.ke
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* quotation form */}
          <div className="rounded-[5px] bg-white p-2 shadow-[0_20px_55px_rgba(20,8,38,.22)] sm:p-4">

            <form className="space-y-2">

              <div className="grid gap-2 sm:grid-cols-2">

                <div>
                  <label className="mb-1 block text-xs font-bold text-[#4e4a60]">
                    Your Name (required)
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="h-9 w-full rounded-[5px] border border-[#e2ddec] bg-[#faf9fd] px-3 text-xs text-[#343148] outline-none focus:border-[#6d2898]"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-bold text-[#4e4a60]">
                    Your Email (required)
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="h-9 w-full rounded-[6px] border border-[#e2ddec] bg-[#faf9fd] px-3 text-xs text-[#343148] outline-none focus:border-[#6d2898]"
                  />
                </div>

              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-[#4e4a60]">
                  Service Interested In
                </label>

                <div className="relative">
                  <select className="h-9 w-full appearance-none rounded-[5px] border border-[#e2ddec] bg-[#faf9fd] px-3 text-xs text-[#767184] outline-none focus:border-[#6d2898]">
                    <option>Select a service</option>
                    {services.map((service) => (
                      <option key={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    size={13}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#777085]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-[#4e4a60]">
                  Your Message
                </label>

                <textarea
                  rows={4}
                  placeholder="Tell us how we can help you..."
                  className="w-full resize-none rounded-[5px] border border-[#e2ddec] bg-[#faf9fd] px-3 py-3 text-xs text-[#343148] outline-none focus:border-[#6d2898]"
                />
              </div>

              <button
                type="submit"
                className="flex h-9 w-full items-center justify-center gap-2 rounded-[5px] bg-linear-to-r from-[#572080] to-[#75279f] text-xs font-bold text-white"
              >
                Send Request
                <ArrowRight size={12} />
              </button>

            </form>
          </div>

        </div>
      </section>

    </main>
  );
}