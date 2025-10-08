import { Link } from "../lib/router";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-line">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between gap-4">
        <Link to="/" className="text-xl tracking-wide text-brand font-fancy">
          Danzario
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#porque" className="hover:text-brand text-ink">
              ¿Por qué un Danzario?
            </a>
            <a href="#unico" className="hover:text-brand text-ink">
              Lo que lo hace Único
            </a>
            <a href="#producto" className="hover:text-brand text-ink">
              Conócelo
            </a>
            <a href="#creadora" className="hover:text-brand text-ink">
              Sobre la Creadora
            </a>
            <a href="#experiencia" className="hover:text-brand text-ink">
              Vive la Experiencia
            </a>
            <a href="#comprar" className="hover:text-brand text-ink">
              Consigue tu Danzario
            </a>
            <a href="#faq" className="hover:text-brand text-ink">
              FAQ
            </a>
            <a href="#contacto" className="hover:text-brand text-ink">
              Contacto
            </a>
          </nav>
          <Link
            to="/interesados"
            className="hidden md:inline-flex rounded-xl px-4 py-2 text-sm font-semibold bg-brand text-white hover:bg-brand-dark transition"
          >
            Lista prioritaria
          </Link>
          <Link
            to="/interesados"
            className="md:hidden inline-flex rounded-xl px-3 py-2 text-sm font-semibold border border-brand text-brand hover:bg-brand/10 transition"
          >
            Lista prioritaria
          </Link>
        </div>
      </div>
    </header>
  );
}