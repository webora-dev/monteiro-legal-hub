import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

const posts = [
  {
    title: "LGPD: Como adequar sua empresa em 2025",
    excerpt: "Entenda as principais mudanças na legislação de proteção de dados e como garantir compliance total.",
    coverUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop",
    date: "15 Jan 2025",
    readTime: "5 min",
  },
  {
    title: "Direito Trabalhista: Reforma e seus impactos",
    excerpt: "Análise completa das mudanças na CLT e como elas afetam empregadores e empregados.",
    coverUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=400&fit=crop",
    date: "10 Jan 2025",
    readTime: "7 min",
  },
  {
    title: "Planejamento Tributário Estratégico",
    excerpt: "Estratégias legais para reduzir carga tributária e aumentar a competitividade empresarial.",
    coverUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=400&fit=crop",
    date: "05 Jan 2025",
    readTime: "6 min",
  },
];

export const Blog = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Blog Jurídico
          </h2>
          <div className="h-1 w-24 bg-accent rounded-full mx-auto" />
          <p className="text-lg text-muted-foreground">
            Artigos e análises sobre temas jurídicos relevantes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {posts.map((post, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-border/50 hover:border-accent/50 transition-all bg-card/50 backdrop-blur-sm"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.coverUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <Button variant="link" className="p-0 h-auto text-accent hover:text-accent/80">
                  Ler mais →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            Ver todos os artigos
          </Button>
        </div>
      </div>
    </section>
  );
};
