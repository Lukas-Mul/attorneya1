import { FileText, Home, Users, Scale, Building2, Landmark, KeyRound, ShieldCheck, Briefcase, Lightbulb } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ClipReveal from "@/components/animations/ClipReveal";

/* ─── Photo placeholder ─────────────────────────────────────── */

function PhotoPlaceholder({ icon: Icon, flip = false }: { icon: LucideIcon; flip?: boolean }) {
  return (
    <div
      className={`relative w-full h-full min-h-[320px] overflow-hidden ${
        flip ? "bg-gradient-to-tl" : "bg-gradient-to-br"
      } from-[#0a1f44] to-[#152e60]`}
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={`dots-${flip}`} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#dots-${flip})`} />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-px bg-white opacity-10" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon size={96} className="text-white opacity-[0.12]" strokeWidth={0.8} />
      </div>
      <div className="absolute bottom-5 right-5 text-[10px] tracking-widest uppercase text-white/20 font-medium">
        Ilustrační foto
      </div>
    </div>
  );
}

/* ─── Data ───────────────────────────────────────────────────── */

const featured = [
  {
    num: "01",
    name: "Závazkové právo",
    perex:
      "Od první skici smlouvy až po vymáhání pohledávek — každý závazek si zaslouží přesnou právní formulaci. Zpracováváme a revidujeme smlouvy všech typů, zastupujeme klienty při sporech z jejich neplnění.",
    icon: FileText,
    photoRight: true,
  },
  {
    num: "02",
    name: "Právní vztahy k nemovitostem",
    perex:
      "Koupě, prodej, zástavy, věcná břemena nebo správa nemovitostního portfolia — v každé transakci dbáme na bezpečnost převodu i dlouhodobou ochranu vašich zájmů.",
    icon: Home,
    photoRight: false,
  },
  {
    num: "03",
    name: "Rodinné právo",
    perex:
      "Rozvody, majetkové vypořádání a úprava poměrů k dětem patří k nejcitlivějším právním agendám. Přistupujeme k nim s diskrétností a důrazem na nalezení schůdného řešení.",
    icon: Users,
    photoRight: true,
  },
  {
    num: "04",
    name: "Trestní právo",
    perex:
      "Obhajoba v trestním řízení vyžaduje rychlost, zkušenost a pevné nervy. Zastupujeme klienty od přípravného řízení přes hlavní líčení až po podání opravných prostředků.",
    icon: Scale,
    photoRight: false,
  },
];

const listed = [
  {
    num: "05",
    name: "Právo obchodních společností",
    perex: "Zakládání, statutární změny, přeměny i rušení obchodních společností.",
    icon: Building2,
  },
  {
    num: "06",
    name: "Směnečné a šekové právo",
    perex: "Poradenství a zastupování ve sporech ze směnek a šeků.",
    icon: Landmark,
  },
  {
    num: "07",
    name: "Bytové právo",
    perex: "Nájemní a podnájemní smlouvy pro byty i nebytové prostory.",
    icon: KeyRound,
  },
  {
    num: "08",
    name: "Ochrana spotřebitele",
    perex: "Vady výrobků a služeb, náhrady škod, reklamační řízení.",
    icon: ShieldCheck,
  },
  {
    num: "09",
    name: "Pracovní právo",
    perex: "Poradenství zaměstnancům i zaměstnavatelům, pracovněprávní spory.",
    icon: Briefcase,
  },
  {
    num: "10",
    name: "Právo duševního vlastnictví",
    perex: "Autorská práva, licenční smlouvy, ochrana know-how.",
    icon: Lightbulb,
  },
];

/* ─── Component ─────────────────────────────────────────────── */

export default function Sluzby() {
  return (
    <section id="sluzby" className="bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-8">
        <div className="max-w-3xl flex flex-col gap-4">
          <ClipReveal delay={0.1}>
            <h2 className="font-serif text-2xl lg:text-3xl font-bold tracking-widest uppercase text-[#0a1f44]">
              Služby
            </h2>
          </ClipReveal>
          <ClipReveal delay={0.35}>
            <p className="text-[#6b7280] text-lg leading-relaxed">
              Právo může být složitý labyrint. Díky své dvacetileté praxi v oboru vás jím provedu v těchto klíčových oblastech:
            </p>
          </ClipReveal>
        </div>
      </div>

      {/* Featured alternating rows — aligned to max-w-7xl */}
      <div className="border-t border-[#e5e7eb]">
        {featured.map((svc) => (
          <div key={svc.num} className="border-b border-[#e5e7eb] bg-white">
            <div
              className={`max-w-7xl mx-auto px-6 lg:px-10 flex flex-col ${
                svc.photoRight ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 lg:gap-20`}
            >
              {/* Text side */}
              <div className="flex-1 flex flex-col justify-center py-16 lg:py-24">
                <span className="font-serif text-[70px] lg:text-[80px] leading-none font-semibold text-[#f0f0f0] select-none mb-2">
                  {svc.num}
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-[#0a1f44] mb-5 -mt-6">
                  {svc.name}
                </h3>
                <p className="text-[#6b7280] leading-relaxed max-w-lg text-base">
                  {svc.perex}
                </p>
                <a
                  href="#kontakt"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#0a1f44] group"
                >
                  Konzultovat
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              {/* Photo side */}
              <div className="w-full lg:w-[45%] flex-shrink-0 flex items-center">
                <div className="w-full rounded-[5px] overflow-hidden shadow-sm border border-[#e5e7eb]">
                  <PhotoPlaceholder icon={svc.icon} flip={!svc.photoRight} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Listed services */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <ClipReveal delay={0.1}>
          <h2 className="text-sm font-bold tracking-widest uppercase text-[#0a1f44] mb-10">
            Další oblasti
          </h2>
        </ClipReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {listed.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <ClipReveal key={svc.num} delay={0.1 + i * 0.06}>
                <div className="group py-8 border-t border-[#e5e7eb]">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-[5px] bg-[#f5f5f5] flex items-center justify-center group-hover:bg-[#0a1f44] transition-colors duration-300">
                      <Icon
                        size={15}
                        className="text-[#0a1f44] group-hover:text-white transition-colors duration-300"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-xs font-medium text-[#d1d5db] font-mono">
                          {svc.num}
                        </span>
                        <h3 className="font-serif text-base font-semibold text-[#0a1f44] leading-snug">
                          {svc.name}
                        </h3>
                      </div>
                      <p className="text-sm text-[#6b7280] leading-relaxed">
                        {svc.perex}
                      </p>
                    </div>
                  </div>
                </div>
              </ClipReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
