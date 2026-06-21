"use client";

import { useState } from "react";
import { Github, ExternalLink, FileText } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectModal } from "@/components/ProjectModal";
import { featuredProjects, otherProjects, type Project } from "@/lib/data";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  function openCaseStudy(p: Project) {
    setActive(p);
    setOpen(true);
  }

  return (
    <section id="work" className="border-b border-ink-800">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
            02 / Selected work
          </p>
          <h2 className="mt-3 text-balance font-display text-2xl font-semibold text-ink-50 md:text-3xl">
            Projects built and shipped
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <article className="group flex h-full flex-col rounded-md border border-ink-800 bg-ink-900/40 p-6 transition-colors duration-200 hover:border-ink-600">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink-50">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-sm text-ink-400">{p.tagline}</p>
                  </div>
                  <div className="flex shrink-0 gap-1">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.name} GitHub repository`}
                      className="rounded-md p-2 text-ink-400 transition-colors hover:bg-ink-800 hover:text-ink-50"
                    >
                      <Github size={16} />
                    </a>
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.name} live demo`}
                        className="rounded-md p-2 text-ink-400 transition-colors hover:bg-ink-800 hover:text-ink-50"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-ink-300">
                  {p.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {p.highlights.slice(0, 3).map((h) => (
                    <li key={h} className="flex gap-2 text-[13px] leading-relaxed text-ink-400">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-sm border border-ink-700 px-2 py-0.5 font-mono text-[11px] text-ink-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => openCaseStudy(p)}
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-ink-50 underline decoration-ink-600 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  <FileText size={14} />
                  Read case study
                </button>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-16">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
            More repositories
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {otherProjects.map((p) => (
              <button
                key={p.slug}
                onClick={() => openCaseStudy(p)}
                className="flex flex-col items-start rounded-md border border-ink-800 p-4 text-left transition-colors hover:border-ink-600"
              >
                <span className="font-display text-sm font-semibold text-ink-100">
                  {p.name}
                </span>
                <span className="mt-1 text-xs text-ink-500">{p.tagline}</span>
                <span className="mt-3 font-mono text-[11px] text-ink-600">
                  {p.stack.slice(0, 2).join(" · ")}
                </span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <ProjectModal project={active} open={open} onOpenChange={setOpen} />
    </section>
  );
}
