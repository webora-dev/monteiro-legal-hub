import { Briefcase, Users, Home, Calculator, Shield, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const areas = [
  {
    icon: Briefcase,
    title: "Direito Cível",
    description: "Contratos, indenizações e litígios.",
  },
  {
    icon: Users,
    title: "Direito Trabalhista",
    description: "Defesa de empregados e empresas.",
  },
  {
    icon: Home,
    title: "Direito de Família",
    description: "Divórcio, guarda e inventários.",
  },
  {
    icon: Calculator,
    title: "Direito Tributário",
    description: "Planejamento e defesa fiscal.",
  },
  {
    icon: Shield,
    title: "LGPD & Privacidade",
    description: "Adequação e consultoria.",
  },
  {
    icon: Building,
    title: "Consultoria Empresarial",
    description: "Compliance e contratos.",
  },
];

export const PracticeAreas = () => {
  return (
    <section id="areas" className="py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Áreas de Atuação
          </h2>
          <div className="h-1 w-24 bg-accent rounded-full mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções jurídicas completas para pessoas físicas e empresas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card 
                key={index}
                className="group hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] bg-card/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
