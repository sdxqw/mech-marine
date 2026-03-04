import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Gauge, Settings, ShieldCheck, Ship, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Servizi",
  description:
    "Panoramica completa dei servizi MECH MARINE S.R.L.: meccanica generale, motori marini, assistenza su aliscafi e catamarani, supporto flotte e interventi tecnici rapidi.",
};

const services = [
  {
    title: "Meccanica Generale Navale",
    description:
      "Lavorazioni di precisione su componenti meccanici navali, ripristino tolleranze e manutenzione strutturata per ridurre i fermi macchina.",
    icon: Wrench,
    points: [
      "Riparazione componenti meccanici critici",
      "Controlli dimensionali e funzionali",
      "Interventi programmati e straordinari",
    ],
  },
  {
    title: "Manutenzione Motori",
    description:
      "Revisione e manutenzione di propulsori marini con procedure tecniche orientate all'affidabilità e alla continuità operativa.",
    icon: Settings,
    points: [
      "Diagnostica tecnica e verifica prestazioni",
      "Revisione organi di propulsione",
      "Supporto tecnico in fase di fermo e riavvio",
    ],
  },
  {
    title: "Assistenza Alta Velocità",
    description:
      "Servizi specialistici per aliscafi, catamarani e unità veloci con tempistiche rapide e focus su sicurezza ed efficienza.",
    icon: Gauge,
    points: [
      "Interventi dedicati su mezzi ad alta velocità",
      "Supporto operativo flotte passeggeri",
      "Riduzione tempi di indisponibilità nave",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-8 space-y-8">
          <Badge variant="secondary" className="text-sm">
            Servizi MECH MARINE S.R.L.
          </Badge>
          <div className="max-w-4xl space-y-4">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight">
              Scopri di più sui nostri servizi
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Operiamo tra Messina e Milazzo con un approccio tecnico completo:
              manutenzione meccanica, supporto motori e assistenza specialistica
              per flotte di traghetti, aliscafi e catamarani.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild>
              <Link href="/contattaci">Richiedi preventivo</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">
                Torna alla Home
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Card key={service.title} className="h-full border-border/60">
                  <CardHeader className="space-y-4">
                    <div className="w-fit rounded-xl bg-primary/10 text-primary p-3">
                      <Icon size={24} />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-primary/70" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary/30 border-y border-border/50">
        <div className="container mx-auto max-w-7xl px-4 md:px-8 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Come lavoriamo
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>1. Analisi tecnica</CardTitle>
                <CardDescription>
                  Valutiamo stato impianti, criticità e priorità operative.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>2. Intervento mirato</CardTitle>
                <CardDescription>
                  Eseguiamo attività meccaniche e propulsive con standard
                  qualitativi elevati.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>3. Verifica e continuità</CardTitle>
                <CardDescription>
                  Concludiamo con controlli finali e piano di manutenzione.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="rounded-3xl border border-border/60 bg-card p-8 md:p-12 space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <Ship className="h-6 w-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Realtà servite
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              Siamo già operativi con importanti realtà del trasporto passeggeri
              marittimo e lacustre, tra cui Liberty Lines e Navigazione Laghi,
              offrendo continuità tecnica su flotte ad alta complessità.
            </p>
            <Separator />
            <div className="grid gap-4 md:grid-cols-2 text-sm text-muted-foreground">
              <div className="rounded-xl border border-border/60 bg-background p-4">
                <h3 className="font-semibold text-foreground mb-1">
                  Liberty Lines
                </h3>
                <p>
                  Assistenza tecnica specializzata su aliscafi, catamarani e
                  mezzi ibridi.
                </p>
              </div>
              <div className="rounded-xl border border-border/60 bg-background p-4">
                <h3 className="font-semibold text-foreground mb-1">
                  Navigazione Laghi
                </h3>
                <p>
                  Supporto alla manutenzione di una flotta estesa su principali
                  laghi italiani.
                </p>
              </div>
            </div>
            <div className="pt-2">
              <Button asChild size="lg" className="rounded-xl">
                <Link href="/contattaci">
                  Parla con il team MECH MARINE
                  <ShieldCheck className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
