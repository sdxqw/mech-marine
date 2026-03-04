import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Settings, Ship, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-32 bg-background relative z-10">
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
            asChild
            variant="ghost"
            className="hidden md:flex group text-primary hover:text-primary hover:bg-primary/10"
          >
            <Link href="/servizi">
              Scopri tutto
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-8 group relative p-6 md:p-10 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/5 overflow-hidden flex flex-col justify-between min-h-60 md:min-h-80"
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
            className="md:col-span-4 group relative p-6 md:p-10 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/5 overflow-hidden flex flex-col justify-between min-h-50 md:min-h-80"
          >
            <div className="relative z-10 w-fit mb-8 p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <Settings size={32} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3 tracking-tight">Motori</h3>
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
                per flotte che necessitano di competenze tecniche specifiche ed
                estrema precisione.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
