import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, serviceMap } from "@/lib/services";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceMap[slug];
  if (!service) return { title: "Service not found" };
  return {
    title: `${service.title} — GLC`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = serviceMap[slug];
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-0 h-[380px] w-[380px] rounded-full bg-accent/15 blur-3xl anim-float"
        />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-14 pb-16 md:pt-20 md:pb-24">
          <nav
            className="anim-fade-in flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted"
            style={{ animationDelay: "50ms" }}
          >
            <Link href="/" className="hover:text-accent">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span>Services</span>
            <span aria-hidden>/</span>
            <span className="text-foreground/80">{service.titleShort}</span>
          </nav>

          <div className="mt-8 grid gap-10 md:grid-cols-[1.05fr_1fr] md:items-center">
            <div className="flex flex-col items-start gap-5">
              <span
                className="anim-fade-in inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs uppercase tracking-[0.25em] text-muted"
                style={{ animationDelay: "100ms" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Service
              </span>
              <h1
                className="anim-fade-up text-3xl font-black leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
                style={{ animationDelay: "200ms" }}
              >
                {service.title}
              </h1>
              <p
                className="anim-fade-up max-w-lg text-base text-muted sm:text-lg"
                style={{ animationDelay: "320ms" }}
              >
                {service.tagline}
              </p>
              <div
                className="anim-fade-up flex flex-wrap gap-3"
                style={{ animationDelay: "450ms" }}
              >
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,221,28,0.4)]"
                >
                  Request a quote <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  ← Back to home
                </Link>
              </div>
            </div>

            <div
              className="anim-scale-in relative overflow-hidden rounded-2xl border border-border bg-surface"
              style={{ animationDelay: "200ms" }}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={service.cover.src}
                  alt={service.cover.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-accent/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
            <div className="flex flex-col gap-6">
              <Reveal>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  About this service
                </h2>
              </Reveal>
              {service.longDescription.map((p, i) => (
                <Reveal key={i} delay={i * 100}>
                  <p className="text-base leading-relaxed text-muted sm:text-lg">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={150}>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  What&apos;s included
                </h3>
                <ul className="mt-5 space-y-3">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-foreground/90"
                    >
                      <span
                        aria-hidden
                        className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent"
                      >
                        ✓
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
              Gallery
            </h2>
          </Reveal>
          <Gallery images={service.gallery} />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
              Other services
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 120}>
                <Link
                  href={`/services/${o.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-[0_20px_40px_-20px_rgba(255,221,28,0.3)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                      <Image
                        src={o.cover.src}
                        alt={o.cover.alt}
                        fill
                        sizes="64px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <div className="text-base font-semibold text-foreground group-hover:text-accent">
                        {o.title}
                      </div>
                      <div className="mt-1 line-clamp-1 text-xs text-muted">
                        {o.tagline}
                      </div>
                    </div>
                  </div>
                  <span
                    className="text-accent opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100"
                    aria-hidden
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
