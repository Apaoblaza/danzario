import { useRouter } from "../lib/router";

export default function Buy() {
  const { navigate } = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/comprar");
  };

  return (
    <section id="comprar" className="py-16 bg-background md:pb-16 pb-28">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-start">
        <div className="card p-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm text-ink-soft">Precio</div>
              <div className="text-3xl font-extrabold text-brand">$49.990</div>
            </div>
            <div className="text-xs text-ink-soft">Incluye IVA</div>
          </div>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-medium">Selecciona tu opción:</label>
              <select className="mt-1 w-full border border-line rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand">
                <option>Versión Light</option>
                <option>Versión Completa</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Cantidad</label>
              <input type="number" min="1" defaultValue={1} className="mt-1 w-full border border-line rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand" />
            </div>
            <button className="w-full rounded-xl px-5 py-3 font-semibold bg-brand text-white hover:bg-brand-dark transition">
              Quiero concretar mi compra
            </button>
            <p className="text-xs text-ink-soft text-center">🔒 Pago seguro — tarjetas y transferencias</p>
          </form>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Envíos y cambios</h3>
          <p>Danza, experiencia y vida plasmadas en papel.</p>
          <ul className="mt-3 text-ink space-y-2">
            <li>• Páginas de alta calidad.</li>
            <li>• Ilustraciones únicas.</li>
            <li>• Fundas, bolsillos y sobres para los recuerdos más delicados.</li>
            <li>• Ejercicios reflexivos.</li>
            <li>• ¡Stickers y más!</li>
          </ul>
        </div>
      </div>
    </section>
  );
}