"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "left" | "right" | "none";

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 30 },
  left: { x: -40, y: 0 },
  right: { x: 40, y: 0 },
  none: { x: 0, y: 0 },
};

// Scroll-triggered reveal: fades + translates content into place once, when 20%
// of it enters the viewport. Mirrors Framer Motion's `useInView` (threshold 0.2,
// once: true) used throughout the site.
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const { x, y } = offset[direction];
  // Runtime picks the correct motion element; the cast keeps the JSX type a
  // single component instead of an unrepresentable union.
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </MotionTag>
  );
}
