import TextReveal from "@/components/animations/TextReveal";
import ClipReveal from "@/components/animations/ClipReveal";
import { GraduationCap, Briefcase, Globe, BookOpen, Scale } from "lucide-react";

const timeline = [
  {
    year: "2002",
    icon: GraduationCap,
    title: "Absolvent práv",
    description:
      "Absolvoval Právnickou fakultu Masarykovy univerzity v Brně.",
  },
  {
    year: "2003–2006",
    icon: Briefcase,
    title: "Koncipientská praxe",
    description:
      "Praxe u JUDr. Libora Balabána a JUDr. Tomáše Pohla se zaměřením na obchodní závazkové vztahy a směnečné právo.",
  },
  {
    year: "2003–2006",
    icon: Scale,
    title: "Trestní a rodinné právo",
    description:
      "Praxe v trestním a rodinném právu v advokátní kanceláři JUDr. Michaely Střížové.",
  },
  {
    year: "Studijní pobyt",
    icon: Globe,
    title: "Roční studijní pobyt v USA",
    description:
      "Roční studijní pobyt ve Spojených státech amerických zaměřený na rozšíření právních znalostí v mezinárodním kontextu.",
  },
  {
    year: "Publikační činnost",
    icon: BookOpen,
    title: "Odborné publikace",
    description:
      "Spoluautor několika odborných právních publikací.",
  },
  {
    year: "2006–nyní",
    icon: Briefcase,
    title: "Samostatný advokát",
    description:
      "Od roku 2006 vykonává advokacii jako samostatný advokát. Komunikace v češtině a angličtině.",
  },
];

export default function Profil() {
  return (
    <section id="profil" className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — intro */}
          <div className="lg:sticky lg:top-24">
            <ClipReveal delay={0.1}>
              <span className="inline-block mb-4 text-xs font-medium tracking-widest uppercase text-[#6b7280]">
                Osobní profil
              </span>
            </ClipReveal>
            <TextReveal
              tag="h2"
              text="Mgr. Petr Balabán"
              className="font-serif text-3xl md:text-4xl font-semibold text-[#0a1f44] mb-2"
              delay={0.15}
            />
            <ClipReveal delay={0.35}>
              <p className="text-sm font-medium text-[#6b7280] tracking-wide uppercase mb-6">
                Advokát · Čeština & Angličtina
              </p>
            </ClipReveal>
            <ClipReveal delay={0.45}>
              <p className="text-[#6b7280] leading-relaxed mb-4">
                Mgr. Petr Balabán je samostatným advokátem od roku 2006. Za dobu
                své praxe získal rozsáhlé zkušenosti v oblasti závazkového práva,
                práva obchodních společností, směnečného práva, ale i rodinného
                a trestního práva.
              </p>
            </ClipReveal>
            <ClipReveal delay={0.55}>
              <p className="text-[#6b7280] leading-relaxed">
                Odborné zázemí doplňuje roční studijní pobyt v USA a spoluautorství
                odborných právních publikací.
              </p>
            </ClipReveal>
          </div>

          {/* Right — timeline */}
          <div className="relative">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-[#e5e7eb]" aria-hidden />
            <div className="flex flex-col gap-8">
              {timeline.map((item, i) => {
                const Icon = item.icon;
                return (
                  <ClipReveal key={i} delay={0.2 + i * 0.1}>
                    <div className="relative flex gap-5 pl-14">
                      {/* Icon dot */}
                      <div className="absolute left-0 flex items-center justify-center w-10 h-10 rounded-[5px] bg-white border border-[#e5e7eb] shadow-sm">
                        <Icon size={16} className="text-[#0a1f44]" strokeWidth={1.5} />
                      </div>
                      {/* Content */}
                      <div>
                        <span className="inline-block text-xs font-medium text-[#6b7280] tracking-wide mb-1">
                          {item.year}
                        </span>
                        <h3 className="font-serif text-base font-semibold text-[#0a1f44] mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#6b7280] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </ClipReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
