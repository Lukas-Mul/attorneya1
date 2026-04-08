import NavReveal from "@/components/animations/NavReveal";
import NavMobileMenu from "@/components/NavMobileMenu";

const navLinks = [
  { label: "O kanceláři", href: "#o-kancelari" },
  { label: "Služby", href: "#sluzby" },
  { label: "Ceny", href: "#ceny" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between relative">
        {/* Logo */}
        <NavReveal delay={0.05}>
          <a
            href="#"
            className="font-serif text-[#0a1f44] text-base font-semibold tracking-tight leading-tight"
          >
            Mgr. Petr Balabán{" "}
            <span className="font-sans font-normal text-[#6b7280] text-sm">
              | Advokát
            </span>
          </a>
        </NavReveal>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <NavReveal key={link.href} delay={0.1 + i * 0.07}>
              <a
                href={link.href}
                className="relative group text-sm font-medium text-[#1a1a1a] hover:text-[#0a1f44] transition-colors"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full bg-[#0a1f44] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </a>
            </NavReveal>
          ))}

          <NavReveal delay={0.1 + navLinks.length * 0.07}>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#0a1f44] text-white text-sm font-medium rounded-[5px] hover:bg-[#061530] transition-colors"
            >
              Sjednat schůzku
            </a>
          </NavReveal>

          <div className="hidden md:flex items-center gap-6 ml-6">
            <button className="text-xs font-bold text-[#0a1f44] hover:text-[#6b7280] transition-colors uppercase tracking-widest">
              CS
            </button>
            <span className="w-px h-3 bg-[#e5e7eb]" />
            <button className="text-xs font-medium text-[#6b7280] hover:text-[#0a1f44] transition-colors uppercase tracking-widest">
              EN
            </button>
          </div>
        </nav>

        {/* Mobile nav */}
        <NavMobileMenu />
      </div>
    </header>
  );
}
