"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  ShieldCheck,
  Heart,
  Eye,
  Target,
  Stethoscope,
  Shield, Building2,
  GraduationCap,
  ClipboardCheck,
  Activity,
  Phone,
  Mail,
  MapPin,
  Globe,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useEffect, useState } from "react";
import heroDoctor from "@/images/hero-doctor.jpg";
import { HERO_BADGES, TESTIMONIALS } from "@/lib/data";
import care from "@/images/doc1.webp"

const badgeIcons = { users: Users, shield: Shield, building: Building2, heart: Heart };
export default function Home() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonial = TESTIMONIALS[testimonialIndex];

  const changeTestimonial = (direction: number) => {
    setTestimonialIndex((current) =>
      (current + direction + TESTIMONIALS.length) % TESTIMONIALS.length,
    );
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      changeTestimonial(1);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  const services = [
    {
      icon: Stethoscope,
      title: "Medical Services",
      items: [
        "Occupational medical examination",
        "Pre-employment and exit fitness certificate",
        "Periodic (Annual) and return to work examinations",
        "Wellness programs at work including well man and well woman programs",
        "Occupational First Aid training",
      ],
    },
    {
      icon: GraduationCap,
      title: "Training",
      items: [
        "Occupational First Aid training",
        "Disease management and evacuation procedures training",
        "Occupational Safety and Health (safety committee training)",
        "Fire marshals Audits and other services",
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Audits & Other Services",
      items: [
        "Occupational Safety and Health audit",
        "Risk assessments at work",
        "Fire safety audits",
        "Environmental impact Audit and Assessments",
      ],
    },
    {
      icon: Activity,
      title: "Additional Services",
      items: [
        "Health and safety consultancy",
        "Workplace wellness programs",
        "Emergency preparedness and response",
        "Environmental health assessments",
        "On-site and mobile clinic services",
      ],
    },
    {
      icon: Users,
      title: "Corporate Health Programs",
      items: [
        "Employee wellness programs",
        "Chronic disease management",
        "Health education and awareness",
        "Lifestyle and nutrition counselling",
        "On-site health screening",
      ],
    },
  ];

  const team = [
    {
      image: "/logo.png",
      name: "Dr. Sarah Wanjiku",
      role: "Medical Director",
    },
    {
      image: "/logo.png",
      name: "Dr. James Mwangi",
      role: "Occupational Health Specialist",
    },
    {
      image: "/logo.png",
      name: "Sister Achieng",
      role: "Senior Nurse",
    },
  ];
function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-bold uppercase tracking-widest text-brand">{children}</p>;
}
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#201348]">

  <section className="relative overflow-hidden bg-linear-to-b from-brand-soft to-white">
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
          <div className="max-w-xl lg:pr-[8%]">
            <Eyebrow>Quality Standard Health Care LTD</Eyebrow>
            <h1 className="mt-2 font-display text-5xl font-bold  text-ink sm:text-6xl">
              Your <span className="text-brand">Health</span><br />Our Priority
            </h1>
            <p className="mt-3 max-w-md text-ink/70">
              We provide high-quality, professional and comprehensive healthcare services to meet the needs of our clients and the community.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/services" className="inline-flex items-center gap-2 rounded-[5px] bg-brand-dark px-6 py-3 text-sm font-semibold text-white hover:bg-brand-deep">
                Our Services <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-[5px] border border-brand-dark px-6 py-3 text-sm font-semibold text-brand-dark hover:bg-brand-soft">
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
            <ul className="mt-9 grid grid-cols-4 gap-3 text-center">
              {HERO_BADGES.map((b) => {
                const I = badgeIcons[b.icon as keyof typeof badgeIcons];
                return (
                  <li key={b.label} className="flex flex-col items-center gap-2">
                    <span className="grid size-11 place-items-center rounded-full bg-white text-brand shadow-sm"><I size={17} /></span>
                    <span className="text-[11px] font-semibold leading-tight text-ink">{b.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Photo, mobile/tablet only: plain card, no glow panel */}
          <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[5px] shadow-xl lg:hidden">
            <Image src={heroDoctor} alt="A smiling doctor in a white coat holding a tablet, with the caption 'Better Care for a Healthier Tomorrow'" fill sizes="100vw" className="object-cover" priority />
          </div>
        </div>
      </section>


      <section id="about" className="bg-white py-10 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-2 lg:grid-cols-[43%_57%] ">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#682696]">
              About Us
            </p>

            <h2 className="mt-3 max-w-97.5 text-xl font-bold text-[#21194b] sm:text-4xl">
              Quality Standard
              <br />
              Health Care LTD
            </h2>

            <p className="mt-3 max-w-97.5 text-md text-[#777187]">
              We are a duly registered under the Kenyan Company Act Cap 496.
              We provide high-quality, professional and comprehensive
              healthcare services to meet the needs of our clients and the
              community.
            </p>

            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-3 rounded-[5px] border border-[#75409c] px-5 py-2.5 text-sm font-bold text-[#63248d]"
            >
              Learn More
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-140">
            <div className="absolute -left-5 -top-2 h-20 w-20 rounded-full bg-[#eee7f8]" />

            <div className="relative overflow-hidden rounded-[5px]">
              <Image
                src="/images/quality.jpg"
                alt="Medical stethoscope"
                width={7000}
                height={4000}
                className="h-62.5 w-full object-cover sm:h-[290px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION & VISION
      ========================================================= */}

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-3 px-2 lg:grid-cols-[1fr_240px]">

          <div className="relative overflow-hidden rounded-[5px] border border-[#ece7f5] bg-linear-to-br from-[#f7f4ff] to-[#eee9fa] p-7 sm:p-5">

            {/* Background graphic */}
            <div className="pointer-events-none absolute bottom-[-80px] left-[25%] h-[280px] w-[280px] rounded-full border-[55px] border-white/40" />

            <div className="relative z-10">
              <h2 className="text-lg font-bold text-[#2a2052]">
                Our Mission & Vision
              </h2>

              <p className="mt-1 text-sm text-[#6b4b89]">
                Guiding Our Purpose, Inspiring Better Health
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#64258e] shadow-sm">
                    <Eye size={19} />
                  </div>

                  <div>
                    <h3 className="text-md font-bold text-[#3a2a62]">
                      Our Vision
                    </h3>

                    <p className="mt-2 text-sm leading-[1.65] text-[#77718b]">
                      To assist you as an organization to reduce future
                      health impacts from your occupational hazards.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#64258e] shadow-sm">
                    <Target size={19} />
                  </div>

                  <div>
                    <h3 className="text-md font-bold text-[#3a2a62]">
                      Our Mission
                    </h3>

                    <p className="mt-2 text-sm leading-[1.65] text-[#77718b]">
                      As our name suggests, we are committed to high quality
                      healthcare and standardized practices in line with
                      Occupational Safety and Health Act (OSHA, 2007). We are
                      focused to listen to the needs of our clients and make
                      standardized services which go a long way to satisfy
                      the need and achieve timely compliance with the law.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Side graphic */}
          <div className="relative flex min-h-55 items-center justify-center overflow-hidden rounded-[5px] bg-linear-to-br from-[#f4effd] to-[#eee8fa]">
            <div className="absolute -right-10 -top-8 h-36 w-36 rounded-full border-30 border-white/50" />
            <div className="absolute -bottom-10 right-5 h-28 w-28 rounded-full border-20 border-[#d7c5ea]/50" />

            <div className="relative z-10 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#c5a7db] text-white">
                <Activity size={25} />
              </div>

              <p className="mt-5 text-md font-bold uppercase tracking-[.35em] text-[#8b5ca6]">
                Healthier
              </p>

              <p className="text-md font-bold uppercase tracking-[.35em] text-[#8b5ca6]">
                People
              </p>

              <p className="text-md font-bold uppercase tracking-[.35em] text-[#8b5ca6]">
                Stronger
              </p>

              <p className="text-md font-bold uppercase tracking-[.35em] text-[#8b5ca6]">
                Communities
              </p>

              <div className="mx-auto mt-4 h-0.5 w-12 bg-[#9b6cb5]" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section id="services" className="bg-white py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-2">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#682696]">
              Our Services
            </p>

            <h2 className="mt-2 max-w-100 text-xl font-bold leading-[.95] text-[#21194b] sm:text-4xl">
              Comprehensive
              <br />
              Healthcare Services
            </h2>

            <p className="mt-3 text-md text-[#777187]">
              We are all-inclusive, all rounded specialists in the listed services.
            </p>
          </div>

          <div className="mt-4 grid gap-2 md:grid-cols-2 lg:grid-cols-3">

            {services.slice(0, 3).map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-[5px] border border-[#ebe6f5] bg-white p-5 shadow-[0_4px_18px_rgba(56,31,84,.04)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0e9f9] text-[#66258f]">
                      <Icon size={19} />
                    </div>

                    <h3 className="text-md font-bold text-[#35265d]">
                      {service.title}
                    </h3>
                  </div>

                  <ul className="mt-4 space-y-1.5">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-xs leading-[1.4] text-[#777187]"
                      >
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[#65258e]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}


          </div>
          <div className="mt-2 grid gap-2 md:grid-cols-2">

            {services.slice(3).map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-[5px] border border-[#ebe6f5] bg-white p-5 shadow-[0_4px_18px_rgba(56,31,84,.04)] lg:col-span-1"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0e9f9] text-[#66258f]">
                      <Icon size={19} />
                    </div>

                    <h3 className="text-md font-bold text-[#35265d]">
                      {service.title}
                    </h3>
                  </div>

                  <ul className="mt-4 space-y-1.5">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-xs leading-[1.4] text-[#777187]"
                      >
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[#65258e]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE US
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#291942]">

        <div className="grid min-h-75 lg:grid-cols-[42%_58%]">

          {/* Image */}
          <div className="relative min-h-75 overflow-hidden">
            <Image
              src={care}
              alt="Healthcare professional holding heart"
              fill
              className="object-cover object-start opacity-50"
            />

            <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#291942]/60" />
          </div>

          {/* Content */}
          <div className="relative overflow-hidden px-7 py-12 text-white sm:px-12 lg:px-14">

            <div className="pointer-events-none absolute -right-25 -top-25 h-70 w-70 rounded-full border-50 border-white/5" />

            <p className="relative text-sm font-bold uppercase text-[#c6a8db]">
              Why Choose Us
            </p>

            <h2 className="relative mt-1 max-w-97.5 text-lg font-bold md:text-4xl">
              Why Choose Quality
              <br />
              Standard Health Care?
            </h2>

            <p className="relative mt-2 max-w-117.5 text-md leading-[1.6] text-[#cfc7dc]">
              We are committed to delivering exceptional healthcare services
              with professionalism, integrity and care.
            </p>

            <div className="relative mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">

              {[
                [
                  ShieldCheck,
                  "Experienced Professionals",
                  "Our team is composed of qualified and experienced healthcare experts.",
                ],
                [
                  Heart,
                  "Modern Facilities",
                  "Equipped with modern technology to provide accurate and efficient care.",
                ],
                [
                  Users,
                  "Client-Centered Approach",
                  "We prioritize your needs and ensure personalized care.",
                ],
                [
                  ShieldCheck,
                  "Compliance & Safety",
                  "We adhere to national and international health and safety standards.",
                ],
              ].map(([Icon, title, text]) => (
                <div key={title as string}>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white">
                   
                    <Icon size={15} />
                  </div>

                  <h3 className="mt-3 text-xs font-bold leading-tight">
                    {title as string}
                  </h3>

                  <p className="mt-2 text-xs text-[#bdb4cd]">
                    {text as string}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TEAM
      ========================================================= */}

      <section id="team" className="bg-white py-10 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-4 px-2 lg:grid-cols-[42%_58%]">

          <div>
            <p className="text-sm font-bold uppercase text-[#682696]">
              Our Team
            </p>

            <h2 className="mt-1 text-lg font-bold text-[#21194b] sm:text-4xl">
              Meet Our Professional Team
            </h2>

            <p className="mt-2 max-w-97.5 text-md text-[#777187]">
              Our team of healthcare professionals is dedicated to providing
              compassionate, high-quality care and support to our clients.
            </p>

            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-3 rounded-[5px] border border-[#75409c] px-5 py-2.5 text-sm font-bold text-[#63248d]"
            >
              Meet Our Team
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-2">

            {team.map((person) => (
              <div
                key={person.name}
                className="overflow-hidden rounded-[14px] bg-[#f5f2fa]"
              >
                <div className="relative h-37.5">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="px-3 py-3">
                  <p className="text-xs font-bold text-[#38245e]">
                    {person.name}
                  </p>

                  <p className="mt-1 text-xs text-[#8a8395]">
                    {person.role}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIAL
      ========================================================= */}

      <section className="bg-[#f8f7ff] py-10 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-4 px-2 lg:grid-cols-[38%_62%]">

          <div>
            <p className="text-sm font-bold uppercase text-[#682696]">
              What Our Clients Say
            </p>

            <h2 className="mt-2 text-xl font-bold text-[#21194b] sm:text-4xl">
              Trusted by Individuals
              <br />
              and Organizations
            </h2>

            <p className="mt-3 max-w-100 text-md leading-[1.6] text-[#777187]">
              We take pride in the trust our clients place in us. Here&apos;s
              what some of them have to say about our services.
            </p>

            <button className="mt-3 flex items-center gap-2 rounded-[5px] border border-[#75409c] px-5 py-2.5 text-sm font-bold text-[#63248d]">
              View More Testimonials
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="relative rounded-[5px] bg-white p-4 shadow-[0_8px_35px_rgba(50,30,80,.07)] sm:p-6">

            <Quote
              className="absolute left-6 top-6 text-[#71309b]/30"
              size={27}
            />

            <p className="relative pl-9 text-xs text-[#686177]">
              &quot;{testimonial.quote}&quot;
            </p>

            <div className="mt-5 pl-6">
              <p className="text-md font-bold text-[#35265d]">
                — {testimonial.name}
              </p>

              <p className="text-xs text-[#8c8497]">
                {testimonial.role}
              </p>
            </div>

            <div className="absolute right-6 top-1/2 flex -translate-y-1/2 gap-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => changeTestimonial(-1)}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-[#eee7f5] bg-white text-[#693093] transition hover:bg-[#f8f3fc]"
              >
                <ChevronLeft size={12} />
              </button>

              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => changeTestimonial(1)}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-[#eee7f5] bg-white text-[#693093] transition hover:bg-[#f8f3fc]"
              >
                <ChevronRight size={12} />
              </button>
            </div>

            <div className="mt-7 flex justify-center gap-1.5">
              {TESTIMONIALS.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === testimonialIndex ? "true" : undefined}
                  onClick={() => setTestimonialIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === testimonialIndex
                      ? "w-5 bg-[#6a2895]"
                      : "w-1.5 bg-[#d5c4e3] hover:bg-[#a987bd]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}

      <section
        id="contact"
        className="relative overflow-hidden bg-linear-to-br from-[#35194d] via-[#4d216d] to-[#2a163e] py-10 text-white sm:py-16"
      >

        {/* Decorative background graphics */}
        <div className="pointer-events-none absolute -left-20 -bottom-7.5 h-55 w-45 rotate-[-30deg] rounded-[50%] border-45 border-white/5" />

        <div className="pointer-events-none absolute -right-20 -top-7.5 h-55 w-45 rotate-30 rounded-[50%] border-45 border-white/5" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-2 lg:grid-cols-[38%_62%]">

          <div>
            <p className="text-xs font-bold uppercase text-[#c7a6da]">
              Get In Touch
            </p>

            <h2 className=" text-4xl font-bold leading-none">
              Contact Us
            </h2>

            <p className="mt-3 max-w-85 text-md text-[#cfc4d9]">
              We are here to help. Reach out to us for any inquiries or to
              book an appointment.
            </p>

            <div className="mt-7 space-y-4">

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <Phone size={13} />
                </div>

                <p className="text-md text-[#e0d8e7]">
                  +254 20 734 9030 / 0732 314 372
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <Mail size={13} />
                </div>

                <p className="text-md text-[#e0d8e7]">
                  info@qualityhealthcare.co.ke
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <MapPin size={13} />
                </div>

                <p className="text-md text-[#e0d8e7]">
                  P.O. Box 72409-00100, Nairobi, Kenya
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <Globe size={13} />
                </div>

                <p className="text-md text-[#e0d8e7]">
                  www.qualityhealthcare.co.ke
                </p>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="rounded-[5px] bg-white p-2 shadow-[0_15px_50px_rgba(0,0,0,.2)] sm:p-4">

            <form className="space-y-2">

              <div className="grid gap-3 sm:grid-cols-2">

                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#686176]">
                    Your Name (required)
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-[5px] border border-[#e7e2ef] bg-[#faf9fc] px-3 py-3 text-xs text-[#3b3450] outline-none transition focus:border-[#6c2997]"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-[#686176]">
                    Your Email (required)
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded-[5px] border border-[#e7e2ef] bg-[#faf9fc] px-3 py-3 text-xs text-[#3b3450] outline-none transition focus:border-[#6c2997]"
                  />
                </div>

              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold text-[#686176]">
                  Subject
                </label>

                <select className="w-full rounded-[5px] border border-[#e7e2ef] bg-[#faf9fc] px-3 py-3 text-xs text-[#777187] outline-none">
                  <option>Select a subject (optional)</option>
                  <option>Medical Services</option>
                  <option>Occupational Health</option>
                  <option>Training</option>
                  <option>Corporate Health</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold text-[#686176]">
                  Your Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Type your message here..."
                  className="w-full resize-none rounded-[5px] border border-[#e7e2ef] bg-[#faf9fc] px-3 py-3 text-xs text-[#3b3450] outline-none transition focus:border-[#6c2997]"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-[5px] bg-linear-to-r from-[#592084] to-[#7628a0] py-3 text-md font-bold text-white shadow-[0_7px_20px_rgba(89,32,132,.2)]"
              >
                <ArrowRight size={14} />
                Send Message
              </button>

            </form>
          </div>
        </div>
      </section>

     
    </main>
  );
}
