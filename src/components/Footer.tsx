import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="max-w-[1184px] mx-auto px-6 sm:px-8 py-8 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© 2027 Trail de Nuces · Comité des fêtes de Nuces</p>
      <div className="flex flex-wrap gap-2">
        <Link to="/contact" className="inline-flex items-center min-h-[44px] px-2 text-primary font-medium hover:opacity-80 transition">
          Contact
        </Link>
        <Link to="/partenaires" className="inline-flex items-center min-h-[44px] px-2 text-primary font-medium hover:opacity-80 transition">
          Partenaires
        </Link>
      </div>
    </footer>
  );
}
