"use client";

import { useEffect, useRef } from "react";

// Abstract geometric hero element: slowly rotating concentric rings + polygon,
// with a subtle parallax that reacts to the mouse position. Pure CSS/SVG — no
// Three.js dependency, keeping the bundle small.
export default function HeroShape() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 36;
      const y = (e.clientY / window.innerHeight - 0.5) * 36;
      if (wrapRef.current) {
        wrapRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative h-full w-full transition-transform duration-500 ease-out"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-accent/20 blur-[90px]" />

      {/* Rotating composition */}
      <div className="absolute inset-0 animate-float">
        <svg
          viewBox="0 0 400 400"
          className="h-full w-full"
          aria-hidden="true"
          fill="none"
        >
          <defs>
            <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00D8FF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#00D8FF" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* outer dashed ring — slow spin */}
          <g
            className="origin-center animate-spin-slow"
            style={{ transformBox: "fill-box" }}
          >
            <circle
              cx="200"
              cy="200"
              r="170"
              stroke="url(#ring)"
              strokeWidth="1.5"
              strokeDasharray="6 14"
            />
          </g>

          {/* mid hexagon — reverse spin */}
          <g
            className="origin-center animate-spin-slower"
            style={{ transformBox: "fill-box" }}
          >
            <polygon
              points="200,60 321,130 321,270 200,340 79,270 79,130"
              stroke="#00D8FF"
              strokeOpacity="0.55"
              strokeWidth="1.5"
            />
            <circle
              cx="200"
              cy="200"
              r="118"
              stroke="#1e1e1e"
              strokeWidth="1.5"
            />
          </g>

          {/* inner solid ring + core */}
          <g
            className="origin-center animate-spin-slow"
            style={{ transformBox: "fill-box" }}
          >
            <circle
              cx="200"
              cy="200"
              r="78"
              stroke="#00D8FF"
              strokeOpacity="0.7"
              strokeWidth="1.5"
            />
            <circle cx="278" cy="200" r="5" fill="#00D8FF" />
            <circle cx="200" cy="82" r="3.5" fill="#00D8FF" fillOpacity="0.8" />
          </g>

          <circle cx="200" cy="200" r="26" fill="#00D8FF" fillOpacity="0.12" />
          <circle
            cx="200"
            cy="200"
            r="26"
            stroke="#00D8FF"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  );
}
