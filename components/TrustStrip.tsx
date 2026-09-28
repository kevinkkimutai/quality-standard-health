import { ShieldCheck, Users2, HeartHandshake } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Registered in Kenya",
    subtitle: "Company Act Cap 486",
  },
  {
    icon: Users2,
    title: "Professional Team",
    subtitle: "Doctors, Nurses & Specialists",
  },
  {
    icon: HeartHandshake,
    title: "Community Focused",
    subtitle: "Healthier People, Stronger Communities",
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-purple-50 py-5">
      <div className="mx-auto flex max-w-content flex-col divide-y divide-lavender-border section-px sm:flex-row sm:divide-x sm:divide-y-0">
        {items.map(({ icon: Icon, title, subtitle }) => (
          <div
            key={title}
            className="flex flex-1 items-center gap-3 py-4 sm:justify-center sm:py-0 sm:px-6"
          >
            <Icon className="h-6 w-6 flex-none text-brand" strokeWidth={1.75} />
            <span>
              <span className="block text-sm font-semibold text-navy">
                {title}
              </span>
              <span className="block text-xs text-muted">{subtitle}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}