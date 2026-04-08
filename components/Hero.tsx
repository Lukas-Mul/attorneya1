import TextReveal from "@/components/animations/TextReveal";
import ClipReveal from "@/components/animations/ClipReveal";
import MorphButton from "@/components/animations/MorphButton";
import ScrollIndicator from "@/components/animations/ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden bg-white px-6 pt-12 pb-24">
      {/* Background wave decoration */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        <svg
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-full opacity-[0.06]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 400 Q360 280 720 400 Q1080 520 1440 400 L1440 600 L0 600 Z"
            fill="#0a1f44"
          />
          <path
            d="M0 450 Q360 330 720 450 Q1080 570 1440 450 L1440 600 L0 600 Z"
            fill="#0a1f44"
          />
        </svg>
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0 w-1/2 opacity-[0.04]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100 Q360 0 720 100 Q1080 200 1440 100"
            stroke="#0a1f44"
            strokeWidth="2"
          />
          <path
            d="M0 140 Q360 40 720 140 Q1080 240 1440 140"
            stroke="#0a1f44"
            strokeWidth="1.5"
          />
          <path
            d="M0 180 Q360 80 720 180 Q1080 280 1440 180"
            stroke="#0a1f44"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <ClipReveal autoPlay delay={0.2} className="inline-block mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#f5f5f5] border border-[#e5e7eb] rounded-[5px] text-xs font-medium text-[#6b7280] tracking-widest uppercase">
            Advokátní kancelář · Od roku 2006
          </span>
        </ClipReveal>

        {/* Headline */}
        <TextReveal
          autoPlay
          tag="h1"
          text="Právní služby, kterým můžete důvěřovat"
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-[#0a1f44] leading-tight mb-6"
          delay={0.3}
        />

        {/* Subtitle */}
        <ClipReveal autoPlay delay={0.7} className="mb-10">
          <p className="text-lg text-[#6b7280] max-w-2xl mx-auto leading-relaxed">
            Poskytujeme komplexní právní poradenství fyzickým i právnickým osobám
            na celém území České republiky. Každý případ přistupujeme individuálně,
            s&nbsp;důrazem na odbornost a diskrétnost.
          </p>
        </ClipReveal>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <MorphButton href="#kontakt" variant="primary" delay={0.9}>
            Sjednat schůzku
          </MorphButton>
          <MorphButton href="#sluzby" variant="outline" delay={1.0}>
            Naše služby
          </MorphButton>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ScrollIndicator />
      </div>
    </section>
  );
}
