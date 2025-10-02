export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden">
      <div className="mx-auto max-w-6xl px-4 pb-safe">
        <div className="m-3 rounded-2xl bg-white/90 backdrop-blur border border-line shadow-soft p-3 flex items-center justify-between gap-3">
          <div>
            <div className="text-xs text-ink-soft">Consigue tu Danzario</div>
            <div className="text-lg font-extrabold text-brand leading-none">$49.990</div>
          </div>
          <a href="#comprar" className="shrink-0 rounded-xl px-5 py-3 font-semibold bg-brand text-white hover:bg-brand-dark transition">
            Comprar
          </a>
        </div>
      </div>
    </div>
  );
}
