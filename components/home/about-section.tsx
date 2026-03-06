"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Ship } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-32 relative">
      <div className="absolute inset-0 bg-secondary/30 skew-y-3 origin-top-left -z-10" />
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Affidabilità e Competenza
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dal 2021, MECH MARINE S.R.L. è sinonimo di eccellenza nel settore
              della meccanica navale. Con due sedi strategiche a Messina e
              Milazzo, operiamo nel cuore del Mediterraneo per garantire la
              massima operatività alla tua flotta.
            </p>
            <div className="flex gap-4 items-start pt-4 border-t border-border/50">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary shrink-0">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Qualità Certificata
                </h3>
                <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                  Standard operativi di massimo livello per assicurare la totale
                  sicurezza in mare in ogni condizione.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative"
          >
            <div className="aspect-4/3 rounded-3xl overflow-hidden bg-background border border-border/50 shadow-2xl flex items-center justify-center relative z-10">
              <div className="absolute inset-0 bg-linear-to-tr from-primary/5 via-transparent to-secondary/20 block pointer-events-none" />
              <Ship className="text-primary/10" size={180} strokeWidth={1} />
            </div>
            <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] blur-xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
