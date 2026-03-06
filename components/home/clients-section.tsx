"use client";

import { motion } from "framer-motion";
import { Anchor, Ship } from "lucide-react";

export function ClientsSection() {
  return (
    <section
      id="clients"
      className="py-16 md:py-32 relative border-t border-border/40 bg-zinc-50 dark:bg-zinc-950 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-100 bg-primary/5 blur-[120px] rounded-full point-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Scelti dai Leader
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground text-xl">
            Siamo orgogliosi partner di alcune delle più grandi realtà del
            trasporto marittimo e lacustre in Italia, garantendo standard
            operativi d'eccellenza.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-10 md:p-14 rounded-[2.5rem] bg-background border border-border hover:border-primary/40 shadow-xl shadow-black/5 flex flex-col items-start text-left space-y-8 relative group transition-all duration-500 hover:-translate-y-2"
          >
            <div className="w-20 h-20 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-500">
              <Ship className="text-primary" size={40} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-3xl font-black text-foreground tracking-tight mb-4">
                LIBERTY LINES
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                La più grande compagnia al mondo per il trasporto veloce
                passeggeri. Forniamo assistenza continua e altamente
                specializzata per la loro vasta flotta di aliscafi, catamarani e
                mezzi ibridi di ultima generazione che collegano la Sicilia alle
                isole minori.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="p-10 md:p-14 rounded-[2.5rem] bg-background border border-border hover:border-primary/40 shadow-xl shadow-black/5 flex flex-col items-start text-left space-y-8 relative group transition-all duration-500 hover:-translate-y-2"
          >
            <div className="w-20 h-20 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-500">
              <Anchor className="text-primary" size={40} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-3xl font-black text-foreground tracking-tight mb-4">
                Navigazione Laghi
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Gestione Governativa del trasporto pubblico lacustre.
                Supportiamo attivamente e con precisione millimetrica la
                manutenzione della loro immensa flotta di oltre 100 unità navali
                operative sui principali e più prestigiosi laghi italiani.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
