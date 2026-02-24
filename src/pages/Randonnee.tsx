import { MapPin, Mountain, Clock, Users } from "lucide-react";
import mapRando from "@/assets/map-rando.jpg";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const Randonnee = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <main className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="font-display text-5xl md:text-7xl text-foreground text-center mb-4">
            RANDONNÉE
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-12 font-body max-w-2xl mx-auto">
            En parallèle du trail, profitez d'une randonnée accessible à tous pour découvrir les paysages de Nuces et ses alentours.
          </p>

          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <div className="w-full">
              <img
                src={mapRando}
                alt="Carte de la randonnée"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="p-8">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-1">
                La Balade des Vignes
              </h2>
              <div className="flex items-center gap-4 mb-6">
                <span className="font-display text-4xl md:text-5xl text-primary">12 km</span>
                <span className="text-muted-foreground font-body text-sm border-l border-border pl-4">
                  350 D+ · Tous niveaux
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: MapPin, title: "Départ", desc: "Place de Nuces, Valady" },
                  { icon: Clock, title: "Durée estimée", desc: "Environ 3h à 3h30" },
                  { icon: Mountain, title: "Dénivelé", desc: "350 m de dénivelé positif" },
                  { icon: Users, title: "Public", desc: "Familles, marcheurs, tous niveaux" },
                ].map((info) => (
                  <div key={info.title} className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
                    <info.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-display text-lg text-foreground">{info.title}</h3>
                      <p className="text-muted-foreground font-body text-sm">{info.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 font-body text-muted-foreground">
                <p>
                  Cette randonnée vous emmène à la découverte des paysages vallonnés de la commune de Nuces. 
                  Le parcours serpente à travers les vignobles de Marcillac, longe des chemins ombragés en sous-bois 
                  et offre de magnifiques points de vue sur la vallée du Lot.
                </p>
                <p>
                  Le sentier est balisé et accessible à tous les marcheurs, y compris les familles avec enfants. 
                  Prévoyez de bonnes chaussures de marche, de l'eau et une casquette en cas de soleil.
                </p>
                <p>
                  Le ravitaillement sera assuré à mi-parcours avec eau et fruits secs. 
                  L'arrivée se fait au village où un verre de l'amitié vous attend !
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Randonnee;
