"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/data";

export function ProjectModal({
  project,
  open,
  onOpenChange,
}: {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!project) return null;
  const { caseStudy } = project;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm data-[state=open]:animate-[fadeIn_0.2s_ease-out]" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[88vh] w-[92vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg border border-ink-700 bg-ink-900 shadow-card focus:outline-none">
          <div className="sticky top-0 flex items-start justify-between border-b border-ink-800 bg-ink-900/95 px-6 py-5 backdrop-blur">
            <div>
              <Dialog.Title className="font-display text-xl font-semibold text-ink-50">
                {project.name}
              </Dialog.Title>
              <Dialog.Description className="mt-1 text-sm text-ink-400">
                {project.tagline}
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <button
                aria-label="Close case study"
                className="rounded-md p-1.5 text-ink-400 transition-colors hover:bg-ink-800 hover:text-ink-50"
              >
                <X size={18} />
              </button>
            </Dialog.Close>
          </div>

          <div className="space-y-6 px-6 py-6">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-sm border border-ink-700 px-2 py-1 font-mono text-[11px] text-ink-300"
                >
                  {s}
                </span>
              ))}
            </div>

            <CaseStudyBlock label="Problem" text={caseStudy.problem} />
            <CaseStudyBlock label="Solution" text={caseStudy.solution} />
            <CaseStudyBlock label="Architecture" text={caseStudy.architecture} />
            <CaseStudyBlock label="Challenges" text={caseStudy.challenges} />

            <div>
              <h4 className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-accent">
                Outcomes
              </h4>
              <ul className="space-y-1.5">
                {caseStudy.outcomes.map((o) => (
                  <li key={o} className="flex gap-2 text-sm text-ink-300">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-500" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3 border-t border-ink-800 pt-5">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-ink-700 bg-ink-800 px-4 py-2 text-sm font-medium text-ink-50 transition-colors hover:border-ink-500"
              >
                <Github size={15} />
                Repository
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-ink-50 px-4 py-2 text-sm font-medium text-ink-950 transition-colors hover:bg-ink-100"
                >
                  <ExternalLink size={15} />
                  Live demo
                </a>
              )}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function CaseStudyBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <h4 className="mb-1.5 font-mono text-xs uppercase tracking-[0.15em] text-accent">
        {label}
      </h4>
      <p className="text-[15px] leading-relaxed text-ink-300">{text}</p>
    </div>
  );
}
