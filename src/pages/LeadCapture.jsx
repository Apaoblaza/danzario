import { useEffect, useMemo, useState } from "react";
import Footer from "../components/Footer";
import { Link } from "../lib/router";
import { appendLead, loadLeads } from "../lib/leadsStorage";

export default function LeadCapture() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    goal: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [leads, setLeads] = useState([]);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [adminMessage, setAdminMessage] = useState("");

  useEffect(() => {
    setLeads(loadLeads());

    if (typeof window === "undefined") return undefined;

    const handleStorage = () => {
      setLeads(loadLeads());
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Cuéntanos tu nombre";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Necesitamos tu correo electrónico";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Revisa que tu correo esté bien escrito";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      const newLead = {
        ...formData,
        createdAt: new Date().toISOString(),
      };

      const nextLeads = appendLead(newLead);
      setLeads(nextLeads);
      setSubmitted(true);
      setFormData({ name: "", email: "", goal: "" });
    }
  };

  const handleDownloadCsv = () => {
    if (!leads.length) return;

    const header = "Nombre,Correo,Objetivo,Fecha\n";
    const rows = leads
      .map((lead) => {
        const date = new Date(lead.createdAt).toLocaleString("es-CL", {
          dateStyle: "short",
          timeStyle: "short",
        });
        const escape = (value = "") =>
          `"${String(value).replace(/"/g, '""')}"`;
        return [lead.name, lead.email, lead.goal, date].map(escape).join(",");
      })
      .join("\n");

    const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "interesados-danzario.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setAdminMessage("Archivo CSV descargado");
  };

  const handleCopyEmails = async () => {
    if (!leads.length) return;
    const emails = leads.map((lead) => lead.email).join(", ");

    try {
      await navigator.clipboard.writeText(emails);
      setAdminMessage("Correos copiados al portapapeles");
    } catch (error) {
      setAdminMessage("No se pudo copiar. Intenta descargar el CSV.");
    }
  };

  useEffect(() => {
    if (!adminMessage) return;
    const timeout = setTimeout(() => setAdminMessage(""), 4000);
    return () => clearTimeout(timeout);
  }, [adminMessage]);

  const totalLeads = useMemo(() => leads.length, [leads]);

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
          <div className="mx-auto max-w-5xl px-4 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-start">
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
                Comparte tus datos y recibe antes que nadie las novedades, lanzamientos especiales y oportunidades para conseguir tu Danzario con beneficios exclusivos.
              </p>
              <div className="mt-8 space-y-3 text-ink-soft">
                <div className="flex items-start gap-3">
                  <span className="mt-1">✨</span>
                  <p className="leading-relaxed">
                    Acceso prioritario a reposiciones y ediciones limitadas.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1">🎁</span>
                  <p className="leading-relaxed">
                    Beneficios y descuentos solo para la comunidad de lanzamiento.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1">🩰</span>
                  <p className="leading-relaxed">
                    Recursos gratuitos para acompañar tu práctica y crecimiento.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-6 shadow-soft border border-line/60 bg-white">
              {submitted ? (
                <div className="space-y-6 text-center">
                  <div className="text-3xl">💌</div>
                  <h2 className="text-2xl font-semibold">¡Gracias por unirte!</h2>
                  <p className="text-ink-soft">
                    Muy pronto recibirás un correo de bienvenida con el siguiente paso para asegurar tu Danzario.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Link
                      to="/comprar"
                      className="rounded-xl px-5 py-3 font-semibold bg-brand text-white hover:bg-brand-dark transition"
                    >
                      Ir a concretar mi compra
                    </Link>
                    <Link
                      to="/"
                      className="rounded-xl px-5 py-3 font-semibold border border-line text-ink hover:bg-background transition"
                    >
                      Volver al inicio
                    </Link>
                  </div>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nombre completo
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand ${
                        errors.name ? "border-red-400" : "border-line"
                      }`}
                      placeholder="Ej: Ana Poblete"
                      autoComplete="name"
                      required
                    />
                    {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Correo electrónico
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand ${
                        errors.email ? "border-red-400" : "border-line"
                      }`}
                      placeholder="hola@ejemplo.cl"
                      autoComplete="email"
                      required
                    />
                    {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="goal" className="text-sm font-medium">
                      ¿Qué te gustaría lograr con tu Danzario?
                    </label>
                    <textarea
                      id="goal"
                      name="goal"
                      value={formData.goal}
                      onChange={handleChange}
                      className="w-full border border-line rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand min-h-[120px]"
                      placeholder="Cuéntanos en qué etapa de tu danza estás, qué desafíos tienes o qué sueños quieres registrar."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl px-5 py-3 font-semibold bg-brand text-white hover:bg-brand-dark transition"
                  >
                    Quiero recibir las novedades
                  </button>
                  <p className="text-xs text-ink-soft text-center">
                    Al enviar tus datos aceptas recibir correos de Danzario. Puedes desuscribirte cuando quieras.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="border-t border-line/70 bg-white/70">
          <div className="mx-auto max-w-5xl px-4 py-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-ink">
                  Seguimiento del equipo
                </h2>
                <p className="text-sm text-ink-soft">
                  Guarda y exporta los contactos registrados desde esta misma página.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowAdminPanel((prev) => !prev)}
                className="self-start sm:self-auto rounded-xl border border-line px-4 py-2 text-sm font-medium text-ink hover:bg-background transition"
              >
                {showAdminPanel ? "Ocultar listado" : "Ver listado de correos"}
              </button>
            </div>

            {showAdminPanel && (
              <div className="space-y-6 rounded-2xl border border-line bg-white p-5 shadow-sm">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <p className="text-sm text-ink-soft">Total de personas registradas</p>
                    <p className="text-3xl font-semibold text-ink">{totalLeads}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={handleCopyEmails}
                      className="rounded-xl border border-line px-4 py-2 text-sm font-medium text-ink hover:bg-background transition"
                    >
                      Copiar correos
                    </button>
                    <button
                      type="button"
                      onClick={handleDownloadCsv}
                      className="rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark transition"
                    >
                      Descargar CSV
                    </button>
                  </div>
                </div>

                {adminMessage && (
                  <div className="rounded-xl bg-brand/10 px-4 py-3 text-sm text-brand-dark">
                    {adminMessage}
                  </div>
                )}

                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm">
                    <thead className="text-xs uppercase tracking-wide text-ink-soft border-b border-line">
                      <tr>
                        <th className="py-2 pr-6">Nombre</th>
                        <th className="py-2 pr-6">Correo</th>
                        <th className="py-2 pr-6">Motivación</th>
                        <th className="py-2">Fecha de registro</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line">
                      {leads.length ? (
                        leads
                          .slice()
                          .reverse()
                          .map((lead) => {
                            const formattedDate = new Date(lead.createdAt).toLocaleString("es-CL", {
                              dateStyle: "medium",
                              timeStyle: "short",
                            });

                            return (
                              <tr key={`${lead.email}-${lead.createdAt}`}>
                                <td className="py-3 pr-6 font-medium text-ink">{lead.name || "—"}</td>
                                <td className="py-3 pr-6 text-brand-dark break-all">{lead.email}</td>
                                <td className="py-3 pr-6 text-ink-soft max-w-sm">
                                  {lead.goal ? lead.goal : <span className="italic text-ink-soft/70">Sin comentario</span>}
                                </td>
                                <td className="py-3 text-ink-soft whitespace-nowrap">{formattedDate}</td>
                              </tr>
                            );
                          })
                      ) : (
                        <tr>
                          <td colSpan={4} className="py-6 text-center text-ink-soft">
                            Aún no hay registros guardados.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}