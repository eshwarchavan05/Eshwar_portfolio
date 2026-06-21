"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-800/80 bg-ink-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link
          href="#top"
          className="font-display text-sm font-semibold tracking-tight text-ink-50"
        >
          Eshwar Chavan
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-300 transition-colors hover:text-ink-50"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-ink-400 transition-colors hover:text-ink-50"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-ink-400 transition-colors hover:text-ink-50"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
