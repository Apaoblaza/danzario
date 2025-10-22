+127
-0

import Footer from "../components/Footer";
import { Link } from "../lib/router";

const paymentOptions = [
  {
    title: "Pago inmediato",
    description: "Paga en línea con tarjeta de débito o crédito (hasta 3 cuotas sin interés).",
    icon: "💳",
  },
  {
    title: "Transferencia bancaria",
    description: "Recibe los datos de nuestra cuenta y confirma tu pedido en minutos.",
    icon: "🏦",
  },
  {
    title: "Retiro en estudio",
    description: "Coordina la entrega en Santiago y recibe asesoría personalizada.",
    icon: "🤝",
  },
];

export default function Checkout() {
  return (
    <div className="min-h-screen bg-background text-ink flex flex-col">
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-line">
        <div className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
          <Link to="/" className="text-xl tracking-wide text-brand font-fancy">
            Danzario
          </Link>
          <Link
            to="/interesados"
            className="rounded-xl px-4 py-2 text-sm font-semibold border border-brand text-brand hover:bg-brand/10 transition"
          >
            Lista prioritaria
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-4 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                  Estás a un paso de vivir la experiencia Danzario.
                </h1>
                <p className="mt-6 text-lg text-ink-soft">
                  Elige el medio de pago que prefieras y recibe un acompañamiento personalizado para asegurar que tu Danzario llegue a tus manos en perfectas condiciones.
                </p>
              </div>

              <div className="grid gap-4">
                {paymentOptions.map((option) => (
                  <div key={option.title} className="card p-5 flex items-start gap-4">
                    <div className="text-2xl">{option.icon}</div>
                    <div>
                      <h2 className="text-lg font-semibold">{option.title}</h2>
                      <p className="text-sm text-ink-soft leading-relaxed">{option.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card p-5 border border-brand/40 bg-brand/5">
                <h3 className="text-lg font-semibold text-brand">¿Quieres comprar para tu academia?</h3>
                <p className="mt-2 text-sm text-ink-soft">
                  Ofrecemos condiciones especiales para compras por volumen y personalización con el nombre de tus alumnas. Escríbenos y diseñemos juntas la experiencia ideal.
                </p>
              </div>
            </div>

            <div className="card p-6 shadow-soft border border-line/60 bg-white">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm text-ink-soft">Precio</div>
                  <div className="text-3xl font-extrabold text-brand">$49.990</div>
                </div>
                <div className="text-xs text-ink-soft">Incluye IVA</div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Selecciona tu versión</label>
                  <select className="w-full border border-line rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand">
                    <option>Versión Clásica</option>
                    <option>Versión Coleccionista</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Cantidad</label>
                  <input
                    type="number"
                    min={1}
                    defaultValue={1}
                    className="w-full border border-line rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
                  />
                </div>

                <a
                  href="https://wa.me/56999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center rounded-xl px-5 py-3 font-semibold bg-brand text-white hover:bg-brand-dark transition"
                >
                  Coordinar mi compra por WhatsApp
                </a>
                <a
                  href="mailto:hola@danzario.cl"
                  className="block text-center rounded-xl px-5 py-3 font-semibold border border-line text-ink hover:bg-background transition"
                >
                  Prefiero que me contacten por correo
                </a>

                <p className="text-xs text-ink-soft text-center">
                  Respondemos en menos de 24 horas hábiles. Te guiaremos paso a paso para concretar tu pedido.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}