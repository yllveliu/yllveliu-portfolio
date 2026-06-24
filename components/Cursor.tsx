"use client";

import { useEffect, useRef, useState } from "react";

// Custom desktop cursor:
//  - 8px filled accent dot pinned to the pointer
//  - 40px ghost ring that lags ~80ms behind via lerp
//  - on hover over interactive elements: dot hides, ring grows to 60px and
//    fills with accent at 20% opacity
// Hidden entirely on touch / coarse-pointer devices (CSS + JS guard).
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const hoveringRef = useRef(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) return;

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: mouse.x, y: mouse.y };
    let raf = 0;
    let started = false;

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const render = () => {
      ring.x = lerp(ring.x, mouse.x, 0.18);
      ring.y = lerp(ring.y, mouse.y, 0.18);
      const scale = hoveringRef.current ? 1.5 : 1; // 40px -> 60px
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x - 4}px, ${mouse.y - 4}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x - 20}px, ${ring.y - 20}px, 0) scale(${scale})`;
      }
      raf = requestAnimationFrame(render);
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!started) {
        started = true;
        setVisible(true);
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const isInteractive = !!target?.closest(
        'a, button, [role="button"], input, textarea, select, label, [data-cursor="hover"]',
      );
      hoveringRef.current = isInteractive;
      setHovering(isInteractive);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`cursor-el pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-accent transition-opacity duration-200 ${
          visible && !hovering ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`cursor-el pointer-events-none fixed left-0 top-0 z-[9999] h-10 w-10 rounded-full border border-accent transition-[opacity,background-color] duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        } ${hovering ? "bg-accent/20" : "bg-transparent"}`}
      />
    </>
  );
}
