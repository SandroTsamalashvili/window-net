import Image from "next/image";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  withTagline?: boolean;
};

const sizeMap: Record<NonNullable<LogoProps["size"]>, { w: number; h: number }> = {
  sm: { w: 120, h: 68 },
  md: { w: 180, h: 101 },
  lg: { w: 300, h: 169 },
};

export default function Logo({ size = "md", withTagline = false }: LogoProps) {
  const { w, h } = sizeMap[size];
  return (
    <div className="inline-flex flex-col items-start leading-none select-none">
      <Image
        src="/logo.png"
        alt="GLC"
        width={w}
        height={h}
        priority
        style={{ width: w, height: "auto" }}
      />
      {withTagline && (
        <span className="mt-3 text-[10px] uppercase tracking-[0.3em] text-muted">
          Home · Commercial · Indoors & Outdoors
        </span>
      )}
    </div>
  );
}
