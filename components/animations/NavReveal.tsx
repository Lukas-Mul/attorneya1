"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface NavRevealProps {
  children: React.ReactNode;
  delay?: number;
}

export default function NavReveal({ children, delay = 0 }: NavRevealProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 14 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
