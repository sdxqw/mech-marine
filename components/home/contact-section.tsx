import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 md:py-32 relative overflow-hidden flex items-center justify-center min-h-[50vh] md:min-h-[60vh]"
    >
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
      <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[150%] bg-white/10 blur-3xl rounded-full rotate-45 transform" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-5xl text-center space-y-10">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
          Pronto a Imbarcarti <br /> verso il Futuro?
        </h2>
        <p className="text-white/80 md:text-xl max-w-2xl mx-auto font-medium">
          Siamo a disposizione per consulenze strutturate, preventivi
          dettagliati e interventi di emergenza. La nostra squadra specializzata
          è pronta a garantirti la massima efficienza in mare in tempistiche
          record.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <Button
            asChild
            className="h-14 px-10 text-base font-semibold bg-white text-primary hover:bg-white/90 shadow-xl shadow-black/10 w-full sm:w-auto rounded-full transition-all hover:-translate-y-1"
          >
            <Link href="/contattaci">Richiedi Preventivo</Link>
          </Button>
          <Button
            asChild
            className="h-14 px-10 text-base font-semibold bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary w-full sm:w-auto rounded-full transition-all hover:-translate-y-1"
          >
            <Link href="/contattaci">Contattaci Ora</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
