import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const Randonnee = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavBar />

      <main className="pt-32 pb-24 px-4 flex-1">
        <div className="container mx-auto max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Randonnée 2027
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Randonnée en cours de création
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Randonnee;
