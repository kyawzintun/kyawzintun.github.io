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
  title: "Kyaw Zin Tun — Full Stack Developer",
  description:
    "Full stack developer with 10+ years of experience building secure, scalable web applications with React, Vue, Angular, Next.js, Node.js, and Spring Boot.",
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
    title: "Kyaw Zin Tun — Full Stack Developer",
    description:
      "Full stack developer building secure, scalable web applications across fintech, banking, and enterprise platforms.",
    siteName: "Kyaw Zin Tun",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyaw Zin Tun — Full Stack Developer",
    description:
      "Full stack developer building secure, scalable web applications across fintech, banking, and enterprise platforms.",
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
