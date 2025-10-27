import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo dura uma consulta?",
    answer: "A primeira consulta geralmente dura entre 40 a 60 minutos. É um momento para entendermos seu caso detalhadamente e traçarmos as melhores estratégias jurídicas.",
  },
  {
    question: "Vocês atendem empresas de fora do Brasil?",
    answer: "Sim! Atendemos clientes em todo o Brasil e também prestamos consultoria para empresas no exterior que precisam de assessoria jurídica brasileira, especialmente em compliance e LGPD.",
  },
  {
    question: "Como é o pagamento?",
    answer: "Trabalhamos com diferentes modalidades: honorários por hora, pacotes mensais para assessoria contínua, ou valores fixos para serviços específicos. Tudo é acordado de forma transparente antes do início.",
  },
  {
    question: "Vocês fazem defesas online?",
    answer: "Sim! Através de videoconferência, conseguimos atender clientes de qualquer lugar do Brasil com a mesma qualidade de um atendimento presencial.",
  },
  {
    question: "Qual o prazo médio para resolver um caso?",
    answer: "Depende muito da natureza do caso. Processos administrativos podem levar de 3 a 12 meses, enquanto processos judiciais podem variar bastante. Sempre fornecemos uma estimativa realista na consulta inicial.",
  },
  {
    question: "Vocês oferecem garantia de resultado?",
    answer: "Por questões éticas da advocacia, não podemos garantir resultados específicos. No entanto, garantimos dedicação máxima, estratégia baseada em análise técnica profunda e atualizações constantes sobre o andamento do seu caso.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Perguntas Frequentes
          </h2>
          <div className="h-1 w-24 bg-accent rounded-full mx-auto" />
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 data-[state=open]:border-accent/50"
            >
              <AccordionTrigger className="text-left hover:no-underline hover:text-accent transition-colors py-4">
                <span className="font-semibold text-foreground">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
