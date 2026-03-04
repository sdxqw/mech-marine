import type { Metadata } from "next";
import { Anchor, Mail, MapPin, Phone, Ship } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contattaci",
  description:
    "Contatta MECH MARINE S.R.L. per preventivi, consulenze tecniche e assistenza su meccanica navale e manutenzione motori.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-secondary/20" />
        <div className="absolute -left-14 top-10 text-primary/10 pointer-events-none">
          <Anchor size={200} strokeWidth={1} />
        </div>
        <div className="absolute -right-14 bottom-8 text-primary/10 pointer-events-none rotate-6">
          <Ship size={200} strokeWidth={1} />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-8 space-y-6">
          <Badge variant="secondary" className="text-sm">
            Supporto tecnico e commerciale
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight max-w-4xl">
            Contattaci
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Siamo disponibili per preventivi, consulenze e pianificazione
            interventi su flotte navali. Il nostro team risponde rapidamente per
            aiutarti a mantenere continuità operativa e sicurezza.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-8 grid gap-6 lg:grid-cols-12">
          <Card className="lg:col-span-5 h-full border-border/60">
            <CardHeader>
              <CardTitle className="text-2xl">Recapiti diretti</CardTitle>
              <CardDescription>
                Usa il canale più rapido per il tuo tipo di richiesta.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 text-sm">
              <a
                href="mailto:info@mechmarine.it"
                className="flex items-start gap-3 rounded-xl border border-border/60 bg-background p-4 hover:border-primary/50 transition-colors"
              >
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <span>
                  <strong className="block text-foreground">Email</strong>
                  <span className="text-muted-foreground">info@mechmarine.it</span>
                </span>
              </a>

              <a
                href="tel:+390901234567"
                className="flex items-start gap-3 rounded-xl border border-border/60 bg-background p-4 hover:border-primary/50 transition-colors"
              >
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <span>
                  <strong className="block text-foreground">Telefono</strong>
                  <span className="text-muted-foreground">+39 090 1234567</span>
                </span>
              </a>

              <div className="rounded-xl border border-border/60 bg-background p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <span>
                    <strong className="block text-foreground">Sede Legale</strong>
                    <span className="text-muted-foreground">
                      Via Maddalena 11, 98123 Messina (ME)
                    </span>
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <span>
                    <strong className="block text-foreground">
                      Sede Operativa
                    </strong>
                    <span className="text-muted-foreground">
                      Via Matteo Nardi 15, 98057 Milazzo (ME)
                    </span>
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-7 border-border/60">
            <CardHeader>
              <CardTitle className="text-2xl">Richiedi informazioni</CardTitle>
              <CardDescription>
                Compila il modulo: ti ricontattiamo il prima possibile.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4 md:grid-cols-2" action="mailto:info@mechmarine.it" method="post" encType="text/plain">
                <label className="space-y-1 md:col-span-1">
                  <span className="text-sm font-medium">Nome</span>
                  <input
                    name="nome"
                    required
                    className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Mario Rossi"
                  />
                </label>

                <label className="space-y-1 md:col-span-1">
                  <span className="text-sm font-medium">Azienda</span>
                  <input
                    name="azienda"
                    className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Nome azienda"
                  />
                </label>

                <label className="space-y-1 md:col-span-1">
                  <span className="text-sm font-medium">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="nome@azienda.it"
                  />
                </label>

                <label className="space-y-1 md:col-span-1">
                  <span className="text-sm font-medium">Telefono</span>
                  <input
                    name="telefono"
                    className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="+39 ..."
                  />
                </label>

                <label className="space-y-1 md:col-span-2">
                  <span className="text-sm font-medium">Messaggio</span>
                  <textarea
                    name="messaggio"
                    required
                    rows={6}
                    className="w-full rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring resize-y"
                    placeholder="Descrivi la tua richiesta tecnica o operativa"
                  />
                </label>

                <div className="md:col-span-2 flex flex-wrap gap-3 pt-2">
                  <Button type="submit" className="rounded-xl">
                    Invia richiesta
                  </Button>
                  <Button type="button" asChild variant="outline" className="rounded-xl">
                    <a href="mailto:info@mechmarine.it">Scrivi via email</a>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
