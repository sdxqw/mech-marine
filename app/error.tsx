"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, Anchor, RefreshCw, Ship } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <AlertTriangle className="h-3.5 w-3.5" />
            Errore applicazione
          </div>
          <CardTitle className="text-3xl md:text-4xl tracking-tight">
            Si è verificato un problema
          </CardTitle>
          <CardDescription className="text-base leading-relaxed">
            Errore imprevisto nel caricamento della pagina. Puoi riprovare ora o
            contattarci direttamente.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Se il problema persiste, il nostro team tecnico è disponibile per
          supportarti rapidamente.
        </CardContent>
        <CardFooter className="flex flex-wrap gap-3">
          <Button onClick={reset}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Riprova
          </Button>
          <Button asChild variant="outline">
            <Link href="/contattaci">Vai a Contattaci</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
