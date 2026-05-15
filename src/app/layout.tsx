import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kyaw Zin Tun — Senior Software Engineer",
  description:
    "Senior software engineer specializing in Vue, Angular, React, Next.js, and TypeScript. Building fast, scalable web applications with a focus on performance and developer experience.",
  keywords: [
    "software engineer",
    "Senior developer",
    "front-end developer",
    "full-stack developer",
    "vue.js",
    "angular",
    "node.js",
    "nuxt.js",
    "react",
    "next.js",
    "typescript",
    "web developer",
    "javascript",
    "programmer",
    "software developer",
    "web applications",
    "performance optimization",
    "developer experience",
  ],
  authors: [{ name: "Kyaw Zin Tun", url: "https://kyawzintun.github.io" }],
  creator: "Kyaw Zin Tun",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kyawzintun.github.io",
    title: "Kyaw Zin Tun — Senior Software Engineer",
    description:
      "Senior software engineer specializing in Vue, Angular, React, Next.js, and TypeScript.",
    siteName: "Kyaw Zin Tun",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyaw Zin Tun — Senior Software Engineer",
    description:
      "Senior software engineer specializing in Vue, Angular, React, Next.js, and TypeScript.",
    creator: "@kyawzintun",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
