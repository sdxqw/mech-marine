"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#about", label: "Chi Siamo" },
  { href: "/servizi", label: "Servizi" },
  { href: "/#clients", label: "Clienti" },
  { href: "/contattaci", label: "Contattaci" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/40 shadow-sm"
          : "bg-background/80 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0"
          onClick={() => setIsOpen(false)}
        >
          <span className="font-black text-xl tracking-tight text-primary">
            MECH MARINE
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            size="sm"
            className="bg-primary hover:bg-primary/90 rounded-full px-6"
          >
            <Link href="/contattaci">Contattaci</Link>
          </Button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors text-foreground"
          aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-background/98 backdrop-blur-xl border-t border-border/40 px-4 pb-6 pt-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center py-3 px-4 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 px-4">
            <Button
              asChild
              className="w-full h-12 bg-primary hover:bg-primary/90 rounded-xl text-base font-semibold"
            >
              <Link href="/contattaci" onClick={() => setIsOpen(false)}>
                Richiedi Preventivo
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
