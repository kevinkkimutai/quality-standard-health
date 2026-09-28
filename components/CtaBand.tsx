import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { PHONE } from "@/lib/data";

export default function CtaBand() {
  return (
    <section className="bg-brand-dark text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 py-12 sm:px-6">
        <div>
          <h2 className="font-display text-2xl font-bold">Need to talk to our team?</h2>
          <p className="mt-1 text-sm text-white/80">Reach out for any inquiries or to book an appointment.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold">Contact Us <ArrowRight size={16} /></Link>
          <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold"><Phone size={16} /> Call Us</a>
        </div>
      </div>
    </section>
  );
}
