import type { ReactNode } from "react";

// Small accent monospace label that sits above each section heading.
export default function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-accent">
      <span className="h-px w-6 bg-accent/60" aria-hidden="true" />
      {children}
    </span>
  );
}
