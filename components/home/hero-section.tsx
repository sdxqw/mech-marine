"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Anchor, Ship, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/components/home/animation";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-secondary/20 mix-blend-multiply" />
        <div className="absolute inset-0 blur-[2px] bg-[radial-gradient(circle_at_20%_30%,hsl(var(--secondary-foreground)/0.025),transparent_50%),radial-gradient(circle_at_80%_20%,hsl(var(--secondary-foreground)/0.02),transparent_46%),radial-gradient(circle_at_50%_80%,hsl(var(--secondary)/0.09),transparent_56%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-background to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-background to-transparent" />
      </div>

      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute -left-14 md:-left-8 top-16 text-secondary-foreground/6 md:text-secondary-foreground/10 blur-[1px]">
          <Anchor size={260} strokeWidth={1} />
        </div>
        <div className="absolute -right-12 md:right-12 top-24 text-secondary-foreground/5 md:text-secondary-foreground/9 rotate-6 blur-[1px]">
          <Ship size={220} strokeWidth={1} />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-14 text-secondary-foreground/7 md:text-secondary-foreground/11 blur-[1px]">
          <Waves size={260} strokeWidth={1} />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-5xl pt-20">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="space-y-6 md:space-y-10 flex flex-col items-center"
        >
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
            manutenzione navale di altissima qualità, specializzati in traghetti
            e mezzi ad alta velocità.
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
              <Link href="/contattaci">Contattaci</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] hidden lg:block pointer-events-none">
        <Anchor size={600} strokeWidth={0.5} />
      </div>
    </section>
  );
}
