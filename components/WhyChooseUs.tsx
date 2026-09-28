import {
  Stethoscope,
  Building2,
  HeartHandshake,
  ShieldCheck,
  Network,
  Handshake,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Stethoscope,
    title: "Experienced Professionals",
    description: "Skilled and certified healthcare specialists.",
  },
  {
    icon: Building2,
    title: "Modern Facilities",
    description: "Well-equipped and up-to-date medical technology.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Centered Approach",
    description: "Personalized care for every individual.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Safety",
    description: "Adherence to health and safety standards.",
  },
  {
    icon: Network,
    title: "Comprehensive Services",
    description: "Wide range of medical and occupational health services.",
  },
  {
    icon: Handshake,
    title: "Trusted Partner",
    description: "For individuals, businesses and organizations.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-2">
      <div className="mx-auto grid gap-4 lg:grid-cols-2 lg:gap-4">
        <div className="">
          <p className="text-brand text-md">WHY CHOOSE US</p>
          <h2 className="font-display text-2xl font-bold leading-tight text-navy sm:text-4xl">
            More Than Just Healthcare
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted">
            We combine professional expertise, modern facilities and a
            patient-centered approach to ensure you receive the best possible
            care. Whether it&apos;s routine check-ups, occupational health or
            specialized medical support, we are here for you.
          </p>
          <a
            href="#services"
            className="mt-4 inline-flex items-center gap-2 rounded-[5px] bg-plum px-6 py-3 text-sm font-semibold text-white bg-brand transition-colors hover:bg-brand-dark"
          >
            Our Services
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-[5px] border border-purple-100 p-2"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                <Icon className="h-5 w-5 text-brand" strokeWidth={2} />
              </span>
              <h3 className="mt-2 text-sm font-semibold text-navy">
                {title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}