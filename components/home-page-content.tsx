"use client";

import { AboutSection } from "@/components/home/about-section";
import { ClientsSection } from "@/components/home/clients-section";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";

export function HomePageContent() {
  return (
    <main className="flex-1">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ClientsSection />
      <ContactSection />
    </main>
  );
}
