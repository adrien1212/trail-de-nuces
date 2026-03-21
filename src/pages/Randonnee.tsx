import { MapPin, Mountain, Clock, Users } from "lucide-react";
import mapRando from "@/assets/map-rando.png";
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
            En parallèle du trail, profitez d'une randonnée accessible à tous pour découvrir les paysages de la commune
          </p>

          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Inscription sur place
          </h2>

          <p className="text-muted-foreground text-lg mb-6 font-body max-w-2xl">
            L’inscription se fait sur place à partir de <strong>9h30</strong>, pour un départ prévu à <strong>10h00</strong>.
          </p>

          <ul className="text-muted-foreground text-lg font-body max-w-2xl  list-disc pl-6">
            <li>
              <strong>Horaire d’inscription :</strong> à partir de 9h30 jusqu'à 10h
            </li>
            <li>
              <strong>Restauration sur place :</strong> réservation obligatoire par mail <a
                href="mailto:comitedesfetesnuces12330@gmail.com"
                className="underline hover:opacity-80">comitedesfetesnuces12330@gmail.com
              </a>
            </li>
            <li>
              <strong>Tarifs repas :</strong> 15 € par adulte et 10 € par enfant
            </li>
          </ul>

          <br></br><br></br>

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
                <h2 className="font-display text-3xl md:text-4xl text-foreground">
                  La balade du Causse
                </h2>
                <span className="font-display text-3xl md:text-3xl text-foreground">
                  5€
                </span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <span className="font-display text-4xl md:text-5xl text-primary">9 km</span>
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
                      <h3 className="font-display text-lg text-foreground">{info.title}</h3>
                      <p className="text-muted-foreground font-body text-sm">{info.desc}</p>
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

export default Randonnee;
