import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "O curso é indicado para iniciantes?",
    answer: "Sim. As aulas foram pensadas para líderes em qualquer estágio que queiram resultados rápidos.",
  },
  {
    question: "Quanto tempo de acesso eu tenho?",
    answer: "Acesso vitalício às aulas gravadas e materiais.",
  },
  {
    question: "Há certificado?",
    answer: "Sim. Certificado digital de conclusão.",
  },
  {
    question: "Como funciona a garantia?",
    answer: "7 dias para solicitar reembolso integral.",
  },
  {
    question: "Posso parcelar no cartão?",
    answer: "Sim. Opções de parcelamento no checkout. Para mentorias, fale via WhatsApp.",
  },
  {
    question: "Posso assistir pelo celular?",
    answer: "Sim. Plataforma responsiva.",
  },
  {
    question: "Preciso de experiência prévia?",
    answer: "Não. O curso é prático e direto.",
  },
  {
    question: "Tem suporte durante o curso?",
    answer: "Suporte via WhatsApp e sessões ao vivo para lotes selecionados.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 section-light" aria-labelledby="faq-title">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <h2
            id="faq-title"
            className="text-2xl md:text-3xl lg:text-4xl font-black text-center mb-12 text-secondary-foreground"
          >
            Perguntas <span className="text-shogun-gold-dark">Frequentes</span>
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background/5 border border-shogun-gold-dark/20 rounded-lg px-4"
              >
                <AccordionTrigger className="text-left font-semibold text-secondary-foreground hover:text-shogun-gold-dark">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-secondary-foreground/70">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-10">
            <a
              href="https://chk.eduzz.com/60EE3BYD03"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta inline-block"
              onClick={() => {
                if (typeof window !== 'undefined' && window.fbq) window.fbq('track', 'InitiateCheckout');
              }}
            >
              APROVEITAR AGORA POR R$49,90
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
