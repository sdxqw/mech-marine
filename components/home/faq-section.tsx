// components/home/faq-section.tsx
import { getFaqs } from "./faq-data";

// ----------------------------------------------------------------------
// 2. Client-Side Interactivity (The Shadcn Way)
// ----------------------------------------------------------------------
// Notice how we import the generic, highly accessible Accordion components.
// We are importing them into a SERVER component. The Accordion internal state
// uses "use client" under the hood, but this parent wrapper stays on the Server.
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// ----------------------------------------------------------------------
// 3. The Server Component
// ----------------------------------------------------------------------
// Because this is a Server Component, it can be `async`.
// It fetches Data securely on the server, and only sends the final HTML down
// alongside the tiny Javascript required for the Accordion's interactivity.
export async function FaqSection() {
  const faqs = await getFaqs();

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
            Domande Frequenti
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Trova risposte immediate ai dubbi più comuni riguardanti i nostri
            servizi di meccanica navale.
          </p>
        </div>

        {/* 
          This Accordion uses "use client" internally. 
          We just pass the static, server-fetched data straight into it.
        */}
        <div className="bg-white dark:bg-zinc-950 p-6 md:p-8 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-left font-medium text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
