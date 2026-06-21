import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/lib/data";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "@eshwarchavan05",
    href: profile.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "eshwar-chavan",
    href: profile.linkedin,
    icon: Linkedin,
  },
];

export function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
            06 / Contact
          </p>
          <h2 className="mt-3 text-balance font-display text-2xl font-semibold text-ink-50 md:text-3xl">
            Open to internship and full-stack roles
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-400">
            Reach out directly — happy to walk through any project above in
            more depth.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-ink-800 bg-ink-800 sm:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.05}>
              <a
                href={c.href}
                target={c.label === "Email" ? undefined : "_blank"}
                rel={c.label === "Email" ? undefined : "noopener noreferrer"}
                className="group flex h-full flex-col justify-between bg-ink-950 p-6 transition-colors hover:bg-ink-900"
              >
                <div className="flex items-center justify-between">
                  <c.icon size={18} className="text-ink-400" />
                  <ArrowUpRight
                    size={15}
                    className="text-ink-600 transition-colors group-hover:text-accent"
                  />
                </div>
                <div className="mt-8">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-500">
                    {c.label}
                  </p>
                  <p className="mt-1 text-sm text-ink-100">{c.value}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
