import Image from "next/image";
import type { ServiceImage } from "@/lib/services";
import Reveal from "./Reveal";

export default function Gallery({ images }: { images: ServiceImage[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {images.map((img, i) => (
        <Reveal
          key={img.src}
          delay={i * 120}
          className="group relative overflow-hidden rounded-2xl border border-border bg-surface"
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
        </Reveal>
      ))}
    </div>
  );
}
