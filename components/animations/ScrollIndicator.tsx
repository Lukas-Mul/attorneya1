"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex flex-col items-center gap-1 text-[#0a1f44] opacity-60">
        <ChevronDown size={24} strokeWidth={1.5} />
      </div>
    );
  }

  return (
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{
        duration: 1.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="flex flex-col items-center gap-1 text-[#0a1f44] opacity-60"
    >
      <ChevronDown size={24} strokeWidth={1.5} />
    </motion.div>
  );
}
