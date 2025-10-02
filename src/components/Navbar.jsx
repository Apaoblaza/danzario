export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-line">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <a href="#top" className="text-xl tracking-wide text-brand font-fancy">Danzario</a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#porque" className="hover:text-brand text-ink">¿Por qué un Danzario?</a>
          <a href="#unico" className="hover:text-brand text-ink">Lo que lo hace Único</a>
          <a href="#producto" className="hover:text-brand text-ink">Conócelo</a>
          <a href="#creadora" className="hover:text-brand text-ink">Sobre la Creadora</a>
          <a href="#experiencia" className="hover:text-brand text-ink">Vive la Experiencia</a>
          <a href="#comprar" className="hover:text-brand text-ink">Consigue tu Danzario</a>
          <a href="#faq" className="hover:text-brand text-ink">FAQ</a>
          <a href="#contacto" className="hover:text-brand text-ink">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
