import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bahaa Eddine Elbaghazaoui",
    short_name: "B. E. Elbaghazaoui",
    description: "Professor of Computer Science & AI at ENSA Béni Mellal.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0d12",
    theme_color: "#2f4bd8",
    icons: [
      { src: "/icon.png", sizes: "256x256", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
