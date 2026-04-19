import Reveal from "./Reveal";
import ServiceCard from "./ServiceCard";
import type { IconKey } from "./ServiceIcon";

type Service = {
  icon: IconKey;
  title: string;
  description: string;
  gradient: string;
};

const services: Service[] = [
  {
    icon: "net",
    title: "Insect Nets & Window Screens",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Durable mesh solutions for windows, doors and balconies — custom-fit for any frame.",
    gradient:
      "linear-gradient(135deg, #ffdd1c 0%, #fff4a3 45%, #1a1a1a 120%)",
  },
  {
    icon: "ac",
    title: "Air Conditioning Systems",
    description:
      "Sed do eiusmod tempor incididunt ut labore. Supply, installation and maintenance of residential and commercial split-system AC units.",
    gradient:
      "linear-gradient(135deg, #1c1c1c 0%, #2a2a2a 55%, #ffdd1c 160%)",
  },
  {
    icon: "boiler",
    title: "Gas Boilers & Heating",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation. Certified setup of gas boilers, thermostats and zonal heating controls.",
    gradient:
      "linear-gradient(135deg, #fff4a3 0%, #ffdd1c 40%, #0a0a0a 150%)",
  },
  {
    icon: "ventilation",
    title: "Ventilation & Air Quality",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate. Quiet, energy-efficient ventilation with filtration for cleaner indoor air.",
    gradient:
      "linear-gradient(135deg, #2a2a2a 0%, #141414 55%, #ffdd1c 180%)",
  },
  {
    icon: "water-heater",
    title: "Water Heaters",
    description:
      "Excepteur sint occaecat cupidatat non proident. Electric and gas water heater installation, repair and tank replacement.",
    gradient:
      "linear-gradient(135deg, #ffdd1c 0%, #0a0a0a 90%)",
  },
  {
    icon: "smart-home",
    title: "Smart Home Integration",
    description:
      "Sunt in culpa qui officia deserunt mollit anim id est laborum. Connect climate, lighting and security into one seamless system.",
    gradient:
      "linear-gradient(135deg, #141414 0%, #ffdd1c 200%)",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-14 flex flex-col items-start gap-4 md:mb-20">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs uppercase tracking-[0.25em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              What we do
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
              A full catalog of services,
              <br />
              <span className="italic text-accent">under one roof.</span>
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="max-w-xl text-base text-muted sm:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explore
              our most-requested services below — each backed by certified
              specialists and a workmanship guarantee.
            </p>
          </Reveal>
        </div>

        <ul className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              as="li"
              delay={i * 90}
              className="h-full"
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                gradient={service.gradient}
                index={i}
              />
            </Reveal>
          ))}
        </ul>

        <Reveal delay={200} className="mt-16">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-gradient-to-br from-surface to-background p-8 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Don&apos;t see what you need?
              </h3>
              <p className="mt-2 max-w-lg text-sm text-muted sm:text-base">
                Lorem ipsum dolor sit amet. Tell us about your project and
                we&apos;ll put together a personalised quote within 24 hours.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,221,28,0.4)]"
            >
              Request a quote <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
