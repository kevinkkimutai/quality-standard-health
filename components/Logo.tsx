import Link from "next/link";
import Image from "next/image"
import logo from "@/public/logo.png"

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image src={logo} alt="" width={50} height={50} />
      <span className="leading-tight">
        <span className={`block font-display text-sm font-bold ${light ? "text-white" : "text-brand-dark"}`}>
          Quality Standard<br />Health Care LTD
        </span>
        <span className={`block text-[10px] ${light ? "text-white/70" : "text-ink/60"}`}>Your Health Our Priority</span>
      </span>
    </Link>
  );
}
