import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useState } from "react";

const navLinks = [
  { to: "/parcours", label: "Courses" },
  { to: "/randonnee", label: "Randonnée" },
  { to: "/resultats", label: "Résultats" },
  { to: "/partenaires", label: "Partenaires" },
  { to: "/contact", label: "Contact" },
];

const externalLinks = [
  { href: "https://photos.traildenuces.fr", label: "Photos" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2 min-h-[44px]">
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 19 L9.5 7 L13.5 14 L16 10.5 L21 19 Z" />
          </svg>
          <span className="text-xl font-bold text-foreground">
            Trail de Nuces
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="inline-flex items-center min-h-[44px] px-3 text-foreground font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          {externalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-[44px] px-3 text-foreground font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/inscription"
            className="inline-flex items-center min-h-[44px] px-4 ml-2 bg-primary text-primary-foreground font-semibold rounded-lg shadow-sm shadow-primary/15 hover:shadow-md hover:shadow-primary/25 hover:-translate-y-px active:translate-y-0 transition-all duration-200"
          >
            S'inscrire
          </Link>
        </div>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden p-2" aria-label="Menu">
            <Menu className="h-6 w-6 text-foreground" />
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetTitle className="text-xl font-bold mb-6">Menu</SheetTitle>
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="text-foreground font-medium hover:text-primary transition-colors py-3 px-2 rounded-md hover:bg-muted/50"
                >
                  {link.label}
                </Link>
              ))}
              {externalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="text-foreground font-medium hover:text-primary transition-colors py-3 px-2 rounded-md hover:bg-muted/50"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/inscription"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center min-h-[44px] mt-4 px-4 bg-primary text-primary-foreground font-semibold rounded-lg"
              >
                S'inscrire
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
