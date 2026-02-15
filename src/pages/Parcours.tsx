import { Mountain, Download, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import map17km from "@/assets/map-17km.jpg";
import map10km from "@/assets/map-10km.jpg";
import map5km from "@/assets/map-5km.jpg";

const parcours = [
  {
    name: "Le Grand Parcours",
    distance: "17 km",
    elevation: "500 D+",
    level: "Confirmé",
    description:
      "Le défi pour les traileurs confirmés. Un parcours exigeant à travers les collines et vignobles de Marcillac avec des passages techniques et de beaux panoramas sur la vallée.",
    map: map17km,
    gpxUrl: "#",
    color: "bg-primary",
  },
  {
    name: "Le Parcours Découverte",
    distance: "10 km",
    elevation: "300 D+",
    level: "Intermédiaire",
    description:
      "Un parcours intermédiaire idéal pour découvrir le trail en douceur. Des chemins variés entre vignes et forêts avec de beaux points de vue sur le vallon.",
    map: map10km,
    gpxUrl: "#",
    color: "bg-secondary",
  },
  {
    name: "La Rando Trail",
    distance: "5 km",
    elevation: "200 D+",
    level: "Tous niveaux",
    description:
      "Accessible à tous, en famille ou entre amis. Un premier pas dans le monde du trail sur des sentiers faciles autour de Marcillac-Vallon.",
    map: map5km,
    gpxUrl: "#",
    color: "bg-accent",
  },
];

const Parcours = () => {
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
          <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <Link to="/parcours" className="text-foreground">Les parcours</Link>
            <Link to="/inscription" className="hover:text-foreground transition-colors">Inscription</Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="font-display text-5xl md:text-7xl text-foreground text-center mb-4">
            LES PARCOURS
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-16 font-body max-w-2xl mx-auto">
            Découvrez les tracés des 3 parcours du Trail de Marcillac-Vallon. Téléchargez les fichiers GPX pour repérer les itinéraires.
          </p>

          <div className="space-y-16">
            {parcours.map((p, i) => (
              <div
                key={p.name}
                className="bg-card rounded-lg border border-border overflow-hidden"
              >
                <div className={`${p.color} h-2`} />
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={p.map}
                      alt={`Carte du parcours ${p.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <span className="text-xs font-body font-semibold uppercase tracking-widest text-muted-foreground">
                      {p.level}
                    </span>
                    <h2 className="font-display text-4xl text-foreground mt-2 mb-1">
                      {p.name}
                    </h2>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-display text-5xl text-primary">{p.distance}</span>
                      <span className="text-muted-foreground font-body text-sm border-l border-border pl-4">
                        {p.elevation}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-body leading-relaxed text-sm mb-6">
                      {p.description}
                    </p>
                    <div>
                      <Button variant="outline" asChild>
                        <a href={p.gpxUrl} download>
                          <Download className="h-4 w-4 mr-2" />
                          Télécharger le GPX
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

export default Parcours;
