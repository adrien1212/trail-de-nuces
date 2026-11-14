import { MapPin, Calendar, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-trail.jpg";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const courses = [
  {
    tag: "Trail",
    distance: "17 km",
    elevation: "+500 m",
    depart: "10 h 00",
    price: "15 €",
    href: "/parcours",
    btnLabel: "S'inscrire au 17 km",
    bg: "#4B2E6F",
    lightText: true,
  },
  {
    tag: "Trail",
    distance: "10 km",
    elevation: "+300 m",
    depart: "10 h 30",
    price: "12 €",
    href: "/parcours",
    btnLabel: "S'inscrire au 10 km",
    bg: "#6B4A7A",
    lightText: true,
  },
  {
    tag: "Trail",
    distance: "5 km",
    elevation: "+100 m",
    depart: "11 h 00",
    price: "10 €",
    href: "/parcours",
    btnLabel: "S'inscrire au 5 km",
    bg: "#8B6A5E",
    lightText: true,
  },
  {
    tag: "Randonnée",
    distance: "9 km",
    elevation: "Marche, sans chrono",
    depart: "9 h 30",
    price: "5 €",
    isRando: true,
    href: "/randonnee",
    btnLabel: "S'inscrire à la rando",
    bg: "#E8D8BE",
    lightText: false,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Sentiers de Nuces — coureurs sur les chemins du vallon"
          className="absolute inset-0 w-full h-full object-cover object-bottom hero-pastel"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

        <div className="relative flex flex-col items-start gap-5 px-6 sm:px-8 pb-16 pt-48 max-w-[1184px] mx-auto w-full animate-hero-enter">
          <h1
            className="text-[clamp(44px,6vw,80px)] leading-[1.05] font-bold tracking-[-0.02em] text-foreground"
            style={{ textShadow: "0 1px 24px hsl(41 52% 92% / 0.6)" }}
          >
            Trail de Nuces 2027
          </h1>
          <p
            className="text-xl leading-7 text-foreground/70 font-medium tracking-wide"
            style={{ textShadow: "0 1px 12px hsl(41 52% 92% / 0.5)" }}
          >
            5 / 10 / 17 km · +rando
          </p>
          <span className="inline-flex items-center gap-3 min-h-[60px] px-7 mt-2 bg-primary text-primary-foreground font-semibold text-xl rounded-xl">
            <Calendar className="h-5 w-5" strokeWidth={1.5} />
            Dimanche 25 avril 2027
          </span>
          <div className="flex gap-3">
            <Link
              to="/resultats"
              className="inline-flex items-center min-h-[44px] px-5 bg-white/90 text-foreground font-semibold rounded-lg border border-border backdrop-blur-sm hover:bg-white active:bg-white/80 transition-all duration-200"
            >
              Résultats 2026
            </Link>
            <a
              href="https://photos.traildenuces.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-[44px] px-5 bg-white/90 text-foreground font-semibold rounded-lg border border-border backdrop-blur-sm hover:bg-white active:bg-white/80 transition-all duration-200"
            >
              Photos 2026
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
              style={{ backgroundColor: course.bg }}
              className={`flex flex-col gap-6 p-6 rounded-lg transition-all duration-200 hover:-translate-y-1 ${
                course.lightText
                  ? "text-white shadow-lg hover:shadow-xl"
                  : "hover:shadow-lg hover:shadow-foreground/5"
              }`}
            >
              <div className="flex flex-col items-start gap-4">
                <span
                  className={`px-3 py-1 text-xs font-semibold tracking-[0.06em] uppercase rounded-full ${
                    course.lightText
                      ? "bg-white/20 text-white"
                      : "bg-primary text-primary-foreground"
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
                  course.lightText ? "border-white/15" : "border-foreground/10"
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
                      course.lightText ? "border-white/15" : "border-foreground/10"
                    }`}
                  >
                    <dt
                      className={`text-[11px] font-medium tracking-[0.06em] uppercase leading-6 ${
                        course.lightText ? "text-white/60" : "text-muted-foreground"
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
                  course.lightText
                    ? "bg-white text-primary hover:bg-white/90 shadow-sm"
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
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <h2 className="text-[32px] leading-[38px] font-bold text-foreground">
            Infos pratiques 
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 py-10 border-t border-b border-border">
          {[
            {
              icon: Calendar,
              label: "Date",
              value: "Dimanche 25 avril 2027",
              detail: "Retrait des dossards dès 8h00.",
            },
            {
              icon: MapPin,
              label: "Lieu",
              value: "Nuces, 12330 Valady",
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
      <section className="max-w-[1184px] mx-auto px-6 sm:px-8 pb-20">
       <div className="bg-primary text-primary-foreground relative overflow-hidden rounded-2xl">
        <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute left-1/3 -top-20 w-60 h-60 rounded-full bg-secondary/15 pointer-events-none" />
        <div className="relative px-8 sm:px-12 py-16 flex flex-col gap-6">
          <h2 className="text-[clamp(28px,4vw,48px)] leading-[1.1] font-bold tracking-tight">
            Prends le départ à Nuces
          </h2>
          <p className="text-lg leading-7 text-primary-foreground/70 max-w-xl">
            17 km · 10 km · 5 km · Rando 9 km. Inscription en ligne ouverte à tous.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              to="/inscription"
              className="inline-flex items-center h-12 px-7 bg-white text-primary font-semibold rounded-lg shadow-sm hover:bg-secondary transition-colors"
            >
              S'inscrire en ligne
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-5 pt-1 text-primary-foreground/50 text-sm font-medium">
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
              Dotation locale pour chaque finisher
            </span>
          </div>
        </div>
       </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
