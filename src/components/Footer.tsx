import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="mt-24 border-t border-border/70 bg-surface"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Logo size="md" withTagline />
            <p className="mt-4 max-w-xs text-sm text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Providing
              reliable home and commercial services since day one.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide text-foreground/90">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li><a className="hover:text-accent" href="#services">Insect Nets</a></li>
              <li><a className="hover:text-accent" href="#services">Air Conditioning</a></li>
              <li><a className="hover:text-accent" href="#services">Gas Boilers</a></li>
              <li><a className="hover:text-accent" href="#services">Ventilation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide text-foreground/90">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li><a className="hover:text-accent" href="#about">About</a></li>
              <li><a className="hover:text-accent" href="#services">Catalog</a></li>
              <li><a className="hover:text-accent" href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide text-foreground/90">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>+995 000 000 000</li>
              <li>hello@glc.example</li>
              <li>Tbilisi, Georgia</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/70 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} GLC. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-accent">Privacy</Link>
            <Link href="#" className="hover:text-accent">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
