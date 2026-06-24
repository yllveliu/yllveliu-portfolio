"use client";

import { motion } from "framer-motion";
import { hero } from "@/lib/data";
import { Button } from "@/components/ui";
import { ArrowUpRight } from "@/components/icons";
import HeroShape from "@/components/HeroShape";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-bg pt-24 md:pt-0"
    >
      {/* Mobile background shape — absolute, right side, behind text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="pointer-events-none absolute right-[-40px] top-1/2 -translate-y-1/2 opacity-40 md:hidden"
        style={{ width: 220, height: 220 }}
      >
        <HeroShape />
      </motion.div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pl-6 md:grid-cols-[1.1fr_0.9fr] md:gap-8 md:pb-0 md:pl-[10vw] md:pr-[6vw]">
        {/* Left: text */}
        <div className="relative z-10 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 font-mono text-sm text-accent"
          >
            {hero.tag}
          </motion.p>

          <h1 className="font-heading text-[56px] font-bold leading-[0.95] tracking-tight text-fg md:text-[96px]">
            {hero.nameWords.map((word, i) => (
              <span
                key={word}
                className="mr-4 inline-block overflow-hidden align-bottom"
              >
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-6 max-w-xl text-lg text-muted md:text-xl"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </motion.div>
        </div>

        {/* Right: floating shape — desktop only (mobile uses absolute bg version above) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="hidden items-center justify-center md:flex"
        >
          <div className="h-[440px] w-[440px]">
            <HeroShape />
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
          Scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}
