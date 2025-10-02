export default function Footer() {
  return (
    <footer id="contacto" className="py-10 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ink-soft">
        <div className="text-brand font-fancy text-xl">Danzario</div>
        <div className="flex flex-wrap items-center gap-4">
          <a href="mailto:hola@danzario.cl" className="hover:text-brand">hola@danzario.cl</a>
          <span>•</span>
          <a href="https://wa.me/56999999999" className="hover:text-brand">WhatsApp</a>
          <span>•</span>
          <span>© 2025</span>
        </div>
      </div>
    </footer>
  );
}
