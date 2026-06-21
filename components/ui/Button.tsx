import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  icon?: ReactNode;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
  icon,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-200 ease-out";

  const styles = {
    primary: "bg-ink-50 text-ink-950 hover:bg-ink-100",
    secondary:
      "bg-ink-900 text-ink-50 border border-ink-700 hover:border-ink-500 hover:bg-ink-800",
    ghost: "text-ink-300 hover:text-ink-50",
  };

  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={cn(base, styles[variant], className)} {...props}>
      {children}
      {icon}
    </Link>
  );
}
