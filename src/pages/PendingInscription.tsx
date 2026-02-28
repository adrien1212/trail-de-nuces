import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";


const PendingInscription = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Navigation */}
            <NavBar />

            <main className="pt-32 pb-24 px-4 flex-1">
                <div className="container mx-auto max-w-2xl text-center">
                    <h1 className="font-display text-5xl md:text-7xl text-foreground mb-8">
                        OUVRENT BIENTOT
                    </h1>
                    <p className="text-muted-foreground font-body text-lg leading-relaxed mb-4">
                        Les inscriptions au Trail de Nuces sont <strong>exclusivement en ligne</strong> et ouvriront sous peu.
                    </p>
                    <br></br>
                    <p className="text-muted-foreground font-body text-base leading-relaxed mb-10">
                        Pour toute question, n'hésitez pas à nous contacter <br />
                        <strong><a href="mailto:comitedesfetesnuces12330@gmail.com">comitedesfetesnuces12330@gmail.com</a></strong>
                    </p>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default PendingInscription;