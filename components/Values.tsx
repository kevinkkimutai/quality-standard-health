import { Scale, Heart, Star, Users, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Scale,
    title: "Integrity",
    description: "We uphold the highest ethical standards in all that we do.",
  },
  {
    icon: Heart,
    title: "Compassion",
    description: "We treat every client with respect, dignity and care.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "We are committed to continuous improvement and quality service.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "We work together to achieve better health outcomes.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new ideas and technology to enhance care.",
  },
];

export default function Values() {
  return (
    <section className="bg-purple-50">
      <div className="section-px max-w-7xl py-4 px-2 mx-auto max-w-content">
        <p className="text-sm text-brand">OUR VALUES</p>
        <h2 className="font-display text-2xl font-bold text-navy sm:text-4xl">
          The Principles That Guide Us
        </h2>
        <p className="mt-1 max-w-xl text-md leading-relaxed text-muted">
          Our values define who we are and how we serve our clients, partners
          and communities.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {values.map(({ icon: Icon, title, description }) => (
            <div key={title}>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                <Icon className="h-6 w-6 text-brand" strokeWidth={2} />
              </span>
              <h3 className="mt-2 text-base font-semibold text-navy">
                {title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}