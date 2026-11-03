// import { ExternalLink } from "lucide-react";
// import { Button } from "./ui/button";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export default function InscriptionBtn({ className }: { className?: string }) {
    return (
        // <Button size="lg" className="font-display text-lg tracking-wider px-10 py-6" asChild>
        //     <a href="https://chronometrage.com/events/traildenuces?preview=1771354" target="_blank" rel="noopener noreferrer">
        //         S'INSCRIRE (26/04) <ExternalLink className="ml-2 h-5 w-5" />
        //     </a>
        // </Button>
        <span className={cn("inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground font-display text-lg tracking-wider px-10 py-3", className)}>
            <Calendar className="mr-2 h-5 w-5" /> Dimanche 25 avril 2027
        </span>
    )
}
