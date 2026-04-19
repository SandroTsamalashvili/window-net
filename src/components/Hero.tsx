import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-[-10%] h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl anim-float"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[40%] h-[360px] w-[360px] rounded-full bg-accent/10 blur-3xl"
        style={{ animation: "glow-pulse 7s ease-in-out infinite" }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="flex flex-col items-start gap-6">
          <span
            className="anim-fade-in inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs uppercase tracking-[0.25em] text-muted"
            style={{ animationDelay: "100ms" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Home · Commercial · Indoors & Outdoors
          </span>

          <h1
            className="anim-fade-up text-4xl font-black leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
            style={{ animationDelay: "150ms" }}
          >
            Reliable services
            <br />
            for <span className="italic text-accent">every corner</span>
            <br />
            of your space.
          </h1>

          <p
            className="anim-fade-up max-w-xl text-base text-muted sm:text-lg"
            style={{ animationDelay: "300ms" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. From insect
            nets to air conditioning and gas boilers — GLC delivers quality
            installation and service across homes and commercial buildings.
          </p>

          <div
            className="anim-fade-up flex flex-wrap items-center gap-3"
            style={{ animationDelay: "450ms" }}
          >
            <Link
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,221,28,0.4)]"
            >
              View services
              <span aria-hidden>↓</span>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Contact us
            </Link>
          </div>

          <div
            className="anim-fade-up mt-10 grid w-full grid-cols-3 gap-6 border-t border-border/70 pt-8"
            style={{ animationDelay: "600ms" }}
          >
            {[
              { k: "10+", v: "Service categories" },
              { k: "500+", v: "Projects completed" },
              { k: "24/7", v: "Support available" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-3xl font-black text-accent md:text-4xl">
                  {s.k}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
