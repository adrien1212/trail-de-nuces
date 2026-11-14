import { MapPin, Calendar, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-trail.jpg";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const courses = [
  {
    tag: "Trail long",
    distance: "17 km",
    elevation: "+500 m",
    depart: "10 h 00",
    price: "15 €",
    featured: true,
    href: "/parcours",
    btnLabel: "S'inscrire au 17 km",
  },
  {
    tag: "Trail court",
    distance: "10 km",
    elevation: "+300 m",
    depart: "10 h 30",
    price: "12 €",
    featured: false,
    href: "/parcours",
    btnLabel: "S'inscrire au 10 km",
  },
  {
    tag: "Découverte",
    distance: "5 km",
    elevation: "+100 m",
    depart: "11 h 00",
    price: "10 €",
    featured: false,
    href: "/parcours",
    btnLabel: "S'inscrire au 5 km",
  },
  {
    tag: "Randonnée",
    distance: "9 km",
    elevation: "Marche, sans chrono",
    depart: "9 h 30",
    price: "5 €",
    featured: false,
    isRando: true,
    href: "/randonnee",
    btnLabel: "S'inscrire à la rando",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <img
          src={heroImage}
          alt="Sentiers de Nuces — coureurs sur les chemins du vallon"
          className="absolute inset-0 w-full h-full object-cover object-bottom hero-pastel"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

        <div className="relative flex flex-col items-center gap-5 px-6 pb-16 pt-48 text-center animate-hero-enter">
          <h1
            className="text-[clamp(44px,6vw,80px)] leading-[1.05] font-bold tracking-[-0.02em] text-foreground"
            style={{ textShadow: "0 1px 24px hsl(41 52% 92% / 0.6)" }}
          >
            Trail de Nuces 2027
          </h1>
          <p
            className="max-w-[560px] text-xl leading-7 text-foreground/70"
            style={{ textShadow: "0 1px 12px hsl(41 52% 92% / 0.5)" }}
          >
            Dimanche 25 avril 2027 · Nuces, Aveyron.
            <br className="hidden sm:block" />
            Trois courses et une rando sur les chemins du vallon.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <Link
              to="/inscription"
              className="inline-flex items-center min-h-[48px] px-7 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-px active:translate-y-0 transition-all duration-200"
            >
              S'inscrire
            </Link>
            <a
              href="#courses"
              className="inline-flex items-center min-h-[48px] px-7 bg-white/90 text-primary font-semibold rounded-lg border border-border backdrop-blur-sm hover:bg-white active:bg-white/80 transition-all duration-200"
            >
              Voir les courses
            </a>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="max-w-[1184px] mx-auto px-6 sm:px-8 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <h2 className="text-[32px] leading-[38px] font-bold text-foreground">
            Les courses
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {courses.map((course) => (
            <article
              key={course.distance}
              className={`flex flex-col gap-6 p-6 rounded-lg transition-all duration-200 hover:-translate-y-1 ${
                course.featured
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/15 hover:shadow-xl hover:shadow-primary/25"
                  : course.isRando
                  ? "bg-accent hover:shadow-lg hover:shadow-foreground/5"
                  : "bg-card border border-border hover:shadow-lg hover:shadow-foreground/5"
              }`}
            >
              <div className="flex flex-col items-start gap-4">
                <span
                  className={`px-3 py-1 text-xs font-semibold tracking-[0.06em] uppercase rounded-full ${
                    course.featured
                      ? "bg-secondary text-primary"
                      : course.isRando
                      ? "bg-white text-primary"
                      : "bg-secondary text-primary"
                  }`}
                >
                  {course.tag}
                </span>
                <h3 className="leading-none tracking-[-0.03em]">
                  <span className="text-[44px] sm:text-[56px] font-bold">
                    {course.distance.split(" ")[0]}
                  </span>
                  <span className="text-[28px] sm:text-[34px] font-medium ml-1 opacity-70">
                    {course.distance.split(" ")[1]}
                  </span>
                </h3>
              </div>

              <dl
                className={`flex flex-col border-t ${
                  course.featured ? "border-primary-foreground/20" : "border-border"
                }`}
              >
                {[
                  { label: course.isRando ? "Format" : "Dénivelé", value: course.elevation },
                  { label: "Départ", value: course.depart },
                  { label: "Tarif", value: course.price },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex justify-between gap-4 py-3 border-b ${
                      course.featured ? "border-primary-foreground/20" : "border-border"
                    }`}
                  >
                    <dt
                      className={`text-[11px] font-medium tracking-[0.06em] uppercase leading-6 ${
                        course.featured ? "text-primary-foreground/70" : "text-muted-foreground"
                      }`}
                    >
                      {item.label}
                    </dt>
                    <dd className="font-semibold tabular-nums">{item.value}</dd>
                  </div>
                ))}
              </dl>

              <Link
                to={course.href}
                className={`inline-flex items-center justify-center min-h-[48px] mt-auto px-4 text-[15px] font-semibold rounded-lg transition-all duration-200 active:scale-[0.98] ${
                  course.featured
                    ? "bg-white text-primary hover:bg-white/90 shadow-sm"
                    : course.isRando
                    ? "bg-white text-primary border border-border hover:bg-background shadow-sm"
                    : "bg-primary text-primary-foreground hover:shadow-md hover:shadow-primary/20"
                }`}
              >
                {course.btnLabel}
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Infos pratiques */}
      <section id="infos" className="max-w-[1184px] mx-auto px-6 sm:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 py-10 border-t border-b border-border">
          {[
            {
              icon: Calendar,
              label: "Date",
              value: "Dimanche 25 avril 2027",
              detail: "Retrait des dossards dès 8h30.",
            },
            {
              icon: MapPin,
              label: "Lieu",
              value: "Nuces, Valady",
              detail: "Aveyron (12), Occitanie.",
            },
            {
              icon: UtensilsCrossed,
              label: "Repas",
              value: "Sur place",
              detail: "Sur pré-commande à l'inscription.",
            },
          ].map((info) => (
            <div key={info.label} className="flex flex-col gap-2">
              <info.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <p className="text-[11px] font-semibold tracking-[0.06em] uppercase text-muted-foreground mt-1">
                {info.label}
              </p>
              <p className="text-2xl font-semibold text-foreground leading-snug">{info.value}</p>
              <p className="text-muted-foreground leading-relaxed">{info.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-[1184px] mx-auto px-6 sm:px-8 py-20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          <div className="flex flex-col gap-3 max-w-[640px]">
            <h2 className="text-[clamp(28px,4vw,48px)] leading-[1.1] font-bold">
              Prends le départ à Nuces
            </h2>
            <p className="text-lg leading-7 text-primary-foreground/70">
              17 km · 10 km · 5 km · Rando 9 km. Inscription en ligne.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/inscription"
              className="inline-flex items-center min-h-[48px] px-7 bg-white text-primary font-semibold rounded-lg shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-px active:translate-y-0 transition-all duration-200"
            >
              S'inscrire
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center min-h-[48px] px-7 text-primary-foreground font-semibold rounded-lg border border-primary-foreground/50 hover:bg-primary-foreground/10 active:bg-primary-foreground/5 transition-all duration-200"
            >
              Devenir bénévole
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
