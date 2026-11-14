import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavBar />

      <main className="pt-32 pb-24 px-8 flex-1">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.04em] uppercase text-primary opacity-80 mb-2">
            Trail de Nuces
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Contact
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Une question sur le Trail de Nuces ?
            N’hésitez pas à nous contacter via les moyens ci-dessous.
          </p>

          <div className="space-y-6 text-lg">
            <div>
              <p className="text-foreground font-semibold mb-1">
                Adresse email
              </p>
              <a
                href="mailto:comitedesfetesnuces12330@gmail.com"
                className="text-primary underline hover:opacity-80"
              >
                comitedesfetesnuces12330@gmail.com
              </a>
            </div>

            <div>
              <p className="text-foreground font-semibold mb-1">
                Instagram
              </p>
              <a
                href="https://instagram.com/comitedenuces"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:opacity-80"
              >
                @comitedenuces
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

