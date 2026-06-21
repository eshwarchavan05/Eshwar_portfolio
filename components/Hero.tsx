"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, FileText } from "lucide-react";
import { profile, featuredProjects } from "@/lib/data";

const deployLog = featuredProjects.map((p) => ({
  name: p.name,
  status: p.demo ? "deployed" : "shipped",
}));

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-ink-800">
      <div className="absolute inset-0 bg-grid fade-mask-b opacity-60" />
      <div className="mx-auto grid max-w-content gap-12 px-6 pb-24 pt-20 md:grid-cols-[1.2fr_0.8fr] md:items-center md:pb-32 md:pt-28">
        <div className="relative">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-accent"
          >
            {profile.role} · {profile.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance font-display text-display-md font-semibold tracking-tight text-ink-50 sm:text-display-lg md:text-display-xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink-300"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-md bg-ink-50 px-5 py-2.5 text-sm font-medium text-ink-950 transition-colors hover:bg-ink-100"
            >
              View projects
              <ArrowUpRight size={16} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-ink-700 bg-ink-900 px-5 py-2.5 text-sm font-medium text-ink-50 transition-colors hover:border-ink-500 hover:bg-ink-800"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-md border border-accent/20 bg-accent/5 px-5 py-2.5 text-sm font-medium text-accent transition-all hover:bg-accent/10 sm:px-6"
            >
              <FileText size={16} />
              Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3"
          >
            {profile.currentFocus.map((f) => (
              <div key={f} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-accent" />
                <span className="text-sm text-ink-400">{f}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-lg border border-ink-700 bg-ink-900/60 shadow-card"
        >
          <div className="flex items-center gap-1.5 border-b border-ink-800 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
            <span className="ml-2 font-mono text-[11px] text-ink-500">deploy.log</span>
          </div>
          <div className="space-y-3 px-5 py-5 font-mono text-[13px]">
            {deployLog.map((d, i) => (
              <div key={d.name} className="flex items-center justify-between gap-4">
                <span className="text-ink-300">
                  <span className="text-ink-600">{String(i + 1).padStart(2, "0")} ›</span> {d.name}
                </span>
                <span className="flex items-center gap-1.5 text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {d.status}
                </span>
              </div>
            ))}
            <div className="pt-2 text-ink-600">
              200+ DSA problems solved · LeetCode / CodeChef
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
