import TextReveal from "@/components/animations/TextReveal";
import ClipReveal from "@/components/animations/ClipReveal";

const stats = [
  { value: "2006", label: "Rok zahájení činnosti" },
  { value: "ČR", label: "Pokrytí celé České republiky" },
  { value: "2", label: "Jazyky komunikace" },
];

export default function OKancelari() {
  return (
    <section id="o-kancelari" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <ClipReveal delay={0.1}>
              <span className="inline-block mb-4 text-xs font-medium tracking-widest uppercase text-[#6b7280]">
                O kanceláři
              </span>
            </ClipReveal>
            <TextReveal
              tag="h2"
              text="Advokátní kancelář s tradicí od roku 2006"
              className="font-serif text-3xl md:text-4xl font-semibold text-[#0a1f44] mb-6 leading-snug"
              delay={0.15}
            />
            <ClipReveal delay={0.45}>
              <p className="text-[#6b7280] leading-relaxed mb-4">
                Advokátní kancelář zahájila činnost v roce 2006. Poskytuje právní
                služby fyzickým i právnickým osobám, podnikajícím i nepodnikajícím,
                na celém území České republiky.
              </p>
            </ClipReveal>
            <ClipReveal delay={0.55}>
              <p className="text-[#6b7280] leading-relaxed mb-4">
                Každý klient získává individuální přístup a transparentní komunikaci
                v průběhu celého právního řízení. Kancelář klade důraz na odbornost,
                diskrétnost a efektivní řešení právních situací.
              </p>
            </ClipReveal>
            <ClipReveal delay={0.65}>
              <p className="text-[#6b7280] leading-relaxed">
                Komunikace probíhá v češtině i angličtině, kancelář je tak přístupná
                i zahraničním klientům.
              </p>
            </ClipReveal>
          </div>

          {/* Right — stats */}
          <div className="grid grid-cols-1 gap-5">
            {stats.map((stat, i) => (
              <ClipReveal key={stat.label} delay={0.3 + i * 0.12}>
                <div className="flex items-center gap-6 bg-[#f5f5f5] border border-[#e5e7eb] rounded-[5px] p-6">
                  <div className="text-4xl font-serif font-semibold text-[#0a1f44] min-w-[80px]">
                    {stat.value}
                  </div>
                  <div className="h-8 w-px bg-[#e5e7eb]" />
                  <div className="text-sm text-[#6b7280] font-medium leading-snug">
                    {stat.label}
                  </div>
                </div>
              </ClipReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
