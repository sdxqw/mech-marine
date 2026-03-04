import Link from "next/link";
import { Anchor, ArrowRight, Ship } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NotFound() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full items-center justify-center overflow-hidden p-6 md:p-10">
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-secondary/20" />
      <div className="absolute -left-16 top-12 text-primary/10 pointer-events-none">
        <Anchor size={220} strokeWidth={1} />
      </div>
      <div className="absolute -right-12 bottom-12 text-primary/10 pointer-events-none rotate-6">
        <Ship size={220} strokeWidth={1} />
      </div>

      <Card className="w-full max-w-3xl relative z-10 border-border/60 shadow-xl">
        <CardHeader className="space-y-3">
          <CardDescription className="text-primary font-semibold">
            Errore 404
          </CardDescription>
          <CardTitle className="text-3xl md:text-4xl tracking-tight">
            Rotta non trovata
          </CardTitle>
          <CardDescription className="text-base leading-relaxed">
            La pagina che stai cercando non è disponibile o è stata spostata.
            Torna alla home o contattaci per assistenza immediata.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          MECH MARINE S.R.L. supporta flotte e operatori con interventi tecnici
          rapidi tra Messina e Milazzo.
        </CardContent>
        <CardFooter className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/">
              Torna alla Home
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contattaci">Vai a Contattaci</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
