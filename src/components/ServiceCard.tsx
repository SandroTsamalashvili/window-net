import ServiceIcon, { type IconKey } from "./ServiceIcon";

type ServiceCardProps = {
  icon: IconKey;
  title: string;
  description: string;
  gradient: string;
  index: number;
};

export default function ServiceCard({
  icon,
  title,
  description,
  gradient,
  index,
}: ServiceCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-500 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_30px_60px_-30px_rgba(255,221,28,0.35)]">
      <div
        className="relative h-44 overflow-hidden"
        style={{ background: gradient }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.35), transparent 45%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.3), transparent 50%)",
          }}
        />
        <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-black/70 text-accent ring-1 ring-accent/30 transition-transform duration-500 group-hover:scale-110">
          <ServiceIcon name={icon} />
        </div>
        <span className="absolute right-5 top-5 rounded-full bg-black/50 px-2 py-1 font-mono text-[10px] tracking-widest text-white/80">
          0{index + 1}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-accent">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{description}</p>

        <div className="mt-auto pt-4">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100">
            Learn more <span aria-hidden>→</span>
          </span>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </article>
  );
}
