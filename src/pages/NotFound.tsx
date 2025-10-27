import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-8xl md:text-9xl font-bold text-accent">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Página não encontrada</h2>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Button 
          asChild
          variant="hero"
          size="lg"
          className="mt-6"
        >
          <a href="/">
            <Home className="mr-2 h-5 w-5" />
            Voltar para Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
