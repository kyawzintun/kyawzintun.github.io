"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { personalInfo, stats } from "@/data";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <AnimatedSection>
          <p className="mb-3 font-mono text-sm text-accent">01. About</p>
          <h2 className="mb-16 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            A bit about me
          </h2>
        </AnimatedSection>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Bio */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-base leading-relaxed">{personalInfo.bio}</p>
              <p className="text-base leading-relaxed">
                {personalInfo.bioExtended}
              </p>
              <p className="text-base leading-relaxed">
                Based in{" "}
                <span className="text-foreground">{personalInfo.location}</span>
                . Always open to interesting problems and new collaborations.
              </p>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-border/80"
                >
                  <p className="mb-1 text-3xl font-semibold tracking-tight text-foreground">
                    {value}
                  </p>
                  <p className="text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
