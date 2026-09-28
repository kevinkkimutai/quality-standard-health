"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function TestimonialCarousel() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const go = (d: number) => setI((p) => (p + d + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <div className="flex items-center gap-4">
      <div className="flex-1 rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-8">
        <Quote size={26} className="text-brand" />
        <p className="mt-3 text-ink/80">&ldquo;{t.quote}&rdquo;</p>
        <p className="mt-5 font-bold text-ink">{t.name}</p>
        <p className="text-sm text-ink/60">{t.role}</p>
      </div>
      <div className="hidden shrink-0 flex-col gap-2 sm:flex">
        <button aria-label="Previous testimonial" onClick={() => go(-1)} className="grid size-10 place-items-center rounded-full border border-black/10 hover:bg-brand-soft"><ChevronLeft size={18} /></button>
        <button aria-label="Next testimonial" onClick={() => go(1)} className="grid size-10 place-items-center rounded-full border border-black/10 hover:bg-brand-soft"><ChevronRight size={18} /></button>
      </div>
      <div className="absolute inset-x-0 -bottom-6 flex justify-center gap-2 sm:hidden">
        {TESTIMONIALS.map((_, idx) => (
          <button key={idx} aria-label={`Go to testimonial ${idx + 1}`} onClick={() => setI(idx)} className={`size-2 rounded-full ${idx === i ? "bg-brand" : "bg-black/15"}`} />
        ))}
      </div>
    </div>
  );
}
