import { Mountain, MapPin, Calendar, Clock, Users, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-trail.jpg";

const races = [
  {
    name: "Le Grand Parcours",
    distance: "17 km",
    elevation: "500 D+",
    description: "Le défi pour les traileurs confirmés. Un parcours exigeant à travers les collines et vignobles de Marcillac.",
    color: "bg-primary",
    level: "Confirmé",
  },
  {
    name: "Le Parcours Découverte",
    distance: "10 km",
    elevation: "300 D+",
    description: "Un parcours intermédiaire idéal pour découvrir le trail en douceur avec de beaux panoramas.",
    color: "bg-secondary",
    level: "Intermédiaire",
  },
  {
    name: "La Rando Trail",
    distance: "5 km",
    elevation: "200 D+",
    description: "Accessible à tous, en famille ou entre amis. Un premier pas dans le monde du trail.",
    color: "bg-accent",
    level: "Tous niveaux",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <div className="flex items-center gap-2">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="font-display text-2xl tracking-wider text-foreground">
              TRAIL DE MARCILLAC
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium text-muted-foreground">
            <a href="#courses" className="hover:text-foreground transition-colors">Les courses</a>
            <Link to="/parcours" className="hover:text-foreground transition-colors">Les parcours</Link>
            <a href="#infos" className="hover:text-foreground transition-colors">Infos pratiques</a>
            <a href="#association" className="hover:text-foreground transition-colors">L'association</a>
            <Link to="/inscription" className="hover:text-foreground transition-colors">Inscription</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Sentiers de Marcillac-Vallon"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <p className="font-body text-primary-foreground/80 text-lg md:text-xl tracking-widest uppercase mb-4 animate-fade-up">
            Marcillac-Vallon • Aveyron
          </p>
          <h1 className="font-display text-6xl md:text-9xl text-primary-foreground leading-none mb-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            TRAIL DE
            <br />
            MARCILLAC
          </h1>
          <p className="font-body text-primary-foreground/90 text-xl md:text-2xl font-light mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            3 parcours au cœur des vignobles aveyronnais
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/80 text-sm font-body animate-fade-up" style={{ animationDelay: "0.45s" }}>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Marcillac-Vallon</span>
            <span className="flex items-center gap-2"><Mountain className="h-4 w-4" /> 5 / 10 / 17 km</span>
          </div>
          <div className="mt-10 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" className="font-display text-lg tracking-wider px-10 py-6" asChild>
              <Link to="/inscription">S'INSCRIRE</Link>
            </Button>
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
            Trois distances pour tous les niveaux, à travers les sentiers et vignobles de Marcillac-Vallon.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {races.map((race, i) => (
              <div
                key={race.name}
                className="group relative bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className={`${race.color} h-2`} />
                <div className="p-8">
                  <span className="text-xs font-body font-semibold uppercase tracking-widest text-muted-foreground">
                    {race.level}
                  </span>
                  <h3 className="font-display text-3xl text-foreground mt-2 mb-1">
                    {race.name}
                  </h3>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-display text-5xl text-primary">{race.distance}</span>
                    <span className="text-muted-foreground font-body text-sm border-l border-border pl-4">
                      {race.elevation}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-body leading-relaxed text-sm">
                    {race.description}
                  </p>
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
              { icon: MapPin, title: "Lieu de départ", desc: "Marcillac-Vallon, Aveyron (12)" },
              { icon: Calendar, title: "Date", desc: "À confirmer — Édition 2026" },
              { icon: Clock, title: "Horaires", desc: "Retrait des dossards dès 7h30" },
              { icon: Users, title: "Ouvert à tous", desc: "Licenciés et non-licenciés avec certificat médical" },
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

      {/* Association Section */}
      <section id="association" className="py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-6">
            L'ASSOCIATION
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
            Ce trail est organisé par une association locale passionnée de course nature et attachée à la valorisation du patrimoine de Marcillac-Vallon et de l'Aveyron. Notre objectif : faire découvrir nos sentiers, nos paysages et notre terroir à travers le sport.
          </p>
          <p className="text-muted-foreground font-body text-lg leading-relaxed">
            Bénévoles, partenaires, coureurs : chaque édition est une fête conviviale portée par l'esprit du trail et de la solidarité.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-border bg-card">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Mountain className="h-5 w-5 text-primary" />
            <span className="font-display text-lg text-foreground">TRAIL DE MARCILLAC</span>
          </div>
          <p className="text-muted-foreground font-body text-sm">
            © 2026 Trail de Marcillac-Vallon — Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
