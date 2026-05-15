"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { experiences } from "@/data";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <AnimatedSection>
          <p className="mb-3 font-mono text-sm text-accent">03. Experience</p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Where I&apos;ve worked
          </h2>
          <p className="mb-16 max-w-xl text-base text-muted-foreground">
            A timeline of my professional experience and engineering work.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-2 hidden h-[calc(100%-2rem)] w-px bg-border md:block"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <AnimatedSection
                key={`${exp.company}-${exp.period}`}
                delay={i * 0.1}
              >
                <div className="group relative md:pl-10">
                  {/* Timeline dot */}
                  <div
                    className={cn(
                      "absolute -left-[5px] top-1.5 hidden h-2.5 w-2.5 rounded-full border-2 border-background md:block",
                      exp.current ? "bg-accent" : "bg-muted-foreground",
                    )}
                    aria-hidden="true"
                  />

                  {/* Header */}
                  <div className="mb-3 flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-semibold text-foreground">
                          {exp.company}
                        </h3>
                        {exp.current && (
                          <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {exp.role}
                      </p>
                    </div>
                    <p className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                      {exp.period}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2" role="list">
                    {exp.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground"
                          aria-hidden="true"
                        />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
