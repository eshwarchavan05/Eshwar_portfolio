import { Reveal } from "@/components/ui/Reveal";
import { skills } from "@/lib/data";

export function TechStack() {
  const categories = Object.entries(skills);

  return (
    <section id="stack" className="border-b border-ink-800">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
            03 / Stack
          </p>
          <h2 className="mt-3 text-balance font-display text-2xl font-semibold text-ink-50 md:text-3xl">
            Technologies, proven by project use
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-ink-800 bg-ink-800 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(([category, items], i) => (
            <Reveal key={category} delay={i * 0.04} className="bg-ink-950 p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                {category}
              </h3>
              <ul className="mt-4 space-y-2">
                {items.map((item) => (
                  <li key={item} className="text-sm text-ink-300">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
