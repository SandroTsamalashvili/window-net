import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

type Project = {
  image: string;
  alt: string;
  title: string;
  location: string;
  serviceLabel: string;
  serviceSlug: string;
  className: string;
};

const projects: Project[] = [
  {
    image: "/services/tent-2.jpeg",
    alt: "Modern house with retractable orange tent",
    title: "Lorem ipsum dolor sit",
    location: "Tbilisi, Vake",
    serviceLabel: "ტენტი",
    serviceSlug: "tent",
    className: "sm:col-span-2 sm:row-span-2",
  },
  {
    image: "/services/window.jpeg",
    alt: "Metal-plastic window with city view",
    title: "Consectetur adipiscing",
    location: "Tbilisi, Saburtalo",
    serviceLabel: "მეტალო პლასმასის კარ ფანჯარა",
    serviceSlug: "windows",
    className: "sm:col-span-1 sm:row-span-2",
  },
  {
    image: "/services/window-big.jpeg",
    alt: "Large sliding window on curved terrace",
    title: "Sed do eiusmod tempor",
    location: "Tbilisi, Vera",
    serviceLabel: "მეტალო პლასმასის კარ ფანჯარა",
    serviceSlug: "windows",
    className: "sm:col-span-2 sm:row-span-1",
  },
  {
    image: "/services/window-net-big.jpeg",
    alt: "Balcony with insect net installed",
    title: "Ut labore et dolore",
    location: "Tbilisi, Isani",
    serviceLabel: "მწერებისგან დამცავი ბადე",
    serviceSlug: "insect-net",
    className: "sm:col-span-1 sm:row-span-1",
  },
  {
    image: "/services/window-net.jpeg",
    alt: "Close-up of fine insect mesh",
    title: "Magna aliqua enim",
    location: "Tbilisi, Didube",
    serviceLabel: "მწერებისგან დამცავი ბადე",
    serviceSlug: "insect-net",
    className: "sm:col-span-1 sm:row-span-1",
  },
  {
    image: "/services/tent-1.jpeg",
    alt: "Terrace tent over wooden dining table",
    title: "Quis nostrud exercitation",
    location: "Tbilisi, Gldani",
    serviceLabel: "ტენტი",
    serviceSlug: "tent",
    className: "sm:col-span-2 sm:row-span-1",
  },
];

export default function OurWork() {
  return (
    <section id="work" className="relative py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-20 h-[360px] w-[360px] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col items-start gap-4 md:mb-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs uppercase tracking-[0.25em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Recently completed
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
              Our <span className="italic text-accent">work</span>,
              <br />
              delivered on time.
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="max-w-xl text-base text-muted sm:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
              selection of projects we&apos;ve recently finished for our
              clients across homes and commercial spaces.
            </p>
          </Reveal>
        </div>

        <div className="grid auto-rows-[240px] grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 md:auto-rows-[220px]">
          {projects.map((p, i) => (
            <Reveal
              key={p.image}
              delay={i * 90}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-surface ${p.className}`}
            >
              <Link
                href={`/services/${p.serviceSlug}`}
                className="absolute inset-0 block"
                aria-label={`${p.title} — ${p.serviceLabel}`}
              >
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                />

                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95"
                />

                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-black/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent backdrop-blur-sm">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  Completed
                </span>

                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent/90">
                    {p.serviceLabel}
                  </div>
                  <div className="mt-1.5 text-lg font-bold leading-tight tracking-tight sm:text-xl">
                    {p.title}
                  </div>
                  <div className="mt-1 flex items-center justify-between gap-3 text-xs text-white/70">
                    <span>{p.location}</span>
                    <span
                      className="inline-flex translate-x-[-6px] items-center gap-1 text-accent opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
                      aria-hidden
                    >
                      View service →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-14">
          <div className="grid gap-6 rounded-2xl border border-border bg-surface/60 p-8 sm:grid-cols-3">
            {[
              { k: "120+", v: "Completed projects" },
              { k: "8+", v: "Years on the market" },
              { k: "100%", v: "Client satisfaction" },
            ].map((s) => (
              <div key={s.v} className="flex flex-col gap-1">
                <div className="text-3xl font-black text-accent sm:text-4xl">
                  {s.k}
                </div>
                <div className="text-xs uppercase tracking-wider text-muted">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
