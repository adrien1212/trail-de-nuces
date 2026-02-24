import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import map17km from "@/assets/map-17km.jpg";
import map10km from "@/assets/map-10km.jpg";
import map5km from "@/assets/map-5km.jpg";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const parcours = [
  {
    id: "17km",
    name: "La Grande Nuçoise",
    distance: "17 km",
    elevation: "450 D+",
    level: "Confirmé",
    description:
      "Le défi pour les traileurs confirmés. Un parcours exigeant à travers les collines et vignobles de Marcillac avec des passages techniques et de beaux panoramas sur la vallée.",
    map: map17km,
    gpxUrl: "#",
  },
  {
    id: "10km",
    name: "La Nuçoise",
    distance: "10 km",
    elevation: "230 D+",
    level: "Intermédiaire",
    description:
      "Un parcours intermédiaire idéal pour découvrir le trail en douceur. Des chemins variés entre vignes et forêts avec de beaux points de vue sur le vallon.",
    map: map10km,
    gpxUrl: "#",
  },
  {
    id: "5km",
    name: "La Petite Nuçoise",
    distance: "5 km",
    elevation: "80 D+",
    level: "Tous niveaux",
    description:
      "Accessible à tous, en famille ou entre amis. Un premier pas dans le monde du trail sur des sentiers faciles autour de Marcillac-Vallon.",
    map: map5km,
    gpxUrl: "#",
  },
];

const Parcours = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <main className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="font-display text-5xl md:text-7xl text-foreground text-center mb-4">
            LES PARCOURS
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-12 font-body max-w-2xl mx-auto">
            Découvrez les tracés des 3 parcours du Trail de Nuces. Téléchargez les fichiers GPX pour repérer les itinéraires.
          </p>

          <Tabs defaultValue="17km" className="w-full">
            <TabsList className="w-full grid grid-cols-3 mb-8 h-auto">
              {parcours.map((p) => (
                <TabsTrigger key={p.id} value={p.id} className="font-display text-sm md:text-base py-3">
                  {p.distance}
                </TabsTrigger>
              ))}
            </TabsList>

            {parcours.map((p) => (
              <TabsContent key={p.id} value={p.id}>
                <div className="bg-card rounded-lg border border-border overflow-hidden">
                  <div className="w-full">
                    <img
                      src={p.map}
                      alt={`Carte du parcours ${p.name}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="p-8">
                    <h2 className="font-display text-3xl md:text-4xl text-foreground mb-1">
                      {p.name}
                    </h2>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-display text-4xl md:text-5xl text-primary">{p.distance}</span>
                      <span className="text-muted-foreground font-body text-sm border-l border-border pl-4">
                        {p.elevation} · {p.level}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-body mb-6">{p.description}</p>
                    <Button variant="outline" asChild>
                      <a href={p.gpxUrl} download>
                        <Download className="h-4 w-4 mr-2" />
                        Télécharger le GPX
                      </a>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Parcours;
