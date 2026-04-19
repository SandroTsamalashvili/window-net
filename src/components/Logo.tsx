type LogoProps = {
  size?: "sm" | "md" | "lg";
  withTagline?: boolean;
};

const sizeMap = {
  sm: "text-2xl",
  md: "text-3xl",
  lg: "text-5xl",
};

export default function Logo({ size = "md", withTagline = false }: LogoProps) {
  return (
    <div className="inline-flex flex-col items-start leading-none select-none">
      <span
        className={`${sizeMap[size]} font-black italic tracking-tight text-white`}
        style={{ fontStretch: "expanded", letterSpacing: "-0.04em" }}
      >
        GLC
      </span>
      {withTagline && (
        <span className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted">
          Home · Commercial · Indoors & Outdoors
        </span>
      )}
    </div>
  );
}
