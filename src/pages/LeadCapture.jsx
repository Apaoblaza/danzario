+127
-0

import Footer from "../components/Footer";
import { Link } from "../lib/router";

export default function LeadCapture() {
  const formEmbedUrl = import.meta.env.VITE_LEAD_FORM_EMBED_URL ?? "";
  const shareUrlFromEnv = import.meta.env.VITE_LEAD_FORM_SHARE_URL ?? "";

  const shareFormUrl = (() => {
    if (shareUrlFromEnv) return shareUrlFromEnv;
    if (!formEmbedUrl) return "";
    if (formEmbedUrl.includes("viewform?embedded=true")) {
      return formEmbedUrl.replace("viewform?embedded=true", "viewform");
    }
    return formEmbedUrl;
  })();

  const hasEmbedConfigured = Boolean(formEmbedUrl);

  return (
    <div className="min-h-screen bg-background text-ink flex flex-col">
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-line">
        <div className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
          <Link to="/" className="text-xl tracking-wide text-brand font-fancy">
            Danzario
          </Link>
          <Link
            to="/comprar"
            className="rounded-xl px-4 py-2 text-sm font-semibold bg-brand text-white hover:bg-brand-dark transition"
          >
            Ir a comprar
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-4 grid lg:grid-cols-[1.05fr,0.95fr] gap-12 items-start">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-ink-soft bg-brand/10 rounded-full px-3 py-1 mb-4">
                <span>Lista exclusiva</span>
                <span className="w-1 h-1 rounded-full bg-ink/40" />
                <span>Acceso anticipado</span>
              </span>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                Sé parte de la primera generación de bailarinas que viven con un Danzario.
              </h1>
              <p className="mt-6 text-lg text-ink-soft">
                Comparte tus datos y recibe antes que nadie las novedades, lanzamientos especiales y oportunidades
                para conseguir tu Danzario con beneficios exclusivos.
              </p>
              <div className="mt-8 space-y-3 text-ink-soft">
                <div className="flex items-start gap-3">
                  <span className="mt-1">✨</span>
                  <p className="leading-relaxed">Acceso prioritario a reposiciones y ediciones limitadas.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1">🎁</span>
                  <p className="leading-relaxed">Beneficios y descuentos solo para la comunidad de lanzamiento.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1">🩰</span>
                  <p className="leading-relaxed">Recursos gratuitos para acompañar tu práctica y crecimiento.</p>
                </div>
              </div>

              <div className="mt-12 space-y-4 rounded-2xl border border-line bg-white/80 p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-ink">¿Cómo reviso la lista de correos?</h2>
                <p className="text-sm leading-relaxed text-ink-soft">
                  Cada respuesta se guarda automáticamente en la hoja de cálculo conectada a tu formulario de Google.
                  Desde tu cuenta puedes ir a <strong>Respuestas → Ver en Hojas de cálculo</strong> para descargar o
                  compartir la base sin depender de la aplicación.
                </p>
                <p className="text-sm leading-relaxed text-ink-soft">
                  Si necesitas recibir notificaciones por correo, activa las alertas de Google Forms para mantenerte al día
                  con nuevas suscripciones.
                </p>
              </div>
            </div>

            <div className="card p-0 shadow-soft border border-line/60 bg-white overflow-hidden">
              {hasEmbedConfigured ? (
                <iframe
                  src={formEmbedUrl}
                  title="Formulario de registro"
                  className="w-full min-h-[760px]"
                  allowFullScreen
                  loading="lazy"
                >
                  Cargando…
                </iframe>
              ) : (
                <div className="space-y-4 p-6">
                  <h2 className="text-2xl font-semibold text-ink">Conecta tu formulario</h2>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    Agrega la variable <code className="font-mono text-xs bg-background px-1 py-0.5 rounded">VITE_LEAD_FORM_EMBED_URL</code>
                    en tu archivo <code className="font-mono text-xs bg-background px-1 py-0.5 rounded">.env</code> con el enlace de inserción que
                    entrega Google Forms. Así el formulario quedará incrustado en esta página y cada registro irá a tu Google Sheets.
                  </p>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    En Google Forms ve a <strong>Enviar → &lt;&gt;</strong>, copia la URL dentro del campo "Incrustar HTML" y
                    pégala como valor de la variable. Luego reinicia <code className="font-mono text-xs bg-background px-1 py-0.5 rounded">npm run dev</code>.
                  </p>
                </div>
              )}

              {shareFormUrl && (
                <div className="border-t border-line bg-background/60 px-6 py-4 flex flex-wrap items-center gap-3">
                  <span className="text-sm text-ink-soft">¿Prefieres abrirlo aparte?</span>
                  <a
                    href={shareFormUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark transition"
                  >
                    Abrir en Google Forms
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}