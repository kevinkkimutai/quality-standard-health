import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const contacts = [
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+254 20 734 9030 / 0732 314 372"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@qualityhealthcare.co.ke"],
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["P.O. Box 72409-00100, Nairobi, Kenya"],
  },
];

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-linear-to-r from-brand-deep mt-10 md:mt-16 to-brand"
    >
      <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-linear-to-l from-navy/40 to-transparent lg:block" />

      <div className="section-px relative mx-auto grid max-w-7xl gap-10 py-4 lg:grid-cols-2 lg:py-10">
        <div>
          <p className="text-xs font-semibold text-white/70">
            READY TO GET STARTED?
          </p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Your Health Matters
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/80">
            Let us help you achieve better health and a safer tomorrow.
            Contact us today for a consultation or a customized healthcare
            solution for your organization.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-[5px] bg-white px-6 py-3 text-sm font-semibold text-plum-dark transition-colors hover:bg-lavender"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-4 lg:pl-6">
          {contacts.map(({ icon: Icon, title, lines }) => (
            <div key={title} className="flex items-start gap-3">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white/15">
                <Icon className="h-5 w-5 text-white" strokeWidth={2} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-white">
                  {title}
                </span>
                {lines.map((line) => (
                  <span
                    key={line}
                    className="mt-1 block text-xs leading-relaxed text-white/75"
                  >
                    {line}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}