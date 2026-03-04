"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowRight,
  Anchor,
  Settings,
  Ship,
  Wrench,
  ShieldCheck,
  Waves,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export function HomePageContent() {
  return (
    <main className="flex-1">
      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-secondary/20 mix-blend-multiply" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-background to-transparent" />
          <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-background to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-5xl pt-20">
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="space-y-6 md:space-y-10 flex flex-col items-center"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center rounded-full border border-primary/20 bg-background/50 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-primary shadow-sm"
            >
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Eccellenza Navale dal 2021
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground leading-[1.1]"
            >
              Il Futuro della <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/60">
                Navigazione
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium px-2"
            >
              MECH MARINE S.R.L. offre servizi di meccanica generale e
              manutenzione navale di altissima qualità, specializzati in
              traghetti e mezzi ad alta velocità.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto"
            >
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto shadow-xl shadow-primary/20 rounded-xl transition-all hover:scale-105 active:scale-95"
              >
                <a href="#services">
                  Scopri i Servizi
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base w-full sm:w-auto border-border bg-background/50 backdrop-blur hover:bg-secondary/50 rounded-xl transition-all"
              >
                <a href="#contact">Contattaci</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] hidden lg:block pointer-events-none">
          <Anchor size={600} strokeWidth={0.5} />
        </div>
      </section>

      {/* ABOUT SECTION */}
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
                Dal 2021, MECH MARINE S.R.L. è sinonimo di eccellenza nel
                settore della meccanica navale. Con due sedi strategiche a
                Messina e Milazzo, operiamo nel cuore del Mediterraneo per
                garantire la massima operatività alla tua flotta.
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
                    Standard operativi di massimo livello per assicurare la
                    totale sicurezza in mare in ogni condizione.
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
              <div className="aspect-4/3 rounded-3xl overflow-hidden bg-background border border-border/50  shadow-2xl flex items-center justify-center relative z-10">
                <div className="absolute inset-0 bg-linear-to-tr from-primary/5 via-transparent to-secondary/20 block pointer-events-none" />
                <Ship className="text-primary/10" size={180} strokeWidth={1} />
              </div>
              <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] blur-xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="py-16 md:py-32 bg-background relative z-10"
      >
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4 md:gap-6">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                I Nostri Servizi
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl">
                Soluzioni meccaniche all'avanguardia per l'industria marittima.
              </p>
            </div>
            <Button
              variant="ghost"
              className="hidden md:flex group text-primary hover:text-primary hover:bg-primary/10"
            >
              Scopri tutto{" "}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-8 group relative p-6 md:p-10 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/5 overflow-hidden flex flex-col justify-between min-h-[240px] md:min-h-[320px]"
            >
              <div className="absolute right-0 top-0 -translate-y-4 translate-x-4 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-1000 rotate-12 pointer-events-none">
                <Wrench size={300} strokeWidth={0.5} />
              </div>
              <div className="relative z-10 w-fit mb-8 p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Wrench size={32} />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 tracking-tight">
                  Meccanica Generale
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                  Lavorazioni meccaniche di precisione e riparazioni su
                  componenti essenziali per garantire l'affidabilità di ogni
                  viaggio.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-4 group relative p-6 md:p-10 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/5 overflow-hidden flex flex-col justify-between min-h-[200px] md:min-h-[320px]"
            >
              <div className="relative z-10 w-fit mb-8 p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Settings size={32} />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 tracking-tight">
                  Motori
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Revisione e manutenzione straordinaria dei propulsori marini.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-12 group relative p-6 md:p-10 rounded-3xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/5 overflow-hidden flex flex-col md:flex-row items-center gap-6 md:gap-10"
            >
              <div className="shrink-0 relative z-10 w-fit p-6 rounded-3xl bg-background text-primary shadow-lg border border-border/50 group-hover:scale-105 transition-all duration-500">
                <Ship size={48} strokeWidth={1.5} />
              </div>
              <div className="relative z-10 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
                  Specialisti in Alta Velocità
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                  Siamo il punto di riferimento per l'assistenza avanzata su
                  aliscafi e catamarani. Offriamo interventi rapidi e risolutivi
                  per flotte che necessitano di competenze tecniche specifiche
                  ed estrema precisione.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CLIENTS SECTION */}
      <section
        id="clients"
        className="py-16 md:py-32 relative border-t border-border/40 bg-zinc-50 dark:bg-zinc-950 overflow-hidden"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-primary/5 blur-[120px] rounded-full point-events-none" />

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
                  specializzata per la loro vasta flotta di aliscafi, catamarani
                  e mezzi ibridi di ultima generazione che collegano la Sicilia
                  alle isole minori.
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
                  manutenzione della loro immensa flotta di oltre 100 unità
                  navali operative sui principali e più prestigiosi laghi
                  italiani.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA SECTION */}
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
            dettagliati e interventi di emergenza. La nostra squadra
            specializzata è pronta a garantirti la massima efficienza in mare in
            tempistiche record.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Button
              asChild
              className="h-14 px-10 text-base font-semibold bg-white text-primary hover:bg-white/90 shadow-xl shadow-black/10 w-full sm:w-auto rounded-full transition-all hover:-translate-y-1"
            >
              <a href="mailto:info@mechmarine.it">Richiedi Preventivo</a>
            </Button>
            <Button
              asChild
              className="h-14 px-10 text-base font-semibold bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary w-full sm:w-auto rounded-full transition-all hover:-translate-y-1"
            >
              <a href="tel:+390901234567">Chiamaci Ora</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
