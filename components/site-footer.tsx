import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 py-12 md:py-20 relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-8 xl:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5 text-center md:text-left">
            <Link href="/" className="inline-block group">
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight flex items-center gap-2">
                MECH MARINE
                <span className="w-2 h-2 rounded-full bg-primary inline-block animate-pulse" />
              </h3>
              <p className="text-xs font-semibold text-primary/80 uppercase tracking-[0.2em] mt-2 group-hover:text-primary transition-colors">
                Eccellenza Navale
              </p>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Lavori di meccanica generale ed eccellenza navale dal 2021.
              Specializzati in manutenzione strutturale e propulsiva di navi e
              traghetti ad alta velocità nel cuore della flotta del
              Mediterraneo.
            </p>
            <div className="flex gap-4 pt-2 justify-center md:justify-start">
              <a
                href="mailto:info@mechmarine.it"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all text-white hover:text-primary"
              >
                <Mail size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all text-white hover:text-primary"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            <h4 className="font-bold text-white tracking-wide text-center md:text-left">
              Esplora
            </h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-3 text-sm">
              <li>
                <Link
                  href="#about"
                  className="text-zinc-400 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={14}
                    className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary"
                  />
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-zinc-400 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={14}
                    className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary"
                  />
                  I Nostri Servizi
                </Link>
              </li>
              <li>
                <Link
                  href="#clients"
                  className="text-zinc-400 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={14}
                    className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary"
                  />
                  Clienti e Partner
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-zinc-400 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={14}
                    className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary"
                  />
                  Contattaci
                </Link>
              </li>
            </ul>
          </div>

          {/* Sedi Column */}
          <div className="lg:col-span-3 space-y-4 md:space-y-6">
            <h4 className="font-bold text-white tracking-wide text-center md:text-left">
              Le Nostre Sedi
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-medium mb-1">
                    Sede Legale
                  </strong>
                  <span className="text-zinc-400">
                    Via Maddalena 11
                    <br />
                    98123 Messina (ME)
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-medium mb-1">
                    Sede Operativa
                  </strong>
                  <span className="text-zinc-400">
                    Via Matteo Nardi 15
                    <br />
                    98057 Milazzo (ME)
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal Info Column */}
          <div className="lg:col-span-3 space-y-4 md:space-y-6">
            <h4 className="font-bold text-white tracking-wide text-center md:text-left">
              Dati Societari
            </h4>
            <div className="space-y-4 text-sm bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-zinc-400">P. IVA / CF</span>
                <strong className="text-white">03673520833</strong>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-zinc-400">Codice ATECO</span>
                <span className="text-right">
                  <strong className="text-white block">25.62.00</strong>
                  <span className="text-[10px] text-zinc-500 uppercase">
                    Lavori di meccanica
                  </span>
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Iscrizione CCIAA</span>
                <span className="text-right">
                  <strong className="text-white block">ME-253246</strong>
                  <span className="text-[10px] text-zinc-500 uppercase">
                    Sezione ordinaria
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/10 flex flex-col items-center gap-4 text-xs text-zinc-500 text-center">
          <p>
            © {new Date().getFullYear()} MECH MARINE S.R.L. Tutti i diritti
            riservati.
          </p>
          <p>
            Legale Rappresentante:{" "}
            <strong className="text-zinc-300 font-medium">Baeli Antonio</strong>
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
