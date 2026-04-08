"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "O kanceláři", href: "#o-kancelari" },
  { label: "Služby", href: "#sluzby" },
  { label: "Ceny", href: "#ceny" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function NavMobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-[#0a1f44]"
        aria-label={open ? "Zavřít menu" : "Otevřít menu"}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 right-0 bg-white border-b border-[#e5e7eb] shadow-sm"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-[#1a1a1a] hover:text-[#0a1f44] transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#0a1f44] text-white text-sm font-medium rounded-[5px] hover:bg-[#061530] transition-colors mt-1"
              >
                Sjednat schůzku
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
