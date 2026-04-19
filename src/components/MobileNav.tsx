"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/lib/services";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="relative z-[60] inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-accent hover:text-accent"
      >
        <span className="sr-only">Toggle menu</span>
        <span className="relative block h-4 w-5">
          <span
            className={`absolute left-0 top-0 block h-0.5 w-5 rounded bg-current transition-all duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[7px] block h-0.5 w-5 rounded bg-current transition-all duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 bottom-0 block h-0.5 w-5 rounded bg-current transition-all duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden
      />

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 pt-20 backdrop-blur-md transition-all duration-300 ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 pb-8">
          <div className="mb-3 mt-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted">
            Services
          </div>
          <ul className="flex flex-col gap-1">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="flex items-center justify-between gap-3 rounded-xl border border-transparent px-3 py-3 text-base text-foreground/90 transition-colors hover:border-border hover:bg-surface hover:text-accent"
                >
                  <span className="truncate">{s.title}</span>
                  <span className="text-accent" aria-hidden>
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="my-5 h-px bg-border/70" />

          <ul className="flex flex-col gap-1">
            <li>
              <Link
                href="/#about"
                className="block rounded-xl px-3 py-3 text-base text-foreground/90 transition-colors hover:bg-surface hover:text-accent"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="block rounded-xl px-3 py-3 text-base text-foreground/90 transition-colors hover:bg-surface hover:text-accent"
              >
                Contact
              </Link>
            </li>
          </ul>

          <Link
            href="/#contact"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
          >
            Get a quote <span aria-hidden>→</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
