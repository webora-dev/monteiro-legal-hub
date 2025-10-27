import { Topbar } from "@/components/Topbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { PracticeAreas } from "@/components/PracticeAreas";
import { Cases } from "@/components/Cases";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Topbar />
      <Hero />
      <About />
      <PracticeAreas />
      <Cases />
      <Testimonials />
      <FAQ />
      <Blog />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
