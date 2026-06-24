"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contact } from "@/lib/data";

export default function MobileContactFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.85 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="fixed bottom-6 right-5 z-50 md:hidden"
        >
          <motion.div whileTap={{ scale: 0.92 }}>
            <Link
              href={`mailto:${contact.email}`}
              aria-label="Send an email"
              className="flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-bg shadow-glow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact me
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
