export type ServiceImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Service = {
  slug: string;
  title: string;
  titleShort: string;
  tagline: string;
  description: string;
  longDescription: string[];
  features: string[];
  cover: ServiceImage;
  gallery: ServiceImage[];
};

export const services: Service[] = [
  {
    slug: "insect-net",
    title: "მწერებისგან დამცავი ბადე",
    titleShort: "მწერებისგან დამცავი ბადე",
    tagline:
      "Lorem ipsum dolor sit amet — insect nets for windows, doors and balconies.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    longDescription: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    features: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor",
      "Ut labore et dolore magna",
    ],
    cover: {
      src: "/services/window-net-big.jpeg",
      alt: "მწერებისგან დამცავი ბადე — installation",
      width: 1920,
      height: 1080,
    },
    gallery: [
      {
        src: "/services/window-net.jpeg",
        alt: "Window with insect net — interior view",
        width: 600,
        height: 600,
      },
      {
        src: "/services/window-net-big.jpeg",
        alt: "Insect net installed on balcony",
        width: 1920,
        height: 1080,
      },
    ],
  },
  {
    slug: "tent",
    title: "ტენტი",
    titleShort: "ტენტი",
    tagline:
      "Lorem ipsum dolor sit amet — outdoor retractable tents and awnings.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    longDescription: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
    features: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
      "Ut labore et dolore magna aliqua",
    ],
    cover: {
      src: "/services/tent-2.jpeg",
      alt: "ტენტი — retractable outdoor awning",
      width: 1920,
      height: 1280,
    },
    gallery: [
      {
        src: "/services/tent-1.jpeg",
        alt: "Terrace tent over wooden dining table",
        width: 1280,
        height: 720,
      },
      {
        src: "/services/tent-2.jpeg",
        alt: "Modern house with orange retractable tent",
        width: 1920,
        height: 1280,
      },
    ],
  },
  {
    slug: "windows",
    title: "მეტალო პლასმასის კარ ფანჯარა",
    titleShort: "მეტალო პლასმასის კარ ფანჯარა",
    tagline:
      "Lorem ipsum dolor sit amet — metal-plastic doors and windows for any space.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    longDescription: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    ],
    features: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor",
      "Ut labore et dolore magna",
    ],
    cover: {
      src: "/services/window-big.jpeg",
      alt: "მეტალო პლასმასის კარ ფანჯარა — terrace installation",
      width: 1920,
      height: 1080,
    },
    gallery: [
      {
        src: "/services/window.jpeg",
        alt: "Metal-plastic window with city view",
        width: 1280,
        height: 1920,
      },
      {
        src: "/services/window-big.jpeg",
        alt: "Large sliding window on terrace",
        width: 1920,
        height: 1080,
      },
    ],
  },
];

export const serviceMap = Object.fromEntries(
  services.map((s) => [s.slug, s]),
) as Record<string, Service>;
