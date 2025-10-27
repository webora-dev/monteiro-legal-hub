import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, CheckCircle2, Award } from "lucide-react";

const cases = [
  {
    icon: TrendingUp,
    title: "Redução Fiscal",
    result: "Redução de multa fiscal em R$ 850.000",
    description: "Empresa do setor de tecnologia conseguiu reverter autuação após defesa estratégica administrativa.",
  },
  {
    icon: CheckCircle2,
    title: "Acordo Trabalhista",
    result: "Acordo favorável em 72h",
    description: "Cliente obteve acordo trabalhista vantajoso através de mediação, evitando processo longo.",
  },
  {
    icon: Award,
    title: "Inventário Express",
    result: "Finalizado em 4 meses",
    description: "Inventário familiar complexo finalizado em tempo recorde com consenso entre herdeiros.",
  },
];

export const Cases = () => {
  const whatsappNumber = "5551998887766";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Gostaria de solicitar um case study detalhado.")}`;

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Resultados Comprovados
          </h2>
          <div className="h-1 w-24 bg-accent rounded-full mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cases reais que demonstram nossa capacidade de entregar resultados excepcionais
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {cases.map((caseItem, index) => {
            const Icon = caseItem.icon;
            return (
              <Card 
                key={index}
                className="group hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] bg-card/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {caseItem.title}
                  </h3>
                  <div className="text-2xl font-bold text-accent">
                    {caseItem.result}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {caseItem.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Solicitar Case Study Completo
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
