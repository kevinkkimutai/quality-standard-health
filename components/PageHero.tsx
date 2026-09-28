import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image"
import team from "@/images/vission.jpg"

export default function PageHero({ title, text }: { title: string; text: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep text-white">
      <Image src={team} alt="team" className="absolute inset-0 -z-10 h-full w-full object-center object-cover opacity-30" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1 text-xs text-white/70">
          <Link href="/" className="hover:text-white">Home</Link><ChevronRight size={12} /><span className="text-white">{title}</span>
        </nav>
        <h1 className="font-display text-4xl font-bold sm:text-5xl">{title}</h1>
        <p className="mt-3 max-w-xl text-white/85">{text}</p>
      </div>
    </section>
  );
}
