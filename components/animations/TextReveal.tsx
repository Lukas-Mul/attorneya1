"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TextRevealProps {
  text: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  /** When true, animation fires immediately on mount (use for above-the-fold content).
   *  When false (default), fires when element scrolls into view. */
  autoPlay?: boolean;
}

export default function TextReveal({
  text,
  tag: Tag = "h2",
  className = "",
  delay = 0,
  autoPlay = false,
}: TextRevealProps) {
  const [mounted, setMounted] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Tag className={className}>{text}</Tag>;
  }

  const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

  const wordVariant = (i: number) => ({
    initial: { y: "110%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: {
      duration: 1.4,
      ease,
      delay: delay + i * 0.1,
    },
  });

  return (
    <Tag className={className}>
      {words.map((word, i) => {
        const v = wordVariant(i);
        return (
          <span
            key={i}
            style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}
          >
            {autoPlay ? (
              <motion.span
                style={{ display: "inline-block" }}
                initial={v.initial}
                animate={v.animate}
                transition={v.transition}
              >
                {word}&nbsp;
              </motion.span>
            ) : (
              <motion.span
                style={{ display: "inline-block" }}
                initial={v.initial}
                whileInView={v.animate}
                viewport={{ once: true, margin: "-5%" }}
                transition={v.transition}
              >
                {word}&nbsp;
              </motion.span>
            )}
          </span>
        );
      })}
    </Tag>
  );
}
