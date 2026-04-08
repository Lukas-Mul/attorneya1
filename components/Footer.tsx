export default function Footer() {
  return (
    <footer className="bg-[#0a1f44] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="font-serif text-lg font-semibold mb-3">
              Mgr. Petr Balabán
            </p>
            <p className="text-sm text-blue-200 leading-relaxed">
              Advokátní kancelář poskytující právní služby fyzickým i právnickým
              osobám na celém území České republiky od roku 2006.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-blue-300 mb-4">
              Navigace
            </p>
            <ul className="flex flex-col gap-2 text-sm text-blue-100">
              <li>
                <a href="#o-kancelari" className="hover:text-white transition-colors">
                  O kanceláři
                </a>
              </li>
              <li>
                <a href="#sluzby" className="hover:text-white transition-colors">
                  Služby
                </a>
              </li>
              <li>
                <a href="#profil" className="hover:text-white transition-colors">
                  Profil
                </a>
              </li>
              <li>
                <a href="#ceny" className="hover:text-white transition-colors">
                  Ceny
                </a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-blue-300 mb-4">
              Kontakt
            </p>
            <ul className="flex flex-col gap-2 text-sm text-blue-100">
              <li>Táborská 411/34, Praha 4</li>
              <li>
                <a href="tel:+420728479010" className="hover:text-white transition-colors">
                  +420 728 479 010
                </a>
              </li>
              <li>
                <a href="mailto:email@akbalaban.cz" className="hover:text-white transition-colors">
                  email@akbalaban.cz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-blue-300">
            © 2024 Advokátní kancelář Mgr. Petr Balabán. Všechna práva vyhrazena.
          </p>
          <p className="text-xs text-blue-400">
            Táborská 411/34, Praha 4 · IČ: dle advokátního tarifu
          </p>
        </div>
      </div>
    </footer>
  );
}
