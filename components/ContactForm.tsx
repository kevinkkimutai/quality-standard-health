"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { CONTACT_SUBJECTS } from "@/lib/data";

const field = "w-full rounded-md border border-black/10 bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-semibold text-ink" htmlFor="name">Your Name (required)</label>
          <input id="name" name="name" required placeholder="Enter your full name" className={field} />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-ink" htmlFor="email">Your Email (required)</label>
          <input id="email" name="email" required type="email" placeholder="Enter your email address" className={field} />
        </div>
      </div>
      <label className="mb-1 block text-xs font-semibold text-ink" htmlFor="subject">Subject</label>
      <select id="subject" name="subject" defaultValue="" className={`${field} mb-4`}>
        <option value="">Select a subject (optional)</option>
        {CONTACT_SUBJECTS.map((s) => <option key={s}>{s}</option>)}
      </select>
      <label className="mb-1 block text-xs font-semibold text-ink" htmlFor="message">Your Message</label>
      <textarea id="message" name="message" required rows={4} placeholder="Type your message here..." className={`${field} mb-4 resize-none`} />
      <button disabled={status === "sending"} className="flex w-full items-center justify-center gap-2 rounded-md bg-brand-dark py-3 text-sm font-semibold text-white hover:bg-brand-deep disabled:opacity-60">
        {status === "sending" ? "Sending..." : "Send Message"} <Send size={15} />
      </button>
      <p role="status" className="mt-2 text-center text-xs">
        {status === "sent" && <span className="text-brand">Thanks! We will get back to you shortly.</span>}
        {status === "error" && <span className="text-red-600">Something went wrong. Please try again or call us.</span>}
      </p>
    </form>
  );
}
