import danzario from "../assets/img/Danzario_Portada.jpeg"
import stickers from "../assets/img/Stickers.jpeg"
import esquela1 from "../assets/img/Esquela_Flores.jpeg"
import esquela2 from "../assets/img/Esquela_Swan.jpeg"
import { Link } from "../lib/router"

export default function Hero() {
  return (
    <section id="top" className="bg-gradient-to-b from-background to-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-medium text-ink-soft bg-brand.soft rounded-full px-3 py-1 mb-4">
            <span>NUEVO</span><span className="w-1 h-1 rounded-full bg-ink/40" /><span>Stock limitado</span>
          </div>
          <h1 className="text-5xl md:text-6xl leading-tight">
            <span className="font-fancy text-ink">Danzario:</span>{" "}
            <span className="block text-brand text-3xl md:text-4xl font-extrabold mt-2">
              Tu historia es real, está aquí.
            </span>
          </h1>
          <p className="mt-4 text-ink-soft text-lg">
            Un espacio creado especialmente para bailarinas, donde cada logro y recuerdo encuentra un lugar seguro, bello y duradero.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#comprar" className="rounded-xl px-5 py-3 font-semibold bg-brand text-white hover:bg-brand-dark transition text-center">
              Quiero mi Danzario
            </a>
            <a href="#producto" className="rounded-xl px-5 py-3 font-semibold border border-line text-ink hover:bg-background transition text-center">
              Ver detalles
            </a>
            <Link
              to="/interesados"
              className="rounded-xl px-5 py-3 font-semibold border border-brand text-brand hover:bg-brand/10 transition text-center"
            >
              Unirme a la lista prioritaria
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-ink-soft">
            <div className="flex items-center gap-2"><span>🚚</span> Envío a todo Chile</div>
            <div className="flex items-center gap-2"><span>↩️</span> 10 días de devolución</div>
            <div className="flex items-center gap-2"><span>🔒</span> Pago seguro</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="card overflow-hidden"><img src={danzario} alt="Stickers" className="w-full h-full object-cover" /></div>
          <div className="card overflow-hidden translate-y-6"><img src={stickers} alt="Bailarina" className="w-full h-full object-cover" /></div>
          <div className="card overflow-hidden -translate-y-6"><img src={esquela1} alt="Interior" className="w-full h-full object-cover" /></div>
          <div className="card overflow-hidden"><img src={esquela2} alt="Portada" className="w-full h-full object-cover" /></div>
        </div>
      </div>
    </section>
  );
}