"use client";

import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { personalInfo } from "@/data";

const socialLinks = [
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: Github,
    description: "View my open source work",
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: Linkedin,
    description: "Connect professionally",
  },
  //   {
  //     label: "Twitter",
  //     href: personalInfo.twitter,
  //     icon: Twitter,
  //     description: "Follow my thoughts",
  //   },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <AnimatedSection>
          <p className="mb-3 font-mono text-sm text-accent">05. Contact</p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Let&apos;s work together
          </h2>
          <p className="mb-16 max-w-lg text-base text-muted-foreground">
            I&apos;m currently open to new opportunities — whether it&apos;s a
            full-time role, freelance project, or an interesting conversation.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Email CTA */}
          <AnimatedSection delay={0.1}>
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center justify-between rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/40 hover:bg-card"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors group-hover:border-accent/40 group-hover:text-accent">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Send an email
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {personalInfo.email}
                  </p>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
              />
            </a>
          </AnimatedSection>

          {/* Social links */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-3">
              {socialLinks.map(({ label, href, icon: Icon, description }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/40"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors group-hover:border-accent/40 group-hover:text-accent">
                      <Icon size={14} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {label}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                  />
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
