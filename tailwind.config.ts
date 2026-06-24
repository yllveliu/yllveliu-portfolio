import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        surface: "#111111",
        line: "#1e1e1e",
        fg: "#f0f0f0",
        muted: "#888888",
        accent: "#00D8FF",
      },
      fontFamily: {
        heading: ["var(--font-syne)", "ui-sans-serif", "sans-serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(0, 216, 255, 0.35)",
        "glow-sm": "0 8px 30px rgba(0, 216, 255, 0.18)",
        card: "0 12px 40px -12px rgba(0, 216, 255, 0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
      },
      animation: {
        "spin-slow": "spin 24s linear infinite",
        "spin-slower": "spin 40s linear infinite reverse",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
