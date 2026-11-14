import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import InscriptionBtn from "@/components/InscriptionBtn";

const Inscription = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavBar />

      <main className="pt-32 pb-24 px-8 flex-1">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.04em] uppercase text-primary opacity-80 mb-2">
            Édition 2027
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Inscription
          </h1>

          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Trail de Nuces — Dimanche 25 avril 2027
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Les inscriptions au Trail de Nuces sont <strong>exclusivement en ligne</strong> ! Choisissez votre distance parmi les 3 parcours proposés : 17 km, 10 km ou 5 km.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            L’inscription se fait via notre plateforme partenaire (1€).
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Restauration sur place possible, à réserver lors de l’inscription.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed mb-10">
            Pour toute question, n’hésitez pas à nous contacter :{" "}
            <a href="mailto:comitedesfetesnuces12330@gmail.com" className="text-primary underline hover:opacity-80">
              comitedesfetesnuces12330@gmail.com
            </a>
          </p>
          <InscriptionBtn />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Inscription;
