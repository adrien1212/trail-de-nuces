import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export default function InscriptionBtn({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground font-semibold text-lg px-6 py-3", className)}>
      <Calendar className="mr-2 h-5 w-5" /> Dimanche 25 avril 2027
    </span>
  );
}
