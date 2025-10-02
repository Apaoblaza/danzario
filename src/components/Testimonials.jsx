export default function Testimonials() {
  const items = [
    { name: "Valentina", role: "Estudiante de ballet", text: "Me ayudó a ordenar mis recuerdos y ver cuánto he crecido." },
    { name: "Daniela", role: "Bailarina amateur", text: "Es hermoso; escribir después de clases me mantiene motivada." },
    { name: "Sofía", role: "Madre de alumna", text: "Mi hija ama pegar fotos de sus funciones. Es nuestro ritual." },
  ];
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-extrabold">Lo que dicen</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <blockquote key={i} className="card p-6">
              <p className="text-ink">“{it.text}”</p>
              <footer className="mt-4 text-sm text-ink-soft">
                — {it.name}, {it.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
