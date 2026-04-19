"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

type Slide = {
  image: string;
  alt: string;
  eyebrow: string;
};

const slides: Slide[] = [
  {
    image: "/services/window-big.jpeg",
    alt: "Panoramic sliding window on a curved terrace",
    eyebrow: "Windows & doors",
  },
  {
    image: "/services/tent-2.jpeg",
    alt: "Modern house with retractable orange tent",
    eyebrow: "Retractable tents",
  },
  {
    image: "/services/window-net-big.jpeg",
    alt: "Balcony with insect net installed",
    eyebrow: "Insect nets",
  },
  {
    image: "/services/window.jpeg",
    alt: "Metal-plastic window with city view",
    eyebrow: "Metal-plastic frames",
  },
  {
    image: "/services/tent-1.jpeg",
    alt: "Terrace tent over a wooden dining table",
    eyebrow: "Outdoor shade",
  },
  {
    image: "/services/window-net.jpeg",
    alt: "Close-up of fine insect mesh",
    eyebrow: "Fine mesh detail",
  },
];

const AUTOPLAY_MS = 5500;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setIndex(((next % slides.length) + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const current = slides[index];

  return (
    <section
      className="relative w-full h-[88vh] min-h-140 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured services"
    >
      {slides.map((s, i) => (
        <div
          key={s.image}
          className={`absolute inset-0 transition-opacity duration-1200 ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={s.image}
            alt={s.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover ${i === index ? "animate-kenburns" : ""}`}
          />
        </div>
      ))}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-black/30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/70 via-black/10 to-transparent"
      />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-16 sm:px-6 md:pb-20">
        <div
          key={index}
          className="anim-fade-up flex max-w-2xl flex-col items-start gap-4"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-accent backdrop-blur-sm">
            <span className="h-1 w-1 rounded-full bg-accent" />
            {current.eyebrow}
          </span>

          <h1 className="text-3xl font-black leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
            შექმენი <span className="italic text-accent">კომფორტი</span>
            <br />
            GLC-სთან ერთად.
          </h1>

          <p className="max-w-lg text-sm text-white/80 sm:text-base">
            კარ-ფანჯარა, ტენტები, ბადეები და კლიმატ-სისტემები — მონტაჟი
            გულისხმიერად, შექმნილი ხანგრძლივი მსახურებისთვის.
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Link
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,221,28,0.4)]"
            >
              View services
              <span aria-hidden>↓</span>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
            >
              Contact us
            </Link>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2" role="tablist">
            {slides.map((s, i) => (
              <button
                key={s.image}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => go(i)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === index
                    ? "w-10 bg-accent"
                    : "w-5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => go(index - 1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => go(index + 1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
            >
              →
            </button>
          </div>
        </div>

        <div className="mt-4 text-[11px] uppercase tracking-[0.28em] text-white/60">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </div>
      </div>
    </section>
  );
}
