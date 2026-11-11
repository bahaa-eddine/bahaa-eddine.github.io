import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";
import { Analytics } from "@/components/Analytics";
import { SITE_NAME, SITE_URL } from "@/lib/site";

/** Google Analytics 4 measurement ID (override with NEXT_PUBLIC_GA_ID on Vercel; set it to "off" to disable). */
const GA_ID =
  process.env.NEXT_PUBLIC_GA_ID === "off" ? undefined : process.env.NEXT_PUBLIC_GA_ID || "G-69RX31DGZW";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-jb", display: "swap", preload: false });

const description =
  "Professor of Computer Science at ENSA Béni Mellal, PhD in AI, editor of 5 IGI Global books and Java / Spring / React tech lead. Research and teaching.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} · Professor of Computer Science & AI`,
    template: `%s · ${SITE_NAME}`,
  },
  description,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  keywords: [
    "Bahaa Eddine Elbaghazaoui",
    "Elbaghazaoui",
    "ENSA Béni Mellal",
    "Professor Computer Science Morocco",
    "Artificial Intelligence",
    "Data profiling",
    "Generative AI",
    "DevSecOps",
    "IGI Global editor",
    "Java Spring React",
    "Sultan Moulay Slimane University",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "/",
    siteName: SITE_NAME,
    title: `${SITE_NAME} · Professor of Computer Science & AI`,
    description,
    firstName: "Bahaa Eddine",
    lastName: "Elbaghazaoui",
  },
  twitter: { card: "summary_large_image", title: SITE_NAME, description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  category: "education",
  publisher: SITE_NAME,
  formatDetection: { telephone: false, address: false, email: false },
  // Paste the codes from Google Search Console / Bing Webmaster Tools into Vercel env vars.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f4ef" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d12" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${fraunces.variable} ${mono.variable}`}>
      <head>
        {/* Enables scroll-reveal hiding only when JS runs, so no-JS visitors and crawlers always see content. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <Providers>
          <a href="#main" className="skip-link">Skip to content</a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <RevealObserver />
        </Providers>
        {GA_ID && <Analytics gaId={GA_ID} />}
      </body>
    </html>
  );
}
