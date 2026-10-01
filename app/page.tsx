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
  Shield,
  Building2,
  Activity,
  HardHat,
  FileCheck2,
  Flame,
  HeartPulse,
  Phone,
  Mail,
  MapPin,
  Globe,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useEffect, useState } from "react";
import { HERO_BADGES, TESTIMONIALS } from "@/lib/data";
import homeHero from "@/images/occupa.jpg";
import ppe from "@/images/ppe.jpg";
import doc from "@/images/team-build.jpg";
import audit from "@/images/audit.jpg";

const badgeIcons = {
  users: Users,
  shield: Shield,
  building: Building2,
  heart: Heart,
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase text-brand">{children}</p>
  );
}

export default function Home() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const testimonial = TESTIMONIALS[testimonialIndex];

  const changeTestimonial = (direction: number) => {
    setTestimonialIndex(
      (current) =>
        (current + direction + TESTIMONIALS.length) % TESTIMONIALS.length,
    );
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      changeTestimonial(1);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      badge: "A Step to Safety is a Step to Health",
      title: "Occupational Safety & Health",
      description:
        "Our core business is Occupational Safety and Health. <br /> We conduct medical assessments for fit to work <br /> We offer Occupational Safety and health trainings as well as hygiene surveys",
      image: homeHero,
      showButtons: true,
    },
    {
      badge: "Clinical Assessments",
      title: "Workforce health checks that keep people safe and ready.",
      description:
        "We support safer operations through pre-employment, annual and exit medical assessments that protect workers and keep your organization compliant.",
      image: "/images/quality.jpg",
      showButtons: false,
    },
    {
      badge: "Workplace Audits",
      title: "Spot hazards early and improve every work environment.",
      description:
        "Our workplace audits and risk reviews help organizations identify gaps, reduce incidents and create safer, healthier operations across every site.",
      image: audit,
      showButtons: false,
    },
  ];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroSlideIndex((current) => (current + 1) % heroSlides.length);
    }, 10000);

    return () => window.clearInterval(interval);
  }, [heroSlides.length]);

  const services = [
    {
      icon: HardHat,
      title: "Occupational Safety & Health",
      items: [
        "Occupational health assessments",
        "Workplace health support",
        "Occupational health surveillance",
        "Workplace safety awareness",
        "Risk-related health assessments",
      ],
    },
    {
      icon: FileCheck2,
      title: "Fit to Work Medical Assessments",
      items: [
        "Fit-to-work certification",
        "Pre-employment medical tests",
        "Annual statutory OSH medical tests",
        "Exit medical tests",
        "Return-to-work assessments after illness, injury or sick leave",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Audits & Other Services",
      items: [
        "Occupational Safety and Health audit",
        "Risk assessments at work",
        "Fire safety audits",
        "Environmental impact Audit and Assessments",
      ],
    },
    {
      icon: Flame,
      title: "Statutory Training & Certification",
      items: [
        "Certified by DOSHS / NITA",
        "Occupational Safety & Health",
        "Occupational First Aid",
        "Fire Marshals",
        "Mental Wellbeing",
        "Ergonomics",
        "Emergency preparedness",
      ],
    },
    {
      icon: HeartPulse,
      title: "Vocational Rehabilitation",
      items: [
        "Counselling",
        "Sessional referrals",
        "Return-to-work support",
        "Post-injury support",
        "Post-illness support",
      ],
    },
  ];

  const safetySigns = [
    ["/safety/ppe-sign.svg", "Prevent", "PPE, hazard awareness and safer work practices."],
    ["/safety/warning-sign.svg", "Protect", "Risk assessment, fire safety and emergency readiness."],
    ["/safety/first-aid-sign.svg", "Assess", "Clinical checks that confirm workers are fit to work."],
    ["/safety/certified-sign.svg", "Support", "Training, certification and rehabilitation through recovery."],
  ] as const;

  const workerCategories = [
    "Corporates",
    "NGOs",
    "Schools",
    "Warehouses",
    "Workshops",
    "Call centres",
    "Roads & transport",
    "Office-based teams",
  ];

  const expertise = [
    {
      image: "/safety/first-aid-sign.svg",
      title: "Occupational Health",
      text: "Medical assessments and practical support to keep workers fit and well.",
    },
    {
      image: "/safety/warning-sign.svg",
      title: "Workplace Safety",
      text: "Risk-aware guidance that helps organizations prevent incidents and protect people.",
    },
    {
      image: "/safety/certified-sign.svg",
      title: "Training & Certification",
      text: "Skills-based training in first aid, fire safety, OSH and emergency preparedness.",
    },
    {
      image: "/safety/ppe-sign.svg",
      title: "Worker Support",
      text: "Wellbeing, rehabilitation and return-to-work support throughout the worker journey.",
    },
  ];
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#201348]">
      <section className="relative overflow-hidden bg-[#f5f0ff] h-[65vh]">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.title}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === heroSlideIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-linear-to-r from-[#150d26]/90 via-[#1e1435]/70 to-[#1f1434]/35" />

        <div className="relative mx-auto max-w-7xl px-4 py-9 sm:px-6 lg:px-8 lg:py-18">
          <div className="max-w-xl text-white">
            <span className="inline-block rounded-full border border-white bg-brand-dark px-3 py-1 text-sm italic uppercase font-semibold text-white">
              {heroSlides[heroSlideIndex].badge}
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {heroSlides[heroSlideIndex].title}
            </h1>
            <p className="mt-4 max-w-lg text-base text-white/80 sm:text-lg">
              {heroSlides[heroSlideIndex].description.split("<br />").map((line, index) => (
                <span key={`${line}-${index}`} className="block">
                  {line}
                </span>
              ))}
            </p>

            {heroSlides[heroSlideIndex].showButtons && (
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-[5px] bg-brand-dark px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-deep"
                >
                  Explore Our Services
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-[5px] border border-white/40 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Request a Consultation <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  aria-label={`Show ${slide.title}`}
                  aria-current={index === heroSlideIndex ? "true" : undefined}
                  onClick={() => setHeroSlideIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === heroSlideIndex
                      ? "w-10 bg-white"
                      : "w-2.5 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous hero slide"
                onClick={() =>
                  setHeroSlideIndex(
                    (current) =>
                      (current - 1 + heroSlides.length) % heroSlides.length,
                  )
                }
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition hover:bg-white/20"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                aria-label="Next hero slide"
                onClick={() =>
                  setHeroSlideIndex((current) => (current + 1) % heroSlides.length)
                }
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition hover:bg-white/20"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-10 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-2 lg:grid-cols-[43%_57%] ">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#682696]">
              Who We Are
            </p>

            <h2 className="mt-2  text-xl font-bold text-[#21194b] sm:text-4xl">
              Safer Workplaces.
              <br />
              Healthier, Protected Teams.
            </h2>

            <p className="mt-3 max-w-125 text-md text-[#777187] leading-tight">
              Quality Standard Health Care Limited is committed to improving
              workplace safety through professional clinical care, safety
              training, occupational health assessments, and practical
              prevention strategies that reduce risk before harm occurs.
            </p>
            <p className="mt-1 max-w-125 text-md text-[#777187] leading-tight">
              Our approach brings together{" "}
              <span className="text-brand ">
                {" "}
                occupational safety and clinical health{" "}
              </span>
              to help organizations protect their workforce, strengthen
              compliance, and create safer, more resilient workplaces.
            </p>

            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-3 rounded-[5px] border border-[#75409c] px-5 py-2.5 text-sm font-bold text-[#63248d]"
            >
              Learn More About Us
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-140">
            <div className="absolute -left-5 -top-2 h-20 w-20 rounded-full bg-[#eee7f8]" />

            <div className="relative overflow-hidden rounded-[5px]">
              <Image
                src={ppe}
                alt="Medical stethoscope"
                width={1000}
                height={1000}
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
                      A step to safety is a step to health. We help
                      organizations reduce future health impacts from
                      occupational hazards.
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
                      As our name suggests, we are committed to offer high quality healthcare and standardized 
practices in line with OSHA 2007. We are also guided and refer to other best practices of the 
international standards focusing in OSH. <br /> We address the client as an individual customer; tailor 
make standardized service which go a long way to satisfy the need and achieve timely 
compliance. 
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

              <p className="mt-5 text-md font-bold  text-[#8b5ca6]">
              Prevention before harm.

              </p>

              <p className="text-md font-bold text-[#8b5ca6]">
              Safety before risk.

              </p>

              <p className="text-md font-bold  text-[#8b5ca6]">
                Health before illness.
              </p>

              

              <div className="mx-auto mt-4 h-0.5 w-12 bg-[#9b6cb5]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaff] py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-2">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#682696]">
              SAFETY + CLINICAL CARE
            </p>
            <h2 className="mt-2 text-xl font-bold text-[#21194b] sm:text-4xl">
              Read the signs. Prevent the risk. Protect the worker.
            </h2>
            <p className="mt-3 text-md text-[#777187]">
              Whether you fly, drive, sit, lift, build or manually make bread,
              your work affects your health and your safety. We combine safety
              signals, clinical checks and practical prevention to identify
              hazards early and reduce workplace harm.
            </p>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {safetySigns.map(([image, title, text]) => (
              <div key={title} className="rounded-[5px] border border-[#ebe6f5] bg-white p-5 shadow-[0_4px_18px_rgba(56,31,84,.04)]">
                <Image src={image} alt={`${title} safety sign`} width={40} height={40} />
                <h3 className="text-md font-bold text-[#35265d]">{title}</h3>
                <p className=" text-xs leading-[1.5] text-[#777187]">{text}</p>
              </div>
            ))}
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
            OUR CORE SERVICES
            </p>

            <h2 className="mt-2 max-w-150 text-xl font-bold leading-[.95] text-[#21194b] sm:text-4xl">
              Comprehensive Occupational Safety & Health Services
            </h2>

            <p className="mt-3 text-md text-[#777187]">
             We provide the assessments, statutory training, certification and support needed to keep workers safe, healthy and fit to work.
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

      <section className="bg-white py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-2 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#682696]">
              EVERY WORKER, EVERY WORKPLACE
            </p>
            <h2 className="mt-2 text-xl font-bold text-[#21194b] sm:text-4xl">
              Any worker category is our client.
            </h2>
            <p className="mt-3 text-md leading-[1.6] text-[#777187]">
              If you fly, drive, sit, lift, build or manually make bread from
              any space, you are our concern. We help employers support every
              worker&apos;s safety and health journey.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {workerCategories.map((category) => (
              <span key={category} className="rounded-full border border-[#d9c7e8] bg-[#fbf8ff] px-4 py-2 text-sm font-semibold text-[#5f2b87]">
                {category}
              </span>
            ))}
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
              src={doc}
              alt="African healthcare professional checking a patient's blood pressure"
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
              Our core business is Occupational Safety and Health, strengthened
              by clinical knowledge and practical worker-centred support.
            </p>

            <div className="relative mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
              {[
                [
                  ShieldCheck,
                  "Occupational Safety Focus",
                  "Our core business is Occupational Safety and Health.",
                ],
                [
                  Heart,
                  "Professional Healthcare",
                  "We combine clinical healthcare knowledge with occupational health needs.",
                ],
                [
                  Users,
                  "DOSHS / NITA Training",
                  "Statutory training in OSH, First Aid, Fire Marshals, Mental Wellbeing, Ergonomics and Emergency Preparedness.",
                ],
                [
                  ShieldCheck,
                  "Every Worker Matters",
                  "We serve corporates, NGOs, schools, warehouses, workshops, call centres and roads.",
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

      <section id="expertise" className="bg-white py-10 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-4 px-2 lg:grid-cols-[42%_58%]">
          <div>
            <p className="text-sm font-bold uppercase text-[#682696]">
              OUR EXPERTISE
            </p>

            <h2 className="mt-1 text-lg font-bold text-[#21194b] sm:text-4xl">
              Professionals Working for Safer Workplaces
            </h2>

            <p className="mt-2 max-w-97.5 text-md text-[#777187]">
             Our team brings together healthcare, occupational safety, training and worker-support expertise to provide practical solutions for organizations and their people.
            </p>

            <a
              href="#services"
              className="mt-4 inline-flex items-center gap-3 rounded-[5px] border border-[#75409c] px-5 py-2.5 text-sm font-bold text-[#63248d]"
            >
              Explore Our Services
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {expertise.map(({ image, title, text }) => (
              <div
                key={title}
                className="rounded-lg border border-[#ebe6f5] bg-[#f8f6fc] p-4 transition-colors hover:border-[#cbb3df]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
                  <Image
                    src={image}
                    alt={`${title} workplace support`}
                    width={48}
                    height={48}
                  />
                </div>

                <p className="mt-3 text-sm font-bold text-[#38245e]">{title}</p>
                <p className="mt-1 text-xs leading-5 text-[#8a8395]">{text}</p>
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
              WHAT OUR CLIENTS SAY
            </p>

            <h2 className="mt-2 text-xl font-bold text-[#21194b] sm:text-4xl">
             Trusted by Organizations
              <br />
              & Workers
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

              <p className="text-xs text-[#8c8497]">{testimonial.role}</p>
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

            <h2 className=" text-4xl font-bold leading-none">Contact Us</h2>

            <p className="mt-3 max-w-85 text-md text-[#cfc4d9]">
              We are here to help. Reach out to us for any inquiries or to book
              an appointment.
            </p>

            <div className="mt-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <Phone size={13} />
                </div>

                <p className="text-md text-[#e0d8e7]">
                  +254 72 281 4372 / 020 802 5371
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
                  <option> Occupational Safety & Health  </option>
                  <option> OSH Training</option>
                  <option> First Aid Training</option>
                  <option> Fire Marshal Training</option>
                  <option> Mental Wellbeing</option>
                  <option> Ergonomics</option>
                  <option> Emergency Preparedness</option>
<option>Pre-Employment Medical</option>
<option>Annual Medical</option>
<option>Exit Medical</option>
<option>Return-to-Work Assessment</option>
<option>Vocational Rehabilitation</option>
<option>Other</option>
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
