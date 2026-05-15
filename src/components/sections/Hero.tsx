"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { personalInfo } from "@/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const socialLinks = [
  { label: "GitHub", href: personalInfo.github, icon: Github },
  { label: "LinkedIn", href: personalInfo.linkedin, icon: Linkedin },
  //   { label: "Twitter", href: personalInfo.twitter, icon: Twitter },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Dot grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--foreground) / 0.06) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
        aria-hidden="true"
      />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, hsl(var(--accent) / 0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-5xl px-6 pb-24 pt-36"
      >
        {/* Available badge */}
        {personalInfo.available && (
          <motion.div variants={item} className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              <span
                className="h-1.5 w-1.5 rounded-full bg-green-500"
                style={{ animation: "pulse 2.5s ease-in-out infinite" }}
              />
              Available for new opportunities
            </span>
          </motion.div>
        )}

        {/* Intro label */}
        <motion.p
          variants={item}
          className="mb-4 font-mono text-sm text-muted-foreground"
        >
          Hi, I&apos;m {personalInfo.name} —
        </motion.p>

        {/* Main heading */}
        <motion.h1
          variants={item}
          className="mb-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tighter text-foreground sm:text-5xl md:text-6xl"
        >
          Engineering Web Products
          <br />
          <span className="text-muted-foreground/80">
            that people love to use
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={item}
          className="mb-10 max-w-xl text-base text-muted-foreground md:text-lg"
        >
          Senior software engineer specializing in{" "}
          <span className="text-foreground">React</span>,{" "}
          <span className="text-foreground">Vue</span>,{" "}
          <span className="text-foreground">Angular</span>,{" "}
          <span className="text-foreground">NodeJS</span>, and{" "}
          <span className="text-foreground">TypeScript</span> with experience
          building banking, fintech, and enterprise platforms.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mb-14 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-80 active:scale-[0.98]"
          >
            View my work
            <ArrowRight size={14} />
          </a>
          <a
            href="#contact"
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-border px-5 text-sm font-medium text-foreground transition-colors hover:bg-muted active:scale-[0.98]"
          >
            Contact me
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div variants={item} className="flex items-center gap-5">
          {socialLinks.map(({ label, href, icon: Icon }, i) => (
            <div key={href} className="flex items-center gap-5">
              {i > 0 && (
                <span
                  key={`sep-${href}`}
                  className="text-border select-none"
                  aria-hidden="true"
                >
                  ·
                </span>
              )}
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon size={15} />
                {label}
              </a>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="h-12 w-px bg-gradient-to-b from-transparent to-border" />
      </motion.div>
    </section>
  );
}
