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
      {/* Mobile: large centered shape behind text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden"
        style={{ width: 380, height: 380 }}
      >
        <HeroShape />
      </motion.div>

      {/* Mobile: floating particles */}
      {[
        { x: "10%", y: "15%", size: 4, delay: 0, duration: 3.5 },
        { x: "85%", y: "20%", size: 3, delay: 0.5, duration: 4 },
        { x: "70%", y: "45%", size: 6, delay: 0.2, duration: 5 },
        { x: "15%", y: "60%", size: 3, delay: 0.8, duration: 3.8 },
        { x: "90%", y: "65%", size: 4, delay: 0.3, duration: 4.5 },
        { x: "50%", y: "10%", size: 5, delay: 0.6, duration: 4.2 },
        { x: "30%", y: "80%", size: 3, delay: 0.1, duration: 3.2 },
        { x: "75%", y: "80%", size: 4, delay: 0.9, duration: 5.5 },
        { x: "5%",  y: "35%", size: 3, delay: 0.4, duration: 4.8 },
        { x: "60%", y: "25%", size: 5, delay: 0.7, duration: 3.6 },
        { x: "40%", y: "70%", size: 3, delay: 0.2, duration: 5.2 },
        { x: "20%", y: "90%", size: 4, delay: 0.5, duration: 4.1 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full bg-accent"
          style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.7, 0.4, 0.7], scale: 1, y: [0, -12, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Mobile: cyan glow behind name */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.4 }}
        className="pointer-events-none absolute left-0 top-[38%] -translate-y-1/2"
        style={{ width: "100%", height: 220 }}
      >
        <div className="h-full w-full bg-accent/10 blur-[80px]" />
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
            {hero.nameWords.map((word, wi) => (
              <span key={word} className="mr-4 inline-block">
                {word.split("").map((char, ci) => (
                  <motion.span
                    key={ci}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.3 + wi * (word.length * 0.06) + ci * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
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
            <a
              href="/Yll_Veliu_CV.pdf"
              download
              className="hidden md:inline font-mono text-sm text-muted transition-colors duration-200 hover:text-accent"
            >
              Resume ↓
            </a>
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

    </section>
  );
}
