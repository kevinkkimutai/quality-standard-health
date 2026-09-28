import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { NAV, PHONE, EMAIL, ADDRESS } from "@/lib/data";
import Logo from "./Logo";

export default function Footer() {
  const SOCIALS = [
  { Icon: FaFacebook, label: "Facebook" },
  { Icon: FaTwitter, label: "Twitter" },
  { Icon: FaLinkedin, label: "LinkedIn" },
  { Icon: FaYoutube, label: "YouTube" },
];
  return (
    <footer className="bg-brand-deep text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-start justify-between gap-8 px-4 py-10 sm:px-6">
        <Logo light />
        <nav className="flex flex-wrap gap-6 text-sm font-medium">
          {NAV.map((n) => <Link key={n.label} href={n.href} className="hover:text-brand">{n.label}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
  {SOCIALS.map(({ Icon, label }) => (
    <a key={label} href="#" aria-label={label} className="grid size-8 place-items-center rounded-full bg-white/10 hover:bg-brand">
      <Icon size={14} />
    </a>
  ))}
</div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-4 text-xs text-white/70 sm:px-6">
          <p>© {new Date().getFullYear()} Quality Standard Health Care LTD. All Rights Reserved.</p>
          <p className="flex gap-6">
            <span className="hidden sm:inline">{PHONE} · {EMAIL} · {ADDRESS}</span>
            <Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms &amp; Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
