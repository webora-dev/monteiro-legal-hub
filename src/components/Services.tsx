import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Básico",
    description: "Contratos e revisão",
    features: [
      "Revisão de contratos",
      "Análise jurídica documental",
      "Consultoria pontual",
      "Suporte por e-mail",
    ],
    cta: "Solicitar orçamento",
  },
  {
    name: "Pro",
    description: "Assessoria mensal",
    features: [
      "Tudo do Básico",
      "Assessoria jurídica mensal",
      "Reuniões mensais",
      "Suporte prioritário",
      "Compliance básico",
    ],
    cta: "Valor sob consulta",
    featured: true,
  },
  {
    name: "Premium",
    description: "Defesas estratégicas",
    features: [
      "Tudo do Pro",
      "Contencioso completo",
      "Defesas administrativas",
      "Representação em juízo",
      "Suporte 24/7",
      "Equipe dedicada",
    ],
    cta: "Agendar reunião",
  },
];

export const Services = () => {
  const whatsappNumber = "5551998887766";
  
  const getWhatsAppLink = (packageName: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de solicitar orçamento do pacote ${packageName}.`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <section id="servicos" className="py-20 bg-card/30">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Serviços & Pacotes
          </h2>
          <div className="h-1 w-24 bg-accent rounded-full mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para suas necessidades jurídicas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden ${
                pkg.featured 
                  ? 'border-accent/50 shadow-[0_0_30px_rgba(212,175,55,0.2)]' 
                  : 'border-border/50'
              } bg-card/80 backdrop-blur-sm hover:border-accent/50 transition-all`}
            >
              {pkg.featured && (
                <div className="absolute top-0 right-0 bg-accent text-primary-foreground px-4 py-1 text-sm font-semibold">
                  Mais Popular
                </div>
              )}
              <CardHeader className="text-center space-y-2 pt-8">
                <h3 className="text-2xl font-bold text-foreground">{pkg.name}</h3>
                <p className="text-muted-foreground">{pkg.description}</p>
              </CardHeader>
              <CardContent className="space-y-4 py-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  variant={pkg.featured ? "hero" : "outline"}
                  className="w-full"
                  size="lg"
                  asChild
                >
                  <a href={getWhatsAppLink(pkg.name)} target="_blank" rel="noopener noreferrer">
                    {pkg.cta}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
