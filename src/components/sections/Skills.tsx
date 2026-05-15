"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { skills } from "@/data";

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <AnimatedSection>
          <p className="mb-3 font-mono text-sm text-accent">02. Skills</p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Technical expertise
          </h2>
          <p className="mb-16 max-w-xl text-base text-muted-foreground">
            Technologies and tools I use to build scalable and production-ready
            web applications.
          </p>
        </AnimatedSection>

        {/* Skills grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map((category, i) => (
            <AnimatedSection key={category.name} delay={i * 0.08}>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-sm font-medium text-foreground">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
