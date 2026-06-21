import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="border-b border-ink-800">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[0.4fr_0.6fr]">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
              01 / About
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-balance font-display text-2xl font-medium leading-snug text-ink-100 md:text-3xl">
              {profile.summary}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
