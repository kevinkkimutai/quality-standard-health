"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV } from "@/lib/data";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-2 sm:px-2">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {NAV.map((n) => (
            <Link key={n.label} href={n.href}
              className={`relative py-7 hover:text-brand ${isActive(n.href) ? "text-brand after:absolute after:inset-x-0 after:bottom-6 after:h-0.5 after:bg-brand" : "text-ink"}`}>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="hidden items-center gap-2 rounded-[5px] bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark lg:flex">
          Get in Touch <ArrowRight size={15} />
        </Link>
        <button className="lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-black/5 bg-white px-4 py-4 lg:hidden">
          {NAV.map((n) => (
            <Link key={n.label} href={n.href} onClick={() => setOpen(false)} className="block py-2 font-medium">{n.label}</Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="mt-3 block rounded-[5px] bg-brand px-4 py-2.5 text-center font-semibold text-white">Get in Touch</Link>
        </div>
      )}
    </header>
  );
}
