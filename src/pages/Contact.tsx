import { Mountain, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const Contact = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Navigation */}
            <NavBar />

            <main className="pt-32 pb-24 px-4 flex-1">
                <div className="container mx-auto max-w-2xl text-center">
                    {/* Title */}
                    <h1 className="font-display text-5xl md:text-7xl text-foreground mb-8">
                        Contact
                    </h1>

                    {/* Intro */}
                    <p className="text-muted-foreground font-body text-lg leading-relaxed mb-10">
                        Une question sur le Trail de Nuces ?
                        N’hésitez pas à nous contacter via les moyens ci-dessous.
                    </p>

                    {/* Contact Info */}
                    <div className="space-y-6 text-lg font-body">
                        {/* Email */}
                        <div>
                            <p className="text-foreground font-semibold mb-1">
                                Adresse email
                            </p>
                            <a
                                href="mailto:comitedesfetesnuces12330@gmail.com"
                                className="text-primary underline hover:text-primary/80"
                            >
                                comitedesfetesnuces12330@gmail.com
                            </a>
                        </div>

                        {/* Instagram */}
                        <div>
                            <p className="text-foreground font-semibold mb-1">
                                Instagram
                            </p>
                            <a
                                href="https://instagram.com/comitedenuces"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary underline hover:text-primary/80"
                            >
                                @comitedenuces
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Contact;

