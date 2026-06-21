import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-ink-800">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-ink-500 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
