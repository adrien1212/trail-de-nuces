import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/parcours", label: "Courses" },
  { to: "/randonnee", label: "Randonnée" },
  { to: "/inscription", label: "Inscription" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border" style={{ backgroundColor: "rgb(234, 223, 200)" }}>
      <div className="max-w-[1184px] mx-auto px-6 sm:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-border">
          {/* Branding */}
          <div className="flex flex-col gap-3">
            <Link to="/" className="flex items-center gap-2">
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 19 L9.5 7 L13.5 14 L16 10.5 L21 19 Z" />
              </svg>
              <span className="text-lg font-bold text-foreground">Trail de Nuces</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Édition 2027 au cœur de la commune de Valady. Événement sportif et convivial.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.08em] uppercase text-muted-foreground mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organisation */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.08em] uppercase text-muted-foreground mb-4">
              Organisation
            </h3>
            <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
              <p>Comité des fêtes de Nuces</p>
              <p>Nuces</p>
              <p>12330 VALADY</p>
              <a
                href="mailto:comitedesfetesnuces12330@gmail.com"
                className="text-primary hover:underline mt-2"
              >
                comitedesfetesnuces12330@gmail.com
              </a>
            </div>
          </div>

          {/* Suivez-nous */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.08em] uppercase text-muted-foreground mb-4">
              Suivez-nous
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Restez informés de l'ouverture des inscriptions et de l'actualité du trail.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/comitedenuces"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a
                href="mailto:comitedesfetesnuces12330@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2027 Trail de Nuces. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
