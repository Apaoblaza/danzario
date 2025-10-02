export default function FAQ() {
  const faqs = [
    { q: "¿Cómo funciona el envío?", a: "Hay despachos a todo Chile. El costo y tiempo de envío se calculan automáticamente al momento de la compra." },
    { q: "¿Qué pasa si mi danzario llega dañado?", a: "En ese caso, contáctanos dentro de las primeras 48 horas con fotos del producto y el embalaje. Te enviaremos un reemplazo sin costo adicional." },
    { q: "¿Puedo devolver el danzario si cambio de opinión?", a: "Por ser un producto de edición limitada y de papelería especial, no aceptamos devoluciones por cambio de opinión. Solo se hacen reemplazos en caso de falla o daños de fabricación/envío." },
    { q: "¿Puedo comprarlo como regalo?", a: "¡Sí! El Danzario es ideal para regalar. Puedes indicarlo al momento de la compra y lo enviaremos en un empaque especial a la dirección que nos indiques" },
    { q: "Habrá más ediciones en el futuro?", a: "¡Esta es una edición limitada, por lo que te recomendamos asegurarlo ahora. Habrá futuras ediciones, pero con diseños distintos." },
  ];
  return (
    <section id="faq" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-extrabold">Preguntas frecuentes</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {faqs.map((f, i) => (
            <details key={i} className="card p-6">
              <summary className="cursor-pointer font-semibold">{f.q}</summary>
              <p className="mt-2 text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
