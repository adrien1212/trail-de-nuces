import { Link, Mountain } from "lucide-react";


export default function Footer() {
    return (
        <footer className="py-10 px-4 border-t border-border bg-card">
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Mountain className="h-5 w-5 text-primary" />
                    <span className="font-display text-lg text-foreground">TRAIL DE NUCES</span>
                </div>
                <p className="text-muted-foreground font-body text-sm">
                    © 2026 Trail de Nuces — Tous droits réservés
                </p>
            </div>
        </footer>
    )
}
