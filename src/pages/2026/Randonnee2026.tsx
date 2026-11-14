import { MapPin, Clock, Users } from "lucide-react";
import mapRando from "@/assets/map-rando.png";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const Randonnee2026 = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <main className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <div className="w-full">
              <img
                src={mapRando}
                alt="Carte de la randonnée"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="p-8">
              <div className="flex items-start justify-between mb-1">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  La balade du Causse
                </h2>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl md:text-5xl font-bold text-primary">9 km</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: MapPin, title: "Départ", desc: "Place de l'Eglise, Nuces" },
                  { icon: Clock, title: "Durée estimée", desc: "Environ 2h à 3h30" },
                  { icon: Users, title: "Public", desc: "Familles, marcheurs, tous niveaux" },
                ].map((info) => (
                  <div key={info.title} className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
                    <info.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{info.title}</h3>
                      <p className="text-muted-foreground text-sm">{info.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 font-body text-muted-foreground">

              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Randonnee2026;
