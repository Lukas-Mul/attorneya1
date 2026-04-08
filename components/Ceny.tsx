import ClipReveal from "@/components/animations/ClipReveal";
import { Clock, ListChecks, RefreshCw, Target } from "lucide-react";

const feeTypes = [
  {
    icon: ListChecks,
    name: "Úkonová odměna",
    description:
      "Odměna se stanovuje za každý jednotlivý právní úkon (sepis smlouvy, jednání, podání).",
  },
  {
    icon: Clock,
    name: "Hodinová odměna",
    description:
      "Odměna se odvíjí od skutečně odpracovaných hodin. Vhodná pro rozsáhlejší a průběžné zastoupení.",
  },
  {
    icon: RefreshCw,
    name: "Paušální odměna",
    description:
      "Pravidelná měsíční nebo jinak stanovená pevná částka za sjednané právní služby.",
  },
  {
    icon: Target,
    name: "Cílová odměna",
    description:
      "Odměna vázaná na výsledek věci — vhodná pro specifické případy s jasně definovaným cílem.",
  },
];

export default function Ceny() {
  return (
    <section id="ceny" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <ClipReveal delay={0.1}>
            <h2 className="font-serif text-2xl lg:text-3xl font-bold tracking-widest uppercase text-[#0a1f44] mb-4">
              Odměňování
            </h2>
          </ClipReveal>
          <ClipReveal delay={0.4}>
            <p className="text-[#6b7280] leading-relaxed">
              Odměna advokáta se řídí vyhláškou Ministerstva spravedlnosti
              č.&nbsp;177/1996&nbsp;Sb. (advokátní tarif), není-li dohodnuto jinak.
              Výši odměny lze sjednat jako smluvní a stanovuje se individuálně
              podle časové náročnosti, odborné náročnosti a hodnoty věci.
            </p>
          </ClipReveal>
        </div>

        {/* Fee types grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {feeTypes.map((fee, i) => {
            const Icon = fee.icon;
            return (
              <ClipReveal key={fee.name} delay={0.2 + i * 0.08}>
                <div className="group bg-[#f5f5f5] border border-[#e5e7eb] rounded-[5px] p-6 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-[5px] bg-white border border-[#e5e7eb] mb-4 group-hover:bg-[#0a1f44] group-hover:border-[#0a1f44] transition-colors duration-300">
                    <Icon
                      size={18}
                      className="text-[#0a1f44] group-hover:text-white transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-[#0a1f44] mb-2">
                    {fee.name}
                  </h3>
                  <p className="text-sm text-[#6b7280] leading-relaxed">
                    {fee.description}
                  </p>
                </div>
              </ClipReveal>
            );
          })}
        </div>

        {/* Bottom callout */}
        <ClipReveal delay={0.6}>
          <div className="border border-[#0a1f44] rounded-[5px] p-8 bg-[#0a1f44] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="font-serif text-xl font-semibold mb-1">
                Nezávazná konzultace
              </p>
              <p className="text-sm text-blue-200 leading-relaxed max-w-xl">
                Výši odměny probereme individuálně při první konzultaci.
                Kontaktujte nás pro sjednání schůzky.
              </p>
            </div>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center px-7 py-3 bg-white text-[#0a1f44] text-sm font-semibold rounded-[5px] hover:bg-[#f5f5f5] transition-colors whitespace-nowrap"
            >
              Kontaktovat kancelář
            </a>
          </div>
        </ClipReveal>
      </div>
    </section>
  );
}
