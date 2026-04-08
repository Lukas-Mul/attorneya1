"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface MorphButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "outline";
  delay?: number;
  className?: string;
}

export default function MorphButton({
  children,
  href,
  variant = "primary",
  delay = 0,
  className = "",
}: MorphButtonProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (variant === "outline") {
    if (!mounted) {
      return (
        <a
          href={href}
          className={`relative group inline-flex items-center justify-center px-8 py-4 rounded-[5px] border-2 border-[#0a1f44] overflow-hidden font-medium text-sm tracking-wide text-[#0a1f44] ${className}`}
        >
          {children}
        </a>
      );
    }

    return (
      <motion.a
        href={href}
        className={`relative group inline-flex items-center justify-center px-8 py-4 rounded-[5px] border-2 border-[#0a1f44] overflow-hidden font-medium text-sm tracking-wide ${className}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      >
        <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 ease-out bg-[#0a1f44] rounded-[5px]" />
        <span className="relative z-10 text-[#0a1f44] group-hover:text-white transition-colors duration-300">
          {children}
        </span>
      </motion.a>
    );
  }

  // Primary variant
  if (!mounted) {
    return (
      <a
        href={href}
        className={`relative inline-flex items-center justify-center px-8 py-4 rounded-[5px] overflow-hidden font-medium text-sm tracking-wide bg-[#0a1f44] text-white ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={`relative group inline-flex items-center justify-center px-8 py-4 rounded-[5px] overflow-hidden font-medium text-sm tracking-wide ${className}`}
    >
      {/* Morphing background */}
      <motion.span
        aria-hidden
        className="absolute inset-0 bg-[#0a1f44]"
        initial={{ scale: 0, borderRadius: "50%", opacity: 0 }}
        animate={{ scale: 1, borderRadius: "5px", opacity: 1 }}
        transition={{
          duration: 1.0,
          ease: [0.16, 1, 0.3, 1],
          delay,
        }}
      />
      {/* Hover sweep */}
      <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 ease-out bg-[#061530] rounded-[5px]" />
      {/* Text */}
      <motion.span
        className="relative z-10 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.6, duration: 0.4 }}
      >
        {children}
      </motion.span>
    </a>
  );
}
