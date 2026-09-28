"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  ShieldCheck,
  X,
} from "lucide-react";
import heroDoctor from "@/images/hero-doctor.jpg";

export default function ContactPage() {
function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-bold uppercase tracking-widest text-brand">{children}</p>;
}
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#17205b]">

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
          <div className="max-w-2xl lg:pr-[8%]">
            <Eyebrow>Get In Touch</Eyebrow>
            <h1 className="mt-2 font-display text-5xl font-bold  text-ink sm:text-6xl">
             Let&apos;s Talk <br />
About Your
<br />
 <span className="text-brand">Healthcare Needs</span>
            </h1>
            <p className="mt-3 max-w-lg text-ink/70">
            Whether you need professional healthcare services, occupational health support, medical training or a customized healthcare solution, our team is ready to help.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">

                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-4 rounded-[5px] bg-linear-to-r from-[#542080] to-[#76279e] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(86,31,128,.22)]"
                >
                  Send an Enquiry
                  <ArrowRight size={14} />
                </a>

                <a
                  href="tel:+254207349030"
                  className="inline-flex items-center gap-3 rounded-[5px] border border-[#8e59b2] px-6 py-3 text-sm font-bold text-[#62228e]"
                >
                  <Phone size={14} />
                  Call Us
                </a>

              </div>
           <div className="mt-9 grid grid-cols-3 max-w-[340px] gap-5">

                <div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#632391] shadow-sm">
                    <ShieldCheck size={17} />
                  </div>

                  <p className="mt-2 text-xs font-bold text-[#242b63]">
                    Professional
                  </p>

                  <p className="text-[10px] text-[#777b91]">
                    Quality healthcare
                  </p>
                </div>

                <div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#632391] shadow-sm">
                    <Clock3 size={17} />
                  </div>

                  <p className="mt-2 text-xs font-bold text-[#242b63]">
                    Responsive
                  </p>

                  <p className="text-[10px] text-[#777b91]">
                    Prompt assistance
                  </p>
                </div>

                <div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#632391] shadow-sm">
                    <CheckCircle2 size={17} />
                  </div>

                  <p className="mt-2 text-xs font-bold text-[#242b63]">
                    Trusted
                  </p>

                  <p className="mt-1 text-[10px] text-[#777b91]">
                    Client focused
                  </p>
                </div>

              </div>
          </div>

          {/* Photo, mobile/tablet only: plain card, no glow panel */}
          <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[5px] shadow-xl lg:hidden">
            <Image src={heroDoctor} alt="A smiling doctor in a white coat holding a tablet, with the caption 'Better Care for a Healthier Tomorrow'" fill sizes="100vw" className="object-cover" priority />
          </div>
        </div>
      </section>


      {/* =========================================================
          CONTACT INFORMATION
      ========================================================= */}

      <section className="bg-white py-14 sm:py-18 lg:py-[70px]">

        <div className="mx-auto max-w-[1180px] px-2 sm:px-10 lg:px-12">

          <div className="text-center">

            <div className="flex justify-center items-center gap-2">
              <span className="h-[1px] w-8 bg-[#8b56ad]" />

              <span className="text-xs font-bold uppercase tracking-[.3em] text-[#682696]">
                Contact Information
              </span>

              <span className="h-[1px] w-8 bg-[#8b56ad]" />
            </div>

            <h2 className="mt-1 text-[31px] font-bold text-[#17205b] sm:text-[38px]">
              We&apos;d Love to Hear From You
            </h2>

            <p className="mx-auto mt-3 max-w-[600px] text-sm leading-[1.7] text-[#6c7089]">
              Reach out to Quality Standard Health Care LTD for professional
              healthcare services, consultations, workplace health solutions
              and customized support.
            </p>
          </div>

          {/* INFO CARDS */}
          <div className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">

            {/* Phone */}
            <div className="group rounded-[5px] border border-purple-50 bg-white p-6 text-center shadow-[0_8px_30px_rgba(52,29,84,.05)] transition hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(52,29,84,.1)]">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f2eafb] text-[#642491]">
                <Phone size={20} />
              </div>

              <h3 className="mt-3 text-[14px] font-bold text-[#202861]">
                Call Us
              </h3>

              <p className="mt-1 text-[11px] leading-[1.6] text-[#777b91]">
                Speak with our team directly.
              </p>

              <a
                href="tel:+254207349030"
                className="mt-1 block text-[10px] font-bold text-[#63228f]"
              >
                +254 20 734 9030
              </a>

              <a
                href="tel:+254732314372"
                className="block text-[10px] text-[#63228f]"
              >
                +254 732 314 372
              </a>
            </div>

            {/* Email */}
            <div className="group rounded-[5px] border border-purple-50 bg-white p-6 text-center shadow-[0_8px_30px_rgba(52,29,84,.05)] transition hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(52,29,84,.1)]">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f2eafb] text-[#642491]">
                <Mail size={20} />
              </div>

              <h3 className="mt-3 text-[14px] font-bold text-[#202861]">
                Email Us
              </h3>

              <p className="mt-1 text-[11px] leading-[1.6] text-[#777b91]">
                Send us your enquiry anytime.
              </p>

              <a
                href="mailto:info@qualityhealthcare.co.ke"
                className="mt-1 block break-all text-[10px] font-bold text-[#63228f]"
              >
                info@qualityhealthcare.co.ke
              </a>
            </div>

            {/* Location */}
            <div className="group rounded-[5px] border border-purple-50 bg-white p-6 text-center shadow-[0_8px_30px_rgba(52,29,84,.05)] transition hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(52,29,84,.1)]">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f2eafb] text-[#642491]">
                <MapPin size={20} />
              </div>

              <h3 className="mt-3 text-[14px] font-bold text-[#202861]">
                Visit Us
              </h3>

              <p className="mt-1 text-[11px] leading-[1.6] text-[#777b91]">
                Our office is located in Nairobi.
              </p>

              <p className="mt-1 text-[10px] font-bold leading-[1.5] text-[#63228f]">
                P.O. Box 72409-00100
                <br />
                Nairobi, Kenya
              </p>
            </div>

            {/* Hours */}
            <div className="group rounded-[5px] border border-purple-50 bg-white p-6 text-center shadow-[0_8px_30px_rgba(52,29,84,.05)] transition hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(52,29,84,.1)]">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f2eafb] text-[#642491]">
                <Clock3 size={20} />
              </div>

              <h3 className="mt-3 text-[14px] font-bold text-[#202861]">
                Working Hours
              </h3>

              <p className="mt-1 text-[11px] leading-[1.6] text-[#777b91]">
                Monday – Friday
              </p>

              <p className="mt-1 text-[10px] font-bold text-[#63228f]">
                8:00 AM – 5:00 PM
              </p>

              <p className="mt-1 text-[10px] text-[#777b91]">
                Saturday by appointment
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTACT FORM
      ========================================================= */}

      <section
        id="contact-form"
        className="relative overflow-hidden bg-[#f8f6fd] py-14 sm:py-18 lg:py-[75px]"
      >

        <div className="absolute -left-[150px] top-[40px] h-[350px] w-[350px] rounded-full border-[55px] border-[#eee7f7]" />

        <div className="absolute -right-[150px] bottom-[-100px] h-[400px] w-[400px] rounded-full border-[60px] border-[#eee7f7]" />

        <div className="relative mx-auto max-w-[1180px] px-2 sm:px-10 lg:px-12">

          <div className="grid gap-8 lg:grid-cols-[40%_60%]">

            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center">

              <div className="flex items-center gap-1">
                <span className="text-[10px] font-bold uppercase tracking-[.3em] text-[#682696]">
                  Send Us A Message
                </span>

                <span className="h-[1px] w-8 bg-[#8b56ad]" />
              </div>

              <h2 className="mt-2 text-[33px] font-bold leading-[1] text-[#17205b] sm:text-[40px]">
                How Can We
                <br />
                <span className="text-[#672493]">
                  Help You?
                </span>
              </h2>

              <p className="mt-5 max-w-[390px] text-sm leading-[1.7] text-[#696d87]">
                Tell us a little about what you need and a member of our
                team will get back to you with the appropriate information
                and assistance.
              </p>

              <div className="mt-8 space-y-5">

                <div className="flex gap-4">
                  <div className="flex h-8 w-10 shrink-0 items-center justify-center rounded-full bg-[#eee5f7] text-[#632391]">
                    <CheckCircle2 size={17} />
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-[#202861]">
                      Professional Support
                    </h3>

                    <p className="mt-1 text-[11px] leading-[1.5] text-[#777b91]">
                      Our team is available to understand your needs and
                      guide you toward the right service.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-10 shrink-0 items-center justify-center rounded-full bg-[#eee5f7] text-[#632391]">
                    <ShieldCheck size={17} />
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-[#202861]">
                      Quality & Confidentiality
                    </h3>

                    <p className="mt-1 text-[11px] leading-[1.5] text-[#777b91]">
                      Your enquiry is handled professionally and with
                      appropriate confidentiality.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* FORM */}
            <div className="rounded-[5px] bg-white p-4 shadow-[0_15px_45px_rgba(49,25,79,.08)] sm:p-6">

              <div className="mb-6">
                <h3 className="text-[23px] font-bold text-[#202861]">
                  Send Your Enquiry
                </h3>

                <p className="mt-1 text-[10px] text-[#777b91]">
                  Complete the form and we&apos;ll be in touch.
                </p>
              </div>

              <form className="space-y-2">

                <div className="grid gap-4 sm:grid-cols-2">

                  <div>
                    <label className="mb-1 block text-[11px] font-bold text-[#45465b]">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="h-8 w-full rounded-[5px] border border-[#e4dfeb] bg-[#fbfaff] px-3 text-[11px] outline-none transition focus:border-[#682696] focus:ring-2 focus:ring-[#682696]/10"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[11px] font-bold text-[#45465b]">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="h-8 w-full rounded-[5px] border border-[#e4dfeb] bg-[#fbfaff] px-3 text-[11px] outline-none transition focus:border-[#682696] focus:ring-2 focus:ring-[#682696]/10"
                    />
                  </div>

                </div>

                <div className="grid gap-4 sm:grid-cols-2">

                  <div>
                    <label className="mb-1 block text-[11px] font-bold text-[#45465b]">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="+254 ..."
                      className="h-8 w-full rounded-[5px] border border-[#e4dfeb] bg-[#fbfaff] px-3 text-[11px] outline-none transition focus:border-[#682696] focus:ring-2 focus:ring-[#682696]/10"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[11px] font-bold text-[#45465b]">
                      Organization
                    </label>

                    <input
                      type="text"
                      placeholder="Company / Organization"
                      className="h-8 w-full rounded-[5px] border border-[#e4dfeb] bg-[#fbfaff] px-3 text-[11px] outline-none transition focus:border-[#682696] focus:ring-2 focus:ring-[#682696]/10"
                    />
                  </div>

                </div>

                <div>
                  <label className="mb-1 block text-[11px] font-bold text-[#45465b]">
                    Service You&apos;re Interested In
                  </label>

                  <select className="h-8 w-full rounded-[5px] border border-[#e4dfeb] bg-[#fbfaff] px-3 text-[11px] text-[#777b91] outline-none transition focus:border-[#682696]">
                    <option>Select a service</option>
                    <option>Medical Services</option>
                    <option>Occupational Health</option>
                    <option>Health & Wellness</option>
                    <option>Corporate Health Programs</option>
                    <option>HIV/AIDS Care & Support</option>
                    <option>Maternal & Child Health</option>
                    <option>Diagnostic & Laboratory</option>
                    <option>Pharmacy Services</option>
                    <option>Training</option>
                    <option>Audits & Assessments</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-[11px] font-bold text-[#45465b]">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="h-8 w-full rounded-[5px] border border-[#e4dfeb] bg-[#fbfaff] px-3 text-[11px] outline-none transition focus:border-[#682696] focus:ring-2 focus:ring-[#682696]/10"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-[11px] font-bold text-[#45465b]">
                    Your Message *
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell us more about what you need..."
                    className="w-full resize-none rounded-[5px] border border-[#e4dfeb] bg-[#fbfaff] px-3 py-3 text-[11px] outline-none transition focus:border-[#682696] focus:ring-2 focus:ring-[#682696]/10"
                  />
                </div>

                <label className="flex items-start gap-2 text-[11px] leading-[1.5] text-[#777b91]">
                  <input
                    type="checkbox"
                    className="mt-[1px] accent-[#682696]"
                  />

                  <span>
                    I understand that the information provided will be used
                    to respond to my enquiry.
                  </span>
                </label>

                <button
                  type="submit"
                  className="flex h-11 w-full items-center justify-center gap-3 rounded-[5px] bg-linear-to-r from-[#542080] to-[#76279e] text-[11px] font-bold text-white shadow-[0_8px_20px_rgba(86,31,128,.2)] transition hover:shadow-[0_12px_25px_rgba(86,31,128,.3)]"
                >
                  Send Message
                  <Send size={14} />
                </button>

              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAP / LOCATION SECTION
      ========================================================= */}

      <section className="bg-white py-14 sm:py-18">

        <div className="mx-auto max-w-[1180px] px-2 md:px-10 lg:px-12">

          <div className="grid overflow-hidden rounded-[5px] border border-[#ebe6f2] bg-white shadow-[0_12px_40px_rgba(50,27,82,.06)] lg:grid-cols-[45%_55%]">

            {/* LOCATION CONTENT */}
            <div className="bg-[#f8f5fd] p-4 sm:p-7">

              <div className="flex items-center gap-2">
                <span className="text-[12px] font-bold uppercase tracking-[.3em] text-[#682696]">
                  Find Us
                </span>

                <span className="h-[1px] w-8 bg-[#8b56ad]" />
              </div>

              <h2 className="text-[29px] font-bold leading-[1.05] text-[#17205b]">
                Visit Quality Standard
                <br />
                Health Care LTD
              </h2>

              <p className="mt-2 max-w-[380px] text-[12px] leading-[1.7] text-[#6c7089]">
                We are available to discuss your healthcare, occupational
                health and workplace safety requirements.
              </p>

              <div className="mt-7 space-y-5">

                <div className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#632391] shadow-sm">
                    <MapPin size={15} />
                  </div>

                  <div>
                    <p className="text-[11px] font-bold text-[#202861]">
                      Address
                    </p>

                    <p className="mt-1 text-[11px] leading-[1.5] text-[#777b91]">
                      P.O. Box 72409-00100
                      <br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#632391] shadow-sm">
                    <Phone size={15} />
                  </div>

                  <div>
                    <p className="text-[11px] font-bold text-[#202861]">
                      Telephone
                    </p>

                    <p className="mt-1 text-[11px] text-[#777b91]">
                      +254 20 734 9030
                    </p>

                    <p className="text-[11px] text-[#777b91]">
                      +254 732 314 372
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#632391] shadow-sm">
                    <Mail size={15} />
                  </div>

                  <div>
                    <p className="text-[11px] font-bold text-[#202861]">
                      Email
                    </p>

                    <p className="mt-1 text-[11px] text-[#777b91]">
                      info@qualityhealthcare.co.ke
                    </p>
                  </div>
                </div>

              </div>

              <a
                href="https://maps.google.com/?q=Nairobi,Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-[5px] bg-[#642391] px-5 py-2.5 text-[12px] font-bold text-white"
              >
                Get Directions
                <ArrowRight size={11} />
              </a>
            </div>

            {/* MAP VISUAL */}
            <div className="relative min-h-[320px] overflow-hidden bg-[#e9e7ec]">

              <div className="absolute inset-0 opacity-60">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(#ffffffaa 1px, transparent 1px), linear-gradient(90deg, #ffffffaa 1px, transparent 1px)",
                    backgroundSize: "45px 45px",
                  }}
                />
              </div>

              {/* roads */}
              <div className="absolute left-[-20%] top-[50%] h-[28px] w-[150%] rotate-[14deg] bg-white shadow-sm" />

              <div className="absolute left-[50%] top-[-20%] h-[150%] w-[25px] rotate-[32deg] bg-white shadow-sm" />

              <div className="absolute left-[15%] top-[25%] h-[15px] w-[90%] rotate-[-20deg] bg-white" />

              {/* Pin */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                <div className="flex h-[65px] w-[65px] items-center justify-center rounded-full bg-[#642391]/10">
                  <div className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-[#642391] text-white shadow-[0_8px_25px_rgba(91,32,130,.35)]">
                    <MapPin size={22} />
                  </div>
                </div>

                <div className="mt-2 rounded-full bg-white px-4 py-2 text-center text-[11px] font-bold text-[#272b60] shadow-lg">
                  Quality Standard
                  <br />
                  Health Care LTD
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ / HELP SECTION
      ========================================================= */}

      <section className="bg-[#faf8fe] py-14 sm:py-18">

        <div className="mx-auto max-w-[900px] px-6 text-center">

          <div className="flex justify-center items-center gap-2">
            <span className="h-[1px] w-8 bg-[#8b56ad]" />

            <span className="text-[11px] font-bold uppercase tracking-[.3em] text-[#682696]">
              Need Help?
            </span>

            <span className="h-[1px] w-8 bg-[#8b56ad]" />
          </div>

          <h2 className="text-[31px] font-bold text-[#17205b] sm:text-[38px]">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-2 max-w-[580px] text-[12px] leading-[1.7] text-[#777b91]">
            Here are answers to some common questions about getting in touch
            with our team.
          </p>

          <div className="mt-8 space-y-2 text-left">

            {[
              [
                "How can I request a quotation?",
                "Use the contact form above and select the service you are interested in. Our team can then review your enquiry and respond with the appropriate information.",
              ],
              [
                "Do you provide corporate healthcare services?",
                "Yes. Our services include occupational health and corporate health programs designed to support businesses and their employees.",
              ],
              [
                "Can I contact you for a customized healthcare solution?",
                "Yes. Send us details about your requirements through the enquiry form and our team can discuss the appropriate service options with you.",
              ],
              [
                "How quickly will I receive a response?",
                "Our team will review your enquiry and get back to you through the contact details you provide.",
              ],
            ].map(([question, answer]) => (
              <details
                key={question}
                className="group rounded-[5px] border border-purple-100 bg-white px-3 py-2"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-[12px] font-bold text-[#252b63]">
                  {question}

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f2eafb] text-[#642391] transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-3 max-w-[780px] text-[12px] leading-[1.7] text-[#777b91]">
                  {answer}
                </p>
              </details>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#45206d]">

        <div className="absolute -left-20 bottom-[-130px] h-[330px] w-[330px] rounded-full border-[55px] border-white/5" />

        <div className="absolute -right-20 top-[-140px] h-[360px] w-[360px] rounded-full border-[60px] border-white/5" />

        <div className="relative mx-auto flex max-w-[1000px] flex-col items-center px-6 py-12 text-center sm:py-16">

          <span className="text-[11px] font-bold uppercase tracking-[.35em] text-[#d8bee9]">
            We&apos;re Ready To Help
          </span>

          <h2 className="max-w-[650px] text-[30px] font-bold leading-[1.05] text-white sm:text-[40px]">
            Your Health & Wellbeing
            <br />
            Deserve Quality Care
          </h2>

          <p className="mt-4 max-w-[570px] text-[12px] leading-[1.7] text-[#ddd0e8]">
            Get in touch with Quality Standard Health Care LTD today and
            let&apos;s discuss how we can support you, your family or your
            organization.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">

            <a
              href="#contact-form"
              className="inline-flex items-center gap-3 rounded-[5px] bg-white px-6 py-3 text-[11px] font-bold text-[#542080]"
            >
              Contact Us
              <ArrowRight size={14} />
            </a>

            <a
              href="tel:+254207349030"
              className="inline-flex items-center gap-3 rounded-[5px] border border-white/60 px-6 py-3 text-[11px] font-bold text-white"
            >
              <Phone size={14} />
              Call Our Team
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}