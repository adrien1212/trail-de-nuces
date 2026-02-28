import { Mountain, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const Inscription = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation */}
      <NavBar />

      <main className="pt-32 pb-24 px-4 flex-1">
        <div className="container mx-auto max-w-2xl text-center">
          <h1 className="font-display text-5xl md:text-7xl text-foreground mb-8">
            INSCRIPTION
          </h1>
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-4">
            Les inscriptions au Trail de Nuces sont <strong>exclusivement en ligne</strong> ! Choisissez votre distance parmi les 3 parcours proposés : 17 km, 10 km ou 5 km.
          </p>
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-4">
            L'inscription se fait via notre plateforme partenaire (1€).
          </p>
          <p className="text-muted-foreground font-body text-base leading-relaxed mb-10">
            Pour toute question, n'hésitez pas à nous contacter <br />
            <strong><a href="mailto:comitedesfetesnuces12330@gmail.com">comitedesfetesnuces12330@gmail.com</a></strong>
          </p>
          <Button size="lg" className="font-display text-lg tracking-wider px-10 py-6" asChild>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              S'INSCRIRE <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Inscription;
