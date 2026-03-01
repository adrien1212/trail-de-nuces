import { Mountain, MapPin, Calendar, Clock, Users, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-trail.jpg";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import InscriptionBtn from "@/components/InscriptionBtn";

const races = [
  {
    name: "Le Grande Nuçoise",
    distance: "17 km",
    elevation: "500 D+",
    gpxUrl: "#",
    color: "bg-primary",
  },
  {
    name: "La Nuçoise",
    distance: "10 km",
    elevation: "250 D+",
    gpxUrl: "#",
    color: "bg-secondary",
  },
  {
    name: "La Petite Nuçoise",
    distance: "5 km",
    elevation: "100 D+",
    gpxUrl: "#",
    color: "bg-accent",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <NavBar />

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Sentiers de Nuces"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <p className="font-body text-primary-foreground/80 text-lg md:text-xl tracking-widest uppercase mb-4 animate-fade-up">
            Dimanche 26 Avril 2026
          </p>
          <h1 className="font-display text-6xl md:text-9xl text-primary-foreground leading-none mb-6 animate-fade-up" >
            TRAIL DE
            <br />
            NUCES
          </h1>
          <p className="font-body text-primary-foreground/90 text-xl md:text-2xl font-light mb-8 animate-fade-up">
            3 parcours au cœur de la commune de Valady
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/80 text-sm font-body animate-fade-up">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Nuces 12330</span>
            <span className="flex items-center gap-2"><Mountain className="h-4 w-4" /> 5 / 10 / 17 km</span>
          </div>
          <div className="mt-10 animate-fade-up">
            <InscriptionBtn />
          </div>
        </div>
        <a href="#courses" className="absolute bottom-8 z-10 animate-bounce">
          <ChevronDown className="h-8 w-8 text-primary-foreground/60" />
        </a>
      </section>

      {/* Races Section */}
      <section id="courses" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-5xl md:text-7xl text-foreground text-center mb-4">
            LES COURSES
          </h2>
          <p className="text-muted-foreground text-center text-lg mb-16 font-body max-w-2xl mx-auto">
            Trois distances pour tous les niveaux, à travers les sentiers de la commune
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {races.map((race, i) => (
              <div
                key={race.name}
                className="group relative bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className={`${race.color} h-2`} />
                <div className="p-8">
                  <h3 className="font-display text-3xl text-foreground mt-2 mb-1">
                    {race.name}
                  </h3>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-display text-5xl text-primary">{race.distance}</span>
                    <span className="text-muted-foreground font-body text-sm border-l border-border pl-4">
                      {race.elevation}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infos Section */}
      <section id="infos" className="py-24 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-5xl md:text-7xl text-foreground text-center mb-16">
            INFOS PRATIQUES
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { icon: MapPin, title: "Lieu de départ", desc: "Nuces, VALADY (12330)" },
              { icon: Calendar, title: "Date", desc: "Dimanche 26 avril 2026" },
              { icon: Clock, title: "Horaires", desc: "Retrait des dossards dès 8h30" },
              { icon: Users, title: "Ouvert à tous", desc: "Licenciés et non-licenciés" },
            ].map((info) => (
              <div key={info.title} className="flex items-start gap-4 p-6 rounded-lg bg-background border border-border">
                <info.icon className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-xl text-foreground">{info.title}</h3>
                  <p className="text-muted-foreground font-body text-sm mt-1">{info.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-16">
            NOUS CONTACTER
          </h2>

          <div className="space-y-10">
            {[
              {
                title: "Email",
                content: (
                  <a
                    href="mailto:comitedesfetesnuces12330@gmail.com"
                    className="text-primary underline hover:text-primary/80"
                  >
                    comitedesfetesnuces12330@gmail.com
                  </a>
                ),
              },
              {
                title: "Instagram",
                content: (
                  <a
                    href="https://instagram.com/comitedenuces"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-primary/80"
                  >
                    @comitedenuces
                  </a>
                ),
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-2xl text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-lg text-muted-foreground">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
