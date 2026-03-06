import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export default function InscriptionBtn() {
    return (
        <Button size="lg" className="font-display text-lg tracking-wider px-10 py-6" asChild>
            <a href="https://chronometrage.com/events/traildenuces?preview=1771354" target="_blank" rel="noopener noreferrer">
                S'INSCRIRE (26/04) <ExternalLink className="ml-2 h-5 w-5" />
            </a>
        </Button>
    )
}