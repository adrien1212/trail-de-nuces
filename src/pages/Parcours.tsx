import { Mountain, Download, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import map17km from "@/assets/map-17km.jpg";
import map10km from "@/assets/map-10km.jpg";
import map5km from "@/assets/map-5km.jpg";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const parcours = [
  {
    name: "La Grande Nuçoise",
    distance: "16 km",
    elevation: "450 D+",
    level: "Confirmé",
    description:
      "Le défi pour les traileurs confirmés. Un parcours exigeant à travers les collines et vignobles de Marcillac avec des passages techniques et de beaux panoramas sur la vallée.",
    map: map17km,
    gpxUrl: "#",
    color: "bg-primary",
  },
  {
    name: "La Nuçoise",
    distance: "10 km",
    elevation: "230 D+",
    level: "Intermédiaire",
    description:
      "Un parcours intermédiaire idéal pour découvrir le trail en douceur. Des chemins variés entre vignes et forêts avec de beaux points de vue sur le vallon.",
    map: map10km,
    gpxUrl: "#",
    color: "bg-secondary",
  },
  {
    name: "La Petite Nuçoise",
    distance: "6 km",
    elevation: "80 D+",
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
      <NavBar />

      <main className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="font-display text-5xl md:text-7xl text-foreground text-center mb-4">
            LES PARCOURS
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-16 font-body max-w-2xl mx-auto">
            Découvrez les tracés des 3 parcours du Trail de Nuces Téléchargez les fichiers GPX pour repérer les itinéraires.
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
                    <h2 className="font-display text-4xl text-foreground mt-2 mb-1">
                      {p.name}
                    </h2>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-display text-5xl text-primary">{p.distance}</span>
                      <span className="text-muted-foreground font-body text-sm border-l border-border pl-4">
                        {p.elevation}
                      </span>
                    </div>
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
      <Footer />
    </div>
  );
};

export default Parcours;
