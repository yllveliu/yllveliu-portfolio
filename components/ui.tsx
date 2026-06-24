import Link from "next/link";
import type { ReactNode } from "react";

// Shared, content-free UI primitives reused across sections.

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-accent/60 px-2 py-0.5 font-mono text-[11px] leading-tight text-accent">
      {children}
    </span>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  ariaLabel?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  ariaLabel,
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ease-out will-change-transform";

  const styles =
    variant === "primary"
      ? "bg-accent text-bg hover:scale-[1.04] hover:shadow-glow"
      : "border border-accent/70 text-accent hover:bg-accent hover:text-bg hover:scale-[1.04]";

  const rel = external ? "noopener noreferrer" : undefined;
  const target = external ? "_blank" : undefined;

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      target={target}
      rel={rel}
      className={`${base} ${styles}`}
    >
      {children}
    </Link>
  );
}
