import Link from "next/link";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import { services } from "@/lib/services";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="GLC home" className="flex items-center gap-3">
          <Logo size="sm" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <div className="group relative">
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm text-foreground/80 transition-colors hover:text-foreground"
              aria-haspopup="true"
            >
              Services
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180"
                aria-hidden
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              className="invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
              role="menu"
            >
              <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur">
                <ul className="py-2">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group/item flex items-center justify-between gap-4 px-4 py-3 text-sm text-foreground/85 transition-colors hover:bg-accent/10 hover:text-accent"
                      >
                        <span className="truncate">{s.title}</span>
                        <span
                          className="text-accent opacity-0 transition-all duration-300 group-hover/item:translate-x-0.5 group-hover/item:opacity-100"
                          aria-hidden
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-black transition-transform hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,221,28,0.35)]"
          >
            Get a quote
            <span aria-hidden>→</span>
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
