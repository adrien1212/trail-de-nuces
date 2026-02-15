import { Mountain } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="container mx-auto flex items-center justify-between py-3 px-4">
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center gap-2">
                        <Mountain className="h-6 w-6 text-primary" />
                        <span className="font-display text-2xl tracking-wider text-foreground">
                            TRAIL DE NUCES
                        </span>
                    </Link>
                </div>
                <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium text-muted-foreground">
                    <Link to="/parcours" className="hover:text-foreground transition-colors">Les parcours</Link>
                    <Link to="/inscription" className="hover:text-foreground transition-colors">Inscription</Link>
                    <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
                </div>
            </div>
        </nav>

    )
}