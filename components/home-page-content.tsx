"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function HomePageContent() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.45, ease: "easeOut" as const },
    },
  };

  const stagger: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: prefersReducedMotion ? 0 : 0.05,
      },
    },
  };

  return (
    <main className="min-h-screen bg-linear-to-b from-background via-secondary/30 to-muted/60">
      <motion.div
        className="mx-auto flex w-full max-w-5xl flex-col justify-center p-6 md:p-10"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.section className="mb-8" variants={fadeUp}>
          <Badge variant="secondary" className="mb-4">
            Starter Template
          </Badge>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Next.js + Shadcn + Docker + GitHub Actions
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A simple foundation to start fast: clean UI, containerized deployment, and CI/CD ready.
          </p>
        </motion.section>

        <motion.div className="grid gap-4 md:grid-cols-3" variants={stagger}>
          <motion.div variants={fadeUp}>
            <Card className="bg-card/80">
              <CardHeader>
                <CardTitle>UI Ready</CardTitle>
                <CardDescription>Use Shadcn components and keep styling consistent.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Start from app/page.tsx and add new sections by composing cards and buttons.
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card className="bg-card/80">
              <CardHeader>
                <CardTitle>Docker Ready</CardTitle>
                <CardDescription>Same setup locally and on your server.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Build and run with docker compose up --build.
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card className="bg-card/80">
              <CardHeader>
                <CardTitle>Deploy Ready</CardTitle>
                <CardDescription>Push to main and deploy automatically.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Configure GitHub secrets once and reuse for every project.
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Separator className="my-8" />
        </motion.div>

        <motion.div variants={fadeUp}>
          <Card className="bg-card/80">
            <CardHeader>
              <CardTitle>Quick Start</CardTitle>
              <CardDescription>What to edit first</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>1. Update metadata in lib/seo.ts.</p>
              <p>2. Customize this page (app/page.tsx).</p>
              <p>3. Set .env values and deploy.</p>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              <Button asChild>
                <Link href="https://ui.shadcn.com/docs/components" target="_blank" rel="noreferrer">
                  Browse Components
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
                  Next.js Docs
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>
    </main>
  );
}
