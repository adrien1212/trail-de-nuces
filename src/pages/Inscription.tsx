import { Mountain, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Inscription = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <Link to="/" className="flex items-center gap-2">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="font-display text-2xl tracking-wider text-foreground">
              TRAIL DE MARCILLAC
            </span>
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h1 className="font-display text-5xl md:text-7xl text-foreground mb-8">
            INSCRIPTION
          </h1>
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-4">
            Les inscriptions au Trail de Marcillac-Vallon sont ouvertes ! Choisissez votre distance parmi les 3 parcours proposés : 17 km, 10 km ou 5 km.
          </p>
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-4">
            L'inscription se fait via notre plateforme partenaire. Munissez-vous de votre certificat médical de moins d'un an ou d'une licence FFA en cours de validité.
          </p>
          <p className="text-muted-foreground font-body text-base leading-relaxed mb-10">
            Pour toute question, n'hésitez pas à nous contacter via notre page association.
          </p>
          <Button size="lg" className="font-display text-lg tracking-wider px-10 py-6" asChild>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              S'INSCRIRE <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-border bg-card">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <Mountain className="h-5 w-5 text-primary" />
            <span className="font-display text-lg text-foreground">TRAIL DE MARCILLAC</span>
          </Link>
          <p className="text-muted-foreground font-body text-sm">
            © 2026 Trail de Marcillac-Vallon — Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Inscription;
