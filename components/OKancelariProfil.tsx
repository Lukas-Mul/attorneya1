import ClipReveal from "@/components/animations/ClipReveal";
import TextReveal from "@/components/animations/TextReveal";
import { GraduationCap, Briefcase, Globe, BookOpen, UserRound, Scale } from "lucide-react";

/* ─── Lawyer photo placeholder ──────────────────────────────── */

function LawyerPhoto() {
  return (
    <div className="relative w-full aspect-[5/6] rounded-[5px] overflow-hidden bg-gradient-to-b from-[#0d2550] to-[#0a1f44]">
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="profile-grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#profile-grid)" />
      </svg>
      <div className="absolute bottom-0 left-0 right-0 h-[70%] flex items-end justify-center">
        <UserRound size={170} className="text-white opacity-[0.08] mb-[-20px]" strokeWidth={0.6} />
      </div>
      <div className="absolute bottom-0 left-0 right-0 px-6 py-5 bg-gradient-to-t from-[#061530]/80 to-transparent">
        <p className="font-serif text-white text-sm font-medium">Mgr. Petr Balabán</p>
        <p className="text-white/50 text-xs tracking-wide mt-0.5">Advokát · Praha</p>
      </div>
      <div className="absolute top-5 right-5 text-[10px] tracking-widest uppercase text-white/20">
        Foto advokáta
      </div>
    </div>
  );
}

/* ─── Timeline data ──────────────────────────────────────────── */

const milestones = [
  { icon: GraduationCap, year: "2002", label: "Absolvent PrF MU v Brně" },
  { icon: Briefcase, year: "2003–06", label: "Praxe — závazkové a směnečné právo" },
  { icon: Scale, year: "2003–06", label: "Praxe — trestní a rodinné právo" },
  { icon: Globe, year: "Stáž", label: "Roční studijní pobyt v USA" },
  { icon: BookOpen, year: "Publikace", label: "Spoluautor odborných publikací" },
  { icon: Briefcase, year: "2006–", label: "Samostatný advokát" },
];

/* ─── Component ─────────────────────────────────────────────── */

export default function OKancelariProfil() {
  return (
    <section id="o-kancelari" className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Label */}
        <ClipReveal delay={0.1}>
          <h2 className="font-serif text-2xl lg:text-3xl font-bold tracking-widest uppercase text-[#0a1f44] mb-12">
            O mně
          </h2>
        </ClipReveal>

        {/* Top block: Photo & Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-stretch mb-10">
          {/* Photo */}
          <div className="flex flex-col">
            <ClipReveal delay={0.2} className="h-full">
              <LawyerPhoto />
            </ClipReveal>
          </div>

          {/* Timeline */}
          <div className="flex flex-col py-2">
            <ClipReveal delay={0.3}>
              <p className="text-xs font-medium tracking-widest uppercase text-[#6b7280] mb-6">
                Kariéra a vzdělání
              </p>
            </ClipReveal>
            <div className="flex flex-col flex-1 justify-between">
              {milestones.map((m, i) => {
                const Icon = m.icon;
                const isLast = i === milestones.length - 1;
                return (
                  <ClipReveal key={i} delay={0.35 + i * 0.08} className="flex-1">
                    <div className="flex items-stretch gap-5 h-full">
                      {/* Icon column with connecting line */}
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-10 h-10 rounded-[5px] bg-white border border-[#e5e7eb] flex items-center justify-center shadow-sm flex-shrink-0">
                          <Icon size={16} className="text-[#0a1f44]" strokeWidth={1.5} />
                        </div>
                        {!isLast && <div className="w-px flex-1 bg-[#d1d5db] my-1" />}
                      </div>
                      {/* Text */}
                      <div className="pb-2 pt-1">
                        <span className="text-xs font-medium text-[#9ca3af] block mb-0.5">
                          {m.year}
                        </span>
                        <span className="text-[15px] font-medium text-[#1a1a1a] leading-snug">{m.label}</span>
                      </div>
                    </div>
                  </ClipReveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom block: Full width Bio */}
        <div className="w-full">
          <TextReveal
            tag="h2"
            text="Mgr. Petr Balabán"
            className="font-serif text-3xl md:text-5xl font-semibold text-[#0a1f44] mb-3"
            delay={0.25}
          />


          <ClipReveal delay={0.45}>
            <p className="text-lg text-[#1a1a1a] leading-relaxed mb-6 lg:max-w-5xl">
              Mgr. Petr Balabán zahájil advokátní praxi v roce 2006, po absolvování
              Právnické fakulty Masarykovy univerzity v Brně a tříleté přípravné praxi
              v pražských kancelářích se zaměřením na obchodní závazkové vztahy,
              směnečné právo a trestní agendu.
            </p>
          </ClipReveal>
          <ClipReveal delay={0.55}>
            <p className="text-base text-[#6b7280] leading-relaxed mb-6 lg:max-w-5xl">
              Jako samostatný advokát zastupuje fyzické i právnické osoby v deseti
              oblastech práva — od závazkových smluv a nemovitostních transakcí přes
              právo obchodních společností až po rodinné a trestní věci. Každý případ
              přistupuje individuálně, s důrazem na věcnost, transparentnost
              a výsledek.
            </p>
          </ClipReveal>
          <ClipReveal delay={0.65}>
            <p className="text-base text-[#6b7280] leading-relaxed mb-10 lg:max-w-5xl">
              Mezinárodní přesah přináší roční studijní pobyt v USA
              a spoluautorství odborných právních publikací. Poradenství poskytuje
              v češtině i angličtině, kancelář je tak přístupná i zahraničním klientům.
            </p>
          </ClipReveal>

          {/* Stats bar */}
          <ClipReveal delay={0.75}>
            <div className="flex flex-wrap sm:flex-nowrap gap-0 border border-[#e5e7eb] rounded-[5px] overflow-hidden bg-white divide-y sm:divide-y-0 sm:divide-x divide-[#e5e7eb]">
              {[
                { v: "Přes 20 let", l: "zkušeností" },
                { v: "celá ČR", l: "Pokrytí" },
                { v: "Čeština / Angličtina", l: "Jazyky" },
              ].map((s) => (
                <div key={s.l} className="flex-1 px-6 py-6 text-center min-w-[120px]">
                  <p className="font-serif text-2xl font-semibold text-[#0a1f44]">{s.v}</p>
                  <p className="text-xs text-[#6b7280] mt-1.5 uppercase tracking-wide">{s.l}</p>
                </div>
              ))}
            </div>
          </ClipReveal>
        </div>
      </div>
    </section>
  );
}
