import type React from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

/**
 * Liste des partenaires.
 * - logo : chemin d'un fichier placé dans /public/sponsors (ex: "/sponsors/boulangerie.png").
 *          Sans logo, le nom est affiché à la place.
 * - tier : taille de la tuile dans le collage ("or" = grande, "argent" = large, "bronze" = petite).
 * - url  : site du partenaire (optionnel).
 */
type Tier = "or" | "argent" | "bronze";

type Sponsor = {
  name: string;
  tier: Tier;
  logo?: string;
  url?: string;
};

const sponsors: Sponsor[] = [
  { name: "Partenaire 1", tier: "or" },
  { name: "Partenaire 2", tier: "argent" },
  { name: "Partenaire 3", tier: "bronze" },
  { name: "Partenaire 4", tier: "bronze" },
  { name: "Partenaire 5", tier: "argent" },
  { name: "Partenaire 6", tier: "or" },
  { name: "Partenaire 7", tier: "bronze" },
  { name: "Partenaire 8", tier: "bronze" },
  { name: "Partenaire 9", tier: "argent" },
  { name: "Partenaire 10", tier: "bronze" },
  { name: "Partenaire 11", tier: "bronze" },
  { name: "Partenaire 12", tier: "argent" },
  { name: "Partenaire 13", tier: "bronze" },
  { name: "Partenaire 14", tier: "bronze" },
];

// Taille de chaque tuile dans la grille
const tierSpan: Record<Tier, string> = {
  or: "col-span-2 row-span-2",
  argent: "col-span-2 row-span-1",
  bronze: "col-span-1 row-span-1",
};

const tierText: Record<Tier, string> = {
  or: "text-3xl md:text-4xl",
  argent: "text-2xl",
  bronze: "text-lg",
};

// Taille d'un partenaire en nombre de cases d'un module 2×2
const tierCells: Record<Tier, number> = { or: 4, argent: 2, bronze: 1 };

type Module = { items: Sponsor[]; empty: number };

/**
 * Regroupe les partenaires en modules carrés 2×2 de même taille :
 * 1 « or » = 2 « argent » = 4 « bronze ».
 * Les modules « or » sont répartis en diagonale pour équilibrer la page.
 */
function buildModules(list: Sponsor[]): Module[] {
  const golds = list.filter((s) => s.tier === "or");
  const silvers = list.filter((s) => s.tier === "argent");
  const bronzes = list.filter((s) => s.tier === "bronze");

  const silverModules: Module[] = [];
  while (silvers.length >= 2) silverModules.push({ items: silvers.splice(0, 2), empty: 0 });

  const bronzeModules: Module[] = [];
  while (bronzes.length >= 4) bronzeModules.push({ items: bronzes.splice(0, 4), empty: 0 });

  // Restes (1 argent et/ou 1 à 3 bronze) : on complète un module, les cases vides deviennent « Votre logo ici »
  const leftovers: Module[] = [];
  let current: Module = { items: [], empty: 4 };
  for (const s of [...silvers, ...bronzes]) {
    if (tierCells[s.tier] > current.empty) {
      leftovers.push(current);
      current = { items: [], empty: 4 };
    }
    current.items.push(s);
    current.empty -= tierCells[s.tier];
  }
  if (current.items.length) leftovers.push(current);

  // Alterne modules « argent » et « bronze »
  const others: Module[] = [];
  for (let i = 0; i < Math.max(silverModules.length, bronzeModules.length); i++) {
    if (silverModules[i]) others.push(silverModules[i]);
    if (bronzeModules[i]) others.push(bronzeModules[i]);
  }

  // Insère les modules « or » en diagonale (début de ligne, puis fin de ligne, etc.)
  const result = [...others];
  const step = Math.max(1, Math.round((others.length + golds.length) / Math.max(1, golds.length)));
  golds.forEach((g, k) => {
    const pos = k % 2 === 0 ? k * step : k * step + step - 1;
    result.splice(Math.min(pos, result.length), 0, { items: [g], empty: 0 });
  });

  return [...result, ...leftovers];
}

// "Désordre ordonné" : décalages verticaux fixes par module (pas aléatoires, pour un rendu stable)
const offsets = [0, 14, -10, 8, -14, 12, -6, 16, -12];

const Partenaires = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavBar />

      <main className="pt-32 pb-24 px-4 flex-1 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          {/* En-tête */}
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.04em] uppercase text-primary opacity-80 mb-2">
              Trail de Nuces
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nos partenaires
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Le Trail de Nuces existe grâce à eux. Merci à toutes les entreprises,
              commerces et associations qui soutiennent l'événement.
            </p>
          </div>

          {/* Collage des logos : modules 2×2 de même taille */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 py-6">
            {buildModules(sponsors).map((module, m) => (
              <div
                key={m}
                className="grid grid-cols-2 auto-rows-[110px] sm:auto-rows-[130px] gap-5 md:gap-8 transition-transform [transform:translateY(var(--y))]"
                style={{ "--y": `${offsets[m % offsets.length]}px` } as React.CSSProperties}
              >
                {module.items.map((sponsor, i) => {
                  const Tag = sponsor.url ? "a" : "div";
                  return (
                    <div
                      key={sponsor.name}
                      className={`${tierSpan[sponsor.tier]} relative hover:z-10 animate-fade-up`}
                      style={{ animationDelay: `${(m * 4 + i) * 50}ms`, animationFillMode: "both" }}
                    >
                      <Tag
                        {...(sponsor.url
                          ? { href: sponsor.url, target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="flex h-full w-full items-center justify-center rounded-2xl border border-border bg-card p-4 md:p-6 shadow-md transition-[transform,box-shadow] duration-300 ease-out hover:scale-105 hover:shadow-2xl"
                        title={sponsor.name}
                      >
                        {sponsor.logo ? (
                          <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            loading="lazy"
                            className="max-h-full max-w-full object-contain"
                          />
                        ) : (
                          <span
                            className={`font-bold ${tierText[sponsor.tier]} text-center text-foreground/70 leading-tight`}
                          >
                            {sponsor.name}
                          </span>
                        )}
                      </Tag>
                    </div>
                  );
                })}
                {Array.from({ length: module.empty }).map((_, i) => (
                  <a
                    key={`empty-${i}`}
                    href="#devenir-partenaire"
                    className="flex items-center justify-center rounded-2xl border-2 border-dashed border-border p-4 text-center font-body text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary animate-fade-up"
                    style={{ animationFillMode: "both" }}
                  >
                    Votre logo ici
                  </a>
                ))}
              </div>
            ))}
          </div>

          {/* Appel à devenir partenaire */}
          <div id="devenir-partenaire" className="mt-24 scroll-mt-24 rounded-2xl bg-primary/10 border border-primary/20 p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Devenir partenaire
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Vous souhaitez soutenir le Trail de Nuces et associer votre image à un
              événement sportif local ? Contactez-nous.
            </p>
            <Button asChild size="lg">
              <a href="mailto:comitedesfetesnuces12330@gmail.com">
                <Mail /> Nous contacter
              </a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Partenaires;
