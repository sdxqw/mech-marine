// components/home/faq-data.ts

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

// ----------------------------------------------------------------------
// 1. Server-Side Data Flow (The Next.js App Router Way)
// ----------------------------------------------------------------------
// In a real application, this function would run on your secure Next.js Server.
// You would connect directly to Prisma, Drizzle, MongoDB, or a CMS.
// Since it's a Server environment, you don't need APIs to fetch your own data.
// ----------------------------------------------------------------------

export async function getFaqs(): Promise<FAQ[]> {
  // Simulate a network or database delay (e.g. 1 second)
  // This demonstrates that Next.js Server Components wait for the Promise to resolve natively.
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      id: "faq-1",
      question: "Quali tipi di motori marini riparate?",
      answer: "Siamo specializzati nella manutenzione e riparazione di un'ampia gamma di motori marini entrobordo e fuoribordo, con particolare esperienza su motori ad alte prestazioni per aliscafi e catamarani.",
    },
    {
      id: "faq-2",
      question: "Offrite assistenza per navi ad alta velocità?",
      answer: "Assolutamente sì. Abbiamo una vasta esperienza con le flotte di navi ad alta velocità, inclusi aliscafi veloci, offrendo sia manutenzione ordinaria che interventi straordinari.",
    },
    {
      id: "faq-3",
      question: "Eseguite lavorazioni meccaniche su misura?",
      answer: "Sì, la nostra officina è equipaggiata per eseguire lavorazioni meccaniche di precisione su misura, inclusa la ricostruzione di componenti fuori produzione o danneggiati.",
    },
    {
      id: "faq-4",
      question: "Siete disponibili per interventi di emergenza?",
      answer: "Sì, comprendiamo l'importanza di ridurre al minimo i tempi di fermo. Offriamo un servizio di intervento rapido per emergenze in tutta l'area dello Stretto di Messina e zone limitrofe.",
    },
    {
      id: "faq-5",
      question: "Dove si trovano le vostre sedi operative?",
      answer: "Operiamo principalmente tra le nostre sedi principali e i cantieri di Messina e Milazzo, ma siamo attrezzati per interventi anche presso altri porti della Sicilia e del Sud Italia.",
    },
  ];
}
