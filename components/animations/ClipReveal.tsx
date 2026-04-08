"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ClipRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** When true, animation fires immediately on mount (use for above-the-fold content). */
  autoPlay?: boolean;
}

export default function ClipReveal({
  children,
  delay = 0.5,
  className = "",
  autoPlay = false,
}: ClipRevealProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={className}>{children}</div>;
  }

  const initial = { clipPath: "inset(0 100% 0 0)", opacity: 0, y: 10 };
  const target = { clipPath: "inset(0 0% 0 0)", opacity: 1, y: 0 };
  const transition = { duration: 1.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay };

  if (autoPlay) {
    return (
      <motion.div
        className={className}
        initial={initial}
        animate={target}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={target}
      viewport={{ once: true, margin: "-5%" }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
