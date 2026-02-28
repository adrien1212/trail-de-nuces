import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export default function InscriptionBtn() {
    return (
        <Button size="lg" className="font-display text-lg tracking-wider px-10 py-6" asChild>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                S'INSCRIRE <ExternalLink className="ml-2 h-5 w-5" />
            </a>
        </Button>
    )
}