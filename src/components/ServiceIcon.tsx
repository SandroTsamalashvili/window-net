type IconKey =
  | "net"
  | "ac"
  | "boiler"
  | "ventilation"
  | "water-heater"
  | "smart-home";

const paths: Record<IconKey, React.ReactNode> = {
  net: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
    </>
  ),
  ac: (
    <>
      <rect x="3" y="5" width="18" height="10" rx="2" />
      <path d="M7 15v2M12 15v3M17 15v2M6 10h12" />
    </>
  ),
  boiler: (
    <>
      <rect x="6" y="3" width="12" height="14" rx="2" />
      <circle cx="12" cy="10" r="2.5" />
      <path d="M9 17v4M15 17v4" />
    </>
  ),
  ventilation: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3a5 5 0 0 1 0 9M21 12a5 5 0 0 1-9 0M12 21a5 5 0 0 1 0-9M3 12a5 5 0 0 1 9 0" />
    </>
  ),
  "water-heater": (
    <>
      <rect x="6" y="3" width="12" height="18" rx="3" />
      <path d="M9 8h6M9 12h6M12 16c1.5-1 1.5-2 0-3-1.5 1-1.5 2 0 3Z" />
    </>
  ),
  "smart-home": (
    <>
      <path d="M3 10 12 3l9 7v10a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1Z" />
      <circle cx="12" cy="13" r="1" />
    </>
  ),
};

export default function ServiceIcon({
  name,
  className = "h-7 w-7",
}: {
  name: IconKey;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}

export type { IconKey };
