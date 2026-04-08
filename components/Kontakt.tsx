import ClipReveal from "@/components/animations/ClipReveal";
import KontaktForm from "@/components/KontaktForm";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Kontakt() {
  return (
    <section id="kontakt" className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <ClipReveal delay={0.1}>
            <h2 className="font-serif text-2xl lg:text-3xl font-bold tracking-widest uppercase text-[#0a1f44] mb-4">
              Kontakt
            </h2>
          </ClipReveal>
          <ClipReveal delay={0.4}>
            <p className="text-[#6b7280] leading-relaxed">
              Máte právní otázku nebo chcete sjednat konzultaci? Napište nám přes formulář
              nebo nás kontaktujte přímo — telefonicky, e-mailem, nebo nás navštivte osobně.
            </p>
          </ClipReveal>
        </div>

        {/* Main grid: left (info + map) / right (form stretches full height) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column: contact cards + map */}
          <div className="flex flex-col gap-4">
            <ClipReveal delay={0.2}>
              <a
                href="mailto:email@akbalaban.cz"
                className="bg-white border border-[#e5e7eb] rounded-[5px] p-6 shadow-sm flex items-start gap-4 hover:border-[#0a1f44] hover:shadow-md transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-[5px] bg-[#f5f5f5] group-hover:bg-[#0a1f44] transition-colors duration-300 flex-shrink-0">
                  <Mail
                    size={18}
                    className="text-[#0a1f44] group-hover:text-white transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase text-[#6b7280] mb-1">
                    E-mail
                  </p>
                  <p className="font-medium text-[#1a1a1a] group-hover:text-[#0a1f44] transition-colors">
                    email@akbalaban.cz
                  </p>
                </div>
              </a>
            </ClipReveal>

            <ClipReveal delay={0.28}>
              <a
                href="tel:+420728479010"
                className="bg-white border border-[#e5e7eb] rounded-[5px] p-6 shadow-sm flex items-start gap-4 hover:border-[#0a1f44] hover:shadow-md transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-[5px] bg-[#f5f5f5] group-hover:bg-[#0a1f44] transition-colors duration-300 flex-shrink-0">
                  <Phone
                    size={18}
                    className="text-[#0a1f44] group-hover:text-white transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase text-[#6b7280] mb-1">
                    Telefon
                  </p>
                  <p className="font-medium text-[#1a1a1a] group-hover:text-[#0a1f44] transition-colors">
                    +420 728 479 010
                  </p>
                </div>
              </a>
            </ClipReveal>

            <ClipReveal delay={0.36}>
              <div className="bg-white border border-[#e5e7eb] rounded-[5px] p-6 shadow-sm flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-[5px] bg-[#f5f5f5] flex-shrink-0">
                  <MapPin size={18} className="text-[#0a1f44]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase text-[#6b7280] mb-1">
                    Adresa
                  </p>
                  <p className="font-medium text-[#1a1a1a]">Táborská 411/34</p>
                  <p className="text-[#6b7280]">Praha 4, 140 00</p>
                </div>
              </div>
            </ClipReveal>

            {/* Map — fills remaining space in left column */}
            <ClipReveal delay={0.44} className="flex-1">
              <div className="w-full h-full min-h-[240px] rounded-[5px] overflow-hidden border border-[#e5e7eb] shadow-sm">
                <iframe
                  title="Mapa — Advokátní kancelář Mgr. Petr Balabán"
                  src="https://maps.google.com/maps?q=T%C3%A1borsk%C3%A1+411%2F34%2C+Praha+4&output=embed&z=15&hl=cs"
                  width="100%"
                  height="100%"
                  className="min-h-[240px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </ClipReveal>
          </div>

          {/* Right column: form stretches to match left column height */}
          <ClipReveal delay={0.25} className="h-full">
            <KontaktForm />
          </ClipReveal>
        </div>
      </div>
    </section>
  );
}
