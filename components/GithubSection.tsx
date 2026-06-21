import { Reveal } from "@/components/ui/Reveal";
import { githubStats, profile } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

const stats = [
  { label: "Public repositories", value: String(githubStats.publicRepos) },
  { label: "Languages in active use", value: String(githubStats.topLanguages.length) },
  { label: "Competitive programming", value: "200+" },
];

export function GithubSection() {
  return (
    <section className="border-b border-ink-800">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
            04 / GitHub
          </p>
          <h2 className="mt-3 text-balance font-display text-2xl font-semibold text-ink-50 md:text-3xl">
            Shipping in the open
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-[0.55fr_0.45fr]">
          <Reveal className="grid grid-cols-3 gap-px overflow-hidden rounded-md border border-ink-800 bg-ink-800">
            {stats.map((s) => (
              <div key={s.label} className="bg-ink-950 p-6">
                <div className="font-display text-3xl font-semibold text-ink-50">
                  {s.value}
                </div>
                <div className="mt-2 text-xs leading-snug text-ink-400">
                  {s.label}
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.06} className="rounded-md border border-ink-800 p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
              Most used languages
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {githubStats.topLanguages.map((l) => (
                <span
                  key={l}
                  className="rounded-sm border border-ink-700 px-2.5 py-1 font-mono text-xs text-ink-300"
                >
                  {l}
                </span>
              ))}
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink-50 underline decoration-ink-600 underline-offset-4 hover:decoration-accent"
            >
              View full profile
              <ArrowUpRight size={14} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
