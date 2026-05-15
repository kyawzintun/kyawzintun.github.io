"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { projects } from "@/data";

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <AnimatedSection>
          <p className="mb-3 font-mono text-sm text-accent">04. Projects</p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Featured work
          </h2>
          <p className="mb-16 max-w-xl text-base text-muted-foreground">
            A selection of enterprise applications and platforms I&apos;ve
            worked on across fintech and banking industries.
          </p>
        </AnimatedSection>

        {/* Project cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="group relative flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/30"
              >
                {/* Top row */}
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-base font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={14} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live site`}
                        className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
