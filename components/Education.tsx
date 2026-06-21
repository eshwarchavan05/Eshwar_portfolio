import { Reveal } from "@/components/ui/Reveal";
import { education, certifications } from "@/lib/data";

export function Education() {
  return (
    <section className="border-b border-ink-800">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
            05 / Education
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <ol className="space-y-8 border-l border-ink-800 pl-6">
              {education.map((e, i) => (
                <Reveal key={e.school} delay={i * 0.06}>
                  <li className="relative">
                    <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-ink-950" />
                    <p className="font-mono text-xs text-ink-500">{e.period}</p>
                    <h3 className="mt-1 font-display text-base font-semibold text-ink-50">
                      {e.school}
                    </h3>
                    <p className="mt-1 text-sm text-ink-300">{e.degree}</p>
                    <p className="text-sm text-ink-500">{e.location}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal delay={0.1}>
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
              Certifications
            </h3>
            <ul className="mt-4 space-y-3">
              {certifications.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-ink-300">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-500" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
