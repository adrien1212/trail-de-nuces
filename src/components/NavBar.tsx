import { Menu, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useState, useRef, useEffect } from "react";

const navLinks = [
  { to: "/parcours", label: "Courses" },
  { to: "/randonnee", label: "Randonnée" },
  //{ to: "/partenaires", label: "Partenaires" },
  { to: "/contact", label: "Contact" },
];

const edition2026 = [
  { to: "/parcours-2026", label: "Parcours 2026" },
  { to: "/randonnee-2026", label: "Randonnée 2026" },
  { to: "/resultats-2026", label: "Résultats 2026" },
  { href: "https://photos.traildenuces.fr", label: "Photos 2026", external: true },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileEditionOpen, setMobileEditionOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

          {/* Édition 2026 dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="inline-flex items-center gap-1 min-h-[44px] px-3 text-foreground font-medium hover:text-primary transition-colors"
            >
              Édition 2026
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full right-0 mt-1 w-48 bg-card rounded-lg border border-border shadow-lg py-1">
                {edition2026.map((item) =>
                  item.external ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2.5 text-foreground font-medium hover:bg-muted/50 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      to={item.to!}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2.5 text-foreground font-medium hover:bg-muted/50 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>
            )}
          </div>

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

              {/* Mobile Édition 2026 accordion */}
              <button
                onClick={() => setMobileEditionOpen(!mobileEditionOpen)}
                className="flex items-center justify-between text-foreground font-medium hover:text-primary transition-colors py-3 px-2 rounded-md hover:bg-muted/50"
              >
                Édition 2026
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileEditionOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileEditionOpen && (
                <div className="flex flex-col gap-1 pl-4">
                  {edition2026.map((item) =>
                    item.external ? (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className="text-muted-foreground font-medium hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-muted/50"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.label}
                        to={item.to!}
                        onClick={() => setOpen(false)}
                        className="text-muted-foreground font-medium hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-muted/50"
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              )}

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
